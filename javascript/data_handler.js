const urlV = 'http://localhost:3000/';
const urlSongsV = `${urlV}songs`;// url+'songs'
const urlArtistsV = `${urlV}artists`;
const urlAlbumsV = `${urlV}albums`;
const urlPlaylistsV = `${urlV}playlists`;

const urlHandler = {
    url: urlV,
    urlSongs: urlSongsV,
    urlArtists: urlArtistsV,
    urlAlbums: urlAlbumsV,
    urlPlaylists: urlPlaylistsV
};

function nameCapitalized(name) {
	return name.charAt(0).toUpperCase()+name.slice(1);
}
