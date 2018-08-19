const playlistElement = document.getElementById('nav_playlist');
const url = 'http://localhost:3000/';
const urlSongs = `${url}songs`;// url+'songs'
const urlAlbums = `${url}albums`;
const urlPlaylists = `${url}playlists`;

function createNode(element) {
    return document.createElement(element);
}
function append(parent, element) {
    return parent.appendChild(element);
}

// Get playlists from API and displays them in view
function getPlaylists() {
    fetch(urlPlaylists)
    .then((response) => response.json())
    .then(function(data) {
        let playlistsFound = data;
        return playlistsFound.map(displayPlaylist);//Why not use 'data'?
    })
    .catch(function(error) {
        console.log("Error happened during getPlaylists()");
        console.log(error);
    });
}
// Display playlist in view
function displayPlaylist(playlist) {
    let li = createNode('li'),
        anchor = createNode('a');
    anchor.href = '#'
    anchor.title = `${playlist.description}`
    anchor.innerHTML = `${playlist.name}`;// equals to: "'"+playlist.name+"'"
    append(li, anchor);
    append(playlistElement, li);
}

function loadSongs() {
    var urlAlb = `${urlAlbums}?id=1`;
    fetch(urlAlb)
    .then((response) => response.json())
    .then(function(data) {
        let albumFound = data;
        let albumSongs = albumFound[0].songs;
        let objs = albumSongs.map(getSong);
        return objs;
    })
    .catch(function(error) {
        console.log("Error happened during loadSongs()");
        console.log(error);
    })
}
const getSong = async (songId) => {
    var urlSearchedSong = `${urlSongs}?id=${songId}`;
    const response = await fetch(urlSearchedSong);
    const json = await response.json();
    (json) => {
        console.log(song[0]);
        return song[0];
    }
}
getPlaylists();
// console.log('bye');
console.log(loadSongs());
