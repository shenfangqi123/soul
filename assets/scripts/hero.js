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

        speed:10,
        lastAct:"",
        _time:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.darkMask = this.node.parent.getChildByName("dark_mask_node");
        this._material = this.darkMask.getComponent(cc.RenderComponent).getMaterial(0);
        //this._material.setProperty('center', cc.v2(0.5,0.5));
    },

    start () {
    },

    init: function() {
        this.now = Date.now();
        this.angle = -999;
        //this._animation = this.getComponent(cc.Animation);
        //this._animation.WrapMode = cc.WrapMode.Loop;
    },

    setShadow: function (shadow) {
        this.shadow = shadow;
    },

    update (dt) {
/*
        this._time += 2 * dt;
        this._sin = Math.sin(this._time);
        if(this._sin > 0.99){
            this._sin = 0;
            this._time = 0;
        }

        this._material.setProperty("sys_time", this._sin);
*/

        if(this.Rocker.dir.mag()<0.5){
            return;
        }

        var vx = this.Rocker.dir.x * this.speed;
        var vy = this.Rocker.dir.y * this.speed;

        var sx = vx * dt;
        var sy = vy * dt;

        this.node.x += sx;
        this.node.y += sy;

        var maskX = this.node.x + 2500;
        var maskY = this.node.y + 2500;

        var ratioX = maskX / 5000;
        var ratioY = 1- (maskY / 5000);

        this._material.setProperty('center', cc.v2(ratioX, ratioY));

        this.MainCamera.x = this.node.x;
        
        if(this.MainCamera.y - this.node.y > 300) {
            this.MainCamera.y = this.node.y + 300;
        }
        else if(this.MainCamera.y - this.node.y < -300) {
            this.MainCamera.y = this.node.y - 300;
        } 

        var r = Math.atan2(this.Rocker.dir.y,this.Rocker.dir.x);
        var degree = r * 180/(Math.PI);

        this.node.angle = degree+270;
    },


});
