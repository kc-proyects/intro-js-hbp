/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName, songs = []) => {
      const newPlaylist = {
          name: playlistName,
          songs: songs,
      };
    
      playlists = [...playlists, newPlaylist];
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => {
    return playlists;
  };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
    const removePlaylist = (playlistName) => {
      playlists = playlists.filter(playlist => playlist.name !== playlistName);
    };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    playlists = playlists.map((playlist) =>
        playlist.name === playlistName
            ? { ...playlist, songs: [...playlist.songs, song] } // copia de la playlist con la nueva cancion
            : playlist
        );
  };

  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {
    const playlistSelected = playlists.find((playlist) => playlist.name === playlistName);
    playlistSelected.songs = playlistSelected.songs.filter(song => song.title !== title);
  };

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */

  // COMENTARIO: entiendo que solo puede haber una cancion favorita por playlist.
  const favoriteSong = (playlistName, title) => {
    playlists = playlists.map((playlist) => {
        if (playlist.name !== playlistName) return playlist;

        return {
            ...playlist,
            songs: playlist.songs.map((song) => ({
                ...song,
                favorite: song.title === title
            }))
        };
    });
  };

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {
    const playlistSelected = playlists.find((playlist) => playlist.name === playlistName);
    const sortedSongs = playlistSelected.songs.sort((a, b) => {
      if (criterion === 'title' || criterion === 'artist') {
        return a[criterion].localeCompare(b[criterion]);
      }
      //if (criterion === 'duration') {
      //  return a;
      //}       
    });

    return sortedSongs;
  };

  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};

// Codigo facilitado por Kevin en la correcion de la practica, para comprobar si el comportamiento es el correcto (inmutabilidad de playlists):
const catalog = musicCatalog();
const song = {
    title: "VIP",
    artist: "44 Kid",
    genre: "Trap",
    duration: 3.30
};
catalog.createPlaylist('Trap');
catalog.createPlaylist('Pop');
catalog.addSongToPlaylist('Trap', song);
const originalPlaylistWithoutPopSong = catalog.getAllPlaylists();
console.log(originalPlaylistWithoutPopSong); // Pop no tiene canciones en esta variable
catalog.addSongToPlaylist('Pop', song);
const playlistAfterAddingSongToPop = catalog.getAllPlaylists();
console.log(playlistAfterAddingSongToPop); // Esta variable que fue escrita después de añadir una canción a pop tiene ese cancion
console.log(originalPlaylistWithoutPopSong); // la variable anterior no debería de cambiar ya que fue definida antes de añadir la canción. Pero con tú codigo si lo hace lo cual está mal

export default musicCatalog;
