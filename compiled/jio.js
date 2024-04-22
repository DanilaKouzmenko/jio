"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = exports.Game = void 0;
var object_js_1 = require("./object.js");
var Game = /** @class */ (function() {
    function Game(html_document, title, screen_size, favicon) {
        if (title === void 0) { title = "JIO"; }
        if (screen_size === void 0) { screen_size = new object_js_1.pos(800, 600); }
        if (favicon === void 0) { favicon = 'https://github.com/DanilaKouzmenko/jio_empty_project/blob/main/assets/favicon.png?raw=true'; }
        this.scenes = {};
        this.html = html_document;
        this.canvas = null;
        this.ctx = null;
        this.audio_core = null;
        this.title = title;
        this.screen_size = screen_size;
        this.favicon = favicon;
    }
    Game.prototype.initHTML = function() {
        var old_head = this.html.querySelector('head');
        var old_body = this.html.querySelector('body');
        old_head === null || old_head === void 0 ? void 0 : old_head.remove();
        old_body === null || old_body === void 0 ? void 0 : old_body.remove();
        // making new head
        var head = this.html.createElement('head');
        var meta1 = this.html.createElement('meta');
        meta1.name = "viewport";
        meta1.content = "width=device-width, initial-scale=1.0";
        var title = this.html.createElement('title');
        title.innerHTML = this.title;
        var script = this.html.createElement('script');
        script.type = "module";
        script.src = "main.ts";
        var style = this.html.createElement('style');
        style.innerHTML = ".hidden{ display:none; }body{ margin:0; }";
        var favicon = this.html.createElement('link');
        favicon.rel = 'shortcut icon';
        favicon.type = "image/x-icon";
        if (this.favicon != '') {
            favicon.href = this.favicon;
        } else {
            favicon.href = "https://github.com/DanilaKouzmenko/jio_empty_project/blob/main/assets/favicon.png?raw=true";
        }
        head.appendChild(meta1);
        head.appendChild(title);
        head.appendChild(script);
        head.appendChild(style);
        head.appendChild(favicon);
        // making new body
        var body = this.html.createElement('body');
        var audio_container = this.html.createElement('div');
        audio_container.id = "audio";
        audio_container.classList.add("hidden");
        var canvas = this.html.createElement('canvas');
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
    };
    Game.prototype.addScene = function(name, scene) {
        this.scenes[name] = scene;
    };
    return Game;
}());
exports.Game = Game;
var Scene = /** @class */ (function() {
    function Scene() {
        this.layers = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
    }
    return Scene;
}());
exports.Scene = Scene;