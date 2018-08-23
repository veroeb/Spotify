const URL = 'http://localhost:3000/';
const urlHandler = {
    url: URL,
    urlSongs: `${URL}songs`,
    urlArtists: `${URL}artists`,
    urlAlbums: `${URL}albums`,
    urlPlaylists: `${URL}playlists`,
    urlGenres: `${URL}genres`,
    urlFriends: `${URL}friends`
};

function nameCapitalized(name) {
	return name.charAt(0).toUpperCase()+name.slice(1);
}
