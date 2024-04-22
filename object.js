"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = exports.GameObject = exports.pos = void 0;
var pos = /** @class */ (function () {
    function pos(x, y) {
        this.type = "pos";
        this.x = x;
        this.y = y;
    }
    pos.zeros = function () {
        return new pos(0, 0);
    };
    pos.ones = function () {
        return new pos(1, 1);
    };
    pos.prototype.add = function (other) {
        if (typeof other == 'number') {
            return new pos(this.x + other, this.y + other);
        }
        else if (other.type == 'pos') {
            return new pos(this.x + other.x, this.y + other.y);
        }
    };
    pos.prototype.sub = function (other) {
        if (typeof other == 'number') {
            return this.add(-other);
        }
        else if (other.type == 'pos') {
            return new pos(this.x - other.x, this.y - other.y);
        }
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
        this.data = {};
        this.sounds = {};
        this.position = new pos(x, y);
    }
    GameObject.prototype.useScript = function (key) {
        this.scripts[key](this);
    };
    return GameObject;
}());
exports.GameObject = GameObject;
var Camera = /** @class */ (function () {
    function Camera(canvas_context, standart_color) {
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
                    this.ctx.drawImage(texture, Math.round(object.position.x - this.position.x), Math.round(object.position.y - this.position.y), Math.round(texture.width * object.scale.x), Math.round(texture.height * object.scale.y));
                }
            }
        }
    };
    return Camera;
}());
exports.Camera = Camera;
