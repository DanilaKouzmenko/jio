"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var Button = /** @class */ (function () {
    function Button(position, hitbox) {
        this.textures = {};
        this.text = '';
        this.position = position;
        this.hitbox = hitbox;
    }
    Button.prototype.isClick = function (click_data) {
        var x = click_data.clientX;
        var y = click_data.clientY;
        if (x < this.position.x + this.hitbox.x && x > this.position.x) {
            if (y < this.position.y + this.hitbox.y && y > this.position.y) {
                return true;
            }
        }
        return false;
    };
    return Button;
}());
exports.Button = Button;
