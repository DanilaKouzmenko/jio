function getImage(path) {
    var img = new Image();
    img.src = path;
    return img;
}
function getAudio(path) {
    var audio = new Audio();
    audio.src = path;
    return audio;
}
function initAudio(audio, audio_div) {
    audio_div.appendChild(audio);
}
