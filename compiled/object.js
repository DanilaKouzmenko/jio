"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = exports.GameObject = exports.pos = void 0;
var pos = /** @class */ (function () {
    function pos(x, y) {
        this.x = x;
        this.y = y;
    }
    pos.zeros = function () {
        return new pos(0, 0);
    };
    pos.ones = function () {
        return new pos(1, 1);
    };
    return pos;
}());
exports.pos = pos;
var GameObject = /** @class */ (function () {
    function GameObject(x, y) {
        this.scripts = {};
        this.textures = {};
        this.rotation = 0;
        this.scale = pos.ones();
        this.children = [];
        this.show = true;
        this.texture_now = '';
        this.position = new pos(x, y);
    }
    return GameObject;
}());
exports.GameObject = GameObject;
var Camera = /** @class */ (function () {
    function Camera(canvas_context, standart_color) {
        this.scripts = {};
        this.position = pos.zeros();
        this.standart_color = "black";
        this.ctx = canvas_context;
    }
    Camera.prototype.render = function (layers) {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, 10000, 10000);
        for (var _i = 0, layers_1 = layers; _i < layers_1.length; _i++) {
            var layer = layers_1[_i];
            for (var _a = 0, layer_1 = layer; _a < layer_1.length; _a++) {
                var object = layer_1[_a];
                if (object.children != null) {
                    this.render([object.children]);
                }
                else {
                    var texture = object.textures[object.texture_now];
                    this.ctx.drawImage(texture, object.position.x - this.position.x, object.position.y - this.position.y, texture.width * object.scale.x, texture.width * object.scale.y);
                }
            }
        }
    };
    return Camera;
}());
exports.Camera = Camera;
