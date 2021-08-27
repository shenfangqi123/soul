// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this._material = this.node.getComponent(cc.RenderComponent).getMaterial(0);  

console.log(this._material);

        let sprite = this.node.getComponent(cc.Sprite);
        let spriteFrame = sprite.spriteFrame;
 
        let texture = spriteFrame.getTexture();
        let textureWidth = texture.width;
        let textureHeight = texture.height;

        console.log("width is ",textureWidth," and height is ",textureHeight);

        //this.node.on(cc.Node.EventType.TOUCH_MOVE,this.move,this);
        console.log("width is ",this.node.width," and height is ",this.node.height);

        //this._material.setProperty('width',this.node.width);
        //this._material.setProperty('height',this.node.height);
        //this._material.setProperty('center',cc.v2(0.5,0.5));
    },

    start () {
    },

/*
    move(event) {
        let ratio = this.node.height / this.node.width;
 
        let location = event.getLocation();
        console.log("location.y is ",location.y);
        let x = location.x / cc.winSize.width;
        let y = (location.y / cc.winSize.height);
 
        console.log("x is ",x);
        console.log("y is ",y);
 
        let center = cc.v2(x,1 - y);
        this._material.setProperty('center',center);
    }
*/
     

    // update (dt) {},
});
