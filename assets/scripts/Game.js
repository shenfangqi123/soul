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
        },
        _time:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        //cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit ||cc.PhysicsManager.DrawBits.e_pairBit;

        cc.director.getCollisionManager().enabled = true;
        //cc.director.getCollisionManager().enabledDebugDraw = true; //开启碰撞检测范围的绘制
        //cc.director.getCollisionManager().enabledDrawBoundingBox = true; //开启碰撞组件的包围盒绘制        

        this.lightMask = this.node.getChildByName("light_eff_node");
        this._lightMaterial = this.lightMask.getComponent(cc.RenderComponent).getMaterial(0);

        this.thunderMask = this.node.getChildByName("thunder_eff_node");
        this._thunderMaterial = this.thunderMask.getComponent(cc.RenderComponent).getMaterial(0);

        let sprite = this.node.getComponent(cc.Sprite);
        let spriteFrame = sprite.spriteFrame;
 
        let texture = spriteFrame.getTexture();
        let textureWidth = texture.width;
        let textureHeight = texture.height;

        console.log("width is ",textureWidth," and height is ",textureHeight);

        //this.node.on(cc.Node.EventType.TOUCH_MOVE,this.move,this);
        console.log("width is ",this.node.width," and height is ",this.node.height);
    },

    start () {
        this.getHero();
        //this.sciAttack();
        //this.getBullet();
    },

    sciAttack: function() {
        var sciBullet = this.node.getChildByName("sci_bullet");
        sciBulletOp = sciBullet.getComponent("bullet");
        sciBulletOp.setBulletData(1, 60, 100000);
        sciBulletOp.shoot();
    },

    getHero: function() {
        var hero = this.node.getChildByName("hero");
        heroOp = hero.getComponent("hero");
        heroOp.init();
    },

    getBullet: function() {
        var bullet1Obj = cc.instantiate(this.playerPrefab[0]);
        bullet1Obj.active = true;
        bullet1Obj.x = 0;
        bullet1Obj.y = 0;

        this.node.addChild(bullet1Obj);

        sciBulletOp = bullet1Obj.getComponent("bullet");
        sciBulletOp.setBulletData(1, -90, 100000);
        sciBulletOp.shoot();
    },

    update (dt) {
        this._time += 2 * dt;
        var _sin = Math.sin(this._time);
        if(_sin > 0.99){
            _sin = 0;
            this._time = 0;
        }

        this._lightMaterial.setProperty("sys_time", _sin);  
        this._thunderMaterial.setProperty("sys_time", _sin);
    },
});
