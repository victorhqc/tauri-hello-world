use serde::Deserialize;

#[derive(Deserialize)]
#[serde(tag = "cmd", rename_all = "camelCase")]
pub enum Cmd {
  SearchMovies {
    needle: String,
    callback: String,
    error: String,
  },
  SearchTaller {
    needle: String,
    callback: String,
    error: String,
  },
}
