let artists = [
	{
		id: 1,
		name: 'Metallica'
	},
	{
		id: 2,
		name: 'Red Hot Chilli Peppers'
	},
	{
		id: 3,
		name: 'Gorillaz'
	}
]
let albums = [
	{
		id: 1,
		name: 'Reload',
		artists: [1],
		songs: [1, 2, 3]
    },
	{
		id: 2,
		name: 'Hardwired',
		artists: [1],
		songs: [4, 5]
    },
	{
		id: 3,
		name: 'The Gateway',
		artists: [6, 7 , 8],
		songs: []
    },
	{
		id: 4,
		name: "I'm With You",
		artists: [2],
		songs: [9, 10]
    },
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
		name: 'The Memory Remains',
		artists: [1],
		genreId: 1
	},
	{
		id:3,
		name: "Devil's Dance",
		artists: [1],
		genreId: 1
	},
	{
		id:4,
		name: "Hardwired",
		artists: [1],
		genreId: 1
	},
	{
		id:5,
		name: "Atlas, Rise!",
		artists: [1],
		genreId: 1
	},
	{
		id:6,
		name: 'The Gateway',
		artists: [2],
		genreId: 2
	},
	{
		id:7,
		name: 'Dark Necessities',
		artists: [2],
		genreId: 2
	},
	{
		id:8,
		name: 'We Turn Red',
		artists: [2],
		genreId: 2
	},
	{
		id:9,
		name: 'Monarchy Of Roses',
		artists: [2],
		genreId: 2
	},
	{
		id:10,
		name: 'Factory Of Faith',
		artists: [2],
		genreId: 2
	},

]
let genres = [
    {
		id:1,
		name:'Metallica Genre'
	},
    {
		id:2,
		name:'Rock, Chillout'
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

let users = []
let friends = []
