
export class pos{
    x : number;
    y : number;
    type : string = "pos";
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

    add( other : number | pos ){
        if (typeof other == 'number'){
            return new pos( this.x + other, this.y + other );
        }
        else if (other.type == 'pos'){
            return new pos( this.x + other.x, this.y + other.y );
        }
    }

    sub(other : number | pos){
        if (typeof other == 'number'){
            return this.add( -other )
        }
        else if (other.type == 'pos'){
            return new pos( this.x - other.x, this.y - other.y );
        }
    }
}

export class GameObject{
    scripts : { [key : string] : Function } = {}; 
    textures : { [key : string] : HTMLImageElement } = {};
    position : pos;
    rotation : number = 0;
    scale : pos = pos.ones();
    children : GameObject[] = [];
    show : boolean = true;
    texture_now : string = '';
    data : { [key : string] : any } = {};
    sounds : { [key : string] : HTMLAudioElement } = {};
    constructor( x:number, y:number ){
        this.position = new pos(x, y);
    }
    useScript( key : string ){
        this.scripts[key]( this );
    }
}

export class Camera{
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
                        Math.round(object.position.x - this.position.x), 
                        Math.round(object.position.y - this.position.y),
                        Math.round(texture.width * object.scale.x),
                        Math.round(texture.height * object.scale.y)
                    );
                }
            }
        }
    }
}