import {GameObject, pos} from './object.js';

export class Game{
    html : Document;
    canvas : HTMLCanvasElement | null;
    ctx : CanvasRenderingContext2D | WebGLRenderingContext | null;
    audio_core : HTMLDivElement | null;
    scenes : { [key : string] : Scene } = {};
    // game data
    title : string;
    screen_size : pos;
    favicon : string;
    
    constructor( html_document : Document,
        title : string = "JIO Engine Project",
        screen_size : pos = new pos(800, 600),
        favicon : string = 'https://github.com/DanilaKouzmenko/jio/blob/main/favicon.jpg?raw=true',
    ){
        this.html = html_document;
        this.canvas = null;
        this.ctx = null;
        this.audio_core = null;
        this.title = title;
        this.screen_size = screen_size;
        this.favicon = favicon;
    }

    initHTML(){
        const old_head = this.html.querySelector('head');
        const old_body = this.html.querySelector('body');
        old_head?.remove();
        old_body?.remove();

        // making new head
        const head = this.html.createElement('head');
            const meta1 = this.html.createElement('meta');
            meta1.name = "viewport";
            meta1.content = "width=device-width, initial-scale=1.0";
            const title = this.html.createElement('title');
            title.innerHTML = this.title;
            const script = this.html.createElement('script');
            script.type = "module";
            script.src = "main.ts";
            const style = this.html.createElement('style');
            style.innerHTML = ".hidden{ display:none; }body{ margin:0; }";
            const favicon = this.html.createElement('link');
            favicon.rel = 'shortcut icon';
            favicon.type="image/x-icon"
            if (this.favicon != ''){
                favicon.href = this.favicon
            }
            else {
                favicon.href = "https://github.com/DanilaKouzmenko/jio/blob/main/favicon.jpg?raw=true"
            }
            head.appendChild(meta1);
            head.appendChild(title);
            head.appendChild(script);
            head.appendChild(style);
            head.appendChild(favicon);

        // making new body
        const body = this.html.createElement('body');
            const audio_container = this.html.createElement('div');
            audio_container.id = "audio";
            audio_container.classList.add("hidden");
            const canvas = this.html.createElement('canvas');
            canvas.width = this.screen_size.x;
            canvas.height = this.screen_size.y;
            canvas.id = 'canv';
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            body.appendChild(audio_container);
            body.appendChild(canvas);
            this.audio_core = audio_container;

        document.appendChild(head);
        document.appendChild(body);
    }

    addScene( name : string, scene : Scene ){
        this.scenes[name] = scene;
    }
}

export class Scene{
    layers : GameObject[][] = [[], [], [], [], [], [], [], [], [], []];
    constructor(){
        
    }
}