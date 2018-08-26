import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const URL = 'http://localhost:3000/';
const urlHandler = {
    url: URL,
    urlSongs: `${URL}songs`,
    urlArtists: `${URL}artists`,
    urlAlbums: `${URL}albums`,
    urlPlaylists: `${URL}playlists`,
    urlGenres: `${URL}genres`,
    urlFriends: `${URL}friends`
};

function nameCapitalized(name) {
	return name.charAt(0).toUpperCase()+name.slice(1);
}

function SiteContainer() {
    return (
    <div id="site_container">
        <MainContainer />
        <Footer />
    </div>
    );

}
function MainContainer() {
    return (
    <div id="main_container">
        <Cover />
        <ContainerCenter />
        <SideBar />
    </div>
    );
}
function Cover() {
    return (
    <div className="cover">
        <Navigation />
        <SongCover />
    </div>
    );
}
function SongCover() {
    return (
    <div className="songCover">
        <div>
            <button id="myBtn">
                <i className="material-icons">add_circle_outline</i>
                <p>New Playlist</p>
            </button>
        </div>
        <div>
            <img src={require("./media/fallout.jpg")} alt="Foto"/>
        </div>
    </div>
    );
}
function Navigation() {
    return (
    <nav id="navigation">
        <h3>Browse</h3>
        <ul id="library">
            <li><h4>YOUR LIBRARY</h4></li>
            <li><a href="#">Your Daily Mix</a></li>
            <li><a href="#">Recently Played</a></li>
            <li><a href="#">Songs</a></li>
            <li><a href="#">Albums</a></li>
            <li><a href="#">Artists</a></li>
            <li><a href="#">Stations</a></li>
            <li><a href="#">Local Files</a></li>
            <li><a href="#">Podcasts</a></li>
            <li><h4>PLAYLISTS</h4></li>
            <Playlist />
        </ul>
    </nav>);
}
class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = { playlists: [], };
    }
    componentDidMount() {
        //Looking for a way to call a function with the fecth.
        fetch(urlHandler.urlPlaylists)
        .then(response => response.json())
        .then((playlistsFound) => {
            let playlists = playlistsFound.map(displayPlaylist);
            this.setState({playlists: playlists});
        })
        .catch(function(error) {
            console.log("Error happened during fetchGetPlaylists()");
            console.log(error);
        });
    }
    render() {
        return (
            <div id="nav_playlist">
                {this.state.playlists}
            </div>
        );
    }
}
// Create element for playlist display
function displayPlaylist(playlist) {
    return (
        <li key={playlist.name}>
            <a href='#' title={playlist.description}>
                {nameCapitalized(playlist.name)}
            </a>
        </li>
    );
}
class BrowseGenre extends Component {
    constructor(props) {
        super(props);
        this.state = { genres : [], };
    }
    componentDidMount() {
        fetch(urlHandler.urlPlaylists)
        .then((response) => response.json())
        .then((genresFound) => {
            let genres = genresFound.map(displayGenre);
            this.setState({genres: genres});
        })
        .catch(function(error) {
            console.log("Error happened during fetchGetGenres()");
            console.log(error);
        });
    }
    render() {
        return (
            <div id="genreContent">
                {this.state.genres}
            </div>
        );
    }
}
// Displays genre in view
function displayGenre(genre) {
    return (
        <div key={genre.name} className="genreItem">
            <img src="../src/media/musicthum.svg" alt="Can not load image"/>
            <p>{nameCapitalized(genre.name)}</p>
        </div>
    );
}
function ContainerCenter() {
    return (
        <div>
        <Header />
        <MainSection />
        </div>
    );
}
function Header() {
    return (
        <div>
            <header id="header">
                <div>
                    <i className="material-icons">keyboard_arrow_left</i>
                    <i className="material-icons">keyboard_arrow_right</i>
                </div>
                <input id="searchTerms" type="text" placeholder="Song, artist, album" />
                <button>Search</button>
            </header>
        </div>
    );
}
function MainSection() {
    return (
        <div>
            <section id="section">
                <BrowseGenre />
            </section>
        </div>
    )
}
function SideBar() {
    return (
    <aside id="sidebar">
        <h4>Friend Activity</h4>
        <ul id="friendActivity"></ul>
    </aside>
    );
}
function Footer() {
    return (
        <footer id="footer">
            <div className="foot_content">
                <div>
                    <h3 className="songTitle">Fourth of July</h3>
                    <p className="songArtist">Fall Out Boy</p>
                </div>
                <audio id="audioControls" controls>
                    <source src="" type="audio/mpeg" />
                    Your browser does not support the <code>audio</code> element.
                </audio>
            </div>
        </footer>
    );
}
ReactDOM.render(
    <SiteContainer />,
    document.getElementById('root')
);
