#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod cmd;
use dotenv::dotenv;
use rust_core::{
  db_pool,
  movies::{
    parallel_search_movies_by_name, parallel_search_movies_where_actress_is_taller_than_star,
    MoviesError,
  },
  DbError,
};
use snafu::{ResultExt, Snafu};
use std::env;

fn main() {
  dotenv().ok();
  tauri::AppBuilder::new()
    .invoke_handler(|webview, arg| {
      use cmd::Cmd::*;
      match serde_json::from_str(arg) {
        Err(e) => Err(e.to_string()),
        Ok(command) => {
          match command {
            SearchMovies {
              needle,
              callback,
              error,
            } => tauri::execute_promise(
              webview,
              move || {
                let db_path = env::var("DB_PATH").unwrap();
                let pool = db_pool(Some(db_path.clone())).unwrap();
                let res = parallel_search_movies_by_name(&pool, &needle).context(MoviesIssue)?;

                Ok(res)
              },
              callback,
              error,
            ),
            SearchTaller {
              needle,
              callback,
              error,
            } => tauri::execute_promise(
              webview,
              move || {
                let db_path = env::var("DB_PATH").unwrap();
                let pool = db_pool(Some(db_path.clone())).unwrap();
                let res = parallel_search_movies_where_actress_is_taller_than_star(&pool, &needle)
                  .context(MoviesIssue)?;

                Ok(res)
              },
              callback,
              error,
            ),
          }
          Ok(())
        }
      }
    })
    .build()
    .run();
}

#[derive(Debug, Snafu)]
pub enum MoviesTaskError {
  #[snafu(display("Failed to work with DB: {}", cause))]
  DBIssue {
    #[snafu(source)]
    cause: DbError,
  },

  #[snafu(display("Movies failed: {}", cause))]
  MoviesIssue {
    #[snafu(source)]
    cause: MoviesError,
  },
}
