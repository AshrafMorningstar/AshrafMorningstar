var DRUM_TEXTURE = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/8076/cokecan3.png";
var REFLECTION_TEXTURE = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/8076/cokecanref4.png";
var SHADOW_TEXTURE = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/8076/shadow4.png";

// Assembiles are for grouping faces and other assembiles
function createAssembly() {
    var assembly = document.createElement("div");
    assembly.className = "threedee assembly";
    return assembly;
}

function createFace(w, h, x, y, z, rx, ry, rz, tsrc, tx, ty) {
    var face = document.createElement("div");
    face.className = "threedee face";
    face.style.cssText = PrefixFree.prefixCSS(
        "background: url(" + tsrc + ") -" + tx.toFixed(2) + "px " + ty.toFixed(2) + "px;" +
        "width:" + w.toFixed(2) + "px;" +
        "height:" + h.toFixed(2) + "px;" +
        "margin-top: -" + (h / 2).toFixed(2) + "px;" +
        "margin-left: -" + (w / 2).toFixed(2) + "px;" +
        "transform: translate3d(" + x.toFixed(2) + "px," + y.toFixed(2) + "px," + z.toFixed(2) + "px)" +
        "rotateX(" + rx.toFixed(2) + "rad) rotateY(" + ry.toFixed(2) + "rad) rotateY(" + rz.toFixed(2) + "rad);");
    return face;
}

function createTube(dia, height, sides, texture) {
    var tube = createAssembly();
    var sideAngle = (Math.PI / sides) * 2;
    var sideLen = dia * Math.tan(Math.PI/sides);
    for (var c = 0; c < sides; c++) {
        var x = Math.sin(sideAngle * c) * dia / 2;
        var z = Math.cos(sideAngle * c) * dia / 2;
        var ry = Math.atan2(x, z);
        tube.appendChild(createFace(sideLen + 1, height, x, 0, z, 0, ry, 0, texture, sideLen * c, 0));
    }
    return tube;
}

function createBarrel(dia,texture,height) {
    var barrel = createTube(dia, 600 * .6, 20 * .6, texture);
    barrel.appendChild(createFace(340 * .6, 320 * .6, 0, -height * .6, 0, Math.PI / 2, 0, 0, texture, 0, 320 * .6));
    barrel.appendChild(createFace(340 * .6, 340 * .6, 0,height * .6, 0, -Math.PI / 2, 0, 0, texture, 0, 100 * .6));
    return barrel;
}

var scene = createAssembly();

var can = createBarrel(340 * .6,DRUM_TEXTURE,300);
scene.appendChild(can);

var canReflection = createBarrel(360 * .6,REFLECTION_TEXTURE,304);
scene.appendChild(canReflection);

var shadow = createFace(512, 512, 0, 512, 0, -Math.PI / 2, 0, 0, SHADOW_TEXTURE, 0, 512);
TweenMax.set(shadow,{z:-30,rotationX:90,rotationY:70,y:180,x:-50,alpha:.15,scaleX:1,scaleY:1});
scene.appendChild(shadow);


document.body.appendChild(scene);

TweenMax.set(scene,{z:-1400,rotationX:-20})
TweenMax.to(scene,8,{z:-500,repeat:-1,yoyo:true,y:100});

TweenMax.to(can,20,{rotationY:360,repeat:-1,ease:Linear.easeNone});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar