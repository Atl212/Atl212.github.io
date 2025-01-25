import Viewer from 'assets/dist/viewerjs-1.11.7/dist/viewer.js';

var image = new Viewer(document.getElementById('image'),{
    url: 'data-original'
});

var images = new Viewer(document.getElementById('images'),{
    url: 'data-original'
});
