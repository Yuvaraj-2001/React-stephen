import { createRandomSong } from "../data";


import { addSong, removeSong } from "../store/index";
import { useDispatch, useSelector } from "react-redux";

console.log(addSong);

function SongPlaylist() {
  // To Do:
  // Get list of songs
  const dispatch = useDispatch();

  const songsPlaylist = useSelector((state)=> {
    return state.songs;
  });


  const handleSongAdd = (song) => {
    dispatch(addSong(song));
  };
  const handleSongRemove = (song) => {
    const index = songsPlaylist.indexOf(song);
    dispatch(removeSong(index));

    // To Do:
    // Remove song from list of songs
  };

  const renderedSongs = songsPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
