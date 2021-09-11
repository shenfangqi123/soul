// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // 这个属性引用了预制资源
        playerPrefab: {
            default: [],
            type: cc.Prefab
        },
        audios: {
            default: [],
            type: cc.AudioClip
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        //cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit ||cc.PhysicsManager.DrawBits.e_pairBit;

        cc.director.getCollisionManager().enabled = true;
        //cc.director.getCollisionManager().enabledDebugDraw = true; //开启碰撞检测范围的绘制
        //cc.director.getCollisionManager().enabledDrawBoundingBox = true; //开启碰撞组件的包围盒绘制        





        this._material = this.node.getComponent(cc.RenderComponent).getMaterial(0);  

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
        //this._material.setProperty('xx',0.5);
    },

    start () { 
        this.getHero();
        //this.shadowForAgent();
    },

    getHero: function() {
        var hero = this.node.getChildByName("hero");
        heroOp = hero.getComponent("playerScript");
        heroOp.setShadow(this.shadowForAgent());
    },

    shadowForAgent: function () {
        var shadowObj = cc.instantiate(this.playerPrefab[0]);
        shadowObj.active = true;
        this.node.addChild(shadowObj);

        shadowObj.x =0;
        shadowObj.y =0;
        shadowObj.zIndex =-1;

        return shadowObj;
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
