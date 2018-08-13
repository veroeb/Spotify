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



// let artistsFound = []

// function searchArtists(searchTerm){
//     for (i=0; i < artists.length; i++){
//         if (artists[i].name = searchTerm){
//             artistsFound = artists[i];
//         }
//     }
// }



// let albums = [
// 	{
// 		id: 1,
// 		name: 'Black',
// 		artists: [1, 2],
// 		songs: [1]
//     },
//     {
// 		id: 2,
// 		name: 'Dark necessities',
// 		artists: [1],
// 		songs: [2]
// 	}
// ];

// let songs = [
// 	{
// 		id:1,
// 		name: 'A song',
// 		artists: [1, 2],
// 		genreId: 1
// 	}
// ]

// let genres = [
// 	{
// 		id:1,
// 		name:'Rock'
// 	}
// ];

// let playLists = [
// 	{
// 		id: 1,
// 		name: 'Chill',
// 		description: 'Songs to chill down',
// 		image: 'https://cloudfront.dappered.com/wp-content/uploads/2016/08/Playlist_Header_large_posterized.jpg',
// 		songs: [1,2]
// 	}
// ];

// let artists = ["Metallica","Linkin Park"];

// function searchSomething()
// {
// 	let text = document.getElementById("searchTerms").value;
// 	// let index = artists.indexOf(text);
// 	let index = artists.find(text);

// 	if (index != -1)
// 	{
// 		alert("Existe!");
// 	}
// 	else
// 	{
// 		alert("No existe!");
// 	}
// }

// function searchSomething(array, key, value)
// {
// 	for (var i = 0; i < array.length; i++)
// 	{
// 		if (array[i][key] === value)
// 		{
// 			return array[i];
// 		}
// 		return null;
// 	}
// }

// var obj = searchSomething(artists, 'searchTerms', 3);
// var obj = objArray.find(function (obj) { return obj.id === "searchTerms"; });

function searchSomething(artists)
{
	alert("existe!");
	return artists.name === document.getElementById("searchTerms");
}

// const searchSomething = artists.find(artist => artist.name === 'searchTerms');
// alert(searchSomething);

// function searchArtists(nameKey, myArray)
// {
// 	for(var i=0; i < myArray.length; i++)
// 	{
// 		if (myArray[i].name === nameKey)
// 		{
// 			alert("existe" + myArray[i]);
// 			return myArray[i];
// 		}
// 	}
// }

// var resultObject = searchArtists("#searchTerms", artists)
