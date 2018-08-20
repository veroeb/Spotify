// Get playlists from API and displays them in view
function getPlaylists() {
    fetch(urlHandler.urlPlaylists)
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
    anchor.href = '#';
    anchor.title = `${playlist.description}`;
    var name = `${playlist.name}`;
    anchor.innerHTML = nameCapitalized(name);// equals to: "'"+playlist.name+"'"
    append(li, anchor);
    append(playlistElement, li);
}

function loadSongs() {
    fetch(urlHandler.urlAlbums)
    .then((response) => response.json())
    .then(async function(data) {
        let albumFound = data;
        let albumSongs = albumFound[0].songs;
        // let songsList = albumSongs.map(getSong);
        var songsList = [];
        var songObj;
        for(const item of albumSongs) {
            songObj = await getSong(item);
            console.log("geu: "+songObj);
            songsList.push(songObj);
        }
        console.log("YO!");
        Promise.all(songsList).then(results=>{
            console.log("HERE : "+ results);
        });
    })
    .catch(function(error) {
        console.log("Error happened during loadSongs()");
        console.log(error);
    })
}
async function getSong(songId) {
    const urlSearchedSong = urlHandler.urlSongs+`?id=${songId}`;
    //var urlSearchedSong = `${urlSongs}?id=${songId}`;
    fetch(urlSearchedSong)
    .then((response) => response.json())
    .then(function(song) {
        var d = song;
        console.log(d);
        return d;
    })
    .catch(function(error) {
        console.log(`Error happened during getSong(${songId})`);
        console.log(error);
    })
}

getPlaylists();
// console.log('bye');
