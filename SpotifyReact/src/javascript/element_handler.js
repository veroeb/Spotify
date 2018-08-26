let sectionElement = document.getElementById('section');

function createNode(element) {
    return document.createElement(element);
}
function append(parent, element) {
    return parent.appendChild(element);
}

function resetBrowseSection() {
    sectionElement.innerHTML = '<div class="grid-container">';
}
function resetSearchSection() {
    sectionElement.innerHTML = `
        <div id="songsContent"></div>
        <div id="artistsContent" class="searchContent"></div>
        <div id="albumsContent" class="searchContent"></div>
    `;
}
