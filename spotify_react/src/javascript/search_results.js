function makeSearch() {
	var search = document.getElementById("searchTerms").value;
	search = search.toLowerCase();
	resetSearchSection();
	searchArtists(search);
	searchAlbums(search);
}

function searchArtists(searchTerm){
	fetch(urlHandler.urlArtists+`?name=${searchTerm}`)
	.then((response) => response.json())
	.then(function(artistsFound) {
		console.log("searchArtists: "+artistsFound );//Doesnt show as array?
		artistsFound.map(loadArtist);
	})
	.catch(function(error) {
		console.log(`Error during searchArtists(${searchTerm})`);
		console.log(error);
	})
}
function loadArtist(artist) {
    var artistBox = document.getElementById('artistsContent');
    var content = '<h2>ARTISTS</h2><br><div>\
            <img src="../media/razorsedge"/>\
            <div>\
                <h3>'+nameCapitalized(artist.name)+'</h3>\
            </div>\
        </div>';
    artistBox.innerHTML = content;
}

function searchAlbums(searchTerm){
	fetch(urlHandler.urlAlbums+`?name=${searchTerm}`)
	.then((response) => response.json())
	.then(function(albumsFound) {
		albumsFound.map(loadAlbum);
	})
	.catch(function(error) {
		console.log(`Error during searchAlbums(${searchTerm})`);
		console.log(error);
	})
}
function loadAlbum(album) {
    var albumBox = document.getElementById('albumsContent');
    var content = '<div>\
            <img src="../media/razorsedge"/>\
            <div>\
                <h3>'+nameCapitalized(album.name)+'</h3>\
				<p>'+album.songs+'</p>\
            </div>\
        </div>';
    albumBox.innerHTML = content;
}

function getAlbumArtist(artistId) {
    for(index = 0; index < artists.length; index++) {
        if(artists[index].id === artistId) {
            return artists[index];
        }
    }
}
