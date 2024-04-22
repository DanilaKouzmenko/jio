
export class pos{
    x : number;
    y : number;
    constructor( x : number, y : number ){
        this.x = x;
        this.y = y;
    }
    static zeros(){
        return new pos(0,0);
    }
    static ones(){
        return new pos(1,1);
    }
}

export class GameObject{
    scripts : { [key : string] : any } = {};
    textures : { [key : string] : HTMLImageElement } = {};
    position : pos;
    rotation : number = 0;
    scale : pos = pos.ones();
    children : GameObject[] = [];
    show : boolean = true;
    texture_now : string = '';
    constructor( x:number,y:number ){
        this.position = new pos(x, y);
    }
}

export class Camera{
    scripts : { [key : string] : any } = {};
    position : pos = pos.zeros();
    ctx : CanvasRenderingContext2D;
    standart_color : string = "black";
    constructor( canvas_context : CanvasRenderingContext2D, standart_color : string ){
        this.ctx = canvas_context;
    }
    render( layers : GameObject[][] ){
        this.ctx.fillStyle = "black";
        this.ctx.fillRect( 0, 0, 10000, 10000 )
        for (let layer of layers){
            for(let object of layer ){
                if (object.children != null){
                    this.render( [ object.children ] )
                }
                else {
                    const texture = object.textures[object.texture_now]
                    this.ctx.drawImage(
                        texture,
                        object.position.x - this.position.x, 
                        object.position.y - this.position.y,
                        texture.width * object.scale.x,
                        texture.width * object.scale.y
                    );
                }
            }
        }
    }
}