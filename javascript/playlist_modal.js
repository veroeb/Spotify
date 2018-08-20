// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function createPlaylist() {
    var url = 'http://localhost:3000/playlists';
    var playlist = getCreatedPlaylist();
    var fetchData = {
        method: 'POST',
        body: playlist,
        headers: new Headers()
    }
    fetch(url, fetchData)
    .then(function() {
        // To Do
    })
}
function getCreatedPlaylist() {
    return {
        id: getLastId();
        name: '',
        description: '',
        image: '',
        songs: []
    }
}
function getLastId() {
    return 42;
}
