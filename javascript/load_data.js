// GET PLAYLISTS from API and displays them in view
const fetchGetPlaylists = () => {
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
const displayPlaylist = (playlist) => {
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
const fetchGetGenres = () => {
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
const displayGenre = (genre) => {
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
const fetchGetFriends = () => {
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
const displayFriendFeed = (frund) => {
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

// Returns array of songs id.
const fetchGetSongsIndex = (albumName) => {
    const urlSearchedAlbum = urlHandler.urlAlbums+`?name=${albumName}`;
    return fetch(urlSearchedAlbum)
    .then((response) => response.json())
    .then((albumFound) => {
        if(albumFound[0].songs.length > 0) {
            return albumFound[0].songs;
        }
    })
    .catch(function(error) {
        console.log("Error happened during loadSongs()");
        console.log(error);
    })
}
const fetchGetSong = async (songId) => {
    const urlSearchedSong = urlHandler.urlSongs+`?id=${songId}`;
    return await fetch(urlSearchedSong)
    .then((response) => response.json())
    .then((song) => {
        // Improve: check whether song's null or not.
        return song;
    })
    .catch(function(error) {
        console.log(`Error happened during getSong(${songId})`);
        console.log(error);
    })
}

//prevNext is either 1 or -1. Go back or foward in list.
const nextSong = (prevNext=1) => {
    songPlaying = songPlaying + prevNext;
    if(songPlaying < 0) {
        songPlaying = songsIndexed.length;
    }
    else if(songPlaying > songsIndexed.length) {
        songPlaying = 0;
    }
    let song = fetchGetSong(songsIndexed[songPlaying]).then(searched => {
        if(searched != null) {
            audio.src = searched.src;
            audio.pause();
            audio.load();
            audio.play();
        }
    });

}
fetchGetPlaylists();
fetchGetGenres();
fetchGetFriends();

let songsIndexed = fetchGetSongsIndex('reload').then((response) => {return response});
// songsIndexed = Promise.resolve(songsIndexed);
let songPlaying = 0; //Index of songsIndexed
const audio = document.getElementById("audioControls");
audio.addEventListener('ended', nextSong);
// nextSong(1);
