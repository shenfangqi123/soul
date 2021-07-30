// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        Rocker:{
            type:require("rockerScript"),
            default:null,
        },

        MainCamera:{
            type:cc.Node,
            default:null,
        },

        speed:100,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
    },

    update (dt) {
        if(this.Rocker.dir.mag()<0.5){
            return;
        }

        var vx = this.Rocker.dir.x * this.speed;
        var vy = this.Rocker.dir.y * this.speed;

        var sx = vx * dt;
        var sy = vy * dt;

        this.node.x += sx;
        this.node.y += sy;

        //this.MainCamera.x += sx;
        //this.MainCamera.y += sy;

        this.MainCamera.x = this.node.x;
        this.MainCamera.y = this.node.y;


        var r = Math.atan2(this.Rocker.dir.y,this.Rocker.dir.x);
        var degree = r * 180/(Math.PI);
        //degree = 360 - degree + 90;
        this.node.angle = degree + 270;
    },
});
