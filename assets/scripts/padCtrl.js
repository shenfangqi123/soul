// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        Hero:{
            type:require("hero"),
            default:null,
        },

        Padder:{
            type:cc.Node,
            default:null,
        },

        bgLayout:{
            type:cc.Node,
            default:null,
        },

        type:1
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var _self = this;
        this.Padder.on(cc.Node.EventType.TOUCH_START,function(e){
            var w_pos = e.getLocation();
            var pos = this.node.convertToNodeSpaceAR(w_pos);
            var len = pos.mag();
            var heroNode = this.Hero.node;            
            _self.getBullet();
        }, this);
    },

    getBullet: function() {
        var heroNode = this.Hero.node;
        var bgNode = this.bgLayout.getComponent("Game");

        var bullet1Obj = cc.instantiate(bgNode.playerPrefab[0]);
        bullet1Obj.active = true;
        bullet1Obj.x = heroNode.x;
        bullet1Obj.y = heroNode.y;
        bullet1Obj.angle = heroNode.angle;

        this.bgLayout.addChild(bullet1Obj);

        var sciBulletOp = bullet1Obj.getComponent("bullet");
        sciBulletOp.setBulletData(1, heroNode.angle, 100000);
        sciBulletOp.shoot();
    },

    // update (dt) {},
});
