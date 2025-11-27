/*!
Happy Holidays 2023
This This This This copyrighted all rights reserved by Ashraf Morningstar by Ashraf Morningstar by Ashraf Morningstar by Ashraf Morningstar
*/
"use strict";

import * as THREE from "three";

import { OrbitControls as e } from "three/addons/controls/OrbitControls.js";

import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

import { MeshSurfaceSampler as t } from "three/addons/math/MeshSurfaceSampler.js";

import { EffectComposer as o } from "three/addons/postprocessing/EffectComposer.js";

import { RenderPass as n } from "three/addons/postprocessing/RenderPass.js";

import { ShaderPass as r } from "three/addons/postprocessing/ShaderPass.js";

import { UnrealBloomPass as a } from "three/addons/postprocessing/UnrealBloomPass.js";

import { SVGLoader as s } from "three/addons/loaders/SVGLoader.js";

import { Flow as i } from "three/addons/modifiers/CurveModifier.js";

!(function () {
  function l(e, t, o) {
    x = t.length;
    let n,
      r = new THREE.InstancedMesh(b.geometry, b.material, x);
    K.set(0, 0, 0, 0), ee.set(1, 1, 1);
    for (let a = 0; a < x; a++) {
      if (
        (Q.set(t[a][0], t[a][1], t[a][2]),
        (J = Q),
        ("ribbon" != o && "twist" != o) ||
          (V.lookAt(Q.x, 0, Q.z), (K = V.quaternion)),
        1 != e && ee.set(e, e, e),
        _.compose(J, K, ee),
        "ribbon" == o)
      )
        n = new THREE.Color("red");
      else if ("light" == o || "light2" == o) n = new THREE.Color("burlywood");
      else if ("sphere" == o) {
        let e = ["white", "red"];
        n = new THREE.Color(e[Math.floor(Math.random() * e.length)]);
      }
      r.setMatrixAt(a, _), r.setColorAt(a, n);
    }
    return r;
  }
  function d(e) {
    /*! this function from https://github.com/AshrafMorningstar */
    let t = this.attributes.position;
    if (null != this.index) return;
    let o = t.count / 3,
      n = [],
      r = new THREE.Triangle(),
      a = te.clone(),
      s = te.clone(),
      i = te.clone();
    for (let l = 0; l < o; l++) {
      a.fromBufferAttribute(t, 3 * l + 0),
        s.fromBufferAttribute(t, 3 * l + 1),
        i.fromBufferAttribute(t, 3 * l + 2),
        r.set(a, s, i);
      let o = te.clone();
      r.getMidpoint(o);
      let d = a.distanceTo(s),
        h = (Math.sqrt(3) / 2) * d * e,
        c = o.clone().normalize().setLength(h);
      o.add(c),
        n.push(
          o.clone(),
          a.clone(),
          s.clone(),
          o.clone(),
          s.clone(),
          i.clone(),
          o.clone(),
          i.clone(),
          a.clone()
        );
    }
    let l = new THREE.BufferGeometry().setFromPoints(n);
    return l.computeVertexNormals(), l;
  }
  function h() {
    const e = window.innerWidth,
      t = window.innerHeight;
    (E.aspect = e / t),
      E.updateProjectionMatrix(),
      f.setSize(e, t),
      k.setSize(e, t),
      Z.setSize(e, t),
      p();
  }
  function c(e) {
    (e.isMesh || e.isInstancedMesh) &&
      !1 === q.test(e.layers) &&
      ((W[e.uuid] = e.material), (e.material = N));
  }
  function u(e) {
    W[e.uuid] && ((e.material = W[e.uuid]), delete W[e.uuid]);
  }
  function m() {
    requestAnimationFrame(m), w.update(), O && O.moveAlongCurve(7e-4), p();
  }
  function p() {
    Y.getElapsedTime() > X / 1e3 &&
      (P.layers.toggle(L), v.layers.toggle(L), Y.stop(), Y.start()),
      I &&
        (function (e) {
          for (let t = 0; t < e.count; t++)
            e.getMatrixAt(t, _),
              _.decompose(V.position, V.quaternion, V.scale),
              (V.position.y -= A),
              V.position.y < -U
                ? ((V.position.y = U),
                  (V.position.x = THREE.MathUtils.randFloat(-U, U)),
                  (V.position.z = THREE.MathUtils.randFloat(-U, U)))
                : t % 4 == 1
                ? ((V.position.x += F), (V.position.z += j))
                : t % 4 == 2
                ? ((V.position.x += F), (V.position.z -= j))
                : t % 4 == 3
                ? ((V.position.x -= F), (V.position.z += j))
                : ((V.position.x -= F), (V.position.z -= j)),
              (V.rotation.x += THREE.MathUtils.randFloat(0, z)),
              (V.rotation.z += THREE.MathUtils.randFloat(0, C)),
              V.updateMatrix(),
              e.setMatrixAt(t, V.matrix);
          e.instanceMatrix.needsUpdate = !0;
        })(I),
      M.traverse(c),
      k.render(),
      M.traverse(u),
      Z.render();
  }
  let E,
    M,
    f,
    w,
    T,
    R,
    H,
    g,
    y,
    b,
    x,
    P,
    v,
    I,
    S,
    B = 1,
    G = [],
    U = 12;
  const z = Math.PI / 30,
    C = Math.PI / 50,
    A = 0.03,
    F = 0.005,
    j = 0.005,
    V = new THREE.Object3D();
  let k, Z;
  const L = 1,
    q = new THREE.Layers();
  q.set(L);
  const D = {
      exposure: 0,
      bloomStrength: 1,
      bloomThreshold: 0,
      bloomRadius: 0.1
    },
    N = new THREE.MeshBasicMaterial({
      color: "black"
    }),
    W = {},
    X = 1e3,
    Y = new THREE.Clock();
  let O;
  const _ = new THREE.Matrix4();
  let Q = new THREE.Vector3(),
    J = Q.clone(),
    K = new THREE.Quaternion();
  const $ = new THREE.Euler(),
    ee = Q.clone(),
    te = Q.clone();
  !(async function () {
    const c = new THREE.TextureLoader().loadAsync(data_env);
    ([y] = await Promise.all([c])),
      (y.mapping = THREE.EquirectangularReflectionMapping),
      y.dispose(),
      (data_env = null);
    const u = document.createElement("div");
    document.body.appendChild(u),
      ((M = new THREE.Scene()).background = "black"),
      (M.environment = y),
      (f = new THREE.WebGLRenderer({
        antialias: !1
      })).setPixelRatio(Math.min(window.devicePixelRatio, 2)),
      f.setSize(window.innerWidth, window.innerHeight),
      (f.toneMapping = THREE.LinearToneMapping),
      u.appendChild(f.domElement),
      (E = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        0.1,
        70
      )).position.set(0, 0.8, 25),
      E.lookAt(0, 0, 0);
    const p = new n(M, E),
      z = new a(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        D.bloomStrength,
        D.bloomRadius,
        D.bloomThreshold
      );
    ((k = new o(f)).renderToScreen = !1), k.addPass(p), k.addPass(z);
    const C = new r(
      new THREE.ShaderMaterial({
        uniforms: {
          baseTexture: {
            value: null
          },
          bloomTexture: {
            value: k.renderTarget2.texture
          }
        },
        vertexShader: document.getElementById("vertexshader").textContent,
        fragmentShader: document.getElementById("fragmentshader").textContent,
        defines: {}
      }),
      "baseTexture"
    );
    (C.needsSwap = !0),
      (Z = new o(f)).addPass(p),
      Z.addPass(C),
      (g = new THREE.MeshBasicMaterial({
        color: "white",
        reflectivity: 1,
        envMap: y
      })),
      (H = (function () {
        let e;
        (S = 2),
          (x = 700),
          (B = 15),
          (G = []),
          (T = new THREE.PlaneGeometry(0.05, 0.05));
        for (let t = 0; t < x; t++) {
          const t = Math.acos(THREE.MathUtils.randFloatSpread(2)),
            o = THREE.MathUtils.randFloatSpread(360);
          (Q.x = S * Math.sin(t) * Math.cos(o)),
            (Q.y = Math.abs(S * Math.sin(t) * Math.sin(o)) * B - S * B),
            (Q.z = S * Math.cos(t)),
            (e = Math.random()),
            Q.copy(Q).multiplyScalar(e);
          let n = T.clone();
          n.rotateX(Math.random() * Math.PI),
            n.rotateY(Math.random() * Math.PI),
            n.rotateZ(Math.random() * Math.PI),
            n.translate(Q.x, Q.y, Q.z),
            G.push(n);
        }
        return (
          (T = BufferGeometryUtils.mergeGeometries(G)).rotateZ(-Math.PI / 2),
          (T.attributes.position.needsUpdate = !0),
          T.center(),
          T.computeBoundingBox(),
          T.computeVertexNormals(),
          (R = g.clone()).color.set("khaki"),
          (R.reflectivity = 1),
          (R.side = THREE.DoubleSide),
          (H = new THREE.Mesh(T, R))
        );
      })());
    let A = (function (e = 1, t = 1, o = 100, n) {
      const r = [];
      for (let a = 0; a <= o; a++)
        (S = e * a),
          ((Q = Q.clone()).x = S * Math.cos(a)),
          (Q.z = S * Math.sin(a)),
          (Q.y = t * -a + n),
          r.push(Q);
      for (let a = o; a >= 0; a--)
        (S = e * a),
          ((Q = Q.clone()).x = S * Math.cos(-a)),
          (Q.z = S * Math.sin(-a)),
          (Q.y = t * -a + n),
          r.push(Q);
      return new THREE.CatmullRomCurve3(r, !0, "centripetal", 0);
    })(0.24, 0.2 * 3, 25, 10);
    A.getPoints(25),
      (O = new i(H)).updateCurve(0, A),
      M.add(O.object3D),
      (function () {
        (x = 128), (B = 0.002);
        const e = document.querySelector("svg#snowflake").outerHTML,
          t = new s().parse(e).paths[0],
          o = s.createShapes(t)[0];
        let n = new THREE.ExtrudeGeometry(o, {
          steps: 1,
          depth: 10,
          bevelEnabled: !0,
          bevelThickness: 0,
          bevelSize: 0,
          bevelOffset: -3,
          bevelSegments: 0
        });
        n.scale(B, B, B),
          (n = BufferGeometryUtils.mergeVertices(n, B / 20)).center(),
          (n.attributes.position.needsUpdate = !0),
          n.computeBoundingBox(),
          n.computeVertexNormals(),
          (R = g.clone()).color.set("white"),
          (R.reflectivity = 0.8),
          (I = new THREE.InstancedMesh(n, R, x)),
          K.set(0, 0, 0, 0),
          ee.set(1, 1, 1);
        for (let e = 0; e < x; e++)
          Q.set(
            THREE.MathUtils.randFloat(-U, U),
            THREE.MathUtils.randFloat(-U, U),
            THREE.MathUtils.randFloat(-U, U)
          ),
            (J = Q),
            $.set(
              Math.random() * Math.PI,
              Math.random() * Math.PI,
              Math.random() * Math.PI
            ),
            K.setFromEuler($),
            (ee.x = ee.y = ee.z = 0.5 * Math.random() + 0.5),
            _.compose(J, K, ee),
            I.setMatrixAt(e, _);
        M.add(I);
      })(),
      (T = (function (e, t, o) {
        let n = [];
        for (let r = 0; r < 2 * e; r++) {
          let a, s;
          n.push(0, 0, -o / 2),
            r % 2 == 0 ? ((a = t), (s = 1)) : ((a = 1), (s = t));
          let i = ((r + 1) / e) * Math.PI;
          n.push(Math.cos(i) * a, Math.sin(i) * a, 0),
            (i = (r / e) * Math.PI),
            n.push(Math.cos(i) * s, Math.sin(i) * s, 0),
            n.push(0, 0, o / 2),
            (i = (r / e) * Math.PI),
            n.push(Math.cos(i) * s, Math.sin(i) * s, 0),
            (i = ((r + 1) / e) * Math.PI),
            n.push(Math.cos(i) * a, Math.sin(i) * a, 0);
        }
        return (
          (n = new Float32Array(n)),
          (T = new THREE.BufferGeometry()).setAttribute(
            "position",
            new THREE.BufferAttribute(n, 3)
          ),
          T.rotateZ(-Math.PI / e / 2),
          (T.attributes.position.needsUpdate = !0),
          T.computeVertexNormals(),
          T.center(),
          T
        );
      })(5, 2, 1.78)),
      (R = g.clone()).color.set("yellow"),
      (R.reflectivity = 0.8);
    const F = new THREE.Mesh(T, R);
    let j;
    (F.position.y = 5.7), (B = 0.35), F.scale.set(B, B, B), M.add(F);
    let V = [],
      q = [];
    (x = 2e3),
      (T = new THREE.CylinderGeometry(0.1, 4.5, 10, 8, 1, !0)),
      (H = new THREE.Mesh(T, new THREE.MeshBasicMaterial())),
      (j = new t(H).build()),
      (S = 0.1),
      (B = 3),
      (THREE.BufferGeometry.prototype.tripleFace = d);
    let N = new THREE.IcosahedronGeometry(S, 0).tripleFace(B);
    G = [];
    for (let e = 0; e < x; e++)
      j.sample(Q),
        (T = N.clone()).rotateX(Math.random() * Math.PI),
        T.rotateY(Math.random() * Math.PI),
        T.rotateZ(Math.random() * Math.PI),
        T.translate(Q.x, Q.y, Q.z),
        G.push(T);
    (T = BufferGeometryUtils.mergeGeometries(G)).computeVertexNormals(),
      (R = g.clone()).color.set("mediumseagreen"),
      (R.reflectivity = 0.9),
      (H = new THREE.Mesh(T, R)),
      M.add(H),
      (T = new THREE.CylinderGeometry(0.6, 5, 10, 8, 1, !0)),
      (V = []),
      (q = []),
      (x = 282),
      (H = new THREE.Mesh(T, new THREE.MeshBasicMaterial())),
      (j = new t(H).build());
    for (let e = 0; e < x; e++) j.sample(Q), V.push([Q.x, Q.y, Q.z]);
    let W = [];
    for (let e = 0; e < 70; e++) {
      let e = Math.floor(Math.random() * V.length);
      W.push(V.splice(e, 1)[0]);
    }
    let X = [];
    for (let e = 0; e < 70; e++) {
      let e = Math.floor(Math.random() * V.length);
      X.push(V.splice(e, 1)[0]);
    }
    let Y = [];
    for (let e = 0; e < 22; e++) {
      let e = Math.floor(Math.random() * V.length);
      Y.push(V.splice(e, 1)[0]);
    }
    let te = [];
    for (let e = 0; e < 120; e++) {
      let e = Math.floor(Math.random() * V.length);
      te.push(V.splice(e, 1)[0]);
    }
    (S = 0.24),
      (B = 1),
      (T = new THREE.SphereGeometry(S, 20, 20)),
      ((R = g.clone()).reflectivity = 0.8),
      (b = new THREE.Mesh(T, R)),
      (H = l(B, te, "sphere")),
      M.add(H),
      (B = 1),
      (T = (function (e) {
        let t = 1.5 * e,
          o = new THREE.SphereGeometry(e, 10, 10);
        const n = o.attributes.position;
        for (let r = 0; r < n.count; r++)
          n.getY(r) > e / 3 &&
            (o.attributes.position.setX(r, 0),
            o.attributes.position.setY(r, t),
            o.attributes.position.setZ(r, 0));
        (G = []), o.translate(0, -t, 0);
        let r = o.clone();
        return (
          r.rotateZ(Math.PI / 2),
          G.push(r),
          (r = o.clone()).rotateZ(-Math.PI / 2),
          G.push(r),
          (r = o.clone()).scale(0.7, 1.5, 0.7),
          r.rotateZ(Math.PI / 8),
          G.push(r),
          (r = o.clone()).scale(0.7, 1.5, 0.7),
          r.rotateZ(-Math.PI / 8),
          G.push(r),
          (r = new THREE.SphereGeometry(t / 2.3, 5, 5)),
          G.push(r),
          (o = BufferGeometryUtils.mergeGeometries(G)),
          (o = BufferGeometryUtils.mergeVertices(o, e / 10)).scale(1, 1, 0.7),
          o.rotateX(-Math.PI / 7),
          (o.attributes.position.needsUpdate = !0),
          o.computeBoundingBox(),
          o.computeVertexNormals(),
          o
        );
      })((S = 0.15))),
      ((R = g.clone()).reflectivity = 0.4),
      (b = new THREE.Mesh(T, R)),
      (H = l(B, Y, "ribbon")),
      M.add(H),
      (S = 0.11),
      (B = 1),
      (T = new THREE.SphereGeometry(S, 10, 10)),
      (b = new THREE.Mesh(T, new THREE.MeshBasicMaterial())),
      (P = l(B, W, "light")),
      M.add(P),
      (v = l(B, X, "light2")).layers.toggle(L),
      M.add(v),
      ((w = new e(E, f.domElement)).autoRotate = !0),
      (w.autoRotateSpeed = 1),
      (w.enableDamping = !0),
      (w.enablePan = !1),
      (w.minDistance = 8),
      (w.maxDistance = 30),
      (w.minPolarAngle = 0),
      (w.maxPolarAngle = Math.PI / 2),
      w.target.set(0, 0, 0),
      w.update(),
      m(),
      window.addEventListener("resize", h);
  })();
})();

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar