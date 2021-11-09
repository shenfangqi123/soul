// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        playerPrefab: {
            default: [],
            type: cc.Prefab
        },
        type:1,
        angle:0,
        force:100000
    },

    // LIFE-CYCLE CALLBACKS: 

    onLoad () {
        this.darkMask = this.node.parent.getChildByName("dark_mask_node");
        this._material = this.darkMask.getComponent(cc.RenderComponent).getMaterial(0);
        this._material.setProperty('bullet_center', cc.v2(0.5,0.5));
        this._initPos = cc.v2(this.node.x, this.node.y);
    },

    start () {
    },

    setBulletData: function(type, angle, force) {
        this.type = type;
        this.angle = angle;
        this.force = force;
    },

    shoot: function() {
        var force_vec = this.bulletXYForce(this.angle-270);
        this.node.angle = this.angle;
        this.node.getComponent(cc.RigidBody).applyForceToCenter(force_vec);
    },

    bulletXYForce: function(degree) {
        var force = this.force;

        var a_degree = Math.PI/180 * degree;
        var sin_angle = Math.sin(a_degree);
        var cos_angle = Math.cos(a_degree);

        var force_y = Math.round(sin_angle * force);
        var force_x = Math.round(cos_angle * force);

        cc.log(a_degree +":"+ force_x +":"+ force_y);
        return cc.v2(force_x, force_y);
    },

    update (dt) {
        var maskX = this.node.x + 2500;
        var maskY = this.node.y + 2500;

        var ratioX = maskX / 5000;
        var ratioY = 1- (maskY / 5000);

        var endPos = cc.v2(this.node.x, this.node.y);
        var distance = this._initPos.sub(endPos).mag();

        this._material.setProperty('bullet_center', cc.v2(ratioX, ratioY));

        if(distance>1200) {
            this.node.destroy();
        }
    },
});
