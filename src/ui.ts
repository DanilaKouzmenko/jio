import { pos } from './object.js';

export class Button{
    hitbox : pos;
    position : pos;
    textures : { [key : string] : HTMLImageElement } = {};
    text : string = '';
    constructor( position : pos, hitbox : pos){
        this.position = position;
        this.hitbox = hitbox;
    }
    isClick( click_data : any ) : boolean {
        const x = click_data.clientX;
        const y = click_data.clientY;
        if ( 
            x < this.position.x + this.hitbox.x && x > this.position.x
        ){
            if (
                y < this.position.y + this.hitbox.y && y > this.position.y
            ){
                return true;
            }
        }
        return false;
    }
}