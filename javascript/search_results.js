// let input = document.getElementById("searchTerms");
// input.addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("searchButton").click();
//     }
// });

let artists = [
	{
		id: 1,
		name: 'Metallica'
	},
	{
		id: 2,
		name: 'Red Hot Chilli Peppers'
	}
]
let albums = [
	{
		id: 1,
		name: 'Reload',
		artists: [1],
		songs: [1]
    },
    {
		id: 2,
		name: 'Dark necessities',
		artists: [2],
		songs: [2]
	}
];
let songs = [
    {
		id:1,
		name: 'Fuel',
		artists: [1],
		genreId: 1
	},
    {
		id:2,
		name: 'Dark necessities',
		artists: [2],
		genreId: 2
	}
]
let genres = [
    {
		id:1,
		name:'Metallica'
	},
    {
		id:2,
		name:'RHCP'
	}
];
let playLists = [
	{
		id: 1,
		name: 'Chill',
		description: 'Metallica and red hots',
		image: 'https://cloudfront.dappered.com/wp-content/uploads/2016/08/Playlist_Header_large_posterized.jpg',
		songs: [1,2]
	}
];


var artistsFound = []
function searchArtists(searchTerm){
    for (i=0; i < artists.length; i++){
        if (artists[i].name === searchTerm){
            artistsFound.push(artists[i]);
        }
    }
}
var albumsFound = []
function searchAlbums(searchTerm){
    for (i=0; i < albums.length; i++){
        if (albums[i].name === searchTerm){
            albumsFound.push(albums[i]);
        }
    }
}
function searchSomething()
{
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
