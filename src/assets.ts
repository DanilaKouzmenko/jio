function getImage(path : string) : HTMLImageElement{
        const img = new Image();
        img.src = path;
        return img;
}

function getAudio(path : string) : HTMLAudioElement{
        const audio = new Audio();
        audio.src = path;
        return audio
}

function initAudio( audio : HTMLAudioElement, audio_div : HTMLDivElement){
    audio_div.appendChild( audio );
}