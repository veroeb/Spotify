const makeSearch = () => {
	var search = document.getElementById("searchTerms").value;
	search = search.toLowerCase();
	resetSearchSection();
	searchArtists(search);
	searchAlbums(search);
}
const displayMessage = () => {
	console.log("Not found");
}
// Fetch GET artists by name
const searchArtists = (searchTerm) => {
	fetch(urlHandler.urlArtists+`?name=${searchTerm}`)
	.then((response) => response.json())
	.then((artistsFound) => {
		if(artistsFound.length > 0) {
			artistsFound.map(loadArtist);
		} else {
			displayMessage();
		}
	})
	.catch(function(error) {
		console.log(`Error during searchArtists(${searchTerm})`);
		console.log(error);
	})
}
const loadArtist = (artist) => {
    var artistBox = document.getElementById('artistsContent');
    var content = '<h2>ARTISTS</h2><br><div>\
            <img src="../media/razorsedge"/>\
            <div>\
                <h3>'+nameCapitalized(artist.name)+'</h3>\
            </div>\
        </div>';
    artistBox.innerHTML = content;
}
// Fetch GET albums by name
const searchAlbums = (searchTerm) => {
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
const loadAlbum = (album) => {//Does not display artist properly.
    var albumBox = document.getElementById('albumsContent');
    var content = '<div>\
            <img src="../media/razorsedge"/>\
            <div>\
                <h3>'+nameCapitalized(album.name)+'</h3>\
				<p>'+album.artists+'</p>\
            </div>\
        </div>';
    albumBox.innerHTML = content;
}
// Fetch GET artist by id
const getAlbumArtist = (artistId) => {

}
