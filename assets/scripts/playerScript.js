// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed:10,
        shadow:cc.NOde,
        lastAct:"",
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start () {
    },

    init: function() {
        this.now = Date.now();
        this.angle = -999;
        this._animation = this.getComponent(cc.Animation);
        this._animation.WrapMode = cc.WrapMode.Loop;
    },

    setShadow: function (shadow) {
        this.shadow = shadow;
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
        //if(!this.shadow) return;

        //var shadowNode = this.shadow;
        var shadowNode = this.node.parent.getChildByName("shadow");

        var frameImg = "actors/hero/n/shadow/"+frameNo;
        var act = this.lastAct;

        //if(!act) return;

        var actTmp = this.lastAct.split("_");
        var actDir = actTmp[1];
        var actDir = "n";

        var actType = actTmp[2];
        var scaleX = this.lastScaleX;

        //cc.log(actDir +":"+ actType +":"+ scaleX);

        //actDir = act;
        if(actDir == "en1" || actDir == "en2" || actDir == "en3") {
            frameImg = "actors/hero/en2/shadow/"+frameNo;
        }
        else if(actDir == "se1" || actDir == "se2" || actDir == "se3") {
            frameImg = "actors/hero/se2/shadow/"+frameNo;
        }
        else if(actDir == "s") {
            frameImg = "actors/hero/n/shadow/"+frameNo;
        }
        else if(actDir == "n") {
            frameImg = "actors/hero/n/shadow/"+frameNo;
        }
        else if(actDir == "e") {
            frameImg = "actors/hero/e/shadow/"+frameNo;
        }

        //this.shadow.active = true;

        cc.loader.loadRes(frameImg, cc.SpriteFrame, function (err, spriteFrame) {
            if(shadowNode) {
                try {
                    if(shadowNode._name != "") {
                        shadowNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        
                        //shadowNode.scaleX = scaleX;

                        shadowNode.scaleX = 1.1;
                        shadowNode.scaleY = 1.1;
                        shadowNode.opacity = 100;

                    }
                } catch (e) {
                    console.log(shadowNode);
                    console.log(e);
                }
            }
        });

    },

    getActnameByAngle: function(angle, actType) {
        this.role = "hero";
        var actName="";
        var scaleX = 1;
        var ret = {};
        var specialActname = false;

        if(angle>22.5*-1 && angle<=22.5*1) {
            if(actType == "move") {
                actName = "e_walk";
            }
            else if(actType == "sa") {
                actName = "e_attack";
            }
        }
        else if(angle>22.5*1 && angle<=22.5*3) {
            if(actType == "move") {
                actName = "en2_walk";
            }
            else if(actType == "sa") {
                actName = "en2_attack";
            }
        }
        else if(angle>22.5*3 && angle<=22.5*5) {
            if(actType == "move") {
                actName = "n_walk";
            }
            else if(actType == "sa") {
                actName = "n_attack";
            }
        }
        else if(angle>22.5*5 && angle<=22.5*7) {
            if(actType == "move") {
                actName = "en2_walk";
            }
            else if(actType == "sa") {
                actName = "en2_attack";
            }
            scaleX = -1;

        }
        else if(angle>22.5*7 || angle<-22.5*9) {
            if(actType == "move") {
                actName = "n_walk";
            }
            else if(actType == "sa") {
                actName = "n_attack";
            }

            scaleX = -1;
        }

        else if(angle<22.5*-1 && angle>=22.5*-3) {
            if(actType == "move") {
                actName = "se2_walk";
            }
            else if(actType == "sa") {
                actName = "se2_attack";
            }

            scaleX = 1;
        }
        else if(angle<22.5*-3 && angle>=22.5*-5) {
            if(actType == "move") {
                actName = "n_walk";
            }
            else if(actType == "sa") {
                actName = "n_attack";
            }

            scaleX = 1;
        }
        else if(angle<22.5*-5 && angle>=22.5*-7) {
            if(actType == "move") {
                actName = "se2_walk";
            }
            else if(actType == "sa") {  // start attack
                actName = "se2_attack";
            }

            scaleX = -1;
        }
        else if (angle<22.5*-7){
            if(actType == "move") {
                actName = "e_walk";
            }
            else if(actType == "sa") {   // start attack
                actName = "e_attack";
            }

            scaleX = -1;
        }
        else {
            console.log("----error angle--------------:"+angle);
        }

        actName = this.role +"_"+ actName;
 
        //specialActname = this.specialAct(actType);
        //if(specialActname) {
        //    actName = specialActname;
        //}

        ret.actName = actName;
        ret.scaleX = scaleX;
        return ret;
    },

});
