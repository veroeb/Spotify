function searchArtists(searchTerm){
	var artistsFound = [];
    for (var i=0; i < artists.length; i++){
        if (artists[i].name === searchTerm){
            artistsFound.push(artists[i]);
        }
    }
	return artistsFound;
}
function searchAlbums(searchTerm){
	var albumsFound = []
    for (var i=0; i < albums.length; i++){
        if (albums[i].name === searchTerm){
            albumsFound.push(albums[i]);
        }
    }
	return albumsFound;
}

function makeSearch() {
	var search = document.getElementById("searchTerms").value;
	searchAlbums(search);
    loadContent();
}

function loadContent() {
    var albums = document.getElementById('albumsContent');
    for(index = 0; index < albumsFound.length; index++) {
        var artist = getAlbumArtist(albumsFound[index].artists[0]);
        var content = '<div>\
                <img src="../media/razorsedge"/>\
                <div>\
                    <h3>'+albumsFound[index].name+'</h3>\
                    <p>'+artist.name+'</p>\
                </div>\
            </div>';
        albums.innerHTML = content;
    }
}
function getAlbumArtist(artistId) {
    for(index = 0; index < artists.length; index++) {
        if(artists[index].id === artistId) {
            return artists[index];
        }
    }
}
