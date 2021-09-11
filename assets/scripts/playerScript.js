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
        shadow:cc.NOde,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.darkMask = this.node.parent.getChildByName("darkMask");
        this._material = this.darkMask.getComponent(cc.RenderComponent).getMaterial(0);
        cc.log(this._material);
        this._material.setProperty('center', cc.v2(0.5,0.5));
    },

    start () {
    },

    setShadow: function (shadow) {
        this.shadow = shadow;
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

        this.shadow.x = this.node.x;
        this.shadow.y = this.node.y;

        var maskX = this.node.x + 2500;
        var maskY = this.node.y + 2500;

        var ratioX = maskX / 5000;
        var ratioY = 1- (maskY / 5000);

        this._material.setProperty('center', cc.v2(ratioX, ratioY));

        //this.MainCamera.x += sx;
        //this.MainCamera.y += sy;

        this.MainCamera.x = this.node.x;
        this.MainCamera.y = this.node.y;


        var r = Math.atan2(this.Rocker.dir.y,this.Rocker.dir.x);
        var degree = r * 180/(Math.PI);
        //degree = 360 - degree + 90;
        this.node.angle = degree + 270;
        this.shadow.angle = this.node.angle;


    },

    s1: function () {
        this.dispShadow(0);
    },

    s2: function () {
        this.dispShadow(1);
    },

    s3: function () {
        this.dispShadow(2);
    },

    s4: function () {
        this.dispShadow(3);
    },

    s5: function () {
        this.dispShadow(4);
    },

    s6: function () {
        this.dispShadow(5);
    },

    s7: function () {
        this.dispShadow(6);
    },

    s8: function () {
        this.dispShadow(7);
    },

    s9: function () {
        this.dispShadow(8);
    },

    s10: function () {
        this.dispShadow(9);
    },

    s11: function () {
        this.dispShadow(10);
    },

    s12: function () {
        this.dispShadow(11);
    },

    s13: function () {
        this.dispShadow(12);
    },

    s14: function () {
        this.dispShadow(13);
    },

    s15: function () {
        this.dispShadow(14);
    },

    s16: function () {
        this.dispShadow(15);
    },

    s17: function () {
        this.dispShadow(16);
    },

    s18: function () {
        this.dispShadow(17);
    },

    s19: function () {
        this.dispShadow(18);
    },

    dispShadow: function(frameNo) {
        //shadow object may not ready in init() when playing
        if(!this.shadow) return;

        var shadowNode = this.shadow;
        var frameImg = "actors/hero/n/shadow/"+frameNo;
        var act = "n";

        if(!act) return;

/*
        var actTmp = this.lastAct.split("_");
        var actDir = actTmp[1];
        var actType = actTmp[2];
        var scaleX = this.lastScaleX;
*/

        actDir = act;
        if(actDir == "en1" || actDir == "en2" || actDir == "en3") {
            frameImg = "actors/hero/n/shadow/"+frameNo;
        }
        else if(actDir == "se1" || actDir == "se2" || actDir == "se3") {
            frameImg = "actors/hero/n/shadow/"+frameNo;
        }
        else if(actDir == "s") {
            frameImg = "actors/hero/n/shadow/"+frameNo;
        }
        else if(actDir == "n") {
            frameImg = "actors/hero/n/shadow/"+frameNo;
        }
        else if(actDir == "e") {
            frameImg = "actors/hero/n/shadow/"+frameNo;
        }

        this.shadow.active = true;

        cc.loader.loadRes(frameImg, cc.SpriteFrame, function (err, spriteFrame) {
            if(shadowNode) {
                try {
                    if(shadowNode._name != "") {
                        shadowNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                } catch (e) {
                    console.log(shadowNode);
                    console.log(e);
                }
            }
        });

    },

});
