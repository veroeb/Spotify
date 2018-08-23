// GET PLAYLISTS from API and displays them in view
function fetchGetPlaylists() {
    fetch(urlHandler.urlPlaylists)
    .then((response) => response.json())
    .then(function(playlistsFound) {
        playlistsFound.forEach(displayPlaylist);
    })
    .catch(function(error) {
        console.log("Error happened during fetchGetPlaylists()");
        console.log(error);
    });
}
// Display playlist in view
function displayPlaylist(playlist) {
    var playlistElement = document.getElementById('nav_playlist')
    let li = createNode('li'),
    anchor = createNode('a');
    anchor.href = '#';
    anchor.title = `${playlist.description}`;
    anchor.innerHTML = nameCapitalized(playlist.name);
    append(li, anchor);// Append order matters..
    append(playlistElement, li);
}

// GET GENRES from API and displays them in view
function fetchGetGenres() {
    fetch(urlHandler.urlPlaylists)
    .then((response) => response.json())
    .then(function(genresFound) {
    genresFound.forEach(displayGenre);
    })
    .catch(function(error) {
        console.log("Error happened during fetchGetGenres()");
        console.log(error);
    });
}
// Displays genre in view
function displayGenre(genre) {
    var genreContent = document.getElementById('genreContent');
    let div = createNode('div'),
        img = createNode('img'),
        p = createNode('p');
    div.className = 'genreItem';
    img.src = '../media/musicthum.svg';
    p.innerHTML = nameCapitalized(genre.name);
    append(div, img);// Append order matters.
    append(div, p);
    append(genreContent, div);
}

// GET FRIENDS from API and displays them in view
function fetchGetFriends() {
    fetch(urlHandler.urlFriends)
    .then((response) => response.json())
    .then(function(friendsFound) {
    friendsFound.forEach(displayFriendFeed);
    })
    .catch(function(error) {
        console.log("Error happened during fetchGetFriends()");
        console.log(error);
    });
}
// Displays friend feed in view
function displayFriendFeed(frund) {
    var friendFeed = document.getElementById('friendActivity');
    let li = createNode('li'),
        friendName = createNode('p'),
        friendSong = createNode('p'),
        friendArtist = createNode('p');
    friendName.innerHTML = nameCapitalized(frund.name);
    friendSong.innerHTML = nameCapitalized(frund.song);
    friendArtist.innerHTML = nameCapitalized(frund.artist);
    append(li, friendName);// Append order matters.
    append(li, friendSong);
    append(li, friendArtist);
    append(friendFeed, li);
}

function fetchGetSongsIndex() {
    fetch(urlHandler.urlAlbums)
    .then((response) => response.json())
    .then(function(data) {
        let albumFound = data;
        let albumSongs = albumFound[0].songs;
        var songsList = [];
        return songsList;
        // var songObj;
        // for(const item of albumSongs) {
        //     songObj = await getSong(item);
        //     console.log("geu: "+songObj);
        //     songsList.push(songObj);
        // }
        // Promise.all(songsList).then(results=>{
        //     console.log("HERE : "+ results);
        // });
    })
    .catch(function(error) {
        console.log("Error happened during loadSongs()");
        console.log(error);
    })
}
function fetchGetSong(songId) {
    const urlSearchedSong = urlHandler.urlSongs+`?id=${songId}`;
    fetch(urlSearchedSong)
    .then((response) => response.json())
    .then(function(song) {
        console.log(song);
        return song;
    })
    .catch(function(error) {
        console.log(`Error happened during getSong(${songId})`);
        console.log(error);
    })
}

var songsIndexed = [2,8,9,4];
var songPlaying = 0; //Index of songsIndexed
const audio = document.getElementById("audioControls");
audio.addEventListener('ended', nextSong);

//prevNext is either 1 or -1. Go back or foward in list.
function nextSong(prevNext=1) {
    if(songsIndexed.length === songPlaying) songPlaying = 0;
    else songPlaying = songPlaying + prevNext;
    var song = fetchGetSong(songPlaying);
    if(song != null) {
        audio.src = song.src;
        audio.pause();
        audio.load();
        audio.play();
    }
}
fetchGetPlaylists();
fetchGetGenres();
fetchGetFriends();
// console.log('bye');
