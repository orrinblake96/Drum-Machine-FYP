// threejs.org/license
(function(l, ia) {
  "object" === typeof exports && "undefined" !== typeof module
    ? ia(exports)
    : "function" === typeof define && define.amd
    ? define(["exports"], ia)
    : ia((l.THREE = {}));
})(this, function(l) {
  function ia() {}
  function z(a, b) {
    this.x = a || 0;
    this.y = b || 0;
  }
  function P() {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    0 < arguments.length &&
      console.error(
        "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
      );
  }
  function ja(a, b, c, d) {
    this._x = a || 0;
    this._y = b || 0;
    this._z = c || 0;
    this._w = void 0 !== d ? d : 1;
  }
  function p(a, b, c) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0;
  }
  function da() {
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    0 < arguments.length &&
      console.error(
        "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
      );
  }
  function W(a, b, c, d, e, f, g, h, k, m) {
    Object.defineProperty(this, "id", { value: Kf++ });
    this.uuid = R.generateUUID();
    this.name = "";
    this.image = void 0 !== a ? a : W.DEFAULT_IMAGE;
    this.mipmaps = [];
    this.mapping = void 0 !== b ? b : W.DEFAULT_MAPPING;
    this.wrapS = void 0 !== c ? c : 1001;
    this.wrapT = void 0 !== d ? d : 1001;
    this.magFilter = void 0 !== e ? e : 1006;
    this.minFilter = void 0 !== f ? f : 1008;
    this.anisotropy = void 0 !== k ? k : 1;
    this.format = void 0 !== g ? g : 1023;
    this.type = void 0 !== h ? h : 1009;
    this.offset = new z(0, 0);
    this.repeat = new z(1, 1);
    this.center = new z(0, 0);
    this.rotation = 0;
    this.matrixAutoUpdate = !0;
    this.matrix = new da();
    this.generateMipmaps = !0;
    this.premultiplyAlpha = !1;
    this.flipY = !0;
    this.unpackAlignment = 4;
    this.encoding = void 0 !== m ? m : 3e3;
    this.version = 0;
    this.onUpdate = null;
  }
  function Z(a, b, c, d) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0;
    this.w = void 0 !== d ? d : 1;
  }
  function kb(a, b, c) {
    this.width = a;
    this.height = b;
    this.scissor = new Z(0, 0, a, b);
    this.scissorTest = !1;
    this.viewport = new Z(0, 0, a, b);
    c = c || {};
    void 0 === c.minFilter && (c.minFilter = 1006);
    this.texture = new W(
      void 0,
      void 0,
      c.wrapS,
      c.wrapT,
      c.magFilter,
      c.minFilter,
      c.format,
      c.type,
      c.anisotropy,
      c.encoding
    );
    this.texture.generateMipmaps =
      void 0 !== c.generateMipmaps ? c.generateMipmaps : !0;
    this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
    this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0;
    this.depthTexture = void 0 !== c.depthTexture ? c.depthTexture : null;
  }
  function Jb(a, b, c) {
    kb.call(this, a, b, c);
    this.activeMipMapLevel = this.activeCubeFace = 0;
  }
  function lb(a, b, c, d, e, f, g, h, k, m, q, n) {
    W.call(this, null, f, g, h, k, m, d, e, q, n);
    this.image = { data: a, width: b, height: c };
    this.magFilter = void 0 !== k ? k : 1003;
    this.minFilter = void 0 !== m ? m : 1003;
    this.flipY = this.generateMipmaps = !1;
    this.unpackAlignment = 1;
  }
  function Wa(a, b) {
    this.min = void 0 !== a ? a : new p(Infinity, Infinity, Infinity);
    this.max = void 0 !== b ? b : new p(-Infinity, -Infinity, -Infinity);
  }
  function Ga(a, b) {
    this.center = void 0 !== a ? a : new p();
    this.radius = void 0 !== b ? b : 0;
  }
  function Pa(a, b) {
    this.normal = void 0 !== a ? a : new p(1, 0, 0);
    this.constant = void 0 !== b ? b : 0;
  }
  function rd(a, b, c, d, e, f) {
    this.planes = [
      void 0 !== a ? a : new Pa(),
      void 0 !== b ? b : new Pa(),
      void 0 !== c ? c : new Pa(),
      void 0 !== d ? d : new Pa(),
      void 0 !== e ? e : new Pa(),
      void 0 !== f ? f : new Pa()
    ];
  }
  function G(a, b, c) {
    return void 0 === b && void 0 === c ? this.set(a) : this.setRGB(a, b, c);
  }
  function Xd() {
    function a(e, f) {
      !1 !== c && (d(e, f), b.requestAnimationFrame(a));
    }
    var b = null,
      c = !1,
      d = null;
    return {
      start: function() {
        !0 !== c && null !== d && (b.requestAnimationFrame(a), (c = !0));
      },
      stop: function() {
        c = !1;
      },
      setAnimationLoop: function(a) {
        d = a;
      },
      setContext: function(a) {
        b = a;
      }
    };
  }
  function Lf(a) {
    function b(b, c) {
      var d = b.array,
        e = b.dynamic ? 35048 : 35044,
        h = a.createBuffer();
      a.bindBuffer(c, h);
      a.bufferData(c, d, e);
      b.onUploadCallback();
      c = 5126;
      d instanceof Float32Array
        ? (c = 5126)
        : d instanceof Float64Array
        ? console.warn(
            "THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."
          )
        : d instanceof Uint16Array
        ? (c = 5123)
        : d instanceof Int16Array
        ? (c = 5122)
        : d instanceof Uint32Array
        ? (c = 5125)
        : d instanceof Int32Array
        ? (c = 5124)
        : d instanceof Int8Array
        ? (c = 5120)
        : d instanceof Uint8Array && (c = 5121);
      return {
        buffer: h,
        type: c,
        bytesPerElement: d.BYTES_PER_ELEMENT,
        version: b.version
      };
    }
    var c = new WeakMap();
    return {
      get: function(a) {
        a.isInterleavedBufferAttribute && (a = a.data);
        return c.get(a);
      },
      remove: function(b) {
        b.isInterleavedBufferAttribute && (b = b.data);
        var d = c.get(b);
        d && (a.deleteBuffer(d.buffer), c.delete(b));
      },
      update: function(d, e) {
        d.isInterleavedBufferAttribute && (d = d.data);
        var f = c.get(d);
        if (void 0 === f) c.set(d, b(d, e));
        else if (f.version < d.version) {
          var g = d,
            h = g.array,
            k = g.updateRange;
          a.bindBuffer(e, f.buffer);
          !1 === g.dynamic
            ? a.bufferData(e, h, 35044)
            : -1 === k.count
            ? a.bufferSubData(e, 0, h)
            : 0 === k.count
            ? console.error(
                "THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."
              )
            : (a.bufferSubData(
                e,
                k.offset * h.BYTES_PER_ELEMENT,
                h.subarray(k.offset, k.offset + k.count)
              ),
              (k.count = -1));
          f.version = d.version;
        }
      }
    };
  }
  function Xa(a, b, c, d, e, f) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.normal = d && d.isVector3 ? d : new p();
    this.vertexNormals = Array.isArray(d) ? d : [];
    this.color = e && e.isColor ? e : new G();
    this.vertexColors = Array.isArray(e) ? e : [];
    this.materialIndex = void 0 !== f ? f : 0;
  }
  function mb(a, b, c, d) {
    this._x = a || 0;
    this._y = b || 0;
    this._z = c || 0;
    this._order = d || mb.DefaultOrder;
  }
  function Yd() {
    this.mask = 1;
  }
  function D() {
    Object.defineProperty(this, "id", { value: Mf++ });
    this.uuid = R.generateUUID();
    this.name = "";
    this.type = "Object3D";
    this.parent = null;
    this.children = [];
    this.up = D.DefaultUp.clone();
    var a = new p(),
      b = new mb(),
      c = new ja(),
      d = new p(1, 1, 1);
    b.onChange(function() {
      c.setFromEuler(b, !1);
    });
    c.onChange(function() {
      b.setFromQuaternion(c, void 0, !1);
    });
    Object.defineProperties(this, {
      position: { configurable: !0, enumerable: !0, value: a },
      rotation: { configurable: !0, enumerable: !0, value: b },
      quaternion: { configurable: !0, enumerable: !0, value: c },
      scale: { configurable: !0, enumerable: !0, value: d },
      modelViewMatrix: { value: new P() },
      normalMatrix: { value: new da() }
    });
    this.matrix = new P();
    this.matrixWorld = new P();
    this.matrixAutoUpdate = D.DefaultMatrixAutoUpdate;
    this.matrixWorldNeedsUpdate = !1;
    this.layers = new Yd();
    this.visible = !0;
    this.receiveShadow = this.castShadow = !1;
    this.frustumCulled = !0;
    this.renderOrder = 0;
    this.userData = {};
  }
  function I() {
    Object.defineProperty(this, "id", { value: (Nf += 2) });
    this.uuid = R.generateUUID();
    this.name = "";
    this.type = "Geometry";
    this.vertices = [];
    this.colors = [];
    this.faces = [];
    this.faceVertexUvs = [[]];
    this.morphTargets = [];
    this.morphNormals = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.lineDistances = [];
    this.boundingSphere = this.boundingBox = null;
    this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1;
  }
  function F(a, b, c) {
    if (Array.isArray(a))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    this.name = "";
    this.array = a;
    this.itemSize = b;
    this.count = void 0 !== a ? a.length / b : 0;
    this.normalized = !0 === c;
    this.dynamic = !1;
    this.updateRange = { offset: 0, count: -1 };
    this.version = 0;
  }
  function sc(a, b, c) {
    F.call(this, new Int8Array(a), b, c);
  }
  function tc(a, b, c) {
    F.call(this, new Uint8Array(a), b, c);
  }
  function uc(a, b, c) {
    F.call(this, new Uint8ClampedArray(a), b, c);
  }
  function vc(a, b, c) {
    F.call(this, new Int16Array(a), b, c);
  }
  function nb(a, b, c) {
    F.call(this, new Uint16Array(a), b, c);
  }
  function wc(a, b, c) {
    F.call(this, new Int32Array(a), b, c);
  }
  function ob(a, b, c) {
    F.call(this, new Uint32Array(a), b, c);
  }
  function C(a, b, c) {
    F.call(this, new Float32Array(a), b, c);
  }
  function xc(a, b, c) {
    F.call(this, new Float64Array(a), b, c);
  }
  function Ie() {
    this.vertices = [];
    this.normals = [];
    this.colors = [];
    this.uvs = [];
    this.uvs2 = [];
    this.groups = [];
    this.morphTargets = {};
    this.skinWeights = [];
    this.skinIndices = [];
    this.boundingSphere = this.boundingBox = null;
    this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1;
  }
  function Je(a) {
    if (0 === a.length) return -Infinity;
    for (var b = a[0], c = 1, d = a.length; c < d; ++c) a[c] > b && (b = a[c]);
    return b;
  }
  function E() {
    Object.defineProperty(this, "id", { value: (Of += 2) });
    this.uuid = R.generateUUID();
    this.name = "";
    this.type = "BufferGeometry";
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingSphere = this.boundingBox = null;
    this.drawRange = { start: 0, count: Infinity };
    this.userData = {};
  }
  function Kb(a, b, c, d, e, f) {
    I.call(this);
    this.type = "BoxGeometry";
    this.parameters = {
      width: a,
      height: b,
      depth: c,
      widthSegments: d,
      heightSegments: e,
      depthSegments: f
    };
    this.fromBufferGeometry(new pb(a, b, c, d, e, f));
    this.mergeVertices();
  }
  function pb(a, b, c, d, e, f) {
    function g(a, b, c, d, e, f, g, l, X, B, Lb) {
      var t = f / X,
        u = g / B,
        w = f / 2,
        v = g / 2,
        A = l / 2;
      g = X + 1;
      var y = B + 1,
        H = (f = 0),
        N,
        z,
        C = new p();
      for (z = 0; z < y; z++) {
        var D = z * u - v;
        for (N = 0; N < g; N++)
          (C[a] = (N * t - w) * d),
            (C[b] = D * e),
            (C[c] = A),
            m.push(C.x, C.y, C.z),
            (C[a] = 0),
            (C[b] = 0),
            (C[c] = 0 < l ? 1 : -1),
            q.push(C.x, C.y, C.z),
            n.push(N / X),
            n.push(1 - z / B),
            (f += 1);
      }
      for (z = 0; z < B; z++)
        for (N = 0; N < X; N++)
          (a = r + N + g * (z + 1)),
            (b = r + (N + 1) + g * (z + 1)),
            (c = r + (N + 1) + g * z),
            k.push(r + N + g * z, a, c),
            k.push(a, b, c),
            (H += 6);
      h.addGroup(x, H, Lb);
      x += H;
      r += f;
    }
    E.call(this);
    this.type = "BoxBufferGeometry";
    this.parameters = {
      width: a,
      height: b,
      depth: c,
      widthSegments: d,
      heightSegments: e,
      depthSegments: f
    };
    var h = this;
    a = a || 1;
    b = b || 1;
    c = c || 1;
    d = Math.floor(d) || 1;
    e = Math.floor(e) || 1;
    f = Math.floor(f) || 1;
    var k = [],
      m = [],
      q = [],
      n = [],
      r = 0,
      x = 0;
    g("z", "y", "x", -1, -1, c, b, a, f, e, 0);
    g("z", "y", "x", 1, -1, c, b, -a, f, e, 1);
    g("x", "z", "y", 1, 1, a, c, b, d, f, 2);
    g("x", "z", "y", 1, -1, a, c, -b, d, f, 3);
    g("x", "y", "z", 1, -1, a, b, c, d, e, 4);
    g("x", "y", "z", -1, -1, a, b, -c, d, e, 5);
    this.setIndex(k);
    this.addAttribute("position", new C(m, 3));
    this.addAttribute("normal", new C(q, 3));
    this.addAttribute("uv", new C(n, 2));
  }
  function yc(a, b, c, d) {
    I.call(this);
    this.type = "PlaneGeometry";
    this.parameters = {
      width: a,
      height: b,
      widthSegments: c,
      heightSegments: d
    };
    this.fromBufferGeometry(new qb(a, b, c, d));
    this.mergeVertices();
  }
  function qb(a, b, c, d) {
    E.call(this);
    this.type = "PlaneBufferGeometry";
    this.parameters = {
      width: a,
      height: b,
      widthSegments: c,
      heightSegments: d
    };
    a = a || 1;
    b = b || 1;
    var e = a / 2,
      f = b / 2;
    c = Math.floor(c) || 1;
    d = Math.floor(d) || 1;
    var g = c + 1,
      h = d + 1,
      k = a / c,
      m = b / d,
      q = [],
      n = [],
      r = [],
      x = [];
    for (a = 0; a < h; a++) {
      var t = a * m - f;
      for (b = 0; b < g; b++)
        n.push(b * k - e, -t, 0),
          r.push(0, 0, 1),
          x.push(b / c),
          x.push(1 - a / d);
    }
    for (a = 0; a < d; a++)
      for (b = 0; b < c; b++)
        (e = b + g * (a + 1)),
          (f = b + 1 + g * (a + 1)),
          (h = b + 1 + g * a),
          q.push(b + g * a, e, h),
          q.push(e, f, h);
    this.setIndex(q);
    this.addAttribute("position", new C(n, 3));
    this.addAttribute("normal", new C(r, 3));
    this.addAttribute("uv", new C(x, 2));
  }
  function L() {
    Object.defineProperty(this, "id", { value: Pf++ });
    this.uuid = R.generateUUID();
    this.name = "";
    this.type = "Material";
    this.lights = this.fog = !0;
    this.blending = 1;
    this.side = 0;
    this.flatShading = !1;
    this.vertexColors = 0;
    this.opacity = 1;
    this.transparent = !1;
    this.blendSrc = 204;
    this.blendDst = 205;
    this.blendEquation = 100;
    this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null;
    this.depthFunc = 3;
    this.depthWrite = this.depthTest = !0;
    this.clippingPlanes = null;
    this.clipShadows = this.clipIntersection = !1;
    this.shadowSide = null;
    this.colorWrite = !0;
    this.precision = null;
    this.polygonOffset = !1;
    this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
    this.dithering = !1;
    this.alphaTest = 0;
    this.premultipliedAlpha = !1;
    this.visible = !0;
    this.userData = {};
    this.needsUpdate = !0;
  }
  function ka(a) {
    L.call(this);
    this.type = "ShaderMaterial";
    this.defines = {};
    this.uniforms = {};
    this.vertexShader =
      "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
    this.fragmentShader =
      "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
    this.linewidth = 1;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1;
    this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    };
    this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] };
    this.index0AttributeName = void 0;
    this.uniformsNeedUpdate = !1;
    void 0 !== a &&
      (void 0 !== a.attributes &&
        console.error(
          "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
        ),
      this.setValues(a));
  }
  function rb(a, b) {
    this.origin = void 0 !== a ? a : new p();
    this.direction = void 0 !== b ? b : new p();
  }
  function ha(a, b, c) {
    this.a = void 0 !== a ? a : new p();
    this.b = void 0 !== b ? b : new p();
    this.c = void 0 !== c ? c : new p();
  }
  function Ea(a) {
    L.call(this);
    this.type = "MeshBasicMaterial";
    this.color = new G(16777215);
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.envMap = this.alphaMap = this.specularMap = null;
    this.combine = 0;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.lights = this.morphTargets = this.skinning = !1;
    this.setValues(a);
  }
  function pa(a, b) {
    D.call(this);
    this.type = "Mesh";
    this.geometry = void 0 !== a ? a : new E();
    this.material =
      void 0 !== b ? b : new Ea({ color: 16777215 * Math.random() });
    this.drawMode = 0;
    this.updateMorphTargets();
  }
  function Qf(a, b, c, d) {
    function e(a, c) {
      b.buffers.color.setClear(a.r, a.g, a.b, c, d);
    }
    var f = new G(0),
      g = 0,
      h,
      k;
    return {
      getClearColor: function() {
        return f;
      },
      setClearColor: function(a, b) {
        f.set(a);
        g = void 0 !== b ? b : 1;
        e(f, g);
      },
      getClearAlpha: function() {
        return g;
      },
      setClearAlpha: function(a) {
        g = a;
        e(f, g);
      },
      render: function(b, d, n, r) {
        d = d.background;
        null === d ? e(f, g) : d && d.isColor && (e(d, 1), (r = !0));
        (a.autoClear || r) &&
          a.clear(a.autoClearColor, a.autoClearDepth, a.autoClearStencil);
        d && (d.isCubeTexture || d.isWebGLRenderTargetCube)
          ? (void 0 === k &&
              ((k = new pa(
                new pb(1, 1, 1),
                new ka({
                  type: "BackgroundCubeMaterial",
                  uniforms: va.clone(Qa.cube.uniforms),
                  vertexShader: Qa.cube.vertexShader,
                  fragmentShader: Qa.cube.fragmentShader,
                  side: 1,
                  depthTest: !0,
                  depthWrite: !1,
                  fog: !1
                })
              )),
              k.geometry.removeAttribute("normal"),
              k.geometry.removeAttribute("uv"),
              (k.onBeforeRender = function(a, b, c) {
                this.matrixWorld.copyPosition(c.matrixWorld);
              }),
              c.update(k)),
            (k.material.uniforms.tCube.value = d.isWebGLRenderTargetCube
              ? d.texture
              : d),
            (k.material.uniforms.tFlip.value = d.isWebGLRenderTargetCube
              ? 1
              : -1),
            b.push(k, k.geometry, k.material, 0, null))
          : d &&
            d.isTexture &&
            (void 0 === h &&
              ((h = new pa(
                new qb(2, 2),
                new ka({
                  type: "BackgroundMaterial",
                  uniforms: va.clone(Qa.background.uniforms),
                  vertexShader: Qa.background.vertexShader,
                  fragmentShader: Qa.background.fragmentShader,
                  side: 0,
                  depthTest: !0,
                  depthWrite: !1,
                  fog: !1
                })
              )),
              h.geometry.removeAttribute("normal"),
              c.update(h)),
            (h.material.uniforms.t2D.value = d),
            !0 === d.matrixAutoUpdate && d.updateMatrix(),
            h.material.uniforms.uvTransform.value.copy(d.matrix),
            b.push(h, h.geometry, h.material, 0, null));
      }
    };
  }
  function Rf(a, b, c, d) {
    var e;
    this.setMode = function(a) {
      e = a;
    };
    this.render = function(b, d) {
      a.drawArrays(e, b, d);
      c.update(d, e);
    };
    this.renderInstances = function(f, g, h) {
      if (d.isWebGL2) var k = a;
      else if (((k = b.get("ANGLE_instanced_arrays")), null === k)) {
        console.error(
          "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
        );
        return;
      }
      k[d.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](
        e,
        g,
        h,
        f.maxInstancedCount
      );
      c.update(h, e, f.maxInstancedCount);
    };
  }
  function Sf(a, b, c) {
    function d(b) {
      if ("highp" === b) {
        if (
          0 < a.getShaderPrecisionFormat(35633, 36338).precision &&
          0 < a.getShaderPrecisionFormat(35632, 36338).precision
        )
          return "highp";
        b = "mediump";
      }
      return "mediump" === b &&
        0 < a.getShaderPrecisionFormat(35633, 36337).precision &&
        0 < a.getShaderPrecisionFormat(35632, 36337).precision
        ? "mediump"
        : "lowp";
    }
    var e,
      f =
        "undefined" !== typeof WebGL2RenderingContext &&
        a instanceof WebGL2RenderingContext,
      g = void 0 !== c.precision ? c.precision : "highp",
      h = d(g);
    h !== g &&
      (console.warn(
        "THREE.WebGLRenderer:",
        g,
        "not supported, using",
        h,
        "instead."
      ),
      (g = h));
    c = !0 === c.logarithmicDepthBuffer;
    h = a.getParameter(34930);
    var k = a.getParameter(35660),
      m = a.getParameter(3379),
      q = a.getParameter(34076),
      n = a.getParameter(34921),
      r = a.getParameter(36347),
      x = a.getParameter(36348),
      t = a.getParameter(36349),
      l = 0 < k,
      w = f || !!b.get("OES_texture_float");
    return {
      isWebGL2: f,
      getMaxAnisotropy: function() {
        if (void 0 !== e) return e;
        var c = b.get("EXT_texture_filter_anisotropic");
        return (e =
          null !== c ? a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0);
      },
      getMaxPrecision: d,
      precision: g,
      logarithmicDepthBuffer: c,
      maxTextures: h,
      maxVertexTextures: k,
      maxTextureSize: m,
      maxCubemapSize: q,
      maxAttributes: n,
      maxVertexUniforms: r,
      maxVaryings: x,
      maxFragmentUniforms: t,
      vertexTextures: l,
      floatFragmentTextures: w,
      floatVertexTextures: l && w
    };
  }
  function Tf() {
    function a() {
      m.value !== d && ((m.value = d), (m.needsUpdate = 0 < e));
      c.numPlanes = e;
      c.numIntersection = 0;
    }
    function b(a, b, d, e) {
      var f = null !== a ? a.length : 0,
        g = null;
      if (0 !== f) {
        g = m.value;
        if (!0 !== e || null === g) {
          e = d + 4 * f;
          b = b.matrixWorldInverse;
          k.getNormalMatrix(b);
          if (null === g || g.length < e) g = new Float32Array(e);
          for (e = 0; e !== f; ++e, d += 4)
            h.copy(a[e]).applyMatrix4(b, k),
              h.normal.toArray(g, d),
              (g[d + 3] = h.constant);
        }
        m.value = g;
        m.needsUpdate = !0;
      }
      c.numPlanes = f;
      return g;
    }
    var c = this,
      d = null,
      e = 0,
      f = !1,
      g = !1,
      h = new Pa(),
      k = new da(),
      m = { value: null, needsUpdate: !1 };
    this.uniform = m;
    this.numIntersection = this.numPlanes = 0;
    this.init = function(a, c, g) {
      var h = 0 !== a.length || c || 0 !== e || f;
      f = c;
      d = b(a, g, 0);
      e = a.length;
      return h;
    };
    this.beginShadows = function() {
      g = !0;
      b(null);
    };
    this.endShadows = function() {
      g = !1;
      a();
    };
    this.setState = function(c, h, k, x, l, u) {
      if (!f || null === c || 0 === c.length || (g && !k)) g ? b(null) : a();
      else {
        k = g ? 0 : e;
        var n = 4 * k,
          q = l.clippingState || null;
        m.value = q;
        q = b(c, x, n, u);
        for (c = 0; c !== n; ++c) q[c] = d[c];
        l.clippingState = q;
        this.numIntersection = h ? this.numPlanes : 0;
        this.numPlanes += k;
      }
    };
  }
  function Uf(a) {
    var b = {};
    return {
      get: function(c) {
        if (void 0 !== b[c]) return b[c];
        switch (c) {
          case "WEBGL_depth_texture":
            var d =
              a.getExtension("WEBGL_depth_texture") ||
              a.getExtension("MOZ_WEBGL_depth_texture") ||
              a.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
          case "EXT_texture_filter_anisotropic":
            d =
              a.getExtension("EXT_texture_filter_anisotropic") ||
              a.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
              a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
          case "WEBGL_compressed_texture_s3tc":
            d =
              a.getExtension("WEBGL_compressed_texture_s3tc") ||
              a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
              a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
          case "WEBGL_compressed_texture_pvrtc":
            d =
              a.getExtension("WEBGL_compressed_texture_pvrtc") ||
              a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
          default:
            d = a.getExtension(c);
        }
        null === d &&
          console.warn(
            "THREE.WebGLRenderer: " + c + " extension not supported."
          );
        return (b[c] = d);
      }
    };
  }
  function Vf(a, b, c) {
    function d(a) {
      var g = a.target;
      a = e[g.id];
      null !== a.index && b.remove(a.index);
      for (var k in a.attributes) b.remove(a.attributes[k]);
      g.removeEventListener("dispose", d);
      delete e[g.id];
      if ((k = f[a.id])) b.remove(k), delete f[a.id];
      c.memory.geometries--;
    }
    var e = {},
      f = {};
    return {
      get: function(a, b) {
        var f = e[b.id];
        if (f) return f;
        b.addEventListener("dispose", d);
        b.isBufferGeometry
          ? (f = b)
          : b.isGeometry &&
            (void 0 === b._bufferGeometry &&
              (b._bufferGeometry = new E().setFromObject(a)),
            (f = b._bufferGeometry));
        e[b.id] = f;
        c.memory.geometries++;
        return f;
      },
      update: function(a) {
        var c = a.index,
          d = a.attributes;
        null !== c && b.update(c, 34963);
        for (var e in d) b.update(d[e], 34962);
        a = a.morphAttributes;
        for (e in a) {
          c = a[e];
          d = 0;
          for (var f = c.length; d < f; d++) b.update(c[d], 34962);
        }
      },
      getWireframeAttribute: function(a) {
        var c = f[a.id];
        if (c) return c;
        c = [];
        var d = a.index,
          e = a.attributes;
        if (null !== d) {
          d = d.array;
          e = 0;
          for (var g = d.length; e < g; e += 3) {
            var n = d[e + 0],
              r = d[e + 1],
              x = d[e + 2];
            c.push(n, r, r, x, x, n);
          }
        } else
          for (d = e.position.array, e = 0, g = d.length / 3 - 1; e < g; e += 3)
            (n = e + 0), (r = e + 1), (x = e + 2), c.push(n, r, r, x, x, n);
        c = new (65535 < Je(c) ? ob : nb)(c, 1);
        b.update(c, 34963);
        return (f[a.id] = c);
      }
    };
  }
  function Wf(a, b, c, d) {
    var e, f, g;
    this.setMode = function(a) {
      e = a;
    };
    this.setIndex = function(a) {
      f = a.type;
      g = a.bytesPerElement;
    };
    this.render = function(b, d) {
      a.drawElements(e, d, f, b * g);
      c.update(d, e);
    };
    this.renderInstances = function(h, k, m) {
      if (d.isWebGL2) var q = a;
      else if (((q = b.get("ANGLE_instanced_arrays")), null === q)) {
        console.error(
          "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
        );
        return;
      }
      q[d.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](
        e,
        m,
        f,
        k * g,
        h.maxInstancedCount
      );
      c.update(m, e, h.maxInstancedCount);
    };
  }
  function Xf(a) {
    var b = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return {
      memory: { geometries: 0, textures: 0 },
      render: b,
      programs: null,
      autoReset: !0,
      reset: function() {
        b.frame++;
        b.calls = 0;
        b.triangles = 0;
        b.points = 0;
        b.lines = 0;
      },
      update: function(a, d, e) {
        e = e || 1;
        b.calls++;
        switch (d) {
          case 4:
            b.triangles += (a / 3) * e;
            break;
          case 5:
          case 6:
            b.triangles += e * (a - 2);
            break;
          case 1:
            b.lines += (a / 2) * e;
            break;
          case 3:
            b.lines += e * (a - 1);
            break;
          case 2:
            b.lines += e * a;
            break;
          case 0:
            b.points += e * a;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", d);
        }
      }
    };
  }
  function Yf(a, b) {
    return Math.abs(b[1]) - Math.abs(a[1]);
  }
  function Zf(a) {
    var b = {},
      c = new Float32Array(8);
    return {
      update: function(d, e, f, g) {
        var h = d.morphTargetInfluences,
          k = h.length;
        d = b[e.id];
        if (void 0 === d) {
          d = [];
          for (var m = 0; m < k; m++) d[m] = [m, 0];
          b[e.id] = d;
        }
        var q = f.morphTargets && e.morphAttributes.position;
        f = f.morphNormals && e.morphAttributes.normal;
        for (m = 0; m < k; m++) {
          var n = d[m];
          0 !== n[1] &&
            (q && e.removeAttribute("morphTarget" + m),
            f && e.removeAttribute("morphNormal" + m));
        }
        for (m = 0; m < k; m++) (n = d[m]), (n[0] = m), (n[1] = h[m]);
        d.sort(Yf);
        for (m = 0; 8 > m; m++) {
          if ((n = d[m]))
            if (((h = n[0]), (k = n[1]))) {
              q && e.addAttribute("morphTarget" + m, q[h]);
              f && e.addAttribute("morphNormal" + m, f[h]);
              c[m] = k;
              continue;
            }
          c[m] = 0;
        }
        g.getUniforms().setValue(a, "morphTargetInfluences", c);
      }
    };
  }
  function $f(a, b) {
    var c = {};
    return {
      update: function(d) {
        var e = b.render.frame,
          f = d.geometry,
          g = a.get(d, f);
        c[g.id] !== e &&
          (f.isGeometry && g.updateFromObject(d), a.update(g), (c[g.id] = e));
        return g;
      },
      dispose: function() {
        c = {};
      }
    };
  }
  function Ya(a, b, c, d, e, f, g, h, k, m) {
    a = void 0 !== a ? a : [];
    W.call(this, a, void 0 !== b ? b : 301, c, d, e, f, g, h, k, m);
    this.flipY = !1;
  }
  function Mb(a, b, c, d) {
    W.call(this, null);
    this.image = { data: a, width: b, height: c, depth: d };
    this.minFilter = this.magFilter = 1003;
    this.flipY = this.generateMipmaps = !1;
  }
  function Nb(a, b, c) {
    var d = a[0];
    if (0 >= d || 0 < d) return a;
    var e = b * c,
      f = Ke[e];
    void 0 === f && ((f = new Float32Array(e)), (Ke[e] = f));
    if (0 !== b)
      for (d.toArray(f, 0), d = 1, e = 0; d !== b; ++d)
        (e += c), a[d].toArray(f, e);
    return f;
  }
  function ea(a, b) {
    if (a.length !== b.length) return !1;
    for (var c = 0, d = a.length; c < d; c++) if (a[c] !== b[c]) return !1;
    return !0;
  }
  function sa(a, b) {
    for (var c = 0, d = b.length; c < d; c++) a[c] = b[c];
  }
  function Le(a, b) {
    var c = Me[b];
    void 0 === c && ((c = new Int32Array(b)), (Me[b] = c));
    for (var d = 0; d !== b; ++d) c[d] = a.allocTextureUnit();
    return c;
  }
  function ag(a, b) {
    var c = this.cache;
    c[0] !== b && (a.uniform1f(this.addr, b), (c[0] = b));
  }
  function bg(a, b) {
    var c = this.cache;
    c[0] !== b && (a.uniform1i(this.addr, b), (c[0] = b));
  }
  function cg(a, b) {
    var c = this.cache;
    if (void 0 !== b.x) {
      if (c[0] !== b.x || c[1] !== b.y)
        a.uniform2f(this.addr, b.x, b.y), (c[0] = b.x), (c[1] = b.y);
    } else ea(c, b) || (a.uniform2fv(this.addr, b), sa(c, b));
  }
  function dg(a, b) {
    var c = this.cache;
    if (void 0 !== b.x) {
      if (c[0] !== b.x || c[1] !== b.y || c[2] !== b.z)
        a.uniform3f(this.addr, b.x, b.y, b.z),
          (c[0] = b.x),
          (c[1] = b.y),
          (c[2] = b.z);
    } else if (void 0 !== b.r) {
      if (c[0] !== b.r || c[1] !== b.g || c[2] !== b.b)
        a.uniform3f(this.addr, b.r, b.g, b.b),
          (c[0] = b.r),
          (c[1] = b.g),
          (c[2] = b.b);
    } else ea(c, b) || (a.uniform3fv(this.addr, b), sa(c, b));
  }
  function eg(a, b) {
    var c = this.cache;
    if (void 0 !== b.x) {
      if (c[0] !== b.x || c[1] !== b.y || c[2] !== b.z || c[3] !== b.w)
        a.uniform4f(this.addr, b.x, b.y, b.z, b.w),
          (c[0] = b.x),
          (c[1] = b.y),
          (c[2] = b.z),
          (c[3] = b.w);
    } else ea(c, b) || (a.uniform4fv(this.addr, b), sa(c, b));
  }
  function fg(a, b) {
    var c = this.cache,
      d = b.elements;
    void 0 === d
      ? ea(c, b) || (a.uniformMatrix2fv(this.addr, !1, b), sa(c, b))
      : ea(c, d) ||
        (Ne.set(d), a.uniformMatrix2fv(this.addr, !1, Ne), sa(c, d));
  }
  function gg(a, b) {
    var c = this.cache,
      d = b.elements;
    void 0 === d
      ? ea(c, b) || (a.uniformMatrix3fv(this.addr, !1, b), sa(c, b))
      : ea(c, d) ||
        (Oe.set(d), a.uniformMatrix3fv(this.addr, !1, Oe), sa(c, d));
  }
  function hg(a, b) {
    var c = this.cache,
      d = b.elements;
    void 0 === d
      ? ea(c, b) || (a.uniformMatrix4fv(this.addr, !1, b), sa(c, b))
      : ea(c, d) ||
        (Pe.set(d), a.uniformMatrix4fv(this.addr, !1, Pe), sa(c, d));
  }
  function ig(a, b, c) {
    var d = this.cache,
      e = c.allocTextureUnit();
    d[0] !== e && (a.uniform1i(this.addr, e), (d[0] = e));
    c.setTexture2D(b || Qe, e);
  }
  function jg(a, b, c) {
    var d = this.cache,
      e = c.allocTextureUnit();
    d[0] !== e && (a.uniform1i(this.addr, e), (d[0] = e));
    c.setTexture3D(b || kg, e);
  }
  function lg(a, b, c) {
    var d = this.cache,
      e = c.allocTextureUnit();
    d[0] !== e && (a.uniform1i(this.addr, e), (d[0] = e));
    c.setTextureCube(b || Re, e);
  }
  function Se(a, b) {
    var c = this.cache;
    ea(c, b) || (a.uniform2iv(this.addr, b), sa(c, b));
  }
  function Te(a, b) {
    var c = this.cache;
    ea(c, b) || (a.uniform3iv(this.addr, b), sa(c, b));
  }
  function Ue(a, b) {
    var c = this.cache;
    ea(c, b) || (a.uniform4iv(this.addr, b), sa(c, b));
  }
  function mg(a) {
    switch (a) {
      case 5126:
        return ag;
      case 35664:
        return cg;
      case 35665:
        return dg;
      case 35666:
        return eg;
      case 35674:
        return fg;
      case 35675:
        return gg;
      case 35676:
        return hg;
      case 35678:
      case 36198:
        return ig;
      case 35679:
        return jg;
      case 35680:
        return lg;
      case 5124:
      case 35670:
        return bg;
      case 35667:
      case 35671:
        return Se;
      case 35668:
      case 35672:
        return Te;
      case 35669:
      case 35673:
        return Ue;
    }
  }
  function ng(a, b) {
    var c = this.cache;
    ea(c, b) || (a.uniform1fv(this.addr, b), sa(c, b));
  }
  function og(a, b) {
    var c = this.cache;
    ea(c, b) || (a.uniform1iv(this.addr, b), sa(c, b));
  }
  function pg(a, b) {
    var c = this.cache;
    b = Nb(b, this.size, 2);
    ea(c, b) || (a.uniform2fv(this.addr, b), this.updateCache(b));
  }
  function qg(a, b) {
    var c = this.cache;
    b = Nb(b, this.size, 3);
    ea(c, b) || (a.uniform3fv(this.addr, b), this.updateCache(b));
  }
  function rg(a, b) {
    var c = this.cache;
    b = Nb(b, this.size, 4);
    ea(c, b) || (a.uniform4fv(this.addr, b), this.updateCache(b));
  }
  function sg(a, b) {
    var c = this.cache;
    b = Nb(b, this.size, 4);
    ea(c, b) || (a.uniformMatrix2fv(this.addr, !1, b), this.updateCache(b));
  }
  function tg(a, b) {
    var c = this.cache;
    b = Nb(b, this.size, 9);
    ea(c, b) || (a.uniformMatrix3fv(this.addr, !1, b), this.updateCache(b));
  }
  function ug(a, b) {
    var c = this.cache;
    b = Nb(b, this.size, 16);
    ea(c, b) || (a.uniformMatrix4fv(this.addr, !1, b), this.updateCache(b));
  }
  function vg(a, b, c) {
    var d = this.cache,
      e = b.length,
      f = Le(c, e);
    !1 === ea(d, f) && (a.uniform1iv(this.addr, f), sa(d, f));
    for (a = 0; a !== e; ++a) c.setTexture2D(b[a] || Qe, f[a]);
  }
  function wg(a, b, c) {
    var d = this.cache,
      e = b.length,
      f = Le(c, e);
    !1 === ea(d, f) && (a.uniform1iv(this.addr, f), sa(d, f));
    for (a = 0; a !== e; ++a) c.setTextureCube(b[a] || Re, f[a]);
  }
  function xg(a) {
    switch (a) {
      case 5126:
        return ng;
      case 35664:
        return pg;
      case 35665:
        return qg;
      case 35666:
        return rg;
      case 35674:
        return sg;
      case 35675:
        return tg;
      case 35676:
        return ug;
      case 35678:
        return vg;
      case 35680:
        return wg;
      case 5124:
      case 35670:
        return og;
      case 35667:
      case 35671:
        return Se;
      case 35668:
      case 35672:
        return Te;
      case 35669:
      case 35673:
        return Ue;
    }
  }
  function yg(a, b, c) {
    this.id = a;
    this.addr = c;
    this.cache = [];
    this.setValue = mg(b.type);
  }
  function Ve(a, b, c) {
    this.id = a;
    this.addr = c;
    this.cache = [];
    this.size = b.size;
    this.setValue = xg(b.type);
  }
  function We(a) {
    this.id = a;
    this.seq = [];
    this.map = {};
  }
  function db(a, b, c) {
    this.seq = [];
    this.map = {};
    this.renderer = c;
    c = a.getProgramParameter(b, 35718);
    for (var d = 0; d < c; ++d) {
      var e = a.getActiveUniform(b, d),
        f = a.getUniformLocation(b, e.name),
        g = this,
        h = e.name,
        k = h.length;
      for ($d.lastIndex = 0; ; ) {
        var m = $d.exec(h),
          q = $d.lastIndex,
          n = m[1],
          r = m[3];
        "]" === m[2] && (n |= 0);
        if (void 0 === r || ("[" === r && q + 2 === k)) {
          h = g;
          e = void 0 === r ? new yg(n, e, f) : new Ve(n, e, f);
          h.seq.push(e);
          h.map[e.id] = e;
          break;
        } else
          (r = g.map[n]),
            void 0 === r &&
              ((r = new We(n)),
              (n = g),
              (g = r),
              n.seq.push(g),
              (n.map[g.id] = g)),
            (g = r);
      }
    }
  }
  function zg(a) {
    a = a.split("\n");
    for (var b = 0; b < a.length; b++) a[b] = b + 1 + ": " + a[b];
    return a.join("\n");
  }
  function Xe(a, b, c) {
    var d = a.createShader(b);
    a.shaderSource(d, c);
    a.compileShader(d);
    !1 === a.getShaderParameter(d, 35713) &&
      console.error("THREE.WebGLShader: Shader couldn't compile.");
    "" !== a.getShaderInfoLog(d) &&
      console.warn(
        "THREE.WebGLShader: gl.getShaderInfoLog()",
        35633 === b ? "vertex" : "fragment",
        a.getShaderInfoLog(d),
        zg(c)
      );
    return d;
  }
  function Ye(a) {
    switch (a) {
      case 3e3:
        return ["Linear", "( value )"];
      case 3001:
        return ["sRGB", "( value )"];
      case 3002:
        return ["RGBE", "( value )"];
      case 3004:
        return ["RGBM", "( value, 7.0 )"];
      case 3005:
        return ["RGBM", "( value, 16.0 )"];
      case 3006:
        return ["RGBD", "( value, 256.0 )"];
      case 3007:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
      default:
        throw Error("unsupported encoding: " + a);
    }
  }
  function td(a, b) {
    b = Ye(b);
    return (
      "vec4 " +
      a +
      "( vec4 value ) { return " +
      b[0] +
      "ToLinear" +
      b[1] +
      "; }"
    );
  }
  function Ag(a, b) {
    b = Ye(b);
    return (
      "vec4 " + a + "( vec4 value ) { return LinearTo" + b[0] + b[1] + "; }"
    );
  }
  function Bg(a, b) {
    switch (b) {
      case 1:
        b = "Linear";
        break;
      case 2:
        b = "Reinhard";
        break;
      case 3:
        b = "Uncharted2";
        break;
      case 4:
        b = "OptimizedCineon";
        break;
      default:
        throw Error("unsupported toneMapping: " + b);
    }
    return (
      "vec3 " + a + "( vec3 color ) { return " + b + "ToneMapping( color ); }"
    );
  }
  function Cg(a, b, c) {
    a = a || {};
    return [
      a.derivatives ||
      b.envMapCubeUV ||
      b.bumpMap ||
      (b.normalMap && !b.objectSpaceNormalMap) ||
      b.flatShading
        ? "#extension GL_OES_standard_derivatives : enable"
        : "",
      (a.fragDepth || b.logarithmicDepthBuffer) && c.get("EXT_frag_depth")
        ? "#extension GL_EXT_frag_depth : enable"
        : "",
      a.drawBuffers && c.get("WEBGL_draw_buffers")
        ? "#extension GL_EXT_draw_buffers : require"
        : "",
      (a.shaderTextureLOD || b.envMap) && c.get("EXT_shader_texture_lod")
        ? "#extension GL_EXT_shader_texture_lod : enable"
        : ""
    ]
      .filter(zc)
      .join("\n");
  }
  function Dg(a) {
    var b = [],
      c;
    for (c in a) {
      var d = a[c];
      !1 !== d && b.push("#define " + c + " " + d);
    }
    return b.join("\n");
  }
  function zc(a) {
    return "" !== a;
  }
  function Ze(a, b) {
    return a
      .replace(/NUM_DIR_LIGHTS/g, b.numDirLights)
      .replace(/NUM_SPOT_LIGHTS/g, b.numSpotLights)
      .replace(/NUM_RECT_AREA_LIGHTS/g, b.numRectAreaLights)
      .replace(/NUM_POINT_LIGHTS/g, b.numPointLights)
      .replace(/NUM_HEMI_LIGHTS/g, b.numHemiLights);
  }
  function $e(a, b) {
    return a
      .replace(/NUM_CLIPPING_PLANES/g, b.numClippingPlanes)
      .replace(
        /UNION_CLIPPING_PLANES/g,
        b.numClippingPlanes - b.numClipIntersection
      );
  }
  function ae(a) {
    return a.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, function(a, c) {
      a = K[c];
      if (void 0 === a) throw Error("Can not resolve #include <" + c + ">");
      return ae(a);
    });
  }
  function af(a) {
    return a.replace(
      /#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
      function(a, c, d, e) {
        a = "";
        for (c = parseInt(c); c < parseInt(d); c++)
          a += e.replace(/\[ i \]/g, "[ " + c + " ]");
        return a;
      }
    );
  }
  function Eg(a, b, c, d, e, f, g) {
    var h = a.context,
      k = d.defines,
      m = e.vertexShader,
      q = e.fragmentShader,
      n = "SHADOWMAP_TYPE_BASIC";
    1 === f.shadowMapType
      ? (n = "SHADOWMAP_TYPE_PCF")
      : 2 === f.shadowMapType && (n = "SHADOWMAP_TYPE_PCF_SOFT");
    var r = "ENVMAP_TYPE_CUBE",
      x = "ENVMAP_MODE_REFLECTION",
      l = "ENVMAP_BLENDING_MULTIPLY";
    if (f.envMap) {
      switch (d.envMap.mapping) {
        case 301:
        case 302:
          r = "ENVMAP_TYPE_CUBE";
          break;
        case 306:
        case 307:
          r = "ENVMAP_TYPE_CUBE_UV";
          break;
        case 303:
        case 304:
          r = "ENVMAP_TYPE_EQUIREC";
          break;
        case 305:
          r = "ENVMAP_TYPE_SPHERE";
      }
      switch (d.envMap.mapping) {
        case 302:
        case 304:
          x = "ENVMAP_MODE_REFRACTION";
      }
      switch (d.combine) {
        case 0:
          l = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case 1:
          l = "ENVMAP_BLENDING_MIX";
          break;
        case 2:
          l = "ENVMAP_BLENDING_ADD";
      }
    }
    var u = 0 < a.gammaFactor ? a.gammaFactor : 1,
      w = g.isWebGL2 ? "" : Cg(d.extensions, f, b),
      p = Dg(k),
      v = h.createProgram();
    d.isRawShaderMaterial
      ? ((k = [p].filter(zc).join("\n")),
        0 < k.length && (k += "\n"),
        (b = [w, p].filter(zc).join("\n")),
        0 < b.length && (b += "\n"))
      : ((k = [
          "precision " + f.precision + " float;",
          "precision " + f.precision + " int;",
          "#define SHADER_NAME " + e.name,
          p,
          f.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
          "#define GAMMA_FACTOR " + u,
          "#define MAX_BONES " + f.maxBones,
          f.useFog && f.fog ? "#define USE_FOG" : "",
          f.useFog && f.fogExp ? "#define FOG_EXP2" : "",
          f.map ? "#define USE_MAP" : "",
          f.envMap ? "#define USE_ENVMAP" : "",
          f.envMap ? "#define " + x : "",
          f.lightMap ? "#define USE_LIGHTMAP" : "",
          f.aoMap ? "#define USE_AOMAP" : "",
          f.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          f.bumpMap ? "#define USE_BUMPMAP" : "",
          f.normalMap ? "#define USE_NORMALMAP" : "",
          f.normalMap && f.objectSpaceNormalMap
            ? "#define OBJECTSPACE_NORMALMAP"
            : "",
          f.displacementMap && f.supportsVertexTextures
            ? "#define USE_DISPLACEMENTMAP"
            : "",
          f.specularMap ? "#define USE_SPECULARMAP" : "",
          f.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          f.metalnessMap ? "#define USE_METALNESSMAP" : "",
          f.alphaMap ? "#define USE_ALPHAMAP" : "",
          f.vertexColors ? "#define USE_COLOR" : "",
          f.flatShading ? "#define FLAT_SHADED" : "",
          f.skinning ? "#define USE_SKINNING" : "",
          f.useVertexTexture ? "#define BONE_TEXTURE" : "",
          f.morphTargets ? "#define USE_MORPHTARGETS" : "",
          f.morphNormals && !1 === f.flatShading
            ? "#define USE_MORPHNORMALS"
            : "",
          f.doubleSided ? "#define DOUBLE_SIDED" : "",
          f.flipSided ? "#define FLIP_SIDED" : "",
          f.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          f.shadowMapEnabled ? "#define " + n : "",
          f.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
          f.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          f.logarithmicDepthBuffer && (g.isWebGL2 || b.get("EXT_frag_depth"))
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          "uniform mat4 modelMatrix;",
          "uniform mat4 modelViewMatrix;",
          "uniform mat4 projectionMatrix;",
          "uniform mat4 viewMatrix;",
          "uniform mat3 normalMatrix;",
          "uniform vec3 cameraPosition;",
          "attribute vec3 position;",
          "attribute vec3 normal;",
          "attribute vec2 uv;",
          "#ifdef USE_COLOR",
          "\tattribute vec3 color;",
          "#endif",
          "#ifdef USE_MORPHTARGETS",
          "\tattribute vec3 morphTarget0;",
          "\tattribute vec3 morphTarget1;",
          "\tattribute vec3 morphTarget2;",
          "\tattribute vec3 morphTarget3;",
          "\t#ifdef USE_MORPHNORMALS",
          "\t\tattribute vec3 morphNormal0;",
          "\t\tattribute vec3 morphNormal1;",
          "\t\tattribute vec3 morphNormal2;",
          "\t\tattribute vec3 morphNormal3;",
          "\t#else",
          "\t\tattribute vec3 morphTarget4;",
          "\t\tattribute vec3 morphTarget5;",
          "\t\tattribute vec3 morphTarget6;",
          "\t\tattribute vec3 morphTarget7;",
          "\t#endif",
          "#endif",
          "#ifdef USE_SKINNING",
          "\tattribute vec4 skinIndex;",
          "\tattribute vec4 skinWeight;",
          "#endif",
          "\n"
        ]
          .filter(zc)
          .join("\n")),
        (b = [
          w,
          "precision " + f.precision + " float;",
          "precision " + f.precision + " int;",
          "#define SHADER_NAME " + e.name,
          p,
          f.alphaTest
            ? "#define ALPHATEST " + f.alphaTest + (f.alphaTest % 1 ? "" : ".0")
            : "",
          "#define GAMMA_FACTOR " + u,
          f.useFog && f.fog ? "#define USE_FOG" : "",
          f.useFog && f.fogExp ? "#define FOG_EXP2" : "",
          f.map ? "#define USE_MAP" : "",
          f.envMap ? "#define USE_ENVMAP" : "",
          f.envMap ? "#define " + r : "",
          f.envMap ? "#define " + x : "",
          f.envMap ? "#define " + l : "",
          f.lightMap ? "#define USE_LIGHTMAP" : "",
          f.aoMap ? "#define USE_AOMAP" : "",
          f.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          f.bumpMap ? "#define USE_BUMPMAP" : "",
          f.normalMap ? "#define USE_NORMALMAP" : "",
          f.normalMap && f.objectSpaceNormalMap
            ? "#define OBJECTSPACE_NORMALMAP"
            : "",
          f.specularMap ? "#define USE_SPECULARMAP" : "",
          f.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          f.metalnessMap ? "#define USE_METALNESSMAP" : "",
          f.alphaMap ? "#define USE_ALPHAMAP" : "",
          f.vertexColors ? "#define USE_COLOR" : "",
          f.gradientMap ? "#define USE_GRADIENTMAP" : "",
          f.flatShading ? "#define FLAT_SHADED" : "",
          f.doubleSided ? "#define DOUBLE_SIDED" : "",
          f.flipSided ? "#define FLIP_SIDED" : "",
          f.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          f.shadowMapEnabled ? "#define " + n : "",
          f.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
          f.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
          f.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          f.logarithmicDepthBuffer && (g.isWebGL2 || b.get("EXT_frag_depth"))
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          f.envMap && (g.isWebGL2 || b.get("EXT_shader_texture_lod"))
            ? "#define TEXTURE_LOD_EXT"
            : "",
          "uniform mat4 viewMatrix;",
          "uniform vec3 cameraPosition;",
          0 !== f.toneMapping ? "#define TONE_MAPPING" : "",
          0 !== f.toneMapping ? K.tonemapping_pars_fragment : "",
          0 !== f.toneMapping ? Bg("toneMapping", f.toneMapping) : "",
          f.dithering ? "#define DITHERING" : "",
          f.outputEncoding ||
          f.mapEncoding ||
          f.matcapEncoding ||
          f.envMapEncoding ||
          f.emissiveMapEncoding
            ? K.encodings_pars_fragment
            : "",
          f.mapEncoding ? td("mapTexelToLinear", f.mapEncoding) : "",
          f.matcapEncoding ? td("matcapTexelToLinear", f.matcapEncoding) : "",
          f.envMapEncoding ? td("envMapTexelToLinear", f.envMapEncoding) : "",
          f.emissiveMapEncoding
            ? td("emissiveMapTexelToLinear", f.emissiveMapEncoding)
            : "",
          f.outputEncoding ? Ag("linearToOutputTexel", f.outputEncoding) : "",
          f.depthPacking ? "#define DEPTH_PACKING " + d.depthPacking : "",
          "\n"
        ]
          .filter(zc)
          .join("\n")));
    m = ae(m);
    m = Ze(m, f);
    m = $e(m, f);
    q = ae(q);
    q = Ze(q, f);
    q = $e(q, f);
    m = af(m);
    q = af(q);
    g.isWebGL2 &&
      !d.isRawShaderMaterial &&
      ((g = !1),
      (n = /^\s*#version\s+300\s+es\s*\n/),
      d.isShaderMaterial &&
        null !== m.match(n) &&
        null !== q.match(n) &&
        ((g = !0), (m = m.replace(n, "")), (q = q.replace(n, ""))),
      (k =
        "#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n" +
        k),
      (b =
        [
          "#version 300 es\n\n#define varying in",
          g ? "" : "out highp vec4 pc_fragColor;",
          g ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad"
        ].join("\n") +
        "\n" +
        b));
    q = b + q;
    m = Xe(h, 35633, k + m);
    q = Xe(h, 35632, q);
    h.attachShader(v, m);
    h.attachShader(v, q);
    void 0 !== d.index0AttributeName
      ? h.bindAttribLocation(v, 0, d.index0AttributeName)
      : !0 === f.morphTargets && h.bindAttribLocation(v, 0, "position");
    h.linkProgram(v);
    f = h.getProgramInfoLog(v).trim();
    g = h.getShaderInfoLog(m).trim();
    n = h.getShaderInfoLog(q).trim();
    x = r = !0;
    if (!1 === h.getProgramParameter(v, 35714))
      (r = !1),
        console.error(
          "THREE.WebGLProgram: shader error: ",
          h.getError(),
          "35715",
          h.getProgramParameter(v, 35715),
          "gl.getProgramInfoLog",
          f,
          g,
          n
        );
    else if ("" !== f)
      console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", f);
    else if ("" === g || "" === n) x = !1;
    x &&
      (this.diagnostics = {
        runnable: r,
        material: d,
        programLog: f,
        vertexShader: { log: g, prefix: k },
        fragmentShader: { log: n, prefix: b }
      });
    h.deleteShader(m);
    h.deleteShader(q);
    var H;
    this.getUniforms = function() {
      void 0 === H && (H = new db(h, v, a));
      return H;
    };
    var y;
    this.getAttributes = function() {
      if (void 0 === y) {
        for (
          var a = {}, b = h.getProgramParameter(v, 35721), c = 0;
          c < b;
          c++
        ) {
          var d = h.getActiveAttrib(v, c).name;
          a[d] = h.getAttribLocation(v, d);
        }
        y = a;
      }
      return y;
    };
    this.destroy = function() {
      h.deleteProgram(v);
      this.program = void 0;
    };
    Object.defineProperties(this, {
      uniforms: {
        get: function() {
          console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");
          return this.getUniforms();
        }
      },
      attributes: {
        get: function() {
          console.warn(
            "THREE.WebGLProgram: .attributes is now .getAttributes()."
          );
          return this.getAttributes();
        }
      }
    });
    this.name = e.name;
    this.id = Fg++;
    this.code = c;
    this.usedTimes = 1;
    this.program = v;
    this.vertexShader = m;
    this.fragmentShader = q;
    return this;
  }
  function Gg(a, b, c) {
    function d(a, b) {
      if (a)
        a.isTexture
          ? (c = a.encoding)
          : a.isWebGLRenderTarget &&
            (console.warn(
              "THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."
            ),
            (c = a.texture.encoding));
      else var c = 3e3;
      3e3 === c && b && (c = 3007);
      return c;
    }
    var e = [],
      f = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "phong",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
      },
      g = "precision supportsVertexTextures map mapEncoding matcapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering".split(
        " "
      );
    this.getParameters = function(b, e, g, q, n, r, x) {
      var h = f[b.type];
      if (x.isSkinnedMesh) {
        var k = x.skeleton.bones;
        if (c.floatVertexTextures) k = 1024;
        else {
          var m = Math.min(
            Math.floor((c.maxVertexUniforms - 20) / 4),
            k.length
          );
          m < k.length
            ? (console.warn(
                "THREE.WebGLRenderer: Skeleton has " +
                  k.length +
                  " bones. This GPU supports " +
                  m +
                  "."
              ),
              (k = 0))
            : (k = m);
        }
      } else k = 0;
      m = c.precision;
      null !== b.precision &&
        ((m = c.getMaxPrecision(b.precision)),
        m !== b.precision &&
          console.warn(
            "THREE.WebGLProgram.getParameters:",
            b.precision,
            "not supported, using",
            m,
            "instead."
          ));
      var l = a.getRenderTarget();
      return {
        shaderID: h,
        precision: m,
        supportsVertexTextures: c.vertexTextures,
        outputEncoding: d(l ? l.texture : null, a.gammaOutput),
        map: !!b.map,
        mapEncoding: d(b.map, a.gammaInput),
        matcap: !!b.matcap,
        matcapEncoding: d(b.matcap, a.gammaInput),
        envMap: !!b.envMap,
        envMapMode: b.envMap && b.envMap.mapping,
        envMapEncoding: d(b.envMap, a.gammaInput),
        envMapCubeUV:
          !!b.envMap && (306 === b.envMap.mapping || 307 === b.envMap.mapping),
        lightMap: !!b.lightMap,
        aoMap: !!b.aoMap,
        emissiveMap: !!b.emissiveMap,
        emissiveMapEncoding: d(b.emissiveMap, a.gammaInput),
        bumpMap: !!b.bumpMap,
        normalMap: !!b.normalMap,
        objectSpaceNormalMap: 1 === b.normalMapType,
        displacementMap: !!b.displacementMap,
        roughnessMap: !!b.roughnessMap,
        metalnessMap: !!b.metalnessMap,
        specularMap: !!b.specularMap,
        alphaMap: !!b.alphaMap,
        gradientMap: !!b.gradientMap,
        combine: b.combine,
        vertexColors: b.vertexColors,
        fog: !!q,
        useFog: b.fog,
        fogExp: q && q.isFogExp2,
        flatShading: b.flatShading,
        sizeAttenuation: b.sizeAttenuation,
        logarithmicDepthBuffer: c.logarithmicDepthBuffer,
        skinning: b.skinning && 0 < k,
        maxBones: k,
        useVertexTexture: c.floatVertexTextures,
        morphTargets: b.morphTargets,
        morphNormals: b.morphNormals,
        maxMorphTargets: a.maxMorphTargets,
        maxMorphNormals: a.maxMorphNormals,
        numDirLights: e.directional.length,
        numPointLights: e.point.length,
        numSpotLights: e.spot.length,
        numRectAreaLights: e.rectArea.length,
        numHemiLights: e.hemi.length,
        numClippingPlanes: n,
        numClipIntersection: r,
        dithering: b.dithering,
        shadowMapEnabled:
          a.shadowMap.enabled && x.receiveShadow && 0 < g.length,
        shadowMapType: a.shadowMap.type,
        toneMapping: a.toneMapping,
        physicallyCorrectLights: a.physicallyCorrectLights,
        premultipliedAlpha: b.premultipliedAlpha,
        alphaTest: b.alphaTest,
        doubleSided: 2 === b.side,
        flipSided: 1 === b.side,
        depthPacking: void 0 !== b.depthPacking ? b.depthPacking : !1
      };
    };
    this.getProgramCode = function(b, c) {
      var d = [];
      c.shaderID
        ? d.push(c.shaderID)
        : (d.push(b.fragmentShader), d.push(b.vertexShader));
      if (void 0 !== b.defines)
        for (var e in b.defines) d.push(e), d.push(b.defines[e]);
      for (e = 0; e < g.length; e++) d.push(c[g[e]]);
      d.push(b.onBeforeCompile.toString());
      d.push(a.gammaOutput);
      d.push(a.gammaFactor);
      return d.join();
    };
    this.acquireProgram = function(d, f, g, q) {
      for (var h, k = 0, m = e.length; k < m; k++) {
        var l = e[k];
        if (l.code === q) {
          h = l;
          ++h.usedTimes;
          break;
        }
      }
      void 0 === h && ((h = new Eg(a, b, q, d, f, g, c)), e.push(h));
      return h;
    };
    this.releaseProgram = function(a) {
      if (0 === --a.usedTimes) {
        var b = e.indexOf(a);
        e[b] = e[e.length - 1];
        e.pop();
        a.destroy();
      }
    };
    this.programs = e;
  }
  function Hg() {
    var a = new WeakMap();
    return {
      get: function(b) {
        var c = a.get(b);
        void 0 === c && ((c = {}), a.set(b, c));
        return c;
      },
      remove: function(b) {
        a.delete(b);
      },
      update: function(b, c, d) {
        a.get(b)[c] = d;
      },
      dispose: function() {
        a = new WeakMap();
      }
    };
  }
  function Ig(a, b) {
    return a.renderOrder !== b.renderOrder
      ? a.renderOrder - b.renderOrder
      : a.program && b.program && a.program !== b.program
      ? a.program.id - b.program.id
      : a.material.id !== b.material.id
      ? a.material.id - b.material.id
      : a.z !== b.z
      ? a.z - b.z
      : a.id - b.id;
  }
  function Jg(a, b) {
    return a.renderOrder !== b.renderOrder
      ? a.renderOrder - b.renderOrder
      : a.z !== b.z
      ? b.z - a.z
      : a.id - b.id;
  }
  function Kg() {
    var a = [],
      b = 0,
      c = [],
      d = [];
    return {
      opaque: c,
      transparent: d,
      init: function() {
        b = 0;
        c.length = 0;
        d.length = 0;
      },
      push: function(e, f, g, h, k) {
        var m = a[b];
        void 0 === m
          ? ((m = {
              id: e.id,
              object: e,
              geometry: f,
              material: g,
              program: g.program,
              renderOrder: e.renderOrder,
              z: h,
              group: k
            }),
            (a[b] = m))
          : ((m.id = e.id),
            (m.object = e),
            (m.geometry = f),
            (m.material = g),
            (m.program = g.program),
            (m.renderOrder = e.renderOrder),
            (m.z = h),
            (m.group = k));
        (!0 === g.transparent ? d : c).push(m);
        b++;
      },
      sort: function() {
        1 < c.length && c.sort(Ig);
        1 < d.length && d.sort(Jg);
      }
    };
  }
  function Lg() {
    var a = {};
    return {
      get: function(b, c) {
        b = b.id + "," + c.id;
        c = a[b];
        void 0 === c && ((c = new Kg()), (a[b] = c));
        return c;
      },
      dispose: function() {
        a = {};
      }
    };
  }
  function Mg() {
    var a = {};
    return {
      get: function(b) {
        if (void 0 !== a[b.id]) return a[b.id];
        switch (b.type) {
          case "DirectionalLight":
            var c = {
              direction: new p(),
              color: new G(),
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new z()
            };
            break;
          case "SpotLight":
            c = {
              position: new p(),
              direction: new p(),
              color: new G(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new z()
            };
            break;
          case "PointLight":
            c = {
              position: new p(),
              color: new G(),
              distance: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new z(),
              shadowCameraNear: 1,
              shadowCameraFar: 1e3
            };
            break;
          case "HemisphereLight":
            c = { direction: new p(), skyColor: new G(), groundColor: new G() };
            break;
          case "RectAreaLight":
            c = {
              color: new G(),
              position: new p(),
              halfWidth: new p(),
              halfHeight: new p()
            };
        }
        return (a[b.id] = c);
      }
    };
  }
  function Ng() {
    var a = new Mg(),
      b = {
        id: Og++,
        hash: {
          stateID: -1,
          directionalLength: -1,
          pointLength: -1,
          spotLength: -1,
          rectAreaLength: -1,
          hemiLength: -1,
          shadowsLength: -1
        },
        ambient: [0, 0, 0],
        directional: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        rectArea: [],
        point: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: []
      },
      c = new p(),
      d = new P(),
      e = new P();
    return {
      setup: function(f, g, h) {
        var k = 0,
          m = 0,
          q = 0,
          n = 0,
          r = 0,
          x = 0,
          l = 0,
          u = 0;
        h = h.matrixWorldInverse;
        for (var w = 0, p = f.length; w < p; w++) {
          var v = f[w],
            H = v.color,
            y = v.intensity,
            N = v.distance,
            X = v.shadow && v.shadow.map ? v.shadow.map.texture : null;
          if (v.isAmbientLight) (k += H.r * y), (m += H.g * y), (q += H.b * y);
          else if (v.isDirectionalLight) {
            var B = a.get(v);
            B.color.copy(v.color).multiplyScalar(v.intensity);
            B.direction.setFromMatrixPosition(v.matrixWorld);
            c.setFromMatrixPosition(v.target.matrixWorld);
            B.direction.sub(c);
            B.direction.transformDirection(h);
            if ((B.shadow = v.castShadow))
              (H = v.shadow),
                (B.shadowBias = H.bias),
                (B.shadowRadius = H.radius),
                (B.shadowMapSize = H.mapSize);
            b.directionalShadowMap[n] = X;
            b.directionalShadowMatrix[n] = v.shadow.matrix;
            b.directional[n] = B;
            n++;
          } else if (v.isSpotLight) {
            B = a.get(v);
            B.position.setFromMatrixPosition(v.matrixWorld);
            B.position.applyMatrix4(h);
            B.color.copy(H).multiplyScalar(y);
            B.distance = N;
            B.direction.setFromMatrixPosition(v.matrixWorld);
            c.setFromMatrixPosition(v.target.matrixWorld);
            B.direction.sub(c);
            B.direction.transformDirection(h);
            B.coneCos = Math.cos(v.angle);
            B.penumbraCos = Math.cos(v.angle * (1 - v.penumbra));
            B.decay = v.decay;
            if ((B.shadow = v.castShadow))
              (H = v.shadow),
                (B.shadowBias = H.bias),
                (B.shadowRadius = H.radius),
                (B.shadowMapSize = H.mapSize);
            b.spotShadowMap[x] = X;
            b.spotShadowMatrix[x] = v.shadow.matrix;
            b.spot[x] = B;
            x++;
          } else if (v.isRectAreaLight)
            (B = a.get(v)),
              B.color.copy(H).multiplyScalar(y),
              B.position.setFromMatrixPosition(v.matrixWorld),
              B.position.applyMatrix4(h),
              e.identity(),
              d.copy(v.matrixWorld),
              d.premultiply(h),
              e.extractRotation(d),
              B.halfWidth.set(0.5 * v.width, 0, 0),
              B.halfHeight.set(0, 0.5 * v.height, 0),
              B.halfWidth.applyMatrix4(e),
              B.halfHeight.applyMatrix4(e),
              (b.rectArea[l] = B),
              l++;
          else if (v.isPointLight) {
            B = a.get(v);
            B.position.setFromMatrixPosition(v.matrixWorld);
            B.position.applyMatrix4(h);
            B.color.copy(v.color).multiplyScalar(v.intensity);
            B.distance = v.distance;
            B.decay = v.decay;
            if ((B.shadow = v.castShadow))
              (H = v.shadow),
                (B.shadowBias = H.bias),
                (B.shadowRadius = H.radius),
                (B.shadowMapSize = H.mapSize),
                (B.shadowCameraNear = H.camera.near),
                (B.shadowCameraFar = H.camera.far);
            b.pointShadowMap[r] = X;
            b.pointShadowMatrix[r] = v.shadow.matrix;
            b.point[r] = B;
            r++;
          } else
            v.isHemisphereLight &&
              ((B = a.get(v)),
              B.direction.setFromMatrixPosition(v.matrixWorld),
              B.direction.transformDirection(h),
              B.direction.normalize(),
              B.skyColor.copy(v.color).multiplyScalar(y),
              B.groundColor.copy(v.groundColor).multiplyScalar(y),
              (b.hemi[u] = B),
              u++);
        }
        b.ambient[0] = k;
        b.ambient[1] = m;
        b.ambient[2] = q;
        b.directional.length = n;
        b.spot.length = x;
        b.rectArea.length = l;
        b.point.length = r;
        b.hemi.length = u;
        b.hash.stateID = b.id;
        b.hash.directionalLength = n;
        b.hash.pointLength = r;
        b.hash.spotLength = x;
        b.hash.rectAreaLength = l;
        b.hash.hemiLength = u;
        b.hash.shadowsLength = g.length;
      },
      state: b
    };
  }
  function bf() {
    var a = new Ng(),
      b = [],
      c = [];
    return {
      init: function() {
        b.length = 0;
        c.length = 0;
      },
      state: { lightsArray: b, shadowsArray: c, lights: a },
      setupLights: function(d) {
        a.setup(b, c, d);
      },
      pushLight: function(a) {
        b.push(a);
      },
      pushShadow: function(a) {
        c.push(a);
      }
    };
  }
  function Pg() {
    var a = {};
    return {
      get: function(b, c) {
        if (void 0 === a[b.id]) {
          var d = new bf();
          a[b.id] = {};
          a[b.id][c.id] = d;
        } else
          void 0 === a[b.id][c.id]
            ? ((d = new bf()), (a[b.id][c.id] = d))
            : (d = a[b.id][c.id]);
        return d;
      },
      dispose: function() {
        a = {};
      }
    };
  }
  function eb(a) {
    L.call(this);
    this.type = "MeshDepthMaterial";
    this.depthPacking = 3200;
    this.morphTargets = this.skinning = !1;
    this.displacementMap = this.alphaMap = this.map = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.lights = this.fog = !1;
    this.setValues(a);
  }
  function fb(a) {
    L.call(this);
    this.type = "MeshDistanceMaterial";
    this.referencePosition = new p();
    this.nearDistance = 1;
    this.farDistance = 1e3;
    this.morphTargets = this.skinning = !1;
    this.displacementMap = this.alphaMap = this.map = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.lights = this.fog = !1;
    this.setValues(a);
  }
  function cf(a, b, c) {
    function d(b, c, d, e, f, g) {
      var h = b.geometry;
      var k = n;
      var m = b.customDepthMaterial;
      d && ((k = r), (m = b.customDistanceMaterial));
      m
        ? (k = m)
        : ((m = !1),
          c.morphTargets &&
            (h && h.isBufferGeometry
              ? (m =
                  h.morphAttributes &&
                  h.morphAttributes.position &&
                  0 < h.morphAttributes.position.length)
              : h &&
                h.isGeometry &&
                (m = h.morphTargets && 0 < h.morphTargets.length)),
          b.isSkinnedMesh &&
            !1 === c.skinning &&
            console.warn(
              "THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",
              b
            ),
          (b = b.isSkinnedMesh && c.skinning),
          (h = 0),
          m && (h |= 1),
          b && (h |= 2),
          (k = k[h]));
      a.localClippingEnabled &&
        !0 === c.clipShadows &&
        0 !== c.clippingPlanes.length &&
        ((h = k.uuid),
        (m = c.uuid),
        (b = x[h]),
        void 0 === b && ((b = {}), (x[h] = b)),
        (h = b[m]),
        void 0 === h && ((h = k.clone()), (b[m] = h)),
        (k = h));
      k.visible = c.visible;
      k.wireframe = c.wireframe;
      k.side = null != c.shadowSide ? c.shadowSide : l[c.side];
      k.clipShadows = c.clipShadows;
      k.clippingPlanes = c.clippingPlanes;
      k.clipIntersection = c.clipIntersection;
      k.wireframeLinewidth = c.wireframeLinewidth;
      k.linewidth = c.linewidth;
      d &&
        k.isMeshDistanceMaterial &&
        (k.referencePosition.copy(e),
        (k.nearDistance = f),
        (k.farDistance = g));
      return k;
    }
    function e(c, g, h, k) {
      if (!1 !== c.visible) {
        if (
          c.layers.test(g.layers) &&
          (c.isMesh || c.isLine || c.isPoints) &&
          c.castShadow &&
          (!c.frustumCulled || f.intersectsObject(c))
        ) {
          c.modelViewMatrix.multiplyMatrices(
            h.matrixWorldInverse,
            c.matrixWorld
          );
          var m = b.update(c),
            n = c.material;
          if (Array.isArray(n))
            for (var r = m.groups, x = 0, l = r.length; x < l; x++) {
              var t = r[x],
                u = n[t.materialIndex];
              u &&
                u.visible &&
                ((u = d(c, u, k, q, h.near, h.far)),
                a.renderBufferDirect(h, null, m, u, c, t));
            }
          else
            n.visible &&
              ((u = d(c, n, k, q, h.near, h.far)),
              a.renderBufferDirect(h, null, m, u, c, null));
        }
        c = c.children;
        m = 0;
        for (n = c.length; m < n; m++) e(c[m], g, h, k);
      }
    }
    var f = new rd(),
      g = new P(),
      h = new z(),
      k = new z(c, c),
      m = new p(),
      q = new p(),
      n = Array(4),
      r = Array(4),
      x = {},
      l = { 0: 1, 1: 0, 2: 2 },
      u = [
        new p(1, 0, 0),
        new p(-1, 0, 0),
        new p(0, 0, 1),
        new p(0, 0, -1),
        new p(0, 1, 0),
        new p(0, -1, 0)
      ],
      w = [
        new p(0, 1, 0),
        new p(0, 1, 0),
        new p(0, 1, 0),
        new p(0, 1, 0),
        new p(0, 0, 1),
        new p(0, 0, -1)
      ],
      A = [new Z(), new Z(), new Z(), new Z(), new Z(), new Z()];
    for (c = 0; 4 !== c; ++c) {
      var v = 0 !== (c & 1),
        H = 0 !== (c & 2),
        y = new eb({ depthPacking: 3201, morphTargets: v, skinning: H });
      n[c] = y;
      v = new fb({ morphTargets: v, skinning: H });
      r[c] = v;
    }
    var N = this;
    this.enabled = !1;
    this.autoUpdate = !0;
    this.needsUpdate = !1;
    this.type = 1;
    this.render = function(b, c, d) {
      if (
        !1 !== N.enabled &&
        (!1 !== N.autoUpdate || !1 !== N.needsUpdate) &&
        0 !== b.length
      ) {
        var n = a.state;
        n.disable(3042);
        n.buffers.color.setClear(1, 1, 1, 1);
        n.buffers.depth.setTest(!0);
        n.setScissorTest(!1);
        for (var r, x = 0, l = b.length; x < l; x++) {
          var t = b[x];
          r = t.shadow;
          var X = t && t.isPointLight;
          if (void 0 === r)
            console.warn("THREE.WebGLShadowMap:", t, "has no shadow.");
          else {
            var B = r.camera;
            h.copy(r.mapSize);
            h.min(k);
            if (X) {
              var p = h.x,
                v = h.y;
              A[0].set(2 * p, v, p, v);
              A[1].set(0, v, p, v);
              A[2].set(3 * p, v, p, v);
              A[3].set(p, v, p, v);
              A[4].set(3 * p, 0, p, v);
              A[5].set(p, 0, p, v);
              h.x *= 4;
              h.y *= 2;
            }
            null === r.map &&
              ((r.map = new kb(h.x, h.y, {
                minFilter: 1003,
                magFilter: 1003,
                format: 1023
              })),
              (r.map.texture.name = t.name + ".shadowMap"),
              B.updateProjectionMatrix());
            r.isSpotLightShadow && r.update(t);
            p = r.map;
            v = r.matrix;
            q.setFromMatrixPosition(t.matrixWorld);
            B.position.copy(q);
            X
              ? ((r = 6), v.makeTranslation(-q.x, -q.y, -q.z))
              : ((r = 1),
                m.setFromMatrixPosition(t.target.matrixWorld),
                B.lookAt(m),
                B.updateMatrixWorld(),
                v.set(
                  0.5,
                  0,
                  0,
                  0.5,
                  0,
                  0.5,
                  0,
                  0.5,
                  0,
                  0,
                  0.5,
                  0.5,
                  0,
                  0,
                  0,
                  1
                ),
                v.multiply(B.projectionMatrix),
                v.multiply(B.matrixWorldInverse));
            a.setRenderTarget(p);
            a.clear();
            for (t = 0; t < r; t++)
              X &&
                (m.copy(B.position),
                m.add(u[t]),
                B.up.copy(w[t]),
                B.lookAt(m),
                B.updateMatrixWorld(),
                n.viewport(A[t])),
                g.multiplyMatrices(B.projectionMatrix, B.matrixWorldInverse),
                f.setFromMatrix(g),
                e(c, d, B, X);
          }
        }
        N.needsUpdate = !1;
      }
    };
  }
  function Qg(a, b, c, d) {
    function e(b, c, d) {
      var e = new Uint8Array(4),
        f = a.createTexture();
      a.bindTexture(b, f);
      a.texParameteri(b, 10241, 9728);
      a.texParameteri(b, 10240, 9728);
      for (b = 0; b < d; b++)
        a.texImage2D(c + b, 0, 6408, 1, 1, 0, 6408, 5121, e);
      return f;
    }
    function f(c, e) {
      p[c] = 1;
      0 === v[c] && (a.enableVertexAttribArray(c), (v[c] = 1));
      H[c] !== e &&
        ((d.isWebGL2 ? a : b.get("ANGLE_instanced_arrays"))[
          d.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](c, e),
        (H[c] = e));
    }
    function g(b) {
      !0 !== y[b] && (a.enable(b), (y[b] = !0));
    }
    function h(b) {
      !1 !== y[b] && (a.disable(b), (y[b] = !1));
    }
    function k(b, d, e, f, k, m, n, q) {
      if (0 === b) B && (h(3042), (B = !1));
      else if ((B || (g(3042), (B = !0)), 5 !== b)) {
        if (b !== Lb || q !== J) {
          if (100 !== z || 100 !== C) a.blendEquation(32774), (C = z = 100);
          if (q)
            switch (b) {
              case 1:
                a.blendFuncSeparate(1, 771, 1, 771);
                break;
              case 2:
                a.blendFunc(1, 1);
                break;
              case 3:
                a.blendFuncSeparate(0, 0, 769, 771);
                break;
              case 4:
                a.blendFuncSeparate(0, 768, 0, 770);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", b);
            }
          else
            switch (b) {
              case 1:
                a.blendFuncSeparate(770, 771, 1, 771);
                break;
              case 2:
                a.blendFunc(770, 1);
                break;
              case 3:
                a.blendFunc(0, 769);
                break;
              case 4:
                a.blendFunc(0, 768);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", b);
            }
          E = D = Y = Zd = null;
          Lb = b;
          J = q;
        }
      } else {
        k = k || d;
        m = m || e;
        n = n || f;
        if (d !== z || k !== C)
          a.blendEquationSeparate(c.convert(d), c.convert(k)), (z = d), (C = k);
        if (e !== Zd || f !== Y || m !== D || n !== E)
          a.blendFuncSeparate(
            c.convert(e),
            c.convert(f),
            c.convert(m),
            c.convert(n)
          ),
            (Zd = e),
            (Y = f),
            (D = m),
            (E = n);
        Lb = b;
        J = null;
      }
    }
    function m(b) {
      G !== b && (b ? a.frontFace(2304) : a.frontFace(2305), (G = b));
    }
    function q(b) {
      0 !== b
        ? (g(2884),
          b !== Q &&
            (1 === b
              ? a.cullFace(1029)
              : 2 === b
              ? a.cullFace(1028)
              : a.cullFace(1032)))
        : h(2884);
      Q = b;
    }
    function n(b, c, d) {
      if (b) {
        if ((g(32823), I !== c || L !== d))
          a.polygonOffset(c, d), (I = c), (L = d);
      } else h(32823);
    }
    function r(b) {
      void 0 === b && (b = 33984 + R - 1);
      K !== b && (a.activeTexture(b), (K = b));
    }
    var x = new function() {
        var b = !1,
          c = new Z(),
          d = null,
          e = new Z(0, 0, 0, 0);
        return {
          setMask: function(c) {
            d === c || b || (a.colorMask(c, c, c, c), (d = c));
          },
          setLocked: function(a) {
            b = a;
          },
          setClear: function(b, d, f, g, h) {
            !0 === h && ((b *= g), (d *= g), (f *= g));
            c.set(b, d, f, g);
            !1 === e.equals(c) && (a.clearColor(b, d, f, g), e.copy(c));
          },
          reset: function() {
            b = !1;
            d = null;
            e.set(-1, 0, 0, 0);
          }
        };
      }(),
      l = new function() {
        var b = !1,
          c = null,
          d = null,
          e = null;
        return {
          setTest: function(a) {
            a ? g(2929) : h(2929);
          },
          setMask: function(d) {
            c === d || b || (a.depthMask(d), (c = d));
          },
          setFunc: function(b) {
            if (d !== b) {
              if (b)
                switch (b) {
                  case 0:
                    a.depthFunc(512);
                    break;
                  case 1:
                    a.depthFunc(519);
                    break;
                  case 2:
                    a.depthFunc(513);
                    break;
                  case 3:
                    a.depthFunc(515);
                    break;
                  case 4:
                    a.depthFunc(514);
                    break;
                  case 5:
                    a.depthFunc(518);
                    break;
                  case 6:
                    a.depthFunc(516);
                    break;
                  case 7:
                    a.depthFunc(517);
                    break;
                  default:
                    a.depthFunc(515);
                }
              else a.depthFunc(515);
              d = b;
            }
          },
          setLocked: function(a) {
            b = a;
          },
          setClear: function(b) {
            e !== b && (a.clearDepth(b), (e = b));
          },
          reset: function() {
            b = !1;
            e = d = c = null;
          }
        };
      }(),
      u = new function() {
        var b = !1,
          c = null,
          d = null,
          e = null,
          f = null,
          k = null,
          m = null,
          n = null,
          q = null;
        return {
          setTest: function(a) {
            a ? g(2960) : h(2960);
          },
          setMask: function(d) {
            c === d || b || (a.stencilMask(d), (c = d));
          },
          setFunc: function(b, c, g) {
            if (d !== b || e !== c || f !== g)
              a.stencilFunc(b, c, g), (d = b), (e = c), (f = g);
          },
          setOp: function(b, c, d) {
            if (k !== b || m !== c || n !== d)
              a.stencilOp(b, c, d), (k = b), (m = c), (n = d);
          },
          setLocked: function(a) {
            b = a;
          },
          setClear: function(b) {
            q !== b && (a.clearStencil(b), (q = b));
          },
          reset: function() {
            b = !1;
            q = n = m = k = f = e = d = c = null;
          }
        };
      }(),
      w = a.getParameter(34921),
      p = new Uint8Array(w),
      v = new Uint8Array(w),
      H = new Uint8Array(w),
      y = {},
      N = null,
      X = null,
      B = null,
      Lb = null,
      z = null,
      Zd = null,
      Y = null,
      C = null,
      D = null,
      E = null,
      J = !1,
      G = null,
      Q = null,
      P = null,
      I = null,
      L = null,
      R = a.getParameter(35661),
      F = !1;
    w = 0;
    w = a.getParameter(7938);
    -1 !== w.indexOf("WebGL")
      ? ((w = parseFloat(/^WebGL ([0-9])/.exec(w)[1])), (F = 1 <= w))
      : -1 !== w.indexOf("OpenGL ES") &&
        ((w = parseFloat(/^OpenGL ES ([0-9])/.exec(w)[1])), (F = 2 <= w));
    var K = null,
      T = {},
      W = new Z(),
      M = new Z(),
      U = {};
    U[3553] = e(3553, 3553, 1);
    U[34067] = e(34067, 34069, 6);
    x.setClear(0, 0, 0, 1);
    l.setClear(1);
    u.setClear(0);
    g(2929);
    l.setFunc(3);
    m(!1);
    q(1);
    g(2884);
    k(0);
    return {
      buffers: { color: x, depth: l, stencil: u },
      initAttributes: function() {
        for (var a = 0, b = p.length; a < b; a++) p[a] = 0;
      },
      enableAttribute: function(a) {
        f(a, 0);
      },
      enableAttributeAndDivisor: f,
      disableUnusedAttributes: function() {
        for (var b = 0, c = v.length; b !== c; ++b)
          v[b] !== p[b] && (a.disableVertexAttribArray(b), (v[b] = 0));
      },
      enable: g,
      disable: h,
      getCompressedTextureFormats: function() {
        if (
          null === N &&
          ((N = []),
          b.get("WEBGL_compressed_texture_pvrtc") ||
            b.get("WEBGL_compressed_texture_s3tc") ||
            b.get("WEBGL_compressed_texture_etc1") ||
            b.get("WEBGL_compressed_texture_astc"))
        )
          for (var c = a.getParameter(34467), d = 0; d < c.length; d++)
            N.push(c[d]);
        return N;
      },
      useProgram: function(b) {
        return X !== b ? (a.useProgram(b), (X = b), !0) : !1;
      },
      setBlending: k,
      setMaterial: function(a, b) {
        2 === a.side ? h(2884) : g(2884);
        var c = 1 === a.side;
        b && (c = !c);
        m(c);
        1 === a.blending && !1 === a.transparent
          ? k(0)
          : k(
              a.blending,
              a.blendEquation,
              a.blendSrc,
              a.blendDst,
              a.blendEquationAlpha,
              a.blendSrcAlpha,
              a.blendDstAlpha,
              a.premultipliedAlpha
            );
        l.setFunc(a.depthFunc);
        l.setTest(a.depthTest);
        l.setMask(a.depthWrite);
        x.setMask(a.colorWrite);
        n(a.polygonOffset, a.polygonOffsetFactor, a.polygonOffsetUnits);
      },
      setFlipSided: m,
      setCullFace: q,
      setLineWidth: function(b) {
        b !== P && (F && a.lineWidth(b), (P = b));
      },
      setPolygonOffset: n,
      setScissorTest: function(a) {
        a ? g(3089) : h(3089);
      },
      activeTexture: r,
      bindTexture: function(b, c) {
        null === K && r();
        var d = T[K];
        void 0 === d && ((d = { type: void 0, texture: void 0 }), (T[K] = d));
        if (d.type !== b || d.texture !== c)
          a.bindTexture(b, c || U[b]), (d.type = b), (d.texture = c);
      },
      compressedTexImage2D: function() {
        try {
          a.compressedTexImage2D.apply(a, arguments);
        } catch (fa) {
          console.error("THREE.WebGLState:", fa);
        }
      },
      texImage2D: function() {
        try {
          a.texImage2D.apply(a, arguments);
        } catch (fa) {
          console.error("THREE.WebGLState:", fa);
        }
      },
      texImage3D: function() {
        try {
          a.texImage3D.apply(a, arguments);
        } catch (fa) {
          console.error("THREE.WebGLState:", fa);
        }
      },
      scissor: function(b) {
        !1 === W.equals(b) && (a.scissor(b.x, b.y, b.z, b.w), W.copy(b));
      },
      viewport: function(b) {
        !1 === M.equals(b) && (a.viewport(b.x, b.y, b.z, b.w), M.copy(b));
      },
      reset: function() {
        for (var b = 0; b < v.length; b++)
          1 === v[b] && (a.disableVertexAttribArray(b), (v[b] = 0));
        y = {};
        K = N = null;
        T = {};
        Q = G = Lb = X = null;
        x.reset();
        l.reset();
        u.reset();
      }
    };
  }
  function Rg(a, b, c, d, e, f, g) {
    function h(a, b) {
      if (a.width > b || a.height > b) {
        if ("data" in a) {
          console.warn(
            "THREE.WebGLRenderer: image in DataTexture is too big (" +
              a.width +
              "x" +
              a.height +
              ")."
          );
          return;
        }
        b /= Math.max(a.width, a.height);
        var c = document.createElementNS(
          "http://www.w3.org/1999/xhtml",
          "canvas"
        );
        c.width = Math.floor(a.width * b);
        c.height = Math.floor(a.height * b);
        c.getContext("2d").drawImage(
          a,
          0,
          0,
          a.width,
          a.height,
          0,
          0,
          c.width,
          c.height
        );
        console.warn(
          "THREE.WebGLRenderer: image is too big (" +
            a.width +
            "x" +
            a.height +
            "). Resized to " +
            c.width +
            "x" +
            c.height
        );
        return c;
      }
      return a;
    }
    function k(a) {
      return R.isPowerOfTwo(a.width) && R.isPowerOfTwo(a.height);
    }
    function m(a, b) {
      return (
        a.generateMipmaps && b && 1003 !== a.minFilter && 1006 !== a.minFilter
      );
    }
    function q(b, c, e, f) {
      a.generateMipmap(b);
      d.get(c).__maxMipLevel = Math.log(Math.max(e, f)) * Math.LOG2E;
    }
    function n(a, b) {
      if (!e.isWebGL2) return a;
      if (6403 === a) {
        if (5126 === b) return 33326;
        if (5131 === b) return 33325;
        if (5121 === b) return 33321;
      }
      if (6407 === a) {
        if (5126 === b) return 34837;
        if (5131 === b) return 34843;
        if (5121 === b) return 32849;
      }
      if (6408 === a) {
        if (5126 === b) return 34836;
        if (5131 === b) return 34842;
        if (5121 === b) return 32856;
      }
      return a;
    }
    function r(a) {
      return 1003 === a || 1004 === a || 1005 === a ? 9728 : 9729;
    }
    function x(b) {
      b = b.target;
      b.removeEventListener("dispose", x);
      a: {
        var c = d.get(b);
        if (b.image && c.__image__webglTextureCube)
          a.deleteTexture(c.__image__webglTextureCube);
        else {
          if (void 0 === c.__webglInit) break a;
          a.deleteTexture(c.__webglTexture);
        }
        d.remove(b);
      }
      b.isVideoTexture && delete y[b.id];
      g.memory.textures--;
    }
    function l(b) {
      b = b.target;
      b.removeEventListener("dispose", l);
      var c = d.get(b),
        e = d.get(b.texture);
      if (b) {
        void 0 !== e.__webglTexture && a.deleteTexture(e.__webglTexture);
        b.depthTexture && b.depthTexture.dispose();
        if (b.isWebGLRenderTargetCube)
          for (e = 0; 6 > e; e++)
            a.deleteFramebuffer(c.__webglFramebuffer[e]),
              c.__webglDepthbuffer &&
                a.deleteRenderbuffer(c.__webglDepthbuffer[e]);
        else
          a.deleteFramebuffer(c.__webglFramebuffer),
            c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer);
        d.remove(b.texture);
        d.remove(b);
      }
      g.memory.textures--;
    }
    function u(a, b) {
      var e = d.get(a);
      if (a.isVideoTexture) {
        var f = a.id,
          h = g.render.frame;
        y[f] !== h && ((y[f] = h), a.update());
      }
      if (0 < a.version && e.__version !== a.version)
        if (((f = a.image), void 0 === f))
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but image is undefined"
          );
        else if (!1 === f.complete)
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
          );
        else {
          A(e, a, b);
          return;
        }
      c.activeTexture(33984 + b);
      c.bindTexture(3553, e.__webglTexture);
    }
    function p(c, g, h) {
      h
        ? (a.texParameteri(c, 10242, f.convert(g.wrapS)),
          a.texParameteri(c, 10243, f.convert(g.wrapT)),
          a.texParameteri(c, 10240, f.convert(g.magFilter)),
          a.texParameteri(c, 10241, f.convert(g.minFilter)))
        : (a.texParameteri(c, 10242, 33071),
          a.texParameteri(c, 10243, 33071),
          (1001 === g.wrapS && 1001 === g.wrapT) ||
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          a.texParameteri(c, 10240, r(g.magFilter)),
          a.texParameteri(c, 10241, r(g.minFilter)),
          1003 !== g.minFilter &&
            1006 !== g.minFilter &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            ));
      !(h = b.get("EXT_texture_filter_anisotropic")) ||
        (1015 === g.type && null === b.get("OES_texture_float_linear")) ||
        (1016 === g.type &&
          null === (e.isWebGL2 || b.get("OES_texture_half_float_linear"))) ||
        !(1 < g.anisotropy || d.get(g).__currentAnisotropy) ||
        (a.texParameterf(
          c,
          h.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(g.anisotropy, e.getMaxAnisotropy())
        ),
        (d.get(g).__currentAnisotropy = g.anisotropy));
    }
    function A(b, d, r) {
      var l = d.isDataTexture3D ? 32879 : 3553;
      void 0 === b.__webglInit &&
        ((b.__webglInit = !0),
        d.addEventListener("dispose", x),
        (b.__webglTexture = a.createTexture()),
        g.memory.textures++);
      c.activeTexture(33984 + r);
      c.bindTexture(l, b.__webglTexture);
      a.pixelStorei(37440, d.flipY);
      a.pixelStorei(37441, d.premultiplyAlpha);
      a.pixelStorei(3317, d.unpackAlignment);
      r = h(d.image, e.maxTextureSize);
      var t = e.isWebGL2
        ? !1
        : 1001 !== d.wrapS ||
          1001 !== d.wrapT ||
          (1003 !== d.minFilter && 1006 !== d.minFilter);
      t &&
        !1 === k(r) &&
        (r instanceof HTMLImageElement ||
          r instanceof HTMLCanvasElement ||
          r instanceof ImageBitmap) &&
        (void 0 === N &&
          (N = document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "canvas"
          )),
        (N.width = R.floorPowerOfTwo(r.width)),
        (N.height = R.floorPowerOfTwo(r.height)),
        N.getContext("2d").drawImage(r, 0, 0, N.width, N.height),
        console.warn(
          "THREE.WebGLRenderer: image is not power of two (" +
            r.width +
            "x" +
            r.height +
            "). Resized to " +
            N.width +
            "x" +
            N.height
        ),
        (r = N));
      t = k(r);
      var u = f.convert(d.format),
        w = f.convert(d.type),
        v = n(u, w);
      p(l, d, t);
      var X = d.mipmaps;
      if (d.isDepthTexture) {
        v = 6402;
        if (1015 === d.type) {
          if (!e.isWebGL2)
            throw Error("Float Depth Texture only supported in WebGL2.0");
          v = 36012;
        } else e.isWebGL2 && (v = 33189);
        1026 === d.format &&
          6402 === v &&
          1012 !== d.type &&
          1014 !== d.type &&
          (console.warn(
            "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
          ),
          (d.type = 1012),
          (w = f.convert(d.type)));
        1027 === d.format &&
          ((v = 34041),
          1020 !== d.type &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
            ),
            (d.type = 1020),
            (w = f.convert(d.type))));
        c.texImage2D(3553, 0, v, r.width, r.height, 0, u, w, null);
      } else if (d.isDataTexture)
        if (0 < X.length && t) {
          for (var B = 0, y = X.length; B < y; B++)
            (l = X[B]),
              c.texImage2D(3553, B, v, l.width, l.height, 0, u, w, l.data);
          d.generateMipmaps = !1;
          b.__maxMipLevel = X.length - 1;
        } else
          c.texImage2D(3553, 0, v, r.width, r.height, 0, u, w, r.data),
            (b.__maxMipLevel = 0);
      else if (d.isCompressedTexture) {
        B = 0;
        for (y = X.length; B < y; B++)
          (l = X[B]),
            1023 !== d.format && 1022 !== d.format
              ? -1 < c.getCompressedTextureFormats().indexOf(u)
                ? c.compressedTexImage2D(
                    3553,
                    B,
                    v,
                    l.width,
                    l.height,
                    0,
                    l.data
                  )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                  )
              : c.texImage2D(3553, B, v, l.width, l.height, 0, u, w, l.data);
        b.__maxMipLevel = X.length - 1;
      } else if (d.isDataTexture3D)
        c.texImage3D(32879, 0, v, r.width, r.height, r.depth, 0, u, w, r.data),
          (b.__maxMipLevel = 0);
      else if (0 < X.length && t) {
        B = 0;
        for (y = X.length; B < y; B++)
          (l = X[B]), c.texImage2D(3553, B, v, u, w, l);
        d.generateMipmaps = !1;
        b.__maxMipLevel = X.length - 1;
      } else c.texImage2D(3553, 0, v, u, w, r), (b.__maxMipLevel = 0);
      m(d, t) && q(3553, d, r.width, r.height);
      b.__version = d.version;
      if (d.onUpdate) d.onUpdate(d);
    }
    function v(b, e, g, h) {
      var k = f.convert(e.texture.format),
        m = f.convert(e.texture.type),
        q = n(k, m);
      c.texImage2D(h, 0, q, e.width, e.height, 0, k, m, null);
      a.bindFramebuffer(36160, b);
      a.framebufferTexture2D(36160, g, h, d.get(e.texture).__webglTexture, 0);
      a.bindFramebuffer(36160, null);
    }
    function H(b, c) {
      a.bindRenderbuffer(36161, b);
      c.depthBuffer && !c.stencilBuffer
        ? (a.renderbufferStorage(36161, 33189, c.width, c.height),
          a.framebufferRenderbuffer(36160, 36096, 36161, b))
        : c.depthBuffer && c.stencilBuffer
        ? (a.renderbufferStorage(36161, 34041, c.width, c.height),
          a.framebufferRenderbuffer(36160, 33306, 36161, b))
        : a.renderbufferStorage(36161, 32854, c.width, c.height);
      a.bindRenderbuffer(36161, null);
    }
    var y = {},
      N;
    this.setTexture2D = u;
    this.setTexture3D = function(a, b) {
      var e = d.get(a);
      0 < a.version && e.__version !== a.version
        ? A(e, a, b)
        : (c.activeTexture(33984 + b), c.bindTexture(32879, e.__webglTexture));
    };
    this.setTextureCube = function(b, r) {
      var l = d.get(b);
      if (6 === b.image.length)
        if (0 < b.version && l.__version !== b.version) {
          l.__image__webglTextureCube ||
            (b.addEventListener("dispose", x),
            (l.__image__webglTextureCube = a.createTexture()),
            g.memory.textures++);
          c.activeTexture(33984 + r);
          c.bindTexture(34067, l.__image__webglTextureCube);
          a.pixelStorei(37440, b.flipY);
          r = b && b.isCompressedTexture;
          for (
            var t = b.image[0] && b.image[0].isDataTexture, u = [], w = 0;
            6 > w;
            w++
          )
            u[w] =
              r || t
                ? t
                  ? b.image[w].image
                  : b.image[w]
                : h(b.image[w], e.maxCubemapSize);
          var v = u[0],
            X = k(v),
            B = f.convert(b.format),
            y = f.convert(b.type),
            H = n(B, y);
          p(34067, b, X);
          for (w = 0; 6 > w; w++)
            if (r)
              for (var A, N = u[w].mipmaps, z = 0, C = N.length; z < C; z++)
                (A = N[z]),
                  1023 !== b.format && 1022 !== b.format
                    ? -1 < c.getCompressedTextureFormats().indexOf(B)
                      ? c.compressedTexImage2D(
                          34069 + w,
                          z,
                          H,
                          A.width,
                          A.height,
                          0,
                          A.data
                        )
                      : console.warn(
                          "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                        )
                    : c.texImage2D(
                        34069 + w,
                        z,
                        H,
                        A.width,
                        A.height,
                        0,
                        B,
                        y,
                        A.data
                      );
            else
              t
                ? c.texImage2D(
                    34069 + w,
                    0,
                    H,
                    u[w].width,
                    u[w].height,
                    0,
                    B,
                    y,
                    u[w].data
                  )
                : c.texImage2D(34069 + w, 0, H, B, y, u[w]);
          l.__maxMipLevel = r ? N.length - 1 : 0;
          m(b, X) && q(34067, b, v.width, v.height);
          l.__version = b.version;
          if (b.onUpdate) b.onUpdate(b);
        } else
          c.activeTexture(33984 + r),
            c.bindTexture(34067, l.__image__webglTextureCube);
    };
    this.setTextureCubeDynamic = function(a, b) {
      c.activeTexture(33984 + b);
      c.bindTexture(34067, d.get(a).__webglTexture);
    };
    this.setupRenderTarget = function(b) {
      var e = d.get(b),
        f = d.get(b.texture);
      b.addEventListener("dispose", l);
      f.__webglTexture = a.createTexture();
      g.memory.textures++;
      var h = !0 === b.isWebGLRenderTargetCube,
        n = k(b);
      if (h) {
        e.__webglFramebuffer = [];
        for (var r = 0; 6 > r; r++)
          e.__webglFramebuffer[r] = a.createFramebuffer();
      } else e.__webglFramebuffer = a.createFramebuffer();
      if (h) {
        c.bindTexture(34067, f.__webglTexture);
        p(34067, b.texture, n);
        for (r = 0; 6 > r; r++) v(e.__webglFramebuffer[r], b, 36064, 34069 + r);
        m(b.texture, n) && q(34067, b.texture, b.width, b.height);
        c.bindTexture(34067, null);
      } else
        c.bindTexture(3553, f.__webglTexture),
          p(3553, b.texture, n),
          v(e.__webglFramebuffer, b, 36064, 3553),
          m(b.texture, n) && q(3553, b.texture, b.width, b.height),
          c.bindTexture(3553, null);
      if (b.depthBuffer) {
        e = d.get(b);
        f = !0 === b.isWebGLRenderTargetCube;
        if (b.depthTexture) {
          if (f)
            throw Error(
              "target.depthTexture not supported in Cube render targets"
            );
          if (b && b.isWebGLRenderTargetCube)
            throw Error(
              "Depth Texture with cube render targets is not supported"
            );
          a.bindFramebuffer(36160, e.__webglFramebuffer);
          if (!b.depthTexture || !b.depthTexture.isDepthTexture)
            throw Error(
              "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
            );
          (d.get(b.depthTexture).__webglTexture &&
            b.depthTexture.image.width === b.width &&
            b.depthTexture.image.height === b.height) ||
            ((b.depthTexture.image.width = b.width),
            (b.depthTexture.image.height = b.height),
            (b.depthTexture.needsUpdate = !0));
          u(b.depthTexture, 0);
          e = d.get(b.depthTexture).__webglTexture;
          if (1026 === b.depthTexture.format)
            a.framebufferTexture2D(36160, 36096, 3553, e, 0);
          else if (1027 === b.depthTexture.format)
            a.framebufferTexture2D(36160, 33306, 3553, e, 0);
          else throw Error("Unknown depthTexture format");
        } else if (f)
          for (e.__webglDepthbuffer = [], f = 0; 6 > f; f++)
            a.bindFramebuffer(36160, e.__webglFramebuffer[f]),
              (e.__webglDepthbuffer[f] = a.createRenderbuffer()),
              H(e.__webglDepthbuffer[f], b);
        else
          a.bindFramebuffer(36160, e.__webglFramebuffer),
            (e.__webglDepthbuffer = a.createRenderbuffer()),
            H(e.__webglDepthbuffer, b);
        a.bindFramebuffer(36160, null);
      }
    };
    this.updateRenderTargetMipmap = function(a) {
      var b = a.texture,
        e = k(a);
      if (m(b, e)) {
        e = a.isWebGLRenderTargetCube ? 34067 : 3553;
        var f = d.get(b).__webglTexture;
        c.bindTexture(e, f);
        q(e, b, a.width, a.height);
        c.bindTexture(e, null);
      }
    };
  }
  function df(a, b, c) {
    return {
      convert: function(a) {
        if (1e3 === a) return 10497;
        if (1001 === a) return 33071;
        if (1002 === a) return 33648;
        if (1003 === a) return 9728;
        if (1004 === a) return 9984;
        if (1005 === a) return 9986;
        if (1006 === a) return 9729;
        if (1007 === a) return 9985;
        if (1008 === a) return 9987;
        if (1009 === a) return 5121;
        if (1017 === a) return 32819;
        if (1018 === a) return 32820;
        if (1019 === a) return 33635;
        if (1010 === a) return 5120;
        if (1011 === a) return 5122;
        if (1012 === a) return 5123;
        if (1013 === a) return 5124;
        if (1014 === a) return 5125;
        if (1015 === a) return 5126;
        if (1016 === a) {
          if (c.isWebGL2) return 5131;
          var d = b.get("OES_texture_half_float");
          if (null !== d) return d.HALF_FLOAT_OES;
        }
        if (1021 === a) return 6406;
        if (1022 === a) return 6407;
        if (1023 === a) return 6408;
        if (1024 === a) return 6409;
        if (1025 === a) return 6410;
        if (1026 === a) return 6402;
        if (1027 === a) return 34041;
        if (1028 === a) return 6403;
        if (100 === a) return 32774;
        if (101 === a) return 32778;
        if (102 === a) return 32779;
        if (200 === a) return 0;
        if (201 === a) return 1;
        if (202 === a) return 768;
        if (203 === a) return 769;
        if (204 === a) return 770;
        if (205 === a) return 771;
        if (206 === a) return 772;
        if (207 === a) return 773;
        if (208 === a) return 774;
        if (209 === a) return 775;
        if (210 === a) return 776;
        if (33776 === a || 33777 === a || 33778 === a || 33779 === a)
          if (((d = b.get("WEBGL_compressed_texture_s3tc")), null !== d)) {
            if (33776 === a) return d.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (33777 === a) return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (33778 === a) return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (33779 === a) return d.COMPRESSED_RGBA_S3TC_DXT5_EXT;
          }
        if (35840 === a || 35841 === a || 35842 === a || 35843 === a)
          if (((d = b.get("WEBGL_compressed_texture_pvrtc")), null !== d)) {
            if (35840 === a) return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (35841 === a) return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (35842 === a) return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (35843 === a) return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
          }
        if (
          36196 === a &&
          ((d = b.get("WEBGL_compressed_texture_etc1")), null !== d)
        )
          return d.COMPRESSED_RGB_ETC1_WEBGL;
        if (
          37808 === a ||
          37809 === a ||
          37810 === a ||
          37811 === a ||
          37812 === a ||
          37813 === a ||
          37814 === a ||
          37815 === a ||
          37816 === a ||
          37817 === a ||
          37818 === a ||
          37819 === a ||
          37820 === a ||
          37821 === a
        )
          if (((d = b.get("WEBGL_compressed_texture_astc")), null !== d))
            return a;
        if (103 === a || 104 === a) {
          if (c.isWebGL2) {
            if (103 === a) return 32775;
            if (104 === a) return 32776;
          }
          d = b.get("EXT_blend_minmax");
          if (null !== d) {
            if (103 === a) return d.MIN_EXT;
            if (104 === a) return d.MAX_EXT;
          }
        }
        if (1020 === a) {
          if (c.isWebGL2) return 34042;
          d = b.get("WEBGL_depth_texture");
          if (null !== d) return d.UNSIGNED_INT_24_8_WEBGL;
        }
        return 0;
      }
    };
  }
  function Ob() {
    D.call(this);
    this.type = "Group";
  }
  function Ra() {
    D.call(this);
    this.type = "Camera";
    this.matrixWorldInverse = new P();
    this.projectionMatrix = new P();
    this.projectionMatrixInverse = new P();
  }
  function V(a, b, c, d) {
    Ra.call(this);
    this.type = "PerspectiveCamera";
    this.fov = void 0 !== a ? a : 50;
    this.zoom = 1;
    this.near = void 0 !== c ? c : 0.1;
    this.far = void 0 !== d ? d : 2e3;
    this.focus = 10;
    this.aspect = void 0 !== b ? b : 1;
    this.view = null;
    this.filmGauge = 35;
    this.filmOffset = 0;
    this.updateProjectionMatrix();
  }
  function Cc(a) {
    V.call(this);
    this.cameras = a || [];
  }
  function ef(a, b, c) {
    ff.setFromMatrixPosition(b.matrixWorld);
    gf.setFromMatrixPosition(c.matrixWorld);
    var d = ff.distanceTo(gf),
      e = b.projectionMatrix.elements,
      f = c.projectionMatrix.elements,
      g = e[14] / (e[10] - 1);
    c = e[14] / (e[10] + 1);
    var h = (e[9] + 1) / e[5],
      k = (e[9] - 1) / e[5],
      m = (e[8] - 1) / e[0],
      q = (f[8] + 1) / f[0];
    e = g * m;
    f = g * q;
    q = d / (-m + q);
    m = q * -m;
    b.matrixWorld.decompose(a.position, a.quaternion, a.scale);
    a.translateX(m);
    a.translateZ(q);
    a.matrixWorld.compose(
      a.position,
      a.quaternion,
      a.scale
    );
    a.matrixWorldInverse.getInverse(a.matrixWorld);
    b = g + q;
    g = c + q;
    a.projectionMatrix.makePerspective(
      e - m,
      f + (d - m),
      ((h * c) / g) * b,
      ((k * c) / g) * b,
      b,
      g
    );
  }
  function hf(a) {
    function b() {
      return null !== e && !0 === e.isPresenting;
    }
    function c() {
      if (b()) {
        var c = e.getEyeParameters("left"),
          f = c.renderWidth * q;
        c = c.renderHeight * q;
        H = a.getPixelRatio();
        v = a.getSize();
        a.setDrawingBufferSize(2 * f, c, 1);
        N.start();
      } else d.enabled && a.setDrawingBufferSize(v.width, v.height, H), N.stop();
    }
    var d = this,
      e = null,
      f = null,
      g = null,
      h = [],
      k = new P(),
      m = new P(),
      q = 1,
      n = "stage";
    "undefined" !== typeof window &&
      "VRFrameData" in window &&
      ((f = new window.VRFrameData()),
      window.addEventListener("vrdisplaypresentchange", c, !1));
    var r = new P(),
      l = new ja(),
      t = new p(),
      u = new V();
    u.bounds = new Z(0, 0, 0.5, 1);
    u.layers.enable(1);
    var w = new V();
    w.bounds = new Z(0.5, 0, 0.5, 1);
    w.layers.enable(2);
    var A = new Cc([u, w]);
    A.layers.enable(1);
    A.layers.enable(2);
    var v,
      H,
      y = [];
    this.enabled = !1;
    this.getController = function(a) {
      var b = h[a];
      void 0 === b &&
        ((b = new Ob()),
        (b.matrixAutoUpdate = !1),
        (b.visible = !1),
        (h[a] = b));
      return b;
    };
    this.getDevice = function() {
      return e;
    };
    this.setDevice = function(a) {
      void 0 !== a && (e = a);
      N.setContext(a);
    };
    this.setFramebufferScaleFactor = function(a) {
      q = a;
    };
    this.setFrameOfReferenceType = function(a) {
      n = a;
    };
    this.setPoseTarget = function(a) {
      void 0 !== a && (g = a);
    };
    this.getCamera = function(a) {
      var b = "stage" === n ? 1.6 : 0;
      if (null === e) return a.position.set(0, b, 0), a;
      e.depthNear = a.near;
      e.depthFar = a.far;
      e.getFrameData(f);
      if ("stage" === n) {
        var c = e.stageParameters;
        c
          ? k.fromArray(c.sittingToStandingTransform)
          : k.makeTranslation(0, b, 0);
      }
      b = f.pose;
      c = null !== g ? g : a;
      c.matrix.copy(k);
      c.matrix.decompose(c.position, c.quaternion, c.scale);
      null !== b.orientation &&
        (l.fromArray(b.orientation), c.quaternion.multiply(l));
      null !== b.position &&
        (l.setFromRotationMatrix(k),
        t.fromArray(b.position),
        t.applyQuaternion(l),
        c.position.add(t));
      c.updateMatrixWorld();
      if (!1 === e.isPresenting) return a;
      u.near = a.near;
      w.near = a.near;
      u.far = a.far;
      w.far = a.far;
      u.matrixWorldInverse.fromArray(f.leftViewMatrix);
      w.matrixWorldInverse.fromArray(f.rightViewMatrix);
      m.getInverse(k);
      "stage" === n &&
        (u.matrixWorldInverse.multiply(m), w.matrixWorldInverse.multiply(m));
      a = c.parent;
      null !== a &&
        (r.getInverse(a.matrixWorld),
        u.matrixWorldInverse.multiply(r),
        w.matrixWorldInverse.multiply(r));
      u.matrixWorld.getInverse(u.matrixWorldInverse);
      w.matrixWorld.getInverse(w.matrixWorldInverse);
      u.projectionMatrix.fromArray(f.leftProjectionMatrix);
      w.projectionMatrix.fromArray(f.rightProjectionMatrix);
      ef(A, u, w);
      a = e.getLayers();
      a.length &&
        ((a = a[0]),
        null !== a.leftBounds &&
          4 === a.leftBounds.length &&
          u.bounds.fromArray(a.leftBounds),
        null !== a.rightBounds &&
          4 === a.rightBounds.length &&
          w.bounds.fromArray(a.rightBounds));
      a: for (a = 0; a < h.length; a++) {
        b = h[a];
        b: {
          c = a;
          for (
            var d = navigator.getGamepads && navigator.getGamepads(),
              q = 0,
              x = 0,
              p = d.length;
            q < p;
            q++
          ) {
            var v = d[q];
            if (
              v &&
              ("Daydream Controller" === v.id ||
                "Gear VR Controller" === v.id ||
                "Oculus Go Controller" === v.id ||
                "OpenVR Gamepad" === v.id ||
                v.id.startsWith("Oculus Touch") ||
                v.id.startsWith("Spatial Controller"))
            ) {
              if (x === c) {
                c = v;
                break b;
              }
              x++;
            }
          }
          c = void 0;
        }
        if (void 0 !== c && void 0 !== c.pose) {
          if (null === c.pose) break a;
          d = c.pose;
          !1 === d.hasPosition && b.position.set(0.2, -0.6, -0.05);
          null !== d.position && b.position.fromArray(d.position);
          null !== d.orientation && b.quaternion.fromArray(d.orientation);
          b.matrix.compose(
            b.position,
            b.quaternion,
            b.scale
          );
          b.matrix.premultiply(k);
          b.matrix.decompose(b.position, b.quaternion, b.scale);
          b.matrixWorldNeedsUpdate = !0;
          b.visible = !0;
          d = "Daydream Controller" === c.id ? 0 : 1;
          y[a] !== c.buttons[d].pressed &&
            ((y[a] = c.buttons[d].pressed),
            !0 === y[a]
              ? b.dispatchEvent({ type: "selectstart" })
              : (b.dispatchEvent({ type: "selectend" }),
                b.dispatchEvent({ type: "select" })));
        } else b.visible = !1;
      }
      return A;
    };
    this.getStandingMatrix = function() {
      return k;
    };
    this.isPresenting = b;
    var N = new Xd();
    this.setAnimationLoop = function(a) {
      N.setAnimationLoop(a);
    };
    this.submitFrame = function() {
      b() && e.submitFrame();
    };
    this.dispose = function() {
      "undefined" !== typeof window &&
        window.removeEventListener("vrdisplaypresentchange", c);
    };
  }
  function Sg(a) {
    function b() {
      return null !== h && null !== m;
    }
    function c(a) {
      var b = r[l.indexOf(a.inputSource)];
      b && b.dispatchEvent({ type: a.type });
    }
    function d() {
      a.setFramebuffer(null);
      v.stop();
    }
    function e(a, b) {
      null === b
        ? a.matrixWorld.copy(a.matrix)
        : a.matrixWorld.multiplyMatrices(b.matrixWorld, a.matrix);
      a.matrixWorldInverse.getInverse(a.matrixWorld);
    }
    var f = a.context,
      g = null,
      h = null,
      k = 1,
      m = null,
      q = "stage",
      n = null,
      r = [],
      l = [],
      t = new V();
    t.layers.enable(1);
    t.viewport = new Z();
    var u = new V();
    u.layers.enable(2);
    u.viewport = new Z();
    var w = new Cc([t, u]);
    w.layers.enable(1);
    w.layers.enable(2);
    this.enabled = !1;
    this.getController = function(a) {
      var b = r[a];
      void 0 === b &&
        ((b = new Ob()),
        (b.matrixAutoUpdate = !1),
        (b.visible = !1),
        (r[a] = b));
      return b;
    };
    this.getDevice = function() {
      return g;
    };
    this.setDevice = function(a) {
      void 0 !== a && (g = a);
      a instanceof XRDevice && f.setCompatibleXRDevice(a);
    };
    this.setFramebufferScaleFactor = function(a) {
      k = a;
    };
    this.setFrameOfReferenceType = function(a) {
      q = a;
    };
    this.setSession = function(b) {
      h = b;
      null !== h &&
        (h.addEventListener("select", c),
        h.addEventListener("selectstart", c),
        h.addEventListener("selectend", c),
        h.addEventListener("end", d),
        (h.baseLayer = new XRWebGLLayer(h, f, { framebufferScaleFactor: k })),
        h.requestFrameOfReference(q).then(function(b) {
          m = b;
          a.setFramebuffer(h.baseLayer.framebuffer);
          v.setContext(h);
          v.start();
        }),
        (l = h.getInputSources()),
        h.addEventListener("inputsourceschange", function() {
          l = h.getInputSources();
          console.log(l);
          for (var a = 0; a < r.length; a++) r[a].userData.inputSource = l[a];
        }));
    };
    this.getCamera = function(a) {
      if (b()) {
        var c = a.parent,
          d = w.cameras;
        e(w, c);
        for (var f = 0; f < d.length; f++) e(d[f], c);
        a.matrixWorld.copy(w.matrixWorld);
        a = a.children;
        f = 0;
        for (c = a.length; f < c; f++) a[f].updateMatrixWorld(!0);
        ef(w, t, u);
        return w;
      }
      return a;
    };
    this.isPresenting = b;
    var p = null,
      v = new Xd();
    v.setAnimationLoop(function(a, b) {
      n = b.getDevicePose(m);
      if (null !== n)
        for (var c = h.baseLayer, d = b.views, e = 0; e < d.length; e++) {
          var f = d[e],
            g = c.getViewport(f),
            k = n.getViewMatrix(f),
            q = w.cameras[e];
          q.matrix.fromArray(k).getInverse(q.matrix);
          q.projectionMatrix.fromArray(f.projectionMatrix);
          q.viewport.set(g.x, g.y, g.width, g.height);
          0 === e && w.matrix.copy(q.matrix);
        }
      for (e = 0; e < r.length; e++) {
        c = r[e];
        if ((d = l[e]))
          if (((d = b.getInputPose(d, m)), null !== d)) {
            "targetRay" in d
              ? (c.matrix.elements = d.targetRay.transformMatrix)
              : "pointerMatrix" in d && (c.matrix.elements = d.pointerMatrix);
            c.matrix.decompose(c.position, c.rotation, c.scale);
            c.visible = !0;
            continue;
          }
        c.visible = !1;
      }
      p && p(a);
    });
    this.setAnimationLoop = function(a) {
      p = a;
    };
    this.dispose = function() {};
    this.getStandingMatrix = function() {
      console.warn(
        "THREE.WebXRManager: getStandingMatrix() is no longer needed."
      );
      return new THREE.Matrix4();
    };
    this.submitFrame = function() {};
  }
  function ce(a) {
    var b;
    function c() {
      la = new Uf(O);
      xa = new Sf(O, la, a);
      xa.isWebGL2 ||
        (la.get("WEBGL_depth_texture"),
        la.get("OES_texture_float"),
        la.get("OES_texture_half_float"),
        la.get("OES_texture_half_float_linear"),
        la.get("OES_standard_derivatives"),
        la.get("OES_element_index_uint"),
        la.get("ANGLE_instanced_arrays"));
      la.get("OES_texture_float_linear");
      ia = new df(O, la, xa);
      ba = new Qg(O, la, ia, xa);
      ba.scissor(Bc.copy(ja).multiplyScalar(U));
      ba.viewport(S.copy(fa).multiplyScalar(U));
      da = new Xf(O);
      Da = new Hg();
      ha = new Rg(O, la, ba, Da, xa, ia, da);
      ra = new Lf(O);
      ua = new Vf(O, ra, da);
      oa = new $f(ua, da);
      ya = new Zf(O);
      na = new Gg(Y, la, xa);
      ta = new Lg();
      pa = new Pg();
      ma = new Qf(Y, ba, oa, z);
      Aa = new Rf(O, la, da, xa);
      Ba = new Wf(O, la, da, xa);
      da.programs = na.programs;
      Y.context = O;
      Y.capabilities = xa;
      Y.extensions = la;
      Y.properties = Da;
      Y.renderLists = ta;
      Y.state = ba;
      Y.info = da;
    }
    function d(a) {
      a.preventDefault();
      console.log("THREE.WebGLRenderer: Context Lost.");
      G = !0;
    }
    function e() {
      console.log("THREE.WebGLRenderer: Context Restored.");
      G = !1;
      c();
    }
    function f(a) {
      a = a.target;
      a.removeEventListener("dispose", f);
      g(a);
      Da.remove(a);
    }
    function g(a) {
      var b = Da.get(a).program;
      a.program = void 0;
      void 0 !== b && na.releaseProgram(b);
    }
    function h(a, b) {
      a.render(function(a) {
        Y.renderBufferImmediate(a, b);
      });
    }
    function k(a, b, c) {
      if (!1 !== a.visible) {
        if (a.layers.test(b.layers))
          if (a.isLight) E.pushLight(a), a.castShadow && E.pushShadow(a);
          else if (a.isSprite) {
            if (!a.frustumCulled || qa.intersectsSprite(a)) {
              c && gb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Ac);
              var d = oa.update(a),
                e = a.material;
              D.push(a, d, e, gb.z, null);
            }
          } else if (a.isImmediateRenderObject)
            c && gb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Ac),
              D.push(a, null, a.material, gb.z, null);
          else if (a.isMesh || a.isLine || a.isPoints)
            if (
              (a.isSkinnedMesh && a.skeleton.update(),
              !a.frustumCulled || qa.intersectsObject(a))
            )
              if (
                (c && gb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Ac),
                (d = oa.update(a)),
                (e = a.material),
                Array.isArray(e))
              )
                for (var f = d.groups, g = 0, h = f.length; g < h; g++) {
                  var m = f[g],
                    n = e[m.materialIndex];
                  n && n.visible && D.push(a, d, n, gb.z, m);
                }
              else e.visible && D.push(a, d, e, gb.z, null);
        a = a.children;
        g = 0;
        for (h = a.length; g < h; g++) k(a[g], b, c);
      }
    }
    function m(a, b, c, d) {
      for (var e = 0, f = a.length; e < f; e++) {
        var g = a[e],
          h = g.object,
          k = g.geometry,
          m = void 0 === d ? g.material : d;
        g = g.group;
        if (c.isArrayCamera) {
          W = c;
          for (var n = c.cameras, r = 0, l = n.length; r < l; r++) {
            var x = n[r];
            if (h.layers.test(x.layers)) {
              if ("viewport" in x) ba.viewport(S.copy(x.viewport));
              else {
                var t = x.bounds;
                ba.viewport(
                  S.set(t.x * V, t.y * M, t.z * V, t.w * M).multiplyScalar(U)
                );
              }
              E.setupLights(x);
              q(h, b, x, k, m, g);
            }
          }
        } else (W = null), q(h, b, c, k, m, g);
      }
    }
    function q(a, c, d, e, f, g) {
      a.onBeforeRender(Y, c, d, e, f, g);
      E = pa.get(c, W || d);
      a.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse, a.matrixWorld);
      a.normalMatrix.getNormalMatrix(a.modelViewMatrix);
      if (a.isImmediateRenderObject) {
        ba.setMaterial(f);
        var k = r(d, c.fog, f, a);
        K = b = null;
        sd = !1;
        h(a, k);
      } else Y.renderBufferDirect(d, c.fog, e, f, a, g);
      a.onAfterRender(Y, c, d, e, f, g);
      E = pa.get(c, W || d);
    }
    function n(a, b, c) {
      var d = Da.get(a),
        e = E.state.lights,
        h = d.lightsHash,
        k = e.state.hash;
      c = na.getParameters(
        a,
        e.state,
        E.state.shadowsArray,
        b,
        aa.numPlanes,
        aa.numIntersection,
        c
      );
      var m = na.getProgramCode(a, c),
        n = d.program,
        q = !0;
      if (void 0 === n) a.addEventListener("dispose", f);
      else if (n.code !== m) g(a);
      else {
        if (
          h.stateID !== k.stateID ||
          h.directionalLength !== k.directionalLength ||
          h.pointLength !== k.pointLength ||
          h.spotLength !== k.spotLength ||
          h.rectAreaLength !== k.rectAreaLength ||
          h.hemiLength !== k.hemiLength ||
          h.shadowsLength !== k.shadowsLength
        )
          (h.stateID = k.stateID),
            (h.directionalLength = k.directionalLength),
            (h.pointLength = k.pointLength),
            (h.spotLength = k.spotLength),
            (h.rectAreaLength = k.rectAreaLength),
            (h.hemiLength = k.hemiLength),
            (h.shadowsLength = k.shadowsLength);
        else if (void 0 !== c.shaderID) return;
        q = !1;
      }
      q &&
        (c.shaderID
          ? ((m = Qa[c.shaderID]),
            (d.shader = {
              name: a.type,
              uniforms: va.clone(m.uniforms),
              vertexShader: m.vertexShader,
              fragmentShader: m.fragmentShader
            }))
          : (d.shader = {
              name: a.type,
              uniforms: a.uniforms,
              vertexShader: a.vertexShader,
              fragmentShader: a.fragmentShader
            }),
        a.onBeforeCompile(d.shader, Y),
        (m = na.getProgramCode(a, c)),
        (n = na.acquireProgram(a, d.shader, c, m)),
        (d.program = n),
        (a.program = n));
      c = n.getAttributes();
      if (a.morphTargets)
        for (m = a.numSupportedMorphTargets = 0; m < Y.maxMorphTargets; m++)
          0 <= c["morphTarget" + m] && a.numSupportedMorphTargets++;
      if (a.morphNormals)
        for (m = a.numSupportedMorphNormals = 0; m < Y.maxMorphNormals; m++)
          0 <= c["morphNormal" + m] && a.numSupportedMorphNormals++;
      c = d.shader.uniforms;
      if ((!a.isShaderMaterial && !a.isRawShaderMaterial) || !0 === a.clipping)
        (d.numClippingPlanes = aa.numPlanes),
          (d.numIntersection = aa.numIntersection),
          (c.clippingPlanes = aa.uniform);
      d.fog = b;
      void 0 === h && (d.lightsHash = h = {});
      h.stateID = k.stateID;
      h.directionalLength = k.directionalLength;
      h.pointLength = k.pointLength;
      h.spotLength = k.spotLength;
      h.rectAreaLength = k.rectAreaLength;
      h.hemiLength = k.hemiLength;
      h.shadowsLength = k.shadowsLength;
      a.lights &&
        ((c.ambientLightColor.value = e.state.ambient),
        (c.directionalLights.value = e.state.directional),
        (c.spotLights.value = e.state.spot),
        (c.rectAreaLights.value = e.state.rectArea),
        (c.pointLights.value = e.state.point),
        (c.hemisphereLights.value = e.state.hemi),
        (c.directionalShadowMap.value = e.state.directionalShadowMap),
        (c.directionalShadowMatrix.value = e.state.directionalShadowMatrix),
        (c.spotShadowMap.value = e.state.spotShadowMap),
        (c.spotShadowMatrix.value = e.state.spotShadowMatrix),
        (c.pointShadowMap.value = e.state.pointShadowMap),
        (c.pointShadowMatrix.value = e.state.pointShadowMatrix));
      a = d.program.getUniforms();
      a = db.seqWithValue(a.seq, c);
      d.uniformsList = a;
    }
    function r(a, b, c, d) {
      ca = 0;
      var e = Da.get(c),
        f = e.lightsHash,
        g = E.state.lights.state.hash;
      ud &&
        (be || a !== T) &&
        aa.setState(
          c.clippingPlanes,
          c.clipIntersection,
          c.clipShadows,
          a,
          e,
          a === T && c.id === F
        );
      !1 === c.needsUpdate &&
        (void 0 === e.program
          ? (c.needsUpdate = !0)
          : c.fog && e.fog !== b
          ? (c.needsUpdate = !0)
          : !c.lights ||
            (f.stateID === g.stateID &&
              f.directionalLength === g.directionalLength &&
              f.pointLength === g.pointLength &&
              f.spotLength === g.spotLength &&
              f.rectAreaLength === g.rectAreaLength &&
              f.hemiLength === g.hemiLength &&
              f.shadowsLength === g.shadowsLength)
          ? void 0 === e.numClippingPlanes ||
            (e.numClippingPlanes === aa.numPlanes &&
              e.numIntersection === aa.numIntersection) ||
            (c.needsUpdate = !0)
          : (c.needsUpdate = !0));
      c.needsUpdate && (n(c, b, d), (c.needsUpdate = !1));
      var h = !1,
        k = !1,
        m = !1;
      f = e.program;
      g = f.getUniforms();
      var q = e.shader.uniforms;
      ba.useProgram(f.program) && (m = k = h = !0);
      c.id !== F && ((F = c.id), (k = !0));
      if (h || T !== a) {
        g.setValue(O, "projectionMatrix", a.projectionMatrix);
        xa.logarithmicDepthBuffer &&
          g.setValue(O, "logDepthBufFC", 2 / (Math.log(a.far + 1) / Math.LN2));
        T !== a && ((T = a), (m = k = !0));
        if (
          c.isShaderMaterial ||
          c.isMeshPhongMaterial ||
          c.isMeshStandardMaterial ||
          c.envMap
        )
          (h = g.map.cameraPosition),
            void 0 !== h &&
              h.setValue(O, gb.setFromMatrixPosition(a.matrixWorld));
        (c.isMeshPhongMaterial ||
          c.isMeshLambertMaterial ||
          c.isMeshBasicMaterial ||
          c.isMeshStandardMaterial ||
          c.isShaderMaterial ||
          c.skinning) &&
          g.setValue(O, "viewMatrix", a.matrixWorldInverse);
      }
      if (
        c.skinning &&
        (g.setOptional(O, d, "bindMatrix"),
        g.setOptional(O, d, "bindMatrixInverse"),
        (a = d.skeleton))
      )
        if (((h = a.bones), xa.floatVertexTextures)) {
          if (void 0 === a.boneTexture) {
            h = Math.sqrt(4 * h.length);
            h = R.ceilPowerOfTwo(h);
            h = Math.max(h, 4);
            var r = new Float32Array(h * h * 4);
            r.set(a.boneMatrices);
            var x = new lb(r, h, h, 1023, 1015);
            x.needsUpdate = !0;
            a.boneMatrices = r;
            a.boneTexture = x;
            a.boneTextureSize = h;
          }
          g.setValue(O, "boneTexture", a.boneTexture);
          g.setValue(O, "boneTextureSize", a.boneTextureSize);
        } else g.setOptional(O, a, "boneMatrices");
      k &&
        (g.setValue(O, "toneMappingExposure", Y.toneMappingExposure),
        g.setValue(O, "toneMappingWhitePoint", Y.toneMappingWhitePoint),
        c.lights &&
          ((k = m),
          (q.ambientLightColor.needsUpdate = k),
          (q.directionalLights.needsUpdate = k),
          (q.pointLights.needsUpdate = k),
          (q.spotLights.needsUpdate = k),
          (q.rectAreaLights.needsUpdate = k),
          (q.hemisphereLights.needsUpdate = k)),
        b &&
          c.fog &&
          ((q.fogColor.value = b.color),
          b.isFog
            ? ((q.fogNear.value = b.near), (q.fogFar.value = b.far))
            : b.isFogExp2 && (q.fogDensity.value = b.density)),
        c.isMeshBasicMaterial
          ? l(q, c)
          : c.isMeshLambertMaterial
          ? (l(q, c), c.emissiveMap && (q.emissiveMap.value = c.emissiveMap))
          : c.isMeshPhongMaterial
          ? (l(q, c),
            c.isMeshToonMaterial
              ? (t(q, c),
                c.gradientMap && (q.gradientMap.value = c.gradientMap))
              : t(q, c))
          : c.isMeshStandardMaterial
          ? (l(q, c),
            c.isMeshPhysicalMaterial
              ? (u(q, c),
                (q.reflectivity.value = c.reflectivity),
                (q.clearCoat.value = c.clearCoat),
                (q.clearCoatRoughness.value = c.clearCoatRoughness))
              : u(q, c))
          : c.isMeshMatcapMaterial
          ? (l(q, c),
            c.matcap && (q.matcap.value = c.matcap),
            c.bumpMap &&
              ((q.bumpMap.value = c.bumpMap),
              (q.bumpScale.value = c.bumpScale),
              1 === c.side && (q.bumpScale.value *= -1)),
            c.normalMap &&
              ((q.normalMap.value = c.normalMap),
              q.normalScale.value.copy(c.normalScale),
              1 === c.side && q.normalScale.value.negate()),
            c.displacementMap &&
              ((q.displacementMap.value = c.displacementMap),
              (q.displacementScale.value = c.displacementScale),
              (q.displacementBias.value = c.displacementBias)))
          : c.isMeshDepthMaterial
          ? (l(q, c),
            c.displacementMap &&
              ((q.displacementMap.value = c.displacementMap),
              (q.displacementScale.value = c.displacementScale),
              (q.displacementBias.value = c.displacementBias)))
          : c.isMeshDistanceMaterial
          ? (l(q, c),
            c.displacementMap &&
              ((q.displacementMap.value = c.displacementMap),
              (q.displacementScale.value = c.displacementScale),
              (q.displacementBias.value = c.displacementBias)),
            q.referencePosition.value.copy(c.referencePosition),
            (q.nearDistance.value = c.nearDistance),
            (q.farDistance.value = c.farDistance))
          : c.isMeshNormalMaterial
          ? (l(q, c),
            c.bumpMap &&
              ((q.bumpMap.value = c.bumpMap),
              (q.bumpScale.value = c.bumpScale),
              1 === c.side && (q.bumpScale.value *= -1)),
            c.normalMap &&
              ((q.normalMap.value = c.normalMap),
              q.normalScale.value.copy(c.normalScale),
              1 === c.side && q.normalScale.value.negate()),
            c.displacementMap &&
              ((q.displacementMap.value = c.displacementMap),
              (q.displacementScale.value = c.displacementScale),
              (q.displacementBias.value = c.displacementBias)))
          : c.isLineBasicMaterial
          ? ((q.diffuse.value = c.color),
            (q.opacity.value = c.opacity),
            c.isLineDashedMaterial &&
              ((q.dashSize.value = c.dashSize),
              (q.totalSize.value = c.dashSize + c.gapSize),
              (q.scale.value = c.scale)))
          : c.isPointsMaterial
          ? ((q.diffuse.value = c.color),
            (q.opacity.value = c.opacity),
            (q.size.value = c.size * U),
            (q.scale.value = 0.5 * M),
            (q.map.value = c.map),
            null !== c.map &&
              (!0 === c.map.matrixAutoUpdate && c.map.updateMatrix(),
              q.uvTransform.value.copy(c.map.matrix)))
          : c.isSpriteMaterial
          ? ((q.diffuse.value = c.color),
            (q.opacity.value = c.opacity),
            (q.rotation.value = c.rotation),
            (q.map.value = c.map),
            null !== c.map &&
              (!0 === c.map.matrixAutoUpdate && c.map.updateMatrix(),
              q.uvTransform.value.copy(c.map.matrix)))
          : c.isShadowMaterial &&
            ((q.color.value = c.color), (q.opacity.value = c.opacity)),
        void 0 !== q.ltc_1 && (q.ltc_1.value = J.LTC_1),
        void 0 !== q.ltc_2 && (q.ltc_2.value = J.LTC_2),
        db.upload(O, e.uniformsList, q, Y));
      c.isShaderMaterial &&
        !0 === c.uniformsNeedUpdate &&
        (db.upload(O, e.uniformsList, q, Y), (c.uniformsNeedUpdate = !1));
      c.isSpriteMaterial && g.setValue(O, "center", d.center);
      g.setValue(O, "modelViewMatrix", d.modelViewMatrix);
      g.setValue(O, "normalMatrix", d.normalMatrix);
      g.setValue(O, "modelMatrix", d.matrixWorld);
      return f;
    }
    function l(a, b) {
      a.opacity.value = b.opacity;
      b.color && (a.diffuse.value = b.color);
      b.emissive &&
        a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity);
      b.map && (a.map.value = b.map);
      b.alphaMap && (a.alphaMap.value = b.alphaMap);
      b.specularMap && (a.specularMap.value = b.specularMap);
      b.envMap &&
        ((a.envMap.value = b.envMap),
        (a.flipEnvMap.value = b.envMap && b.envMap.isCubeTexture ? -1 : 1),
        (a.reflectivity.value = b.reflectivity),
        (a.refractionRatio.value = b.refractionRatio),
        (a.maxMipLevel.value = Da.get(b.envMap).__maxMipLevel));
      b.lightMap &&
        ((a.lightMap.value = b.lightMap),
        (a.lightMapIntensity.value = b.lightMapIntensity));
      b.aoMap &&
        ((a.aoMap.value = b.aoMap),
        (a.aoMapIntensity.value = b.aoMapIntensity));
      if (b.map) var c = b.map;
      else
        b.specularMap
          ? (c = b.specularMap)
          : b.displacementMap
          ? (c = b.displacementMap)
          : b.normalMap
          ? (c = b.normalMap)
          : b.bumpMap
          ? (c = b.bumpMap)
          : b.roughnessMap
          ? (c = b.roughnessMap)
          : b.metalnessMap
          ? (c = b.metalnessMap)
          : b.alphaMap
          ? (c = b.alphaMap)
          : b.emissiveMap && (c = b.emissiveMap);
      void 0 !== c &&
        (c.isWebGLRenderTarget && (c = c.texture),
        !0 === c.matrixAutoUpdate && c.updateMatrix(),
        a.uvTransform.value.copy(c.matrix));
    }
    function t(a, b) {
      a.specular.value = b.specular;
      a.shininess.value = Math.max(b.shininess, 1e-4);
      b.emissiveMap && (a.emissiveMap.value = b.emissiveMap);
      b.bumpMap &&
        ((a.bumpMap.value = b.bumpMap),
        (a.bumpScale.value = b.bumpScale),
        1 === b.side && (a.bumpScale.value *= -1));
      b.normalMap &&
        ((a.normalMap.value = b.normalMap),
        a.normalScale.value.copy(b.normalScale),
        1 === b.side && a.normalScale.value.negate());
      b.displacementMap &&
        ((a.displacementMap.value = b.displacementMap),
        (a.displacementScale.value = b.displacementScale),
        (a.displacementBias.value = b.displacementBias));
    }
    function u(a, b) {
      a.roughness.value = b.roughness;
      a.metalness.value = b.metalness;
      b.roughnessMap && (a.roughnessMap.value = b.roughnessMap);
      b.metalnessMap && (a.metalnessMap.value = b.metalnessMap);
      b.emissiveMap && (a.emissiveMap.value = b.emissiveMap);
      b.bumpMap &&
        ((a.bumpMap.value = b.bumpMap),
        (a.bumpScale.value = b.bumpScale),
        1 === b.side && (a.bumpScale.value *= -1));
      b.normalMap &&
        ((a.normalMap.value = b.normalMap),
        a.normalScale.value.copy(b.normalScale),
        1 === b.side && a.normalScale.value.negate());
      b.displacementMap &&
        ((a.displacementMap.value = b.displacementMap),
        (a.displacementScale.value = b.displacementScale),
        (a.displacementBias.value = b.displacementBias));
      b.envMap && (a.envMapIntensity.value = b.envMapIntensity);
    }
    console.log("THREE.WebGLRenderer", "98");
    a = a || {};
    var w =
        void 0 !== a.canvas
          ? a.canvas
          : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
      A = void 0 !== a.context ? a.context : null,
      v = void 0 !== a.alpha ? a.alpha : !1,
      H = void 0 !== a.depth ? a.depth : !0,
      y = void 0 !== a.stencil ? a.stencil : !0,
      N = void 0 !== a.antialias ? a.antialias : !1,
      z = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0,
      B = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1,
      C = void 0 !== a.powerPreference ? a.powerPreference : "default",
      D = null,
      E = null;
    this.domElement = w;
    this.context = null;
    this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
    this.clippingPlanes = [];
    this.localClippingEnabled = !1;
    this.gammaFactor = 2;
    this.physicallyCorrectLights = this.gammaOutput = this.gammaInput = !1;
    this.toneMappingWhitePoint = this.toneMappingExposure = this.toneMapping = 1;
    this.maxMorphTargets = 8;
    this.maxMorphNormals = 4;
    var Y = this,
      G = !1,
      Q = null,
      I = null,
      L = null,
      F = -1;
    var K = (b = null);
    var sd = !1;
    var T = null,
      W = null,
      S = new Z(),
      Bc = new Z(),
      ea = null,
      ca = 0,
      V = w.width,
      M = w.height,
      U = 1,
      fa = new Z(0, 0, V, M),
      ja = new Z(0, 0, V, M),
      sa = !1,
      qa = new rd(),
      aa = new Tf(),
      ud = !1,
      be = !1,
      Ac = new P(),
      gb = new p();
    try {
      v = {
        alpha: v,
        depth: H,
        stencil: y,
        antialias: N,
        premultipliedAlpha: z,
        preserveDrawingBuffer: B,
        powerPreference: C
      };
      w.addEventListener("webglcontextlost", d, !1);
      w.addEventListener("webglcontextrestored", e, !1);
      var O =
        A || w.getContext("webgl", v) || w.getContext("experimental-webgl", v);
      if (null === O) {
        if (null !== w.getContext("webgl"))
          throw Error(
            "Error creating WebGL context with your selected attributes."
          );
        throw Error("Error creating WebGL context.");
      }
      void 0 === O.getShaderPrecisionFormat &&
        (O.getShaderPrecisionFormat = function() {
          return { rangeMin: 1, rangeMax: 1, precision: 1 };
        });
    } catch (Tg) {
      console.error("THREE.WebGLRenderer: " + Tg.message);
    }
    var la, xa, ba, da, Da, ha, ra, ua, oa, na, ta, pa, ma, ya, Aa, Ba, ia;
    c();
    var ka = null;
    "undefined" !== typeof navigator &&
      (ka = "xr" in navigator ? new Sg(Y) : new hf(Y));
    this.vr = ka;
    var Ca = new cf(Y, oa, xa.maxTextureSize);
    this.shadowMap = Ca;
    this.getContext = function() {
      return O;
    };
    this.getContextAttributes = function() {
      return O.getContextAttributes();
    };
    this.forceContextLoss = function() {
      var a = la.get("WEBGL_lose_context");
      a && a.loseContext();
    };
    this.forceContextRestore = function() {
      var a = la.get("WEBGL_lose_context");
      a && a.restoreContext();
    };
    this.getPixelRatio = function() {
      return U;
    };
    this.setPixelRatio = function(a) {
      void 0 !== a && ((U = a), this.setSize(V, M, !1));
    };
    this.getSize = function() {
      return { width: V, height: M };
    };
    this.setSize = function(a, b, c) {
      ka.isPresenting()
        ? console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          )
        : ((V = a),
          (M = b),
          (w.width = a * U),
          (w.height = b * U),
          !1 !== c && ((w.style.width = a + "px"), (w.style.height = b + "px")),
          this.setViewport(0, 0, a, b));
    };
    this.getDrawingBufferSize = function() {
      return { width: V * U, height: M * U };
    };
    this.setDrawingBufferSize = function(a, b, c) {
      V = a;
      M = b;
      U = c;
      w.width = a * c;
      w.height = b * c;
      this.setViewport(0, 0, a, b);
    };
    this.getCurrentViewport = function() {
      return S;
    };
    this.setViewport = function(a, b, c, d) {
      fa.set(a, M - b - d, c, d);
      ba.viewport(S.copy(fa).multiplyScalar(U));
    };
    this.setScissor = function(a, b, c, d) {
      ja.set(a, M - b - d, c, d);
      ba.scissor(Bc.copy(ja).multiplyScalar(U));
    };
    this.setScissorTest = function(a) {
      ba.setScissorTest((sa = a));
    };
    this.getClearColor = function() {
      return ma.getClearColor();
    };
    this.setClearColor = function() {
      ma.setClearColor.apply(ma, arguments);
    };
    this.getClearAlpha = function() {
      return ma.getClearAlpha();
    };
    this.setClearAlpha = function() {
      ma.setClearAlpha.apply(ma, arguments);
    };
    this.clear = function(a, b, c) {
      var d = 0;
      if (void 0 === a || a) d |= 16384;
      if (void 0 === b || b) d |= 256;
      if (void 0 === c || c) d |= 1024;
      O.clear(d);
    };
    this.clearColor = function() {
      this.clear(!0, !1, !1);
    };
    this.clearDepth = function() {
      this.clear(!1, !0, !1);
    };
    this.clearStencil = function() {
      this.clear(!1, !1, !0);
    };
    this.dispose = function() {
      w.removeEventListener("webglcontextlost", d, !1);
      w.removeEventListener("webglcontextrestored", e, !1);
      ta.dispose();
      pa.dispose();
      Da.dispose();
      oa.dispose();
      ka.dispose();
      wa.stop();
    };
    this.renderBufferImmediate = function(a, b) {
      ba.initAttributes();
      var c = Da.get(a);
      a.hasPositions && !c.position && (c.position = O.createBuffer());
      a.hasNormals && !c.normal && (c.normal = O.createBuffer());
      a.hasUvs && !c.uv && (c.uv = O.createBuffer());
      a.hasColors && !c.color && (c.color = O.createBuffer());
      b = b.getAttributes();
      a.hasPositions &&
        (O.bindBuffer(34962, c.position),
        O.bufferData(34962, a.positionArray, 35048),
        ba.enableAttribute(b.position),
        O.vertexAttribPointer(b.position, 3, 5126, !1, 0, 0));
      a.hasNormals &&
        (O.bindBuffer(34962, c.normal),
        O.bufferData(34962, a.normalArray, 35048),
        ba.enableAttribute(b.normal),
        O.vertexAttribPointer(b.normal, 3, 5126, !1, 0, 0));
      a.hasUvs &&
        (O.bindBuffer(34962, c.uv),
        O.bufferData(34962, a.uvArray, 35048),
        ba.enableAttribute(b.uv),
        O.vertexAttribPointer(b.uv, 2, 5126, !1, 0, 0));
      a.hasColors &&
        (O.bindBuffer(34962, c.color),
        O.bufferData(34962, a.colorArray, 35048),
        ba.enableAttribute(b.color),
        O.vertexAttribPointer(b.color, 3, 5126, !1, 0, 0));
      ba.disableUnusedAttributes();
      O.drawArrays(4, 0, a.count);
      a.count = 0;
    };
    this.renderBufferDirect = function(a, c, d, e, f, g) {
      var h = f.isMesh && 0 > f.normalMatrix.determinant();
      ba.setMaterial(e, h);
      var k = r(a, c, e, f),
        m = !1;
      if (b !== d.id || K !== k.id || sd !== (!0 === e.wireframe))
        (b = d.id), (K = k.id), (sd = !0 === e.wireframe), (m = !0);
      f.morphTargetInfluences && (ya.update(f, d, e, k), (m = !0));
      h = d.index;
      var q = d.attributes.position;
      c = 1;
      !0 === e.wireframe && ((h = ua.getWireframeAttribute(d)), (c = 2));
      a = Aa;
      if (null !== h) {
        var n = ra.get(h);
        a = Ba;
        a.setIndex(n);
      }
      if (m) {
        if (
          d &&
          d.isInstancedBufferGeometry & !xa.isWebGL2 &&
          null === la.get("ANGLE_instanced_arrays")
        )
          console.error(
            "THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
          );
        else {
          ba.initAttributes();
          m = d.attributes;
          k = k.getAttributes();
          var l = e.defaultAttributeValues;
          for (B in k) {
            var x = k[B];
            if (0 <= x) {
              var t = m[B];
              if (void 0 !== t) {
                var u = t.normalized,
                  w = t.itemSize,
                  p = ra.get(t);
                if (void 0 !== p) {
                  var v = p.buffer,
                    A = p.type;
                  p = p.bytesPerElement;
                  if (t.isInterleavedBufferAttribute) {
                    var y = t.data,
                      H = y.stride;
                    t = t.offset;
                    y && y.isInstancedInterleavedBuffer
                      ? (ba.enableAttributeAndDivisor(x, y.meshPerAttribute),
                        void 0 === d.maxInstancedCount &&
                          (d.maxInstancedCount = y.meshPerAttribute * y.count))
                      : ba.enableAttribute(x);
                    O.bindBuffer(34962, v);
                    O.vertexAttribPointer(x, w, A, u, H * p, t * p);
                  } else
                    t.isInstancedBufferAttribute
                      ? (ba.enableAttributeAndDivisor(x, t.meshPerAttribute),
                        void 0 === d.maxInstancedCount &&
                          (d.maxInstancedCount = t.meshPerAttribute * t.count))
                      : ba.enableAttribute(x),
                      O.bindBuffer(34962, v),
                      O.vertexAttribPointer(x, w, A, u, 0, 0);
                }
              } else if (void 0 !== l && ((u = l[B]), void 0 !== u))
                switch (u.length) {
                  case 2:
                    O.vertexAttrib2fv(x, u);
                    break;
                  case 3:
                    O.vertexAttrib3fv(x, u);
                    break;
                  case 4:
                    O.vertexAttrib4fv(x, u);
                    break;
                  default:
                    O.vertexAttrib1fv(x, u);
                }
            }
          }
          ba.disableUnusedAttributes();
        }
        null !== h && O.bindBuffer(34963, n.buffer);
      }
      n = Infinity;
      null !== h ? (n = h.count) : void 0 !== q && (n = q.count);
      h = d.drawRange.start * c;
      q = null !== g ? g.start * c : 0;
      var B = Math.max(h, q);
      g = Math.max(
        0,
        Math.min(
          n,
          h + d.drawRange.count * c,
          q + (null !== g ? g.count * c : Infinity)
        ) -
          1 -
          B +
          1
      );
      if (0 !== g) {
        if (f.isMesh)
          if (!0 === e.wireframe)
            ba.setLineWidth(e.wireframeLinewidth * (null === I ? U : 1)),
              a.setMode(1);
          else
            switch (f.drawMode) {
              case 0:
                a.setMode(4);
                break;
              case 1:
                a.setMode(5);
                break;
              case 2:
                a.setMode(6);
            }
        else
          f.isLine
            ? ((e = e.linewidth),
              void 0 === e && (e = 1),
              ba.setLineWidth(e * (null === I ? U : 1)),
              f.isLineSegments
                ? a.setMode(1)
                : f.isLineLoop
                ? a.setMode(2)
                : a.setMode(3))
            : f.isPoints
            ? a.setMode(0)
            : f.isSprite && a.setMode(4);
        d && d.isInstancedBufferGeometry
          ? 0 < d.maxInstancedCount && a.renderInstances(d, B, g)
          : a.render(B, g);
      }
    };
    this.compile = function(a, b) {
      E = pa.get(a, b);
      E.init();
      a.traverse(function(a) {
        a.isLight && (E.pushLight(a), a.castShadow && E.pushShadow(a));
      });
      E.setupLights(b);
      a.traverse(function(b) {
        if (b.material)
          if (Array.isArray(b.material))
            for (var c = 0; c < b.material.length; c++)
              n(b.material[c], a.fog, b);
          else n(b.material, a.fog, b);
      });
    };
    var za = null,
      wa = new Xd();
    wa.setAnimationLoop(function(a) {
      ka.isPresenting() || (za && za(a));
    });
    "undefined" !== typeof window && wa.setContext(window);
    this.setAnimationLoop = function(a) {
      za = a;
      ka.setAnimationLoop(a);
      wa.start();
    };
    this.render = function(a, c, d, e) {
      if (!c || !c.isCamera)
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
      else if (!G) {
        K = b = null;
        sd = !1;
        F = -1;
        T = null;
        !0 === a.autoUpdate && a.updateMatrixWorld();
        null === c.parent && c.updateMatrixWorld();
        ka.enabled && (c = ka.getCamera(c));
        E = pa.get(a, c);
        E.init();
        a.onBeforeRender(Y, a, c, d);
        Ac.multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse);
        qa.setFromMatrix(Ac);
        be = this.localClippingEnabled;
        ud = aa.init(this.clippingPlanes, be, c);
        D = ta.get(a, c);
        D.init();
        k(a, c, Y.sortObjects);
        !0 === Y.sortObjects && D.sort();
        ud && aa.beginShadows();
        Ca.render(E.state.shadowsArray, a, c);
        E.setupLights(c);
        ud && aa.endShadows();
        this.info.autoReset && this.info.reset();
        void 0 === d && (d = null);
        this.setRenderTarget(d);
        ma.render(D, a, c, e);
        e = D.opaque;
        var f = D.transparent;
        if (a.overrideMaterial) {
          var g = a.overrideMaterial;
          e.length && m(e, a, c, g);
          f.length && m(f, a, c, g);
        } else e.length && m(e, a, c), f.length && m(f, a, c);
        d && ha.updateRenderTargetMipmap(d);
        ba.buffers.depth.setTest(!0);
        ba.buffers.depth.setMask(!0);
        ba.buffers.color.setMask(!0);
        ba.setPolygonOffset(!1);
        a.onAfterRender(Y, a, c);
        ka.enabled && ka.submitFrame();
        E = D = null;
      }
    };
    this.allocTextureUnit = function() {
      var a = ca;
      a >= xa.maxTextures &&
        console.warn(
          "THREE.WebGLRenderer: Trying to use " +
            a +
            " texture units while this GPU supports only " +
            xa.maxTextures
        );
      ca += 1;
      return a;
    };
    this.setTexture2D = (function() {
      var a = !1;
      return function(b, c) {
        b &&
          b.isWebGLRenderTarget &&
          (a ||
            (console.warn(
              "THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."
            ),
            (a = !0)),
          (b = b.texture));
        ha.setTexture2D(b, c);
      };
    })();
    this.setTexture3D = (function() {
      return function(a, b) {
        ha.setTexture3D(a, b);
      };
    })();
    this.setTexture = (function() {
      var a = !1;
      return function(b, c) {
        a ||
          (console.warn(
            "THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."
          ),
          (a = !0));
        ha.setTexture2D(b, c);
      };
    })();
    this.setTextureCube = (function() {
      var a = !1;
      return function(b, c) {
        b &&
          b.isWebGLRenderTargetCube &&
          (a ||
            (console.warn(
              "THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."
            ),
            (a = !0)),
          (b = b.texture));
        (b && b.isCubeTexture) ||
        (Array.isArray(b.image) && 6 === b.image.length)
          ? ha.setTextureCube(b, c)
          : ha.setTextureCubeDynamic(b, c);
      };
    })();
    this.setFramebuffer = function(a) {
      Q = a;
    };
    this.getRenderTarget = function() {
      return I;
    };
    this.setRenderTarget = function(a) {
      (I = a) &&
        void 0 === Da.get(a).__webglFramebuffer &&
        ha.setupRenderTarget(a);
      var b = Q,
        c = !1;
      a
        ? ((b = Da.get(a).__webglFramebuffer),
          a.isWebGLRenderTargetCube && ((b = b[a.activeCubeFace]), (c = !0)),
          S.copy(a.viewport),
          Bc.copy(a.scissor),
          (ea = a.scissorTest))
        : (S.copy(fa).multiplyScalar(U),
          Bc.copy(ja).multiplyScalar(U),
          (ea = sa));
      L !== b && (O.bindFramebuffer(36160, b), (L = b));
      ba.viewport(S);
      ba.scissor(Bc);
      ba.setScissorTest(ea);
      c &&
        ((c = Da.get(a.texture)),
        O.framebufferTexture2D(
          36160,
          36064,
          34069 + a.activeCubeFace,
          c.__webglTexture,
          a.activeMipMapLevel
        ));
    };
    this.readRenderTargetPixels = function(a, b, c, d, e, f) {
      if (a && a.isWebGLRenderTarget) {
        var g = Da.get(a).__webglFramebuffer;
        if (g) {
          var h = !1;
          g !== L && (O.bindFramebuffer(36160, g), (h = !0));
          try {
            var k = a.texture,
              m = k.format,
              q = k.type;
            1023 !== m && ia.convert(m) !== O.getParameter(35739)
              ? console.error(
                  "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
                )
              : 1009 === q ||
                ia.convert(q) === O.getParameter(35738) ||
                (1015 === q &&
                  (xa.isWebGL2 ||
                    la.get("OES_texture_float") ||
                    la.get("WEBGL_color_buffer_float"))) ||
                (1016 === q &&
                  (xa.isWebGL2
                    ? la.get("EXT_color_buffer_float")
                    : la.get("EXT_color_buffer_half_float")))
              ? 36053 === O.checkFramebufferStatus(36160)
                ? 0 <= b &&
                  b <= a.width - d &&
                  0 <= c &&
                  c <= a.height - e &&
                  O.readPixels(b, c, d, e, ia.convert(m), ia.convert(q), f)
                : console.error(
                    "THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."
                  )
              : console.error(
                  "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
                );
          } finally {
            h && O.bindFramebuffer(36160, L);
          }
        }
      } else
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
    };
    this.copyFramebufferToTexture = function(a, b, c) {
      var d = b.image.width,
        e = b.image.height,
        f = ia.convert(b.format);
      this.setTexture2D(b, 0);
      O.copyTexImage2D(3553, c || 0, f, a.x, a.y, d, e, 0);
    };
    this.copyTextureToTexture = function(a, b, c, d) {
      var e = b.image.width,
        f = b.image.height,
        g = ia.convert(c.format),
        h = ia.convert(c.type);
      this.setTexture2D(c, 0);
      b.isDataTexture
        ? O.texSubImage2D(3553, d || 0, a.x, a.y, e, f, g, h, b.image.data)
        : O.texSubImage2D(3553, d || 0, a.x, a.y, g, h, b.image);
    };
  }
  function Pb(a, b) {
    this.name = "";
    this.color = new G(a);
    this.density = void 0 !== b ? b : 2.5e-4;
  }
  function Qb(a, b, c) {
    this.name = "";
    this.color = new G(a);
    this.near = void 0 !== b ? b : 1;
    this.far = void 0 !== c ? c : 1e3;
  }
  function vd() {
    D.call(this);
    this.type = "Scene";
    this.overrideMaterial = this.fog = this.background = null;
    this.autoUpdate = !0;
  }
  function sb(a, b) {
    this.array = a;
    this.stride = b;
    this.count = void 0 !== a ? a.length / b : 0;
    this.dynamic = !1;
    this.updateRange = { offset: 0, count: -1 };
    this.version = 0;
  }
  function Dc(a, b, c, d) {
    this.data = a;
    this.itemSize = b;
    this.offset = c;
    this.normalized = !0 === d;
  }
  function hb(a) {
    L.call(this);
    this.type = "SpriteMaterial";
    this.color = new G(16777215);
    this.map = null;
    this.rotation = 0;
    this.sizeAttenuation = !0;
    this.lights = !1;
    this.transparent = !0;
    this.setValues(a);
  }
  function Ec(a) {
    D.call(this);
    this.type = "Sprite";
    if (void 0 === Rb) {
      Rb = new E();
      var b = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]);
      b = new sb(b, 5);
      Rb.setIndex([0, 1, 2, 0, 2, 3]);
      Rb.addAttribute("position", new Dc(b, 3, 0, !1));
      Rb.addAttribute("uv", new Dc(b, 2, 3, !1));
    }
    this.geometry = Rb;
    this.material = void 0 !== a ? a : new hb();
    this.center = new z(0.5, 0.5);
  }
  function Fc() {
    D.call(this);
    this.type = "LOD";
    Object.defineProperties(this, { levels: { enumerable: !0, value: [] } });
  }
  function Gc(a, b) {
    a = a || [];
    this.bones = a.slice(0);
    this.boneMatrices = new Float32Array(16 * this.bones.length);
    if (void 0 === b) this.calculateInverses();
    else if (this.bones.length === b.length) this.boneInverses = b.slice(0);
    else
      for (
        console.warn("THREE.Skeleton boneInverses is the wrong length."),
          this.boneInverses = [],
          a = 0,
          b = this.bones.length;
        a < b;
        a++
      )
        this.boneInverses.push(new P());
  }
  function wd() {
    D.call(this);
    this.type = "Bone";
  }
  function xd(a, b) {
    pa.call(this, a, b);
    this.type = "SkinnedMesh";
    this.bindMode = "attached";
    this.bindMatrix = new P();
    this.bindMatrixInverse = new P();
    a = this.initBones();
    a = new Gc(a);
    this.bind(a, this.matrixWorld);
    this.normalizeSkinWeights();
  }
  function T(a) {
    L.call(this);
    this.type = "LineBasicMaterial";
    this.color = new G(16777215);
    this.linewidth = 1;
    this.linejoin = this.linecap = "round";
    this.lights = !1;
    this.setValues(a);
  }
  function ma(a, b, c) {
    1 === c &&
      console.error(
        "THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."
      );
    D.call(this);
    this.type = "Line";
    this.geometry = void 0 !== a ? a : new E();
    this.material =
      void 0 !== b ? b : new T({ color: 16777215 * Math.random() });
  }
  function S(a, b) {
    ma.call(this, a, b);
    this.type = "LineSegments";
  }
  function yd(a, b) {
    ma.call(this, a, b);
    this.type = "LineLoop";
  }
  function Ha(a) {
    L.call(this);
    this.type = "PointsMaterial";
    this.color = new G(16777215);
    this.map = null;
    this.size = 1;
    this.sizeAttenuation = !0;
    this.lights = this.morphTargets = !1;
    this.setValues(a);
  }
  function Sb(a, b) {
    D.call(this);
    this.type = "Points";
    this.geometry = void 0 !== a ? a : new E();
    this.material =
      void 0 !== b ? b : new Ha({ color: 16777215 * Math.random() });
  }
  function de(a, b, c, d, e, f, g, h, k) {
    W.call(this, a, b, c, d, e, f, g, h, k);
    this.generateMipmaps = !1;
  }
  function Tb(a, b, c, d, e, f, g, h, k, m, q, n) {
    W.call(this, null, f, g, h, k, m, d, e, q, n);
    this.image = { width: b, height: c };
    this.mipmaps = a;
    this.generateMipmaps = this.flipY = !1;
  }
  function Hc(a, b, c, d, e, f, g, h, k) {
    W.call(this, a, b, c, d, e, f, g, h, k);
    this.needsUpdate = !0;
  }
  function Ic(a, b, c, d, e, f, g, h, k, m) {
    m = void 0 !== m ? m : 1026;
    if (1026 !== m && 1027 !== m)
      throw Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    void 0 === c && 1026 === m && (c = 1012);
    void 0 === c && 1027 === m && (c = 1020);
    W.call(this, null, d, e, f, g, h, m, c, k);
    this.image = { width: a, height: b };
    this.magFilter = void 0 !== g ? g : 1003;
    this.minFilter = void 0 !== h ? h : 1003;
    this.generateMipmaps = this.flipY = !1;
  }
  function Ub(a) {
    E.call(this);
    this.type = "WireframeGeometry";
    var b = [],
      c,
      d,
      e,
      f = [0, 0],
      g = {},
      h = ["a", "b", "c"];
    if (a && a.isGeometry) {
      var k = a.faces;
      var m = 0;
      for (d = k.length; m < d; m++) {
        var q = k[m];
        for (c = 0; 3 > c; c++) {
          var n = q[h[c]];
          var r = q[h[(c + 1) % 3]];
          f[0] = Math.min(n, r);
          f[1] = Math.max(n, r);
          n = f[0] + "," + f[1];
          void 0 === g[n] && (g[n] = { index1: f[0], index2: f[1] });
        }
      }
      for (n in g)
        (m = g[n]),
          (h = a.vertices[m.index1]),
          b.push(h.x, h.y, h.z),
          (h = a.vertices[m.index2]),
          b.push(h.x, h.y, h.z);
    } else if (a && a.isBufferGeometry)
      if (((h = new p()), null !== a.index)) {
        k = a.attributes.position;
        q = a.index;
        var l = a.groups;
        0 === l.length &&
          (l = [{ start: 0, count: q.count, materialIndex: 0 }]);
        a = 0;
        for (e = l.length; a < e; ++a)
          for (
            m = l[a], c = m.start, d = m.count, m = c, d = c + d;
            m < d;
            m += 3
          )
            for (c = 0; 3 > c; c++)
              (n = q.getX(m + c)),
                (r = q.getX(m + ((c + 1) % 3))),
                (f[0] = Math.min(n, r)),
                (f[1] = Math.max(n, r)),
                (n = f[0] + "," + f[1]),
                void 0 === g[n] && (g[n] = { index1: f[0], index2: f[1] });
        for (n in g)
          (m = g[n]),
            h.fromBufferAttribute(k, m.index1),
            b.push(h.x, h.y, h.z),
            h.fromBufferAttribute(k, m.index2),
            b.push(h.x, h.y, h.z);
      } else
        for (k = a.attributes.position, m = 0, d = k.count / 3; m < d; m++)
          for (c = 0; 3 > c; c++)
            (g = 3 * m + c),
              h.fromBufferAttribute(k, g),
              b.push(h.x, h.y, h.z),
              (g = 3 * m + ((c + 1) % 3)),
              h.fromBufferAttribute(k, g),
              b.push(h.x, h.y, h.z);
    this.addAttribute("position", new C(b, 3));
  }
  function Jc(a, b, c) {
    I.call(this);
    this.type = "ParametricGeometry";
    this.parameters = { func: a, slices: b, stacks: c };
    this.fromBufferGeometry(new Vb(a, b, c));
    this.mergeVertices();
  }
  function Vb(a, b, c) {
    E.call(this);
    this.type = "ParametricBufferGeometry";
    this.parameters = { func: a, slices: b, stacks: c };
    var d = [],
      e = [],
      f = [],
      g = [],
      h = new p(),
      k = new p(),
      m = new p(),
      q = new p(),
      n = new p(),
      r,
      l;
    3 > a.length &&
      console.error(
        "THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter."
      );
    var t = b + 1;
    for (r = 0; r <= c; r++) {
      var u = r / c;
      for (l = 0; l <= b; l++) {
        var w = l / b;
        a(w, u, k);
        e.push(k.x, k.y, k.z);
        0 <= w - 1e-5
          ? (a(w - 1e-5, u, m), q.subVectors(k, m))
          : (a(w + 1e-5, u, m), q.subVectors(m, k));
        0 <= u - 1e-5
          ? (a(w, u - 1e-5, m), n.subVectors(k, m))
          : (a(w, u + 1e-5, m), n.subVectors(m, k));
        h.crossVectors(q, n).normalize();
        f.push(h.x, h.y, h.z);
        g.push(w, u);
      }
    }
    for (r = 0; r < c; r++)
      for (l = 0; l < b; l++)
        (a = r * t + l + 1),
          (h = (r + 1) * t + l + 1),
          (k = (r + 1) * t + l),
          d.push(r * t + l, a, k),
          d.push(a, h, k);
    this.setIndex(d);
    this.addAttribute("position", new C(e, 3));
    this.addAttribute("normal", new C(f, 3));
    this.addAttribute("uv", new C(g, 2));
  }
  function Kc(a, b, c, d) {
    I.call(this);
    this.type = "PolyhedronGeometry";
    this.parameters = { vertices: a, indices: b, radius: c, detail: d };
    this.fromBufferGeometry(new ya(a, b, c, d));
    this.mergeVertices();
  }
  function ya(a, b, c, d) {
    function e(a) {
      h.push(a.x, a.y, a.z);
    }
    function f(b, c) {
      b *= 3;
      c.x = a[b + 0];
      c.y = a[b + 1];
      c.z = a[b + 2];
    }
    function g(a, b, c, d) {
      0 > d && 1 === a.x && (k[b] = a.x - 1);
      0 === c.x && 0 === c.z && (k[b] = d / 2 / Math.PI + 0.5);
    }
    E.call(this);
    this.type = "PolyhedronBufferGeometry";
    this.parameters = { vertices: a, indices: b, radius: c, detail: d };
    c = c || 1;
    d = d || 0;
    var h = [],
      k = [];
    (function(a) {
      for (
        var c = new p(), d = new p(), g = new p(), h = 0;
        h < b.length;
        h += 3
      ) {
        f(b[h + 0], c);
        f(b[h + 1], d);
        f(b[h + 2], g);
        var k,
          m,
          l = c,
          A = d,
          v = g,
          H = Math.pow(2, a),
          y = [];
        for (m = 0; m <= H; m++) {
          y[m] = [];
          var N = l.clone().lerp(v, m / H),
            z = A.clone().lerp(v, m / H),
            B = H - m;
          for (k = 0; k <= B; k++)
            y[m][k] = 0 === k && m === H ? N : N.clone().lerp(z, k / B);
        }
        for (m = 0; m < H; m++)
          for (k = 0; k < 2 * (H - m) - 1; k++)
            (l = Math.floor(k / 2)),
              0 === k % 2
                ? (e(y[m][l + 1]), e(y[m + 1][l]), e(y[m][l]))
                : (e(y[m][l + 1]), e(y[m + 1][l + 1]), e(y[m + 1][l]));
      }
    })(d);
    (function(a) {
      for (var b = new p(), c = 0; c < h.length; c += 3)
        (b.x = h[c + 0]),
          (b.y = h[c + 1]),
          (b.z = h[c + 2]),
          b.normalize().multiplyScalar(a),
          (h[c + 0] = b.x),
          (h[c + 1] = b.y),
          (h[c + 2] = b.z);
    })(c);
    (function() {
      for (var a = new p(), b = 0; b < h.length; b += 3)
        (a.x = h[b + 0]),
          (a.y = h[b + 1]),
          (a.z = h[b + 2]),
          k.push(
            Math.atan2(a.z, -a.x) / 2 / Math.PI + 0.5,
            1 -
              (Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI +
                0.5)
          );
      a = new p();
      b = new p();
      for (
        var c = new p(),
          d = new p(),
          e = new z(),
          f = new z(),
          l = new z(),
          w = 0,
          A = 0;
        w < h.length;
        w += 9, A += 6
      ) {
        a.set(h[w + 0], h[w + 1], h[w + 2]);
        b.set(h[w + 3], h[w + 4], h[w + 5]);
        c.set(h[w + 6], h[w + 7], h[w + 8]);
        e.set(k[A + 0], k[A + 1]);
        f.set(k[A + 2], k[A + 3]);
        l.set(k[A + 4], k[A + 5]);
        d.copy(a)
          .add(b)
          .add(c)
          .divideScalar(3);
        var v = Math.atan2(d.z, -d.x);
        g(e, A + 0, a, v);
        g(f, A + 2, b, v);
        g(l, A + 4, c, v);
      }
      for (a = 0; a < k.length; a += 6)
        (b = k[a + 0]),
          (c = k[a + 2]),
          (d = k[a + 4]),
          (e = Math.min(b, c, d)),
          0.9 < Math.max(b, c, d) &&
            0.1 > e &&
            (0.2 > b && (k[a + 0] += 1),
            0.2 > c && (k[a + 2] += 1),
            0.2 > d && (k[a + 4] += 1));
    })();
    this.addAttribute("position", new C(h, 3));
    this.addAttribute("normal", new C(h.slice(), 3));
    this.addAttribute("uv", new C(k, 2));
    0 === d ? this.computeVertexNormals() : this.normalizeNormals();
  }
  function Lc(a, b) {
    I.call(this);
    this.type = "TetrahedronGeometry";
    this.parameters = { radius: a, detail: b };
    this.fromBufferGeometry(new Wb(a, b));
    this.mergeVertices();
  }
  function Wb(a, b) {
    ya.call(
      this,
      [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
      [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1],
      a,
      b
    );
    this.type = "TetrahedronBufferGeometry";
    this.parameters = { radius: a, detail: b };
  }
  function Mc(a, b) {
    I.call(this);
    this.type = "OctahedronGeometry";
    this.parameters = { radius: a, detail: b };
    this.fromBufferGeometry(new tb(a, b));
    this.mergeVertices();
  }
  function tb(a, b) {
    ya.call(
      this,
      [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
      [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2],
      a,
      b
    );
    this.type = "OctahedronBufferGeometry";
    this.parameters = { radius: a, detail: b };
  }
  function Nc(a, b) {
    I.call(this);
    this.type = "IcosahedronGeometry";
    this.parameters = { radius: a, detail: b };
    this.fromBufferGeometry(new Xb(a, b));
    this.mergeVertices();
  }
  function Xb(a, b) {
    var c = (1 + Math.sqrt(5)) / 2;
    ya.call(
      this,
      [
        -1,
        c,
        0,
        1,
        c,
        0,
        -1,
        -c,
        0,
        1,
        -c,
        0,
        0,
        -1,
        c,
        0,
        1,
        c,
        0,
        -1,
        -c,
        0,
        1,
        -c,
        c,
        0,
        -1,
        c,
        0,
        1,
        -c,
        0,
        -1,
        -c,
        0,
        1
      ],
      [
        0,
        11,
        5,
        0,
        5,
        1,
        0,
        1,
        7,
        0,
        7,
        10,
        0,
        10,
        11,
        1,
        5,
        9,
        5,
        11,
        4,
        11,
        10,
        2,
        10,
        7,
        6,
        7,
        1,
        8,
        3,
        9,
        4,
        3,
        4,
        2,
        3,
        2,
        6,
        3,
        6,
        8,
        3,
        8,
        9,
        4,
        9,
        5,
        2,
        4,
        11,
        6,
        2,
        10,
        8,
        6,
        7,
        9,
        8,
        1
      ],
      a,
      b
    );
    this.type = "IcosahedronBufferGeometry";
    this.parameters = { radius: a, detail: b };
  }
  function Oc(a, b) {
    I.call(this);
    this.type = "DodecahedronGeometry";
    this.parameters = { radius: a, detail: b };
    this.fromBufferGeometry(new Yb(a, b));
    this.mergeVertices();
  }
  function Yb(a, b) {
    var c = (1 + Math.sqrt(5)) / 2,
      d = 1 / c;
    ya.call(
      this,
      [
        -1,
        -1,
        -1,
        -1,
        -1,
        1,
        -1,
        1,
        -1,
        -1,
        1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        1,
        -1,
        1,
        1,
        1,
        0,
        -d,
        -c,
        0,
        -d,
        c,
        0,
        d,
        -c,
        0,
        d,
        c,
        -d,
        -c,
        0,
        -d,
        c,
        0,
        d,
        -c,
        0,
        d,
        c,
        0,
        -c,
        0,
        -d,
        c,
        0,
        -d,
        -c,
        0,
        d,
        c,
        0,
        d
      ],
      [
        3,
        11,
        7,
        3,
        7,
        15,
        3,
        15,
        13,
        7,
        19,
        17,
        7,
        17,
        6,
        7,
        6,
        15,
        17,
        4,
        8,
        17,
        8,
        10,
        17,
        10,
        6,
        8,
        0,
        16,
        8,
        16,
        2,
        8,
        2,
        10,
        0,
        12,
        1,
        0,
        1,
        18,
        0,
        18,
        16,
        6,
        10,
        2,
        6,
        2,
        13,
        6,
        13,
        15,
        2,
        16,
        18,
        2,
        18,
        3,
        2,
        3,
        13,
        18,
        1,
        9,
        18,
        9,
        11,
        18,
        11,
        3,
        4,
        14,
        12,
        4,
        12,
        0,
        4,
        0,
        8,
        11,
        9,
        5,
        11,
        5,
        19,
        11,
        19,
        7,
        19,
        5,
        14,
        19,
        14,
        4,
        19,
        4,
        17,
        1,
        12,
        14,
        1,
        14,
        5,
        1,
        5,
        9
      ],
      a,
      b
    );
    this.type = "DodecahedronBufferGeometry";
    this.parameters = { radius: a, detail: b };
  }
  function Pc(a, b, c, d, e, f) {
    I.call(this);
    this.type = "TubeGeometry";
    this.parameters = {
      path: a,
      tubularSegments: b,
      radius: c,
      radialSegments: d,
      closed: e
    };
    void 0 !== f && console.warn("THREE.TubeGeometry: taper has been removed.");
    a = new Zb(a, b, c, d, e);
    this.tangents = a.tangents;
    this.normals = a.normals;
    this.binormals = a.binormals;
    this.fromBufferGeometry(a);
    this.mergeVertices();
  }
  function Zb(a, b, c, d, e) {
    function f(e) {
      q = a.getPointAt(e / b, q);
      var f = g.normals[e];
      e = g.binormals[e];
      for (r = 0; r <= d; r++) {
        var m = (r / d) * Math.PI * 2,
          n = Math.sin(m);
        m = -Math.cos(m);
        k.x = m * f.x + n * e.x;
        k.y = m * f.y + n * e.y;
        k.z = m * f.z + n * e.z;
        k.normalize();
        t.push(k.x, k.y, k.z);
        h.x = q.x + c * k.x;
        h.y = q.y + c * k.y;
        h.z = q.z + c * k.z;
        l.push(h.x, h.y, h.z);
      }
    }
    E.call(this);
    this.type = "TubeBufferGeometry";
    this.parameters = {
      path: a,
      tubularSegments: b,
      radius: c,
      radialSegments: d,
      closed: e
    };
    b = b || 64;
    c = c || 1;
    d = d || 8;
    e = e || !1;
    var g = a.computeFrenetFrames(b, e);
    this.tangents = g.tangents;
    this.normals = g.normals;
    this.binormals = g.binormals;
    var h = new p(),
      k = new p(),
      m = new z(),
      q = new p(),
      n,
      r,
      l = [],
      t = [],
      u = [],
      w = [];
    for (n = 0; n < b; n++) f(n);
    f(!1 === e ? b : 0);
    for (n = 0; n <= b; n++)
      for (r = 0; r <= d; r++) (m.x = n / b), (m.y = r / d), u.push(m.x, m.y);
    (function() {
      for (r = 1; r <= b; r++)
        for (n = 1; n <= d; n++) {
          var a = (d + 1) * r + (n - 1),
            c = (d + 1) * r + n,
            e = (d + 1) * (r - 1) + n;
          w.push((d + 1) * (r - 1) + (n - 1), a, e);
          w.push(a, c, e);
        }
    })();
    this.setIndex(w);
    this.addAttribute("position", new C(l, 3));
    this.addAttribute("normal", new C(t, 3));
    this.addAttribute("uv", new C(u, 2));
  }
  function Qc(a, b, c, d, e, f, g) {
    I.call(this);
    this.type = "TorusKnotGeometry";
    this.parameters = {
      radius: a,
      tube: b,
      tubularSegments: c,
      radialSegments: d,
      p: e,
      q: f
    };
    void 0 !== g &&
      console.warn(
        "THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."
      );
    this.fromBufferGeometry(new $b(a, b, c, d, e, f));
    this.mergeVertices();
  }
  function $b(a, b, c, d, e, f) {
    function g(a, b, c, d, e) {
      var f = Math.sin(a);
      b = (c / b) * a;
      c = Math.cos(b);
      e.x = d * (2 + c) * 0.5 * Math.cos(a);
      e.y = d * (2 + c) * f * 0.5;
      e.z = d * Math.sin(b) * 0.5;
    }
    E.call(this);
    this.type = "TorusKnotBufferGeometry";
    this.parameters = {
      radius: a,
      tube: b,
      tubularSegments: c,
      radialSegments: d,
      p: e,
      q: f
    };
    a = a || 1;
    b = b || 0.4;
    c = Math.floor(c) || 64;
    d = Math.floor(d) || 8;
    e = e || 2;
    f = f || 3;
    var h = [],
      k = [],
      m = [],
      q = [],
      n,
      r = new p(),
      l = new p(),
      t = new p(),
      u = new p(),
      w = new p(),
      A = new p(),
      v = new p();
    for (n = 0; n <= c; ++n) {
      var H = (n / c) * e * Math.PI * 2;
      g(H, e, f, a, t);
      g(H + 0.01, e, f, a, u);
      A.subVectors(u, t);
      v.addVectors(u, t);
      w.crossVectors(A, v);
      v.crossVectors(w, A);
      w.normalize();
      v.normalize();
      for (H = 0; H <= d; ++H) {
        var y = (H / d) * Math.PI * 2,
          N = -b * Math.cos(y);
        y = b * Math.sin(y);
        r.x = t.x + (N * v.x + y * w.x);
        r.y = t.y + (N * v.y + y * w.y);
        r.z = t.z + (N * v.z + y * w.z);
        k.push(r.x, r.y, r.z);
        l.subVectors(r, t).normalize();
        m.push(l.x, l.y, l.z);
        q.push(n / c);
        q.push(H / d);
      }
    }
    for (H = 1; H <= c; H++)
      for (n = 1; n <= d; n++)
        (a = (d + 1) * H + (n - 1)),
          (b = (d + 1) * H + n),
          (e = (d + 1) * (H - 1) + n),
          h.push((d + 1) * (H - 1) + (n - 1), a, e),
          h.push(a, b, e);
    this.setIndex(h);
    this.addAttribute("position", new C(k, 3));
    this.addAttribute("normal", new C(m, 3));
    this.addAttribute("uv", new C(q, 2));
  }
  function Rc(a, b, c, d, e) {
    I.call(this);
    this.type = "TorusGeometry";
    this.parameters = {
      radius: a,
      tube: b,
      radialSegments: c,
      tubularSegments: d,
      arc: e
    };
    this.fromBufferGeometry(new ac(a, b, c, d, e));
    this.mergeVertices();
  }
  function ac(a, b, c, d, e) {
    E.call(this);
    this.type = "TorusBufferGeometry";
    this.parameters = {
      radius: a,
      tube: b,
      radialSegments: c,
      tubularSegments: d,
      arc: e
    };
    a = a || 1;
    b = b || 0.4;
    c = Math.floor(c) || 8;
    d = Math.floor(d) || 6;
    e = e || 2 * Math.PI;
    var f = [],
      g = [],
      h = [],
      k = [],
      m = new p(),
      q = new p(),
      n = new p(),
      r,
      l;
    for (r = 0; r <= c; r++)
      for (l = 0; l <= d; l++) {
        var t = (l / d) * e,
          u = (r / c) * Math.PI * 2;
        q.x = (a + b * Math.cos(u)) * Math.cos(t);
        q.y = (a + b * Math.cos(u)) * Math.sin(t);
        q.z = b * Math.sin(u);
        g.push(q.x, q.y, q.z);
        m.x = a * Math.cos(t);
        m.y = a * Math.sin(t);
        n.subVectors(q, m).normalize();
        h.push(n.x, n.y, n.z);
        k.push(l / d);
        k.push(r / c);
      }
    for (r = 1; r <= c; r++)
      for (l = 1; l <= d; l++)
        (a = (d + 1) * (r - 1) + l - 1),
          (b = (d + 1) * (r - 1) + l),
          (e = (d + 1) * r + l),
          f.push((d + 1) * r + l - 1, a, e),
          f.push(a, b, e);
    this.setIndex(f);
    this.addAttribute("position", new C(g, 3));
    this.addAttribute("normal", new C(h, 3));
    this.addAttribute("uv", new C(k, 2));
  }
  function jf(a, b, c, d, e) {
    for (var f, g = 0, h = b, k = c - d; h < c; h += d)
      (g += (a[k] - a[h]) * (a[h + 1] + a[k + 1])), (k = h);
    if (e === 0 < g) for (e = b; e < c; e += d) f = kf(e, a[e], a[e + 1], f);
    else for (e = c - d; e >= b; e -= d) f = kf(e, a[e], a[e + 1], f);
    f && ub(f, f.next) && (Sc(f), (f = f.next));
    return f;
  }
  function Tc(a, b) {
    if (!a) return a;
    b || (b = a);
    do {
      var c = !1;
      if (a.steiner || (!ub(a, a.next) && 0 !== na(a.prev, a, a.next)))
        a = a.next;
      else {
        Sc(a);
        a = b = a.prev;
        if (a === a.next) break;
        c = !0;
      }
    } while (c || a !== b);
    return b;
  }
  function Uc(a, b, c, d, e, f, g) {
    if (a) {
      if (!g && f) {
        var h = a,
          k = h;
        do
          null === k.z && (k.z = ee(k.x, k.y, d, e, f)),
            (k.prevZ = k.prev),
            (k = k.nextZ = k.next);
        while (k !== h);
        k.prevZ.nextZ = null;
        k.prevZ = null;
        h = k;
        var m,
          q,
          n,
          r,
          l = 1;
        do {
          k = h;
          var t = (h = null);
          for (q = 0; k; ) {
            q++;
            var u = k;
            for (m = n = 0; m < l && (n++, (u = u.nextZ), u); m++);
            for (r = l; 0 < n || (0 < r && u); )
              0 !== n && (0 === r || !u || k.z <= u.z)
                ? ((m = k), (k = k.nextZ), n--)
                : ((m = u), (u = u.nextZ), r--),
                t ? (t.nextZ = m) : (h = m),
                (m.prevZ = t),
                (t = m);
            k = u;
          }
          t.nextZ = null;
          l *= 2;
        } while (1 < q);
      }
      for (h = a; a.prev !== a.next; ) {
        k = a.prev;
        u = a.next;
        if (f)
          a: {
            t = a;
            r = d;
            var p = e,
              A = f;
            q = t.prev;
            n = t;
            l = t.next;
            if (0 <= na(q, n, l)) t = !1;
            else {
              var v =
                  q.x > n.x ? (q.x > l.x ? q.x : l.x) : n.x > l.x ? n.x : l.x,
                H = q.y > n.y ? (q.y > l.y ? q.y : l.y) : n.y > l.y ? n.y : l.y;
              m = ee(
                q.x < n.x ? (q.x < l.x ? q.x : l.x) : n.x < l.x ? n.x : l.x,
                q.y < n.y ? (q.y < l.y ? q.y : l.y) : n.y < l.y ? n.y : l.y,
                r,
                p,
                A
              );
              r = ee(v, H, r, p, A);
              for (p = t.nextZ; p && p.z <= r; ) {
                if (
                  p !== t.prev &&
                  p !== t.next &&
                  zd(q.x, q.y, n.x, n.y, l.x, l.y, p.x, p.y) &&
                  0 <= na(p.prev, p, p.next)
                ) {
                  t = !1;
                  break a;
                }
                p = p.nextZ;
              }
              for (p = t.prevZ; p && p.z >= m; ) {
                if (
                  p !== t.prev &&
                  p !== t.next &&
                  zd(q.x, q.y, n.x, n.y, l.x, l.y, p.x, p.y) &&
                  0 <= na(p.prev, p, p.next)
                ) {
                  t = !1;
                  break a;
                }
                p = p.prevZ;
              }
              t = !0;
            }
          }
        else
          a: if (
            ((t = a), (q = t.prev), (n = t), (l = t.next), 0 <= na(q, n, l))
          )
            t = !1;
          else {
            for (m = t.next.next; m !== t.prev; ) {
              if (
                zd(q.x, q.y, n.x, n.y, l.x, l.y, m.x, m.y) &&
                0 <= na(m.prev, m, m.next)
              ) {
                t = !1;
                break a;
              }
              m = m.next;
            }
            t = !0;
          }
        if (t)
          b.push(k.i / c),
            b.push(a.i / c),
            b.push(u.i / c),
            Sc(a),
            (h = a = u.next);
        else if (((a = u), a === h)) {
          if (!g) Uc(Tc(a), b, c, d, e, f, 1);
          else if (1 === g) {
            g = b;
            h = c;
            k = a;
            do
              (u = k.prev),
                (t = k.next.next),
                !ub(u, t) &&
                  lf(u, k, k.next, t) &&
                  Vc(u, t) &&
                  Vc(t, u) &&
                  (g.push(u.i / h),
                  g.push(k.i / h),
                  g.push(t.i / h),
                  Sc(k),
                  Sc(k.next),
                  (k = a = t)),
                (k = k.next);
            while (k !== a);
            a = k;
            Uc(a, b, c, d, e, f, 2);
          } else if (2 === g)
            a: {
              g = a;
              do {
                for (h = g.next.next; h !== g.prev; ) {
                  if ((k = g.i !== h.i)) {
                    k = g;
                    u = h;
                    if ((t = k.next.i !== u.i && k.prev.i !== u.i)) {
                      b: {
                        t = k;
                        do {
                          if (
                            t.i !== k.i &&
                            t.next.i !== k.i &&
                            t.i !== u.i &&
                            t.next.i !== u.i &&
                            lf(t, t.next, k, u)
                          ) {
                            t = !0;
                            break b;
                          }
                          t = t.next;
                        } while (t !== k);
                        t = !1;
                      }
                      t = !t;
                    }
                    if ((t = t && Vc(k, u) && Vc(u, k))) {
                      t = k;
                      q = !1;
                      n = (k.x + u.x) / 2;
                      u = (k.y + u.y) / 2;
                      do
                        t.y > u !== t.next.y > u &&
                          t.next.y !== t.y &&
                          n <
                            ((t.next.x - t.x) * (u - t.y)) / (t.next.y - t.y) +
                              t.x &&
                          (q = !q),
                          (t = t.next);
                      while (t !== k);
                      t = q;
                    }
                    k = t;
                  }
                  if (k) {
                    a = mf(g, h);
                    g = Tc(g, g.next);
                    a = Tc(a, a.next);
                    Uc(g, b, c, d, e, f);
                    Uc(a, b, c, d, e, f);
                    break a;
                  }
                  h = h.next;
                }
                g = g.next;
              } while (g !== a);
            }
          break;
        }
      }
    }
  }
  function Ug(a, b) {
    return a.x - b.x;
  }
  function Vg(a, b) {
    var c = b,
      d = a.x,
      e = a.y,
      f = -Infinity;
    do {
      if (e <= c.y && e >= c.next.y && c.next.y !== c.y) {
        var g = c.x + ((e - c.y) * (c.next.x - c.x)) / (c.next.y - c.y);
        if (g <= d && g > f) {
          f = g;
          if (g === d) {
            if (e === c.y) return c;
            if (e === c.next.y) return c.next;
          }
          var h = c.x < c.next.x ? c : c.next;
        }
      }
      c = c.next;
    } while (c !== b);
    if (!h) return null;
    if (d === f) return h.prev;
    b = h;
    g = h.x;
    var k = h.y,
      m = Infinity;
    for (c = h.next; c !== b; ) {
      if (
        d >= c.x &&
        c.x >= g &&
        d !== c.x &&
        zd(e < k ? d : f, e, g, k, e < k ? f : d, e, c.x, c.y)
      ) {
        var q = Math.abs(e - c.y) / (d - c.x);
        (q < m || (q === m && c.x > h.x)) && Vc(c, a) && ((h = c), (m = q));
      }
      c = c.next;
    }
    return h;
  }
  function ee(a, b, c, d, e) {
    a = 32767 * (a - c) * e;
    b = 32767 * (b - d) * e;
    a = (a | (a << 8)) & 16711935;
    a = (a | (a << 4)) & 252645135;
    a = (a | (a << 2)) & 858993459;
    b = (b | (b << 8)) & 16711935;
    b = (b | (b << 4)) & 252645135;
    b = (b | (b << 2)) & 858993459;
    return ((a | (a << 1)) & 1431655765) | (((b | (b << 1)) & 1431655765) << 1);
  }
  function Wg(a) {
    var b = a,
      c = a;
    do b.x < c.x && (c = b), (b = b.next);
    while (b !== a);
    return c;
  }
  function zd(a, b, c, d, e, f, g, h) {
    return (
      0 <= (e - g) * (b - h) - (a - g) * (f - h) &&
      0 <= (a - g) * (d - h) - (c - g) * (b - h) &&
      0 <= (c - g) * (f - h) - (e - g) * (d - h)
    );
  }
  function na(a, b, c) {
    return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y);
  }
  function ub(a, b) {
    return a.x === b.x && a.y === b.y;
  }
  function lf(a, b, c, d) {
    return (ub(a, b) && ub(c, d)) || (ub(a, d) && ub(c, b))
      ? !0
      : 0 < na(a, b, c) !== 0 < na(a, b, d) &&
          0 < na(c, d, a) !== 0 < na(c, d, b);
  }
  function Vc(a, b) {
    return 0 > na(a.prev, a, a.next)
      ? 0 <= na(a, b, a.next) && 0 <= na(a, a.prev, b)
      : 0 > na(a, b, a.prev) || 0 > na(a, a.next, b);
  }
  function mf(a, b) {
    var c = new fe(a.i, a.x, a.y),
      d = new fe(b.i, b.x, b.y),
      e = a.next,
      f = b.prev;
    a.next = b;
    b.prev = a;
    c.next = e;
    e.prev = c;
    d.next = c;
    c.prev = d;
    f.next = d;
    d.prev = f;
    return d;
  }
  function kf(a, b, c, d) {
    a = new fe(a, b, c);
    d
      ? ((a.next = d.next), (a.prev = d), (d.next.prev = a), (d.next = a))
      : ((a.prev = a), (a.next = a));
    return a;
  }
  function Sc(a) {
    a.next.prev = a.prev;
    a.prev.next = a.next;
    a.prevZ && (a.prevZ.nextZ = a.nextZ);
    a.nextZ && (a.nextZ.prevZ = a.prevZ);
  }
  function fe(a, b, c) {
    this.i = a;
    this.x = b;
    this.y = c;
    this.nextZ = this.prevZ = this.z = this.next = this.prev = null;
    this.steiner = !1;
  }
  function nf(a) {
    var b = a.length;
    2 < b && a[b - 1].equals(a[0]) && a.pop();
  }
  function of(a, b) {
    for (var c = 0; c < b.length; c++) a.push(b[c].x), a.push(b[c].y);
  }
  function vb(a, b) {
    I.call(this);
    this.type = "ExtrudeGeometry";
    this.parameters = { shapes: a, options: b };
    this.fromBufferGeometry(new Sa(a, b));
    this.mergeVertices();
  }
  function Sa(a, b) {
    function c(a) {
      function c(a, b, c) {
        b || console.error("THREE.ExtrudeGeometry: vec does not exist");
        return b
          .clone()
          .multiplyScalar(c)
          .add(a);
      }
      function g(a, b, c) {
        var d = a.x - b.x;
        var e = a.y - b.y;
        var f = c.x - a.x;
        var g = c.y - a.y,
          h = d * d + e * e;
        if (Math.abs(d * g - e * f) > Number.EPSILON) {
          var k = Math.sqrt(h),
            m = Math.sqrt(f * f + g * g);
          h = b.x - e / k;
          b = b.y + d / k;
          g = ((c.x - g / m - h) * g - (c.y + f / m - b) * f) / (d * g - e * f);
          f = h + d * g - a.x;
          d = b + e * g - a.y;
          e = f * f + d * d;
          if (2 >= e) return new z(f, d);
          e = Math.sqrt(e / 2);
        } else (a = !1), d > Number.EPSILON ? f > Number.EPSILON && (a = !0) : d < -Number.EPSILON ? f < -Number.EPSILON && (a = !0) : Math.sign(e) === Math.sign(g) && (a = !0), a ? ((f = -e), (e = Math.sqrt(h))) : ((f = d), (d = e), (e = Math.sqrt(h / 2)));
        return new z(f / e, d / e);
      }
      function h(a, b) {
        for (M = a.length; 0 <= --M; ) {
          var c = M;
          var f = M - 1;
          0 > f && (f = a.length - 1);
          var g,
            h = v + 2 * B;
          for (g = 0; g < h; g++) {
            var k = W * g,
              m = W * (g + 1),
              q = b + f + k,
              n = b + f + m;
            m = b + c + m;
            t(b + c + k);
            t(q);
            t(m);
            t(q);
            t(n);
            t(m);
            k = e.length / 3;
            k = D.generateSideWallUV(d, e, k - 6, k - 3, k - 2, k - 1);
            u(k[0]);
            u(k[1]);
            u(k[3]);
            u(k[1]);
            u(k[2]);
            u(k[3]);
          }
        }
      }
      function k(a, b, c) {
        w.push(a);
        w.push(b);
        w.push(c);
      }
      function l(a, b, c) {
        t(a);
        t(b);
        t(c);
        a = e.length / 3;
        a = D.generateTopUV(d, e, a - 3, a - 2, a - 1);
        u(a[0]);
        u(a[1]);
        u(a[2]);
      }
      function t(a) {
        e.push(w[3 * a]);
        e.push(w[3 * a + 1]);
        e.push(w[3 * a + 2]);
      }
      function u(a) {
        f.push(a.x);
        f.push(a.y);
      }
      var w = [],
        A = void 0 !== b.curveSegments ? b.curveSegments : 12,
        v = void 0 !== b.steps ? b.steps : 1,
        H = void 0 !== b.depth ? b.depth : 100,
        y = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0,
        N = void 0 !== b.bevelThickness ? b.bevelThickness : 6,
        X = void 0 !== b.bevelSize ? b.bevelSize : N - 2,
        B = void 0 !== b.bevelSegments ? b.bevelSegments : 3,
        C = b.extrudePath,
        D = void 0 !== b.UVGenerator ? b.UVGenerator : Xg;
      void 0 !== b.amount &&
        (console.warn(
          "THREE.ExtrudeBufferGeometry: amount has been renamed to depth."
        ),
        (H = b.amount));
      var E = !1;
      if (C) {
        var Y = C.getSpacedPoints(v);
        E = !0;
        y = !1;
        var G = C.computeFrenetFrames(v, !1);
        var J = new p();
        var Q = new p();
        var I = new p();
      }
      y || (X = N = B = 0);
      var P;
      A = a.extractPoints(A);
      a = A.shape;
      var L = A.holes;
      if (!Za.isClockWise(a)) {
        a = a.reverse();
        var F = 0;
        for (P = L.length; F < P; F++) {
          var K = L[F];
          Za.isClockWise(K) && (L[F] = K.reverse());
        }
      }
      var R = Za.triangulateShape(a, L),
        T = a;
      F = 0;
      for (P = L.length; F < P; F++) (K = L[F]), (a = a.concat(K));
      var S,
        W = a.length,
        V,
        Z = R.length;
      A = [];
      var M = 0;
      var U = T.length;
      var fa = U - 1;
      for (S = M + 1; M < U; M++, fa++, S++)
        fa === U && (fa = 0), S === U && (S = 0), (A[M] = g(T[M], T[fa], T[S]));
      C = [];
      var ea = A.concat();
      F = 0;
      for (P = L.length; F < P; F++) {
        K = L[F];
        var ca = [];
        M = 0;
        U = K.length;
        fa = U - 1;
        for (S = M + 1; M < U; M++, fa++, S++)
          fa === U && (fa = 0),
            S === U && (S = 0),
            (ca[M] = g(K[M], K[fa], K[S]));
        C.push(ca);
        ea = ea.concat(ca);
      }
      for (fa = 0; fa < B; fa++) {
        U = fa / B;
        var da = N * Math.cos((U * Math.PI) / 2);
        S = X * Math.sin((U * Math.PI) / 2);
        M = 0;
        for (U = T.length; M < U; M++) {
          var aa = c(T[M], A[M], S);
          k(aa.x, aa.y, -da);
        }
        F = 0;
        for (P = L.length; F < P; F++)
          for (K = L[F], ca = C[F], M = 0, U = K.length; M < U; M++)
            (aa = c(K[M], ca[M], S)), k(aa.x, aa.y, -da);
      }
      S = X;
      for (M = 0; M < W; M++)
        (aa = y ? c(a[M], ea[M], S) : a[M]),
          E
            ? (Q.copy(G.normals[0]).multiplyScalar(aa.x),
              J.copy(G.binormals[0]).multiplyScalar(aa.y),
              I.copy(Y[0])
                .add(Q)
                .add(J),
              k(I.x, I.y, I.z))
            : k(aa.x, aa.y, 0);
      for (U = 1; U <= v; U++)
        for (M = 0; M < W; M++)
          (aa = y ? c(a[M], ea[M], S) : a[M]),
            E
              ? (Q.copy(G.normals[U]).multiplyScalar(aa.x),
                J.copy(G.binormals[U]).multiplyScalar(aa.y),
                I.copy(Y[U])
                  .add(Q)
                  .add(J),
                k(I.x, I.y, I.z))
              : k(aa.x, aa.y, (H / v) * U);
      for (fa = B - 1; 0 <= fa; fa--) {
        U = fa / B;
        da = N * Math.cos((U * Math.PI) / 2);
        S = X * Math.sin((U * Math.PI) / 2);
        M = 0;
        for (U = T.length; M < U; M++)
          (aa = c(T[M], A[M], S)), k(aa.x, aa.y, H + da);
        F = 0;
        for (P = L.length; F < P; F++)
          for (K = L[F], ca = C[F], M = 0, U = K.length; M < U; M++)
            (aa = c(K[M], ca[M], S)),
              E
                ? k(aa.x, aa.y + Y[v - 1].y, Y[v - 1].x + da)
                : k(aa.x, aa.y, H + da);
      }
      (function() {
        var a = e.length / 3;
        if (y) {
          var b = 0 * W;
          for (M = 0; M < Z; M++) (V = R[M]), l(V[2] + b, V[1] + b, V[0] + b);
          b = W * (v + 2 * B);
          for (M = 0; M < Z; M++) (V = R[M]), l(V[0] + b, V[1] + b, V[2] + b);
        } else {
          for (M = 0; M < Z; M++) (V = R[M]), l(V[2], V[1], V[0]);
          for (M = 0; M < Z; M++)
            (V = R[M]), l(V[0] + W * v, V[1] + W * v, V[2] + W * v);
        }
        d.addGroup(a, e.length / 3 - a, 0);
      })();
      (function() {
        var a = e.length / 3,
          b = 0;
        h(T, b);
        b += T.length;
        F = 0;
        for (P = L.length; F < P; F++) (K = L[F]), h(K, b), (b += K.length);
        d.addGroup(a, e.length / 3 - a, 1);
      })();
    }
    E.call(this);
    this.type = "ExtrudeBufferGeometry";
    this.parameters = { shapes: a, options: b };
    a = Array.isArray(a) ? a : [a];
    for (var d = this, e = [], f = [], g = 0, h = a.length; g < h; g++) c(a[g]);
    this.addAttribute("position", new C(e, 3));
    this.addAttribute("uv", new C(f, 2));
    this.computeVertexNormals();
  }
  function pf(a, b, c) {
    c.shapes = [];
    if (Array.isArray(a))
      for (var d = 0, e = a.length; d < e; d++) c.shapes.push(a[d].uuid);
    else c.shapes.push(a.uuid);
    void 0 !== b.extrudePath &&
      (c.options.extrudePath = b.extrudePath.toJSON());
    return c;
  }
  function Wc(a, b) {
    I.call(this);
    this.type = "TextGeometry";
    this.parameters = { text: a, parameters: b };
    this.fromBufferGeometry(new bc(a, b));
    this.mergeVertices();
  }
  function bc(a, b) {
    b = b || {};
    var c = b.font;
    if (!c || !c.isFont)
      return (
        console.error(
          "THREE.TextGeometry: font parameter is not an instance of THREE.Font."
        ),
        new I()
      );
    a = c.generateShapes(a, b.size);
    b.depth = void 0 !== b.height ? b.height : 50;
    void 0 === b.bevelThickness && (b.bevelThickness = 10);
    void 0 === b.bevelSize && (b.bevelSize = 8);
    void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
    Sa.call(this, a, b);
    this.type = "TextBufferGeometry";
  }
  function Xc(a, b, c, d, e, f, g) {
    I.call(this);
    this.type = "SphereGeometry";
    this.parameters = {
      radius: a,
      widthSegments: b,
      heightSegments: c,
      phiStart: d,
      phiLength: e,
      thetaStart: f,
      thetaLength: g
    };
    this.fromBufferGeometry(new wb(a, b, c, d, e, f, g));
    this.mergeVertices();
  }
  function wb(a, b, c, d, e, f, g) {
    E.call(this);
    this.type = "SphereBufferGeometry";
    this.parameters = {
      radius: a,
      widthSegments: b,
      heightSegments: c,
      phiStart: d,
      phiLength: e,
      thetaStart: f,
      thetaLength: g
    };
    a = a || 1;
    b = Math.max(3, Math.floor(b) || 8);
    c = Math.max(2, Math.floor(c) || 6);
    d = void 0 !== d ? d : 0;
    e = void 0 !== e ? e : 2 * Math.PI;
    f = void 0 !== f ? f : 0;
    g = void 0 !== g ? g : Math.PI;
    var h = f + g,
      k,
      m,
      q = 0,
      n = [],
      l = new p(),
      x = new p(),
      t = [],
      u = [],
      w = [],
      A = [];
    for (m = 0; m <= c; m++) {
      var v = [],
        H = m / c;
      for (k = 0; k <= b; k++) {
        var y = k / b;
        l.x = -a * Math.cos(d + y * e) * Math.sin(f + H * g);
        l.y = a * Math.cos(f + H * g);
        l.z = a * Math.sin(d + y * e) * Math.sin(f + H * g);
        u.push(l.x, l.y, l.z);
        x.set(l.x, l.y, l.z).normalize();
        w.push(x.x, x.y, x.z);
        A.push(y, 1 - H);
        v.push(q++);
      }
      n.push(v);
    }
    for (m = 0; m < c; m++)
      for (k = 0; k < b; k++)
        (a = n[m][k + 1]),
          (d = n[m][k]),
          (e = n[m + 1][k]),
          (g = n[m + 1][k + 1]),
          (0 !== m || 0 < f) && t.push(a, d, g),
          (m !== c - 1 || h < Math.PI) && t.push(d, e, g);
    this.setIndex(t);
    this.addAttribute("position", new C(u, 3));
    this.addAttribute("normal", new C(w, 3));
    this.addAttribute("uv", new C(A, 2));
  }
  function Yc(a, b, c, d, e, f) {
    I.call(this);
    this.type = "RingGeometry";
    this.parameters = {
      innerRadius: a,
      outerRadius: b,
      thetaSegments: c,
      phiSegments: d,
      thetaStart: e,
      thetaLength: f
    };
    this.fromBufferGeometry(new cc(a, b, c, d, e, f));
    this.mergeVertices();
  }
  function cc(a, b, c, d, e, f) {
    E.call(this);
    this.type = "RingBufferGeometry";
    this.parameters = {
      innerRadius: a,
      outerRadius: b,
      thetaSegments: c,
      phiSegments: d,
      thetaStart: e,
      thetaLength: f
    };
    a = a || 0.5;
    b = b || 1;
    e = void 0 !== e ? e : 0;
    f = void 0 !== f ? f : 2 * Math.PI;
    c = void 0 !== c ? Math.max(3, c) : 8;
    d = void 0 !== d ? Math.max(1, d) : 1;
    var g = [],
      h = [],
      k = [],
      m = [],
      q = a,
      n = (b - a) / d,
      l = new p(),
      x = new z(),
      t,
      u;
    for (t = 0; t <= d; t++) {
      for (u = 0; u <= c; u++)
        (a = e + (u / c) * f),
          (l.x = q * Math.cos(a)),
          (l.y = q * Math.sin(a)),
          h.push(l.x, l.y, l.z),
          k.push(0, 0, 1),
          (x.x = (l.x / b + 1) / 2),
          (x.y = (l.y / b + 1) / 2),
          m.push(x.x, x.y);
      q += n;
    }
    for (t = 0; t < d; t++)
      for (b = t * (c + 1), u = 0; u < c; u++)
        (a = u + b),
          (e = a + c + 1),
          (f = a + c + 2),
          (q = a + 1),
          g.push(a, e, q),
          g.push(e, f, q);
    this.setIndex(g);
    this.addAttribute("position", new C(h, 3));
    this.addAttribute("normal", new C(k, 3));
    this.addAttribute("uv", new C(m, 2));
  }
  function Zc(a, b, c, d) {
    I.call(this);
    this.type = "LatheGeometry";
    this.parameters = { points: a, segments: b, phiStart: c, phiLength: d };
    this.fromBufferGeometry(new dc(a, b, c, d));
    this.mergeVertices();
  }
  function dc(a, b, c, d) {
    E.call(this);
    this.type = "LatheBufferGeometry";
    this.parameters = { points: a, segments: b, phiStart: c, phiLength: d };
    b = Math.floor(b) || 12;
    c = c || 0;
    d = d || 2 * Math.PI;
    d = R.clamp(d, 0, 2 * Math.PI);
    var e = [],
      f = [],
      g = [],
      h = 1 / b,
      k = new p(),
      m = new z(),
      q;
    for (q = 0; q <= b; q++) {
      var n = c + q * h * d;
      var l = Math.sin(n),
        x = Math.cos(n);
      for (n = 0; n <= a.length - 1; n++)
        (k.x = a[n].x * l),
          (k.y = a[n].y),
          (k.z = a[n].x * x),
          f.push(k.x, k.y, k.z),
          (m.x = q / b),
          (m.y = n / (a.length - 1)),
          g.push(m.x, m.y);
    }
    for (q = 0; q < b; q++)
      for (n = 0; n < a.length - 1; n++)
        (c = n + q * a.length),
          (h = c + a.length),
          (k = c + a.length + 1),
          (m = c + 1),
          e.push(c, h, m),
          e.push(h, k, m);
    this.setIndex(e);
    this.addAttribute("position", new C(f, 3));
    this.addAttribute("uv", new C(g, 2));
    this.computeVertexNormals();
    if (d === 2 * Math.PI)
      for (
        d = this.attributes.normal.array,
          e = new p(),
          f = new p(),
          g = new p(),
          c = b * a.length * 3,
          n = q = 0;
        q < a.length;
        q++, n += 3
      )
        (e.x = d[n + 0]),
          (e.y = d[n + 1]),
          (e.z = d[n + 2]),
          (f.x = d[c + n + 0]),
          (f.y = d[c + n + 1]),
          (f.z = d[c + n + 2]),
          g.addVectors(e, f).normalize(),
          (d[n + 0] = d[c + n + 0] = g.x),
          (d[n + 1] = d[c + n + 1] = g.y),
          (d[n + 2] = d[c + n + 2] = g.z);
  }
  function xb(a, b) {
    I.call(this);
    this.type = "ShapeGeometry";
    "object" === typeof b &&
      (console.warn("THREE.ShapeGeometry: Options parameter has been removed."),
      (b = b.curveSegments));
    this.parameters = { shapes: a, curveSegments: b };
    this.fromBufferGeometry(new yb(a, b));
    this.mergeVertices();
  }
  function yb(a, b) {
    function c(a) {
      var c,
        h = e.length / 3;
      a = a.extractPoints(b);
      var m = a.shape,
        q = a.holes;
      if (!1 === Za.isClockWise(m))
        for (m = m.reverse(), a = 0, c = q.length; a < c; a++) {
          var l = q[a];
          !0 === Za.isClockWise(l) && (q[a] = l.reverse());
        }
      var p = Za.triangulateShape(m, q);
      a = 0;
      for (c = q.length; a < c; a++) (l = q[a]), (m = m.concat(l));
      a = 0;
      for (c = m.length; a < c; a++)
        (l = m[a]), e.push(l.x, l.y, 0), f.push(0, 0, 1), g.push(l.x, l.y);
      a = 0;
      for (c = p.length; a < c; a++)
        (m = p[a]), d.push(m[0] + h, m[1] + h, m[2] + h), (k += 3);
    }
    E.call(this);
    this.type = "ShapeBufferGeometry";
    this.parameters = { shapes: a, curveSegments: b };
    b = b || 12;
    var d = [],
      e = [],
      f = [],
      g = [],
      h = 0,
      k = 0;
    if (!1 === Array.isArray(a)) c(a);
    else
      for (var m = 0; m < a.length; m++)
        c(a[m]), this.addGroup(h, k, m), (h += k), (k = 0);
    this.setIndex(d);
    this.addAttribute("position", new C(e, 3));
    this.addAttribute("normal", new C(f, 3));
    this.addAttribute("uv", new C(g, 2));
  }
  function qf(a, b) {
    b.shapes = [];
    if (Array.isArray(a))
      for (var c = 0, d = a.length; c < d; c++) b.shapes.push(a[c].uuid);
    else b.shapes.push(a.uuid);
    return b;
  }
  function ec(a, b) {
    E.call(this);
    this.type = "EdgesGeometry";
    this.parameters = { thresholdAngle: b };
    var c = [];
    b = Math.cos(R.DEG2RAD * (void 0 !== b ? b : 1));
    var d = [0, 0],
      e = {},
      f = ["a", "b", "c"];
    if (a.isBufferGeometry) {
      var g = new I();
      g.fromBufferGeometry(a);
    } else g = a.clone();
    g.mergeVertices();
    g.computeFaceNormals();
    a = g.vertices;
    g = g.faces;
    for (var h = 0, k = g.length; h < k; h++)
      for (var m = g[h], q = 0; 3 > q; q++) {
        var n = m[f[q]];
        var l = m[f[(q + 1) % 3]];
        d[0] = Math.min(n, l);
        d[1] = Math.max(n, l);
        n = d[0] + "," + d[1];
        void 0 === e[n]
          ? (e[n] = { index1: d[0], index2: d[1], face1: h, face2: void 0 })
          : (e[n].face2 = h);
      }
    for (n in e)
      if (
        ((d = e[n]),
        void 0 === d.face2 || g[d.face1].normal.dot(g[d.face2].normal) <= b)
      )
        (f = a[d.index1]),
          c.push(f.x, f.y, f.z),
          (f = a[d.index2]),
          c.push(f.x, f.y, f.z);
    this.addAttribute("position", new C(c, 3));
  }
  function zb(a, b, c, d, e, f, g, h) {
    I.call(this);
    this.type = "CylinderGeometry";
    this.parameters = {
      radiusTop: a,
      radiusBottom: b,
      height: c,
      radialSegments: d,
      heightSegments: e,
      openEnded: f,
      thetaStart: g,
      thetaLength: h
    };
    this.fromBufferGeometry(new $a(a, b, c, d, e, f, g, h));
    this.mergeVertices();
  }
  function $a(a, b, c, d, e, f, g, h) {
    function k(c) {
      var e,
        f = new z(),
        k = new p(),
        r = 0,
        u = !0 === c ? a : b,
        v = !0 === c ? 1 : -1;
      var C = t;
      for (e = 1; e <= d; e++)
        n.push(0, w * v, 0), l.push(0, v, 0), x.push(0.5, 0.5), t++;
      var D = t;
      for (e = 0; e <= d; e++) {
        var E = (e / d) * h + g,
          F = Math.cos(E);
        E = Math.sin(E);
        k.x = u * E;
        k.y = w * v;
        k.z = u * F;
        n.push(k.x, k.y, k.z);
        l.push(0, v, 0);
        f.x = 0.5 * F + 0.5;
        f.y = 0.5 * E * v + 0.5;
        x.push(f.x, f.y);
        t++;
      }
      for (e = 0; e < d; e++)
        (f = C + e),
          (k = D + e),
          !0 === c ? q.push(k, k + 1, f) : q.push(k + 1, k, f),
          (r += 3);
      m.addGroup(A, r, !0 === c ? 1 : 2);
      A += r;
    }
    E.call(this);
    this.type = "CylinderBufferGeometry";
    this.parameters = {
      radiusTop: a,
      radiusBottom: b,
      height: c,
      radialSegments: d,
      heightSegments: e,
      openEnded: f,
      thetaStart: g,
      thetaLength: h
    };
    var m = this;
    a = void 0 !== a ? a : 1;
    b = void 0 !== b ? b : 1;
    c = c || 1;
    d = Math.floor(d) || 8;
    e = Math.floor(e) || 1;
    f = void 0 !== f ? f : !1;
    g = void 0 !== g ? g : 0;
    h = void 0 !== h ? h : 2 * Math.PI;
    var q = [],
      n = [],
      l = [],
      x = [],
      t = 0,
      u = [],
      w = c / 2,
      A = 0;
    (function() {
      var f,
        k,
        r = new p(),
        N = new p(),
        z = 0,
        B = (b - a) / c;
      for (k = 0; k <= e; k++) {
        var C = [],
          E = k / e,
          D = E * (b - a) + a;
        for (f = 0; f <= d; f++) {
          var F = f / d,
            G = F * h + g,
            J = Math.sin(G);
          G = Math.cos(G);
          N.x = D * J;
          N.y = -E * c + w;
          N.z = D * G;
          n.push(N.x, N.y, N.z);
          r.set(J, B, G).normalize();
          l.push(r.x, r.y, r.z);
          x.push(F, 1 - E);
          C.push(t++);
        }
        u.push(C);
      }
      for (f = 0; f < d; f++)
        for (k = 0; k < e; k++)
          (r = u[k + 1][f]),
            (N = u[k + 1][f + 1]),
            (B = u[k][f + 1]),
            q.push(u[k][f], r, B),
            q.push(r, N, B),
            (z += 6);
      m.addGroup(A, z, 0);
      A += z;
    })();
    !1 === f && (0 < a && k(!0), 0 < b && k(!1));
    this.setIndex(q);
    this.addAttribute("position", new C(n, 3));
    this.addAttribute("normal", new C(l, 3));
    this.addAttribute("uv", new C(x, 2));
  }
  function $c(a, b, c, d, e, f, g) {
    zb.call(this, 0, a, b, c, d, e, f, g);
    this.type = "ConeGeometry";
    this.parameters = {
      radius: a,
      height: b,
      radialSegments: c,
      heightSegments: d,
      openEnded: e,
      thetaStart: f,
      thetaLength: g
    };
  }
  function ad(a, b, c, d, e, f, g) {
    $a.call(this, 0, a, b, c, d, e, f, g);
    this.type = "ConeBufferGeometry";
    this.parameters = {
      radius: a,
      height: b,
      radialSegments: c,
      heightSegments: d,
      openEnded: e,
      thetaStart: f,
      thetaLength: g
    };
  }
  function bd(a, b, c, d) {
    I.call(this);
    this.type = "CircleGeometry";
    this.parameters = { radius: a, segments: b, thetaStart: c, thetaLength: d };
    this.fromBufferGeometry(new fc(a, b, c, d));
    this.mergeVertices();
  }
  function fc(a, b, c, d) {
    E.call(this);
    this.type = "CircleBufferGeometry";
    this.parameters = { radius: a, segments: b, thetaStart: c, thetaLength: d };
    a = a || 1;
    b = void 0 !== b ? Math.max(3, b) : 8;
    c = void 0 !== c ? c : 0;
    d = void 0 !== d ? d : 2 * Math.PI;
    var e = [],
      f = [],
      g = [],
      h = [],
      k,
      m = new p(),
      q = new z();
    f.push(0, 0, 0);
    g.push(0, 0, 1);
    h.push(0.5, 0.5);
    var n = 0;
    for (k = 3; n <= b; n++, k += 3) {
      var l = c + (n / b) * d;
      m.x = a * Math.cos(l);
      m.y = a * Math.sin(l);
      f.push(m.x, m.y, m.z);
      g.push(0, 0, 1);
      q.x = (f[k] / a + 1) / 2;
      q.y = (f[k + 1] / a + 1) / 2;
      h.push(q.x, q.y);
    }
    for (k = 1; k <= b; k++) e.push(k, k + 1, 0);
    this.setIndex(e);
    this.addAttribute("position", new C(f, 3));
    this.addAttribute("normal", new C(g, 3));
    this.addAttribute("uv", new C(h, 2));
  }
  function Ab(a) {
    L.call(this);
    this.type = "ShadowMaterial";
    this.color = new G(0);
    this.transparent = !0;
    this.setValues(a);
  }
  function gc(a) {
    ka.call(this, a);
    this.type = "RawShaderMaterial";
  }
  function Ta(a) {
    L.call(this);
    this.defines = { STANDARD: "" };
    this.type = "MeshStandardMaterial";
    this.color = new G(16777215);
    this.metalness = this.roughness = 0.5;
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new G(0);
    this.emissiveIntensity = 1;
    this.bumpMap = this.emissiveMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new z(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null;
    this.envMapIntensity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a);
  }
  function Bb(a) {
    Ta.call(this);
    this.defines = { PHYSICAL: "" };
    this.type = "MeshPhysicalMaterial";
    this.reflectivity = 0.5;
    this.clearCoatRoughness = this.clearCoat = 0;
    this.setValues(a);
  }
  function Ia(a) {
    L.call(this);
    this.type = "MeshPhongMaterial";
    this.color = new G(16777215);
    this.specular = new G(1118481);
    this.shininess = 30;
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new G(0);
    this.emissiveIntensity = 1;
    this.bumpMap = this.emissiveMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new z(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.envMap = this.alphaMap = this.specularMap = null;
    this.combine = 0;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a);
  }
  function Cb(a) {
    Ia.call(this);
    this.defines = { TOON: "" };
    this.type = "MeshToonMaterial";
    this.gradientMap = null;
    this.setValues(a);
  }
  function Db(a) {
    L.call(this);
    this.type = "MeshNormalMaterial";
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new z(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.morphNormals = this.morphTargets = this.skinning = this.lights = this.fog = !1;
    this.setValues(a);
  }
  function Eb(a) {
    L.call(this);
    this.type = "MeshLambertMaterial";
    this.color = new G(16777215);
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new G(0);
    this.emissiveIntensity = 1;
    this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null;
    this.combine = 0;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a);
  }
  function Fb(a) {
    L.call(this);
    this.defines = { MATCAP: "" };
    this.type = "MeshMatcapMaterial";
    this.color = new G(16777215);
    this.bumpMap = this.map = this.matcap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new z(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.alphaMap = null;
    this.lights = this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a);
    if (null === this.matcap) {
      a = document.createElement("canvas");
      a.width = 1;
      a.height = 1;
      var b = a.getContext("2d");
      b.fillStyle = "#fff";
      b.fillRect(0, 0, 1, 1);
      this.matcap = new THREE.CanvasTexture(a);
    }
  }
  function Gb(a) {
    T.call(this);
    this.type = "LineDashedMaterial";
    this.scale = 1;
    this.dashSize = 3;
    this.gapSize = 1;
    this.setValues(a);
  }
  function Ca(a, b, c, d) {
    this.parameterPositions = a;
    this._cachedIndex = 0;
    this.resultBuffer = void 0 !== d ? d : new b.constructor(c);
    this.sampleValues = b;
    this.valueSize = c;
  }
  function Ad(a, b, c, d) {
    Ca.call(this, a, b, c, d);
    this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0;
  }
  function cd(a, b, c, d) {
    Ca.call(this, a, b, c, d);
  }
  function Bd(a, b, c, d) {
    Ca.call(this, a, b, c, d);
  }
  function qa(a, b, c, d) {
    if (void 0 === a)
      throw Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === b || 0 === b.length)
      throw Error("THREE.KeyframeTrack: no keyframes in track named " + a);
    this.name = a;
    this.times = ra.convertArray(b, this.TimeBufferType);
    this.values = ra.convertArray(c, this.ValueBufferType);
    this.setInterpolation(d || this.DefaultInterpolation);
  }
  function Cd(a, b, c) {
    qa.call(this, a, b, c);
  }
  function Dd(a, b, c, d) {
    qa.call(this, a, b, c, d);
  }
  function hc(a, b, c, d) {
    qa.call(this, a, b, c, d);
  }
  function Ed(a, b, c, d) {
    Ca.call(this, a, b, c, d);
  }
  function dd(a, b, c, d) {
    qa.call(this, a, b, c, d);
  }
  function Fd(a, b, c, d) {
    qa.call(this, a, b, c, d);
  }
  function ic(a, b, c, d) {
    qa.call(this, a, b, c, d);
  }
  function za(a, b, c) {
    this.name = a;
    this.tracks = c;
    this.duration = void 0 !== b ? b : -1;
    this.uuid = R.generateUUID();
    0 > this.duration && this.resetDuration();
  }
  function Yg(a) {
    switch (a.toLowerCase()) {
      case "scalar":
      case "double":
      case "float":
      case "number":
      case "integer":
        return hc;
      case "vector":
      case "vector2":
      case "vector3":
      case "vector4":
        return ic;
      case "color":
        return Dd;
      case "quaternion":
        return dd;
      case "bool":
      case "boolean":
        return Cd;
      case "string":
        return Fd;
    }
    throw Error("THREE.KeyframeTrack: Unsupported typeName: " + a);
  }
  function Zg(a) {
    if (void 0 === a.type)
      throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
    var b = Yg(a.type);
    if (void 0 === a.times) {
      var c = [],
        d = [];
      ra.flattenJSON(a.keys, c, d, "value");
      a.times = c;
      a.values = d;
    }
    return void 0 !== b.parse
      ? b.parse(a)
      : new b(a.name, a.times, a.values, a.interpolation);
  }
  function ge(a, b, c) {
    var d = this,
      e = !1,
      f = 0,
      g = 0,
      h = void 0;
    this.onStart = void 0;
    this.onLoad = a;
    this.onProgress = b;
    this.onError = c;
    this.itemStart = function(a) {
      g++;
      if (!1 === e && void 0 !== d.onStart) d.onStart(a, f, g);
      e = !0;
    };
    this.itemEnd = function(a) {
      f++;
      if (void 0 !== d.onProgress) d.onProgress(a, f, g);
      if (f === g && ((e = !1), void 0 !== d.onLoad)) d.onLoad();
    };
    this.itemError = function(a) {
      if (void 0 !== d.onError) d.onError(a);
    };
    this.resolveURL = function(a) {
      return h ? h(a) : a;
    };
    this.setURLModifier = function(a) {
      h = a;
      return this;
    };
  }
  function Fa(a) {
    this.manager = void 0 !== a ? a : ta;
  }
  function rf(a) {
    this.manager = void 0 !== a ? a : ta;
  }
  function sf(a) {
    this.manager = void 0 !== a ? a : ta;
    this._parser = null;
  }
  function he(a) {
    this.manager = void 0 !== a ? a : ta;
    this._parser = null;
  }
  function ed(a) {
    this.manager = void 0 !== a ? a : ta;
  }
  function ie(a) {
    this.manager = void 0 !== a ? a : ta;
  }
  function Gd(a) {
    this.manager = void 0 !== a ? a : ta;
  }
  function Q() {
    this.type = "Curve";
    this.arcLengthDivisions = 200;
  }
  function wa(a, b, c, d, e, f, g, h) {
    Q.call(this);
    this.type = "EllipseCurve";
    this.aX = a || 0;
    this.aY = b || 0;
    this.xRadius = c || 1;
    this.yRadius = d || 1;
    this.aStartAngle = e || 0;
    this.aEndAngle = f || 2 * Math.PI;
    this.aClockwise = g || !1;
    this.aRotation = h || 0;
  }
  function jc(a, b, c, d, e, f) {
    wa.call(this, a, b, c, c, d, e, f);
    this.type = "ArcCurve";
  }
  function je() {
    var a = 0,
      b = 0,
      c = 0,
      d = 0;
    return {
      initCatmullRom: function(e, f, g, h, k) {
        e = k * (g - e);
        h = k * (h - f);
        a = f;
        b = e;
        c = -3 * f + 3 * g - 2 * e - h;
        d = 2 * f - 2 * g + e + h;
      },
      initNonuniformCatmullRom: function(e, f, g, h, k, m, q) {
        e = ((f - e) / k - (g - e) / (k + m) + (g - f) / m) * m;
        h = ((g - f) / m - (h - f) / (m + q) + (h - g) / q) * m;
        a = f;
        b = e;
        c = -3 * f + 3 * g - 2 * e - h;
        d = 2 * f - 2 * g + e + h;
      },
      calc: function(e) {
        var f = e * e;
        return a + b * e + c * f + d * f * e;
      }
    };
  }
  function ua(a, b, c, d) {
    Q.call(this);
    this.type = "CatmullRomCurve3";
    this.points = a || [];
    this.closed = b || !1;
    this.curveType = c || "centripetal";
    this.tension = d || 0.5;
  }
  function tf(a, b, c, d, e) {
    b = 0.5 * (d - b);
    e = 0.5 * (e - c);
    var f = a * a;
    return (
      (2 * c - 2 * d + b + e) * a * f +
      (-3 * c + 3 * d - 2 * b - e) * f +
      b * a +
      c
    );
  }
  function fd(a, b, c, d) {
    var e = 1 - a;
    return e * e * b + 2 * (1 - a) * a * c + a * a * d;
  }
  function gd(a, b, c, d, e) {
    var f = 1 - a,
      g = 1 - a;
    return (
      f * f * f * b +
      3 * g * g * a * c +
      3 * (1 - a) * a * a * d +
      a * a * a * e
    );
  }
  function Ja(a, b, c, d) {
    Q.call(this);
    this.type = "CubicBezierCurve";
    this.v0 = a || new z();
    this.v1 = b || new z();
    this.v2 = c || new z();
    this.v3 = d || new z();
  }
  function Ua(a, b, c, d) {
    Q.call(this);
    this.type = "CubicBezierCurve3";
    this.v0 = a || new p();
    this.v1 = b || new p();
    this.v2 = c || new p();
    this.v3 = d || new p();
  }
  function Aa(a, b) {
    Q.call(this);
    this.type = "LineCurve";
    this.v1 = a || new z();
    this.v2 = b || new z();
  }
  function Ka(a, b) {
    Q.call(this);
    this.type = "LineCurve3";
    this.v1 = a || new p();
    this.v2 = b || new p();
  }
  function La(a, b, c) {
    Q.call(this);
    this.type = "QuadraticBezierCurve";
    this.v0 = a || new z();
    this.v1 = b || new z();
    this.v2 = c || new z();
  }
  function Va(a, b, c) {
    Q.call(this);
    this.type = "QuadraticBezierCurve3";
    this.v0 = a || new p();
    this.v1 = b || new p();
    this.v2 = c || new p();
  }
  function Ma(a) {
    Q.call(this);
    this.type = "SplineCurve";
    this.points = a || [];
  }
  function ab() {
    Q.call(this);
    this.type = "CurvePath";
    this.curves = [];
    this.autoClose = !1;
  }
  function Na(a) {
    ab.call(this);
    this.type = "Path";
    this.currentPoint = new z();
    a && this.setFromPoints(a);
  }
  function ib(a) {
    Na.call(this, a);
    this.uuid = R.generateUUID();
    this.type = "Shape";
    this.holes = [];
  }
  function ca(a, b) {
    D.call(this);
    this.type = "Light";
    this.color = new G(a);
    this.intensity = void 0 !== b ? b : 1;
    this.receiveShadow = void 0;
  }
  function Hd(a, b, c) {
    ca.call(this, a, c);
    this.type = "HemisphereLight";
    this.castShadow = void 0;
    this.position.copy(D.DefaultUp);
    this.updateMatrix();
    this.groundColor = new G(b);
  }
  function Hb(a) {
    this.camera = a;
    this.bias = 0;
    this.radius = 1;
    this.mapSize = new z(512, 512);
    this.map = null;
    this.matrix = new P();
  }
  function Id() {
    Hb.call(this, new V(50, 1, 0.5, 500));
  }
  function Jd(a, b, c, d, e, f) {
    ca.call(this, a, b);
    this.type = "SpotLight";
    this.position.copy(D.DefaultUp);
    this.updateMatrix();
    this.target = new D();
    Object.defineProperty(this, "power", {
      get: function() {
        return this.intensity * Math.PI;
      },
      set: function(a) {
        this.intensity = a / Math.PI;
      }
    });
    this.distance = void 0 !== c ? c : 0;
    this.angle = void 0 !== d ? d : Math.PI / 3;
    this.penumbra = void 0 !== e ? e : 0;
    this.decay = void 0 !== f ? f : 1;
    this.shadow = new Id();
  }
  function Kd(a, b, c, d) {
    ca.call(this, a, b);
    this.type = "PointLight";
    Object.defineProperty(this, "power", {
      get: function() {
        return 4 * this.intensity * Math.PI;
      },
      set: function(a) {
        this.intensity = a / (4 * Math.PI);
      }
    });
    this.distance = void 0 !== c ? c : 0;
    this.decay = void 0 !== d ? d : 1;
    this.shadow = new Hb(new V(90, 1, 0.5, 500));
  }
  function hd(a, b, c, d, e, f) {
    Ra.call(this);
    this.type = "OrthographicCamera";
    this.zoom = 1;
    this.view = null;
    this.left = void 0 !== a ? a : -1;
    this.right = void 0 !== b ? b : 1;
    this.top = void 0 !== c ? c : 1;
    this.bottom = void 0 !== d ? d : -1;
    this.near = void 0 !== e ? e : 0.1;
    this.far = void 0 !== f ? f : 2e3;
    this.updateProjectionMatrix();
  }
  function Ld() {
    Hb.call(this, new hd(-5, 5, 5, -5, 0.5, 500));
  }
  function Md(a, b) {
    ca.call(this, a, b);
    this.type = "DirectionalLight";
    this.position.copy(D.DefaultUp);
    this.updateMatrix();
    this.target = new D();
    this.shadow = new Ld();
  }
  function Nd(a, b) {
    ca.call(this, a, b);
    this.type = "AmbientLight";
    this.castShadow = void 0;
  }
  function Od(a, b, c, d) {
    ca.call(this, a, b);
    this.type = "RectAreaLight";
    this.width = void 0 !== c ? c : 10;
    this.height = void 0 !== d ? d : 10;
  }
  function Pd(a) {
    this.manager = void 0 !== a ? a : ta;
    this.textures = {};
  }
  function ke(a) {
    this.manager = void 0 !== a ? a : ta;
  }
  function kc() {}
  function Qd(a) {
    "boolean" === typeof a &&
      (console.warn(
        "THREE.JSONLoader: showStatus parameter has been removed from constructor."
      ),
      (a = void 0));
    this.manager = void 0 !== a ? a : ta;
    this.withCredentials = !1;
  }
  function le(a) {
    this.manager = void 0 !== a ? a : ta;
    this.resourcePath = "";
  }
  function me(a) {
    "undefined" === typeof createImageBitmap &&
      console.warn(
        "THREE.ImageBitmapLoader: createImageBitmap() not supported."
      );
    "undefined" === typeof fetch &&
      console.warn("THREE.ImageBitmapLoader: fetch() not supported.");
    this.manager = void 0 !== a ? a : ta;
    this.options = void 0;
  }
  function ne() {
    this.type = "ShapePath";
    this.color = new G();
    this.subPaths = [];
    this.currentPath = null;
  }
  function oe(a) {
    this.type = "Font";
    this.data = a;
  }
  function uf(a) {
    this.manager = void 0 !== a ? a : ta;
  }
  function pe(a) {
    this.manager = void 0 !== a ? a : ta;
  }
  function vf() {
    this.type = "StereoCamera";
    this.aspect = 1;
    this.eyeSep = 0.064;
    this.cameraL = new V();
    this.cameraL.layers.enable(1);
    this.cameraL.matrixAutoUpdate = !1;
    this.cameraR = new V();
    this.cameraR.layers.enable(2);
    this.cameraR.matrixAutoUpdate = !1;
  }
  function id(a, b, c, d) {
    D.call(this);
    this.type = "CubeCamera";
    var e = new V(90, 1, a, b);
    e.up.set(0, -1, 0);
    e.lookAt(new p(1, 0, 0));
    this.add(e);
    var f = new V(90, 1, a, b);
    f.up.set(0, -1, 0);
    f.lookAt(new p(-1, 0, 0));
    this.add(f);
    var g = new V(90, 1, a, b);
    g.up.set(0, 0, 1);
    g.lookAt(new p(0, 1, 0));
    this.add(g);
    var h = new V(90, 1, a, b);
    h.up.set(0, 0, -1);
    h.lookAt(new p(0, -1, 0));
    this.add(h);
    var k = new V(90, 1, a, b);
    k.up.set(0, -1, 0);
    k.lookAt(new p(0, 0, 1));
    this.add(k);
    var m = new V(90, 1, a, b);
    m.up.set(0, -1, 0);
    m.lookAt(new p(0, 0, -1));
    this.add(m);
    d = d || { format: 1022, magFilter: 1006, minFilter: 1006 };
    this.renderTarget = new Jb(c, c, d);
    this.renderTarget.texture.name = "CubeCamera";
    this.update = function(a, b) {
      null === this.parent && this.updateMatrixWorld();
      var c = this.renderTarget,
        d = c.texture.generateMipmaps;
      c.texture.generateMipmaps = !1;
      c.activeCubeFace = 0;
      a.render(b, e, c);
      c.activeCubeFace = 1;
      a.render(b, f, c);
      c.activeCubeFace = 2;
      a.render(b, g, c);
      c.activeCubeFace = 3;
      a.render(b, h, c);
      c.activeCubeFace = 4;
      a.render(b, k, c);
      c.texture.generateMipmaps = d;
      c.activeCubeFace = 5;
      a.render(b, m, c);
      a.setRenderTarget(null);
    };
    this.clear = function(a, b, c, d) {
      for (var e = this.renderTarget, f = 0; 6 > f; f++)
        (e.activeCubeFace = f), a.setRenderTarget(e), a.clear(b, c, d);
      a.setRenderTarget(null);
    };
  }
  function qe(a) {
    this.autoStart = void 0 !== a ? a : !0;
    this.elapsedTime = this.oldTime = this.startTime = 0;
    this.running = !1;
  }
  function re() {
    D.call(this);
    this.type = "AudioListener";
    this.context = se.getContext();
    this.gain = this.context.createGain();
    this.gain.connect(this.context.destination);
    this.filter = null;
    this.timeDelta = 0;
  }
  function lc(a) {
    D.call(this);
    this.type = "Audio";
    this.listener = a;
    this.context = a.context;
    this.gain = this.context.createGain();
    this.gain.connect(a.getInput());
    this.autoplay = !1;
    this.buffer = null;
    this.loop = !1;
    this.offset = this.startTime = 0;
    this.playbackRate = 1;
    this.isPlaying = !1;
    this.hasPlaybackControl = !0;
    this.sourceType = "empty";
    this.filters = [];
  }
  function te(a) {
    lc.call(this, a);
    this.panner = this.context.createPanner();
    this.panner.connect(this.gain);
  }
  function ue(a, b) {
    this.analyser = a.context.createAnalyser();
    this.analyser.fftSize = void 0 !== b ? b : 2048;
    this.data = new Uint8Array(this.analyser.frequencyBinCount);
    a.getOutput().connect(this.analyser);
  }
  function ve(a, b, c) {
    this.binding = a;
    this.valueSize = c;
    a = Float64Array;
    switch (b) {
      case "quaternion":
        b = this._slerp;
        break;
      case "string":
      case "bool":
        a = Array;
        b = this._select;
        break;
      default:
        b = this._lerp;
    }
    this.buffer = new a(4 * c);
    this._mixBufferRegion = b;
    this.referenceCount = this.useCount = this.cumulativeWeight = 0;
  }
  function wf(a, b, c) {
    c = c || oa.parseTrackName(b);
    this._targetGroup = a;
    this._bindings = a.subscribe_(b, c);
  }
  function oa(a, b, c) {
    this.path = b;
    this.parsedPath = c || oa.parseTrackName(b);
    this.node = oa.findNode(a, this.parsedPath.nodeName) || a;
    this.rootNode = a;
  }
  function xf() {
    this.uuid = R.generateUUID();
    this._objects = Array.prototype.slice.call(arguments);
    this.nCachedObjects_ = 0;
    var a = {};
    this._indicesByUUID = a;
    for (var b = 0, c = arguments.length; b !== c; ++b)
      a[arguments[b].uuid] = b;
    this._paths = [];
    this._parsedPaths = [];
    this._bindings = [];
    this._bindingsIndicesByPath = {};
    var d = this;
    this.stats = {
      objects: {
        get total() {
          return d._objects.length;
        },
        get inUse() {
          return this.total - d.nCachedObjects_;
        }
      },
      get bindingsPerObject() {
        return d._bindings.length;
      }
    };
  }
  function yf(a, b, c) {
    this._mixer = a;
    this._clip = b;
    this._localRoot = c || null;
    a = b.tracks;
    b = a.length;
    c = Array(b);
    for (var d = { endingStart: 2400, endingEnd: 2400 }, e = 0; e !== b; ++e) {
      var f = a[e].createInterpolant(null);
      c[e] = f;
      f.settings = d;
    }
    this._interpolantSettings = d;
    this._interpolants = c;
    this._propertyBindings = Array(b);
    this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null;
    this.loop = 2201;
    this._loopCount = -1;
    this._startTime = null;
    this.time = 0;
    this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1;
    this.repetitions = Infinity;
    this.paused = !1;
    this.enabled = !0;
    this.clampWhenFinished = !1;
    this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0;
  }
  function we(a) {
    this._root = a;
    this._initMemoryManager();
    this.time = this._accuIndex = 0;
    this.timeScale = 1;
  }
  function Rd(a, b) {
    "string" === typeof a &&
      (console.warn("THREE.Uniform: Type parameter is no longer needed."),
      (a = b));
    this.value = a;
  }
  function xe() {
    E.call(this);
    this.type = "InstancedBufferGeometry";
    this.maxInstancedCount = void 0;
  }
  function ye(a, b, c) {
    sb.call(this, a, b);
    this.meshPerAttribute = c || 1;
  }
  function ze(a, b, c, d) {
    "number" === typeof c &&
      ((d = c),
      (c = !1),
      console.error(
        "THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."
      ));
    F.call(this, a, b, c);
    this.meshPerAttribute = d || 1;
  }
  function zf(a, b, c, d) {
    this.ray = new rb(a, b);
    this.near = c || 0;
    this.far = d || Infinity;
    this.params = {
      Mesh: {},
      Line: {},
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
    Object.defineProperties(this.params, {
      PointCloud: {
        get: function() {
          console.warn(
            "THREE.Raycaster: params.PointCloud has been renamed to params.Points."
          );
          return this.Points;
        }
      }
    });
  }
  function Af(a, b) {
    return a.distance - b.distance;
  }
  function Ae(a, b, c, d) {
    if (!1 !== a.visible && (a.raycast(b, c), !0 === d)) {
      a = a.children;
      d = 0;
      for (var e = a.length; d < e; d++) Ae(a[d], b, c, !0);
    }
  }
  function Bf(a, b, c) {
    this.radius = void 0 !== a ? a : 1;
    this.phi = void 0 !== b ? b : 0;
    this.theta = void 0 !== c ? c : 0;
    return this;
  }
  function Cf(a, b, c) {
    this.radius = void 0 !== a ? a : 1;
    this.theta = void 0 !== b ? b : 0;
    this.y = void 0 !== c ? c : 0;
    return this;
  }
  function Be(a, b) {
    this.min = void 0 !== a ? a : new z(Infinity, Infinity);
    this.max = void 0 !== b ? b : new z(-Infinity, -Infinity);
  }
  function Ce(a, b) {
    this.start = void 0 !== a ? a : new p();
    this.end = void 0 !== b ? b : new p();
  }
  function jd(a) {
    D.call(this);
    this.material = a;
    this.render = function() {};
  }
  function kd(a, b, c, d) {
    this.object = a;
    this.size = void 0 !== b ? b : 1;
    a = void 0 !== c ? c : 16711680;
    d = void 0 !== d ? d : 1;
    b = 0;
    (c = this.object.geometry) && c.isGeometry
      ? (b = 3 * c.faces.length)
      : c && c.isBufferGeometry && (b = c.attributes.normal.count);
    c = new E();
    b = new C(6 * b, 3);
    c.addAttribute("position", b);
    S.call(this, c, new T({ color: a, linewidth: d }));
    this.matrixAutoUpdate = !1;
    this.update();
  }
  function mc(a, b) {
    D.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.color = b;
    a = new E();
    b = [
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      -1,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      -1,
      1
    ];
    for (var c = 0, d = 1; 32 > c; c++, d++) {
      var e = (c / 32) * Math.PI * 2,
        f = (d / 32) * Math.PI * 2;
      b.push(Math.cos(e), Math.sin(e), 1, Math.cos(f), Math.sin(f), 1);
    }
    a.addAttribute("position", new C(b, 3));
    b = new T({ fog: !1 });
    this.cone = new S(a, b);
    this.add(this.cone);
    this.update();
  }
  function Df(a) {
    var b = [];
    a && a.isBone && b.push(a);
    for (var c = 0; c < a.children.length; c++)
      b.push.apply(b, Df(a.children[c]));
    return b;
  }
  function nc(a) {
    for (
      var b = Df(a),
        c = new E(),
        d = [],
        e = [],
        f = new G(0, 0, 1),
        g = new G(0, 1, 0),
        h = 0;
      h < b.length;
      h++
    ) {
      var k = b[h];
      k.parent &&
        k.parent.isBone &&
        (d.push(0, 0, 0),
        d.push(0, 0, 0),
        e.push(f.r, f.g, f.b),
        e.push(g.r, g.g, g.b));
    }
    c.addAttribute("position", new C(d, 3));
    c.addAttribute("color", new C(e, 3));
    d = new T({
      vertexColors: 2,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    });
    S.call(this, c, d);
    this.root = a;
    this.bones = b;
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
  }
  function oc(a, b, c) {
    this.light = a;
    this.light.updateMatrixWorld();
    this.color = c;
    a = new wb(b, 4, 2);
    b = new Ea({ wireframe: !0, fog: !1 });
    pa.call(this, a, b);
    this.matrix = this.light.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.update();
  }
  function pc(a, b) {
    D.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.color = b;
    a = new T({ fog: !1 });
    b = new E();
    b.addAttribute("position", new F(new Float32Array(15), 3));
    this.line = new ma(b, a);
    this.add(this.line);
    this.update();
  }
  function qc(a, b, c) {
    D.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.color = c;
    a = new tb(b);
    a.rotateY(0.5 * Math.PI);
    this.material = new Ea({ wireframe: !0, fog: !1 });
    void 0 === this.color && (this.material.vertexColors = 2);
    b = a.getAttribute("position");
    b = new Float32Array(3 * b.count);
    a.addAttribute("color", new F(b, 3));
    this.add(new pa(a, this.material));
    this.update();
  }
  function ld(a, b, c, d) {
    a = a || 10;
    b = b || 10;
    c = new G(void 0 !== c ? c : 4473924);
    d = new G(void 0 !== d ? d : 8947848);
    var e = b / 2,
      f = a / b,
      g = a / 2;
    a = [];
    for (var h = [], k = 0, m = 0, q = -g; k <= b; k++, q += f) {
      a.push(-g, 0, q, g, 0, q);
      a.push(q, 0, -g, q, 0, g);
      var n = k === e ? c : d;
      n.toArray(h, m);
      m += 3;
      n.toArray(h, m);
      m += 3;
      n.toArray(h, m);
      m += 3;
      n.toArray(h, m);
      m += 3;
    }
    b = new E();
    b.addAttribute("position", new C(a, 3));
    b.addAttribute("color", new C(h, 3));
    c = new T({ vertexColors: 2 });
    S.call(this, b, c);
  }
  function Sd(a, b, c, d, e, f) {
    a = a || 10;
    b = b || 16;
    c = c || 8;
    d = d || 64;
    e = new G(void 0 !== e ? e : 4473924);
    f = new G(void 0 !== f ? f : 8947848);
    var g = [],
      h = [],
      k;
    for (k = 0; k <= b; k++) {
      var m = (k / b) * 2 * Math.PI;
      var q = Math.sin(m) * a;
      m = Math.cos(m) * a;
      g.push(0, 0, 0);
      g.push(q, 0, m);
      var n = k & 1 ? e : f;
      h.push(n.r, n.g, n.b);
      h.push(n.r, n.g, n.b);
    }
    for (k = 0; k <= c; k++) {
      n = k & 1 ? e : f;
      var l = a - (a / c) * k;
      for (b = 0; b < d; b++)
        (m = (b / d) * 2 * Math.PI),
          (q = Math.sin(m) * l),
          (m = Math.cos(m) * l),
          g.push(q, 0, m),
          h.push(n.r, n.g, n.b),
          (m = ((b + 1) / d) * 2 * Math.PI),
          (q = Math.sin(m) * l),
          (m = Math.cos(m) * l),
          g.push(q, 0, m),
          h.push(n.r, n.g, n.b);
    }
    a = new E();
    a.addAttribute("position", new C(g, 3));
    a.addAttribute("color", new C(h, 3));
    g = new T({ vertexColors: 2 });
    S.call(this, a, g);
  }
  function md(a, b, c, d) {
    this.object = a;
    this.size = void 0 !== b ? b : 1;
    a = void 0 !== c ? c : 16776960;
    d = void 0 !== d ? d : 1;
    b = 0;
    (c = this.object.geometry) && c.isGeometry
      ? (b = c.faces.length)
      : console.warn(
          "THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead."
        );
    c = new E();
    b = new C(6 * b, 3);
    c.addAttribute("position", b);
    S.call(this, c, new T({ color: a, linewidth: d }));
    this.matrixAutoUpdate = !1;
    this.update();
  }
  function rc(a, b, c) {
    D.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.color = c;
    void 0 === b && (b = 1);
    a = new E();
    a.addAttribute(
      "position",
      new C([-b, b, 0, b, b, 0, b, -b, 0, -b, -b, 0, -b, b, 0], 3)
    );
    b = new T({ fog: !1 });
    this.lightPlane = new ma(a, b);
    this.add(this.lightPlane);
    a = new E();
    a.addAttribute("position", new C([0, 0, 0, 0, 0, 1], 3));
    this.targetLine = new ma(a, b);
    this.add(this.targetLine);
    this.update();
  }
  function nd(a) {
    function b(a, b, d) {
      c(a, d);
      c(b, d);
    }
    function c(a, b) {
      f.push(0, 0, 0);
      g.push(b.r, b.g, b.b);
      void 0 === h[a] && (h[a] = []);
      h[a].push(f.length / 3 - 1);
    }
    var d = new E(),
      e = new T({ color: 16777215, vertexColors: 1 }),
      f = [],
      g = [],
      h = {},
      k = new G(16755200),
      m = new G(16711680),
      q = new G(43775),
      l = new G(16777215),
      r = new G(3355443);
    b("n1", "n2", k);
    b("n2", "n4", k);
    b("n4", "n3", k);
    b("n3", "n1", k);
    b("f1", "f2", k);
    b("f2", "f4", k);
    b("f4", "f3", k);
    b("f3", "f1", k);
    b("n1", "f1", k);
    b("n2", "f2", k);
    b("n3", "f3", k);
    b("n4", "f4", k);
    b("p", "n1", m);
    b("p", "n2", m);
    b("p", "n3", m);
    b("p", "n4", m);
    b("u1", "u2", q);
    b("u2", "u3", q);
    b("u3", "u1", q);
    b("c", "t", l);
    b("p", "c", r);
    b("cn1", "cn2", r);
    b("cn3", "cn4", r);
    b("cf1", "cf2", r);
    b("cf3", "cf4", r);
    d.addAttribute("position", new C(f, 3));
    d.addAttribute("color", new C(g, 3));
    S.call(this, d, e);
    this.camera = a;
    this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.pointMap = h;
    this.update();
  }
  function bb(a, b) {
    this.object = a;
    void 0 === b && (b = 16776960);
    a = new Uint16Array([
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      0,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      4,
      0,
      4,
      1,
      5,
      2,
      6,
      3,
      7
    ]);
    var c = new Float32Array(24),
      d = new E();
    d.setIndex(new F(a, 1));
    d.addAttribute("position", new F(c, 3));
    S.call(this, d, new T({ color: b }));
    this.matrixAutoUpdate = !1;
    this.update();
  }
  function od(a, b) {
    this.type = "Box3Helper";
    this.box = a;
    a = void 0 !== b ? b : 16776960;
    b = new Uint16Array([
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      0,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      4,
      0,
      4,
      1,
      5,
      2,
      6,
      3,
      7
    ]);
    var c = new E();
    c.setIndex(new F(b, 1));
    c.addAttribute(
      "position",
      new C(
        [
          1,
          1,
          1,
          -1,
          1,
          1,
          -1,
          -1,
          1,
          1,
          -1,
          1,
          1,
          1,
          -1,
          -1,
          1,
          -1,
          -1,
          -1,
          -1,
          1,
          -1,
          -1
        ],
        3
      )
    );
    S.call(this, c, new T({ color: a }));
    this.geometry.computeBoundingSphere();
  }
  function pd(a, b, c) {
    this.type = "PlaneHelper";
    this.plane = a;
    this.size = void 0 === b ? 1 : b;
    a = void 0 !== c ? c : 16776960;
    b = new E();
    b.addAttribute(
      "position",
      new C(
        [
          1,
          -1,
          1,
          -1,
          1,
          1,
          -1,
          -1,
          1,
          1,
          1,
          1,
          -1,
          1,
          1,
          -1,
          -1,
          1,
          1,
          -1,
          1,
          1,
          1,
          1,
          0,
          0,
          1,
          0,
          0,
          0
        ],
        3
      )
    );
    b.computeBoundingSphere();
    ma.call(this, b, new T({ color: a }));
    b = new E();
    b.addAttribute(
      "position",
      new C([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)
    );
    b.computeBoundingSphere();
    this.add(
      new pa(
        b,
        new Ea({ color: a, opacity: 0.2, transparent: !0, depthWrite: !1 })
      )
    );
  }
  function cb(a, b, c, d, e, f) {
    D.call(this);
    void 0 === a && (a = new THREE.Vector3(0, 0, 1));
    void 0 === b && (b = new THREE.Vector3(0, 0, 0));
    void 0 === c && (c = 1);
    void 0 === d && (d = 16776960);
    void 0 === e && (e = 0.2 * c);
    void 0 === f && (f = 0.2 * e);
    void 0 === Td &&
      ((Td = new E()),
      Td.addAttribute("position", new C([0, 0, 0, 0, 1, 0], 3)),
      (De = new $a(0, 0.5, 1, 5, 1)),
      De.translate(0, -0.5, 0));
    this.position.copy(b);
    this.line = new ma(Td, new T({ color: d }));
    this.line.matrixAutoUpdate = !1;
    this.add(this.line);
    this.cone = new pa(De, new Ea({ color: d }));
    this.cone.matrixAutoUpdate = !1;
    this.add(this.cone);
    this.setDirection(a);
    this.setLength(c, e, f);
  }
  function qd(a) {
    a = a || 1;
    var b = [0, 0, 0, a, 0, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 0, a];
    a = new E();
    a.addAttribute("position", new C(b, 3));
    a.addAttribute(
      "color",
      new C([1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1], 3)
    );
    b = new T({ vertexColors: 2 });
    S.call(this, a, b);
  }
  function Ef(a) {
    console.warn(
      "THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."
    );
    ua.call(this, a);
    this.type = "catmullrom";
    this.closed = !0;
  }
  function Ff(a) {
    console.warn(
      "THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."
    );
    ua.call(this, a);
    this.type = "catmullrom";
  }
  function Ee(a) {
    console.warn(
      "THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."
    );
    ua.call(this, a);
    this.type = "catmullrom";
  }
  void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52));
  void 0 === Number.isInteger &&
    (Number.isInteger = function(a) {
      return "number" === typeof a && isFinite(a) && Math.floor(a) === a;
    });
  void 0 === Math.sign &&
    (Math.sign = function(a) {
      return 0 > a ? -1 : 0 < a ? 1 : +a;
    });
  !1 === "name" in Function.prototype &&
    Object.defineProperty(Function.prototype, "name", {
      get: function() {
        return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
      }
    });
  void 0 === Object.assign &&
    (function() {
      Object.assign = function(a) {
        if (void 0 === a || null === a)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var b = Object(a), c = 1; c < arguments.length; c++) {
          var d = arguments[c];
          if (void 0 !== d && null !== d)
            for (var e in d)
              Object.prototype.hasOwnProperty.call(d, e) && (b[e] = d[e]);
        }
        return b;
      };
    })();
  Object.assign(ia.prototype, {
    addEventListener: function(a, b) {
      void 0 === this._listeners && (this._listeners = {});
      var c = this._listeners;
      void 0 === c[a] && (c[a] = []);
      -1 === c[a].indexOf(b) && c[a].push(b);
    },
    hasEventListener: function(a, b) {
      if (void 0 === this._listeners) return !1;
      var c = this._listeners;
      return void 0 !== c[a] && -1 !== c[a].indexOf(b);
    },
    removeEventListener: function(a, b) {
      void 0 !== this._listeners &&
        ((a = this._listeners[a]),
        void 0 !== a && ((b = a.indexOf(b)), -1 !== b && a.splice(b, 1)));
    },
    dispatchEvent: function(a) {
      if (void 0 !== this._listeners) {
        var b = this._listeners[a.type];
        if (void 0 !== b) {
          a.target = this;
          b = b.slice(0);
          for (var c = 0, d = b.length; c < d; c++) b[c].call(this, a);
        }
      }
    }
  });
  var R = {
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
    generateUUID: (function() {
      for (var a = [], b = 0; 256 > b; b++)
        a[b] = (16 > b ? "0" : "") + b.toString(16);
      return function() {
        var b = (4294967295 * Math.random()) | 0,
          d = (4294967295 * Math.random()) | 0,
          e = (4294967295 * Math.random()) | 0,
          f = (4294967295 * Math.random()) | 0;
        return (
          a[b & 255] +
          a[(b >> 8) & 255] +
          a[(b >> 16) & 255] +
          a[(b >> 24) & 255] +
          "-" +
          a[d & 255] +
          a[(d >> 8) & 255] +
          "-" +
          a[((d >> 16) & 15) | 64] +
          a[(d >> 24) & 255] +
          "-" +
          a[(e & 63) | 128] +
          a[(e >> 8) & 255] +
          "-" +
          a[(e >> 16) & 255] +
          a[(e >> 24) & 255] +
          a[f & 255] +
          a[(f >> 8) & 255] +
          a[(f >> 16) & 255] +
          a[(f >> 24) & 255]
        ).toUpperCase();
      };
    })(),
    clamp: function(a, b, c) {
      return Math.max(b, Math.min(c, a));
    },
    euclideanModulo: function(a, b) {
      return ((a % b) + b) % b;
    },
    mapLinear: function(a, b, c, d, e) {
      return d + ((a - b) * (e - d)) / (c - b);
    },
    lerp: function(a, b, c) {
      return (1 - c) * a + c * b;
    },
    smoothstep: function(a, b, c) {
      if (a <= b) return 0;
      if (a >= c) return 1;
      a = (a - b) / (c - b);
      return a * a * (3 - 2 * a);
    },
    smootherstep: function(a, b, c) {
      if (a <= b) return 0;
      if (a >= c) return 1;
      a = (a - b) / (c - b);
      return a * a * a * (a * (6 * a - 15) + 10);
    },
    randInt: function(a, b) {
      return a + Math.floor(Math.random() * (b - a + 1));
    },
    randFloat: function(a, b) {
      return a + Math.random() * (b - a);
    },
    randFloatSpread: function(a) {
      return a * (0.5 - Math.random());
    },
    degToRad: function(a) {
      return a * R.DEG2RAD;
    },
    radToDeg: function(a) {
      return a * R.RAD2DEG;
    },
    isPowerOfTwo: function(a) {
      return 0 === (a & (a - 1)) && 0 !== a;
    },
    ceilPowerOfTwo: function(a) {
      return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2));
    },
    floorPowerOfTwo: function(a) {
      return Math.pow(2, Math.floor(Math.log(a) / Math.LN2));
    }
  };
  Object.defineProperties(z.prototype, {
    width: {
      get: function() {
        return this.x;
      },
      set: function(a) {
        this.x = a;
      }
    },
    height: {
      get: function() {
        return this.y;
      },
      set: function(a) {
        this.y = a;
      }
    }
  });
  Object.assign(z.prototype, {
    isVector2: !0,
    set: function(a, b) {
      this.x = a;
      this.y = b;
      return this;
    },
    setScalar: function(a) {
      this.y = this.x = a;
      return this;
    },
    setX: function(a) {
      this.x = a;
      return this;
    },
    setY: function(a) {
      this.y = a;
      return this;
    },
    setComponent: function(a, b) {
      switch (a) {
        case 0:
          this.x = b;
          break;
        case 1:
          this.y = b;
          break;
        default:
          throw Error("index is out of range: " + a);
      }
      return this;
    },
    getComponent: function(a) {
      switch (a) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw Error("index is out of range: " + a);
      }
    },
    clone: function() {
      return new this.constructor(this.x, this.y);
    },
    copy: function(a) {
      this.x = a.x;
      this.y = a.y;
      return this;
    },
    add: function(a, b) {
      if (void 0 !== b)
        return (
          console.warn(
            "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
          ),
          this.addVectors(a, b)
        );
      this.x += a.x;
      this.y += a.y;
      return this;
    },
    addScalar: function(a) {
      this.x += a;
      this.y += a;
      return this;
    },
    addVectors: function(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      return this;
    },
    addScaledVector: function(a, b) {
      this.x += a.x * b;
      this.y += a.y * b;
      return this;
    },
    sub: function(a, b) {
      if (void 0 !== b)
        return (
          console.warn(
            "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
          ),
          this.subVectors(a, b)
        );
      this.x -= a.x;
      this.y -= a.y;
      return this;
    },
    subScalar: function(a) {
      this.x -= a;
      this.y -= a;
      return this;
    },
    subVectors: function(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      return this;
    },
    multiply: function(a) {
      this.x *= a.x;
      this.y *= a.y;
      return this;
    },
    multiplyScalar: function(a) {
      this.x *= a;
      this.y *= a;
      return this;
    },
    divide: function(a) {
      this.x /= a.x;
      this.y /= a.y;
      return this;
    },
    divideScalar: function(a) {
      return this.multiplyScalar(1 / a);
    },
    applyMatrix3: function(a) {
      var b = this.x,
        c = this.y;
      a = a.elements;
      this.x = a[0] * b + a[3] * c + a[6];
      this.y = a[1] * b + a[4] * c + a[7];
      return this;
    },
    min: function(a) {
      this.x = Math.min(this.x, a.x);
      this.y = Math.min(this.y, a.y);
      return this;
    },
    max: function(a) {
      this.x = Math.max(this.x, a.x);
      this.y = Math.max(this.y, a.y);
      return this;
    },
    clamp: function(a, b) {
      this.x = Math.max(a.x, Math.min(b.x, this.x));
      this.y = Math.max(a.y, Math.min(b.y, this.y));
      return this;
    },
    clampScalar: (function() {
      var a = new z(),
        b = new z();
      return function(c, d) {
        a.set(c, c);
        b.set(d, d);
        return this.clamp(a, b);
      };
    })(),
    clampLength: function(a, b) {
      var c = this.length();
      return this.divideScalar(c || 1).multiplyScalar(
        Math.max(a, Math.min(b, c))
      );
    },
    floor: function() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    },
    ceil: function() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    },
    round: function() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    },
    roundToZero: function() {
      this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
      this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
      return this;
    },
    negate: function() {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    },
    dot: function(a) {
      return this.x * a.x + this.y * a.y;
    },
    cross: function(a) {
      return this.x * a.y - this.y * a.x;
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y;
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    manhattanLength: function() {
      return Math.abs(this.x) + Math.abs(this.y);
    },
    normalize: function() {
      return this.divideScalar(this.length() || 1);
    },
    angle: function() {
      var a = Math.atan2(this.y, this.x);
      0 > a && (a += 2 * Math.PI);
      return a;
    },
    distanceTo: function(a) {
      return Math.sqrt(this.distanceToSquared(a));
    },
    distanceToSquared: function(a) {
      var b = this.x - a.x;
      a = this.y - a.y;
      return b * b + a * a;
    },
    manhattanDistanceTo: function(a) {
      return Math.abs(this.x - a.x) + Math.abs(this.y - a.y);
    },
    setLength: function(a) {
      return this.normalize().multiplyScalar(a);
    },
    lerp: function(a, b) {
      this.x += (a.x - this.x) * b;
      this.y += (a.y - this.y) * b;
      return this;
    },
    lerpVectors: function(a, b, c) {
      return this.subVectors(b, a)
        .multiplyScalar(c)
        .add(a);
    },
    equals: function(a) {
      return a.x === this.x && a.y === this.y;
    },
    fromArray: function(a, b) {
      void 0 === b && (b = 0);
      this.x = a[b];
      this.y = a[b + 1];
      return this;
    },
    toArray: function(a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      a[b] = this.x;
      a[b + 1] = this.y;
      return a;
    },
    fromBufferAttribute: function(a, b, c) {
      void 0 !== c &&
        console.warn(
          "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
        );
      this.x = a.getX(b);
      this.y = a.getY(b);
      return this;
    },
    rotateAround: function(a, b) {
      var c = Math.cos(b);
      b = Math.sin(b);
      var d = this.x - a.x,
        e = this.y - a.y;
      this.x = d * c - e * b + a.x;
      this.y = d * b + e * c + a.y;
      return this;
    }
  });
  Object.assign(P.prototype, {
    isMatrix4: !0,
    set: function(a, b, c, d, e, f, g, h, k, m, q, l, r, p, t, u) {
      var n = this.elements;
      n[0] = a;
      n[4] = b;
      n[8] = c;
      n[12] = d;
      n[1] = e;
      n[5] = f;
      n[9] = g;
      n[13] = h;
      n[2] = k;
      n[6] = m;
      n[10] = q;
      n[14] = l;
      n[3] = r;
      n[7] = p;
      n[11] = t;
      n[15] = u;
      return this;
    },
    identity: function() {
      this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      return this;
    },
    clone: function() {
      return new P().fromArray(this.elements);
    },
    copy: function(a) {
      var b = this.elements;
      a = a.elements;
      b[0] = a[0];
      b[1] = a[1];
      b[2] = a[2];
      b[3] = a[3];
      b[4] = a[4];
      b[5] = a[5];
      b[6] = a[6];
      b[7] = a[7];
      b[8] = a[8];
      b[9] = a[9];
      b[10] = a[10];
      b[11] = a[11];
      b[12] = a[12];
      b[13] = a[13];
      b[14] = a[14];
      b[15] = a[15];
      return this;
    },
    copyPosition: function(a) {
      var b = this.elements;
      a = a.elements;
      b[12] = a[12];
      b[13] = a[13];
      b[14] = a[14];
      return this;
    },
    extractBasis: function(a, b, c) {
      a.setFromMatrixColumn(this, 0);
      b.setFromMatrixColumn(this, 1);
      c.setFromMatrixColumn(this, 2);
      return this;
    },
    makeBasis: function(a, b, c) {
      this.set(
        a.x,
        b.x,
        c.x,
        0,
        a.y,
        b.y,
        c.y,
        0,
        a.z,
        b.z,
        c.z,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    },
    extractRotation: (function() {
      var a = new p();
      return function(b) {
        var c = this.elements,
          d = b.elements,
          e = 1 / a.setFromMatrixColumn(b, 0).length(),
          f = 1 / a.setFromMatrixColumn(b, 1).length();
        b = 1 / a.setFromMatrixColumn(b, 2).length();
        c[0] = d[0] * e;
        c[1] = d[1] * e;
        c[2] = d[2] * e;
        c[3] = 0;
        c[4] = d[4] * f;
        c[5] = d[5] * f;
        c[6] = d[6] * f;
        c[7] = 0;
        c[8] = d[8] * b;
        c[9] = d[9] * b;
        c[10] = d[10] * b;
        c[11] = 0;
        c[12] = 0;
        c[13] = 0;
        c[14] = 0;
        c[15] = 1;
        return this;
      };
    })(),
    makeRotationFromEuler: function(a) {
      (a && a.isEuler) ||
        console.error(
          "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
        );
      var b = this.elements,
        c = a.x,
        d = a.y,
        e = a.z,
        f = Math.cos(c);
      c = Math.sin(c);
      var g = Math.cos(d);
      d = Math.sin(d);
      var h = Math.cos(e);
      e = Math.sin(e);
      if ("XYZ" === a.order) {
        a = f * h;
        var k = f * e,
          m = c * h,
          q = c * e;
        b[0] = g * h;
        b[4] = -g * e;
        b[8] = d;
        b[1] = k + m * d;
        b[5] = a - q * d;
        b[9] = -c * g;
        b[2] = q - a * d;
        b[6] = m + k * d;
        b[10] = f * g;
      } else
        "YXZ" === a.order
          ? ((a = g * h),
            (k = g * e),
            (m = d * h),
            (q = d * e),
            (b[0] = a + q * c),
            (b[4] = m * c - k),
            (b[8] = f * d),
            (b[1] = f * e),
            (b[5] = f * h),
            (b[9] = -c),
            (b[2] = k * c - m),
            (b[6] = q + a * c),
            (b[10] = f * g))
          : "ZXY" === a.order
          ? ((a = g * h),
            (k = g * e),
            (m = d * h),
            (q = d * e),
            (b[0] = a - q * c),
            (b[4] = -f * e),
            (b[8] = m + k * c),
            (b[1] = k + m * c),
            (b[5] = f * h),
            (b[9] = q - a * c),
            (b[2] = -f * d),
            (b[6] = c),
            (b[10] = f * g))
          : "ZYX" === a.order
          ? ((a = f * h),
            (k = f * e),
            (m = c * h),
            (q = c * e),
            (b[0] = g * h),
            (b[4] = m * d - k),
            (b[8] = a * d + q),
            (b[1] = g * e),
            (b[5] = q * d + a),
            (b[9] = k * d - m),
            (b[2] = -d),
            (b[6] = c * g),
            (b[10] = f * g))
          : "YZX" === a.order
          ? ((a = f * g),
            (k = f * d),
            (m = c * g),
            (q = c * d),
            (b[0] = g * h),
            (b[4] = q - a * e),
            (b[8] = m * e + k),
            (b[1] = e),
            (b[5] = f * h),
            (b[9] = -c * h),
            (b[2] = -d * h),
            (b[6] = k * e + m),
            (b[10] = a - q * e))
          : "XZY" === a.order &&
            ((a = f * g),
            (k = f * d),
            (m = c * g),
            (q = c * d),
            (b[0] = g * h),
            (b[4] = -e),
            (b[8] = d * h),
            (b[1] = a * e + q),
            (b[5] = f * h),
            (b[9] = k * e - m),
            (b[2] = m * e - k),
            (b[6] = c * h),
            (b[10] = q * e + a));
      b[3] = 0;
      b[7] = 0;
      b[11] = 0;
      b[12] = 0;
      b[13] = 0;
      b[14] = 0;
      b[15] = 1;
      return this;
    },
    makeRotationFromQuaternion: (function() {
      var a = new p(0, 0, 0),
        b = new p(1, 1, 1);
      return function(c) {
        return this.compose(
          a,
          c,
          b
        );
      };
    })(),
    lookAt: (function() {
      var a = new p(),
        b = new p(),
        c = new p();
      return function(d, e, f) {
        var g = this.elements;
        c.subVectors(d, e);
        0 === c.lengthSq() && (c.z = 1);
        c.normalize();
        a.crossVectors(f, c);
        0 === a.lengthSq() &&
          (1 === Math.abs(f.z) ? (c.x += 1e-4) : (c.z += 1e-4),
          c.normalize(),
          a.crossVectors(f, c));
        a.normalize();
        b.crossVectors(c, a);
        g[0] = a.x;
        g[4] = b.x;
        g[8] = c.x;
        g[1] = a.y;
        g[5] = b.y;
        g[9] = c.y;
        g[2] = a.z;
        g[6] = b.z;
        g[10] = c.z;
        return this;
      };
    })(),
    multiply: function(a, b) {
      return void 0 !== b
        ? (console.warn(
            "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
          ),
          this.multiplyMatrices(a, b))
        : this.multiplyMatrices(this, a);
    },
    premultiply: function(a) {
      return this.multiplyMatrices(a, this);
    },
    multiplyMatrices: function(a, b) {
      var c = a.elements,
        d = b.elements;
      b = this.elements;
      a = c[0];
      var e = c[4],
        f = c[8],
        g = c[12],
        h = c[1],
        k = c[5],
        m = c[9],
        q = c[13],
        n = c[2],
        l = c[6],
        p = c[10],
        t = c[14],
        u = c[3],
        w = c[7],
        A = c[11];
      c = c[15];
      var v = d[0],
        H = d[4],
        y = d[8],
        N = d[12],
        z = d[1],
        B = d[5],
        C = d[9],
        E = d[13],
        D = d[2],
        F = d[6],
        G = d[10],
        J = d[14],
        L = d[3],
        I = d[7],
        K = d[11];
      d = d[15];
      b[0] = a * v + e * z + f * D + g * L;
      b[4] = a * H + e * B + f * F + g * I;
      b[8] = a * y + e * C + f * G + g * K;
      b[12] = a * N + e * E + f * J + g * d;
      b[1] = h * v + k * z + m * D + q * L;
      b[5] = h * H + k * B + m * F + q * I;
      b[9] = h * y + k * C + m * G + q * K;
      b[13] = h * N + k * E + m * J + q * d;
      b[2] = n * v + l * z + p * D + t * L;
      b[6] = n * H + l * B + p * F + t * I;
      b[10] = n * y + l * C + p * G + t * K;
      b[14] = n * N + l * E + p * J + t * d;
      b[3] = u * v + w * z + A * D + c * L;
      b[7] = u * H + w * B + A * F + c * I;
      b[11] = u * y + w * C + A * G + c * K;
      b[15] = u * N + w * E + A * J + c * d;
      return this;
    },
    multiplyScalar: function(a) {
      var b = this.elements;
      b[0] *= a;
      b[4] *= a;
      b[8] *= a;
      b[12] *= a;
      b[1] *= a;
      b[5] *= a;
      b[9] *= a;
      b[13] *= a;
      b[2] *= a;
      b[6] *= a;
      b[10] *= a;
      b[14] *= a;
      b[3] *= a;
      b[7] *= a;
      b[11] *= a;
      b[15] *= a;
      return this;
    },
    applyToBufferAttribute: (function() {
      var a = new p();
      return function(b) {
        for (var c = 0, d = b.count; c < d; c++)
          (a.x = b.getX(c)),
            (a.y = b.getY(c)),
            (a.z = b.getZ(c)),
            a.applyMatrix4(this),
            b.setXYZ(c, a.x, a.y, a.z);
        return b;
      };
    })(),
    determinant: function() {
      var a = this.elements,
        b = a[0],
        c = a[4],
        d = a[8],
        e = a[12],
        f = a[1],
        g = a[5],
        h = a[9],
        k = a[13],
        m = a[2],
        q = a[6],
        l = a[10],
        r = a[14];
      return (
        a[3] *
          (+e * h * q -
            d * k * q -
            e * g * l +
            c * k * l +
            d * g * r -
            c * h * r) +
        a[7] *
          (+b * h * r -
            b * k * l +
            e * f * l -
            d * f * r +
            d * k * m -
            e * h * m) +
        a[11] *
          (+b * k * q -
            b * g * r -
            e * f * q +
            c * f * r +
            e * g * m -
            c * k * m) +
        a[15] *
          (-d * g * m -
            b * h * q +
            b * g * l +
            d * f * q -
            c * f * l +
            c * h * m)
      );
    },
    transpose: function() {
      var a = this.elements;
      var b = a[1];
      a[1] = a[4];
      a[4] = b;
      b = a[2];
      a[2] = a[8];
      a[8] = b;
      b = a[6];
      a[6] = a[9];
      a[9] = b;
      b = a[3];
      a[3] = a[12];
      a[12] = b;
      b = a[7];
      a[7] = a[13];
      a[13] = b;
      b = a[11];
      a[11] = a[14];
      a[14] = b;
      return this;
    },
    setPosition: function(a) {
      var b = this.elements;
      b[12] = a.x;
      b[13] = a.y;
      b[14] = a.z;
      return this;
    },
    getInverse: function(a, b) {
      var c = this.elements,
        d = a.elements;
      a = d[0];
      var e = d[1],
        f = d[2],
        g = d[3],
        h = d[4],
        k = d[5],
        m = d[6],
        q = d[7],
        l = d[8],
        r = d[9],
        p = d[10],
        t = d[11],
        u = d[12],
        w = d[13],
        A = d[14];
      d = d[15];
      var v =
          r * A * q - w * p * q + w * m * t - k * A * t - r * m * d + k * p * d,
        z =
          u * p * q - l * A * q - u * m * t + h * A * t + l * m * d - h * p * d,
        y =
          l * w * q - u * r * q + u * k * t - h * w * t - l * k * d + h * r * d,
        N =
          u * r * m - l * w * m - u * k * p + h * w * p + l * k * A - h * r * A,
        C = a * v + e * z + f * y + g * N;
      if (0 === C) {
        if (!0 === b)
          throw Error(
            "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0"
          );
        console.warn(
          "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0"
        );
        return this.identity();
      }
      b = 1 / C;
      c[0] = v * b;
      c[1] =
        (w * p * g -
          r * A * g -
          w * f * t +
          e * A * t +
          r * f * d -
          e * p * d) *
        b;
      c[2] =
        (k * A * g -
          w * m * g +
          w * f * q -
          e * A * q -
          k * f * d +
          e * m * d) *
        b;
      c[3] =
        (r * m * g -
          k * p * g -
          r * f * q +
          e * p * q +
          k * f * t -
          e * m * t) *
        b;
      c[4] = z * b;
      c[5] =
        (l * A * g -
          u * p * g +
          u * f * t -
          a * A * t -
          l * f * d +
          a * p * d) *
        b;
      c[6] =
        (u * m * g -
          h * A * g -
          u * f * q +
          a * A * q +
          h * f * d -
          a * m * d) *
        b;
      c[7] =
        (h * p * g -
          l * m * g +
          l * f * q -
          a * p * q -
          h * f * t +
          a * m * t) *
        b;
      c[8] = y * b;
      c[9] =
        (u * r * g -
          l * w * g -
          u * e * t +
          a * w * t +
          l * e * d -
          a * r * d) *
        b;
      c[10] =
        (h * w * g -
          u * k * g +
          u * e * q -
          a * w * q -
          h * e * d +
          a * k * d) *
        b;
      c[11] =
        (l * k * g -
          h * r * g -
          l * e * q +
          a * r * q +
          h * e * t -
          a * k * t) *
        b;
      c[12] = N * b;
      c[13] =
        (l * w * f -
          u * r * f +
          u * e * p -
          a * w * p -
          l * e * A +
          a * r * A) *
        b;
      c[14] =
        (u * k * f -
          h * w * f -
          u * e * m +
          a * w * m +
          h * e * A -
          a * k * A) *
        b;
      c[15] =
        (h * r * f -
          l * k * f +
          l * e * m -
          a * r * m -
          h * e * p +
          a * k * p) *
        b;
      return this;
    },
    scale: function(a) {
      var b = this.elements,
        c = a.x,
        d = a.y;
      a = a.z;
      b[0] *= c;
      b[4] *= d;
      b[8] *= a;
      b[1] *= c;
      b[5] *= d;
      b[9] *= a;
      b[2] *= c;
      b[6] *= d;
      b[10] *= a;
      b[3] *= c;
      b[7] *= d;
      b[11] *= a;
      return this;
    },
    getMaxScaleOnAxis: function() {
      var a = this.elements;
      return Math.sqrt(
        Math.max(
          a[0] * a[0] + a[1] * a[1] + a[2] * a[2],
          a[4] * a[4] + a[5] * a[5] + a[6] * a[6],
          a[8] * a[8] + a[9] * a[9] + a[10] * a[10]
        )
      );
    },
    makeTranslation: function(a, b, c) {
      this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
      return this;
    },
    makeRotationX: function(a) {
      var b = Math.cos(a);
      a = Math.sin(a);
      this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
      return this;
    },
    makeRotationY: function(a) {
      var b = Math.cos(a);
      a = Math.sin(a);
      this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
      return this;
    },
    makeRotationZ: function(a) {
      var b = Math.cos(a);
      a = Math.sin(a);
      this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      return this;
    },
    makeRotationAxis: function(a, b) {
      var c = Math.cos(b);
      b = Math.sin(b);
      var d = 1 - c,
        e = a.x,
        f = a.y;
      a = a.z;
      var g = d * e,
        h = d * f;
      this.set(
        g * e + c,
        g * f - b * a,
        g * a + b * f,
        0,
        g * f + b * a,
        h * f + c,
        h * a - b * e,
        0,
        g * a - b * f,
        h * a + b * e,
        d * a * a + c,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    },
    makeScale: function(a, b, c) {
      this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
      return this;
    },
    makeShear: function(a, b, c) {
      this.set(1, b, c, 0, a, 1, c, 0, a, b, 1, 0, 0, 0, 0, 1);
      return this;
    },
    compose: function(a, b, c) {
      var d = this.elements,
        e = b._x,
        f = b._y,
        g = b._z,
        h = b._w,
        k = e + e,
        m = f + f,
        l = g + g;
      b = e * k;
      var n = e * m;
      e *= l;
      var r = f * m;
      f *= l;
      g *= l;
      k *= h;
      m *= h;
      h *= l;
      l = c.x;
      var p = c.y;
      c = c.z;
      d[0] = (1 - (r + g)) * l;
      d[1] = (n + h) * l;
      d[2] = (e - m) * l;
      d[3] = 0;
      d[4] = (n - h) * p;
      d[5] = (1 - (b + g)) * p;
      d[6] = (f + k) * p;
      d[7] = 0;
      d[8] = (e + m) * c;
      d[9] = (f - k) * c;
      d[10] = (1 - (b + r)) * c;
      d[11] = 0;
      d[12] = a.x;
      d[13] = a.y;
      d[14] = a.z;
      d[15] = 1;
      return this;
    },
    decompose: (function() {
      var a = new p(),
        b = new P();
      return function(c, d, e) {
        var f = this.elements,
          g = a.set(f[0], f[1], f[2]).length(),
          h = a.set(f[4], f[5], f[6]).length(),
          k = a.set(f[8], f[9], f[10]).length();
        0 > this.determinant() && (g = -g);
        c.x = f[12];
        c.y = f[13];
        c.z = f[14];
        b.copy(this);
        c = 1 / g;
        f = 1 / h;
        var m = 1 / k;
        b.elements[0] *= c;
        b.elements[1] *= c;
        b.elements[2] *= c;
        b.elements[4] *= f;
        b.elements[5] *= f;
        b.elements[6] *= f;
        b.elements[8] *= m;
        b.elements[9] *= m;
        b.elements[10] *= m;
        d.setFromRotationMatrix(b);
        e.x = g;
        e.y = h;
        e.z = k;
        return this;
      };
    })(),
    makePerspective: function(a, b, c, d, e, f) {
      void 0 === f &&
        console.warn(
          "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
        );
      var g = this.elements;
      g[0] = (2 * e) / (b - a);
      g[4] = 0;
      g[8] = (b + a) / (b - a);
      g[12] = 0;
      g[1] = 0;
      g[5] = (2 * e) / (c - d);
      g[9] = (c + d) / (c - d);
      g[13] = 0;
      g[2] = 0;
      g[6] = 0;
      g[10] = -(f + e) / (f - e);
      g[14] = (-2 * f * e) / (f - e);
      g[3] = 0;
      g[7] = 0;
      g[11] = -1;
      g[15] = 0;
      return this;
    },
    makeOrthographic: function(a, b, c, d, e, f) {
      var g = this.elements,
        h = 1 / (b - a),
        k = 1 / (c - d),
        m = 1 / (f - e);
      g[0] = 2 * h;
      g[4] = 0;
      g[8] = 0;
      g[12] = -((b + a) * h);
      g[1] = 0;
      g[5] = 2 * k;
      g[9] = 0;
      g[13] = -((c + d) * k);
      g[2] = 0;
      g[6] = 0;
      g[10] = -2 * m;
      g[14] = -((f + e) * m);
      g[3] = 0;
      g[7] = 0;
      g[11] = 0;
      g[15] = 1;
      return this;
    },
    equals: function(a) {
      var b = this.elements;
      a = a.elements;
      for (var c = 0; 16 > c; c++) if (b[c] !== a[c]) return !1;
      return !0;
    },
    fromArray: function(a, b) {
      void 0 === b && (b = 0);
      for (var c = 0; 16 > c; c++) this.elements[c] = a[c + b];
      return this;
    },
    toArray: function(a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      var c = this.elements;
      a[b] = c[0];
      a[b + 1] = c[1];
      a[b + 2] = c[2];
      a[b + 3] = c[3];
      a[b + 4] = c[4];
      a[b + 5] = c[5];
      a[b + 6] = c[6];
      a[b + 7] = c[7];
      a[b + 8] = c[8];
      a[b + 9] = c[9];
      a[b + 10] = c[10];
      a[b + 11] = c[11];
      a[b + 12] = c[12];
      a[b + 13] = c[13];
      a[b + 14] = c[14];
      a[b + 15] = c[15];
      return a;
    }
  });
  Object.assign(ja, {
    slerp: function(a, b, c, d) {
      return c.copy(a).slerp(b, d);
    },
    slerpFlat: function(a, b, c, d, e, f, g) {
      var h = c[d + 0],
        k = c[d + 1],
        m = c[d + 2];
      c = c[d + 3];
      d = e[f + 0];
      var l = e[f + 1],
        n = e[f + 2];
      e = e[f + 3];
      if (c !== e || h !== d || k !== l || m !== n) {
        f = 1 - g;
        var r = h * d + k * l + m * n + c * e,
          p = 0 <= r ? 1 : -1,
          t = 1 - r * r;
        t > Number.EPSILON &&
          ((t = Math.sqrt(t)),
          (r = Math.atan2(t, r * p)),
          (f = Math.sin(f * r) / t),
          (g = Math.sin(g * r) / t));
        p *= g;
        h = h * f + d * p;
        k = k * f + l * p;
        m = m * f + n * p;
        c = c * f + e * p;
        f === 1 - g &&
          ((g = 1 / Math.sqrt(h * h + k * k + m * m + c * c)),
          (h *= g),
          (k *= g),
          (m *= g),
          (c *= g));
      }
      a[b] = h;
      a[b + 1] = k;
      a[b + 2] = m;
      a[b + 3] = c;
    }
  });
  Object.defineProperties(ja.prototype, {
    x: {
      get: function() {
        return this._x;
      },
      set: function(a) {
        this._x = a;
        this.onChangeCallback();
      }
    },
    y: {
      get: function() {
        return this._y;
      },
      set: function(a) {
        this._y = a;
        this.onChangeCallback();
      }
    },
    z: {
      get: function() {
        return this._z;
      },
      set: function(a) {
        this._z = a;
        this.onChangeCallback();
      }
    },
    w: {
      get: function() {
        return this._w;
      },
      set: function(a) {
        this._w = a;
        this.onChangeCallback();
      }
    }
  });
  Object.assign(ja.prototype, {
    isQuaternion: !0,
    set: function(a, b, c, d) {
      this._x = a;
      this._y = b;
      this._z = c;
      this._w = d;
      this.onChangeCallback();
      return this;
    },
    clone: function() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    },
    copy: function(a) {
      this._x = a.x;
      this._y = a.y;
      this._z = a.z;
      this._w = a.w;
      this.onChangeCallback();
      return this;
    },
    setFromEuler: function(a, b) {
      if (!a || !a.isEuler)
        throw Error(
          "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
        );
      var c = a._x,
        d = a._y,
        e = a._z;
      a = a.order;
      var f = Math.cos,
        g = Math.sin,
        h = f(c / 2),
        k = f(d / 2);
      f = f(e / 2);
      c = g(c / 2);
      d = g(d / 2);
      e = g(e / 2);
      "XYZ" === a
        ? ((this._x = c * k * f + h * d * e),
          (this._y = h * d * f - c * k * e),
          (this._z = h * k * e + c * d * f),
          (this._w = h * k * f - c * d * e))
        : "YXZ" === a
        ? ((this._x = c * k * f + h * d * e),
          (this._y = h * d * f - c * k * e),
          (this._z = h * k * e - c * d * f),
          (this._w = h * k * f + c * d * e))
        : "ZXY" === a
        ? ((this._x = c * k * f - h * d * e),
          (this._y = h * d * f + c * k * e),
          (this._z = h * k * e + c * d * f),
          (this._w = h * k * f - c * d * e))
        : "ZYX" === a
        ? ((this._x = c * k * f - h * d * e),
          (this._y = h * d * f + c * k * e),
          (this._z = h * k * e - c * d * f),
          (this._w = h * k * f + c * d * e))
        : "YZX" === a
        ? ((this._x = c * k * f + h * d * e),
          (this._y = h * d * f + c * k * e),
          (this._z = h * k * e - c * d * f),
          (this._w = h * k * f - c * d * e))
        : "XZY" === a &&
          ((this._x = c * k * f - h * d * e),
          (this._y = h * d * f - c * k * e),
          (this._z = h * k * e + c * d * f),
          (this._w = h * k * f + c * d * e));
      if (!1 !== b) this.onChangeCallback();
      return this;
    },
    setFromAxisAngle: function(a, b) {
      b /= 2;
      var c = Math.sin(b);
      this._x = a.x * c;
      this._y = a.y * c;
      this._z = a.z * c;
      this._w = Math.cos(b);
      this.onChangeCallback();
      return this;
    },
    setFromRotationMatrix: function(a) {
      var b = a.elements,
        c = b[0];
      a = b[4];
      var d = b[8],
        e = b[1],
        f = b[5],
        g = b[9],
        h = b[2],
        k = b[6];
      b = b[10];
      var m = c + f + b;
      0 < m
        ? ((c = 0.5 / Math.sqrt(m + 1)),
          (this._w = 0.25 / c),
          (this._x = (k - g) * c),
          (this._y = (d - h) * c),
          (this._z = (e - a) * c))
        : c > f && c > b
        ? ((c = 2 * Math.sqrt(1 + c - f - b)),
          (this._w = (k - g) / c),
          (this._x = 0.25 * c),
          (this._y = (a + e) / c),
          (this._z = (d + h) / c))
        : f > b
        ? ((c = 2 * Math.sqrt(1 + f - c - b)),
          (this._w = (d - h) / c),
          (this._x = (a + e) / c),
          (this._y = 0.25 * c),
          (this._z = (g + k) / c))
        : ((c = 2 * Math.sqrt(1 + b - c - f)),
          (this._w = (e - a) / c),
          (this._x = (d + h) / c),
          (this._y = (g + k) / c),
          (this._z = 0.25 * c));
      this.onChangeCallback();
      return this;
    },
    setFromUnitVectors: (function() {
      var a = new p(),
        b;
      return function(c, d) {
        void 0 === a && (a = new p());
        b = c.dot(d) + 1;
        1e-6 > b
          ? ((b = 0),
            Math.abs(c.x) > Math.abs(c.z)
              ? a.set(-c.y, c.x, 0)
              : a.set(0, -c.z, c.y))
          : a.crossVectors(c, d);
        this._x = a.x;
        this._y = a.y;
        this._z = a.z;
        this._w = b;
        return this.normalize();
      };
    })(),
    angleTo: function(a) {
      return 2 * Math.acos(Math.abs(R.clamp(this.dot(a), -1, 1)));
    },
    rotateTowards: function(a, b) {
      var c = this.angleTo(a);
      if (0 === c) return this;
      this.slerp(a, Math.min(1, b / c));
      return this;
    },
    inverse: function() {
      return this.conjugate();
    },
    conjugate: function() {
      this._x *= -1;
      this._y *= -1;
      this._z *= -1;
      this.onChangeCallback();
      return this;
    },
    dot: function(a) {
      return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w;
    },
    lengthSq: function() {
      return (
        this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
      );
    },
    length: function() {
      return Math.sqrt(
        this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w
      );
    },
    normalize: function() {
      var a = this.length();
      0 === a
        ? ((this._z = this._y = this._x = 0), (this._w = 1))
        : ((a = 1 / a),
          (this._x *= a),
          (this._y *= a),
          (this._z *= a),
          (this._w *= a));
      this.onChangeCallback();
      return this;
    },
    multiply: function(a, b) {
      return void 0 !== b
        ? (console.warn(
            "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
          ),
          this.multiplyQuaternions(a, b))
        : this.multiplyQuaternions(this, a);
    },
    premultiply: function(a) {
      return this.multiplyQuaternions(a, this);
    },
    multiplyQuaternions: function(a, b) {
      var c = a._x,
        d = a._y,
        e = a._z;
      a = a._w;
      var f = b._x,
        g = b._y,
        h = b._z;
      b = b._w;
      this._x = c * b + a * f + d * h - e * g;
      this._y = d * b + a * g + e * f - c * h;
      this._z = e * b + a * h + c * g - d * f;
      this._w = a * b - c * f - d * g - e * h;
      this.onChangeCallback();
      return this;
    },
    slerp: function(a, b) {
      if (0 === b) return this;
      if (1 === b) return this.copy(a);
      var c = this._x,
        d = this._y,
        e = this._z,
        f = this._w,
        g = f * a._w + c * a._x + d * a._y + e * a._z;
      0 > g
        ? ((this._w = -a._w),
          (this._x = -a._x),
          (this._y = -a._y),
          (this._z = -a._z),
          (g = -g))
        : this.copy(a);
      if (1 <= g)
        return (this._w = f), (this._x = c), (this._y = d), (this._z = e), this;
      a = 1 - g * g;
      if (a <= Number.EPSILON)
        return (
          (g = 1 - b),
          (this._w = g * f + b * this._w),
          (this._x = g * c + b * this._x),
          (this._y = g * d + b * this._y),
          (this._z = g * e + b * this._z),
          this.normalize()
        );
      a = Math.sqrt(a);
      var h = Math.atan2(a, g);
      g = Math.sin((1 - b) * h) / a;
      b = Math.sin(b * h) / a;
      this._w = f * g + this._w * b;
      this._x = c * g + this._x * b;
      this._y = d * g + this._y * b;
      this._z = e * g + this._z * b;
      this.onChangeCallback();
      return this;
    },
    equals: function(a) {
      return (
        a._x === this._x &&
        a._y === this._y &&
        a._z === this._z &&
        a._w === this._w
      );
    },
    fromArray: function(a, b) {
      void 0 === b && (b = 0);
      this._x = a[b];
      this._y = a[b + 1];
      this._z = a[b + 2];
      this._w = a[b + 3];
      this.onChangeCallback();
      return this;
    },
    toArray: function(a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      a[b] = this._x;
      a[b + 1] = this._y;
      a[b + 2] = this._z;
      a[b + 3] = this._w;
      return a;
    },
    onChange: function(a) {
      this.onChangeCallback = a;
      return this;
    },
    onChangeCallback: function() {}
  });
  Object.assign(p.prototype, {
    isVector3: !0,
    set: function(a, b, c) {
      this.x = a;
      this.y = b;
      this.z = c;
      return this;
    },
    setScalar: function(a) {
      this.z = this.y = this.x = a;
      return this;
    },
    setX: function(a) {
      this.x = a;
      return this;
    },
    setY: function(a) {
      this.y = a;
      return this;
    },
    setZ: function(a) {
      this.z = a;
      return this;
    },
    setComponent: function(a, b) {
      switch (a) {
        case 0:
          this.x = b;
          break;
        case 1:
          this.y = b;
          break;
        case 2:
          this.z = b;
          break;
        default:
          throw Error("index is out of range: " + a);
      }
      return this;
    },
    getComponent: function(a) {
      switch (a) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw Error("index is out of range: " + a);
      }
    },
    clone: function() {
      return new this.constructor(this.x, this.y, this.z);
    },
    copy: function(a) {
      this.x = a.x;
      this.y = a.y;
      this.z = a.z;
      return this;
    },
    add: function(a, b) {
      if (void 0 !== b)
        return (
          console.warn(
            "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
          ),
          this.addVectors(a, b)
        );
      this.x += a.x;
      this.y += a.y;
      this.z += a.z;
      return this;
    },
    addScalar: function(a) {
      this.x += a;
      this.y += a;
      this.z += a;
      return this;
    },
    addVectors: function(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      this.z = a.z + b.z;
      return this;
    },
    addScaledVector: function(a, b) {
      this.x += a.x * b;
      this.y += a.y * b;
      this.z += a.z * b;
      return this;
    },
    sub: function(a, b) {
      if (void 0 !== b)
        return (
          console.warn(
            "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
          ),
          this.subVectors(a, b)
        );
      this.x -= a.x;
      this.y -= a.y;
      this.z -= a.z;
      return this;
    },
    subScalar: function(a) {
      this.x -= a;
      this.y -= a;
      this.z -= a;
      return this;
    },
    subVectors: function(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      return this;
    },
    multiply: function(a, b) {
      if (void 0 !== b)
        return (
          console.warn(
            "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
          ),
          this.multiplyVectors(a, b)
        );
      this.x *= a.x;
      this.y *= a.y;
      this.z *= a.z;
      return this;
    },
    multiplyScalar: function(a) {
      this.x *= a;
      this.y *= a;
      this.z *= a;
      return this;
    },
    multiplyVectors: function(a, b) {
      this.x = a.x * b.x;
      this.y = a.y * b.y;
      this.z = a.z * b.z;
      return this;
    },
    applyEuler: (function() {
      var a = new ja();
      return function(b) {
        (b && b.isEuler) ||
          console.error(
            "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
          );
        return this.applyQuaternion(a.setFromEuler(b));
      };
    })(),
    applyAxisAngle: (function() {
      var a = new ja();
      return function(b, c) {
        return this.applyQuaternion(a.setFromAxisAngle(b, c));
      };
    })(),
    applyMatrix3: function(a) {
      var b = this.x,
        c = this.y,
        d = this.z;
      a = a.elements;
      this.x = a[0] * b + a[3] * c + a[6] * d;
      this.y = a[1] * b + a[4] * c + a[7] * d;
      this.z = a[2] * b + a[5] * c + a[8] * d;
      return this;
    },
    applyMatrix4: function(a) {
      var b = this.x,
        c = this.y,
        d = this.z;
      a = a.elements;
      var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
      this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
      this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
      this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
      return this;
    },
    applyQuaternion: function(a) {
      var b = this.x,
        c = this.y,
        d = this.z,
        e = a.x,
        f = a.y,
        g = a.z;
      a = a.w;
      var h = a * b + f * d - g * c,
        k = a * c + g * b - e * d,
        m = a * d + e * c - f * b;
      b = -e * b - f * c - g * d;
      this.x = h * a + b * -e + k * -g - m * -f;
      this.y = k * a + b * -f + m * -e - h * -g;
      this.z = m * a + b * -g + h * -f - k * -e;
      return this;
    },
    project: function(a) {
      return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(
        a.projectionMatrix
      );
    },
    unproject: (function() {
      var a = new P();
      return function(b) {
        return this.applyMatrix4(a.getInverse(b.projectionMatrix)).applyMatrix4(
          b.matrixWorld
        );
      };
    })(),
    transformDirection: function(a) {
      var b = this.x,
        c = this.y,
        d = this.z;
      a = a.elements;
      this.x = a[0] * b + a[4] * c + a[8] * d;
      this.y = a[1] * b + a[5] * c + a[9] * d;
      this.z = a[2] * b + a[6] * c + a[10] * d;
      return this.normalize();
    },
    divide: function(a) {
      this.x /= a.x;
      this.y /= a.y;
      this.z /= a.z;
      return this;
    },
    divideScalar: function(a) {
      return this.multiplyScalar(1 / a);
    },
    min: function(a) {
      this.x = Math.min(this.x, a.x);
      this.y = Math.min(this.y, a.y);
      this.z = Math.min(this.z, a.z);
      return this;
    },
    max: function(a) {
      this.x = Math.max(this.x, a.x);
      this.y = Math.max(this.y, a.y);
      this.z = Math.max(this.z, a.z);
      return this;
    },
    clamp: function(a, b) {
      this.x = Math.max(a.x, Math.min(b.x, this.x));
      this.y = Math.max(a.y, Math.min(b.y, this.y));
      this.z = Math.max(a.z, Math.min(b.z, this.z));
      return this;
    },
    clampScalar: (function() {
      var a = new p(),
        b = new p();
      return function(c, d) {
        a.set(c, c, c);
        b.set(d, d, d);
        return this.clamp(a, b);
      };
    })(),
    clampLength: function(a, b) {
      var c = this.length();
      return this.divideScalar(c || 1).multiplyScalar(
        Math.max(a, Math.min(b, c))
      );
    },
    floor: function() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      return this;
    },
    ceil: function() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      return this;
    },
    round: function() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      return this;
    },
    roundToZero: function() {
      this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
      this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
      this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
      return this;
    },
    negate: function() {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    },
    dot: function(a) {
      return this.x * a.x + this.y * a.y + this.z * a.z;
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },
    manhattanLength: function() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    },
    normalize: function() {
      return this.divideScalar(this.length() || 1);
    },
    setLength: function(a) {
      return this.normalize().multiplyScalar(a);
    },
    lerp: function(a, b) {
      this.x += (a.x - this.x) * b;
      this.y += (a.y - this.y) * b;
      this.z += (a.z - this.z) * b;
      return this;
    },
    lerpVectors: function(a, b, c) {
      return this.subVectors(b, a)
        .multiplyScalar(c)
        .add(a);
    },
    cross: function(a, b) {
      return void 0 !== b
        ? (console.warn(
            "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
          ),
          this.crossVectors(a, b))
        : this.crossVectors(this, a);
    },
    crossVectors: function(a, b) {
      var c = a.x,
        d = a.y;
      a = a.z;
      var e = b.x,
        f = b.y;
      b = b.z;
      this.x = d * b - a * f;
      this.y = a * e - c * b;
      this.z = c * f - d * e;
      return this;
    },
    projectOnVector: function(a) {
      var b = a.dot(this) / a.lengthSq();
      return this.copy(a).multiplyScalar(b);
    },
    projectOnPlane: (function() {
      var a = new p();
      return function(b) {
        a.copy(this).projectOnVector(b);
        return this.sub(a);
      };
    })(),
    reflect: (function() {
      var a = new p();
      return function(b) {
        return this.sub(a.copy(b).multiplyScalar(2 * this.dot(b)));
      };
    })(),
    angleTo: function(a) {
      a = this.dot(a) / Math.sqrt(this.lengthSq() * a.lengthSq());
      return Math.acos(R.clamp(a, -1, 1));
    },
    distanceTo: function(a) {
      return Math.sqrt(this.distanceToSquared(a));
    },
    distanceToSquared: function(a) {
      var b = this.x - a.x,
        c = this.y - a.y;
      a = this.z - a.z;
      return b * b + c * c + a * a;
    },
    manhattanDistanceTo: function(a) {
      return (
        Math.abs(this.x - a.x) + Math.abs(this.y - a.y) + Math.abs(this.z - a.z)
      );
    },
    setFromSpherical: function(a) {
      return this.setFromSphericalCoords(a.radius, a.phi, a.theta);
    },
    setFromSphericalCoords: function(a, b, c) {
      var d = Math.sin(b) * a;
      this.x = d * Math.sin(c);
      this.y = Math.cos(b) * a;
      this.z = d * Math.cos(c);
      return this;
    },
    setFromCylindrical: function(a) {
      return this.setFromCylindricalCoords(a.radius, a.theta, a.y);
    },
    setFromCylindricalCoords: function(a, b, c) {
      this.x = a * Math.sin(b);
      this.y = c;
      this.z = a * Math.cos(b);
      return this;
    },
    setFromMatrixPosition: function(a) {
      a = a.elements;
      this.x = a[12];
      this.y = a[13];
      this.z = a[14];
      return this;
    },
    setFromMatrixScale: function(a) {
      var b = this.setFromMatrixColumn(a, 0).length(),
        c = this.setFromMatrixColumn(a, 1).length();
      a = this.setFromMatrixColumn(a, 2).length();
      this.x = b;
      this.y = c;
      this.z = a;
      return this;
    },
    setFromMatrixColumn: function(a, b) {
      return this.fromArray(a.elements, 4 * b);
    },
    equals: function(a) {
      return a.x === this.x && a.y === this.y && a.z === this.z;
    },
    fromArray: function(a, b) {
      void 0 === b && (b = 0);
      this.x = a[b];
      this.y = a[b + 1];
      this.z = a[b + 2];
      return this;
    },
    toArray: function(a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      a[b] = this.x;
      a[b + 1] = this.y;
      a[b + 2] = this.z;
      return a;
    },
    fromBufferAttribute: function(a, b, c) {
      void 0 !== c &&
        console.warn(
          "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
        );
      this.x = a.getX(b);
      this.y = a.getY(b);
      this.z = a.getZ(b);
      return this;
    }
  });
  Object.assign(da.prototype, {
    isMatrix3: !0,
    set: function(a, b, c, d, e, f, g, h, k) {
      var m = this.elements;
      m[0] = a;
      m[1] = d;
      m[2] = g;
      m[3] = b;
      m[4] = e;
      m[5] = h;
      m[6] = c;
      m[7] = f;
      m[8] = k;
      return this;
    },
    identity: function() {
      this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
      return this;
    },
    clone: function() {
      return new this.constructor().fromArray(this.elements);
    },
    copy: function(a) {
      var b = this.elements;
      a = a.elements;
      b[0] = a[0];
      b[1] = a[1];
      b[2] = a[2];
      b[3] = a[3];
      b[4] = a[4];
      b[5] = a[5];
      b[6] = a[6];
      b[7] = a[7];
      b[8] = a[8];
      return this;
    },
    setFromMatrix4: function(a) {
      a = a.elements;
      this.set(a[0], a[4], a[8], a[1], a[5], a[9], a[2], a[6], a[10]);
      return this;
    },
    applyToBufferAttribute: (function() {
      var a = new p();
      return function(b) {
        for (var c = 0, d = b.count; c < d; c++)
          (a.x = b.getX(c)),
            (a.y = b.getY(c)),
            (a.z = b.getZ(c)),
            a.applyMatrix3(this),
            b.setXYZ(c, a.x, a.y, a.z);
        return b;
      };
    })(),
    multiply: function(a) {
      return this.multiplyMatrices(this, a);
    },
    premultiply: function(a) {
      return this.multiplyMatrices(a, this);
    },
    multiplyMatrices: function(a, b) {
      var c = a.elements,
        d = b.elements;
      b = this.elements;
      a = c[0];
      var e = c[3],
        f = c[6],
        g = c[1],
        h = c[4],
        k = c[7],
        m = c[2],
        l = c[5];
      c = c[8];
      var n = d[0],
        r = d[3],
        p = d[6],
        t = d[1],
        u = d[4],
        w = d[7],
        A = d[2],
        v = d[5];
      d = d[8];
      b[0] = a * n + e * t + f * A;
      b[3] = a * r + e * u + f * v;
      b[6] = a * p + e * w + f * d;
      b[1] = g * n + h * t + k * A;
      b[4] = g * r + h * u + k * v;
      b[7] = g * p + h * w + k * d;
      b[2] = m * n + l * t + c * A;
      b[5] = m * r + l * u + c * v;
      b[8] = m * p + l * w + c * d;
      return this;
    },
    multiplyScalar: function(a) {
      var b = this.elements;
      b[0] *= a;
      b[3] *= a;
      b[6] *= a;
      b[1] *= a;
      b[4] *= a;
      b[7] *= a;
      b[2] *= a;
      b[5] *= a;
      b[8] *= a;
      return this;
    },
    determinant: function() {
      var a = this.elements,
        b = a[0],
        c = a[1],
        d = a[2],
        e = a[3],
        f = a[4],
        g = a[5],
        h = a[6],
        k = a[7];
      a = a[8];
      return (
        b * f * a - b * g * k - c * e * a + c * g * h + d * e * k - d * f * h
      );
    },
    getInverse: function(a, b) {
      a &&
        a.isMatrix4 &&
        console.error(
          "THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument."
        );
      var c = a.elements;
      a = this.elements;
      var d = c[0],
        e = c[1],
        f = c[2],
        g = c[3],
        h = c[4],
        k = c[5],
        m = c[6],
        l = c[7];
      c = c[8];
      var n = c * h - k * l,
        r = k * m - c * g,
        p = l * g - h * m,
        t = d * n + e * r + f * p;
      if (0 === t) {
        if (!0 === b)
          throw Error(
            "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0"
          );
        console.warn(
          "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0"
        );
        return this.identity();
      }
      b = 1 / t;
      a[0] = n * b;
      a[1] = (f * l - c * e) * b;
      a[2] = (k * e - f * h) * b;
      a[3] = r * b;
      a[4] = (c * d - f * m) * b;
      a[5] = (f * g - k * d) * b;
      a[6] = p * b;
      a[7] = (e * m - l * d) * b;
      a[8] = (h * d - e * g) * b;
      return this;
    },
    transpose: function() {
      var a = this.elements;
      var b = a[1];
      a[1] = a[3];
      a[3] = b;
      b = a[2];
      a[2] = a[6];
      a[6] = b;
      b = a[5];
      a[5] = a[7];
      a[7] = b;
      return this;
    },
    getNormalMatrix: function(a) {
      return this.setFromMatrix4(a)
        .getInverse(this)
        .transpose();
    },
    transposeIntoArray: function(a) {
      var b = this.elements;
      a[0] = b[0];
      a[1] = b[3];
      a[2] = b[6];
      a[3] = b[1];
      a[4] = b[4];
      a[5] = b[7];
      a[6] = b[2];
      a[7] = b[5];
      a[8] = b[8];
      return this;
    },
    setUvTransform: function(a, b, c, d, e, f, g) {
      var h = Math.cos(e);
      e = Math.sin(e);
      this.set(
        c * h,
        c * e,
        -c * (h * f + e * g) + f + a,
        -d * e,
        d * h,
        -d * (-e * f + h * g) + g + b,
        0,
        0,
        1
      );
    },
    scale: function(a, b) {
      var c = this.elements;
      c[0] *= a;
      c[3] *= a;
      c[6] *= a;
      c[1] *= b;
      c[4] *= b;
      c[7] *= b;
      return this;
    },
    rotate: function(a) {
      var b = Math.cos(a);
      a = Math.sin(a);
      var c = this.elements,
        d = c[0],
        e = c[3],
        f = c[6],
        g = c[1],
        h = c[4],
        k = c[7];
      c[0] = b * d + a * g;
      c[3] = b * e + a * h;
      c[6] = b * f + a * k;
      c[1] = -a * d + b * g;
      c[4] = -a * e + b * h;
      c[7] = -a * f + b * k;
      return this;
    },
    translate: function(a, b) {
      var c = this.elements;
      c[0] += a * c[2];
      c[3] += a * c[5];
      c[6] += a * c[8];
      c[1] += b * c[2];
      c[4] += b * c[5];
      c[7] += b * c[8];
      return this;
    },
    equals: function(a) {
      var b = this.elements;
      a = a.elements;
      for (var c = 0; 9 > c; c++) if (b[c] !== a[c]) return !1;
      return !0;
    },
    fromArray: function(a, b) {
      void 0 === b && (b = 0);
      for (var c = 0; 9 > c; c++) this.elements[c] = a[c + b];
      return this;
    },
    toArray: function(a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      var c = this.elements;
      a[b] = c[0];
      a[b + 1] = c[1];
      a[b + 2] = c[2];
      a[b + 3] = c[3];
      a[b + 4] = c[4];
      a[b + 5] = c[5];
      a[b + 6] = c[6];
      a[b + 7] = c[7];
      a[b + 8] = c[8];
      return a;
    }
  });
  var jb = {
      getDataURL: function(a) {
        if ("undefined" == typeof HTMLCanvasElement) return a.src;
        if (a instanceof HTMLCanvasElement) var b = a;
        else {
          b = document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "canvas"
          );
          b.width = a.width;
          b.height = a.height;
          var c = b.getContext("2d");
          a instanceof ImageData
            ? c.putImageData(a, 0, 0)
            : c.drawImage(a, 0, 0, a.width, a.height);
        }
        return 2048 < b.width || 2048 < b.height
          ? b.toDataURL("image/jpeg", 0.6)
          : b.toDataURL("image/png");
      }
    },
    Kf = 0;
  W.DEFAULT_IMAGE = void 0;
  W.DEFAULT_MAPPING = 300;
  W.prototype = Object.assign(Object.create(ia.prototype), {
    constructor: W,
    isTexture: !0,
    updateMatrix: function() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y
      );
    },
    clone: function() {
      return new this.constructor().copy(this);
    },
    copy: function(a) {
      this.name = a.name;
      this.image = a.image;
      this.mipmaps = a.mipmaps.slice(0);
      this.mapping = a.mapping;
      this.wrapS = a.wrapS;
      this.wrapT = a.wrapT;
      this.magFilter = a.magFilter;
      this.minFilter = a.minFilter;
      this.anisotropy = a.anisotropy;
      this.format = a.format;
      this.type = a.type;
      this.offset.copy(a.offset);
      this.repeat.copy(a.repeat);
      this.center.copy(a.center);
      this.rotation = a.rotation;
      this.matrixAutoUpdate = a.matrixAutoUpdate;
      this.matrix.copy(a.matrix);
      this.generateMipmaps = a.generateMipmaps;
      this.premultiplyAlpha = a.premultiplyAlpha;
      this.flipY = a.flipY;
      this.unpackAlignment = a.unpackAlignment;
      this.encoding = a.encoding;
      return this;
    },
    toJSON: function(a) {
      var b = void 0 === a || "string" === typeof a;
      if (!b && void 0 !== a.textures[this.uuid]) return a.textures[this.uuid];
      var c = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY
      };
      if (void 0 !== this.image) {
        var d = this.image;
        void 0 === d.uuid && (d.uuid = R.generateUUID());
        if (!b && void 0 === a.images[d.uuid]) {
          if (Array.isArray(d)) {
            var e = [];
            for (var f = 0, g = d.length; f < g; f++)
              e.push(jb.getDataURL(d[f]));
          } else e = jb.getDataURL(d);
          a.images[d.uuid] = { uuid: d.uuid, url: e };
        }
        c.image = d.uuid;
      }
      b || (a.textures[this.uuid] = c);
      return c;
    },
    dispose: function() {
      this.dispatchEvent({ type: "dispose" });
    },
    transformUv: function(a) {
      if (300 !== this.mapping) return a;
      a.applyMatrix3(this.matrix);
      if (0 > a.x || 1 < a.x)
        switch (this.wrapS) {
          case 1e3:
            a.x -= Math.floor(a.x);
            break;
          case 1001:
            a.x = 0 > a.x ? 0 : 1;
            break;
          case 1002:
            a.x =
              1 === Math.abs(Math.floor(a.x) % 2)
                ? Math.ceil(a.x) - a.x
                : a.x - Math.floor(a.x);
        }
      if (0 > a.y || 1 < a.y)
        switch (this.wrapT) {
          case 1e3:
            a.y -= Math.floor(a.y);
            break;
          case 1001:
            a.y = 0 > a.y ? 0 : 1;
            break;
          case 1002:
            a.y =
              1 === Math.abs(Math.floor(a.y) % 2)
                ? Math.ceil(a.y) - a.y
                : a.y - Math.floor(a.y);
        }
      this.flipY && (a.y = 1 - a.y);
      return a;
    }
  });
  Object.defineProperty(W.prototype, "needsUpdate", {
    set: function(a) {
      !0 === a && this.version++;
    }
  });
  Object.assign(Z.prototype, {
    isVector4: !0,
    set: function(a, b, c, d) {
      this.x = a;
      this.y = b;
      this.z = c;
      this.w = d;
      return this;
    },
    setScalar: function(a) {
      this.w = this.z = this.y = this.x = a;
      return this;
    },
    setX: function(a) {
      this.x = a;
      return this;
    },
    setY: function(a) {
      this.y = a;
      return this;
    },
    setZ: function(a) {
      this.z = a;
      return this;
    },
    setW: function(a) {
      this.w = a;
      return this;
    },
    setComponent: function(a, b) {
      switch (a) {
        case 0:
          this.x = b;
          break;
        case 1:
          this.y = b;
          break;
        case 2:
          this.z = b;
          break;
        case 3:
          this.w = b;
          break;
        default:
          throw Error("index is out of range: " + a);
      }
      return this;
    },
    getComponent: function(a) {
      switch (a) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw Error("index is out of range: " + a);
      }
    },
    clone: function() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    },
    copy: function(a) {
      this.x = a.x;
      this.y = a.y;
      this.z = a.z;
      this.w = void 0 !== a.w ? a.w : 1;
      return this;
    },
    add: function(a, b) {
      if (void 0 !== b)
        return (
          console.warn(
            "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
          ),
          this.addVectors(a, b)
        );
      this.x += a.x;
      this.y += a.y;
      this.z += a.z;
      this.w += a.w;
      return this;
    },
    addScalar: function(a) {
      this.x += a;
      this.y += a;
      this.z += a;
      this.w += a;
      return this;
    },
    addVectors: function(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      this.z = a.z + b.z;
      this.w = a.w + b.w;
      return this;
    },
    addScaledVector: function(a, b) {
      this.x += a.x * b;
      this.y += a.y * b;
      this.z += a.z * b;
      this.w += a.w * b;
      return this;
    },
    sub: function(a, b) {
      if (void 0 !== b)
        return (
          console.warn(
            "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
          ),
          this.subVectors(a, b)
        );
      this.x -= a.x;
      this.y -= a.y;
      this.z -= a.z;
      this.w -= a.w;
      return this;
    },
    subScalar: function(a) {
      this.x -= a;
      this.y -= a;
      this.z -= a;
      this.w -= a;
      return this;
    },
    subVectors: function(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      this.w = a.w - b.w;
      return this;
    },
    multiplyScalar: function(a) {
      this.x *= a;
      this.y *= a;
      this.z *= a;
      this.w *= a;
      return this;
    },
    applyMatrix4: function(a) {
      var b = this.x,
        c = this.y,
        d = this.z,
        e = this.w;
      a = a.elements;
      this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
      this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
      this.z = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
      this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
      return this;
    },
    divideScalar: function(a) {
      return this.multiplyScalar(1 / a);
    },
    setAxisAngleFromQuaternion: function(a) {
      this.w = 2 * Math.acos(a.w);
      var b = Math.sqrt(1 - a.w * a.w);
      1e-4 > b
        ? ((this.x = 1), (this.z = this.y = 0))
        : ((this.x = a.x / b), (this.y = a.y / b), (this.z = a.z / b));
      return this;
    },
    setAxisAngleFromRotationMatrix: function(a) {
      a = a.elements;
      var b = a[0];
      var c = a[4];
      var d = a[8],
        e = a[1],
        f = a[5],
        g = a[9];
      var h = a[2];
      var k = a[6];
      var m = a[10];
      if (
        0.01 > Math.abs(c - e) &&
        0.01 > Math.abs(d - h) &&
        0.01 > Math.abs(g - k)
      ) {
        if (
          0.1 > Math.abs(c + e) &&
          0.1 > Math.abs(d + h) &&
          0.1 > Math.abs(g + k) &&
          0.1 > Math.abs(b + f + m - 3)
        )
          return this.set(1, 0, 0, 0), this;
        a = Math.PI;
        b = (b + 1) / 2;
        f = (f + 1) / 2;
        m = (m + 1) / 2;
        c = (c + e) / 4;
        d = (d + h) / 4;
        g = (g + k) / 4;
        b > f && b > m
          ? 0.01 > b
            ? ((k = 0), (c = h = 0.707106781))
            : ((k = Math.sqrt(b)), (h = c / k), (c = d / k))
          : f > m
          ? 0.01 > f
            ? ((k = 0.707106781), (h = 0), (c = 0.707106781))
            : ((h = Math.sqrt(f)), (k = c / h), (c = g / h))
          : 0.01 > m
          ? ((h = k = 0.707106781), (c = 0))
          : ((c = Math.sqrt(m)), (k = d / c), (h = g / c));
        this.set(k, h, c, a);
        return this;
      }
      a = Math.sqrt((k - g) * (k - g) + (d - h) * (d - h) + (e - c) * (e - c));
      0.001 > Math.abs(a) && (a = 1);
      this.x = (k - g) / a;
      this.y = (d - h) / a;
      this.z = (e - c) / a;
      this.w = Math.acos((b + f + m - 1) / 2);
      return this;
    },
    min: function(a) {
      this.x = Math.min(this.x, a.x);
      this.y = Math.min(this.y, a.y);
      this.z = Math.min(this.z, a.z);
      this.w = Math.min(this.w, a.w);
      return this;
    },
    max: function(a) {
      this.x = Math.max(this.x, a.x);
      this.y = Math.max(this.y, a.y);
      this.z = Math.max(this.z, a.z);
      this.w = Math.max(this.w, a.w);
      return this;
    },
    clamp: function(a, b) {
      this.x = Math.max(a.x, Math.min(b.x, this.x));
      this.y = Math.max(a.y, Math.min(b.y, this.y));
      this.z = Math.max(a.z, Math.min(b.z, this.z));
      this.w = Math.max(a.w, Math.min(b.w, this.w));
      return this;
    },
    clampScalar: (function() {
      var a, b;
      return function(c, d) {
        void 0 === a && ((a = new Z()), (b = new Z()));
        a.set(c, c, c, c);
        b.set(d, d, d, d);
        return this.clamp(a, b);
      };
    })(),
    clampLength: function(a, b) {
      var c = this.length();
      return this.divideScalar(c || 1).multiplyScalar(
        Math.max(a, Math.min(b, c))
      );
    },
    floor: function() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      this.w = Math.floor(this.w);
      return this;
    },
    ceil: function() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      this.w = Math.ceil(this.w);
      return this;
    },
    round: function() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      this.w = Math.round(this.w);
      return this;
    },
    roundToZero: function() {
      this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
      this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
      this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
      this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w);
      return this;
    },
    negate: function() {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      this.w = -this.w;
      return this;
    },
    dot: function(a) {
      return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w;
    },
    lengthSq: function() {
      return (
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    },
    length: function() {
      return Math.sqrt(
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    },
    manhattanLength: function() {
      return (
        Math.abs(this.x) +
        Math.abs(this.y) +
        Math.abs(this.z) +
        Math.abs(this.w)
      );
    },
    normalize: function() {
      return this.divideScalar(this.length() || 1);
    },
    setLength: function(a) {
      return this.normalize().multiplyScalar(a);
    },
    lerp: function(a, b) {
      this.x += (a.x - this.x) * b;
      this.y += (a.y - this.y) * b;
      this.z += (a.z - this.z) * b;
      this.w += (a.w - this.w) * b;
      return this;
    },
    lerpVectors: function(a, b, c) {
      return this.subVectors(b, a)
        .multiplyScalar(c)
        .add(a);
    },
    equals: function(a) {
      return (
        a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w
      );
    },
    fromArray: function(a, b) {
      void 0 === b && (b = 0);
      this.x = a[b];
      this.y = a[b + 1];
      this.z = a[b + 2];
      this.w = a[b + 3];
      return this;
    },
    toArray: function(a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      a[b] = this.x;
      a[b + 1] = this.y;
      a[b + 2] = this.z;
      a[b + 3] = this.w;
      return a;
    },
    fromBufferAttribute: function(a, b, c) {
      void 0 !== c &&
        console.warn(
          "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
        );
      this.x = a.getX(b);
      this.y = a.getY(b);
      this.z = a.getZ(b);
      this.w = a.getW(b);
      return this;
    }
  });
  kb.prototype = Object.assign(Object.create(ia.prototype), {
    constructor: kb,
    isWebGLRenderTarget: !0,
    setSize: function(a, b) {
      if (this.width !== a || this.height !== b)
        (this.width = a), (this.height = b), this.dispose();
      this.viewport.set(0, 0, a, b);
      this.scissor.set(0, 0, a, b);
    },
    clone: function() {
      return new this.constructor().copy(this);
    },
    copy: function(a) {
      this.width = a.width;
      this.height = a.height;
      this.viewport.copy(a.viewport);
      this.texture = a.texture.clone();
      this.depthBuffer = a.depthBuffer;
      this.stencilBuffer = a.stencilBuffer;
      this.depthTexture = a.depthTexture;
      return this;
    },
    dispose: function() {
      this.dispatchEvent({ type: "dispose" });
    }
  });
  Jb.prototype = Object.create(kb.prototype);
  Jb.prototype.constructor = Jb;
  Jb.prototype.isWebGLRenderTargetCube = !0;
  lb.prototype = Object.create(W.prototype);
  lb.prototype.constructor = lb;
  lb.prototype.isDataTexture = !0;
  Object.assign(Wa.prototype, {
    isBox3: !0,
    set: function(a, b) {
      this.min.copy(a);
      this.max.copy(b);
      return this;
    },
    setFromArray: function(a) {
      for (
        var b = Infinity,
          c = Infinity,
          d = Infinity,
          e = -Infinity,
          f = -Infinity,
          g = -Infinity,
          h = 0,
          k = a.length;
        h < k;
        h += 3
      ) {
        var m = a[h],
          l = a[h + 1],
          n = a[h + 2];
        m < b && (b = m);
        l < c && (c = l);
        n < d && (d = n);
        m > e && (e = m);
        l > f && (f = l);
        n > g && (g = n);
      }
      this.min.set(b, c, d);
      this.max.set(e, f, g);
      return this;
    },
    setFromBufferAttribute: function(a) {
      for (
        var b = Infinity,
          c = Infinity,
          d = Infinity,
          e = -Infinity,
          f = -Infinity,
          g = -Infinity,
          h = 0,
          k = a.count;
        h < k;
        h++
      ) {
        var m = a.getX(h),
          l = a.getY(h),
          n = a.getZ(h);
        m < b && (b = m);
        l < c && (c = l);
        n < d && (d = n);
        m > e && (e = m);
        l > f && (f = l);
        n > g && (g = n);
      }
      this.min.set(b, c, d);
      this.max.set(e, f, g);
      return this;
    },
    setFromPoints: function(a) {
      this.makeEmpty();
      for (var b = 0, c = a.length; b < c; b++) this.expandByPoint(a[b]);
      return this;
    },
    setFromCenterAndSize: (function() {
      var a = new p();
      return function(b, c) {
        c = a.copy(c).multiplyScalar(0.5);
        this.min.copy(b).sub(c);
        this.max.copy(b).add(c);
        return this;
      };
    })(),
    setFromObject: function(a) {
      this.makeEmpty();
      return this.expandByObject(a);
    },
    clone: function() {
      return new this.constructor().copy(this);
    },
    copy: function(a) {
      this.min.copy(a.min);
      this.max.copy(a.max);
      return this;
    },
    makeEmpty: function() {
      this.min.x = this.min.y = this.min.z = Infinity;
      this.max.x = this.max.y = this.max.z = -Infinity;
      return this;
    },
    isEmpty: function() {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    },
    getCenter: function(a) {
      void 0 === a &&
        (console.warn("THREE.Box3: .getCenter() target is now required"),
        (a = new p()));
      return this.isEmpty()
        ? a.set(0, 0, 0)
        : a.addVectors(this.min, this.max).multiplyScalar(0.5);
    },
    getSize: function(a) {
      void 0 === a &&
        (console.warn("THREE.Box3: .getSize() target is now required"),
        (a = new p()));
      return this.isEmpty() ? a.set(0, 0, 0) : a.subVectors(this.max, this.min);
    },
    expandByPoint: function(a) {
      this.min.min(a);
      this.max.max(a);
      return this;
    },
    expandByVector: function(a) {
      this.min.sub(a);
      this.max.add(a);
      return this;
    },
    expandByScalar: function(a) {
      this.min.addScalar(-a);
      this.max.addScalar(a);
      return this;
    },
    expandByObject: (function() {
      function a(a) {
        var f = a.geometry;
        if (void 0 !== f)
          if (f.isGeometry)
            for (f = f.vertices, c = 0, d = f.length; c < d; c++)
              e.copy(f[c]), e.applyMatrix4(a.matrixWorld), b.expandByPoint(e);
          else if (
            f.isBufferGeometry &&
            ((f = f.attributes.position), void 0 !== f)
          )
            for (c = 0, d = f.count; c < d; c++)
              e.fromBufferAttribute(f, c).applyMatrix4(a.matrixWorld),
                b.expandByPoint(e);
      }
      var b,
        c,
        d,
        e = new p();
      return function(c) {
        b = this;
        c.updateMatrixWorld(!0);
        c.traverse(a);
        return this;
      };
    })(),
    containsPoint: function(a) {
      return a.x < this.min.x ||
        a.x > this.max.x ||
        a.y < this.min.y ||
        a.y > this.max.y ||
        a.z < this.min.z ||
        a.z > this.max.z
        ? !1
        : !0;
    },
    containsBox: function(a) {
      return (
        this.min.x <= a.min.x &&
        a.max.x <= this.max.x &&
        this.min.y <= a.min.y &&
        a.max.y <= this.max.y &&
        this.min.z <= a.min.z &&
        a.max.z <= this.max.z
      );
    },
    getParameter: function(a, b) {
      void 0 === b &&
        (console.warn("THREE.Box3: .getParameter() target is now required"),
        (b = new p()));
      return b.set(
        (a.x - this.min.x) / (this.max.x - this.min.x),
        (a.y - this.min.y) / (this.max.y - this.min.y),
        (a.z - this.min.z) / (this.max.z - this.min.z)
      );
    },
    intersectsBox: function(a) {
      return a.max.x < this.min.x ||
        a.min.x > this.max.x ||
        a.max.y < this.min.y ||
        a.min.y > this.max.y ||
        a.max.z < this.min.z ||
        a.min.z > this.max.z
        ? !1
        : !0;
    },
    intersectsSphere: (function() {
      var a = new p();
      return function(b) {
        this.clampPoint(b.center, a);
        return a.distanceToSquared(b.center) <= b.radius * b.radius;
      };
    })(),
    intersectsPlane: function(a) {
      if (0 < a.normal.x) {
        var b = a.normal.x * this.min.x;
        var c = a.normal.x * this.max.x;
      } else (b = a.normal.x * this.max.x), (c = a.normal.x * this.min.x);
      0 < a.normal.y
        ? ((b += a.normal.y * this.min.y), (c += a.normal.y * this.max.y))
        : ((b += a.normal.y * this.max.y), (c += a.normal.y * this.min.y));
      0 < a.normal.z
        ? ((b += a.normal.z * this.min.z), (c += a.normal.z * this.max.z))
        : ((b += a.normal.z * this.max.z), (c += a.normal.z * this.min.z));
      return b <= -a.constant && c >= -a.constant;
    },
    intersectsTriangle: (function() {
      function a(a) {
        var e;
        var f = 0;
        for (e = a.length - 3; f <= e; f += 3) {
          h.fromArray(a, f);
          var g =
              m.x * Math.abs(h.x) + m.y * Math.abs(h.y) + m.z * Math.abs(h.z),
            k = b.dot(h),
            l = c.dot(h),
            q = d.dot(h);
          if (Math.max(-Math.max(k, l, q), Math.min(k, l, q)) > g) return !1;
        }
        return !0;
      }
      var b = new p(),
        c = new p(),
        d = new p(),
        e = new p(),
        f = new p(),
        g = new p(),
        h = new p(),
        k = new p(),
        m = new p(),
        l = new p();
      return function(h) {
        if (this.isEmpty()) return !1;
        this.getCenter(k);
        m.subVectors(this.max, k);
        b.subVectors(h.a, k);
        c.subVectors(h.b, k);
        d.subVectors(h.c, k);
        e.subVectors(c, b);
        f.subVectors(d, c);
        g.subVectors(b, d);
        h = [
          0,
          -e.z,
          e.y,
          0,
          -f.z,
          f.y,
          0,
          -g.z,
          g.y,
          e.z,
          0,
          -e.x,
          f.z,
          0,
          -f.x,
          g.z,
          0,
          -g.x,
          -e.y,
          e.x,
          0,
          -f.y,
          f.x,
          0,
          -g.y,
          g.x,
          0
        ];
        if (!a(h)) return !1;
        h = [1, 0, 0, 0, 1, 0, 0, 0, 1];
        if (!a(h)) return !1;
        l.crossVectors(e, f);
        h = [l.x, l.y, l.z];
        return a(h);
      };
    })(),
    clampPoint: function(a, b) {
      void 0 === b &&
        (console.warn("THREE.Box3: .clampPoint() target is now required"),
        (b = new p()));
      return b.copy(a).clamp(this.min, this.max);
    },
    distanceToPoint: (function() {
      var a = new p();
      return function(b) {
        return a
          .copy(b)
          .clamp(this.min, this.max)
          .sub(b)
          .length();
      };
    })(),
    getBoundingSphere: (function() {
      var a = new p();
      return function(b) {
        void 0 === b &&
          (console.warn(
            "THREE.Box3: .getBoundingSphere() target is now required"
          ),
          (b = new Ga()));
        this.getCenter(b.center);
        b.radius = 0.5 * this.getSize(a).length();
        return b;
      };
    })(),
    intersect: function(a) {
      this.min.max(a.min);
      this.max.min(a.max);
      this.isEmpty() && this.makeEmpty();
      return this;
    },
    union: function(a) {
      this.min.min(a.min);
      this.max.max(a.max);
      return this;
    },
    applyMatrix4: (function() {
      var a = [
        new p(),
        new p(),
        new p(),
        new p(),
        new p(),
        new p(),
        new p(),
        new p()
      ];
      return function(b) {
        if (this.isEmpty()) return this;
        a[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(b);
        a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b);
        a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b);
        a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b);
        a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(b);
        a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b);
        a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(b);
        a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b);
        this.setFromPoints(a);
        return this;
      };
    })(),
    translate: function(a) {
      this.min.add(a);
      this.max.add(a);
      return this;
    },
    equals: function(a) {
      return a.min.equals(this.min) && a.max.equals(this.max);
    }
  });
  Object.assign(Ga.prototype, {
    set: function(a, b) {
      this.center.copy(a);
      this.radius = b;
      return this;
    },
    setFromPoints: (function() {
      var a = new Wa();
      return function(b, c) {
        var d = this.center;
        void 0 !== c ? d.copy(c) : a.setFromPoints(b).getCenter(d);
        for (var e = (c = 0), f = b.length; e < f; e++)
          c = Math.max(c, d.distanceToSquared(b[e]));
        this.radius = Math.sqrt(c);
        return this;
      };
    })(),
    clone: function() {
      return new this.constructor().copy(this);
    },
    copy: function(a) {
      this.center.copy(a.center);
      this.radius = a.radius;
      return this;
    },
    empty: function() {
      return 0 >= this.radius;
    },
    containsPoint: function(a) {
      return a.distanceToSquared(this.center) <= this.radius * this.radius;
    },
    distanceToPoint: function(a) {
      return a.distanceTo(this.center) - this.radius;
    },
    intersectsSphere: function(a) {
      var b = this.radius + a.radius;
      return a.center.distanceToSquared(this.center) <= b * b;
    },
    intersectsBox: function(a) {
      return a.intersectsSphere(this);
    },
    intersectsPlane: function(a) {
      return Math.abs(a.distanceToPoint(this.center)) <= this.radius;
    },
    clampPoint: function(a, b) {
      var c = this.center.distanceToSquared(a);
      void 0 === b &&
        (console.warn("THREE.Sphere: .clampPoint() target is now required"),
        (b = new p()));
      b.copy(a);
      c > this.radius * this.radius &&
        (b.sub(this.center).normalize(),
        b.multiplyScalar(this.radius).add(this.center));
      return b;
    },
    getBoundingBox: function(a) {
      void 0 === a &&
        (console.warn("THREE.Sphere: .getBoundingBox() target is now required"),
        (a = new Wa()));
      a.set(this.center, this.center);
      a.expandByScalar(this.radius);
      return a;
    },
    applyMatrix4: function(a) {
      this.center.applyMatrix4(a);
      this.radius *= a.getMaxScaleOnAxis();
      return this;
    },
    translate: function(a) {
      this.center.add(a);
      return this;
    },
    equals: function(a) {
      return a.center.equals(this.center) && a.radius === this.radius;
    }
  });
  Object.assign(Pa.prototype, {
    set: function(a, b) {
      this.normal.copy(a);
      this.constant = b;
      return this;
    },
    setComponents: function(a, b, c, d) {
      this.normal.set(a, b, c);
      this.constant = d;
      return this;
    },
    setFromNormalAndCoplanarPoint: function(a, b) {
      this.normal.copy(a);
      this.constant = -b.dot(this.normal);
      return this;
    },
    setFromCoplanarPoints: (function() {
      var a = new p(),
        b = new p();
      return function(c, d, e) {
        d = a
          .subVectors(e, d)
          .cross(b.subVectors(c, d))
          .normalize();
        this.setFromNormalAndCoplanarPoint(d, c);
        return this;
      };
    })(),
    clone: function() {
      return new this.constructor().copy(this);
    },
    copy: function(a) {
      this.normal.copy(a.normal);
      this.constant = a.constant;
      return this;
    },
    normalize: function() {
      var a = 1 / this.normal.length();
      this.normal.multiplyScalar(a);
      this.constant *= a;
      return this;
    },
    negate: function() {
      this.constant *= -1;
      this.normal.negate();
      return this;
    },
    distanceToPoint: function(a) {
      return this.normal.dot(a) + this.constant;
    },
    distanceToSphere: function(a) {
      return this.distanceToPoint(a.center) - a.radius;
    },
    projectPoint: function(a, b) {
      void 0 === b &&
        (console.warn("THREE.Plane: .projectPoint() target is now required"),
        (b = new p()));
      return b
        .copy(this.normal)
        .multiplyScalar(-this.distanceToPoint(a))
        .add(a);
    },
    intersectLine: (function() {
      var a = new p();
      return function(b, c) {
        void 0 === c &&
          (console.warn("THREE.Plane: .intersectLine() target is now required"),
          (c = new p()));
        var d = b.delta(a),
          e = this.normal.dot(d);
        if (0 === e) {
          if (0 === this.distanceToPoint(b.start)) return c.copy(b.start);
        } else if (
          ((e = -(b.start.dot(this.normal) + this.constant) / e),
          !(0 > e || 1 < e))
        )
          return c
            .copy(d)
            .multiplyScalar(e)
            .add(b.start);
      };
    })(),
    intersectsLine: function(a) {
      var b = this.distanceToPoint(a.start);
      a = this.distanceToPoint(a.end);
      return (0 > b && 0 < a) || (0 > a && 0 < b);
    },
    intersectsBox: function(a) {
      return a.intersectsPlane(this);
    },
    intersectsSphere: function(a) {
      return a.intersectsPlane(this);
    },
    coplanarPoint: function(a) {
      void 0 === a &&
        (console.warn("THREE.Plane: .coplanarPoint() target is now required"),
        (a = new p()));
      return a.copy(this.normal).multiplyScalar(-this.constant);
    },
    applyMatrix4: (function() {
      var a = new p(),
        b = new da();
      return function(c, d) {
        d = d || b.getNormalMatrix(c);
        c = this.coplanarPoint(a).applyMatrix4(c);
        d = this.normal.applyMatrix3(d).normalize();
        this.constant = -c.dot(d);
        return this;
      };
    })(),
    translate: function(a) {
      this.constant -= a.dot(this.normal);
      return this;
    },
    equals: function(a) {
      return a.normal.equals(this.normal) && a.constant === this.constant;
    }
  });
  Object.assign(rd.prototype, {
    set: function(a, b, c, d, e, f) {
      var g = this.planes;
      g[0].copy(a);
      g[1].copy(b);
      g[2].copy(c);
      g[3].copy(d);
      g[4].copy(e);
      g[5].copy(f);
      return this;
    },
    clone: function() {
      return new this.constructor().copy(this);
    },
    copy: function(a) {
      for (var b = this.planes, c = 0; 6 > c; c++) b[c].copy(a.planes[c]);
      return this;
    },
    setFromMatrix: function(a) {
      var b = this.planes,
        c = a.elements;
      a = c[0];
      var d = c[1],
        e = c[2],
        f = c[3],
        g = c[4],
        h = c[5],
        k = c[6],
        m = c[7],
        l = c[8],
        n = c[9],
        r = c[10],
        p = c[11],
        t = c[12],
        u = c[13],
        w = c[14];
      c = c[15];
      b[0].setComponents(f - a, m - g, p - l, c - t).normalize();
      b[1].setComponents(f + a, m + g, p + l, c + t).normalize();
      b[2].setComponents(f + d, m + h, p + n, c + u).normalize();
      b[3].setComponents(f - d, m - h, p - n, c - u).normalize();
      b[4].setComponents(f - e, m - k, p - r, c - w).normalize();
      b[5].setComponents(f + e, m + k, p + r, c + w).normalize();
      return this;
    },
    intersectsObject: (function() {
      var a = new Ga();
      return function(b) {
        var c = b.geometry;
        null === c.boundingSphere && c.computeBoundingSphere();
        a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld);
        return this.intersectsSphere(a);
      };
    })(),
    intersectsSprite: (function() {
      var a = new Ga();
      return function(b) {
        a.center.set(0, 0, 0);
        a.radius = 0.7071067811865476;
        a.applyMatrix4(b.matrixWorld);
        return this.intersectsSphere(a);
      };
    })(),
    intersectsSphere: function(a) {
      var b = this.planes,
        c = a.center;
      a = -a.radius;
      for (var d = 0; 6 > d; d++) if (b[d].distanceToPoint(c) < a) return !1;
      return !0;
    },
    intersectsBox: (function() {
      var a = new p();
      return function(b) {
        for (var c = this.planes, d = 0; 6 > d; d++) {
          var e = c[d];
          a.x = 0 < e.normal.x ? b.max.x : b.min.x;
          a.y = 0 < e.normal.y ? b.max.y : b.min.y;
          a.z = 0 < e.normal.z ? b.max.z : b.min.z;
          if (0 > e.distanceToPoint(a)) return !1;
        }
        return !0;
      };
    })(),
    containsPoint: function(a) {
      for (var b = this.planes, c = 0; 6 > c; c++)
        if (0 > b[c].distanceToPoint(a)) return !1;
      return !0;
    }
  });
  var K = {
      alphamap_fragment:
        "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
      alphamap_pars_fragment:
        "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
      alphatest_fragment:
        "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
      aomap_fragment:
        "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
      aomap_pars_fragment:
        "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
      begin_vertex: "\nvec3 transformed = vec3( position );\n",
      beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
      bsdfs:
        "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
      bumpmap_pars_fragment:
        "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
      clipping_planes_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif\n",
      clipping_planes_pars_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
      clipping_planes_pars_vertex:
        "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif\n",
      clipping_planes_vertex:
        "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
      color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
      color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
      color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
      color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
      common:
        "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
      cube_uv_reflection_fragment:
        "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
      defaultnormal_vertex:
        "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",
      displacementmap_pars_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
      displacementmap_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
      emissivemap_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
      emissivemap_pars_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
      encodings_fragment:
        "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
      encodings_pars_fragment:
        "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}\n",
      envmap_fragment:
        "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
      envmap_pars_fragment:
        "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
      envmap_pars_vertex:
        "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
      envmap_physical_pars_fragment:
        "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
      envmap_vertex:
        "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
      fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif\n",
      fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif\n",
      fog_fragment:
        "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
      fog_pars_fragment:
        "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
      gradientmap_pars_fragment:
        "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
      lightmap_fragment:
        "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
      lightmap_pars_fragment:
        "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
      lights_lambert_vertex:
        "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
      lights_pars_begin:
        "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n",
      lights_phong_fragment:
        "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
      lights_phong_pars_fragment:
        "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
      lights_physical_fragment:
        "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
      lights_physical_pars_fragment:
        "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
      lights_fragment_begin:
        "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif\n",
      lights_fragment_maps:
        "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif\n",
      lights_fragment_end:
        "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
      logdepthbuf_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
      logdepthbuf_pars_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif\n",
      logdepthbuf_pars_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif\n",
      logdepthbuf_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",
      map_fragment:
        "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
      map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
      map_particle_fragment:
        "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
      map_particle_pars_fragment:
        "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",
      metalnessmap_fragment:
        "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
      metalnessmap_pars_fragment:
        "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
      morphnormal_vertex:
        "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
      morphtarget_pars_vertex:
        "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
      morphtarget_vertex:
        "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
      normal_fragment_begin:
        "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n",
      normal_fragment_maps:
        "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
      normalmap_pars_fragment:
        "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif\n",
      packing:
        "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
      premultiplied_alpha_fragment:
        "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
      project_vertex:
        "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
      dithering_fragment:
        "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
      dithering_pars_fragment:
        "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
      roughnessmap_fragment:
        "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
      roughnessmap_pars_fragment:
        "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
      shadowmap_pars_fragment:
        "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
      shadowmap_pars_vertex:
        "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
      shadowmap_vertex:
        "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
      shadowmask_pars_fragment:
        "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
      skinbase_vertex:
        "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
      skinning_pars_vertex:
        "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
      skinning_vertex:
        "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
      skinnormal_vertex:
        "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
      specularmap_fragment:
        "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
      specularmap_pars_fragment:
        "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
      tonemapping_fragment:
        "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
      tonemapping_pars_fragment:
        "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
      uv_pars_fragment:
        "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
      uv_pars_vertex:
        "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
      uv_vertex:
        "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
      uv2_pars_fragment:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
      uv2_pars_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
      uv2_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
      worldpos_vertex:
        "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
      background_frag:
        "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n}\n",
      background_vert:
        "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position, 1.0 );\n\tgl_Position.z = 1.0;\n}\n",
      cube_frag:
        "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
      cube_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",
      depth_frag:
        "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
      depth_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
      distanceRGBA_frag:
        "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
      distanceRGBA_vert:
        "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
      equirect_frag:
        "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
      equirect_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
      linedashed_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      linedashed_vert:
        "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
      meshbasic_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      meshbasic_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
      meshlambert_frag:
        "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
      meshlambert_vert:
        "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      meshmatcap_frag:
        "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\tvec4 matcapColor = texture2D( matcap, uv );\n\tmatcapColor = matcapTexelToLinear( matcapColor );\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      meshmatcap_vert:
        "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}\n",
      meshphong_frag:
        "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
      meshphong_vert:
        "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      meshphysical_frag:
        "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
      meshphysical_vert:
        "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      normal_frag:
        "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
      normal_vert:
        "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
      points_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      points_vert:
        "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}\n",
      shadow_frag:
        "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",
      shadow_vert:
        "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
      sprite_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
      sprite_vert:
        "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n"
    },
    va = {
      merge: function(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
          var d = this.clone(a[c]),
            e;
          for (e in d) b[e] = d[e];
        }
        return b;
      },
      clone: function(a) {
        var b = {},
          c;
        for (c in a) {
          b[c] = {};
          for (var d in a[c]) {
            var e = a[c][d];
            e &&
            (e.isColor ||
              e.isMatrix3 ||
              e.isMatrix4 ||
              e.isVector2 ||
              e.isVector3 ||
              e.isVector4 ||
              e.isTexture)
              ? (b[c][d] = e.clone())
              : Array.isArray(e)
              ? (b[c][d] = e.slice())
              : (b[c][d] = e);
          }
        }
        return b;
      }
    },
    $g = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    };
  Object.assign(G.prototype, {
    isColor: !0,
    r: 1,
    g: 1,
    b: 1,
    set: function(a) {
      a && a.isColor
        ? this.copy(a)
        : "number" === typeof a
        ? this.setHex(a)
        : "string" === typeof a && this.setStyle(a);
      return this;
    },
    setScalar: function(a) {
      this.b = this.g = this.r = a;
      return this;
    },
    setHex: function(a) {
      a = Math.floor(a);
      this.r = ((a >> 16) & 255) / 255;
      this.g = ((a >> 8) & 255) / 255;
      this.b = (a & 255) / 255;
      return this;
    },
    setRGB: function(a, b, c) {
      this.r = a;
      this.g = b;
      this.b = c;
      return this;
    },
    setHSL: (function() {
      function a(a, c, d) {
        0 > d && (d += 1);
        1 < d && --d;
        return d < 1 / 6
          ? a + 6 * (c - a) * d
          : 0.5 > d
          ? c
          : d < 2 / 3
          ? a + 6 * (c - a) * (2 / 3 - d)
          : a;
      }
      return function(b, c, d) {
        b = R.euclideanModulo(b, 1);
        c = R.clamp(c, 0, 1);
        d = R.clamp(d, 0, 1);
        0 === c
          ? (this.r = this.g = this.b = d)
          : ((c = 0.5 >= d ? d * (1 + c) : d + c - d * c),
            (d = 2 * d - c),
            (this.r = a(d, c, b + 1 / 3)),
            (this.g = a(d, c, b)),
            (this.b = a(d, c, b - 1 / 3)));
        return this;
      };
    })(),
    setStyle: function(a) {
      function b(b) {
        void 0 !== b &&
          1 > parseFloat(b) &&
          console.warn(
            "THREE.Color: Alpha component of " + a + " will be ignored."
          );
      }
      var c;
      if ((c = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a))) {
        var d = c[2];
        switch (c[1]) {
          case "rgb":
          case "rgba":
            if (
              (c = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                d
              ))
            )
              return (
                (this.r = Math.min(255, parseInt(c[1], 10)) / 255),
                (this.g = Math.min(255, parseInt(c[2], 10)) / 255),
                (this.b = Math.min(255, parseInt(c[3], 10)) / 255),
                b(c[5]),
                this
              );
            if (
              (c = /^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                d
              ))
            )
              return (
                (this.r = Math.min(100, parseInt(c[1], 10)) / 100),
                (this.g = Math.min(100, parseInt(c[2], 10)) / 100),
                (this.b = Math.min(100, parseInt(c[3], 10)) / 100),
                b(c[5]),
                this
              );
            break;
          case "hsl":
          case "hsla":
            if (
              (c = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                d
              ))
            ) {
              d = parseFloat(c[1]) / 360;
              var e = parseInt(c[2], 10) / 100,
                f = parseInt(c[3], 10) / 100;
              b(c[5]);
              return this.setHSL(d, e, f);
            }
        }
      } else if ((c = /^#([A-Fa-f0-9]+)$/.exec(a))) {
        c = c[1];
        d = c.length;
        if (3 === d)
          return (
            (this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255),
            (this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255),
            (this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255),
            this
          );
        if (6 === d)
          return (
            (this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255),
            (this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255),
            (this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255),
            this
          );
      }
      a &&
        0 < a.length &&
        ((c = $g[a]),
        void 0 !== c
          ? this.setHex(c)
          : console.warn("THREE.Color: Unknown color " + a));
      return this;
    },
    clone: function() {
      return new this.constructor(this.r, this.g, this.b);
    },
    copy: function(a) {
      this.r = a.r;
      this.g = a.g;
      this.b = a.b;
      return this;
    },
    copyGammaToLinear: function(a, b) {
      void 0 === b && (b = 2);
      this.r = Math.pow(a.r, b);
      this.g = Math.pow(a.g, b);
      this.b = Math.pow(a.b, b);
      return this;
    },
    copyLinearToGamma: function(a, b) {
      void 0 === b && (b = 2);
      b = 0 < b ? 1 / b : 1;
      this.r = Math.pow(a.r, b);
      this.g = Math.pow(a.g, b);
      this.b = Math.pow(a.b, b);
      return this;
    },
    convertGammaToLinear: function(a) {
      this.copyGammaToLinear(this, a);
      return this;
    },
    convertLinearToGamma: function(a) {
      this.copyLinearToGamma(this, a);
      return this;
    },
    copySRGBToLinear: (function() {
      function a(a) {
        return 0.04045 > a
          ? 0.0773993808 * a
          : Math.pow(0.9478672986 * a + 0.0521327014, 2.4);
      }
      return function(b) {
        this.r = a(b.r);
        this.g = a(b.g);
        this.b = a(b.b);
        return this;
      };
    })(),
    copyLinearToSRGB: (function() {
      function a(a) {
        return 0.0031308 > a ? 12.92 * a : 1.055 * Math.pow(a, 0.41666) - 0.055;
      }
      return function(b) {
        this.r = a(b.r);
        this.g = a(b.g);
        this.b = a(b.b);
        return this;
      };
    })(),
    convertSRGBToLinear: function() {
      this.copySRGBToLinear(this);
      return this;
    },
    convertLinearToSRGB: function() {
      this.copyLinearToSRGB(this);
      return this;
    },
    getHex: function() {
      return (
        ((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ ((255 * this.b) << 0)
      );
    },
    getHexString: function() {
      return ("000000" + this.getHex().toString(16)).slice(-6);
    },
    getHSL: function(a) {
      void 0 === a &&
        (console.warn("THREE.Color: .getHSL() target is now required"),
        (a = { h: 0, s: 0, l: 0 }));
      var b = this.r,
        c = this.g,
        d = this.b,
        e = Math.max(b, c, d),
        f = Math.min(b, c, d),
        g,
        h = (f + e) / 2;
      if (f === e) f = g = 0;
      else {
        var k = e - f;
        f = 0.5 >= h ? k / (e + f) : k / (2 - e - f);
        switch (e) {
          case b:
            g = (c - d) / k + (c < d ? 6 : 0);
            break;
          case c:
            g = (d - b) / k + 2;
            break;
          case d:
            g = (b - c) / k + 4;
        }
        g /= 6;
      }
      a.h = g;
      a.s = f;
      a.l = h;
      return a;
    },
    getStyle: function() {
      return (
        "rgb(" +
        ((255 * this.r) | 0) +
        "," +
        ((255 * this.g) | 0) +
        "," +
        ((255 * this.b) | 0) +
        ")"
      );
    },
    offsetHSL: (function() {
      var a = {};
      return function(b, c, d) {
        this.getHSL(a);
        a.h += b;
        a.s += c;
        a.l += d;
        this.setHSL(a.h, a.s, a.l);
        return this;
      };
    })(),
    add: function(a) {
      this.r += a.r;
      this.g += a.g;
      this.b += a.b;
      return this;
    },
    addColors: function(a, b) {
      this.r = a.r + b.r;
      this.g = a.g + b.g;
      this.b = a.b + b.b;
      return this;
    },
    addScalar: function(a) {
      this.r += a;
      this.g += a;
      this.b += a;
      return this;
    },
    sub: function(a) {
      this.r = Math.max(0, this.r - a.r);
      this.g = Math.max(0, this.g - a.g);
      this.b = Math.max(0, this.b - a.b);
      return this;
    },
    multiply: function(a) {
      this.r *= a.r;
      this.g *= a.g;
      this.b *= a.b;
      return this;
    },
    multiplyScalar: function(a) {
      this.r *= a;
      this.g *= a;
      this.b *= a;
      return this;
    },
    lerp: function(a, b) {
      this.r += (a.r - this.r) * b;
      this.g += (a.g - this.g) * b;
      this.b += (a.b - this.b) * b;
      return this;
    },
    lerpHSL: (function() {
      var a = { h: 0, s: 0, l: 0 },
        b = { h: 0, s: 0, l: 0 };
      return function(c, d) {
        this.getHSL(a);
        c.getHSL(b);
        c = R.lerp(a.h, b.h, d);
        var e = R.lerp(a.s, b.s, d);
        d = R.lerp(a.l, b.l, d);
        this.setHSL(c, e, d);
        return this;
      };
    })(),
    equals: function(a) {
      return a.r === this.r && a.g === this.g && a.b === this.b;
    },
    fromArray: function(a, b) {
      void 0 === b && (b = 0);
      this.r = a[b];
      this.g = a[b + 1];
      this.b = a[b + 2];
      return this;
    },
    toArray: function(a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      a[b] = this.r;
      a[b + 1] = this.g;
      a[b + 2] = this.b;
      return a;
    },
    toJSON: function() {
      return this.getHex();
    }
  });
  var J = {
      common: {
        diffuse: { value: new G(15658734) },
        opacity: { value: 1 },
        map: { value: null },
        uvTransform: { value: new da() },
        alphaMap: { value: null }
      },
      specularmap: { specularMap: { value: null } },
      envmap: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        reflectivity: { value: 1 },
        refractionRatio: { value: 0.98 },
        maxMipLevel: { value: 0 }
      },
      aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
      lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
      emissivemap: { emissiveMap: { value: null } },
      bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
      normalmap: {
        normalMap: { value: null },
        normalScale: { value: new z(1, 1) }
      },
      displacementmap: {
        displacementMap: { value: null },
        displacementScale: { value: 1 },
        displacementBias: { value: 0 }
      },
      roughnessmap: { roughnessMap: { value: null } },
      metalnessmap: { metalnessMap: { value: null } },
      gradientmap: { gradientMap: { value: null } },
      fog: {
        fogDensity: { value: 2.5e-4 },
        fogNear: { value: 1 },
        fogFar: { value: 2e3 },
        fogColor: { value: new G(16777215) }
      },
      lights: {
        ambientLightColor: { value: [] },
        directionalLights: {
          value: [],
          properties: {
            direction: {},
            color: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        directionalShadowMap: { value: [] },
        directionalShadowMatrix: { value: [] },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {}
          }
        },
        spotShadowMap: { value: [] },
        spotShadowMatrix: { value: [] },
        pointLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            decay: {},
            distance: {},
            shadow: {},
            shadowBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {}
          }
        },
        pointShadowMap: { value: [] },
        pointShadowMatrix: { value: [] },
        hemisphereLights: {
          value: [],
          properties: { direction: {}, skyColor: {}, groundColor: {} }
        },
        rectAreaLights: {
          value: [],
          properties: { color: {}, position: {}, width: {}, height: {} }
        }
      },
      points: {
        diffuse: { value: new G(15658734) },
        opacity: { value: 1 },
        size: { value: 1 },
        scale: { value: 1 },
        map: { value: null },
        uvTransform: { value: new da() }
      },
      sprite: {
        diffuse: { value: new G(15658734) },
        opacity: { value: 1 },
        center: { value: new z(0.5, 0.5) },
        rotation: { value: 0 },
        map: { value: null },
        uvTransform: { value: new da() }
      }
    },
    Qa = {
      basic: {
        uniforms: va.merge([
          J.common,
          J.specularmap,
          J.envmap,
          J.aomap,
          J.lightmap,
          J.fog
        ]),
        vertexShader: K.meshbasic_vert,
        fragmentShader: K.meshbasic_frag
      },
      lambert: {
        uniforms: va.merge([
          J.common,
          J.specularmap,
          J.envmap,
          J.aomap,
          J.lightmap,
          J.emissivemap,
          J.fog,
          J.lights,
          { emissive: { value: new G(0) } }
        ]),
        vertexShader: K.meshlambert_vert,
        fragmentShader: K.meshlambert_frag
      },
      phong: {
        uniforms: va.merge([
          J.common,
          J.specularmap,
          J.envmap,
          J.aomap,
          J.lightmap,
          J.emissivemap,
          J.bumpmap,
          J.normalmap,
          J.displacementmap,
          J.gradientmap,
          J.fog,
          J.lights,
          {
            emissive: { value: new G(0) },
            specular: { value: new G(1118481) },
            shininess: { value: 30 }
          }
        ]),
        vertexShader: K.meshphong_vert,
        fragmentShader: K.meshphong_frag
      },
      standard: {
        uniforms: va.merge([
          J.common,
          J.envmap,
          J.aomap,
          J.lightmap,
          J.emissivemap,
          J.bumpmap,
          J.normalmap,
          J.displacementmap,
          J.roughnessmap,
          J.metalnessmap,
          J.fog,
          J.lights,
          {
            emissive: { value: new G(0) },
            roughness: { value: 0.5 },
            metalness: { value: 0.5 },
            envMapIntensity: { value: 1 }
          }
        ]),
        vertexShader: K.meshphysical_vert,
        fragmentShader: K.meshphysical_frag
      },
      matcap: {
        uniforms: va.merge([
          J.common,
          J.bumpmap,
          J.normalmap,
          J.displacementmap,
          J.fog,
          { matcap: { value: null } }
        ]),
        vertexShader: K.meshmatcap_vert,
        fragmentShader: K.meshmatcap_frag
      },
      points: {
        uniforms: va.merge([J.points, J.fog]),
        vertexShader: K.points_vert,
        fragmentShader: K.points_frag
      },
      dashed: {
        uniforms: va.merge([
          J.common,
          J.fog,
          {
            scale: { value: 1 },
            dashSize: { value: 1 },
            totalSize: { value: 2 }
          }
        ]),
        vertexShader: K.linedashed_vert,
        fragmentShader: K.linedashed_frag
      },
      depth: {
        uniforms: va.merge([J.common, J.displacementmap]),
        vertexShader: K.depth_vert,
        fragmentShader: K.depth_frag
      },
      normal: {
        uniforms: va.merge([
          J.common,
          J.bumpmap,
          J.normalmap,
          J.displacementmap,
          { opacity: { value: 1 } }
        ]),
        vertexShader: K.normal_vert,
        fragmentShader: K.normal_frag
      },
      sprite: {
        uniforms: va.merge([J.sprite, J.fog]),
        vertexShader: K.sprite_vert,
        fragmentShader: K.sprite_frag
      },
      background: {
        uniforms: { uvTransform: { value: new da() }, t2D: { value: null } },
        vertexShader: K.background_vert,
        fragmentShader: K.background_frag
      },
      cube: {
        uniforms: {
          tCube: { value: null },
          tFlip: { value: -1 },
          opacity: { value: 1 }
        },
        vertexShader: K.cube_vert,
        fragmentShader: K.cube_frag
      },
      equirect: {
        uniforms: { tEquirect: { value: null } },
        vertexShader: K.equirect_vert,
        fragmentShader: K.equirect_frag
      },
      distanceRGBA: {
        uniforms: va.merge([
          J.common,
          J.displacementmap,
          {
            referencePosition: { value: new p() },
            nearDistance: { value: 1 },
            farDistance: { value: 1e3 }
          }
        ]),
        vertexShader: K.distanceRGBA_vert,
        fragmentShader: K.distanceRGBA_frag
      },
      shadow: {
        uniforms: va.merge([
          J.lights,
          J.fog,
          { color: { value: new G(0) }, opacity: { value: 1 } }
        ]),
        vertexShader: K.shadow_vert,
        fragmentShader: K.shadow_frag
      }
    };
  Qa.physical = {
    uniforms: va.merge([
      Qa.standard.uniforms,
      { clearCoat: { value: 0 }, clearCoatRoughness: { value: 0 } }
    ]),
    vertexShader: K.meshphysical_vert,
    fragmentShader: K.meshphysical_frag
  };
  Object.assign(Xa.prototype, {
    clone: function() {
      return new this.constructor().copy(this);
    },
    copy: function(a) {
      this.a = a.a;
      this.b = a.b;
      this.c = a.c;
      this.normal.copy(a.normal);
      this.color.copy(a.color);
      this.materialIndex = a.materialIndex;
      for (var b = 0, c = a.vertexNormals.length; b < c; b++)
        this.vertexNormals[b] = a.vertexNormals[b].clone();
      b = 0;
      for (c = a.vertexColors.length; b < c; b++)
        this.vertexColors[b] = a.vertexColors[b].clone();
      return this;
    }
  });
  mb.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
  mb.DefaultOrder = "XYZ";
  Object.defineProperties(mb.prototype, {
    x: {
      get: function() {
        return this._x;
      },
      set: function(a) {
        this._x = a;
        this.onChangeCallback();
      }
    },
    y: {
      get: function() {
        return this._y;
      },
      set: function(a) {
        this._y = a;
        this.onChangeCallback();
      }
    },
    z: {
      get: function() {
        return this._z;
      },
      set: function(a) {
        this._z = a;
        this.onChangeCallback();
      }
    },
    order: {
      get: function() {
        return this._order;
      },
      set: function(a) {
        this._order = a;
        this.onChangeCallback();
      }
    }
  });
  Object.assign(mb.prototype, {
    isEuler: !0,
    set: function(a, b, c, d) {
      this._x = a;
      this._y = b;
      this._z = c;
      this._order = d || this._order;
      this.onChangeCallback();
      return this;
    },
    clone: function() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    },
    copy: function(a) {
      this._x = a._x;
      this._y = a._y;
      this._z = a._z;
      this._order = a._order;
      this.onChangeCallback();
      return this;
    },
    setFromRotationMatrix: function(a, b, c) {
      var d = R.clamp,
        e = a.elements;
      a = e[0];
      var f = e[4],
        g = e[8],
        h = e[1],
        k = e[5],
        m = e[9],
        l = e[2],
        n = e[6];
      e = e[10];
      b = b || this._order;
      "XYZ" === b
        ? ((this._y = Math.asin(d(g, -1, 1))),
          0.99999 > Math.abs(g)
            ? ((this._x = Math.atan2(-m, e)), (this._z = Math.atan2(-f, a)))
            : ((this._x = Math.atan2(n, k)), (this._z = 0)))
        : "YXZ" === b
        ? ((this._x = Math.asin(-d(m, -1, 1))),
          0.99999 > Math.abs(m)
            ? ((this._y = Math.atan2(g, e)), (this._z = Math.atan2(h, k)))
            : ((this._y = Math.atan2(-l, a)), (this._z = 0)))
        : "ZXY" === b
        ? ((this._x = Math.asin(d(n, -1, 1))),
          0.99999 > Math.abs(n)
            ? ((this._y = Math.atan2(-l, e)), (this._z = Math.atan2(-f, k)))
            : ((this._y = 0), (this._z = Math.atan2(h, a))))
        : "ZYX" === b
        ? ((this._y = Math.asin(-d(l, -1, 1))),
          0.99999 > Math.abs(l)
            ? ((this._x = Math.atan2(n, e)), (this._z = Math.atan2(h, a)))
            : ((this._x = 0), (this._z = Math.atan2(-f, k))))
        : "YZX" === b
        ? ((this._z = Math.asin(d(h, -1, 1))),
          0.99999 > Math.abs(h)
            ? ((this._x = Math.atan2(-m, k)), (this._y = Math.atan2(-l, a)))
            : ((this._x = 0), (this._y = Math.atan2(g, e))))
        : "XZY" === b
        ? ((this._z = Math.asin(-d(f, -1, 1))),
          0.99999 > Math.abs(f)
            ? ((this._x = Math.atan2(n, k)), (this._y = Math.atan2(g, a)))
            : ((this._x = Math.atan2(-m, e)), (this._y = 0)))
        : console.warn(
            "THREE.Euler: .setFromRotationMatrix() given unsupported order: " +
              b
          );
      this._order = b;
      if (!1 !== c) this.onChangeCallback();
      return this;
    },
    setFromQuaternion: (function() {
      var a = new P();
      return function(b, c, d) {
        a.makeRotationFromQuaternion(b);
        return this.setFromRotationMatrix(a, c, d);
      };
    })(),
    setFromVector3: function(a, b) {
      return this.set(a.x, a.y, a.z, b || this._order);
    },
    reorder: (function() {
      var a = new ja();
      return function(b) {
        a.setFromEuler(this);
        return this.setFromQuaternion(a, b);
      };
    })(),
    equals: function(a) {
      return (
        a._x === this._x &&
        a._y === this._y &&
        a._z === this._z &&
        a._order === this._order
      );
    },
    fromArray: function(a) {
      this._x = a[0];
      this._y = a[1];
      this._z = a[2];
      void 0 !== a[3] && (this._order = a[3]);
      this.onChangeCallback();
      return this;
    },
    toArray: function(a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      a[b] = this._x;
      a[b + 1] = this._y;
      a[b + 2] = this._z;
      a[b + 3] = this._order;
      return a;
    },
    toVector3: function(a) {
      return a
        ? a.set(this._x, this._y, this._z)
        : new p(this._x, this._y, this._z);
    },
    onChange: function(a) {
      this.onChangeCallback = a;
      return this;
    },
    onChangeCallback: function() {}
  });
  Object.assign(Yd.prototype, {
    set: function(a) {
      this.mask = (1 << a) | 0;
    },
    enable: function(a) {
      this.mask = this.mask | (1 << a) | 0;
    },
    toggle: function(a) {
      this.mask ^= (1 << a) | 0;
    },
    disable: function(a) {
      this.mask &= ~((1 << a) | 0);
    },
    test: function(a) {
      return 0 !== (this.mask & a.mask);
    }
  });
  var Mf = 0;
  D.DefaultUp = new p(0, 1, 0);
  D.DefaultMatrixAutoUpdate = !0;
  D.prototype = Object.assign(Object.create(ia.prototype), {
    constructor: D,
    isObject3D: !0,
    onBeforeRender: function() {},
    onAfterRender: function() {},
    applyMatrix: function(a) {
      this.matrix.multiplyMatrices(a, this.matrix);
      this.matrix.decompose(this.position, this.quaternion, this.scale);
    },
    applyQuaternion: function(a) {
      this.quaternion.premultiply(a);
      return this;
    },
    setRotationFromAxisAngle: function(a, b) {
      this.quaternion.setFromAxisAngle(a, b);
    },
    setRotationFromEuler: function(a) {
      this.quaternion.setFromEuler(a, !0);
    },
    setRotationFromMatrix: function(a) {
      this.quaternion.setFromRotationMatrix(a);
    },
    setRotationFromQuaternion: function(a) {
      this.quaternion.copy(a);
    },
    rotateOnAxis: (function() {
      var a = new ja();
      return function(b, c) {
        a.setFromAxisAngle(b, c);
        this.quaternion.multiply(a);
        return this;
      };
    })(),
    rotateOnWorldAxis: (function() {
      var a = new ja();
      return function(b, c) {
        a.setFromAxisAngle(b, c);
        this.quaternion.premultiply(a);
        return this;
      };
    })(),
    rotateX: (function() {
      var a = new p(1, 0, 0);
      return function(b) {
        return this.rotateOnAxis(a, b);
      };
    })(),
    rotateY: (function() {
      var a = new p(0, 1, 0);
      return function(b) {
        return this.rotateOnAxis(a, b);
      };
    })(),
    rotateZ: (function() {
      var a = new p(0, 0, 1);
      return function(b) {
        return this.rotateOnAxis(a, b);
      };
    })(),
    translateOnAxis: (function() {
      var a = new p();
      return function(b, c) {
        a.copy(b).applyQuaternion(this.quaternion);
        this.position.add(a.multiplyScalar(c));
        return this;
      };
    })(),
    translateX: (function() {
      var a = new p(1, 0, 0);
      return function(b) {
        return this.translateOnAxis(a, b);
      };
    })(),
    translateY: (function() {
      var a = new p(0, 1, 0);
      return function(b) {
        return this.translateOnAxis(a, b);
      };
    })(),
    translateZ: (function() {
      var a = new p(0, 0, 1);
      return function(b) {
        return this.translateOnAxis(a, b);
      };
    })(),
    localToWorld: function(a) {
      return a.applyMatrix4(this.matrixWorld);
    },
    worldToLocal: (function() {
      var a = new P();
      return function(b) {
        return b.applyMatrix4(a.getInverse(this.matrixWorld));
      };
    })(),
    lookAt: (function() {
      var a = new ja(),
        b = new P(),
        c = new p(),
        d = new p();
      return function(e, f, g) {
        e.isVector3 ? c.copy(e) : c.set(e, f, g);
        e = this.parent;
        this.updateWorldMatrix(!0, !1);
        d.setFromMatrixPosition(this.matrixWorld);
        this.isCamera ? b.lookAt(d, c, this.up) : b.lookAt(c, d, this.up);
        this.quaternion.setFromRotationMatrix(b);
        e &&
          (b.extractRotation(e.matrixWorld),
          a.setFromRotationMatrix(b),
          this.quaternion.premultiply(a.inverse()));
      };
    })(),
    add: function(a) {
      if (1 < arguments.length) {
        for (var b = 0; b < arguments.length; b++) this.add(arguments[b]);
        return this;
      }
      if (a === this)
        return (
          console.error(
            "THREE.Object3D.add: object can't be added as a child of itself.",
            a
          ),
          this
        );
      a && a.isObject3D
        ? (null !== a.parent && a.parent.remove(a),
          (a.parent = this),
          a.dispatchEvent({ type: "added" }),
          this.children.push(a))
        : console.error(
            "THREE.Object3D.add: object not an instance of THREE.Object3D.",
            a
          );
      return this;
    },
    remove: function(a) {
      if (1 < arguments.length) {
        for (var b = 0; b < arguments.length; b++) this.remove(arguments[b]);
        return this;
      }
      b = this.children.indexOf(a);
      -1 !== b &&
        ((a.parent = null),
        a.dispatchEvent({ type: "removed" }),
        this.children.splice(b, 1));
      return this;
    },
    getObjectById: function(a) {
      return this.getObjectByProperty("id", a);
    },
    getObjectByName: function(a) {
      return this.getObjectByProperty("name", a);
    },
    getObjectByProperty: function(a, b) {
      if (this[a] === b) return this;
      for (var c = 0, d = this.children.length; c < d; c++) {
        var e = this.children[c].getObjectByProperty(a, b);
        if (void 0 !== e) return e;
      }
    },
    getWorldPosition: function(a) {
      void 0 === a &&
        (console.warn(
          "THREE.Object3D: .getWorldPosition() target is now required"
        ),
        (a = new p()));
      this.updateMatrixWorld(!0);
      return a.setFromMatrixPosition(this.matrixWorld);
    },
    getWorldQuaternion: (function() {
      var a = new p(),
        b = new p();
      return function(c) {
        void 0 === c &&
          (console.warn(
            "THREE.Object3D: .getWorldQuaternion() target is now required"
          ),
          (c = new ja()));
        this.updateMatrixWorld(!0);
        this.matrixWorld.decompose(a, c, b);
        return c;
      };
    })(),
    getWorldScale: (function() {
      var a = new p(),
        b = new ja();
      return function(c) {
        void 0 === c &&
          (console.warn(
            "THREE.Object3D: .getWorldScale() target is now required"
          ),
          (c = new p()));
        this.updateMatrixWorld(!0);
        this.matrixWorld.decompose(a, b, c);
        return c;
      };
    })(),
    getWorldDirection: function(a) {
      void 0 === a &&
        (console.warn(
          "THREE.Object3D: .getWorldDirection() target is now required"
        ),
        (a = new p()));
      this.updateMatrixWorld(!0);
      var b = this.matrixWorld.elements;
      return a.set(b[8], b[9], b[10]).normalize();
    },
    raycast: function() {},
    traverse: function(a) {
      a(this);
      for (var b = this.children, c = 0, d = b.length; c < d; c++)
        b[c].traverse(a);
    },
    traverseVisible: function(a) {
      if (!1 !== this.visible) {
        a(this);
        for (var b = this.children, c = 0, d = b.length; c < d; c++)
          b[c].traverseVisible(a);
      }
    },
    traverseAncestors: function(a) {
      var b = this.parent;
      null !== b && (a(b), b.traverseAncestors(a));
    },
    updateMatrix: function() {
      this.matrix.compose(
        this.position,
        this.quaternion,
        this.scale
      );
      this.matrixWorldNeedsUpdate = !0;
    },
    updateMatrixWorld: function(a) {
      this.matrixAutoUpdate && this.updateMatrix();
      if (this.matrixWorldNeedsUpdate || a)
        null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
          (this.matrixWorldNeedsUpdate = !1),
          (a = !0);
      for (var b = this.children, c = 0, d = b.length; c < d; c++)
        b[c].updateMatrixWorld(a);
    },
    updateWorldMatrix: function(a, b) {
      var c = this.parent;
      !0 === a && null !== c && c.updateWorldMatrix(!0, !1);
      this.matrixAutoUpdate && this.updateMatrix();
      null === this.parent
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          );
      if (!0 === b)
        for (a = this.children, b = 0, c = a.length; b < c; b++)
          a[b].updateWorldMatrix(!1, !0);
    },
    toJSON: function(a) {
      function b(b, c) {
        void 0 === b[c.uuid] && (b[c.uuid] = c.toJSON(a));
        return c.uuid;
      }
      function c(a) {
        var b = [],
          c;
        for (c in a) {
          var d = a[c];
          delete d.metadata;
          b.push(d);
        }
        return b;
      }
      var d = void 0 === a || "string" === typeof a,
        e = {};
      d &&
        ((a = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {}
        }),
        (e.metadata = {
          version: 4.5,
          type: "Object",
          generator: "Object3D.toJSON"
        }));
      var f = {};
      f.uuid = this.uuid;
      f.type = this.type;
      "" !== this.name && (f.name = this.name);
      !0 === this.castShadow && (f.castShadow = !0);
      !0 === this.receiveShadow && (f.receiveShadow = !0);
      !1 === this.visible && (f.visible = !1);
      !1 === this.frustumCulled && (f.frustumCulled = !1);
      0 !== this.renderOrder && (f.renderOrder = this.renderOrder);
      "{}" !== JSON.stringify(this.userData) && (f.userData = this.userData);
      f.layers = this.layers.mask;
      f.matrix = this.matrix.toArray();
      !1 === this.matrixAutoUpdate && (f.matrixAutoUpdate = !1);
      if (this.isMesh || this.isLine || this.isPoints) {
        f.geometry = b(a.geometries, this.geometry);
        var g = this.geometry.parameters;
        if (void 0 !== g && void 0 !== g.shapes)
          if (((g = g.shapes), Array.isArray(g)))
            for (var h = 0, k = g.length; h < k; h++) b(a.shapes, g[h]);
          else b(a.shapes, g);
      }
      if (void 0 !== this.material)
        if (Array.isArray(this.material)) {
          g = [];
          h = 0;
          for (k = this.material.length; h < k; h++)
            g.push(b(a.materials, this.material[h]));
          f.material = g;
        } else f.material = b(a.materials, this.material);
      if (0 < this.children.length)
        for (f.children = [], h = 0; h < this.children.length; h++)
          f.children.push(this.children[h].toJSON(a).object);
      if (d) {
        d = c(a.geometries);
        h = c(a.materials);
        k = c(a.textures);
        var m = c(a.images);
        g = c(a.shapes);
        0 < d.length && (e.geometries = d);
        0 < h.length && (e.materials = h);
        0 < k.length && (e.textures = k);
        0 < m.length && (e.images = m);
        0 < g.length && (e.shapes = g);
      }
      e.object = f;
      return e;
    },
    clone: function(a) {
      return new this.constructor().copy(this, a);
    },
    copy: function(a, b) {
      void 0 === b && (b = !0);
      this.name = a.name;
      this.up.copy(a.up);
      this.position.copy(a.position);
      this.quaternion.copy(a.quaternion);
      this.scale.copy(a.scale);
      this.matrix.copy(a.matrix);
      this.matrixWorld.copy(a.matrixWorld);
      this.matrixAutoUpdate = a.matrixAutoUpdate;
      this.matrixWorldNeedsUpdate = a.matrixWorldNeedsUpdate;
      this.layers.mask = a.layers.mask;
      this.visible = a.visible;
      this.castShadow = a.castShadow;
      this.receiveShadow = a.receiveShadow;
      this.frustumCulled = a.frustumCulled;
      this.renderOrder = a.renderOrder;
      this.userData = JSON.parse(JSON.stringify(a.userData));
      if (!0 === b)
        for (b = 0; b < a.children.length; b++) this.add(a.children[b].clone());
      return this;
    }
  });
  var Nf = 0;
  I.prototype = Object.assign(Object.create(ia.prototype), {
    constructor: I,
    isGeometry: !0,
    applyMatrix: function(a) {
      for (
        var b = new da().getNormalMatrix(a), c = 0, d = this.vertices.length;
        c < d;
        c++
      )
        this.vertices[c].applyMatrix4(a);
      c = 0;
      for (d = this.faces.length; c < d; c++) {
        a = this.faces[c];
        a.normal.applyMatrix3(b).normalize();
        for (var e = 0, f = a.vertexNormals.length; e < f; e++)
          a.vertexNormals[e].applyMatrix3(b).normalize();
      }
      null !== this.boundingBox && this.computeBoundingBox();
      null !== this.boundingSphere && this.computeBoundingSphere();
      this.normalsNeedUpdate = this.verticesNeedUpdate = !0;
      return this;
    },
    rotateX: (function() {
      var a = new P();
      return function(b) {
        a.makeRotationX(b);
        this.applyMatrix(a);
        return this;
      };
    })(),
    rotateY: (function() {
      var a = new P();
      return function(b) {
        a.makeRotationY(b);
        this.applyMatrix(a);
        return this;
      };
    })(),
    rotateZ: (function() {
      var a = new P();
      return function(b) {
        a.makeRotationZ(b);
        this.applyMatrix(a);
        return this;
      };
    })(),
    translate: (function() {
      var a = new P();
      return function(b, c, d) {
        a.makeTranslation(b, c, d);
        this.applyMatrix(a);
        return this;
      };
    })(),
    scale: (function() {
      var a = new P();
      return function(b, c, d) {
        a.makeScale(b, c, d);
        this.applyMatrix(a);
        return this;
      };
    })(),
    lookAt: (function() {
      var a = new D();
      return function(b) {
        a.lookAt(b);
        a.updateMatrix();
        this.applyMatrix(a.matrix);
      };
    })(),
    fromBufferGeometry: function(a) {
      function b(a, b, d, e) {
        var f =
            void 0 === h
              ? []
              : [c.colors[a].clone(), c.colors[b].clone(), c.colors[d].clone()],
          l =
            void 0 === g
              ? []
              : [
                  new p().fromArray(g, 3 * a),
                  new p().fromArray(g, 3 * b),
                  new p().fromArray(g, 3 * d)
                ];
        e = new Xa(a, b, d, l, f, e);
        c.faces.push(e);
        void 0 !== k &&
          c.faceVertexUvs[0].push([
            new z().fromArray(k, 2 * a),
            new z().fromArray(k, 2 * b),
            new z().fromArray(k, 2 * d)
          ]);
        void 0 !== m &&
          c.faceVertexUvs[1].push([
            new z().fromArray(m, 2 * a),
            new z().fromArray(m, 2 * b),
            new z().fromArray(m, 2 * d)
          ]);
      }
      var c = this,
        d = null !== a.index ? a.index.array : void 0,
        e = a.attributes,
        f = e.position.array,
        g = void 0 !== e.normal ? e.normal.array : void 0,
        h = void 0 !== e.color ? e.color.array : void 0,
        k = void 0 !== e.uv ? e.uv.array : void 0,
        m = void 0 !== e.uv2 ? e.uv2.array : void 0;
      void 0 !== m && (this.faceVertexUvs[1] = []);
      for (var l = (e = 0); e < f.length; e += 3, l += 2)
        c.vertices.push(new p().fromArray(f, e)),
          void 0 !== h && c.colors.push(new G().fromArray(h, e));
      var n = a.groups;
      if (0 < n.length)
        for (e = 0; e < n.length; e++) {
          f = n[e];
          var r = f.start,
            x = f.count;
          l = r;
          for (r += x; l < r; l += 3)
            void 0 !== d
              ? b(d[l], d[l + 1], d[l + 2], f.materialIndex)
              : b(l, l + 1, l + 2, f.materialIndex);
        }
      else if (void 0 !== d)
        for (e = 0; e < d.length; e += 3) b(d[e], d[e + 1], d[e + 2]);
      else for (e = 0; e < f.length / 3; e += 3) b(e, e + 1, e + 2);
      this.computeFaceNormals();
      null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
      null !== a.boundingSphere &&
        (this.boundingSphere = a.boundingSphere.clone());
      return this;
    },
    center: (function() {
      var a = new p();
      return function() {
        this.computeBoundingBox();
        this.boundingBox.getCenter(a).negate();
        this.translate(a.x, a.y, a.z);
        return this;
      };
    })(),
    normalize: function() {
      this.computeBoundingSphere();
      var a = this.boundingSphere.center,
        b = this.boundingSphere.radius;
      b = 0 === b ? 1 : 1 / b;
      var c = new P();
      c.set(
        b,
        0,
        0,
        -b * a.x,
        0,
        b,
        0,
        -b * a.y,
        0,
        0,
        b,
        -b * a.z,
        0,
        0,
        0,
        1
      );
      this.applyMatrix(c);
      return this;
    },
    computeFaceNormals: function() {
      for (
        var a = new p(), b = new p(), c = 0, d = this.faces.length;
        c < d;
        c++
      ) {
        var e = this.faces[c],
          f = this.vertices[e.a],
          g = this.vertices[e.b];
        a.subVectors(this.vertices[e.c], g);
        b.subVectors(f, g);
        a.cross(b);
        a.normalize();
        e.normal.copy(a);
      }
    },
    computeVertexNormals: function(a) {
      void 0 === a && (a = !0);
      var b;
      var c = Array(this.vertices.length);
      var d = 0;
      for (b = this.vertices.length; d < b; d++) c[d] = new p();
      if (a) {
        var e = new p(),
          f = new p();
        a = 0;
        for (d = this.faces.length; a < d; a++) {
          b = this.faces[a];
          var g = this.vertices[b.a];
          var h = this.vertices[b.b];
          var k = this.vertices[b.c];
          e.subVectors(k, h);
          f.subVectors(g, h);
          e.cross(f);
          c[b.a].add(e);
          c[b.b].add(e);
          c[b.c].add(e);
        }
      } else
        for (
          this.computeFaceNormals(), a = 0, d = this.faces.length;
          a < d;
          a++
        )
          (b = this.faces[a]),
            c[b.a].add(b.normal),
            c[b.b].add(b.normal),
            c[b.c].add(b.normal);
      d = 0;
      for (b = this.vertices.length; d < b; d++) c[d].normalize();
      a = 0;
      for (d = this.faces.length; a < d; a++)
        (b = this.faces[a]),
          (g = b.vertexNormals),
          3 === g.length
            ? (g[0].copy(c[b.a]), g[1].copy(c[b.b]), g[2].copy(c[b.c]))
            : ((g[0] = c[b.a].clone()),
              (g[1] = c[b.b].clone()),
              (g[2] = c[b.c].clone()));
      0 < this.faces.length && (this.normalsNeedUpdate = !0);
    },
    computeFlatVertexNormals: function() {
      var a;
      this.computeFaceNormals();
      var b = 0;
      for (a = this.faces.length; b < a; b++) {
        var c = this.faces[b];
        var d = c.vertexNormals;
        3 === d.length
          ? (d[0].copy(c.normal), d[1].copy(c.normal), d[2].copy(c.normal))
          : ((d[0] = c.normal.clone()),
            (d[1] = c.normal.clone()),
            (d[2] = c.normal.clone()));
      }
      0 < this.faces.length && (this.normalsNeedUpdate = !0);
    },
    computeMorphNormals: function() {
      var a, b;
      var c = 0;
      for (b = this.faces.length; c < b; c++) {
        var d = this.faces[c];
        d.__originalFaceNormal
          ? d.__originalFaceNormal.copy(d.normal)
          : (d.__originalFaceNormal = d.normal.clone());
        d.__originalVertexNormals || (d.__originalVertexNormals = []);
        var e = 0;
        for (a = d.vertexNormals.length; e < a; e++)
          d.__originalVertexNormals[e]
            ? d.__originalVertexNormals[e].copy(d.vertexNormals[e])
            : (d.__originalVertexNormals[e] = d.vertexNormals[e].clone());
      }
      var f = new I();
      f.faces = this.faces;
      e = 0;
      for (a = this.morphTargets.length; e < a; e++) {
        if (!this.morphNormals[e]) {
          this.morphNormals[e] = {};
          this.morphNormals[e].faceNormals = [];
          this.morphNormals[e].vertexNormals = [];
          d = this.morphNormals[e].faceNormals;
          var g = this.morphNormals[e].vertexNormals;
          c = 0;
          for (b = this.faces.length; c < b; c++) {
            var h = new p();
            var k = { a: new p(), b: new p(), c: new p() };
            d.push(h);
            g.push(k);
          }
        }
        g = this.morphNormals[e];
        f.vertices = this.morphTargets[e].vertices;
        f.computeFaceNormals();
        f.computeVertexNormals();
        c = 0;
        for (b = this.faces.length; c < b; c++)
          (d = this.faces[c]),
            (h = g.faceNormals[c]),
            (k = g.vertexNormals[c]),
            h.copy(d.normal),
            k.a.copy(d.vertexNormals[0]),
            k.b.copy(d.vertexNormals[1]),
            k.c.copy(d.vertexNormals[2]);
      }
      c = 0;
      for (b = this.faces.length; c < b; c++)
        (d = this.faces[c]),
          (d.normal = d.__originalFaceNormal),
          (d.vertexNormals = d.__originalVertexNormals);
    },
    computeBoundingBox: function() {
      null === this.boundingBox && (this.boundingBox = new Wa());
      this.boundingBox.setFromPoints(this.vertices);
    },
    computeBoundingSphere: function() {
      null === this.boundingSphere && (this.boundingSphere = new Ga());
      this.boundingSphere.setFromPoints(this.vertices);
    },
    merge: function(a, b, c) {
      if (a && a.isGeometry) {
        var d,
          e = this.vertices.length,
          f = this.vertices,
          g = a.vertices,
          h = this.faces,
          k = a.faces,
          m = this.faceVertexUvs[0],
          l = a.faceVertexUvs[0],
          n = this.colors,
          r = a.colors;
        void 0 === c && (c = 0);
        void 0 !== b && (d = new da().getNormalMatrix(b));
        a = 0;
        for (var p = g.length; a < p; a++) {
          var t = g[a].clone();
          void 0 !== b && t.applyMatrix4(b);
          f.push(t);
        }
        a = 0;
        for (p = r.length; a < p; a++) n.push(r[a].clone());
        a = 0;
        for (p = k.length; a < p; a++) {
          g = k[a];
          var u = g.vertexNormals;
          r = g.vertexColors;
          n = new Xa(g.a + e, g.b + e, g.c + e);
          n.normal.copy(g.normal);
          void 0 !== d && n.normal.applyMatrix3(d).normalize();
          b = 0;
          for (f = u.length; b < f; b++)
            (t = u[b].clone()),
              void 0 !== d && t.applyMatrix3(d).normalize(),
              n.vertexNormals.push(t);
          n.color.copy(g.color);
          b = 0;
          for (f = r.length; b < f; b++)
            (t = r[b]), n.vertexColors.push(t.clone());
          n.materialIndex = g.materialIndex + c;
          h.push(n);
        }
        a = 0;
        for (p = l.length; a < p; a++)
          if (((c = l[a]), (d = []), void 0 !== c)) {
            b = 0;
            for (f = c.length; b < f; b++) d.push(c[b].clone());
            m.push(d);
          }
      } else
        console.error(
          "THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",
          a
        );
    },
    mergeMesh: function(a) {
      a && a.isMesh
        ? (a.matrixAutoUpdate && a.updateMatrix(),
          this.merge(a.geometry, a.matrix))
        : console.error(
            "THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",
            a
          );
    },
    mergeVertices: function() {
      var a = {},
        b = [],
        c = [],
        d = Math.pow(10, 4),
        e;
      var f = 0;
      for (e = this.vertices.length; f < e; f++) {
        var g = this.vertices[f];
        g =
          Math.round(g.x * d) +
          "_" +
          Math.round(g.y * d) +
          "_" +
          Math.round(g.z * d);
        void 0 === a[g]
          ? ((a[g] = f), b.push(this.vertices[f]), (c[f] = b.length - 1))
          : (c[f] = c[a[g]]);
      }
      a = [];
      f = 0;
      for (e = this.faces.length; f < e; f++)
        for (
          d = this.faces[f],
            d.a = c[d.a],
            d.b = c[d.b],
            d.c = c[d.c],
            d = [d.a, d.b, d.c],
            g = 0;
          3 > g;
          g++
        )
          if (d[g] === d[(g + 1) % 3]) {
            a.push(f);
            break;
          }
      for (f = a.length - 1; 0 <= f; f--)
        for (
          d = a[f],
            this.faces.splice(d, 1),
            c = 0,
            e = this.faceVertexUvs.length;
          c < e;
          c++
        )
          this.faceVertexUvs[c].splice(d, 1);
      f = this.vertices.length - b.length;
      this.vertices = b;
      return f;
    },
    setFromPoints: function(a) {
      this.vertices = [];
      for (var b = 0, c = a.length; b < c; b++) {
        var d = a[b];
        this.vertices.push(new p(d.x, d.y, d.z || 0));
      }
      return this;
    },
    sortFacesByMaterialIndex: function() {
      for (var a = this.faces, b = a.length, c = 0; c < b; c++) a[c]._id = c;
      a.sort(function(a, b) {
        return a.materialIndex - b.materialIndex;
      });
      var d = this.faceVertexUvs[0],
        e = this.faceVertexUvs[1],
        f,
        g;
      d && d.length === b && (f = []);
      e && e.length === b && (g = []);
      for (c = 0; c < b; c++) {
        var h = a[c]._id;
        f && f.push(d[h]);
        g && g.push(e[h]);
      }
      f && (this.faceVertexUvs[0] = f);
      g && (this.faceVertexUvs[1] = g);
    },
    toJSON: function() {
      function a(a, b, c) {
        return c ? a | (1 << b) : a & ~(1 << b);
      }
      function b(a) {
        var b = a.x.toString() + a.y.toString() + a.z.toString();
        if (void 0 !== m[b]) return m[b];
        m[b] = k.length / 3;
        k.push(a.x, a.y, a.z);
        return m[b];
      }
      function c(a) {
        var b = a.r.toString() + a.g.toString() + a.b.toString();
        if (void 0 !== n[b]) return n[b];
        n[b] = l.length;
        l.push(a.getHex());
        return n[b];
      }
      function d(a) {
        var b = a.x.toString() + a.y.toString();
        if (void 0 !== p[b]) return p[b];
        p[b] = r.length / 2;
        r.push(a.x, a.y);
        return p[b];
      }
      var e = {
        metadata: {
          version: 4.5,
          type: "Geometry",
          generator: "Geometry.toJSON"
        }
      };
      e.uuid = this.uuid;
      e.type = this.type;
      "" !== this.name && (e.name = this.name);
      if (void 0 !== this.parameters) {
        var f = this.parameters,
          g;
        for (g in f) void 0 !== f[g] && (e[g] = f[g]);
        return e;
      }
      f = [];
      for (g = 0; g < this.vertices.length; g++) {
        var h = this.vertices[g];
        f.push(h.x, h.y, h.z);
      }
      h = [];
      var k = [],
        m = {},
        l = [],
        n = {},
        r = [],
        p = {};
      for (g = 0; g < this.faces.length; g++) {
        var t = this.faces[g],
          u = void 0 !== this.faceVertexUvs[0][g],
          w = 0 < t.normal.length(),
          A = 0 < t.vertexNormals.length,
          v = 1 !== t.color.r || 1 !== t.color.g || 1 !== t.color.b,
          z = 0 < t.vertexColors.length,
          y = 0;
        y = a(y, 0, 0);
        y = a(y, 1, !0);
        y = a(y, 2, !1);
        y = a(y, 3, u);
        y = a(y, 4, w);
        y = a(y, 5, A);
        y = a(y, 6, v);
        y = a(y, 7, z);
        h.push(y);
        h.push(t.a, t.b, t.c);
        h.push(t.materialIndex);
        u &&
          ((u = this.faceVertexUvs[0][g]), h.push(d(u[0]), d(u[1]), d(u[2])));
        w && h.push(b(t.normal));
        A && ((w = t.vertexNormals), h.push(b(w[0]), b(w[1]), b(w[2])));
        v && h.push(c(t.color));
        z && ((t = t.vertexColors), h.push(c(t[0]), c(t[1]), c(t[2])));
      }
      e.data = {};
      e.data.vertices = f;
      e.data.normals = k;
      0 < l.length && (e.data.colors = l);
      0 < r.length && (e.data.uvs = [r]);
      e.data.faces = h;
      return e;
    },
    clone: function() {
      return new I().copy(this);
    },
    copy: function(a) {
      var b, c, d;
      this.vertices = [];
      this.colors = [];
      this.faces = [];
      this.faceVertexUvs = [[]];
      this.morphTargets = [];
      this.morphNormals = [];
      this.skinWeights = [];
      this.skinIndices = [];
      this.lineDistances = [];
      this.boundingSphere = this.boundingBox = null;
      this.name = a.name;
      var e = a.vertices;
      var f = 0;
      for (b = e.length; f < b; f++) this.vertices.push(e[f].clone());
      e = a.colors;
      f = 0;
      for (b = e.length; f < b; f++) this.colors.push(e[f].clone());
      e = a.faces;
      f = 0;
      for (b = e.length; f < b; f++) this.faces.push(e[f].clone());
      f = 0;
      for (b = a.faceVertexUvs.length; f < b; f++) {
        var g = a.faceVertexUvs[f];
        void 0 === this.faceVertexUvs[f] && (this.faceVertexUvs[f] = []);
        e = 0;
        for (c = g.length; e < c; e++) {
          var h = g[e],
            k = [];
          var m = 0;
          for (d = h.length; m < d; m++) k.push(h[m].clone());
          this.faceVertexUvs[f].push(k);
        }
      }
      m = a.morphTargets;
      f = 0;
      for (b = m.length; f < b; f++) {
        d = {};
        d.name = m[f].name;
        if (void 0 !== m[f].vertices)
          for (d.vertices = [], e = 0, c = m[f].vertices.length; e < c; e++)
            d.vertices.push(m[f].vertices[e].clone());
        if (void 0 !== m[f].normals)
          for (d.normals = [], e = 0, c = m[f].normals.length; e < c; e++)
            d.normals.push(m[f].normals[e].clone());
        this.morphTargets.push(d);
      }
      m = a.morphNormals;
      f = 0;
      for (b = m.length; f < b; f++) {
        d = {};
        if (void 0 !== m[f].vertexNormals)
          for (
            d.vertexNormals = [], e = 0, c = m[f].vertexNormals.length;
            e < c;
            e++
          )
            (g = m[f].vertexNormals[e]),
              (h = {}),
              (h.a = g.a.clone()),
              (h.b = g.b.clone()),
              (h.c = g.c.clone()),
              d.vertexNormals.push(h);
        if (void 0 !== m[f].faceNormals)
          for (
            d.faceNormals = [], e = 0, c = m[f].faceNormals.length;
            e < c;
            e++
          )
            d.faceNormals.push(m[f].faceNormals[e].clone());
        this.morphNormals.push(d);
      }
      e = a.skinWeights;
      f = 0;
      for (b = e.length; f < b; f++) this.skinWeights.push(e[f].clone());
      e = a.skinIndices;
      f = 0;
      for (b = e.length; f < b; f++) this.skinIndices.push(e[f].clone());
      e = a.lineDistances;
      f = 0;
      for (b = e.length; f < b; f++) this.lineDistances.push(e[f]);
      f = a.boundingBox;
      null !== f && (this.boundingBox = f.clone());
      f = a.boundingSphere;
      null !== f && (this.boundingSphere = f.clone());
      this.elementsNeedUpdate = a.elementsNeedUpdate;
      this.verticesNeedUpdate = a.verticesNeedUpdate;
      this.uvsNeedUpdate = a.uvsNeedUpdate;
      this.normalsNeedUpdate = a.normalsNeedUpdate;
      this.colorsNeedUpdate = a.colorsNeedUpdate;
      this.lineDistancesNeedUpdate = a.lineDistancesNeedUpdate;
      this.groupsNeedUpdate = a.groupsNeedUpdate;
      return this;
    },
    dispose: function() {
      this.dispatchEvent({ type: "dispose" });
    }
  });
  Object.defineProperty(F.prototype, "needsUpdate", {
    set: function(a) {
      !0 === a && this.version++;
    }
  });
  Object.assign(F.prototype, {
    isBufferAttribute: !0,
    onUploadCallback: function() {},
    setArray: function(a) {
      if (Array.isArray(a))
        throw new TypeError(
          "THREE.BufferAttribute: array should be a Typed Array."
        );
      this.count = void 0 !== a ? a.length / this.itemSize : 0;
      this.array = a;
      return this;
    },
    setDynamic: function(a) {
      this.dynamic = a;
      return this;
    },
    copy: function(a) {
      this.name = a.name;
      this.array = new a.array.constructor(a.array);
      this.itemSize = a.itemSize;
      this.count = a.count;
      this.normalized = a.normalized;
      this.dynamic = a.dynamic;
      return this;
    },
    copyAt: function(a, b, c) {
      a *= this.itemSize;
      c *= b.itemSize;
      for (var d = 0, e = this.itemSize; d < e; d++)
        this.array[a + d] = b.array[c + d];
      return this;
    },
    copyArray: function(a) {
      this.array.set(a);
      return this;
    },
    copyColorsArray: function(a) {
      for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
        var f = a[d];
        void 0 === f &&
          (console.warn(
            "THREE.BufferAttribute.copyColorsArray(): color is undefined",
            d
          ),
          (f = new G()));
        b[c++] = f.r;
        b[c++] = f.g;
        b[c++] = f.b;
      }
      return this;
    },
    copyVector2sArray: function(a) {
      for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
        var f = a[d];
        void 0 === f &&
          (console.warn(
            "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
            d
          ),
          (f = new z()));
        b[c++] = f.x;
        b[c++] = f.y;
      }
      return this;
    },
    copyVector3sArray: function(a) {
      for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
        var f = a[d];
        void 0 === f &&
          (console.warn(
            "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
            d
          ),
          (f = new p()));
        b[c++] = f.x;
        b[c++] = f.y;
        b[c++] = f.z;
      }
      return this;
    },
    copyVector4sArray: function(a) {
      for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
        var f = a[d];
        void 0 === f &&
          (console.warn(
            "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
            d
          ),
          (f = new Z()));
        b[c++] = f.x;
        b[c++] = f.y;
        b[c++] = f.z;
        b[c++] = f.w;
      }
      return this;
    },
    set: function(a, b) {
      void 0 === b && (b = 0);
      this.array.set(a, b);
      return this;
    },
    getX: function(a) {
      return this.array[a * this.itemSize];
    },
    setX: function(a, b) {
      this.array[a * this.itemSize] = b;
      return this;
    },
    getY: function(a) {
      return this.array[a * this.itemSize + 1];
    },
    setY: function(a, b) {
      this.array[a * this.itemSize + 1] = b;
      return this;
    },
    getZ: function(a) {
      return this.array[a * this.itemSize + 2];
    },
    setZ: function(a, b) {
      this.array[a * this.itemSize + 2] = b;
      return this;
    },
    getW: function(a) {
      return this.array[a * this.itemSize + 3];
    },
    setW: function(a, b) {
      this.array[a * this.itemSize + 3] = b;
      return this;
    },
    setXY: function(a, b, c) {
      a *= this.itemSize;
      this.array[a + 0] = b;
      this.array[a + 1] = c;
      return this;
    },
    setXYZ: function(a, b, c, d) {
      a *= this.itemSize;
      this.array[a + 0] = b;
      this.array[a + 1] = c;
      this.array[a + 2] = d;
      return this;
    },
    setXYZW: function(a, b, c, d, e) {
      a *= this.itemSize;
      this.array[a + 0] = b;
      this.array[a + 1] = c;
      this.array[a + 2] = d;
      this.array[a + 3] = e;
      return this;
    },
    onUpload: function(a) {
      this.onUploadCallback = a;
      return this;
    },
    clone: function() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
  });
  sc.prototype = Object.create(F.prototype);
  sc.prototype.constructor = sc;
  tc.prototype = Object.create(F.prototype);
  tc.prototype.constructor = tc;
  uc.prototype = Object.create(F.prototype);
  uc.prototype.constructor = uc;
  vc.prototype = Object.create(F.prototype);
  vc.prototype.constructor = vc;
  nb.prototype = Object.create(F.prototype);
  nb.prototype.constructor = nb;
  wc.prototype = Object.create(F.prototype);
  wc.prototype.constructor = wc;
  ob.prototype = Object.create(F.prototype);
  ob.prototype.constructor = ob;
  C.prototype = Object.create(F.prototype);
  C.prototype.constructor = C;
  xc.prototype = Object.create(F.prototype);
  xc.prototype.constructor = xc;
  Object.assign(Ie.prototype, {
    computeGroups: function(a) {
      var b = [],
        c = void 0;
      a = a.faces;
      for (var d = 0; d < a.length; d++) {
        var e = a[d];
        if (e.materialIndex !== c) {
          c = e.materialIndex;
          void 0 !== f && ((f.count = 3 * d - f.start), b.push(f));
          var f = { start: 3 * d, materialIndex: c };
        }
      }
      void 0 !== f && ((f.count = 3 * d - f.start), b.push(f));
      this.groups = b;
    },
    fromGeometry: function(a) {
      var b = a.faces,
        c = a.vertices,
        d = a.faceVertexUvs,
        e = d[0] && 0 < d[0].length,
        f = d[1] && 0 < d[1].length,
        g = a.morphTargets,
        h = g.length;
      if (0 < h) {
        var k = [];
        for (var m = 0; m < h; m++) k[m] = { name: g[m].name, data: [] };
        this.morphTargets.position = k;
      }
      var l = a.morphNormals,
        n = l.length;
      if (0 < n) {
        var r = [];
        for (m = 0; m < n; m++) r[m] = { name: l[m].name, data: [] };
        this.morphTargets.normal = r;
      }
      var p = a.skinIndices,
        t = a.skinWeights,
        u = p.length === c.length,
        w = t.length === c.length;
      0 < c.length &&
        0 === b.length &&
        console.error(
          "THREE.DirectGeometry: Faceless geometries are not supported."
        );
      for (m = 0; m < b.length; m++) {
        var A = b[m];
        this.vertices.push(c[A.a], c[A.b], c[A.c]);
        var v = A.vertexNormals;
        3 === v.length
          ? this.normals.push(v[0], v[1], v[2])
          : ((v = A.normal), this.normals.push(v, v, v));
        v = A.vertexColors;
        3 === v.length
          ? this.colors.push(v[0], v[1], v[2])
          : ((v = A.color), this.colors.push(v, v, v));
        !0 === e &&
          ((v = d[0][m]),
          void 0 !== v
            ? this.uvs.push(v[0], v[1], v[2])
            : (console.warn(
                "THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",
                m
              ),
              this.uvs.push(new z(), new z(), new z())));
        !0 === f &&
          ((v = d[1][m]),
          void 0 !== v
            ? this.uvs2.push(v[0], v[1], v[2])
            : (console.warn(
                "THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",
                m
              ),
              this.uvs2.push(new z(), new z(), new z())));
        for (v = 0; v < h; v++) {
          var H = g[v].vertices;
          k[v].data.push(H[A.a], H[A.b], H[A.c]);
        }
        for (v = 0; v < n; v++)
          (H = l[v].vertexNormals[m]), r[v].data.push(H.a, H.b, H.c);
        u && this.skinIndices.push(p[A.a], p[A.b], p[A.c]);
        w && this.skinWeights.push(t[A.a], t[A.b], t[A.c]);
      }
      this.computeGroups(a);
      this.verticesNeedUpdate = a.verticesNeedUpdate;
      this.normalsNeedUpdate = a.normalsNeedUpdate;
      this.colorsNeedUpdate = a.colorsNeedUpdate;
      this.uvsNeedUpdate = a.uvsNeedUpdate;
      this.groupsNeedUpdate = a.groupsNeedUpdate;
      return this;
    }
  });
  var Of = 1;
  E.prototype = Object.assign(Object.create(ia.prototype), {
    constructor: E,
    isBufferGeometry: !0,
    getIndex: function() {
      return this.index;
    },
    setIndex: function(a) {
      Array.isArray(a)
        ? (this.index = new (65535 < Je(a) ? ob : nb)(a, 1))
        : (this.index = a);
    },
    addAttribute: function(a, b, c) {
      if (
        !((b && b.isBufferAttribute) || (b && b.isInterleavedBufferAttribute))
      )
        return (
          console.warn(
            "THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."
          ),
          this.addAttribute(a, new F(b, c))
        );
      if ("index" === a)
        return (
          console.warn(
            "THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."
          ),
          this.setIndex(b),
          this
        );
      this.attributes[a] = b;
      return this;
    },
    getAttribute: function(a) {
      return this.attributes[a];
    },
    removeAttribute: function(a) {
      delete this.attributes[a];
      return this;
    },
    addGroup: function(a, b, c) {
      this.groups.push({
        start: a,
        count: b,
        materialIndex: void 0 !== c ? c : 0
      });
    },
    clearGroups: function() {
      this.groups = [];
    },
    setDrawRange: function(a, b) {
      this.drawRange.start = a;
      this.drawRange.count = b;
    },
    applyMatrix: function(a) {
      var b = this.attributes.position;
      void 0 !== b && (a.applyToBufferAttribute(b), (b.needsUpdate = !0));
      b = this.attributes.normal;
      void 0 !== b &&
        (new da().getNormalMatrix(a).applyToBufferAttribute(b),
        (b.needsUpdate = !0));
      null !== this.boundingBox && this.computeBoundingBox();
      null !== this.boundingSphere && this.computeBoundingSphere();
      return this;
    },
    rotateX: (function() {
      var a = new P();
      return function(b) {
        a.makeRotationX(b);
        this.applyMatrix(a);
        return this;
      };
    })(),
    rotateY: (function() {
      var a = new P();
      return function(b) {
        a.makeRotationY(b);
        this.applyMatrix(a);
        return this;
      };
    })(),
    rotateZ: (function() {
      var a = new P();
      return function(b) {
        a.makeRotationZ(b);
        this.applyMatrix(a);
        return this;
      };
    })(),
    translate: (function() {
      var a = new P();
      return function(b, c, d) {
        a.makeTranslation(b, c, d);
        this.applyMatrix(a);
        return this;
      };
    })(),
    scale: (function() {
      var a = new P();
      return function(b, c, d) {
        a.makeScale(b, c, d);
        this.applyMatrix(a);
        return this;
      };
    })(),
    lookAt: (function() {
      var a = new D();
      return function(b) {
        a.lookAt(b);
        a.updateMatrix();
        this.applyMatrix(a.matrix);
      };
    })(),
    center: (function() {
      var a = new p();
      return function() {
        this.computeBoundingBox();
        this.boundingBox.getCenter(a).negate();
        this.translate(a.x, a.y, a.z);
        return this;
      };
    })(),
    setFromObject: function(a) {
      var b = a.geometry;
      if (a.isPoints || a.isLine) {
        a = new C(3 * b.vertices.length, 3);
        var c = new C(3 * b.colors.length, 3);
        this.addAttribute("position", a.copyVector3sArray(b.vertices));
        this.addAttribute("color", c.copyColorsArray(b.colors));
        b.lineDistances &&
          b.lineDistances.length === b.vertices.length &&
          ((a = new C(b.lineDistances.length, 1)),
          this.addAttribute("lineDistance", a.copyArray(b.lineDistances)));
        null !== b.boundingSphere &&
          (this.boundingSphere = b.boundingSphere.clone());
        null !== b.boundingBox && (this.boundingBox = b.boundingBox.clone());
      } else a.isMesh && b && b.isGeometry && this.fromGeometry(b);
      return this;
    },
    setFromPoints: function(a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) {
        var e = a[c];
        b.push(e.x, e.y, e.z || 0);
      }
      this.addAttribute("position", new C(b, 3));
      return this;
    },
    updateFromObject: function(a) {
      var b = a.geometry;
      if (a.isMesh) {
        var c = b.__directGeometry;
        !0 === b.elementsNeedUpdate &&
          ((c = void 0), (b.elementsNeedUpdate = !1));
        if (void 0 === c) return this.fromGeometry(b);
        c.verticesNeedUpdate = b.verticesNeedUpdate;
        c.normalsNeedUpdate = b.normalsNeedUpdate;
        c.colorsNeedUpdate = b.colorsNeedUpdate;
        c.uvsNeedUpdate = b.uvsNeedUpdate;
        c.groupsNeedUpdate = b.groupsNeedUpdate;
        b.verticesNeedUpdate = !1;
        b.normalsNeedUpdate = !1;
        b.colorsNeedUpdate = !1;
        b.uvsNeedUpdate = !1;
        b.groupsNeedUpdate = !1;
        b = c;
      }
      !0 === b.verticesNeedUpdate &&
        ((c = this.attributes.position),
        void 0 !== c && (c.copyVector3sArray(b.vertices), (c.needsUpdate = !0)),
        (b.verticesNeedUpdate = !1));
      !0 === b.normalsNeedUpdate &&
        ((c = this.attributes.normal),
        void 0 !== c && (c.copyVector3sArray(b.normals), (c.needsUpdate = !0)),
        (b.normalsNeedUpdate = !1));
      !0 === b.colorsNeedUpdate &&
        ((c = this.attributes.color),
        void 0 !== c && (c.copyColorsArray(b.colors), (c.needsUpdate = !0)),
        (b.colorsNeedUpdate = !1));
      b.uvsNeedUpdate &&
        ((c = this.attributes.uv),
        void 0 !== c && (c.copyVector2sArray(b.uvs), (c.needsUpdate = !0)),
        (b.uvsNeedUpdate = !1));
      b.lineDistancesNeedUpdate &&
        ((c = this.attributes.lineDistance),
        void 0 !== c && (c.copyArray(b.lineDistances), (c.needsUpdate = !0)),
        (b.lineDistancesNeedUpdate = !1));
      b.groupsNeedUpdate &&
        (b.computeGroups(a.geometry),
        (this.groups = b.groups),
        (b.groupsNeedUpdate = !1));
      return this;
    },
    fromGeometry: function(a) {
      a.__directGeometry = new Ie().fromGeometry(a);
      return this.fromDirectGeometry(a.__directGeometry);
    },
    fromDirectGeometry: function(a) {
      var b = new Float32Array(3 * a.vertices.length);
      this.addAttribute("position", new F(b, 3).copyVector3sArray(a.vertices));
      0 < a.normals.length &&
        ((b = new Float32Array(3 * a.normals.length)),
        this.addAttribute("normal", new F(b, 3).copyVector3sArray(a.normals)));
      0 < a.colors.length &&
        ((b = new Float32Array(3 * a.colors.length)),
        this.addAttribute("color", new F(b, 3).copyColorsArray(a.colors)));
      0 < a.uvs.length &&
        ((b = new Float32Array(2 * a.uvs.length)),
        this.addAttribute("uv", new F(b, 2).copyVector2sArray(a.uvs)));
      0 < a.uvs2.length &&
        ((b = new Float32Array(2 * a.uvs2.length)),
        this.addAttribute("uv2", new F(b, 2).copyVector2sArray(a.uvs2)));
      this.groups = a.groups;
      for (var c in a.morphTargets) {
        b = [];
        for (var d = a.morphTargets[c], e = 0, f = d.length; e < f; e++) {
          var g = d[e],
            h = new C(3 * g.data.length, 3);
          h.name = g.name;
          b.push(h.copyVector3sArray(g.data));
        }
        this.morphAttributes[c] = b;
      }
      0 < a.skinIndices.length &&
        ((c = new C(4 * a.skinIndices.length, 4)),
        this.addAttribute("skinIndex", c.copyVector4sArray(a.skinIndices)));
      0 < a.skinWeights.length &&
        ((c = new C(4 * a.skinWeights.length, 4)),
        this.addAttribute("skinWeight", c.copyVector4sArray(a.skinWeights)));
      null !== a.boundingSphere &&
        (this.boundingSphere = a.boundingSphere.clone());
      null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
      return this;
    },
    computeBoundingBox: function() {
      null === this.boundingBox && (this.boundingBox = new Wa());
      var a = this.attributes.position;
      void 0 !== a
        ? this.boundingBox.setFromBufferAttribute(a)
        : this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        console.error(
          'THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
          this
        );
    },
    computeBoundingSphere: (function() {
      var a = new Wa(),
        b = new p();
      return function() {
        null === this.boundingSphere && (this.boundingSphere = new Ga());
        var c = this.attributes.position;
        if (c) {
          var d = this.boundingSphere.center;
          a.setFromBufferAttribute(c);
          a.getCenter(d);
          for (var e = 0, f = 0, g = c.count; f < g; f++)
            (b.x = c.getX(f)),
              (b.y = c.getY(f)),
              (b.z = c.getZ(f)),
              (e = Math.max(e, d.distanceToSquared(b)));
          this.boundingSphere.radius = Math.sqrt(e);
          isNaN(this.boundingSphere.radius) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
              this
            );
        }
      };
    })(),
    computeFaceNormals: function() {},
    computeVertexNormals: function() {
      var a = this.index,
        b = this.attributes;
      if (b.position) {
        var c = b.position.array;
        if (void 0 === b.normal)
          this.addAttribute("normal", new F(new Float32Array(c.length), 3));
        else
          for (var d = b.normal.array, e = 0, f = d.length; e < f; e++)
            d[e] = 0;
        d = b.normal.array;
        var g = new p(),
          h = new p(),
          k = new p(),
          m = new p(),
          l = new p();
        if (a) {
          var n = a.array;
          e = 0;
          for (f = a.count; e < f; e += 3) {
            a = 3 * n[e + 0];
            var r = 3 * n[e + 1];
            var x = 3 * n[e + 2];
            g.fromArray(c, a);
            h.fromArray(c, r);
            k.fromArray(c, x);
            m.subVectors(k, h);
            l.subVectors(g, h);
            m.cross(l);
            d[a] += m.x;
            d[a + 1] += m.y;
            d[a + 2] += m.z;
            d[r] += m.x;
            d[r + 1] += m.y;
            d[r + 2] += m.z;
            d[x] += m.x;
            d[x + 1] += m.y;
            d[x + 2] += m.z;
          }
        } else
          for (e = 0, f = c.length; e < f; e += 9)
            g.fromArray(c, e),
              h.fromArray(c, e + 3),
              k.fromArray(c, e + 6),
              m.subVectors(k, h),
              l.subVectors(g, h),
              m.cross(l),
              (d[e] = m.x),
              (d[e + 1] = m.y),
              (d[e + 2] = m.z),
              (d[e + 3] = m.x),
              (d[e + 4] = m.y),
              (d[e + 5] = m.z),
              (d[e + 6] = m.x),
              (d[e + 7] = m.y),
              (d[e + 8] = m.z);
        this.normalizeNormals();
        b.normal.needsUpdate = !0;
      }
    },
    merge: function(a, b) {
      if (a && a.isBufferGeometry) {
        void 0 === b &&
          ((b = 0),
          console.warn(
            "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
          ));
        var c = this.attributes,
          d;
        for (d in c)
          if (void 0 !== a.attributes[d]) {
            var e = c[d].array,
              f = a.attributes[d],
              g = f.array,
              h = 0;
            for (f = f.itemSize * b; h < g.length; h++, f++) e[f] = g[h];
          }
        return this;
      }
      console.error(
        "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
        a
      );
    },
    normalizeNormals: (function() {
      var a = new p();
      return function() {
        for (var b = this.attributes.normal, c = 0, d = b.count; c < d; c++)
          (a.x = b.getX(c)),
            (a.y = b.getY(c)),
            (a.z = b.getZ(c)),
            a.normalize(),
            b.setXYZ(c, a.x, a.y, a.z);
      };
    })(),
    toNonIndexed: function() {
      if (null === this.index)
        return (
          console.warn(
            "THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."
          ),
          this
        );
      var a = new E(),
        b = this.index.array,
        c = this.attributes,
        d;
      for (d in c) {
        var e = c[d],
          f = e.array,
          g = e.itemSize,
          h = new f.constructor(b.length * g),
          k = 0;
        e = 0;
        for (var m = b.length; e < m; e++) {
          var l = b[e] * g;
          for (var n = 0; n < g; n++) h[k++] = f[l++];
        }
        a.addAttribute(d, new F(h, g));
      }
      b = this.groups;
      e = 0;
      for (m = b.length; e < m; e++)
        (c = b[e]), a.addGroup(c.start, c.count, c.materialIndex);
      return a;
    },
    toJSON: function() {
      var a = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      a.uuid = this.uuid;
      a.type = this.type;
      "" !== this.name && (a.name = this.name);
      0 < Object.keys(this.userData).length && (a.userData = this.userData);
      if (void 0 !== this.parameters) {
        var b = this.parameters;
        for (e in b) void 0 !== b[e] && (a[e] = b[e]);
        return a;
      }
      a.data = { attributes: {} };
      var c = this.index;
      null !== c &&
        ((b = Array.prototype.slice.call(c.array)),
        (a.data.index = { type: c.array.constructor.name, array: b }));
      c = this.attributes;
      for (e in c) {
        var d = c[e];
        b = Array.prototype.slice.call(d.array);
        a.data.attributes[e] = {
          itemSize: d.itemSize,
          type: d.array.constructor.name,
          array: b,
          normalized: d.normalized
        };
      }
      var e = this.groups;
      0 < e.length && (a.data.groups = JSON.parse(JSON.stringify(e)));
      e = this.boundingSphere;
      null !== e &&
        (a.data.boundingSphere = {
          center: e.center.toArray(),
          radius: e.radius
        });
      return a;
    },
    clone: function() {
      return new E().copy(this);
    },
    copy: function(a) {
      var b;
      this.index = null;
      this.attributes = {};
      this.morphAttributes = {};
      this.groups = [];
      this.boundingSphere = this.boundingBox = null;
      this.name = a.name;
      var c = a.index;
      null !== c && this.setIndex(c.clone());
      c = a.attributes;
      for (g in c) this.addAttribute(g, c[g].clone());
      var d = a.morphAttributes;
      for (g in d) {
        var e = [],
          f = d[g];
        c = 0;
        for (b = f.length; c < b; c++) e.push(f[c].clone());
        this.morphAttributes[g] = e;
      }
      var g = a.groups;
      c = 0;
      for (b = g.length; c < b; c++)
        (d = g[c]), this.addGroup(d.start, d.count, d.materialIndex);
      g = a.boundingBox;
      null !== g && (this.boundingBox = g.clone());
      g = a.boundingSphere;
      null !== g && (this.boundingSphere = g.clone());
      this.drawRange.start = a.drawRange.start;
      this.drawRange.count = a.drawRange.count;
      this.userData = a.userData;
      return this;
    },
    dispose: function() {
      this.dispatchEvent({ type: "dispose" });
    }
  });
  Kb.prototype = Object.create(I.prototype);
  Kb.prototype.constructor = Kb;
  pb.prototype = Object.create(E.prototype);
  pb.prototype.constructor = pb;
  yc.prototype = Object.create(I.prototype);
  yc.prototype.constructor = yc;
  qb.prototype = Object.create(E.prototype);
  qb.prototype.constructor = qb;
  var Pf = 0;
  L.prototype = Object.assign(Object.create(ia.prototype), {
    constructor: L,
    isMaterial: !0,
    onBeforeCompile: function() {},
    setValues: function(a) {
      if (void 0 !== a)
        for (var b in a) {
          var c = a[b];
          if (void 0 === c)
            console.warn("THREE.Material: '" + b + "' parameter is undefined.");
          else if ("shading" === b)
            console.warn(
              "THREE." +
                this.type +
                ": .shading has been removed. Use the boolean .flatShading instead."
            ),
              (this.flatShading = 1 === c ? !0 : !1);
          else {
            var d = this[b];
            void 0 === d
              ? console.warn(
                  "THREE." +
                    this.type +
                    ": '" +
                    b +
                    "' is not a property of this material."
                )
              : d && d.isColor
              ? d.set(c)
              : d && d.isVector3 && c && c.isVector3
              ? d.copy(c)
              : (this[b] = c);
          }
        }
    },
    toJSON: function(a) {
      function b(a) {
        var b = [],
          c;
        for (c in a) {
          var d = a[c];
          delete d.metadata;
          b.push(d);
        }
        return b;
      }
      var c = void 0 === a || "string" === typeof a;
      c && (a = { textures: {}, images: {} });
      var d = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON"
        }
      };
      d.uuid = this.uuid;
      d.type = this.type;
      "" !== this.name && (d.name = this.name);
      this.color && this.color.isColor && (d.color = this.color.getHex());
      void 0 !== this.roughness && (d.roughness = this.roughness);
      void 0 !== this.metalness && (d.metalness = this.metalness);
      this.emissive &&
        this.emissive.isColor &&
        (d.emissive = this.emissive.getHex());
      1 !== this.emissiveIntensity &&
        (d.emissiveIntensity = this.emissiveIntensity);
      this.specular &&
        this.specular.isColor &&
        (d.specular = this.specular.getHex());
      void 0 !== this.shininess && (d.shininess = this.shininess);
      void 0 !== this.clearCoat && (d.clearCoat = this.clearCoat);
      void 0 !== this.clearCoatRoughness &&
        (d.clearCoatRoughness = this.clearCoatRoughness);
      this.map && this.map.isTexture && (d.map = this.map.toJSON(a).uuid);
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (d.alphaMap = this.alphaMap.toJSON(a).uuid);
      this.lightMap &&
        this.lightMap.isTexture &&
        (d.lightMap = this.lightMap.toJSON(a).uuid);
      this.aoMap &&
        this.aoMap.isTexture &&
        ((d.aoMap = this.aoMap.toJSON(a).uuid),
        (d.aoMapIntensity = this.aoMapIntensity));
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((d.bumpMap = this.bumpMap.toJSON(a).uuid),
        (d.bumpScale = this.bumpScale));
      this.normalMap &&
        this.normalMap.isTexture &&
        ((d.normalMap = this.normalMap.toJSON(a).uuid),
        (d.normalMapType = this.normalMapType),
        (d.normalScale = this.normalScale.toArray()));
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((d.displacementMap = this.displacementMap.toJSON(a).uuid),
        (d.displacementScale = this.displacementScale),
        (d.displacementBias = this.displacementBias));
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (d.roughnessMap = this.roughnessMap.toJSON(a).uuid);
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (d.metalnessMap = this.metalnessMap.toJSON(a).uuid);
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (d.emissiveMap = this.emissiveMap.toJSON(a).uuid);
      this.specularMap &&
        this.specularMap.isTexture &&
        (d.specularMap = this.specularMap.toJSON(a).uuid);
      this.envMap &&
        this.envMap.isTexture &&
        ((d.envMap = this.envMap.toJSON(a).uuid),
        (d.reflectivity = this.reflectivity),
        void 0 !== this.combine && (d.combine = this.combine),
        void 0 !== this.envMapIntensity &&
          (d.envMapIntensity = this.envMapIntensity));
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (d.gradientMap = this.gradientMap.toJSON(a).uuid);
      void 0 !== this.size && (d.size = this.size);
      void 0 !== this.sizeAttenuation &&
        (d.sizeAttenuation = this.sizeAttenuation);
      1 !== this.blending && (d.blending = this.blending);
      !0 === this.flatShading && (d.flatShading = this.flatShading);
      0 !== this.side && (d.side = this.side);
      0 !== this.vertexColors && (d.vertexColors = this.vertexColors);
      1 > this.opacity && (d.opacity = this.opacity);
      !0 === this.transparent && (d.transparent = this.transparent);
      d.depthFunc = this.depthFunc;
      d.depthTest = this.depthTest;
      d.depthWrite = this.depthWrite;
      0 !== this.rotation && (d.rotation = this.rotation);
      !0 === this.polygonOffset && (d.polygonOffset = !0);
      0 !== this.polygonOffsetFactor &&
        (d.polygonOffsetFactor = this.polygonOffsetFactor);
      0 !== this.polygonOffsetUnits &&
        (d.polygonOffsetUnits = this.polygonOffsetUnits);
      1 !== this.linewidth && (d.linewidth = this.linewidth);
      void 0 !== this.dashSize && (d.dashSize = this.dashSize);
      void 0 !== this.gapSize && (d.gapSize = this.gapSize);
      void 0 !== this.scale && (d.scale = this.scale);
      !0 === this.dithering && (d.dithering = !0);
      0 < this.alphaTest && (d.alphaTest = this.alphaTest);
      !0 === this.premultipliedAlpha &&
        (d.premultipliedAlpha = this.premultipliedAlpha);
      !0 === this.wireframe && (d.wireframe = this.wireframe);
      1 < this.wireframeLinewidth &&
        (d.wireframeLinewidth = this.wireframeLinewidth);
      "round" !== this.wireframeLinecap &&
        (d.wireframeLinecap = this.wireframeLinecap);
      "round" !== this.wireframeLinejoin &&
        (d.wireframeLinejoin = this.wireframeLinejoin);
      !0 === this.morphTargets && (d.morphTargets = !0);
      !0 === this.skinning && (d.skinning = !0);
      !1 === this.visible && (d.visible = !1);
      "{}" !== JSON.stringify(this.userData) && (d.userData = this.userData);
      c &&
        ((c = b(a.textures)),
        (a = b(a.images)),
        0 < c.length && (d.textures = c),
        0 < a.length && (d.images = a));
      return d;
    },
    clone: function() {
      return new this.constructor().copy(this);
    },
    copy: function(a) {
      this.name = a.name;
      this.fog = a.fog;
      this.lights = a.lights;
      this.blending = a.blending;
      this.side = a.side;
      this.flatShading = a.flatShading;
      this.vertexColors = a.vertexColors;
      this.opacity = a.opacity;
      this.transparent = a.transparent;
      this.blendSrc = a.blendSrc;
      this.blendDst = a.blendDst;
      this.blendEquation = a.blendEquation;
      this.blendSrcAlpha = a.blendSrcAlpha;
      this.blendDstAlpha = a.blendDstAlpha;
      this.blendEquationAlpha = a.blendEquationAlpha;
      this.depthFunc = a.depthFunc;
      this.depthTest = a.depthTest;
      this.depthWrite = a.depthWrite;
      this.colorWrite = a.colorWrite;
      this.precision = a.precision;
      this.polygonOffset = a.polygonOffset;
      this.polygonOffsetFactor = a.polygonOffsetFactor;
      this.polygonOffsetUnits = a.polygonOffsetUnits;
      this.dithering = a.dithering;
      this.alphaTest = a.alphaTest;
      this.premultipliedAlpha = a.premultipliedAlpha;
      this.visible = a.visible;
      this.userData = JSON.parse(JSON.stringify(a.userData));
      this.clipShadows = a.clipShadows;
      this.clipIntersection = a.clipIntersection;
      var b = a.clippingPlanes,
        c = null;
      if (null !== b) {
        var d = b.length;
        c = Array(d);
        for (var e = 0; e !== d; ++e) c[e] = b[e].clone();
      }
      this.clippingPlanes = c;
      this.shadowSide = a.shadowSide;
      return this;
    },
    dispose: function() {
      this.dispatchEvent({ type: "dispose" });
    }
  });
  ka.prototype = Object.create(L.prototype);
  ka.prototype.constructor = ka;
  ka.prototype.isShaderMaterial = !0;
  ka.prototype.copy = function(a) {
    L.prototype.copy.call(this, a);
    this.fragmentShader = a.fragmentShader;
    this.vertexShader = a.vertexShader;
    this.uniforms = va.clone(a.uniforms);
    this.defines = Object.assign({}, a.defines);
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.lights = a.lights;
    this.clipping = a.clipping;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    this.extensions = a.extensions;
    return this;
  };
  ka.prototype.toJSON = function(a) {
    var b = L.prototype.toJSON.call(this, a);
    b.uniforms = {};
    for (var c in this.uniforms) {
      var d = this.uniforms[c].value;
      b.uniforms[c] = d.isTexture
        ? { type: "t", value: d.toJSON(a).uuid }
        : d.isColor
        ? { type: "c", value: d.getHex() }
        : d.isVector2
        ? { type: "v2", value: d.toArray() }
        : d.isVector3
        ? { type: "v3", value: d.toArray() }
        : d.isVector4
        ? { type: "v4", value: d.toArray() }
        : d.isMatrix4
        ? { type: "m4", value: d.toArray() }
        : { value: d };
    }
    0 < Object.keys(this.defines).length && (b.defines = this.defines);
    b.vertexShader = this.vertexShader;
    b.fragmentShader = this.fragmentShader;
    return b;
  };
  Object.assign(rb.prototype, {
    set: function(a, b) {
      this.origin.copy(a);
      this.direction.copy(b);
      return this;
    },
    clone: function() {
      return new this.constructor().copy(this);
    },
    copy: function(a) {
      this.origin.copy(a.origin);
      this.direction.copy(a.direction);
      return this;
    },
    at: function(a, b) {
      void 0 === b &&
        (console.warn("THREE.Ray: .at() target is now required"),
        (b = new p()));
      return b
        .copy(this.direction)
        .multiplyScalar(a)
        .add(this.origin);
    },
    lookAt: function(a) {
      this.direction
        .copy(a)
        .sub(this.origin)
        .normalize();
      return this;
    },
    recast: (function() {
      var a = new p();
      return function(b) {
        this.origin.copy(this.at(b, a));
        return this;
      };
    })(),
    closestPointToPoint: function(a, b) {
      void 0 === b &&
        (console.warn(
          "THREE.Ray: .closestPointToPoint() target is now required"
        ),
        (b = new p()));
      b.subVectors(a, this.origin);
      a = b.dot(this.direction);
      return 0 > a
        ? b.copy(this.origin)
        : b
            .copy(this.direction)
            .multiplyScalar(a)
            .add(this.origin);
    },
    distanceToPoint: function(a) {
      return Math.sqrt(this.distanceSqToPoint(a));
    },
    distanceSqToPoint: (function() {
      var a = new p();
      return function(b) {
        var c = a.subVectors(b, this.origin).dot(this.direction);
        if (0 > c) return this.origin.distanceToSquared(b);
        a.copy(this.direction)
          .multiplyScalar(c)
          .add(this.origin);
        return a.distanceToSquared(b);
      };
    })(),
    distanceSqToSegment: (function() {
      var a = new p(),
        b = new p(),
        c = new p();
      return function(d, e, f, g) {
        a.copy(d)
          .add(e)
          .multiplyScalar(0.5);
        b.copy(e)
          .sub(d)
          .normalize();
        c.copy(this.origin).sub(a);
        var h = 0.5 * d.distanceTo(e),
          k = -this.direction.dot(b),
          m = c.dot(this.direction),
          l = -c.dot(b),
          n = c.lengthSq(),
          r = Math.abs(1 - k * k);
        if (0 < r) {
          d = k * l - m;
          e = k * m - l;
          var p = h * r;
          0 <= d
            ? e >= -p
              ? e <= p
                ? ((h = 1 / r),
                  (d *= h),
                  (e *= h),
                  (k = d * (d + k * e + 2 * m) + e * (k * d + e + 2 * l) + n))
                : ((e = h),
                  (d = Math.max(0, -(k * e + m))),
                  (k = -d * d + e * (e + 2 * l) + n))
              : ((e = -h),
                (d = Math.max(0, -(k * e + m))),
                (k = -d * d + e * (e + 2 * l) + n))
            : e <= -p
            ? ((d = Math.max(0, -(-k * h + m))),
              (e = 0 < d ? -h : Math.min(Math.max(-h, -l), h)),
              (k = -d * d + e * (e + 2 * l) + n))
            : e <= p
            ? ((d = 0),
              (e = Math.min(Math.max(-h, -l), h)),
              (k = e * (e + 2 * l) + n))
            : ((d = Math.max(0, -(k * h + m))),
              (e = 0 < d ? h : Math.min(Math.max(-h, -l), h)),
              (k = -d * d + e * (e + 2 * l) + n));
        } else
          (e = 0 < k ? -h : h),
            (d = Math.max(0, -(k * e + m))),
            (k = -d * d + e * (e + 2 * l) + n);
        f &&
          f
            .copy(this.direction)
            .multiplyScalar(d)
            .add(this.origin);
        g &&
          g
            .copy(b)
            .multiplyScalar(e)
            .add(a);
        return k;
      };
    })(),
    intersectSphere: (function() {
      var a = new p();
      return function(b, c) {
        a.subVectors(b.center, this.origin);
        var d = a.dot(this.direction),
          e = a.dot(a) - d * d;
        b = b.radius * b.radius;
        if (e > b) return null;
        b = Math.sqrt(b - e);
        e = d - b;
        d += b;
        return 0 > e && 0 > d ? null : 0 > e ? this.at(d, c) : this.at(e, c);
      };
    })(),
    intersectsSphere: function(a) {
      return this.distanceSqToPoint(a.center) <= a.radius * a.radius;
    },
    distanceToPlane: function(a) {
      var b = a.normal.dot(this.direction);
      if (0 === b) return 0 === a.distanceToPoint(this.origin) ? 0 : null;
      a = -(this.origin.dot(a.normal) + a.constant) / b;
      return 0 <= a ? a : null;
    },
    intersectPlane: function(a, b) {
      a = this.distanceToPlane(a);
      return null === a ? null : this.at(a, b);
    },
    intersectsPlane: function(a) {
      var b = a.distanceToPoint(this.origin);
      return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1;
    },
    intersectBox: function(a, b) {
      var c = 1 / this.direction.x;
      var d = 1 / this.direction.y;
      var e = 1 / this.direction.z,
        f = this.origin;
      if (0 <= c) {
        var g = (a.min.x - f.x) * c;
        c *= a.max.x - f.x;
      } else (g = (a.max.x - f.x) * c), (c *= a.min.x - f.x);
      if (0 <= d) {
        var h = (a.min.y - f.y) * d;
        d *= a.max.y - f.y;
      } else (h = (a.max.y - f.y) * d), (d *= a.min.y - f.y);
      if (g > d || h > c) return null;
      if (h > g || g !== g) g = h;
      if (d < c || c !== c) c = d;
      0 <= e
        ? ((h = (a.min.z - f.z) * e), (a = (a.max.z - f.z) * e))
        : ((h = (a.max.z - f.z) * e), (a = (a.min.z - f.z) * e));
      if (g > a || h > c) return null;
      if (h > g || g !== g) g = h;
      if (a < c || c !== c) c = a;
      return 0 > c ? null : this.at(0 <= g ? g : c, b);
    },
    intersectsBox: (function() {
      var a = new p();
      return function(b) {
        return null !== this.intersectBox(b, a);
      };
    })(),
    intersectTriangle: (function() {
      var a = new p(),
        b = new p(),
        c = new p(),
        d = new p();
      return function(e, f, g, h, k) {
        b.subVectors(f, e);
        c.subVectors(g, e);
        d.crossVectors(b, c);
        f = this.direction.dot(d);
        if (0 < f) {
          if (h) return null;
          h = 1;
        } else if (0 > f) (h = -1), (f = -f);
        else return null;
        a.subVectors(this.origin, e);
        e = h * this.direction.dot(c.crossVectors(a, c));
        if (0 > e) return null;
        g = h * this.direction.dot(b.cross(a));
        if (0 > g || e + g > f) return null;
        e = -h * a.dot(d);
        return 0 > e ? null : this.at(e / f, k);
      };
    })(),
    applyMatrix4: function(a) {
      this.origin.applyMatrix4(a);
      this.direction.transformDirection(a);
      return this;
    },
    equals: function(a) {
      return a.origin.equals(this.origin) && a.direction.equals(this.direction);
    }
  });
  Object.assign(ha, {
    getNormal: (function() {
      var a = new p();
      return function(b, c, d, e) {
        void 0 === e &&
          (console.warn("THREE.Triangle: .getNormal() target is now required"),
          (e = new p()));
        e.subVectors(d, c);
        a.subVectors(b, c);
        e.cross(a);
        b = e.lengthSq();
        return 0 < b ? e.multiplyScalar(1 / Math.sqrt(b)) : e.set(0, 0, 0);
      };
    })(),
    getBarycoord: (function() {
      var a = new p(),
        b = new p(),
        c = new p();
      return function(d, e, f, g, h) {
        a.subVectors(g, e);
        b.subVectors(f, e);
        c.subVectors(d, e);
        d = a.dot(a);
        e = a.dot(b);
        f = a.dot(c);
        var k = b.dot(b);
        g = b.dot(c);
        var m = d * k - e * e;
        void 0 === h &&
          (console.warn(
            "THREE.Triangle: .getBarycoord() target is now required"
          ),
          (h = new p()));
        if (0 === m) return h.set(-2, -1, -1);
        m = 1 / m;
        k = (k * f - e * g) * m;
        d = (d * g - e * f) * m;
        return h.set(1 - k - d, d, k);
      };
    })(),
    containsPoint: (function() {
      var a = new p();
      return function(b, c, d, e) {
        ha.getBarycoord(b, c, d, e, a);
        return 0 <= a.x && 0 <= a.y && 1 >= a.x + a.y;
      };
    })(),
    getUV: (function() {
      var a = new p();
      return function(b, c, d, e, f, g, h, k) {
        this.getBarycoord(b, c, d, e, a);
        k.set(0, 0);
        k.addScaledVector(f, a.x);
        k.addScaledVector(g, a.y);
        k.addScaledVector(h, a.z);
        return k;
      };
    })()
  });
  Object.assign(ha.prototype, {
    set: function(a, b, c) {
      this.a.copy(a);
      this.b.copy(b);
      this.c.copy(c);
      return this;
    },
    setFromPointsAndIndices: function(a, b, c, d) {
      this.a.copy(a[b]);
      this.b.copy(a[c]);
      this.c.copy(a[d]);
      return this;
    },
    clone: function() {
      return new this.constructor().copy(this);
    },
    copy: function(a) {
      this.a.copy(a.a);
      this.b.copy(a.b);
      this.c.copy(a.c);
      return this;
    },
    getArea: (function() {
      var a = new p(),
        b = new p();
      return function() {
        a.subVectors(this.c, this.b);
        b.subVectors(this.a, this.b);
        return 0.5 * a.cross(b).length();
      };
    })(),
    getMidpoint: function(a) {
      void 0 === a &&
        (console.warn("THREE.Triangle: .getMidpoint() target is now required"),
        (a = new p()));
      return a
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3);
    },
    getNormal: function(a) {
      return ha.getNormal(this.a, this.b, this.c, a);
    },
    getPlane: function(a) {
      void 0 === a &&
        (console.warn("THREE.Triangle: .getPlane() target is now required"),
        (a = new p()));
      return a.setFromCoplanarPoints(this.a, this.b, this.c);
    },
    getBarycoord: function(a, b) {
      return ha.getBarycoord(a, this.a, this.b, this.c, b);
    },
    containsPoint: function(a) {
      return ha.containsPoint(a, this.a, this.b, this.c);
    },
    getUV: function(a, b, c, d, e) {
      return ha.getUV(a, this.a, this.b, this.c, b, c, d, e);
    },
    intersectsBox: function(a) {
      return a.intersectsTriangle(this);
    },
    closestPointToPoint: (function() {
      var a = new p(),
        b = new p(),
        c = new p(),
        d = new p(),
        e = new p(),
        f = new p();
      return function(g, h) {
        void 0 === h &&
          (console.warn(
            "THREE.Triangle: .closestPointToPoint() target is now required"
          ),
          (h = new p()));
        var k = this.a,
          m = this.b,
          l = this.c;
        a.subVectors(m, k);
        b.subVectors(l, k);
        d.subVectors(g, k);
        var n = a.dot(d),
          r = b.dot(d);
        if (0 >= n && 0 >= r) return h.copy(k);
        e.subVectors(g, m);
        var x = a.dot(e),
          t = b.dot(e);
        if (0 <= x && t <= x) return h.copy(m);
        var u = n * t - x * r;
        if (0 >= u && 0 <= n && 0 >= x)
          return (m = n / (n - x)), h.copy(k).addScaledVector(a, m);
        f.subVectors(g, l);
        g = a.dot(f);
        var w = b.dot(f);
        if (0 <= w && g <= w) return h.copy(l);
        n = g * r - n * w;
        if (0 >= n && 0 <= r && 0 >= w)
          return (u = r / (r - w)), h.copy(k).addScaledVector(b, u);
        r = x * w - g * t;
        if (0 >= r && 0 <= t - x && 0 <= g - w)
          return (
            c.subVectors(l, m),
            (u = (t - x) / (t - x + (g - w))),
            h.copy(m).addScaledVector(c, u)
          );
        l = 1 / (r + n + u);
        m = n * l;
        u *= l;
        return h
          .copy(k)
          .addScaledVector(a, m)
          .addScaledVector(b, u);
      };
    })(),
    equals: function(a) {
      return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c);
    }
  });
  Ea.prototype = Object.create(L.prototype);
  Ea.prototype.constructor = Ea;
  Ea.prototype.isMeshBasicMaterial = !0;
  Ea.prototype.copy = function(a) {
    L.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.specularMap = a.specularMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.combine = a.combine;
    this.reflectivity = a.reflectivity;
    this.refractionRatio = a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    return this;
  };
  pa.prototype = Object.assign(Object.create(D.prototype), {
    constructor: pa,
    isMesh: !0,
    setDrawMode: function(a) {
      this.drawMode = a;
    },
    copy: function(a) {
      D.prototype.copy.call(this, a);
      this.drawMode = a.drawMode;
      void 0 !== a.morphTargetInfluences &&
        (this.morphTargetInfluences = a.morphTargetInfluences.slice());
      void 0 !== a.morphTargetDictionary &&
        (this.morphTargetDictionary = Object.assign(
          {},
          a.morphTargetDictionary
        ));
      return this;
    },
    updateMorphTargets: function() {
      var a = this.geometry;
      if (a.isBufferGeometry) {
        a = a.morphAttributes;
        var b = Object.keys(a);
        if (0 < b.length) {
          var c = a[b[0]];
          if (void 0 !== c)
            for (
              this.morphTargetInfluences = [],
                this.morphTargetDictionary = {},
                a = 0,
                b = c.length;
              a < b;
              a++
            ) {
              var d = c[a].name || String(a);
              this.morphTargetInfluences.push(0);
              this.morphTargetDictionary[d] = a;
            }
        }
      } else if (((c = a.morphTargets), void 0 !== c && 0 < c.length))
        for (
          this.morphTargetInfluences = [],
            this.morphTargetDictionary = {},
            a = 0,
            b = c.length;
          a < b;
          a++
        )
          (d = c[a].name || String(a)),
            this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[d] = a);
    },
    raycast: (function() {
      function a(a, b, c, d, e, f, g, h) {
        if (
          null ===
          (1 === b.side
            ? d.intersectTriangle(g, f, e, !0, h)
            : d.intersectTriangle(e, f, g, 2 !== b.side, h))
        )
          return null;
        u.copy(h);
        u.applyMatrix4(a.matrixWorld);
        b = c.ray.origin.distanceTo(u);
        return b < c.near || b > c.far
          ? null
          : { distance: b, point: u.clone(), object: a };
      }
      function b(b, c, d, e, k, m, l, q, p) {
        f.fromBufferAttribute(k, l);
        g.fromBufferAttribute(k, q);
        h.fromBufferAttribute(k, p);
        if ((b = a(b, c, d, e, f, g, h, t)))
          m &&
            (n.fromBufferAttribute(m, l),
            r.fromBufferAttribute(m, q),
            x.fromBufferAttribute(m, p),
            (b.uv = ha.getUV(t, f, g, h, n, r, x, new z()))),
            (m = new Xa(l, q, p)),
            ha.getNormal(f, g, h, m.normal),
            (b.face = m);
        return b;
      }
      var c = new P(),
        d = new rb(),
        e = new Ga(),
        f = new p(),
        g = new p(),
        h = new p(),
        k = new p(),
        m = new p(),
        l = new p(),
        n = new z(),
        r = new z(),
        x = new z(),
        t = new p(),
        u = new p();
      return function(q, p) {
        var u = this.geometry,
          w = this.material,
          y = this.matrixWorld;
        if (
          void 0 !== w &&
          (null === u.boundingSphere && u.computeBoundingSphere(),
          e.copy(u.boundingSphere),
          e.applyMatrix4(y),
          !1 !== q.ray.intersectsSphere(e) &&
            (c.getInverse(y),
            d.copy(q.ray).applyMatrix4(c),
            null === u.boundingBox || !1 !== d.intersectsBox(u.boundingBox)))
        )
          if (u.isBufferGeometry) {
            var A = u.index,
              C = u.attributes.position,
              B = u.attributes.uv,
              E = u.groups;
            u = u.drawRange;
            var D;
            if (null !== A)
              if (Array.isArray(w)) {
                var F = 0;
                for (D = E.length; F < D; F++) {
                  var G = E[F];
                  var J = w[G.materialIndex];
                  y = Math.max(G.start, u.start);
                  var L = Math.min(G.start + G.count, u.start + u.count);
                  for (G = y; G < L; G += 3) {
                    y = A.getX(G);
                    var I = A.getX(G + 1);
                    var K = A.getX(G + 2);
                    if ((y = b(this, J, q, d, C, B, y, I, K)))
                      (y.faceIndex = Math.floor(G / 3)), p.push(y);
                  }
                }
              } else
                for (
                  y = Math.max(0, u.start),
                    L = Math.min(A.count, u.start + u.count),
                    F = y,
                    D = L;
                  F < D;
                  F += 3
                ) {
                  if (
                    ((y = A.getX(F)),
                    (I = A.getX(F + 1)),
                    (K = A.getX(F + 2)),
                    (y = b(this, w, q, d, C, B, y, I, K)))
                  )
                    (y.faceIndex = Math.floor(F / 3)), p.push(y);
                }
            else if (void 0 !== C)
              if (Array.isArray(w))
                for (F = 0, D = E.length; F < D; F++)
                  for (
                    G = E[F],
                      J = w[G.materialIndex],
                      y = Math.max(G.start, u.start),
                      L = Math.min(G.start + G.count, u.start + u.count),
                      G = y;
                    G < L;
                    G += 3
                  ) {
                    if (
                      ((y = G),
                      (I = G + 1),
                      (K = G + 2),
                      (y = b(this, J, q, d, C, B, y, I, K)))
                    )
                      (y.faceIndex = Math.floor(G / 3)), p.push(y);
                  }
              else
                for (
                  y = Math.max(0, u.start),
                    L = Math.min(C.count, u.start + u.count),
                    F = y,
                    D = L;
                  F < D;
                  F += 3
                )
                  if (
                    ((y = F),
                    (I = F + 1),
                    (K = F + 2),
                    (y = b(this, w, q, d, C, B, y, I, K)))
                  )
                    (y.faceIndex = Math.floor(F / 3)), p.push(y);
          } else if (u.isGeometry)
            for (
              C = Array.isArray(w),
                B = u.vertices,
                E = u.faces,
                y = u.faceVertexUvs[0],
                0 < y.length && (A = y),
                G = 0,
                L = E.length;
              G < L;
              G++
            )
              if (
                ((I = E[G]), (y = C ? w[I.materialIndex] : w), void 0 !== y)
              ) {
                F = B[I.a];
                D = B[I.b];
                J = B[I.c];
                if (!0 === y.morphTargets) {
                  K = u.morphTargets;
                  var Q = this.morphTargetInfluences;
                  f.set(0, 0, 0);
                  g.set(0, 0, 0);
                  h.set(0, 0, 0);
                  for (var P = 0, S = K.length; P < S; P++) {
                    var R = Q[P];
                    if (0 !== R) {
                      var T = K[P].vertices;
                      f.addScaledVector(k.subVectors(T[I.a], F), R);
                      g.addScaledVector(m.subVectors(T[I.b], D), R);
                      h.addScaledVector(l.subVectors(T[I.c], J), R);
                    }
                  }
                  f.add(F);
                  g.add(D);
                  h.add(J);
                  F = f;
                  D = g;
                  J = h;
                }
                if ((y = a(this, y, q, d, F, D, J, t)))
                  A &&
                    A[G] &&
                    ((K = A[G]),
                    n.copy(K[0]),
                    r.copy(K[1]),
                    x.copy(K[2]),
                    (y.uv = ha.getUV(t, F, D, J, n, r, x, new z()))),
                    (y.face = I),
                    (y.faceIndex = G),
                    p.push(y);
              }
      };
    })(),
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this);
    }
  });
  Ya.prototype = Object.create(W.prototype);
  Ya.prototype.constructor = Ya;
  Ya.prototype.isCubeTexture = !0;
  Object.defineProperty(Ya.prototype, "images", {
    get: function() {
      return this.image;
    },
    set: function(a) {
      this.image = a;
    }
  });
  Mb.prototype = Object.create(W.prototype);
  Mb.prototype.constructor = Mb;
  Mb.prototype.isDataTexture3D = !0;
  var Qe = new W(),
    kg = new Mb(),
    Re = new Ya(),
    Ke = [],
    Me = [],
    Pe = new Float32Array(16),
    Oe = new Float32Array(9),
    Ne = new Float32Array(4);
  Ve.prototype.updateCache = function(a) {
    var b = this.cache;
    a instanceof Float32Array &&
      b.length !== a.length &&
      (this.cache = new Float32Array(a.length));
    sa(b, a);
  };
  We.prototype.setValue = function(a, b, c) {
    for (var d = this.seq, e = 0, f = d.length; e !== f; ++e) {
      var g = d[e];
      g.setValue(a, b[g.id], c);
    }
  };
  var $d = /([\w\d_]+)(\])?(\[|\.)?/g;
  db.prototype.setValue = function(a, b, c) {
    b = this.map[b];
    void 0 !== b && b.setValue(a, c, this.renderer);
  };
  db.prototype.setOptional = function(a, b, c) {
    b = b[c];
    void 0 !== b && this.setValue(a, c, b);
  };
  db.upload = function(a, b, c, d) {
    for (var e = 0, f = b.length; e !== f; ++e) {
      var g = b[e],
        h = c[g.id];
      !1 !== h.needsUpdate && g.setValue(a, h.value, d);
    }
  };
  db.seqWithValue = function(a, b) {
    for (var c = [], d = 0, e = a.length; d !== e; ++d) {
      var f = a[d];
      f.id in b && c.push(f);
    }
    return c;
  };
  var Fg = 0,
    Og = 0;
  eb.prototype = Object.create(L.prototype);
  eb.prototype.constructor = eb;
  eb.prototype.isMeshDepthMaterial = !0;
  eb.prototype.copy = function(a) {
    L.prototype.copy.call(this, a);
    this.depthPacking = a.depthPacking;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.map = a.map;
    this.alphaMap = a.alphaMap;
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    return this;
  };
  fb.prototype = Object.create(L.prototype);
  fb.prototype.constructor = fb;
  fb.prototype.isMeshDistanceMaterial = !0;
  fb.prototype.copy = function(a) {
    L.prototype.copy.call(this, a);
    this.referencePosition.copy(a.referencePosition);
    this.nearDistance = a.nearDistance;
    this.farDistance = a.farDistance;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.map = a.map;
    this.alphaMap = a.alphaMap;
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    return this;
  };
  Ob.prototype = Object.assign(Object.create(D.prototype), {
    constructor: Ob,
    isGroup: !0
  });
  Ra.prototype = Object.assign(Object.create(D.prototype), {
    constructor: Ra,
    isCamera: !0,
    copy: function(a, b) {
      D.prototype.copy.call(this, a, b);
      this.matrixWorldInverse.copy(a.matrixWorldInverse);
      this.projectionMatrix.copy(a.projectionMatrix);
      this.projectionMatrixInverse.copy(a.projectionMatrixInverse);
      return this;
    },
    getWorldDirection: function(a) {
      void 0 === a &&
        (console.warn(
          "THREE.Camera: .getWorldDirection() target is now required"
        ),
        (a = new p()));
      this.updateMatrixWorld(!0);
      var b = this.matrixWorld.elements;
      return a.set(-b[8], -b[9], -b[10]).normalize();
    },
    updateMatrixWorld: function(a) {
      D.prototype.updateMatrixWorld.call(this, a);
      this.matrixWorldInverse.getInverse(this.matrixWorld);
    },
    clone: function() {
      return new this.constructor().copy(this);
    }
  });
  V.prototype = Object.assign(Object.create(Ra.prototype), {
    constructor: V,
    isPerspectiveCamera: !0,
    copy: function(a, b) {
      Ra.prototype.copy.call(this, a, b);
      this.fov = a.fov;
      this.zoom = a.zoom;
      this.near = a.near;
      this.far = a.far;
      this.focus = a.focus;
      this.aspect = a.aspect;
      this.view = null === a.view ? null : Object.assign({}, a.view);
      this.filmGauge = a.filmGauge;
      this.filmOffset = a.filmOffset;
      return this;
    },
    setFocalLength: function(a) {
      a = (0.5 * this.getFilmHeight()) / a;
      this.fov = 2 * R.RAD2DEG * Math.atan(a);
      this.updateProjectionMatrix();
    },
    getFocalLength: function() {
      var a = Math.tan(0.5 * R.DEG2RAD * this.fov);
      return (0.5 * this.getFilmHeight()) / a;
    },
    getEffectiveFOV: function() {
      return (
        2 *
        R.RAD2DEG *
        Math.atan(Math.tan(0.5 * R.DEG2RAD * this.fov) / this.zoom)
      );
    },
    getFilmWidth: function() {
      return this.filmGauge * Math.min(this.aspect, 1);
    },
    getFilmHeight: function() {
      return this.filmGauge / Math.max(this.aspect, 1);
    },
    setViewOffset: function(a, b, c, d, e, f) {
      this.aspect = a / b;
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1
        });
      this.view.enabled = !0;
      this.view.fullWidth = a;
      this.view.fullHeight = b;
      this.view.offsetX = c;
      this.view.offsetY = d;
      this.view.width = e;
      this.view.height = f;
      this.updateProjectionMatrix();
    },
    clearViewOffset: function() {
      null !== this.view && (this.view.enabled = !1);
      this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function() {
      var a = this.near,
        b = (a * Math.tan(0.5 * R.DEG2RAD * this.fov)) / this.zoom,
        c = 2 * b,
        d = this.aspect * c,
        e = -0.5 * d,
        f = this.view;
      if (null !== this.view && this.view.enabled) {
        var g = f.fullWidth,
          h = f.fullHeight;
        e += (f.offsetX * d) / g;
        b -= (f.offsetY * c) / h;
        d *= f.width / g;
        c *= f.height / h;
      }
      f = this.filmOffset;
      0 !== f && (e += (a * f) / this.getFilmWidth());
      this.projectionMatrix.makePerspective(e, e + d, b, b - c, a, this.far);
      this.projectionMatrixInverse.getInverse(this.projectionMatrix);
    },
    toJSON: function(a) {
      a = D.prototype.toJSON.call(this, a);
      a.object.fov = this.fov;
      a.object.zoom = this.zoom;
      a.object.near = this.near;
      a.object.far = this.far;
      a.object.focus = this.focus;
      a.object.aspect = this.aspect;
      null !== this.view && (a.object.view = Object.assign({}, this.view));
      a.object.filmGauge = this.filmGauge;
      a.object.filmOffset = this.filmOffset;
      return a;
    }
  });
  Cc.prototype = Object.assign(Object.create(V.prototype), {
    constructor: Cc,
    isArrayCamera: !0
  });
  var ff = new p(),
    gf = new p();
  Pb.prototype.isFogExp2 = !0;
  Pb.prototype.clone = function() {
    return new Pb(this.color, this.density);
  };
  Pb.prototype.toJSON = function() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    };
  };
  Qb.prototype.isFog = !0;
  Qb.prototype.clone = function() {
    return new Qb(this.color, this.near, this.far);
  };
  Qb.prototype.toJSON = function() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  };
  vd.prototype = Object.assign(Object.create(D.prototype), {
    constructor: vd,
    copy: function(a, b) {
      D.prototype.copy.call(this, a, b);
      null !== a.background && (this.background = a.background.clone());
      null !== a.fog && (this.fog = a.fog.clone());
      null !== a.overrideMaterial &&
        (this.overrideMaterial = a.overrideMaterial.clone());
      this.autoUpdate = a.autoUpdate;
      this.matrixAutoUpdate = a.matrixAutoUpdate;
      return this;
    },
    toJSON: function(a) {
      var b = D.prototype.toJSON.call(this, a);
      null !== this.background &&
        (b.object.background = this.background.toJSON(a));
      null !== this.fog && (b.object.fog = this.fog.toJSON());
      return b;
    }
  });
  Object.defineProperty(sb.prototype, "needsUpdate", {
    set: function(a) {
      !0 === a && this.version++;
    }
  });
  Object.assign(sb.prototype, {
    isInterleavedBuffer: !0,
    onUploadCallback: function() {},
    setArray: function(a) {
      if (Array.isArray(a))
        throw new TypeError(
          "THREE.BufferAttribute: array should be a Typed Array."
        );
      this.count = void 0 !== a ? a.length / this.stride : 0;
      this.array = a;
      return this;
    },
    setDynamic: function(a) {
      this.dynamic = a;
      return this;
    },
    copy: function(a) {
      this.array = new a.array.constructor(a.array);
      this.count = a.count;
      this.stride = a.stride;
      this.dynamic = a.dynamic;
      return this;
    },
    copyAt: function(a, b, c) {
      a *= this.stride;
      c *= b.stride;
      for (var d = 0, e = this.stride; d < e; d++)
        this.array[a + d] = b.array[c + d];
      return this;
    },
    set: function(a, b) {
      void 0 === b && (b = 0);
      this.array.set(a, b);
      return this;
    },
    clone: function() {
      return new this.constructor().copy(this);
    },
    onUpload: function(a) {
      this.onUploadCallback = a;
      return this;
    }
  });
  Object.defineProperties(Dc.prototype, {
    count: {
      get: function() {
        return this.data.count;
      }
    },
    array: {
      get: function() {
        return this.data.array;
      }
    }
  });
  Object.assign(Dc.prototype, {
    isInterleavedBufferAttribute: !0,
    setX: function(a, b) {
      this.data.array[a * this.data.stride + this.offset] = b;
      return this;
    },
    setY: function(a, b) {
      this.data.array[a * this.data.stride + this.offset + 1] = b;
      return this;
    },
    setZ: function(a, b) {
      this.data.array[a * this.data.stride + this.offset + 2] = b;
      return this;
    },
    setW: function(a, b) {
      this.data.array[a * this.data.stride + this.offset + 3] = b;
      return this;
    },
    getX: function(a) {
      return this.data.array[a * this.data.stride + this.offset];
    },
    getY: function(a) {
      return this.data.array[a * this.data.stride + this.offset + 1];
    },
    getZ: function(a) {
      return this.data.array[a * this.data.stride + this.offset + 2];
    },
    getW: function(a) {
      return this.data.array[a * this.data.stride + this.offset + 3];
    },
    setXY: function(a, b, c) {
      a = a * this.data.stride + this.offset;
      this.data.array[a + 0] = b;
      this.data.array[a + 1] = c;
      return this;
    },
    setXYZ: function(a, b, c, d) {
      a = a * this.data.stride + this.offset;
      this.data.array[a + 0] = b;
      this.data.array[a + 1] = c;
      this.data.array[a + 2] = d;
      return this;
    },
    setXYZW: function(a, b, c, d, e) {
      a = a * this.data.stride + this.offset;
      this.data.array[a + 0] = b;
      this.data.array[a + 1] = c;
      this.data.array[a + 2] = d;
      this.data.array[a + 3] = e;
      return this;
    }
  });
  hb.prototype = Object.create(L.prototype);
  hb.prototype.constructor = hb;
  hb.prototype.isSpriteMaterial = !0;
  hb.prototype.copy = function(a) {
    L.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.rotation = a.rotation;
    this.sizeAttenuation = a.sizeAttenuation;
    return this;
  };
  var Rb;
  Ec.prototype = Object.assign(Object.create(D.prototype), {
    constructor: Ec,
    isSprite: !0,
    raycast: (function() {
      function a(a, b, c, d, h, k) {
        e.subVectors(a, c)
          .addScalar(0.5)
          .multiply(d);
        void 0 !== h
          ? ((f.x = k * e.x - h * e.y), (f.y = h * e.x + k * e.y))
          : f.copy(e);
        a.copy(b);
        a.x += f.x;
        a.y += f.y;
        a.applyMatrix4(g);
      }
      var b = new p(),
        c = new p(),
        d = new p(),
        e = new z(),
        f = new z(),
        g = new P(),
        h = new p(),
        k = new p(),
        m = new p(),
        l = new z(),
        n = new z(),
        r = new z();
      return function(e, f) {
        c.setFromMatrixScale(this.matrixWorld);
        g.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld);
        d.setFromMatrixPosition(this.modelViewMatrix);
        var q = this.material.rotation;
        if (0 !== q) {
          var p = Math.cos(q);
          var t = Math.sin(q);
        }
        q = this.center;
        a(h.set(-0.5, -0.5, 0), d, q, c, t, p);
        a(k.set(0.5, -0.5, 0), d, q, c, t, p);
        a(m.set(0.5, 0.5, 0), d, q, c, t, p);
        l.set(0, 0);
        n.set(1, 0);
        r.set(1, 1);
        var x = e.ray.intersectTriangle(h, k, m, !1, b);
        if (
          null === x &&
          (a(k.set(-0.5, 0.5, 0), d, q, c, t, p),
          n.set(0, 1),
          (x = e.ray.intersectTriangle(h, m, k, !1, b)),
          null === x)
        )
          return;
        t = e.ray.origin.distanceTo(b);
        t < e.near ||
          t > e.far ||
          f.push({
            distance: t,
            point: b.clone(),
            uv: ha.getUV(b, h, k, m, l, n, r, new z()),
            face: null,
            object: this
          });
      };
    })(),
    clone: function() {
      return new this.constructor(this.material).copy(this);
    },
    copy: function(a) {
      D.prototype.copy.call(this, a);
      void 0 !== a.center && this.center.copy(a.center);
      return this;
    }
  });
  Fc.prototype = Object.assign(Object.create(D.prototype), {
    constructor: Fc,
    copy: function(a) {
      D.prototype.copy.call(this, a, !1);
      a = a.levels;
      for (var b = 0, c = a.length; b < c; b++) {
        var d = a[b];
        this.addLevel(d.object.clone(), d.distance);
      }
      return this;
    },
    addLevel: function(a, b) {
      void 0 === b && (b = 0);
      b = Math.abs(b);
      for (
        var c = this.levels, d = 0;
        d < c.length && !(b < c[d].distance);
        d++
      );
      c.splice(d, 0, { distance: b, object: a });
      this.add(a);
    },
    getObjectForDistance: function(a) {
      for (
        var b = this.levels, c = 1, d = b.length;
        c < d && !(a < b[c].distance);
        c++
      );
      return b[c - 1].object;
    },
    raycast: (function() {
      var a = new p();
      return function(b, c) {
        a.setFromMatrixPosition(this.matrixWorld);
        var d = b.ray.origin.distanceTo(a);
        this.getObjectForDistance(d).raycast(b, c);
      };
    })(),
    update: (function() {
      var a = new p(),
        b = new p();
      return function(c) {
        var d = this.levels;
        if (1 < d.length) {
          a.setFromMatrixPosition(c.matrixWorld);
          b.setFromMatrixPosition(this.matrixWorld);
          c = a.distanceTo(b);
          d[0].object.visible = !0;
          for (var e = 1, f = d.length; e < f; e++)
            if (c >= d[e].distance)
              (d[e - 1].object.visible = !1), (d[e].object.visible = !0);
            else break;
          for (; e < f; e++) d[e].object.visible = !1;
        }
      };
    })(),
    toJSON: function(a) {
      a = D.prototype.toJSON.call(this, a);
      a.object.levels = [];
      for (var b = this.levels, c = 0, d = b.length; c < d; c++) {
        var e = b[c];
        a.object.levels.push({ object: e.object.uuid, distance: e.distance });
      }
      return a;
    }
  });
  Object.assign(Gc.prototype, {
    calculateInverses: function() {
      this.boneInverses = [];
      for (var a = 0, b = this.bones.length; a < b; a++) {
        var c = new P();
        this.bones[a] && c.getInverse(this.bones[a].matrixWorld);
        this.boneInverses.push(c);
      }
    },
    pose: function() {
      var a, b;
      var c = 0;
      for (b = this.bones.length; c < b; c++)
        (a = this.bones[c]) && a.matrixWorld.getInverse(this.boneInverses[c]);
      c = 0;
      for (b = this.bones.length; c < b; c++)
        if ((a = this.bones[c]))
          a.parent && a.parent.isBone
            ? (a.matrix.getInverse(a.parent.matrixWorld),
              a.matrix.multiply(a.matrixWorld))
            : a.matrix.copy(a.matrixWorld),
            a.matrix.decompose(a.position, a.quaternion, a.scale);
    },
    update: (function() {
      var a = new P(),
        b = new P();
      return function() {
        for (
          var c = this.bones,
            d = this.boneInverses,
            e = this.boneMatrices,
            f = this.boneTexture,
            g = 0,
            h = c.length;
          g < h;
          g++
        )
          a.multiplyMatrices(c[g] ? c[g].matrixWorld : b, d[g]),
            a.toArray(e, 16 * g);
        void 0 !== f && (f.needsUpdate = !0);
      };
    })(),
    clone: function() {
      return new Gc(this.bones, this.boneInverses);
    },
    getBoneByName: function(a) {
      for (var b = 0, c = this.bones.length; b < c; b++) {
        var d = this.bones[b];
        if (d.name === a) return d;
      }
    }
  });
  wd.prototype = Object.assign(Object.create(D.prototype), {
    constructor: wd,
    isBone: !0
  });
  xd.prototype = Object.assign(Object.create(pa.prototype), {
    constructor: xd,
    isSkinnedMesh: !0,
    initBones: function() {
      var a = [],
        b;
      if (this.geometry && void 0 !== this.geometry.bones) {
        var c = 0;
        for (b = this.geometry.bones.length; c < b; c++) {
          var d = this.geometry.bones[c];
          var e = new wd();
          a.push(e);
          e.name = d.name;
          e.position.fromArray(d.pos);
          e.quaternion.fromArray(d.rotq);
          void 0 !== d.scl && e.scale.fromArray(d.scl);
        }
        c = 0;
        for (b = this.geometry.bones.length; c < b; c++)
          (d = this.geometry.bones[c]),
            -1 !== d.parent && null !== d.parent && void 0 !== a[d.parent]
              ? a[d.parent].add(a[c])
              : this.add(a[c]);
      }
      this.updateMatrixWorld(!0);
      return a;
    },
    bind: function(a, b) {
      this.skeleton = a;
      void 0 === b &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (b = this.matrixWorld));
      this.bindMatrix.copy(b);
      this.bindMatrixInverse.getInverse(b);
    },
    pose: function() {
      this.skeleton.pose();
    },
    normalizeSkinWeights: function() {
      var a;
      if (this.geometry && this.geometry.isGeometry)
        for (a = 0; a < this.geometry.skinWeights.length; a++) {
          var b = this.geometry.skinWeights[a];
          var c = 1 / b.manhattanLength();
          Infinity !== c ? b.multiplyScalar(c) : b.set(1, 0, 0, 0);
        }
      else if (this.geometry && this.geometry.isBufferGeometry) {
        b = new Z();
        var d = this.geometry.attributes.skinWeight;
        for (a = 0; a < d.count; a++)
          (b.x = d.getX(a)),
            (b.y = d.getY(a)),
            (b.z = d.getZ(a)),
            (b.w = d.getW(a)),
            (c = 1 / b.manhattanLength()),
            Infinity !== c ? b.multiplyScalar(c) : b.set(1, 0, 0, 0),
            d.setXYZW(a, b.x, b.y, b.z, b.w);
      }
    },
    updateMatrixWorld: function(a) {
      pa.prototype.updateMatrixWorld.call(this, a);
      "attached" === this.bindMode
        ? this.bindMatrixInverse.getInverse(this.matrixWorld)
        : "detached" === this.bindMode
        ? this.bindMatrixInverse.getInverse(this.bindMatrix)
        : console.warn(
            "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
          );
    },
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this);
    }
  });
  T.prototype = Object.create(L.prototype);
  T.prototype.constructor = T;
  T.prototype.isLineBasicMaterial = !0;
  T.prototype.copy = function(a) {
    L.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.linewidth = a.linewidth;
    this.linecap = a.linecap;
    this.linejoin = a.linejoin;
    return this;
  };
  ma.prototype = Object.assign(Object.create(D.prototype), {
    constructor: ma,
    isLine: !0,
    computeLineDistances: (function() {
      var a = new p(),
        b = new p();
      return function() {
        var c = this.geometry;
        if (c.isBufferGeometry)
          if (null === c.index) {
            for (
              var d = c.attributes.position, e = [0], f = 1, g = d.count;
              f < g;
              f++
            )
              a.fromBufferAttribute(d, f - 1),
                b.fromBufferAttribute(d, f),
                (e[f] = e[f - 1]),
                (e[f] += a.distanceTo(b));
            c.addAttribute("lineDistance", new C(e, 1));
          } else
            console.warn(
              "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
            );
        else if (c.isGeometry)
          for (
            d = c.vertices, e = c.lineDistances, e[0] = 0, f = 1, g = d.length;
            f < g;
            f++
          )
            (e[f] = e[f - 1]), (e[f] += d[f - 1].distanceTo(d[f]));
        return this;
      };
    })(),
    raycast: (function() {
      var a = new P(),
        b = new rb(),
        c = new Ga();
      return function(d, e) {
        var f = d.linePrecision,
          g = this.geometry,
          h = this.matrixWorld;
        null === g.boundingSphere && g.computeBoundingSphere();
        c.copy(g.boundingSphere);
        c.applyMatrix4(h);
        c.radius += f;
        if (!1 !== d.ray.intersectsSphere(c)) {
          a.getInverse(h);
          b.copy(d.ray).applyMatrix4(a);
          f /= (this.scale.x + this.scale.y + this.scale.z) / 3;
          f *= f;
          var k = new p(),
            m = new p();
          h = new p();
          var l = new p(),
            n = this && this.isLineSegments ? 2 : 1;
          if (g.isBufferGeometry) {
            var r = g.index,
              x = g.attributes.position.array;
            if (null !== r) {
              r = r.array;
              g = 0;
              for (var t = r.length - 1; g < t; g += n) {
                var u = r[g + 1];
                k.fromArray(x, 3 * r[g]);
                m.fromArray(x, 3 * u);
                u = b.distanceSqToSegment(k, m, l, h);
                u > f ||
                  (l.applyMatrix4(this.matrixWorld),
                  (u = d.ray.origin.distanceTo(l)),
                  u < d.near ||
                    u > d.far ||
                    e.push({
                      distance: u,
                      point: h.clone().applyMatrix4(this.matrixWorld),
                      index: g,
                      face: null,
                      faceIndex: null,
                      object: this
                    }));
              }
            } else
              for (g = 0, t = x.length / 3 - 1; g < t; g += n)
                k.fromArray(x, 3 * g),
                  m.fromArray(x, 3 * g + 3),
                  (u = b.distanceSqToSegment(k, m, l, h)),
                  u > f ||
                    (l.applyMatrix4(this.matrixWorld),
                    (u = d.ray.origin.distanceTo(l)),
                    u < d.near ||
                      u > d.far ||
                      e.push({
                        distance: u,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: g,
                        face: null,
                        faceIndex: null,
                        object: this
                      }));
          } else if (g.isGeometry)
            for (k = g.vertices, m = k.length, g = 0; g < m - 1; g += n)
              (u = b.distanceSqToSegment(k[g], k[g + 1], l, h)),
                u > f ||
                  (l.applyMatrix4(this.matrixWorld),
                  (u = d.ray.origin.distanceTo(l)),
                  u < d.near ||
                    u > d.far ||
                    e.push({
                      distance: u,
                      point: h.clone().applyMatrix4(this.matrixWorld),
                      index: g,
                      face: null,
                      faceIndex: null,
                      object: this
                    }));
        }
      };
    })(),
    copy: function(a) {
      D.prototype.copy.call(this, a);
      this.geometry.copy(a.geometry);
      this.material.copy(a.material);
      return this;
    },
    clone: function() {
      return new this.constructor().copy(this);
    }
  });
  S.prototype = Object.assign(Object.create(ma.prototype), {
    constructor: S,
    isLineSegments: !0,
    computeLineDistances: (function() {
      var a = new p(),
        b = new p();
      return function() {
        var c = this.geometry;
        if (c.isBufferGeometry)
          if (null === c.index) {
            for (
              var d = c.attributes.position, e = [], f = 0, g = d.count;
              f < g;
              f += 2
            )
              a.fromBufferAttribute(d, f),
                b.fromBufferAttribute(d, f + 1),
                (e[f] = 0 === f ? 0 : e[f - 1]),
                (e[f + 1] = e[f] + a.distanceTo(b));
            c.addAttribute("lineDistance", new C(e, 1));
          } else
            console.warn(
              "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
            );
        else if (c.isGeometry)
          for (
            d = c.vertices, e = c.lineDistances, f = 0, g = d.length;
            f < g;
            f += 2
          )
            a.copy(d[f]),
              b.copy(d[f + 1]),
              (e[f] = 0 === f ? 0 : e[f - 1]),
              (e[f + 1] = e[f] + a.distanceTo(b));
        return this;
      };
    })()
  });
  yd.prototype = Object.assign(Object.create(ma.prototype), {
    constructor: yd,
    isLineLoop: !0
  });
  Ha.prototype = Object.create(L.prototype);
  Ha.prototype.constructor = Ha;
  Ha.prototype.isPointsMaterial = !0;
  Ha.prototype.copy = function(a) {
    L.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.size = a.size;
    this.sizeAttenuation = a.sizeAttenuation;
    this.morphTargets = a.morphTargets;
    return this;
  };
  Sb.prototype = Object.assign(Object.create(D.prototype), {
    constructor: Sb,
    isPoints: !0,
    raycast: (function() {
      var a = new P(),
        b = new rb(),
        c = new Ga();
      return function(d, e) {
        function f(a, c) {
          var f = b.distanceSqToPoint(a);
          f < l &&
            (b.closestPointToPoint(a, n),
            n.applyMatrix4(k),
            (a = d.ray.origin.distanceTo(n)),
            a < d.near ||
              a > d.far ||
              e.push({
                distance: a,
                distanceToRay: Math.sqrt(f),
                point: n.clone(),
                index: c,
                face: null,
                object: g
              }));
        }
        var g = this,
          h = this.geometry,
          k = this.matrixWorld,
          m = d.params.Points.threshold;
        null === h.boundingSphere && h.computeBoundingSphere();
        c.copy(h.boundingSphere);
        c.applyMatrix4(k);
        c.radius += m;
        if (!1 !== d.ray.intersectsSphere(c)) {
          a.getInverse(k);
          b.copy(d.ray).applyMatrix4(a);
          m /= (this.scale.x + this.scale.y + this.scale.z) / 3;
          var l = m * m;
          m = new p();
          var n = new p();
          if (h.isBufferGeometry) {
            var r = h.index;
            h = h.attributes.position.array;
            if (null !== r) {
              var x = r.array;
              r = 0;
              for (var t = x.length; r < t; r++) {
                var u = x[r];
                m.fromArray(h, 3 * u);
                f(m, u);
              }
            } else
              for (r = 0, x = h.length / 3; r < x; r++)
                m.fromArray(h, 3 * r), f(m, r);
          } else
            for (m = h.vertices, r = 0, x = m.length; r < x; r++) f(m[r], r);
        }
      };
    })(),
    clone: function() {
      return new this.constructor(this.geometry, this.material).copy(this);
    }
  });
  de.prototype = Object.assign(Object.create(W.prototype), {
    constructor: de,
    isVideoTexture: !0,
    update: function() {
      var a = this.image;
      a.readyState >= a.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
    }
  });
  Tb.prototype = Object.create(W.prototype);
  Tb.prototype.constructor = Tb;
  Tb.prototype.isCompressedTexture = !0;
  Hc.prototype = Object.create(W.prototype);
  Hc.prototype.constructor = Hc;
  Hc.prototype.isCanvasTexture = !0;
  Ic.prototype = Object.create(W.prototype);
  Ic.prototype.constructor = Ic;
  Ic.prototype.isDepthTexture = !0;
  Ub.prototype = Object.create(E.prototype);
  Ub.prototype.constructor = Ub;
  Jc.prototype = Object.create(I.prototype);
  Jc.prototype.constructor = Jc;
  Vb.prototype = Object.create(E.prototype);
  Vb.prototype.constructor = Vb;
  Kc.prototype = Object.create(I.prototype);
  Kc.prototype.constructor = Kc;
  ya.prototype = Object.create(E.prototype);
  ya.prototype.constructor = ya;
  Lc.prototype = Object.create(I.prototype);
  Lc.prototype.constructor = Lc;
  Wb.prototype = Object.create(ya.prototype);
  Wb.prototype.constructor = Wb;
  Mc.prototype = Object.create(I.prototype);
  Mc.prototype.constructor = Mc;
  tb.prototype = Object.create(ya.prototype);
  tb.prototype.constructor = tb;
  Nc.prototype = Object.create(I.prototype);
  Nc.prototype.constructor = Nc;
  Xb.prototype = Object.create(ya.prototype);
  Xb.prototype.constructor = Xb;
  Oc.prototype = Object.create(I.prototype);
  Oc.prototype.constructor = Oc;
  Yb.prototype = Object.create(ya.prototype);
  Yb.prototype.constructor = Yb;
  Pc.prototype = Object.create(I.prototype);
  Pc.prototype.constructor = Pc;
  Zb.prototype = Object.create(E.prototype);
  Zb.prototype.constructor = Zb;
  Qc.prototype = Object.create(I.prototype);
  Qc.prototype.constructor = Qc;
  $b.prototype = Object.create(E.prototype);
  $b.prototype.constructor = $b;
  Rc.prototype = Object.create(I.prototype);
  Rc.prototype.constructor = Rc;
  ac.prototype = Object.create(E.prototype);
  ac.prototype.constructor = ac;
  var ah = {
      triangulate: function(a, b, c) {
        c = c || 2;
        var d = b && b.length,
          e = d ? b[0] * c : a.length,
          f = jf(a, 0, e, c, !0),
          g = [];
        if (!f) return g;
        var h;
        if (d) {
          var k = c;
          d = [];
          var m;
          var l = 0;
          for (m = b.length; l < m; l++) {
            var n = b[l] * k;
            var r = l < m - 1 ? b[l + 1] * k : a.length;
            n = jf(a, n, r, k, !1);
            n === n.next && (n.steiner = !0);
            d.push(Wg(n));
          }
          d.sort(Ug);
          for (l = 0; l < d.length; l++) {
            b = d[l];
            k = f;
            if ((k = Vg(b, k))) (b = mf(k, b)), Tc(b, b.next);
            f = Tc(f, f.next);
          }
        }
        if (a.length > 80 * c) {
          var p = (h = a[0]);
          var t = (d = a[1]);
          for (k = c; k < e; k += c)
            (l = a[k]),
              (b = a[k + 1]),
              l < p && (p = l),
              b < t && (t = b),
              l > h && (h = l),
              b > d && (d = b);
          h = Math.max(h - p, d - t);
          h = 0 !== h ? 1 / h : 0;
        }
        Uc(f, g, c, p, t, h);
        return g;
      }
    },
    Za = {
      area: function(a) {
        for (var b = a.length, c = 0, d = b - 1, e = 0; e < b; d = e++)
          c += a[d].x * a[e].y - a[e].x * a[d].y;
        return 0.5 * c;
      },
      isClockWise: function(a) {
        return 0 > Za.area(a);
      },
      triangulateShape: function(a, b) {
        var c = [],
          d = [],
          e = [];
        nf(a);
        of(c, a);
        var f = a.length;
        b.forEach(nf);
        for (a = 0; a < b.length; a++)
          d.push(f), (f += b[a].length), of(c, b[a]);
        b = ah.triangulate(c, d);
        for (a = 0; a < b.length; a += 3) e.push(b.slice(a, a + 3));
        return e;
      }
    };
  vb.prototype = Object.create(I.prototype);
  vb.prototype.constructor = vb;
  vb.prototype.toJSON = function() {
    var a = I.prototype.toJSON.call(this);
    return pf(this.parameters.shapes, this.parameters.options, a);
  };
  Sa.prototype = Object.create(E.prototype);
  Sa.prototype.constructor = Sa;
  Sa.prototype.toJSON = function() {
    var a = E.prototype.toJSON.call(this);
    return pf(this.parameters.shapes, this.parameters.options, a);
  };
  var Xg = {
    generateTopUV: function(a, b, c, d, e) {
      a = b[3 * d];
      d = b[3 * d + 1];
      var f = b[3 * e];
      e = b[3 * e + 1];
      return [new z(b[3 * c], b[3 * c + 1]), new z(a, d), new z(f, e)];
    },
    generateSideWallUV: function(a, b, c, d, e, f) {
      a = b[3 * c];
      var g = b[3 * c + 1];
      c = b[3 * c + 2];
      var h = b[3 * d],
        k = b[3 * d + 1];
      d = b[3 * d + 2];
      var m = b[3 * e],
        l = b[3 * e + 1];
      e = b[3 * e + 2];
      var n = b[3 * f],
        r = b[3 * f + 1];
      b = b[3 * f + 2];
      return 0.01 > Math.abs(g - k)
        ? [new z(a, 1 - c), new z(h, 1 - d), new z(m, 1 - e), new z(n, 1 - b)]
        : [new z(g, 1 - c), new z(k, 1 - d), new z(l, 1 - e), new z(r, 1 - b)];
    }
  };
  Wc.prototype = Object.create(I.prototype);
  Wc.prototype.constructor = Wc;
  bc.prototype = Object.create(Sa.prototype);
  bc.prototype.constructor = bc;
  Xc.prototype = Object.create(I.prototype);
  Xc.prototype.constructor = Xc;
  wb.prototype = Object.create(E.prototype);
  wb.prototype.constructor = wb;
  Yc.prototype = Object.create(I.prototype);
  Yc.prototype.constructor = Yc;
  cc.prototype = Object.create(E.prototype);
  cc.prototype.constructor = cc;
  Zc.prototype = Object.create(I.prototype);
  Zc.prototype.constructor = Zc;
  dc.prototype = Object.create(E.prototype);
  dc.prototype.constructor = dc;
  xb.prototype = Object.create(I.prototype);
  xb.prototype.constructor = xb;
  xb.prototype.toJSON = function() {
    var a = I.prototype.toJSON.call(this);
    return qf(this.parameters.shapes, a);
  };
  yb.prototype = Object.create(E.prototype);
  yb.prototype.constructor = yb;
  yb.prototype.toJSON = function() {
    var a = E.prototype.toJSON.call(this);
    return qf(this.parameters.shapes, a);
  };
  ec.prototype = Object.create(E.prototype);
  ec.prototype.constructor = ec;
  zb.prototype = Object.create(I.prototype);
  zb.prototype.constructor = zb;
  $a.prototype = Object.create(E.prototype);
  $a.prototype.constructor = $a;
  $c.prototype = Object.create(zb.prototype);
  $c.prototype.constructor = $c;
  ad.prototype = Object.create($a.prototype);
  ad.prototype.constructor = ad;
  bd.prototype = Object.create(I.prototype);
  bd.prototype.constructor = bd;
  fc.prototype = Object.create(E.prototype);
  fc.prototype.constructor = fc;
  var Ba = Object.freeze({
    WireframeGeometry: Ub,
    ParametricGeometry: Jc,
    ParametricBufferGeometry: Vb,
    TetrahedronGeometry: Lc,
    TetrahedronBufferGeometry: Wb,
    OctahedronGeometry: Mc,
    OctahedronBufferGeometry: tb,
    IcosahedronGeometry: Nc,
    IcosahedronBufferGeometry: Xb,
    DodecahedronGeometry: Oc,
    DodecahedronBufferGeometry: Yb,
    PolyhedronGeometry: Kc,
    PolyhedronBufferGeometry: ya,
    TubeGeometry: Pc,
    TubeBufferGeometry: Zb,
    TorusKnotGeometry: Qc,
    TorusKnotBufferGeometry: $b,
    TorusGeometry: Rc,
    TorusBufferGeometry: ac,
    TextGeometry: Wc,
    TextBufferGeometry: bc,
    SphereGeometry: Xc,
    SphereBufferGeometry: wb,
    RingGeometry: Yc,
    RingBufferGeometry: cc,
    PlaneGeometry: yc,
    PlaneBufferGeometry: qb,
    LatheGeometry: Zc,
    LatheBufferGeometry: dc,
    ShapeGeometry: xb,
    ShapeBufferGeometry: yb,
    ExtrudeGeometry: vb,
    ExtrudeBufferGeometry: Sa,
    EdgesGeometry: ec,
    ConeGeometry: $c,
    ConeBufferGeometry: ad,
    CylinderGeometry: zb,
    CylinderBufferGeometry: $a,
    CircleGeometry: bd,
    CircleBufferGeometry: fc,
    BoxGeometry: Kb,
    BoxBufferGeometry: pb
  });
  Ab.prototype = Object.create(L.prototype);
  Ab.prototype.constructor = Ab;
  Ab.prototype.isShadowMaterial = !0;
  Ab.prototype.copy = function(a) {
    L.prototype.copy.call(this, a);
    this.color.copy(a.color);
    return this;
  };
  gc.prototype = Object.create(ka.prototype);
  gc.prototype.constructor = gc;
  gc.prototype.isRawShaderMaterial = !0;
  Ta.prototype = Object.create(L.prototype);
  Ta.prototype.constructor = Ta;
  Ta.prototype.isMeshStandardMaterial = !0;
  Ta.prototype.copy = function(a) {
    L.prototype.copy.call(this, a);
    this.defines = { STANDARD: "" };
    this.color.copy(a.color);
    this.roughness = a.roughness;
    this.metalness = a.metalness;
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalMapType = a.normalMapType;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.roughnessMap = a.roughnessMap;
    this.metalnessMap = a.metalnessMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.envMapIntensity = a.envMapIntensity;
    this.refractionRatio = a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this;
  };
  Bb.prototype = Object.create(Ta.prototype);
  Bb.prototype.constructor = Bb;
  Bb.prototype.isMeshPhysicalMaterial = !0;
  Bb.prototype.copy = function(a) {
    Ta.prototype.copy.call(this, a);
    this.defines = { PHYSICAL: "" };
    this.reflectivity = a.reflectivity;
    this.clearCoat = a.clearCoat;
    this.clearCoatRoughness = a.clearCoatRoughness;
    return this;
  };
  Ia.prototype = Object.create(L.prototype);
  Ia.prototype.constructor = Ia;
  Ia.prototype.isMeshPhongMaterial = !0;
  Ia.prototype.copy = function(a) {
    L.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.specular.copy(a.specular);
    this.shininess = a.shininess;
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalMapType = a.normalMapType;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.specularMap = a.specularMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.combine = a.combine;
    this.reflectivity = a.reflectivity;
    this.refractionRatio = a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this;
  };
  Cb.prototype = Object.create(Ia.prototype);
  Cb.prototype.constructor = Cb;
  Cb.prototype.isMeshToonMaterial = !0;
  Cb.prototype.copy = function(a) {
    Ia.prototype.copy.call(this, a);
    this.gradientMap = a.gradientMap;
    return this;
  };
  Db.prototype = Object.create(L.prototype);
  Db.prototype.constructor = Db;
  Db.prototype.isMeshNormalMaterial = !0;
  Db.prototype.copy = function(a) {
    L.prototype.copy.call(this, a);
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalMapType = a.normalMapType;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this;
  };
  Eb.prototype = Object.create(L.prototype);
  Eb.prototype.constructor = Eb;
  Eb.prototype.isMeshLambertMaterial = !0;
  Eb.prototype.copy = function(a) {
    L.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.specularMap = a.specularMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.combine = a.combine;
    this.reflectivity = a.reflectivity;
    this.refractionRatio = a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this;
  };
  Fb.prototype = Object.create(L.prototype);
  Fb.prototype.constructor = Fb;
  Fb.prototype.isMeshMatcapMaterial = !0;
  Fb.prototype.copy = function(a) {
    L.prototype.copy.call(this, a);
    this.defines = { MATCAP: "" };
    this.color.copy(a.color);
    this.matcap = a.matcap;
    this.map = a.map;
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalMapType = a.normalMapType;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.alphaMap = a.alphaMap;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this;
  };
  Gb.prototype = Object.create(T.prototype);
  Gb.prototype.constructor = Gb;
  Gb.prototype.isLineDashedMaterial = !0;
  Gb.prototype.copy = function(a) {
    T.prototype.copy.call(this, a);
    this.scale = a.scale;
    this.dashSize = a.dashSize;
    this.gapSize = a.gapSize;
    return this;
  };
  var bh = Object.freeze({
      ShadowMaterial: Ab,
      SpriteMaterial: hb,
      RawShaderMaterial: gc,
      ShaderMaterial: ka,
      PointsMaterial: Ha,
      MeshPhysicalMaterial: Bb,
      MeshStandardMaterial: Ta,
      MeshPhongMaterial: Ia,
      MeshToonMaterial: Cb,
      MeshNormalMaterial: Db,
      MeshLambertMaterial: Eb,
      MeshDepthMaterial: eb,
      MeshDistanceMaterial: fb,
      MeshBasicMaterial: Ea,
      MeshMatcapMaterial: Fb,
      LineDashedMaterial: Gb,
      LineBasicMaterial: T,
      Material: L
    }),
    ra = {
      arraySlice: function(a, b, c) {
        return ra.isTypedArray(a)
          ? new a.constructor(a.subarray(b, void 0 !== c ? c : a.length))
          : a.slice(b, c);
      },
      convertArray: function(a, b, c) {
        return !a || (!c && a.constructor === b)
          ? a
          : "number" === typeof b.BYTES_PER_ELEMENT
          ? new b(a)
          : Array.prototype.slice.call(a);
      },
      isTypedArray: function(a) {
        return ArrayBuffer.isView(a) && !(a instanceof DataView);
      },
      getKeyframeOrder: function(a) {
        for (var b = a.length, c = Array(b), d = 0; d !== b; ++d) c[d] = d;
        c.sort(function(b, c) {
          return a[b] - a[c];
        });
        return c;
      },
      sortedArray: function(a, b, c) {
        for (
          var d = a.length, e = new a.constructor(d), f = 0, g = 0;
          g !== d;
          ++f
        )
          for (var h = c[f] * b, k = 0; k !== b; ++k) e[g++] = a[h + k];
        return e;
      },
      flattenJSON: function(a, b, c, d) {
        for (var e = 1, f = a[0]; void 0 !== f && void 0 === f[d]; ) f = a[e++];
        if (void 0 !== f) {
          var g = f[d];
          if (void 0 !== g)
            if (Array.isArray(g)) {
              do
                (g = f[d]),
                  void 0 !== g && (b.push(f.time), c.push.apply(c, g)),
                  (f = a[e++]);
              while (void 0 !== f);
            } else if (void 0 !== g.toArray) {
              do
                (g = f[d]),
                  void 0 !== g && (b.push(f.time), g.toArray(c, c.length)),
                  (f = a[e++]);
              while (void 0 !== f);
            } else {
              do
                (g = f[d]),
                  void 0 !== g && (b.push(f.time), c.push(g)),
                  (f = a[e++]);
              while (void 0 !== f);
            }
        }
      }
    };
  Object.assign(Ca.prototype, {
    evaluate: function(a) {
      var b = this.parameterPositions,
        c = this._cachedIndex,
        d = b[c],
        e = b[c - 1];
      a: {
        b: {
          c: {
            d: if (!(a < d)) {
              for (var f = c + 2; ; ) {
                if (void 0 === d) {
                  if (a < e) break d;
                  this._cachedIndex = c = b.length;
                  return this.afterEnd_(c - 1, a, e);
                }
                if (c === f) break;
                e = d;
                d = b[++c];
                if (a < d) break b;
              }
              d = b.length;
              break c;
            }
            if (a >= e) break a;
            else {
              f = b[1];
              a < f && ((c = 2), (e = f));
              for (f = c - 2; ; ) {
                if (void 0 === e)
                  return (this._cachedIndex = 0), this.beforeStart_(0, a, d);
                if (c === f) break;
                d = e;
                e = b[--c - 1];
                if (a >= e) break b;
              }
              d = c;
              c = 0;
            }
          }
          for (; c < d; ) (e = (c + d) >>> 1), a < b[e] ? (d = e) : (c = e + 1);
          d = b[c];
          e = b[c - 1];
          if (void 0 === e)
            return (this._cachedIndex = 0), this.beforeStart_(0, a, d);
          if (void 0 === d)
            return (
              (this._cachedIndex = c = b.length), this.afterEnd_(c - 1, e, a)
            );
        }
        this._cachedIndex = c;
        this.intervalChanged_(c, e, d);
      }
      return this.interpolate_(c, e, a, d);
    },
    settings: null,
    DefaultSettings_: {},
    getSettings_: function() {
      return this.settings || this.DefaultSettings_;
    },
    copySampleValue_: function(a) {
      var b = this.resultBuffer,
        c = this.sampleValues,
        d = this.valueSize;
      a *= d;
      for (var e = 0; e !== d; ++e) b[e] = c[a + e];
      return b;
    },
    interpolate_: function() {
      throw Error("call to abstract method");
    },
    intervalChanged_: function() {}
  });
  Object.assign(Ca.prototype, {
    beforeStart_: Ca.prototype.copySampleValue_,
    afterEnd_: Ca.prototype.copySampleValue_
  });
  Ad.prototype = Object.assign(Object.create(Ca.prototype), {
    constructor: Ad,
    DefaultSettings_: { endingStart: 2400, endingEnd: 2400 },
    intervalChanged_: function(a, b, c) {
      var d = this.parameterPositions,
        e = a - 2,
        f = a + 1,
        g = d[e],
        h = d[f];
      if (void 0 === g)
        switch (this.getSettings_().endingStart) {
          case 2401:
            e = a;
            g = 2 * b - c;
            break;
          case 2402:
            e = d.length - 2;
            g = b + d[e] - d[e + 1];
            break;
          default:
            (e = a), (g = c);
        }
      if (void 0 === h)
        switch (this.getSettings_().endingEnd) {
          case 2401:
            f = a;
            h = 2 * c - b;
            break;
          case 2402:
            f = 1;
            h = c + d[1] - d[0];
            break;
          default:
            (f = a - 1), (h = b);
        }
      a = 0.5 * (c - b);
      d = this.valueSize;
      this._weightPrev = a / (b - g);
      this._weightNext = a / (h - c);
      this._offsetPrev = e * d;
      this._offsetNext = f * d;
    },
    interpolate_: function(a, b, c, d) {
      var e = this.resultBuffer,
        f = this.sampleValues,
        g = this.valueSize;
      a *= g;
      var h = a - g,
        k = this._offsetPrev,
        m = this._offsetNext,
        l = this._weightPrev,
        n = this._weightNext,
        r = (c - b) / (d - b);
      c = r * r;
      d = c * r;
      b = -l * d + 2 * l * c - l * r;
      l = (1 + l) * d + (-1.5 - 2 * l) * c + (-0.5 + l) * r + 1;
      r = (-1 - n) * d + (1.5 + n) * c + 0.5 * r;
      n = n * d - n * c;
      for (c = 0; c !== g; ++c)
        e[c] = b * f[k + c] + l * f[h + c] + r * f[a + c] + n * f[m + c];
      return e;
    }
  });
  cd.prototype = Object.assign(Object.create(Ca.prototype), {
    constructor: cd,
    interpolate_: function(a, b, c, d) {
      var e = this.resultBuffer,
        f = this.sampleValues,
        g = this.valueSize;
      a *= g;
      var h = a - g;
      b = (c - b) / (d - b);
      c = 1 - b;
      for (d = 0; d !== g; ++d) e[d] = f[h + d] * c + f[a + d] * b;
      return e;
    }
  });
  Bd.prototype = Object.assign(Object.create(Ca.prototype), {
    constructor: Bd,
    interpolate_: function(a) {
      return this.copySampleValue_(a - 1);
    }
  });
  Object.assign(qa, {
    toJSON: function(a) {
      var b = a.constructor;
      if (void 0 !== b.toJSON) b = b.toJSON(a);
      else {
        b = {
          name: a.name,
          times: ra.convertArray(a.times, Array),
          values: ra.convertArray(a.values, Array)
        };
        var c = a.getInterpolation();
        c !== a.DefaultInterpolation && (b.interpolation = c);
      }
      b.type = a.ValueTypeName;
      return b;
    }
  });
  Object.assign(qa.prototype, {
    constructor: qa,
    TimeBufferType: Float32Array,
    ValueBufferType: Float32Array,
    DefaultInterpolation: 2301,
    InterpolantFactoryMethodDiscrete: function(a) {
      return new Bd(this.times, this.values, this.getValueSize(), a);
    },
    InterpolantFactoryMethodLinear: function(a) {
      return new cd(this.times, this.values, this.getValueSize(), a);
    },
    InterpolantFactoryMethodSmooth: function(a) {
      return new Ad(this.times, this.values, this.getValueSize(), a);
    },
    setInterpolation: function(a) {
      switch (a) {
        case 2300:
          var b = this.InterpolantFactoryMethodDiscrete;
          break;
        case 2301:
          b = this.InterpolantFactoryMethodLinear;
          break;
        case 2302:
          b = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === b) {
        b =
          "unsupported interpolation for " +
          this.ValueTypeName +
          " keyframe track named " +
          this.name;
        if (void 0 === this.createInterpolant)
          if (a !== this.DefaultInterpolation)
            this.setInterpolation(this.DefaultInterpolation);
          else throw Error(b);
        console.warn("THREE.KeyframeTrack:", b);
        return this;
      }
      this.createInterpolant = b;
      return this;
    },
    getInterpolation: function() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return 2300;
        case this.InterpolantFactoryMethodLinear:
          return 2301;
        case this.InterpolantFactoryMethodSmooth:
          return 2302;
      }
    },
    getValueSize: function() {
      return this.values.length / this.times.length;
    },
    shift: function(a) {
      if (0 !== a)
        for (var b = this.times, c = 0, d = b.length; c !== d; ++c) b[c] += a;
      return this;
    },
    scale: function(a) {
      if (1 !== a)
        for (var b = this.times, c = 0, d = b.length; c !== d; ++c) b[c] *= a;
      return this;
    },
    trim: function(a, b) {
      for (
        var c = this.times, d = c.length, e = 0, f = d - 1;
        e !== d && c[e] < a;

      )
        ++e;
      for (; -1 !== f && c[f] > b; ) --f;
      ++f;
      if (0 !== e || f !== d)
        e >= f && ((f = Math.max(f, 1)), (e = f - 1)),
          (a = this.getValueSize()),
          (this.times = ra.arraySlice(c, e, f)),
          (this.values = ra.arraySlice(this.values, e * a, f * a));
      return this;
    },
    validate: function() {
      var a = !0,
        b = this.getValueSize();
      0 !== b - Math.floor(b) &&
        (console.error(
          "THREE.KeyframeTrack: Invalid value size in track.",
          this
        ),
        (a = !1));
      var c = this.times;
      b = this.values;
      var d = c.length;
      0 === d &&
        (console.error("THREE.KeyframeTrack: Track is empty.", this), (a = !1));
      for (var e = null, f = 0; f !== d; f++) {
        var g = c[f];
        if ("number" === typeof g && isNaN(g)) {
          console.error(
            "THREE.KeyframeTrack: Time is not a valid number.",
            this,
            f,
            g
          );
          a = !1;
          break;
        }
        if (null !== e && e > g) {
          console.error(
            "THREE.KeyframeTrack: Out of order keys.",
            this,
            f,
            g,
            e
          );
          a = !1;
          break;
        }
        e = g;
      }
      if (void 0 !== b && ra.isTypedArray(b))
        for (f = 0, c = b.length; f !== c; ++f)
          if (((d = b[f]), isNaN(d))) {
            console.error(
              "THREE.KeyframeTrack: Value is not a valid number.",
              this,
              f,
              d
            );
            a = !1;
            break;
          }
      return a;
    },
    optimize: function() {
      for (
        var a = this.times,
          b = this.values,
          c = this.getValueSize(),
          d = 2302 === this.getInterpolation(),
          e = 1,
          f = a.length - 1,
          g = 1;
        g < f;
        ++g
      ) {
        var h = !1,
          k = a[g];
        if (k !== a[g + 1] && (1 !== g || k !== k[0]))
          if (d) h = !0;
          else {
            var m = g * c,
              l = m - c,
              n = m + c;
            for (k = 0; k !== c; ++k) {
              var r = b[m + k];
              if (r !== b[l + k] || r !== b[n + k]) {
                h = !0;
                break;
              }
            }
          }
        if (h) {
          if (g !== e)
            for (a[e] = a[g], h = g * c, m = e * c, k = 0; k !== c; ++k)
              b[m + k] = b[h + k];
          ++e;
        }
      }
      if (0 < f) {
        a[e] = a[f];
        h = f * c;
        m = e * c;
        for (k = 0; k !== c; ++k) b[m + k] = b[h + k];
        ++e;
      }
      e !== a.length &&
        ((this.times = ra.arraySlice(a, 0, e)),
        (this.values = ra.arraySlice(b, 0, e * c)));
      return this;
    }
  });
  Cd.prototype = Object.assign(Object.create(qa.prototype), {
    constructor: Cd,
    ValueTypeName: "bool",
    ValueBufferType: Array,
    DefaultInterpolation: 2300,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
  });
  Dd.prototype = Object.assign(Object.create(qa.prototype), {
    constructor: Dd,
    ValueTypeName: "color"
  });
  hc.prototype = Object.assign(Object.create(qa.prototype), {
    constructor: hc,
    ValueTypeName: "number"
  });
  Ed.prototype = Object.assign(Object.create(Ca.prototype), {
    constructor: Ed,
    interpolate_: function(a, b, c, d) {
      var e = this.resultBuffer,
        f = this.sampleValues,
        g = this.valueSize;
      a *= g;
      b = (c - b) / (d - b);
      for (c = a + g; a !== c; a += 4) ja.slerpFlat(e, 0, f, a - g, f, a, b);
      return e;
    }
  });
  dd.prototype = Object.assign(Object.create(qa.prototype), {
    constructor: dd,
    ValueTypeName: "quaternion",
    DefaultInterpolation: 2301,
    InterpolantFactoryMethodLinear: function(a) {
      return new Ed(this.times, this.values, this.getValueSize(), a);
    },
    InterpolantFactoryMethodSmooth: void 0
  });
  Fd.prototype = Object.assign(Object.create(qa.prototype), {
    constructor: Fd,
    ValueTypeName: "string",
    ValueBufferType: Array,
    DefaultInterpolation: 2300,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
  });
  ic.prototype = Object.assign(Object.create(qa.prototype), {
    constructor: ic,
    ValueTypeName: "vector"
  });
  Object.assign(za, {
    parse: function(a) {
      for (
        var b = [], c = a.tracks, d = 1 / (a.fps || 1), e = 0, f = c.length;
        e !== f;
        ++e
      )
        b.push(Zg(c[e]).scale(d));
      return new za(a.name, a.duration, b);
    },
    toJSON: function(a) {
      var b = [],
        c = a.tracks;
      a = { name: a.name, duration: a.duration, tracks: b, uuid: a.uuid };
      for (var d = 0, e = c.length; d !== e; ++d) b.push(qa.toJSON(c[d]));
      return a;
    },
    CreateFromMorphTargetSequence: function(a, b, c, d) {
      for (var e = b.length, f = [], g = 0; g < e; g++) {
        var h = [],
          k = [];
        h.push((g + e - 1) % e, g, (g + 1) % e);
        k.push(0, 1, 0);
        var m = ra.getKeyframeOrder(h);
        h = ra.sortedArray(h, 1, m);
        k = ra.sortedArray(k, 1, m);
        d || 0 !== h[0] || (h.push(e), k.push(k[0]));
        f.push(
          new hc(".morphTargetInfluences[" + b[g].name + "]", h, k).scale(1 / c)
        );
      }
      return new za(a, -1, f);
    },
    findByName: function(a, b) {
      var c = a;
      Array.isArray(a) ||
        (c = (a.geometry && a.geometry.animations) || a.animations);
      for (a = 0; a < c.length; a++) if (c[a].name === b) return c[a];
      return null;
    },
    CreateClipsFromMorphTargetSequences: function(a, b, c) {
      for (
        var d = {}, e = /^([\w-]*?)([\d]+)$/, f = 0, g = a.length;
        f < g;
        f++
      ) {
        var h = a[f],
          k = h.name.match(e);
        if (k && 1 < k.length) {
          var m = k[1];
          (k = d[m]) || (d[m] = k = []);
          k.push(h);
        }
      }
      a = [];
      for (m in d) a.push(za.CreateFromMorphTargetSequence(m, d[m], b, c));
      return a;
    },
    parseAnimation: function(a, b) {
      if (!a)
        return (
          console.error(
            "THREE.AnimationClip: No animation in JSONLoader data."
          ),
          null
        );
      var c = function(a, b, c, d, e) {
          if (0 !== c.length) {
            var f = [],
              g = [];
            ra.flattenJSON(c, f, g, d);
            0 !== f.length && e.push(new a(b, f, g));
          }
        },
        d = [],
        e = a.name || "default",
        f = a.length || -1,
        g = a.fps || 30;
      a = a.hierarchy || [];
      for (var h = 0; h < a.length; h++) {
        var k = a[h].keys;
        if (k && 0 !== k.length)
          if (k[0].morphTargets) {
            f = {};
            for (var m = 0; m < k.length; m++)
              if (k[m].morphTargets)
                for (var l = 0; l < k[m].morphTargets.length; l++)
                  f[k[m].morphTargets[l]] = -1;
            for (var n in f) {
              var r = [],
                p = [];
              for (l = 0; l !== k[m].morphTargets.length; ++l) {
                var t = k[m];
                r.push(t.time);
                p.push(t.morphTarget === n ? 1 : 0);
              }
              d.push(new hc(".morphTargetInfluence[" + n + "]", r, p));
            }
            f = f.length * (g || 1);
          } else
            (m = ".bones[" + b[h].name + "]"),
              c(ic, m + ".position", k, "pos", d),
              c(dd, m + ".quaternion", k, "rot", d),
              c(ic, m + ".scale", k, "scl", d);
      }
      return 0 === d.length ? null : new za(e, f, d);
    }
  });
  Object.assign(za.prototype, {
    resetDuration: function() {
      for (var a = 0, b = 0, c = this.tracks.length; b !== c; ++b) {
        var d = this.tracks[b];
        a = Math.max(a, d.times[d.times.length - 1]);
      }
      this.duration = a;
      return this;
    },
    trim: function() {
      for (var a = 0; a < this.tracks.length; a++)
        this.tracks[a].trim(0, this.duration);
      return this;
    },
    validate: function() {
      for (var a = !0, b = 0; b < this.tracks.length; b++)
        a = a && this.tracks[b].validate();
      return a;
    },
    optimize: function() {
      for (var a = 0; a < this.tracks.length; a++) this.tracks[a].optimize();
      return this;
    }
  });
  var Ib = {
      enabled: !1,
      files: {},
      add: function(a, b) {
        !1 !== this.enabled && (this.files[a] = b);
      },
      get: function(a) {
        if (!1 !== this.enabled) return this.files[a];
      },
      remove: function(a) {
        delete this.files[a];
      },
      clear: function() {
        this.files = {};
      }
    },
    ta = new ge(),
    Oa = {};
  Object.assign(Fa.prototype, {
    load: function(a, b, c, d) {
      void 0 === a && (a = "");
      void 0 !== this.path && (a = this.path + a);
      a = this.manager.resolveURL(a);
      var e = this,
        f = Ib.get(a);
      if (void 0 !== f)
        return (
          e.manager.itemStart(a),
          setTimeout(function() {
            b && b(f);
            e.manager.itemEnd(a);
          }, 0),
          f
        );
      if (void 0 !== Oa[a])
        Oa[a].push({ onLoad: b, onProgress: c, onError: d });
      else {
        var g = a.match(/^data:(.*?)(;base64)?,(.*)$/);
        if (g) {
          c = g[1];
          var h = !!g[2];
          g = g[3];
          g = decodeURIComponent(g);
          h && (g = atob(g));
          try {
            var k = (this.responseType || "").toLowerCase();
            switch (k) {
              case "arraybuffer":
              case "blob":
                var m = new Uint8Array(g.length);
                for (h = 0; h < g.length; h++) m[h] = g.charCodeAt(h);
                var l =
                  "blob" === k ? new Blob([m.buffer], { type: c }) : m.buffer;
                break;
              case "document":
                l = new DOMParser().parseFromString(g, c);
                break;
              case "json":
                l = JSON.parse(g);
                break;
              default:
                l = g;
            }
            setTimeout(function() {
              b && b(l);
              e.manager.itemEnd(a);
            }, 0);
          } catch (r) {
            setTimeout(function() {
              d && d(r);
              e.manager.itemError(a);
              e.manager.itemEnd(a);
            }, 0);
          }
        } else {
          Oa[a] = [];
          Oa[a].push({ onLoad: b, onProgress: c, onError: d });
          var n = new XMLHttpRequest();
          n.open("GET", a, !0);
          n.addEventListener(
            "load",
            function(b) {
              var c = this.response;
              Ib.add(a, c);
              var d = Oa[a];
              delete Oa[a];
              if (200 === this.status || 0 === this.status) {
                0 === this.status &&
                  console.warn("THREE.FileLoader: HTTP Status 0 received.");
                for (var f = 0, g = d.length; f < g; f++) {
                  var h = d[f];
                  if (h.onLoad) h.onLoad(c);
                }
              } else {
                f = 0;
                for (g = d.length; f < g; f++)
                  if (((h = d[f]), h.onError)) h.onError(b);
                e.manager.itemError(a);
              }
              e.manager.itemEnd(a);
            },
            !1
          );
          n.addEventListener(
            "progress",
            function(b) {
              for (var c = Oa[a], d = 0, e = c.length; d < e; d++) {
                var f = c[d];
                if (f.onProgress) f.onProgress(b);
              }
            },
            !1
          );
          n.addEventListener(
            "error",
            function(b) {
              var c = Oa[a];
              delete Oa[a];
              for (var d = 0, f = c.length; d < f; d++) {
                var g = c[d];
                if (g.onError) g.onError(b);
              }
              e.manager.itemError(a);
              e.manager.itemEnd(a);
            },
            !1
          );
          n.addEventListener(
            "abort",
            function(b) {
              var c = Oa[a];
              delete Oa[a];
              for (var d = 0, f = c.length; d < f; d++) {
                var g = c[d];
                if (g.onError) g.onError(b);
              }
              e.manager.itemError(a);
              e.manager.itemEnd(a);
            },
            !1
          );
          void 0 !== this.responseType && (n.responseType = this.responseType);
          void 0 !== this.withCredentials &&
            (n.withCredentials = this.withCredentials);
          n.overrideMimeType &&
            n.overrideMimeType(
              void 0 !== this.mimeType ? this.mimeType : "text/plain"
            );
          for (h in this.requestHeader)
            n.setRequestHeader(h, this.requestHeader[h]);
          n.send(null);
        }
        e.manager.itemStart(a);
        return n;
      }
    },
    setPath: function(a) {
      this.path = a;
      return this;
    },
    setResponseType: function(a) {
      this.responseType = a;
      return this;
    },
    setWithCredentials: function(a) {
      this.withCredentials = a;
      return this;
    },
    setMimeType: function(a) {
      this.mimeType = a;
      return this;
    },
    setRequestHeader: function(a) {
      this.requestHeader = a;
      return this;
    }
  });
  Object.assign(rf.prototype, {
    load: function(a, b, c, d) {
      var e = this,
        f = new Fa(e.manager);
      f.setPath(e.path);
      f.load(
        a,
        function(a) {
          b(e.parse(JSON.parse(a)));
        },
        c,
        d
      );
    },
    parse: function(a, b) {
      for (var c = [], d = 0; d < a.length; d++) {
        var e = za.parse(a[d]);
        c.push(e);
      }
      b(c);
    },
    setPath: function(a) {
      this.path = a;
      return this;
    }
  });
  Object.assign(sf.prototype, {
    load: function(a, b, c, d) {
      function e(e) {
        k.load(
          a[e],
          function(a) {
            a = f._parser(a, !0);
            g[e] = {
              width: a.width,
              height: a.height,
              format: a.format,
              mipmaps: a.mipmaps
            };
            m += 1;
            6 === m &&
              (1 === a.mipmapCount && (h.minFilter = 1006),
              (h.format = a.format),
              (h.needsUpdate = !0),
              b && b(h));
          },
          c,
          d
        );
      }
      var f = this,
        g = [],
        h = new Tb();
      h.image = g;
      var k = new Fa(this.manager);
      k.setPath(this.path);
      k.setResponseType("arraybuffer");
      if (Array.isArray(a))
        for (var m = 0, l = 0, n = a.length; l < n; ++l) e(l);
      else
        k.load(
          a,
          function(a) {
            a = f._parser(a, !0);
            if (a.isCubemap)
              for (
                var c = a.mipmaps.length / a.mipmapCount, d = 0;
                d < c;
                d++
              ) {
                g[d] = { mipmaps: [] };
                for (var e = 0; e < a.mipmapCount; e++)
                  g[d].mipmaps.push(a.mipmaps[d * a.mipmapCount + e]),
                    (g[d].format = a.format),
                    (g[d].width = a.width),
                    (g[d].height = a.height);
              }
            else
              (h.image.width = a.width),
                (h.image.height = a.height),
                (h.mipmaps = a.mipmaps);
            1 === a.mipmapCount && (h.minFilter = 1006);
            h.format = a.format;
            h.needsUpdate = !0;
            b && b(h);
          },
          c,
          d
        );
      return h;
    },
    setPath: function(a) {
      this.path = a;
      return this;
    }
  });
  Object.assign(he.prototype, {
    load: function(a, b, c, d) {
      var e = this,
        f = new lb(),
        g = new Fa(this.manager);
      g.setResponseType("arraybuffer");
      g.setPath(this.path);
      g.load(
        a,
        function(a) {
          if ((a = e._parser(a)))
            void 0 !== a.image
              ? (f.image = a.image)
              : void 0 !== a.data &&
                ((f.image.width = a.width),
                (f.image.height = a.height),
                (f.image.data = a.data)),
              (f.wrapS = void 0 !== a.wrapS ? a.wrapS : 1001),
              (f.wrapT = void 0 !== a.wrapT ? a.wrapT : 1001),
              (f.magFilter = void 0 !== a.magFilter ? a.magFilter : 1006),
              (f.minFilter = void 0 !== a.minFilter ? a.minFilter : 1008),
              (f.anisotropy = void 0 !== a.anisotropy ? a.anisotropy : 1),
              void 0 !== a.format && (f.format = a.format),
              void 0 !== a.type && (f.type = a.type),
              void 0 !== a.mipmaps && (f.mipmaps = a.mipmaps),
              1 === a.mipmapCount && (f.minFilter = 1006),
              (f.needsUpdate = !0),
              b && b(f, a);
        },
        c,
        d
      );
      return f;
    },
    setPath: function(a) {
      this.path = a;
      return this;
    }
  });
  Object.assign(ed.prototype, {
    crossOrigin: "anonymous",
    load: function(a, b, c, d) {
      function e() {
        k.removeEventListener("load", e, !1);
        k.removeEventListener("error", f, !1);
        Ib.add(a, this);
        b && b(this);
        g.manager.itemEnd(a);
      }
      function f(b) {
        k.removeEventListener("load", e, !1);
        k.removeEventListener("error", f, !1);
        d && d(b);
        g.manager.itemError(a);
        g.manager.itemEnd(a);
      }
      void 0 === a && (a = "");
      void 0 !== this.path && (a = this.path + a);
      a = this.manager.resolveURL(a);
      var g = this,
        h = Ib.get(a);
      if (void 0 !== h)
        return (
          g.manager.itemStart(a),
          setTimeout(function() {
            b && b(h);
            g.manager.itemEnd(a);
          }, 0),
          h
        );
      var k = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
      k.addEventListener("load", e, !1);
      k.addEventListener("error", f, !1);
      "data:" !== a.substr(0, 5) &&
        void 0 !== this.crossOrigin &&
        (k.crossOrigin = this.crossOrigin);
      g.manager.itemStart(a);
      k.src = a;
      return k;
    },
    setCrossOrigin: function(a) {
      this.crossOrigin = a;
      return this;
    },
    setPath: function(a) {
      this.path = a;
      return this;
    }
  });
  Object.assign(ie.prototype, {
    crossOrigin: "anonymous",
    load: function(a, b, c, d) {
      function e(c) {
        g.load(
          a[c],
          function(a) {
            f.images[c] = a;
            h++;
            6 === h && ((f.needsUpdate = !0), b && b(f));
          },
          void 0,
          d
        );
      }
      var f = new Ya(),
        g = new ed(this.manager);
      g.setCrossOrigin(this.crossOrigin);
      g.setPath(this.path);
      var h = 0;
      for (c = 0; c < a.length; ++c) e(c);
      return f;
    },
    setCrossOrigin: function(a) {
      this.crossOrigin = a;
      return this;
    },
    setPath: function(a) {
      this.path = a;
      return this;
    }
  });
  Object.assign(Gd.prototype, {
    crossOrigin: "anonymous",
    load: function(a, b, c, d) {
      var e = new W(),
        f = new ed(this.manager);
      f.setCrossOrigin(this.crossOrigin);
      f.setPath(this.path);
      f.load(
        a,
        function(c) {
          e.image = c;
          c = 0 < a.search(/\.jpe?g$/i) || 0 === a.search(/^data:image\/jpeg/);
          e.format = c ? 1022 : 1023;
          e.needsUpdate = !0;
          void 0 !== b && b(e);
        },
        c,
        d
      );
      return e;
    },
    setCrossOrigin: function(a) {
      this.crossOrigin = a;
      return this;
    },
    setPath: function(a) {
      this.path = a;
      return this;
    }
  });
  Object.assign(Q.prototype, {
    getPoint: function() {
      console.warn("THREE.Curve: .getPoint() not implemented.");
      return null;
    },
    getPointAt: function(a, b) {
      a = this.getUtoTmapping(a);
      return this.getPoint(a, b);
    },
    getPoints: function(a) {
      void 0 === a && (a = 5);
      for (var b = [], c = 0; c <= a; c++) b.push(this.getPoint(c / a));
      return b;
    },
    getSpacedPoints: function(a) {
      void 0 === a && (a = 5);
      for (var b = [], c = 0; c <= a; c++) b.push(this.getPointAt(c / a));
      return b;
    },
    getLength: function() {
      var a = this.getLengths();
      return a[a.length - 1];
    },
    getLengths: function(a) {
      void 0 === a && (a = this.arcLengthDivisions);
      if (
        this.cacheArcLengths &&
        this.cacheArcLengths.length === a + 1 &&
        !this.needsUpdate
      )
        return this.cacheArcLengths;
      this.needsUpdate = !1;
      var b = [],
        c = this.getPoint(0),
        d,
        e = 0;
      b.push(0);
      for (d = 1; d <= a; d++) {
        var f = this.getPoint(d / a);
        e += f.distanceTo(c);
        b.push(e);
        c = f;
      }
      return (this.cacheArcLengths = b);
    },
    updateArcLengths: function() {
      this.needsUpdate = !0;
      this.getLengths();
    },
    getUtoTmapping: function(a, b) {
      var c = this.getLengths(),
        d = c.length;
      b = b ? b : a * c[d - 1];
      for (var e = 0, f = d - 1, g; e <= f; )
        if (((a = Math.floor(e + (f - e) / 2)), (g = c[a] - b), 0 > g))
          e = a + 1;
        else if (0 < g) f = a - 1;
        else {
          f = a;
          break;
        }
      a = f;
      if (c[a] === b) return a / (d - 1);
      e = c[a];
      return (a + (b - e) / (c[a + 1] - e)) / (d - 1);
    },
    getTangent: function(a) {
      var b = a - 1e-4;
      a += 1e-4;
      0 > b && (b = 0);
      1 < a && (a = 1);
      b = this.getPoint(b);
      return this.getPoint(a)
        .clone()
        .sub(b)
        .normalize();
    },
    getTangentAt: function(a) {
      a = this.getUtoTmapping(a);
      return this.getTangent(a);
    },
    computeFrenetFrames: function(a, b) {
      var c = new p(),
        d = [],
        e = [],
        f = [],
        g = new p(),
        h = new P(),
        k;
      for (k = 0; k <= a; k++) {
        var m = k / a;
        d[k] = this.getTangentAt(m);
        d[k].normalize();
      }
      e[0] = new p();
      f[0] = new p();
      k = Number.MAX_VALUE;
      m = Math.abs(d[0].x);
      var l = Math.abs(d[0].y),
        n = Math.abs(d[0].z);
      m <= k && ((k = m), c.set(1, 0, 0));
      l <= k && ((k = l), c.set(0, 1, 0));
      n <= k && c.set(0, 0, 1);
      g.crossVectors(d[0], c).normalize();
      e[0].crossVectors(d[0], g);
      f[0].crossVectors(d[0], e[0]);
      for (k = 1; k <= a; k++)
        (e[k] = e[k - 1].clone()),
          (f[k] = f[k - 1].clone()),
          g.crossVectors(d[k - 1], d[k]),
          g.length() > Number.EPSILON &&
            (g.normalize(),
            (c = Math.acos(R.clamp(d[k - 1].dot(d[k]), -1, 1))),
            e[k].applyMatrix4(h.makeRotationAxis(g, c))),
          f[k].crossVectors(d[k], e[k]);
      if (!0 === b)
        for (
          c = Math.acos(R.clamp(e[0].dot(e[a]), -1, 1)),
            c /= a,
            0 < d[0].dot(g.crossVectors(e[0], e[a])) && (c = -c),
            k = 1;
          k <= a;
          k++
        )
          e[k].applyMatrix4(h.makeRotationAxis(d[k], c * k)),
            f[k].crossVectors(d[k], e[k]);
      return { tangents: d, normals: e, binormals: f };
    },
    clone: function() {
      return new this.constructor().copy(this);
    },
    copy: function(a) {
      this.arcLengthDivisions = a.arcLengthDivisions;
      return this;
    },
    toJSON: function() {
      var a = {
        metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" }
      };
      a.arcLengthDivisions = this.arcLengthDivisions;
      a.type = this.type;
      return a;
    },
    fromJSON: function(a) {
      this.arcLengthDivisions = a.arcLengthDivisions;
      return this;
    }
  });
  wa.prototype = Object.create(Q.prototype);
  wa.prototype.constructor = wa;
  wa.prototype.isEllipseCurve = !0;
  wa.prototype.getPoint = function(a, b) {
    b = b || new z();
    for (
      var c = 2 * Math.PI,
        d = this.aEndAngle - this.aStartAngle,
        e = Math.abs(d) < Number.EPSILON;
      0 > d;

    )
      d += c;
    for (; d > c; ) d -= c;
    d < Number.EPSILON && (d = e ? 0 : c);
    !0 !== this.aClockwise || e || (d = d === c ? -c : d - c);
    c = this.aStartAngle + a * d;
    a = this.aX + this.xRadius * Math.cos(c);
    var f = this.aY + this.yRadius * Math.sin(c);
    0 !== this.aRotation &&
      ((c = Math.cos(this.aRotation)),
      (d = Math.sin(this.aRotation)),
      (e = a - this.aX),
      (f -= this.aY),
      (a = e * c - f * d + this.aX),
      (f = e * d + f * c + this.aY));
    return b.set(a, f);
  };
  wa.prototype.copy = function(a) {
    Q.prototype.copy.call(this, a);
    this.aX = a.aX;
    this.aY = a.aY;
    this.xRadius = a.xRadius;
    this.yRadius = a.yRadius;
    this.aStartAngle = a.aStartAngle;
    this.aEndAngle = a.aEndAngle;
    this.aClockwise = a.aClockwise;
    this.aRotation = a.aRotation;
    return this;
  };
  wa.prototype.toJSON = function() {
    var a = Q.prototype.toJSON.call(this);
    a.aX = this.aX;
    a.aY = this.aY;
    a.xRadius = this.xRadius;
    a.yRadius = this.yRadius;
    a.aStartAngle = this.aStartAngle;
    a.aEndAngle = this.aEndAngle;
    a.aClockwise = this.aClockwise;
    a.aRotation = this.aRotation;
    return a;
  };
  wa.prototype.fromJSON = function(a) {
    Q.prototype.fromJSON.call(this, a);
    this.aX = a.aX;
    this.aY = a.aY;
    this.xRadius = a.xRadius;
    this.yRadius = a.yRadius;
    this.aStartAngle = a.aStartAngle;
    this.aEndAngle = a.aEndAngle;
    this.aClockwise = a.aClockwise;
    this.aRotation = a.aRotation;
    return this;
  };
  jc.prototype = Object.create(wa.prototype);
  jc.prototype.constructor = jc;
  jc.prototype.isArcCurve = !0;
  var Ud = new p(),
    Fe = new je(),
    Ge = new je(),
    He = new je();
  ua.prototype = Object.create(Q.prototype);
  ua.prototype.constructor = ua;
  ua.prototype.isCatmullRomCurve3 = !0;
  ua.prototype.getPoint = function(a, b) {
    b = b || new p();
    var c = this.points,
      d = c.length;
    a *= d - (this.closed ? 0 : 1);
    var e = Math.floor(a);
    a -= e;
    this.closed
      ? (e += 0 < e ? 0 : (Math.floor(Math.abs(e) / d) + 1) * d)
      : 0 === a && e === d - 1 && ((e = d - 2), (a = 1));
    if (this.closed || 0 < e) var f = c[(e - 1) % d];
    else Ud.subVectors(c[0], c[1]).add(c[0]), (f = Ud);
    var g = c[e % d];
    var h = c[(e + 1) % d];
    this.closed || e + 2 < d
      ? (c = c[(e + 2) % d])
      : (Ud.subVectors(c[d - 1], c[d - 2]).add(c[d - 1]), (c = Ud));
    if ("centripetal" === this.curveType || "chordal" === this.curveType) {
      var k = "chordal" === this.curveType ? 0.5 : 0.25;
      d = Math.pow(f.distanceToSquared(g), k);
      e = Math.pow(g.distanceToSquared(h), k);
      k = Math.pow(h.distanceToSquared(c), k);
      1e-4 > e && (e = 1);
      1e-4 > d && (d = e);
      1e-4 > k && (k = e);
      Fe.initNonuniformCatmullRom(f.x, g.x, h.x, c.x, d, e, k);
      Ge.initNonuniformCatmullRom(f.y, g.y, h.y, c.y, d, e, k);
      He.initNonuniformCatmullRom(f.z, g.z, h.z, c.z, d, e, k);
    } else
      "catmullrom" === this.curveType &&
        (Fe.initCatmullRom(f.x, g.x, h.x, c.x, this.tension),
        Ge.initCatmullRom(f.y, g.y, h.y, c.y, this.tension),
        He.initCatmullRom(f.z, g.z, h.z, c.z, this.tension));
    b.set(Fe.calc(a), Ge.calc(a), He.calc(a));
    return b;
  };
  ua.prototype.copy = function(a) {
    Q.prototype.copy.call(this, a);
    this.points = [];
    for (var b = 0, c = a.points.length; b < c; b++)
      this.points.push(a.points[b].clone());
    this.closed = a.closed;
    this.curveType = a.curveType;
    this.tension = a.tension;
    return this;
  };
  ua.prototype.toJSON = function() {
    var a = Q.prototype.toJSON.call(this);
    a.points = [];
    for (var b = 0, c = this.points.length; b < c; b++)
      a.points.push(this.points[b].toArray());
    a.closed = this.closed;
    a.curveType = this.curveType;
    a.tension = this.tension;
    return a;
  };
  ua.prototype.fromJSON = function(a) {
    Q.prototype.fromJSON.call(this, a);
    this.points = [];
    for (var b = 0, c = a.points.length; b < c; b++) {
      var d = a.points[b];
      this.points.push(new p().fromArray(d));
    }
    this.closed = a.closed;
    this.curveType = a.curveType;
    this.tension = a.tension;
    return this;
  };
  Ja.prototype = Object.create(Q.prototype);
  Ja.prototype.constructor = Ja;
  Ja.prototype.isCubicBezierCurve = !0;
  Ja.prototype.getPoint = function(a, b) {
    b = b || new z();
    var c = this.v0,
      d = this.v1,
      e = this.v2,
      f = this.v3;
    b.set(gd(a, c.x, d.x, e.x, f.x), gd(a, c.y, d.y, e.y, f.y));
    return b;
  };
  Ja.prototype.copy = function(a) {
    Q.prototype.copy.call(this, a);
    this.v0.copy(a.v0);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    this.v3.copy(a.v3);
    return this;
  };
  Ja.prototype.toJSON = function() {
    var a = Q.prototype.toJSON.call(this);
    a.v0 = this.v0.toArray();
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    a.v3 = this.v3.toArray();
    return a;
  };
  Ja.prototype.fromJSON = function(a) {
    Q.prototype.fromJSON.call(this, a);
    this.v0.fromArray(a.v0);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    this.v3.fromArray(a.v3);
    return this;
  };
  Ua.prototype = Object.create(Q.prototype);
  Ua.prototype.constructor = Ua;
  Ua.prototype.isCubicBezierCurve3 = !0;
  Ua.prototype.getPoint = function(a, b) {
    b = b || new p();
    var c = this.v0,
      d = this.v1,
      e = this.v2,
      f = this.v3;
    b.set(
      gd(a, c.x, d.x, e.x, f.x),
      gd(a, c.y, d.y, e.y, f.y),
      gd(a, c.z, d.z, e.z, f.z)
    );
    return b;
  };
  Ua.prototype.copy = function(a) {
    Q.prototype.copy.call(this, a);
    this.v0.copy(a.v0);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    this.v3.copy(a.v3);
    return this;
  };
  Ua.prototype.toJSON = function() {
    var a = Q.prototype.toJSON.call(this);
    a.v0 = this.v0.toArray();
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    a.v3 = this.v3.toArray();
    return a;
  };
  Ua.prototype.fromJSON = function(a) {
    Q.prototype.fromJSON.call(this, a);
    this.v0.fromArray(a.v0);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    this.v3.fromArray(a.v3);
    return this;
  };
  Aa.prototype = Object.create(Q.prototype);
  Aa.prototype.constructor = Aa;
  Aa.prototype.isLineCurve = !0;
  Aa.prototype.getPoint = function(a, b) {
    b = b || new z();
    1 === a
      ? b.copy(this.v2)
      : (b.copy(this.v2).sub(this.v1), b.multiplyScalar(a).add(this.v1));
    return b;
  };
  Aa.prototype.getPointAt = function(a, b) {
    return this.getPoint(a, b);
  };
  Aa.prototype.getTangent = function() {
    return this.v2
      .clone()
      .sub(this.v1)
      .normalize();
  };
  Aa.prototype.copy = function(a) {
    Q.prototype.copy.call(this, a);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    return this;
  };
  Aa.prototype.toJSON = function() {
    var a = Q.prototype.toJSON.call(this);
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    return a;
  };
  Aa.prototype.fromJSON = function(a) {
    Q.prototype.fromJSON.call(this, a);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    return this;
  };
  Ka.prototype = Object.create(Q.prototype);
  Ka.prototype.constructor = Ka;
  Ka.prototype.isLineCurve3 = !0;
  Ka.prototype.getPoint = function(a, b) {
    b = b || new p();
    1 === a
      ? b.copy(this.v2)
      : (b.copy(this.v2).sub(this.v1), b.multiplyScalar(a).add(this.v1));
    return b;
  };
  Ka.prototype.getPointAt = function(a, b) {
    return this.getPoint(a, b);
  };
  Ka.prototype.copy = function(a) {
    Q.prototype.copy.call(this, a);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    return this;
  };
  Ka.prototype.toJSON = function() {
    var a = Q.prototype.toJSON.call(this);
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    return a;
  };
  Ka.prototype.fromJSON = function(a) {
    Q.prototype.fromJSON.call(this, a);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    return this;
  };
  La.prototype = Object.create(Q.prototype);
  La.prototype.constructor = La;
  La.prototype.isQuadraticBezierCurve = !0;
  La.prototype.getPoint = function(a, b) {
    b = b || new z();
    var c = this.v0,
      d = this.v1,
      e = this.v2;
    b.set(fd(a, c.x, d.x, e.x), fd(a, c.y, d.y, e.y));
    return b;
  };
  La.prototype.copy = function(a) {
    Q.prototype.copy.call(this, a);
    this.v0.copy(a.v0);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    return this;
  };
  La.prototype.toJSON = function() {
    var a = Q.prototype.toJSON.call(this);
    a.v0 = this.v0.toArray();
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    return a;
  };
  La.prototype.fromJSON = function(a) {
    Q.prototype.fromJSON.call(this, a);
    this.v0.fromArray(a.v0);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    return this;
  };
  Va.prototype = Object.create(Q.prototype);
  Va.prototype.constructor = Va;
  Va.prototype.isQuadraticBezierCurve3 = !0;
  Va.prototype.getPoint = function(a, b) {
    b = b || new p();
    var c = this.v0,
      d = this.v1,
      e = this.v2;
    b.set(fd(a, c.x, d.x, e.x), fd(a, c.y, d.y, e.y), fd(a, c.z, d.z, e.z));
    return b;
  };
  Va.prototype.copy = function(a) {
    Q.prototype.copy.call(this, a);
    this.v0.copy(a.v0);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    return this;
  };
  Va.prototype.toJSON = function() {
    var a = Q.prototype.toJSON.call(this);
    a.v0 = this.v0.toArray();
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    return a;
  };
  Va.prototype.fromJSON = function(a) {
    Q.prototype.fromJSON.call(this, a);
    this.v0.fromArray(a.v0);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    return this;
  };
  Ma.prototype = Object.create(Q.prototype);
  Ma.prototype.constructor = Ma;
  Ma.prototype.isSplineCurve = !0;
  Ma.prototype.getPoint = function(a, b) {
    b = b || new z();
    var c = this.points,
      d = (c.length - 1) * a;
    a = Math.floor(d);
    d -= a;
    var e = c[0 === a ? a : a - 1],
      f = c[a],
      g = c[a > c.length - 2 ? c.length - 1 : a + 1];
    c = c[a > c.length - 3 ? c.length - 1 : a + 2];
    b.set(tf(d, e.x, f.x, g.x, c.x), tf(d, e.y, f.y, g.y, c.y));
    return b;
  };
  Ma.prototype.copy = function(a) {
    Q.prototype.copy.call(this, a);
    this.points = [];
    for (var b = 0, c = a.points.length; b < c; b++)
      this.points.push(a.points[b].clone());
    return this;
  };
  Ma.prototype.toJSON = function() {
    var a = Q.prototype.toJSON.call(this);
    a.points = [];
    for (var b = 0, c = this.points.length; b < c; b++)
      a.points.push(this.points[b].toArray());
    return a;
  };
  Ma.prototype.fromJSON = function(a) {
    Q.prototype.fromJSON.call(this, a);
    this.points = [];
    for (var b = 0, c = a.points.length; b < c; b++) {
      var d = a.points[b];
      this.points.push(new z().fromArray(d));
    }
    return this;
  };
  var Gf = Object.freeze({
    ArcCurve: jc,
    CatmullRomCurve3: ua,
    CubicBezierCurve: Ja,
    CubicBezierCurve3: Ua,
    EllipseCurve: wa,
    LineCurve: Aa,
    LineCurve3: Ka,
    QuadraticBezierCurve: La,
    QuadraticBezierCurve3: Va,
    SplineCurve: Ma
  });
  ab.prototype = Object.assign(Object.create(Q.prototype), {
    constructor: ab,
    add: function(a) {
      this.curves.push(a);
    },
    closePath: function() {
      var a = this.curves[0].getPoint(0),
        b = this.curves[this.curves.length - 1].getPoint(1);
      a.equals(b) || this.curves.push(new Aa(b, a));
    },
    getPoint: function(a) {
      var b = a * this.getLength(),
        c = this.getCurveLengths();
      for (a = 0; a < c.length; ) {
        if (c[a] >= b)
          return (
            (b = c[a] - b),
            (a = this.curves[a]),
            (c = a.getLength()),
            a.getPointAt(0 === c ? 0 : 1 - b / c)
          );
        a++;
      }
      return null;
    },
    getLength: function() {
      var a = this.getCurveLengths();
      return a[a.length - 1];
    },
    updateArcLengths: function() {
      this.needsUpdate = !0;
      this.cacheLengths = null;
      this.getCurveLengths();
    },
    getCurveLengths: function() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths;
      for (var a = [], b = 0, c = 0, d = this.curves.length; c < d; c++)
        (b += this.curves[c].getLength()), a.push(b);
      return (this.cacheLengths = a);
    },
    getSpacedPoints: function(a) {
      void 0 === a && (a = 40);
      for (var b = [], c = 0; c <= a; c++) b.push(this.getPoint(c / a));
      this.autoClose && b.push(b[0]);
      return b;
    },
    getPoints: function(a) {
      a = a || 12;
      for (var b = [], c, d = 0, e = this.curves; d < e.length; d++) {
        var f = e[d];
        f = f.getPoints(
          f && f.isEllipseCurve
            ? 2 * a
            : f && (f.isLineCurve || f.isLineCurve3)
            ? 1
            : f && f.isSplineCurve
            ? a * f.points.length
            : a
        );
        for (var g = 0; g < f.length; g++) {
          var h = f[g];
          (c && c.equals(h)) || (b.push(h), (c = h));
        }
      }
      this.autoClose &&
        1 < b.length &&
        !b[b.length - 1].equals(b[0]) &&
        b.push(b[0]);
      return b;
    },
    copy: function(a) {
      Q.prototype.copy.call(this, a);
      this.curves = [];
      for (var b = 0, c = a.curves.length; b < c; b++)
        this.curves.push(a.curves[b].clone());
      this.autoClose = a.autoClose;
      return this;
    },
    toJSON: function() {
      var a = Q.prototype.toJSON.call(this);
      a.autoClose = this.autoClose;
      a.curves = [];
      for (var b = 0, c = this.curves.length; b < c; b++)
        a.curves.push(this.curves[b].toJSON());
      return a;
    },
    fromJSON: function(a) {
      Q.prototype.fromJSON.call(this, a);
      this.autoClose = a.autoClose;
      this.curves = [];
      for (var b = 0, c = a.curves.length; b < c; b++) {
        var d = a.curves[b];
        this.curves.push(new Gf[d.type]().fromJSON(d));
      }
      return this;
    }
  });
  Na.prototype = Object.assign(Object.create(ab.prototype), {
    constructor: Na,
    setFromPoints: function(a) {
      this.moveTo(a[0].x, a[0].y);
      for (var b = 1, c = a.length; b < c; b++) this.lineTo(a[b].x, a[b].y);
    },
    moveTo: function(a, b) {
      this.currentPoint.set(a, b);
    },
    lineTo: function(a, b) {
      var c = new Aa(this.currentPoint.clone(), new z(a, b));
      this.curves.push(c);
      this.currentPoint.set(a, b);
    },
    quadraticCurveTo: function(a, b, c, d) {
      a = new La(this.currentPoint.clone(), new z(a, b), new z(c, d));
      this.curves.push(a);
      this.currentPoint.set(c, d);
    },
    bezierCurveTo: function(a, b, c, d, e, f) {
      a = new Ja(
        this.currentPoint.clone(),
        new z(a, b),
        new z(c, d),
        new z(e, f)
      );
      this.curves.push(a);
      this.currentPoint.set(e, f);
    },
    splineThru: function(a) {
      var b = [this.currentPoint.clone()].concat(a);
      b = new Ma(b);
      this.curves.push(b);
      this.currentPoint.copy(a[a.length - 1]);
    },
    arc: function(a, b, c, d, e, f) {
      this.absarc(a + this.currentPoint.x, b + this.currentPoint.y, c, d, e, f);
    },
    absarc: function(a, b, c, d, e, f) {
      this.absellipse(a, b, c, c, d, e, f);
    },
    ellipse: function(a, b, c, d, e, f, g, h) {
      this.absellipse(
        a + this.currentPoint.x,
        b + this.currentPoint.y,
        c,
        d,
        e,
        f,
        g,
        h
      );
    },
    absellipse: function(a, b, c, d, e, f, g, h) {
      a = new wa(a, b, c, d, e, f, g, h);
      0 < this.curves.length &&
        ((b = a.getPoint(0)),
        b.equals(this.currentPoint) || this.lineTo(b.x, b.y));
      this.curves.push(a);
      a = a.getPoint(1);
      this.currentPoint.copy(a);
    },
    copy: function(a) {
      ab.prototype.copy.call(this, a);
      this.currentPoint.copy(a.currentPoint);
      return this;
    },
    toJSON: function() {
      var a = ab.prototype.toJSON.call(this);
      a.currentPoint = this.currentPoint.toArray();
      return a;
    },
    fromJSON: function(a) {
      ab.prototype.fromJSON.call(this, a);
      this.currentPoint.fromArray(a.currentPoint);
      return this;
    }
  });
  ib.prototype = Object.assign(Object.create(Na.prototype), {
    constructor: ib,
    getPointsHoles: function(a) {
      for (var b = [], c = 0, d = this.holes.length; c < d; c++)
        b[c] = this.holes[c].getPoints(a);
      return b;
    },
    extractPoints: function(a) {
      return { shape: this.getPoints(a), holes: this.getPointsHoles(a) };
    },
    copy: function(a) {
      Na.prototype.copy.call(this, a);
      this.holes = [];
      for (var b = 0, c = a.holes.length; b < c; b++)
        this.holes.push(a.holes[b].clone());
      return this;
    },
    toJSON: function() {
      var a = Na.prototype.toJSON.call(this);
      a.uuid = this.uuid;
      a.holes = [];
      for (var b = 0, c = this.holes.length; b < c; b++)
        a.holes.push(this.holes[b].toJSON());
      return a;
    },
    fromJSON: function(a) {
      Na.prototype.fromJSON.call(this, a);
      this.uuid = a.uuid;
      this.holes = [];
      for (var b = 0, c = a.holes.length; b < c; b++) {
        var d = a.holes[b];
        this.holes.push(new Na().fromJSON(d));
      }
      return this;
    }
  });
  ca.prototype = Object.assign(Object.create(D.prototype), {
    constructor: ca,
    isLight: !0,
    copy: function(a) {
      D.prototype.copy.call(this, a);
      this.color.copy(a.color);
      this.intensity = a.intensity;
      return this;
    },
    toJSON: function(a) {
      a = D.prototype.toJSON.call(this, a);
      a.object.color = this.color.getHex();
      a.object.intensity = this.intensity;
      void 0 !== this.groundColor &&
        (a.object.groundColor = this.groundColor.getHex());
      void 0 !== this.distance && (a.object.distance = this.distance);
      void 0 !== this.angle && (a.object.angle = this.angle);
      void 0 !== this.decay && (a.object.decay = this.decay);
      void 0 !== this.penumbra && (a.object.penumbra = this.penumbra);
      void 0 !== this.shadow && (a.object.shadow = this.shadow.toJSON());
      return a;
    }
  });
  Hd.prototype = Object.assign(Object.create(ca.prototype), {
    constructor: Hd,
    isHemisphereLight: !0,
    copy: function(a) {
      ca.prototype.copy.call(this, a);
      this.groundColor.copy(a.groundColor);
      return this;
    }
  });
  Object.assign(Hb.prototype, {
    copy: function(a) {
      this.camera = a.camera.clone();
      this.bias = a.bias;
      this.radius = a.radius;
      this.mapSize.copy(a.mapSize);
      return this;
    },
    clone: function() {
      return new this.constructor().copy(this);
    },
    toJSON: function() {
      var a = {};
      0 !== this.bias && (a.bias = this.bias);
      1 !== this.radius && (a.radius = this.radius);
      if (512 !== this.mapSize.x || 512 !== this.mapSize.y)
        a.mapSize = this.mapSize.toArray();
      a.camera = this.camera.toJSON(!1).object;
      delete a.camera.matrix;
      return a;
    }
  });
  Id.prototype = Object.assign(Object.create(Hb.prototype), {
    constructor: Id,
    isSpotLightShadow: !0,
    update: function(a) {
      var b = this.camera,
        c = 2 * R.RAD2DEG * a.angle,
        d = this.mapSize.width / this.mapSize.height;
      a = a.distance || b.far;
      if (c !== b.fov || d !== b.aspect || a !== b.far)
        (b.fov = c), (b.aspect = d), (b.far = a), b.updateProjectionMatrix();
    }
  });
  Jd.prototype = Object.assign(Object.create(ca.prototype), {
    constructor: Jd,
    isSpotLight: !0,
    copy: function(a) {
      ca.prototype.copy.call(this, a);
      this.distance = a.distance;
      this.angle = a.angle;
      this.penumbra = a.penumbra;
      this.decay = a.decay;
      this.target = a.target.clone();
      this.shadow = a.shadow.clone();
      return this;
    }
  });
  Kd.prototype = Object.assign(Object.create(ca.prototype), {
    constructor: Kd,
    isPointLight: !0,
    copy: function(a) {
      ca.prototype.copy.call(this, a);
      this.distance = a.distance;
      this.decay = a.decay;
      this.shadow = a.shadow.clone();
      return this;
    }
  });
  hd.prototype = Object.assign(Object.create(Ra.prototype), {
    constructor: hd,
    isOrthographicCamera: !0,
    copy: function(a, b) {
      Ra.prototype.copy.call(this, a, b);
      this.left = a.left;
      this.right = a.right;
      this.top = a.top;
      this.bottom = a.bottom;
      this.near = a.near;
      this.far = a.far;
      this.zoom = a.zoom;
      this.view = null === a.view ? null : Object.assign({}, a.view);
      return this;
    },
    setViewOffset: function(a, b, c, d, e, f) {
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1
        });
      this.view.enabled = !0;
      this.view.fullWidth = a;
      this.view.fullHeight = b;
      this.view.offsetX = c;
      this.view.offsetY = d;
      this.view.width = e;
      this.view.height = f;
      this.updateProjectionMatrix();
    },
    clearViewOffset: function() {
      null !== this.view && (this.view.enabled = !1);
      this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function() {
      var a = (this.right - this.left) / (2 * this.zoom),
        b = (this.top - this.bottom) / (2 * this.zoom),
        c = (this.right + this.left) / 2,
        d = (this.top + this.bottom) / 2,
        e = c - a;
      c += a;
      a = d + b;
      b = d - b;
      if (null !== this.view && this.view.enabled) {
        c = this.zoom / (this.view.width / this.view.fullWidth);
        b = this.zoom / (this.view.height / this.view.fullHeight);
        var f = (this.right - this.left) / this.view.width;
        d = (this.top - this.bottom) / this.view.height;
        e += (this.view.offsetX / c) * f;
        c = e + (this.view.width / c) * f;
        a -= (this.view.offsetY / b) * d;
        b = a - (this.view.height / b) * d;
      }
      this.projectionMatrix.makeOrthographic(e, c, a, b, this.near, this.far);
      this.projectionMatrixInverse.getInverse(this.projectionMatrix);
    },
    toJSON: function(a) {
      a = D.prototype.toJSON.call(this, a);
      a.object.zoom = this.zoom;
      a.object.left = this.left;
      a.object.right = this.right;
      a.object.top = this.top;
      a.object.bottom = this.bottom;
      a.object.near = this.near;
      a.object.far = this.far;
      null !== this.view && (a.object.view = Object.assign({}, this.view));
      return a;
    }
  });
  Ld.prototype = Object.assign(Object.create(Hb.prototype), {
    constructor: Ld
  });
  Md.prototype = Object.assign(Object.create(ca.prototype), {
    constructor: Md,
    isDirectionalLight: !0,
    copy: function(a) {
      ca.prototype.copy.call(this, a);
      this.target = a.target.clone();
      this.shadow = a.shadow.clone();
      return this;
    }
  });
  Nd.prototype = Object.assign(Object.create(ca.prototype), {
    constructor: Nd,
    isAmbientLight: !0
  });
  Od.prototype = Object.assign(Object.create(ca.prototype), {
    constructor: Od,
    isRectAreaLight: !0,
    copy: function(a) {
      ca.prototype.copy.call(this, a);
      this.width = a.width;
      this.height = a.height;
      return this;
    },
    toJSON: function(a) {
      a = ca.prototype.toJSON.call(this, a);
      a.object.width = this.width;
      a.object.height = this.height;
      return a;
    }
  });
  Object.assign(Pd.prototype, {
    load: function(a, b, c, d) {
      var e = this,
        f = new Fa(e.manager);
      f.setPath(e.path);
      f.load(
        a,
        function(a) {
          b(e.parse(JSON.parse(a)));
        },
        c,
        d
      );
    },
    parse: function(a) {
      function b(a) {
        void 0 === c[a] &&
          console.warn("THREE.MaterialLoader: Undefined texture", a);
        return c[a];
      }
      var c = this.textures,
        d = new bh[a.type]();
      void 0 !== a.uuid && (d.uuid = a.uuid);
      void 0 !== a.name && (d.name = a.name);
      void 0 !== a.color && d.color.setHex(a.color);
      void 0 !== a.roughness && (d.roughness = a.roughness);
      void 0 !== a.metalness && (d.metalness = a.metalness);
      void 0 !== a.emissive && d.emissive.setHex(a.emissive);
      void 0 !== a.specular && d.specular.setHex(a.specular);
      void 0 !== a.shininess && (d.shininess = a.shininess);
      void 0 !== a.clearCoat && (d.clearCoat = a.clearCoat);
      void 0 !== a.clearCoatRoughness &&
        (d.clearCoatRoughness = a.clearCoatRoughness);
      void 0 !== a.vertexColors && (d.vertexColors = a.vertexColors);
      void 0 !== a.fog && (d.fog = a.fog);
      void 0 !== a.flatShading && (d.flatShading = a.flatShading);
      void 0 !== a.blending && (d.blending = a.blending);
      void 0 !== a.combine && (d.combine = a.combine);
      void 0 !== a.side && (d.side = a.side);
      void 0 !== a.opacity && (d.opacity = a.opacity);
      void 0 !== a.transparent && (d.transparent = a.transparent);
      void 0 !== a.alphaTest && (d.alphaTest = a.alphaTest);
      void 0 !== a.depthTest && (d.depthTest = a.depthTest);
      void 0 !== a.depthWrite && (d.depthWrite = a.depthWrite);
      void 0 !== a.colorWrite && (d.colorWrite = a.colorWrite);
      void 0 !== a.wireframe && (d.wireframe = a.wireframe);
      void 0 !== a.wireframeLinewidth &&
        (d.wireframeLinewidth = a.wireframeLinewidth);
      void 0 !== a.wireframeLinecap &&
        (d.wireframeLinecap = a.wireframeLinecap);
      void 0 !== a.wireframeLinejoin &&
        (d.wireframeLinejoin = a.wireframeLinejoin);
      void 0 !== a.rotation && (d.rotation = a.rotation);
      1 !== a.linewidth && (d.linewidth = a.linewidth);
      void 0 !== a.dashSize && (d.dashSize = a.dashSize);
      void 0 !== a.gapSize && (d.gapSize = a.gapSize);
      void 0 !== a.scale && (d.scale = a.scale);
      void 0 !== a.polygonOffset && (d.polygonOffset = a.polygonOffset);
      void 0 !== a.polygonOffsetFactor &&
        (d.polygonOffsetFactor = a.polygonOffsetFactor);
      void 0 !== a.polygonOffsetUnits &&
        (d.polygonOffsetUnits = a.polygonOffsetUnits);
      void 0 !== a.skinning && (d.skinning = a.skinning);
      void 0 !== a.morphTargets && (d.morphTargets = a.morphTargets);
      void 0 !== a.dithering && (d.dithering = a.dithering);
      void 0 !== a.visible && (d.visible = a.visible);
      void 0 !== a.userData && (d.userData = a.userData);
      if (void 0 !== a.uniforms)
        for (var e in a.uniforms) {
          var f = a.uniforms[e];
          d.uniforms[e] = {};
          switch (f.type) {
            case "t":
              d.uniforms[e].value = b(f.value);
              break;
            case "c":
              d.uniforms[e].value = new G().setHex(f.value);
              break;
            case "v2":
              d.uniforms[e].value = new z().fromArray(f.value);
              break;
            case "v3":
              d.uniforms[e].value = new p().fromArray(f.value);
              break;
            case "v4":
              d.uniforms[e].value = new Z().fromArray(f.value);
              break;
            case "m4":
              d.uniforms[e].value = new P().fromArray(f.value);
              break;
            default:
              d.uniforms[e].value = f.value;
          }
        }
      void 0 !== a.defines && (d.defines = a.defines);
      void 0 !== a.vertexShader && (d.vertexShader = a.vertexShader);
      void 0 !== a.fragmentShader && (d.fragmentShader = a.fragmentShader);
      void 0 !== a.shading && (d.flatShading = 1 === a.shading);
      void 0 !== a.size && (d.size = a.size);
      void 0 !== a.sizeAttenuation && (d.sizeAttenuation = a.sizeAttenuation);
      void 0 !== a.map && (d.map = b(a.map));
      void 0 !== a.alphaMap &&
        ((d.alphaMap = b(a.alphaMap)), (d.transparent = !0));
      void 0 !== a.bumpMap && (d.bumpMap = b(a.bumpMap));
      void 0 !== a.bumpScale && (d.bumpScale = a.bumpScale);
      void 0 !== a.normalMap && (d.normalMap = b(a.normalMap));
      void 0 !== a.normalMapType && (d.normalMapType = a.normalMapType);
      void 0 !== a.normalScale &&
        ((e = a.normalScale),
        !1 === Array.isArray(e) && (e = [e, e]),
        (d.normalScale = new z().fromArray(e)));
      void 0 !== a.displacementMap &&
        (d.displacementMap = b(a.displacementMap));
      void 0 !== a.displacementScale &&
        (d.displacementScale = a.displacementScale);
      void 0 !== a.displacementBias &&
        (d.displacementBias = a.displacementBias);
      void 0 !== a.roughnessMap && (d.roughnessMap = b(a.roughnessMap));
      void 0 !== a.metalnessMap && (d.metalnessMap = b(a.metalnessMap));
      void 0 !== a.emissiveMap && (d.emissiveMap = b(a.emissiveMap));
      void 0 !== a.emissiveIntensity &&
        (d.emissiveIntensity = a.emissiveIntensity);
      void 0 !== a.specularMap && (d.specularMap = b(a.specularMap));
      void 0 !== a.envMap && (d.envMap = b(a.envMap));
      void 0 !== a.envMapIntensity && (d.envMapIntensity = a.envMapIntensity);
      void 0 !== a.reflectivity && (d.reflectivity = a.reflectivity);
      void 0 !== a.lightMap && (d.lightMap = b(a.lightMap));
      void 0 !== a.lightMapIntensity &&
        (d.lightMapIntensity = a.lightMapIntensity);
      void 0 !== a.aoMap && (d.aoMap = b(a.aoMap));
      void 0 !== a.aoMapIntensity && (d.aoMapIntensity = a.aoMapIntensity);
      void 0 !== a.gradientMap && (d.gradientMap = b(a.gradientMap));
      return d;
    },
    setPath: function(a) {
      this.path = a;
      return this;
    },
    setTextures: function(a) {
      this.textures = a;
      return this;
    }
  });
  var Vd = {
    decodeText: function(a) {
      if ("undefined" !== typeof TextDecoder)
        return new TextDecoder().decode(a);
      for (var b = "", c = 0, d = a.length; c < d; c++)
        b += String.fromCharCode(a[c]);
      return decodeURIComponent(escape(b));
    },
    extractUrlBase: function(a) {
      var b = a.lastIndexOf("/");
      return -1 === b ? "./" : a.substr(0, b + 1);
    }
  };
  Object.assign(ke.prototype, {
    load: function(a, b, c, d) {
      var e = this,
        f = new Fa(e.manager);
      f.setPath(e.path);
      f.load(
        a,
        function(a) {
          b(e.parse(JSON.parse(a)));
        },
        c,
        d
      );
    },
    parse: function(a) {
      var b = new E(),
        c = a.data.index;
      void 0 !== c && ((c = new Hf[c.type](c.array)), b.setIndex(new F(c, 1)));
      var d = a.data.attributes;
      for (f in d) {
        var e = d[f];
        c = new Hf[e.type](e.array);
        b.addAttribute(f, new F(c, e.itemSize, e.normalized));
      }
      var f = a.data.groups || a.data.drawcalls || a.data.offsets;
      if (void 0 !== f)
        for (c = 0, d = f.length; c !== d; ++c)
          (e = f[c]), b.addGroup(e.start, e.count, e.materialIndex);
      a = a.data.boundingSphere;
      void 0 !== a &&
        ((f = new p()),
        void 0 !== a.center && f.fromArray(a.center),
        (b.boundingSphere = new Ga(f, a.radius)));
      return b;
    },
    setPath: function(a) {
      this.path = a;
      return this;
    }
  });
  var Hf = {
    Int8Array: Int8Array,
    Uint8Array: Uint8Array,
    Uint8ClampedArray:
      "undefined" !== typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
    Int16Array: Int16Array,
    Uint16Array: Uint16Array,
    Int32Array: Int32Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array
  };
  kc.Handlers = {
    handlers: [],
    add: function(a, b) {
      this.handlers.push(a, b);
    },
    get: function(a) {
      for (var b = this.handlers, c = 0, d = b.length; c < d; c += 2) {
        var e = b[c + 1];
        if (b[c].test(a)) return e;
      }
      return null;
    }
  };
  Object.assign(kc.prototype, {
    crossOrigin: "anonymous",
    onLoadStart: function() {},
    onLoadProgress: function() {},
    onLoadComplete: function() {},
    initMaterials: function(a, b, c) {
      for (var d = [], e = 0; e < a.length; ++e)
        d[e] = this.createMaterial(a[e], b, c);
      return d;
    },
    createMaterial: (function() {
      var a = {
          NoBlending: 0,
          NormalBlending: 1,
          AdditiveBlending: 2,
          SubtractiveBlending: 3,
          MultiplyBlending: 4,
          CustomBlending: 5
        },
        b = new G(),
        c = new Gd(),
        d = new Pd();
      return function(e, f, g) {
        function h(a, b, d, e, h) {
          a = f + a;
          var m = kc.Handlers.get(a);
          null !== m ? (a = m.load(a)) : (c.setCrossOrigin(g), (a = c.load(a)));
          void 0 !== b &&
            (a.repeat.fromArray(b),
            1 !== b[0] && (a.wrapS = 1e3),
            1 !== b[1] && (a.wrapT = 1e3));
          void 0 !== d && a.offset.fromArray(d);
          void 0 !== e &&
            ("repeat" === e[0] && (a.wrapS = 1e3),
            "mirror" === e[0] && (a.wrapS = 1002),
            "repeat" === e[1] && (a.wrapT = 1e3),
            "mirror" === e[1] && (a.wrapT = 1002));
          void 0 !== h && (a.anisotropy = h);
          b = R.generateUUID();
          k[b] = a;
          return b;
        }
        var k = {},
          m = { uuid: R.generateUUID(), type: "MeshLambertMaterial" },
          l;
        for (l in e) {
          var n = e[l];
          switch (l) {
            case "DbgColor":
            case "DbgIndex":
            case "opticalDensity":
            case "illumination":
              break;
            case "DbgName":
              m.name = n;
              break;
            case "blending":
              m.blending = a[n];
              break;
            case "colorAmbient":
            case "mapAmbient":
              console.warn(
                "THREE.Loader.createMaterial:",
                l,
                "is no longer supported."
              );
              break;
            case "colorDiffuse":
              m.color = b.fromArray(n).getHex();
              break;
            case "colorSpecular":
              m.specular = b.fromArray(n).getHex();
              break;
            case "colorEmissive":
              m.emissive = b.fromArray(n).getHex();
              break;
            case "specularCoef":
              m.shininess = n;
              break;
            case "shading":
              "basic" === n.toLowerCase() && (m.type = "MeshBasicMaterial");
              "phong" === n.toLowerCase() && (m.type = "MeshPhongMaterial");
              "standard" === n.toLowerCase() &&
                (m.type = "MeshStandardMaterial");
              break;
            case "mapDiffuse":
              m.map = h(
                n,
                e.mapDiffuseRepeat,
                e.mapDiffuseOffset,
                e.mapDiffuseWrap,
                e.mapDiffuseAnisotropy
              );
              break;
            case "mapDiffuseRepeat":
            case "mapDiffuseOffset":
            case "mapDiffuseWrap":
            case "mapDiffuseAnisotropy":
              break;
            case "mapEmissive":
              m.emissiveMap = h(
                n,
                e.mapEmissiveRepeat,
                e.mapEmissiveOffset,
                e.mapEmissiveWrap,
                e.mapEmissiveAnisotropy
              );
              break;
            case "mapEmissiveRepeat":
            case "mapEmissiveOffset":
            case "mapEmissiveWrap":
            case "mapEmissiveAnisotropy":
              break;
            case "mapLight":
              m.lightMap = h(
                n,
                e.mapLightRepeat,
                e.mapLightOffset,
                e.mapLightWrap,
                e.mapLightAnisotropy
              );
              break;
            case "mapLightRepeat":
            case "mapLightOffset":
            case "mapLightWrap":
            case "mapLightAnisotropy":
              break;
            case "mapAO":
              m.aoMap = h(
                n,
                e.mapAORepeat,
                e.mapAOOffset,
                e.mapAOWrap,
                e.mapAOAnisotropy
              );
              break;
            case "mapAORepeat":
            case "mapAOOffset":
            case "mapAOWrap":
            case "mapAOAnisotropy":
              break;
            case "mapBump":
              m.bumpMap = h(
                n,
                e.mapBumpRepeat,
                e.mapBumpOffset,
                e.mapBumpWrap,
                e.mapBumpAnisotropy
              );
              break;
            case "mapBumpScale":
              m.bumpScale = n;
              break;
            case "mapBumpRepeat":
            case "mapBumpOffset":
            case "mapBumpWrap":
            case "mapBumpAnisotropy":
              break;
            case "mapNormal":
              m.normalMap = h(
                n,
                e.mapNormalRepeat,
                e.mapNormalOffset,
                e.mapNormalWrap,
                e.mapNormalAnisotropy
              );
              break;
            case "mapNormalFactor":
              m.normalScale = n;
              break;
            case "mapNormalRepeat":
            case "mapNormalOffset":
            case "mapNormalWrap":
            case "mapNormalAnisotropy":
              break;
            case "mapSpecular":
              m.specularMap = h(
                n,
                e.mapSpecularRepeat,
                e.mapSpecularOffset,
                e.mapSpecularWrap,
                e.mapSpecularAnisotropy
              );
              break;
            case "mapSpecularRepeat":
            case "mapSpecularOffset":
            case "mapSpecularWrap":
            case "mapSpecularAnisotropy":
              break;
            case "mapMetalness":
              m.metalnessMap = h(
                n,
                e.mapMetalnessRepeat,
                e.mapMetalnessOffset,
                e.mapMetalnessWrap,
                e.mapMetalnessAnisotropy
              );
              break;
            case "mapMetalnessRepeat":
            case "mapMetalnessOffset":
            case "mapMetalnessWrap":
            case "mapMetalnessAnisotropy":
              break;
            case "mapRoughness":
              m.roughnessMap = h(
                n,
                e.mapRoughnessRepeat,
                e.mapRoughnessOffset,
                e.mapRoughnessWrap,
                e.mapRoughnessAnisotropy
              );
              break;
            case "mapRoughnessRepeat":
            case "mapRoughnessOffset":
            case "mapRoughnessWrap":
            case "mapRoughnessAnisotropy":
              break;
            case "mapAlpha":
              m.alphaMap = h(
                n,
                e.mapAlphaRepeat,
                e.mapAlphaOffset,
                e.mapAlphaWrap,
                e.mapAlphaAnisotropy
              );
              break;
            case "mapAlphaRepeat":
            case "mapAlphaOffset":
            case "mapAlphaWrap":
            case "mapAlphaAnisotropy":
              break;
            case "flipSided":
              m.side = 1;
              break;
            case "doubleSided":
              m.side = 2;
              break;
            case "transparency":
              console.warn(
                "THREE.Loader.createMaterial: transparency has been renamed to opacity"
              );
              m.opacity = n;
              break;
            case "depthTest":
            case "depthWrite":
            case "colorWrite":
            case "opacity":
            case "reflectivity":
            case "transparent":
            case "visible":
            case "wireframe":
              m[l] = n;
              break;
            case "vertexColors":
              !0 === n && (m.vertexColors = 2);
              "face" === n && (m.vertexColors = 1);
              break;
            default:
              console.error("THREE.Loader.createMaterial: Unsupported", l, n);
          }
        }
        "MeshBasicMaterial" === m.type && delete m.emissive;
        "MeshPhongMaterial" !== m.type && delete m.specular;
        1 > m.opacity && (m.transparent = !0);
        d.setTextures(k);
        return d.parse(m);
      };
    })()
  });
  Object.assign(Qd.prototype, {
    crossOrigin: "anonymous",
    load: function(a, b, c, d) {
      var e = this,
        f = void 0 === this.path ? Vd.extractUrlBase(a) : this.path,
        g = new Fa(this.manager);
      g.setPath(this.path);
      g.setWithCredentials(this.withCredentials);
      g.load(
        a,
        function(c) {
          c = JSON.parse(c);
          var d = c.metadata;
          if (
            void 0 !== d &&
            ((d = d.type), void 0 !== d && "object" === d.toLowerCase())
          ) {
            console.error(
              "THREE.JSONLoader: " +
                a +
                " should be loaded with THREE.ObjectLoader instead."
            );
            return;
          }
          c = e.parse(c, f);
          b(c.geometry, c.materials);
        },
        c,
        d
      );
    },
    setPath: function(a) {
      this.path = a;
      return this;
    },
    setResourcePath: function(a) {
      this.resourcePath = a;
      return this;
    },
    setCrossOrigin: function(a) {
      this.crossOrigin = a;
      return this;
    },
    parse: (function() {
      return function(a, b) {
        void 0 !== a.data && (a = a.data);
        a.scale = void 0 !== a.scale ? 1 / a.scale : 1;
        var c = new I(),
          d = a,
          e,
          f,
          g,
          h = d.faces;
        var k = d.vertices;
        var m = d.normals,
          l = d.colors;
        var n = d.scale;
        var r = 0;
        if (void 0 !== d.uvs) {
          for (e = 0; e < d.uvs.length; e++) d.uvs[e].length && r++;
          for (e = 0; e < r; e++) c.faceVertexUvs[e] = [];
        }
        var x = 0;
        for (g = k.length; x < g; )
          (e = new p()),
            (e.x = k[x++] * n),
            (e.y = k[x++] * n),
            (e.z = k[x++] * n),
            c.vertices.push(e);
        x = 0;
        for (g = h.length; x < g; ) {
          k = h[x++];
          var t = k & 1;
          var u = k & 2;
          e = k & 8;
          var w = k & 16;
          var A = k & 32;
          n = k & 64;
          k &= 128;
          if (t) {
            t = new Xa();
            t.a = h[x];
            t.b = h[x + 1];
            t.c = h[x + 3];
            var v = new Xa();
            v.a = h[x + 1];
            v.b = h[x + 2];
            v.c = h[x + 3];
            x += 4;
            u && ((u = h[x++]), (t.materialIndex = u), (v.materialIndex = u));
            u = c.faces.length;
            if (e)
              for (e = 0; e < r; e++) {
                var C = d.uvs[e];
                c.faceVertexUvs[e][u] = [];
                c.faceVertexUvs[e][u + 1] = [];
                for (f = 0; 4 > f; f++) {
                  var y = h[x++];
                  var D = C[2 * y];
                  y = C[2 * y + 1];
                  D = new z(D, y);
                  2 !== f && c.faceVertexUvs[e][u].push(D);
                  0 !== f && c.faceVertexUvs[e][u + 1].push(D);
                }
              }
            w &&
              ((w = 3 * h[x++]),
              t.normal.set(m[w++], m[w++], m[w]),
              v.normal.copy(t.normal));
            if (A)
              for (e = 0; 4 > e; e++)
                (w = 3 * h[x++]),
                  (A = new p(m[w++], m[w++], m[w])),
                  2 !== e && t.vertexNormals.push(A),
                  0 !== e && v.vertexNormals.push(A);
            n &&
              ((n = h[x++]), (n = l[n]), t.color.setHex(n), v.color.setHex(n));
            if (k)
              for (e = 0; 4 > e; e++)
                (n = h[x++]),
                  (n = l[n]),
                  2 !== e && t.vertexColors.push(new G(n)),
                  0 !== e && v.vertexColors.push(new G(n));
            c.faces.push(t);
            c.faces.push(v);
          } else {
            t = new Xa();
            t.a = h[x++];
            t.b = h[x++];
            t.c = h[x++];
            u && ((u = h[x++]), (t.materialIndex = u));
            u = c.faces.length;
            if (e)
              for (e = 0; e < r; e++)
                for (
                  C = d.uvs[e], c.faceVertexUvs[e][u] = [], f = 0;
                  3 > f;
                  f++
                )
                  (y = h[x++]),
                    (D = C[2 * y]),
                    (y = C[2 * y + 1]),
                    (D = new z(D, y)),
                    c.faceVertexUvs[e][u].push(D);
            w && ((w = 3 * h[x++]), t.normal.set(m[w++], m[w++], m[w]));
            if (A)
              for (e = 0; 3 > e; e++)
                (w = 3 * h[x++]),
                  (A = new p(m[w++], m[w++], m[w])),
                  t.vertexNormals.push(A);
            n && ((n = h[x++]), t.color.setHex(l[n]));
            if (k)
              for (e = 0; 3 > e; e++)
                (n = h[x++]), t.vertexColors.push(new G(l[n]));
            c.faces.push(t);
          }
        }
        d = a;
        x = void 0 !== d.influencesPerVertex ? d.influencesPerVertex : 2;
        if (d.skinWeights)
          for (g = 0, h = d.skinWeights.length; g < h; g += x)
            c.skinWeights.push(
              new Z(
                d.skinWeights[g],
                1 < x ? d.skinWeights[g + 1] : 0,
                2 < x ? d.skinWeights[g + 2] : 0,
                3 < x ? d.skinWeights[g + 3] : 0
              )
            );
        if (d.skinIndices)
          for (g = 0, h = d.skinIndices.length; g < h; g += x)
            c.skinIndices.push(
              new Z(
                d.skinIndices[g],
                1 < x ? d.skinIndices[g + 1] : 0,
                2 < x ? d.skinIndices[g + 2] : 0,
                3 < x ? d.skinIndices[g + 3] : 0
              )
            );
        c.bones = d.bones;
        c.bones &&
          0 < c.bones.length &&
          (c.skinWeights.length !== c.skinIndices.length ||
            c.skinIndices.length !== c.vertices.length) &&
          console.warn(
            "When skinning, number of vertices (" +
              c.vertices.length +
              "), skinIndices (" +
              c.skinIndices.length +
              "), and skinWeights (" +
              c.skinWeights.length +
              ") should match."
          );
        g = a;
        h = g.scale;
        if (void 0 !== g.morphTargets)
          for (d = 0, x = g.morphTargets.length; d < x; d++)
            for (
              c.morphTargets[d] = {},
                c.morphTargets[d].name = g.morphTargets[d].name,
                c.morphTargets[d].vertices = [],
                m = c.morphTargets[d].vertices,
                l = g.morphTargets[d].vertices,
                r = 0,
                k = l.length;
              r < k;
              r += 3
            )
              (n = new p()),
                (n.x = l[r] * h),
                (n.y = l[r + 1] * h),
                (n.z = l[r + 2] * h),
                m.push(n);
        if (void 0 !== g.morphColors && 0 < g.morphColors.length)
          for (
            console.warn(
              'THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'
            ),
              h = c.faces,
              g = g.morphColors[0].colors,
              d = 0,
              x = h.length;
            d < x;
            d++
          )
            h[d].color.fromArray(g, 3 * d);
        g = a;
        d = [];
        x = [];
        void 0 !== g.animation && x.push(g.animation);
        void 0 !== g.animations &&
          (g.animations.length
            ? (x = x.concat(g.animations))
            : x.push(g.animations));
        for (g = 0; g < x.length; g++)
          (h = za.parseAnimation(x[g], c.bones)) && d.push(h);
        c.morphTargets &&
          ((x = za.CreateClipsFromMorphTargetSequences(c.morphTargets, 10)),
          (d = d.concat(x)));
        0 < d.length && (c.animations = d);
        c.computeFaceNormals();
        c.computeBoundingSphere();
        if (void 0 === a.materials || 0 === a.materials.length)
          return { geometry: c };
        a = kc.prototype.initMaterials(
          a.materials,
          this.resourcePath || b,
          this.crossOrigin
        );
        return { geometry: c, materials: a };
      };
    })()
  });
  Object.assign(le.prototype, {
    crossOrigin: "anonymous",
    load: function(a, b, c, d) {
      var e = this,
        f = void 0 === this.path ? Vd.extractUrlBase(a) : this.path;
      this.resourcePath = this.resourcePath || f;
      f = new Fa(e.manager);
      f.setPath(this.path);
      f.load(
        a,
        function(c) {
          var f = null;
          try {
            f = JSON.parse(c);
          } catch (k) {
            void 0 !== d && d(k);
            console.error(
              "THREE:ObjectLoader: Can't parse " + a + ".",
              k.message
            );
            return;
          }
          c = f.metadata;
          void 0 === c ||
          void 0 === c.type ||
          "geometry" === c.type.toLowerCase()
            ? console.error(
                "THREE.ObjectLoader: Can't load " +
                  a +
                  ". Use THREE.JSONLoader instead."
              )
            : e.parse(f, b);
        },
        c,
        d
      );
    },
    setPath: function(a) {
      this.path = a;
      return this;
    },
    setResourcePath: function(a) {
      this.resourcePath = a;
      return this;
    },
    setCrossOrigin: function(a) {
      this.crossOrigin = a;
      return this;
    },
    parse: function(a, b) {
      var c = this.parseShape(a.shapes);
      c = this.parseGeometries(a.geometries, c);
      var d = this.parseImages(a.images, function() {
        void 0 !== b && b(e);
      });
      d = this.parseTextures(a.textures, d);
      d = this.parseMaterials(a.materials, d);
      var e = this.parseObject(a.object, c, d);
      a.animations && (e.animations = this.parseAnimations(a.animations));
      (void 0 !== a.images && 0 !== a.images.length) || void 0 === b || b(e);
      return e;
    },
    parseShape: function(a) {
      var b = {};
      if (void 0 !== a)
        for (var c = 0, d = a.length; c < d; c++) {
          var e = new ib().fromJSON(a[c]);
          b[e.uuid] = e;
        }
      return b;
    },
    parseGeometries: function(a, b) {
      var c = {};
      if (void 0 !== a)
        for (var d = new Qd(), e = new ke(), f = 0, g = a.length; f < g; f++) {
          var h = a[f];
          switch (h.type) {
            case "PlaneGeometry":
            case "PlaneBufferGeometry":
              var k = new Ba[h.type](
                h.width,
                h.height,
                h.widthSegments,
                h.heightSegments
              );
              break;
            case "BoxGeometry":
            case "BoxBufferGeometry":
            case "CubeGeometry":
              k = new Ba[h.type](
                h.width,
                h.height,
                h.depth,
                h.widthSegments,
                h.heightSegments,
                h.depthSegments
              );
              break;
            case "CircleGeometry":
            case "CircleBufferGeometry":
              k = new Ba[h.type](
                h.radius,
                h.segments,
                h.thetaStart,
                h.thetaLength
              );
              break;
            case "CylinderGeometry":
            case "CylinderBufferGeometry":
              k = new Ba[h.type](
                h.radiusTop,
                h.radiusBottom,
                h.height,
                h.radialSegments,
                h.heightSegments,
                h.openEnded,
                h.thetaStart,
                h.thetaLength
              );
              break;
            case "ConeGeometry":
            case "ConeBufferGeometry":
              k = new Ba[h.type](
                h.radius,
                h.height,
                h.radialSegments,
                h.heightSegments,
                h.openEnded,
                h.thetaStart,
                h.thetaLength
              );
              break;
            case "SphereGeometry":
            case "SphereBufferGeometry":
              k = new Ba[h.type](
                h.radius,
                h.widthSegments,
                h.heightSegments,
                h.phiStart,
                h.phiLength,
                h.thetaStart,
                h.thetaLength
              );
              break;
            case "DodecahedronGeometry":
            case "DodecahedronBufferGeometry":
            case "IcosahedronGeometry":
            case "IcosahedronBufferGeometry":
            case "OctahedronGeometry":
            case "OctahedronBufferGeometry":
            case "TetrahedronGeometry":
            case "TetrahedronBufferGeometry":
              k = new Ba[h.type](h.radius, h.detail);
              break;
            case "RingGeometry":
            case "RingBufferGeometry":
              k = new Ba[h.type](
                h.innerRadius,
                h.outerRadius,
                h.thetaSegments,
                h.phiSegments,
                h.thetaStart,
                h.thetaLength
              );
              break;
            case "TorusGeometry":
            case "TorusBufferGeometry":
              k = new Ba[h.type](
                h.radius,
                h.tube,
                h.radialSegments,
                h.tubularSegments,
                h.arc
              );
              break;
            case "TorusKnotGeometry":
            case "TorusKnotBufferGeometry":
              k = new Ba[h.type](
                h.radius,
                h.tube,
                h.tubularSegments,
                h.radialSegments,
                h.p,
                h.q
              );
              break;
            case "LatheGeometry":
            case "LatheBufferGeometry":
              k = new Ba[h.type](h.points, h.segments, h.phiStart, h.phiLength);
              break;
            case "PolyhedronGeometry":
            case "PolyhedronBufferGeometry":
              k = new Ba[h.type](h.vertices, h.indices, h.radius, h.details);
              break;
            case "ShapeGeometry":
            case "ShapeBufferGeometry":
              k = [];
              for (var m = 0, l = h.shapes.length; m < l; m++) {
                var n = b[h.shapes[m]];
                k.push(n);
              }
              k = new Ba[h.type](k, h.curveSegments);
              break;
            case "ExtrudeGeometry":
            case "ExtrudeBufferGeometry":
              k = [];
              m = 0;
              for (l = h.shapes.length; m < l; m++)
                (n = b[h.shapes[m]]), k.push(n);
              m = h.options.extrudePath;
              void 0 !== m &&
                (h.options.extrudePath = new Gf[m.type]().fromJSON(m));
              k = new Ba[h.type](k, h.options);
              break;
            case "BufferGeometry":
              k = e.parse(h);
              break;
            case "Geometry":
              k = d.parse(h, this.resourcePath).geometry;
              break;
            default:
              console.warn(
                'THREE.ObjectLoader: Unsupported geometry type "' + h.type + '"'
              );
              continue;
          }
          k.uuid = h.uuid;
          void 0 !== h.name && (k.name = h.name);
          !0 === k.isBufferGeometry &&
            void 0 !== h.userData &&
            (k.userData = h.userData);
          c[h.uuid] = k;
        }
      return c;
    },
    parseMaterials: function(a, b) {
      var c = {},
        d = {};
      if (void 0 !== a) {
        var e = new Pd();
        e.setTextures(b);
        b = 0;
        for (var f = a.length; b < f; b++) {
          var g = a[b];
          if ("MultiMaterial" === g.type) {
            for (var h = [], k = 0; k < g.materials.length; k++) {
              var m = g.materials[k];
              void 0 === c[m.uuid] && (c[m.uuid] = e.parse(m));
              h.push(c[m.uuid]);
            }
            d[g.uuid] = h;
          } else (d[g.uuid] = e.parse(g)), (c[g.uuid] = d[g.uuid]);
        }
      }
      return d;
    },
    parseAnimations: function(a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = za.parse(d);
        void 0 !== d.uuid && (e.uuid = d.uuid);
        b.push(e);
      }
      return b;
    },
    parseImages: function(a, b) {
      function c(a) {
        d.manager.itemStart(a);
        return f.load(
          a,
          function() {
            d.manager.itemEnd(a);
          },
          void 0,
          function() {
            d.manager.itemError(a);
            d.manager.itemEnd(a);
          }
        );
      }
      var d = this,
        e = {};
      if (void 0 !== a && 0 < a.length) {
        b = new ge(b);
        var f = new ed(b);
        f.setCrossOrigin(this.crossOrigin);
        b = 0;
        for (var g = a.length; b < g; b++) {
          var h = a[b],
            k = h.url;
          if (Array.isArray(k)) {
            e[h.uuid] = [];
            for (var m = 0, l = k.length; m < l; m++) {
              var n = k[m];
              n = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(n) ? n : d.resourcePath + n;
              e[h.uuid].push(c(n));
            }
          } else
            (n = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url)
              ? h.url
              : d.resourcePath + h.url),
              (e[h.uuid] = c(n));
        }
      }
      return e;
    },
    parseTextures: function(a, b) {
      function c(a, b) {
        if ("number" === typeof a) return a;
        console.warn(
          "THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",
          a
        );
        return b[a];
      }
      var d = {};
      if (void 0 !== a)
        for (var e = 0, f = a.length; e < f; e++) {
          var g = a[e];
          void 0 === g.image &&
            console.warn(
              'THREE.ObjectLoader: No "image" specified for',
              g.uuid
            );
          void 0 === b[g.image] &&
            console.warn("THREE.ObjectLoader: Undefined image", g.image);
          var h = Array.isArray(b[g.image])
            ? new Ya(b[g.image])
            : new W(b[g.image]);
          h.needsUpdate = !0;
          h.uuid = g.uuid;
          void 0 !== g.name && (h.name = g.name);
          void 0 !== g.mapping && (h.mapping = c(g.mapping, ch));
          void 0 !== g.offset && h.offset.fromArray(g.offset);
          void 0 !== g.repeat && h.repeat.fromArray(g.repeat);
          void 0 !== g.center && h.center.fromArray(g.center);
          void 0 !== g.rotation && (h.rotation = g.rotation);
          void 0 !== g.wrap &&
            ((h.wrapS = c(g.wrap[0], If)), (h.wrapT = c(g.wrap[1], If)));
          void 0 !== g.format && (h.format = g.format);
          void 0 !== g.minFilter && (h.minFilter = c(g.minFilter, Jf));
          void 0 !== g.magFilter && (h.magFilter = c(g.magFilter, Jf));
          void 0 !== g.anisotropy && (h.anisotropy = g.anisotropy);
          void 0 !== g.flipY && (h.flipY = g.flipY);
          d[g.uuid] = h;
        }
      return d;
    },
    parseObject: function(a, b, c) {
      function d(a) {
        void 0 === b[a] &&
          console.warn("THREE.ObjectLoader: Undefined geometry", a);
        return b[a];
      }
      function e(a) {
        if (void 0 !== a) {
          if (Array.isArray(a)) {
            for (var b = [], d = 0, e = a.length; d < e; d++) {
              var f = a[d];
              void 0 === c[f] &&
                console.warn("THREE.ObjectLoader: Undefined material", f);
              b.push(c[f]);
            }
            return b;
          }
          void 0 === c[a] &&
            console.warn("THREE.ObjectLoader: Undefined material", a);
          return c[a];
        }
      }
      switch (a.type) {
        case "Scene":
          var f = new vd();
          void 0 !== a.background &&
            Number.isInteger(a.background) &&
            (f.background = new G(a.background));
          void 0 !== a.fog &&
            ("Fog" === a.fog.type
              ? (f.fog = new Qb(a.fog.color, a.fog.near, a.fog.far))
              : "FogExp2" === a.fog.type &&
                (f.fog = new Pb(a.fog.color, a.fog.density)));
          break;
        case "PerspectiveCamera":
          f = new V(a.fov, a.aspect, a.near, a.far);
          void 0 !== a.focus && (f.focus = a.focus);
          void 0 !== a.zoom && (f.zoom = a.zoom);
          void 0 !== a.filmGauge && (f.filmGauge = a.filmGauge);
          void 0 !== a.filmOffset && (f.filmOffset = a.filmOffset);
          void 0 !== a.view && (f.view = Object.assign({}, a.view));
          break;
        case "OrthographicCamera":
          f = new hd(a.left, a.right, a.top, a.bottom, a.near, a.far);
          void 0 !== a.zoom && (f.zoom = a.zoom);
          void 0 !== a.view && (f.view = Object.assign({}, a.view));
          break;
        case "AmbientLight":
          f = new Nd(a.color, a.intensity);
          break;
        case "DirectionalLight":
          f = new Md(a.color, a.intensity);
          break;
        case "PointLight":
          f = new Kd(a.color, a.intensity, a.distance, a.decay);
          break;
        case "RectAreaLight":
          f = new Od(a.color, a.intensity, a.width, a.height);
          break;
        case "SpotLight":
          f = new Jd(
            a.color,
            a.intensity,
            a.distance,
            a.angle,
            a.penumbra,
            a.decay
          );
          break;
        case "HemisphereLight":
          f = new Hd(a.color, a.groundColor, a.intensity);
          break;
        case "SkinnedMesh":
          console.warn(
            "THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet."
          );
        case "Mesh":
          f = d(a.geometry);
          var g = e(a.material);
          f = f.bones && 0 < f.bones.length ? new xd(f, g) : new pa(f, g);
          break;
        case "LOD":
          f = new Fc();
          break;
        case "Line":
          f = new ma(d(a.geometry), e(a.material), a.mode);
          break;
        case "LineLoop":
          f = new yd(d(a.geometry), e(a.material));
          break;
        case "LineSegments":
          f = new S(d(a.geometry), e(a.material));
          break;
        case "PointCloud":
        case "Points":
          f = new Sb(d(a.geometry), e(a.material));
          break;
        case "Sprite":
          f = new Ec(e(a.material));
          break;
        case "Group":
          f = new Ob();
          break;
        default:
          f = new D();
      }
      f.uuid = a.uuid;
      void 0 !== a.name && (f.name = a.name);
      void 0 !== a.matrix
        ? (f.matrix.fromArray(a.matrix),
          void 0 !== a.matrixAutoUpdate &&
            (f.matrixAutoUpdate = a.matrixAutoUpdate),
          f.matrixAutoUpdate &&
            f.matrix.decompose(f.position, f.quaternion, f.scale))
        : (void 0 !== a.position && f.position.fromArray(a.position),
          void 0 !== a.rotation && f.rotation.fromArray(a.rotation),
          void 0 !== a.quaternion && f.quaternion.fromArray(a.quaternion),
          void 0 !== a.scale && f.scale.fromArray(a.scale));
      void 0 !== a.castShadow && (f.castShadow = a.castShadow);
      void 0 !== a.receiveShadow && (f.receiveShadow = a.receiveShadow);
      a.shadow &&
        (void 0 !== a.shadow.bias && (f.shadow.bias = a.shadow.bias),
        void 0 !== a.shadow.radius && (f.shadow.radius = a.shadow.radius),
        void 0 !== a.shadow.mapSize &&
          f.shadow.mapSize.fromArray(a.shadow.mapSize),
        void 0 !== a.shadow.camera &&
          (f.shadow.camera = this.parseObject(a.shadow.camera)));
      void 0 !== a.visible && (f.visible = a.visible);
      void 0 !== a.frustumCulled && (f.frustumCulled = a.frustumCulled);
      void 0 !== a.renderOrder && (f.renderOrder = a.renderOrder);
      void 0 !== a.userData && (f.userData = a.userData);
      void 0 !== a.layers && (f.layers.mask = a.layers);
      if (void 0 !== a.children) {
        g = a.children;
        for (var h = 0; h < g.length; h++) f.add(this.parseObject(g[h], b, c));
      }
      if ("LOD" === a.type)
        for (a = a.levels, g = 0; g < a.length; g++) {
          h = a[g];
          var k = f.getObjectByProperty("uuid", h.object);
          void 0 !== k && f.addLevel(k, h.distance);
        }
      return f;
    }
  });
  var ch = {
      UVMapping: 300,
      CubeReflectionMapping: 301,
      CubeRefractionMapping: 302,
      EquirectangularReflectionMapping: 303,
      EquirectangularRefractionMapping: 304,
      SphericalReflectionMapping: 305,
      CubeUVReflectionMapping: 306,
      CubeUVRefractionMapping: 307
    },
    If = {
      RepeatWrapping: 1e3,
      ClampToEdgeWrapping: 1001,
      MirroredRepeatWrapping: 1002
    },
    Jf = {
      NearestFilter: 1003,
      NearestMipMapNearestFilter: 1004,
      NearestMipMapLinearFilter: 1005,
      LinearFilter: 1006,
      LinearMipMapNearestFilter: 1007,
      LinearMipMapLinearFilter: 1008
    };
  me.prototype = {
    constructor: me,
    setOptions: function(a) {
      this.options = a;
      return this;
    },
    load: function(a, b, c, d) {
      void 0 === a && (a = "");
      void 0 !== this.path && (a = this.path + a);
      a = this.manager.resolveURL(a);
      var e = this,
        f = Ib.get(a);
      if (void 0 !== f)
        return (
          e.manager.itemStart(a),
          setTimeout(function() {
            b && b(f);
            e.manager.itemEnd(a);
          }, 0),
          f
        );
      fetch(a)
        .then(function(a) {
          return a.blob();
        })
        .then(function(a) {
          return createImageBitmap(a, e.options);
        })
        .then(function(c) {
          Ib.add(a, c);
          b && b(c);
          e.manager.itemEnd(a);
        })
        .catch(function(b) {
          d && d(b);
          e.manager.itemError(a);
          e.manager.itemEnd(a);
        });
    },
    setCrossOrigin: function() {
      return this;
    },
    setPath: function(a) {
      this.path = a;
      return this;
    }
  };
  Object.assign(ne.prototype, {
    moveTo: function(a, b) {
      this.currentPath = new Na();
      this.subPaths.push(this.currentPath);
      this.currentPath.moveTo(a, b);
    },
    lineTo: function(a, b) {
      this.currentPath.lineTo(a, b);
    },
    quadraticCurveTo: function(a, b, c, d) {
      this.currentPath.quadraticCurveTo(a, b, c, d);
    },
    bezierCurveTo: function(a, b, c, d, e, f) {
      this.currentPath.bezierCurveTo(a, b, c, d, e, f);
    },
    splineThru: function(a) {
      this.currentPath.splineThru(a);
    },
    toShapes: function(a, b) {
      function c(a) {
        for (var b = [], c = 0, d = a.length; c < d; c++) {
          var e = a[c],
            f = new ib();
          f.curves = e.curves;
          b.push(f);
        }
        return b;
      }
      function d(a, b) {
        for (var c = b.length, d = !1, e = c - 1, f = 0; f < c; e = f++) {
          var g = b[e],
            h = b[f],
            k = h.x - g.x,
            m = h.y - g.y;
          if (Math.abs(m) > Number.EPSILON) {
            if (
              (0 > m && ((g = b[f]), (k = -k), (h = b[e]), (m = -m)),
              !(a.y < g.y || a.y > h.y))
            )
              if (a.y === g.y) {
                if (a.x === g.x) return !0;
              } else {
                e = m * (a.x - g.x) - k * (a.y - g.y);
                if (0 === e) return !0;
                0 > e || (d = !d);
              }
          } else if (
            a.y === g.y &&
            ((h.x <= a.x && a.x <= g.x) || (g.x <= a.x && a.x <= h.x))
          )
            return !0;
        }
        return d;
      }
      var e = Za.isClockWise,
        f = this.subPaths;
      if (0 === f.length) return [];
      if (!0 === b) return c(f);
      b = [];
      if (1 === f.length) {
        var g = f[0];
        var h = new ib();
        h.curves = g.curves;
        b.push(h);
        return b;
      }
      var k = !e(f[0].getPoints());
      k = a ? !k : k;
      h = [];
      var m = [],
        l = [],
        n = 0;
      m[n] = void 0;
      l[n] = [];
      for (var p = 0, x = f.length; p < x; p++) {
        g = f[p];
        var t = g.getPoints();
        var u = e(t);
        (u = a ? !u : u)
          ? (!k && m[n] && n++,
            (m[n] = { s: new ib(), p: t }),
            (m[n].s.curves = g.curves),
            k && n++,
            (l[n] = []))
          : l[n].push({ h: g, p: t[0] });
      }
      if (!m[0]) return c(f);
      if (1 < m.length) {
        p = !1;
        a = [];
        e = 0;
        for (f = m.length; e < f; e++) h[e] = [];
        e = 0;
        for (f = m.length; e < f; e++)
          for (g = l[e], u = 0; u < g.length; u++) {
            k = g[u];
            n = !0;
            for (t = 0; t < m.length; t++)
              d(k.p, m[t].p) &&
                (e !== t && a.push({ froms: e, tos: t, hole: u }),
                n ? ((n = !1), h[t].push(k)) : (p = !0));
            n && h[e].push(k);
          }
        0 < a.length && (p || (l = h));
      }
      p = 0;
      for (e = m.length; p < e; p++)
        for (h = m[p].s, b.push(h), a = l[p], f = 0, g = a.length; f < g; f++)
          h.holes.push(a[f].h);
      return b;
    }
  });
  Object.assign(oe.prototype, {
    isFont: !0,
    generateShapes: function(a, b) {
      void 0 === b && (b = 100);
      var c = [],
        d = b;
      b = this.data;
      var e = Array.from ? Array.from(a) : String(a).split("");
      d /= b.resolution;
      var f =
        (b.boundingBox.yMax - b.boundingBox.yMin + b.underlineThickness) * d;
      a = [];
      for (var g = 0, h = 0, k = 0; k < e.length; k++) {
        var m = e[k];
        if ("\n" === m) (g = 0), (h -= f);
        else {
          var l = d;
          var n = g,
            p = h;
          if ((m = b.glyphs[m] || b.glyphs["?"])) {
            var x = new ne();
            if (m.o)
              for (
                var t = m._cachedOutline || (m._cachedOutline = m.o.split(" ")),
                  u = 0,
                  w = t.length;
                u < w;

              )
                switch (t[u++]) {
                  case "m":
                    var A = t[u++] * l + n;
                    var v = t[u++] * l + p;
                    x.moveTo(A, v);
                    break;
                  case "l":
                    A = t[u++] * l + n;
                    v = t[u++] * l + p;
                    x.lineTo(A, v);
                    break;
                  case "q":
                    var z = t[u++] * l + n;
                    var y = t[u++] * l + p;
                    var C = t[u++] * l + n;
                    var D = t[u++] * l + p;
                    x.quadraticCurveTo(C, D, z, y);
                    break;
                  case "b":
                    (z = t[u++] * l + n),
                      (y = t[u++] * l + p),
                      (C = t[u++] * l + n),
                      (D = t[u++] * l + p),
                      (A = t[u++] * l + n),
                      (v = t[u++] * l + p),
                      x.bezierCurveTo(C, D, A, v, z, y);
                }
            l = { offsetX: m.ha * l, path: x };
          } else l = void 0;
          g += l.offsetX;
          a.push(l.path);
        }
      }
      b = 0;
      for (e = a.length; b < e; b++)
        Array.prototype.push.apply(c, a[b].toShapes());
      return c;
    }
  });
  Object.assign(uf.prototype, {
    load: function(a, b, c, d) {
      var e = this,
        f = new Fa(this.manager);
      f.setPath(this.path);
      f.load(
        a,
        function(a) {
          try {
            var c = JSON.parse(a);
          } catch (k) {
            console.warn(
              "THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."
            ),
              (c = JSON.parse(a.substring(65, a.length - 2)));
          }
          a = e.parse(c);
          b && b(a);
        },
        c,
        d
      );
    },
    parse: function(a) {
      return new oe(a);
    },
    setPath: function(a) {
      this.path = a;
      return this;
    }
  });
  var Wd,
    se = {
      getContext: function() {
        void 0 === Wd &&
          (Wd = new (window.AudioContext || window.webkitAudioContext)());
        return Wd;
      },
      setContext: function(a) {
        Wd = a;
      }
    };
  Object.assign(pe.prototype, {
    load: function(a, b, c, d) {
      var e = new Fa(this.manager);
      e.setResponseType("arraybuffer");
      e.setPath(this.path);
      e.load(
        a,
        function(a) {
          a = a.slice(0);
          se.getContext().decodeAudioData(a, function(a) {
            b(a);
          });
        },
        c,
        d
      );
    },
    setPath: function(a) {
      this.path = a;
      return this;
    }
  });
  Object.assign(vf.prototype, {
    update: (function() {
      var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        k = new P(),
        m = new P();
      return function(l) {
        if (
          a !== this ||
          b !== l.focus ||
          c !== l.fov ||
          d !== l.aspect * this.aspect ||
          e !== l.near ||
          f !== l.far ||
          g !== l.zoom ||
          h !== this.eyeSep
        ) {
          a = this;
          b = l.focus;
          c = l.fov;
          d = l.aspect * this.aspect;
          e = l.near;
          f = l.far;
          g = l.zoom;
          var n = l.projectionMatrix.clone();
          h = this.eyeSep / 2;
          var p = (h * e) / b,
            q = (e * Math.tan(R.DEG2RAD * c * 0.5)) / g;
          m.elements[12] = -h;
          k.elements[12] = h;
          var t = -q * d + p;
          var u = q * d + p;
          n.elements[0] = (2 * e) / (u - t);
          n.elements[8] = (u + t) / (u - t);
          this.cameraL.projectionMatrix.copy(n);
          t = -q * d - p;
          u = q * d - p;
          n.elements[0] = (2 * e) / (u - t);
          n.elements[8] = (u + t) / (u - t);
          this.cameraR.projectionMatrix.copy(n);
        }
        this.cameraL.matrixWorld.copy(l.matrixWorld).multiply(m);
        this.cameraR.matrixWorld.copy(l.matrixWorld).multiply(k);
      };
    })()
  });
  id.prototype = Object.create(D.prototype);
  id.prototype.constructor = id;
  Object.assign(qe.prototype, {
    start: function() {
      this.oldTime = this.startTime = ("undefined" === typeof performance
        ? Date
        : performance
      ).now();
      this.elapsedTime = 0;
      this.running = !0;
    },
    stop: function() {
      this.getElapsedTime();
      this.autoStart = this.running = !1;
    },
    getElapsedTime: function() {
      this.getDelta();
      return this.elapsedTime;
    },
    getDelta: function() {
      var a = 0;
      if (this.autoStart && !this.running) return this.start(), 0;
      if (this.running) {
        var b = ("undefined" === typeof performance ? Date : performance).now();
        a = (b - this.oldTime) / 1e3;
        this.oldTime = b;
        this.elapsedTime += a;
      }
      return a;
    }
  });
  re.prototype = Object.assign(Object.create(D.prototype), {
    constructor: re,
    getInput: function() {
      return this.gain;
    },
    removeFilter: function() {
      null !== this.filter &&
        (this.gain.disconnect(this.filter),
        this.filter.disconnect(this.context.destination),
        this.gain.connect(this.context.destination),
        (this.filter = null));
      return this;
    },
    getFilter: function() {
      return this.filter;
    },
    setFilter: function(a) {
      null !== this.filter
        ? (this.gain.disconnect(this.filter),
          this.filter.disconnect(this.context.destination))
        : this.gain.disconnect(this.context.destination);
      this.filter = a;
      this.gain.connect(this.filter);
      this.filter.connect(this.context.destination);
      return this;
    },
    getMasterVolume: function() {
      return this.gain.gain.value;
    },
    setMasterVolume: function(a) {
      this.gain.gain.setTargetAtTime(a, this.context.currentTime, 0.01);
      return this;
    },
    updateMatrixWorld: (function() {
      var a = new p(),
        b = new ja(),
        c = new p(),
        d = new p(),
        e = new qe();
      return function(f) {
        D.prototype.updateMatrixWorld.call(this, f);
        f = this.context.listener;
        var g = this.up;
        this.timeDelta = e.getDelta();
        this.matrixWorld.decompose(a, b, c);
        d.set(0, 0, -1).applyQuaternion(b);
        if (f.positionX) {
          var h = this.context.currentTime + this.timeDelta;
          f.positionX.linearRampToValueAtTime(a.x, h);
          f.positionY.linearRampToValueAtTime(a.y, h);
          f.positionZ.linearRampToValueAtTime(a.z, h);
          f.forwardX.linearRampToValueAtTime(d.x, h);
          f.forwardY.linearRampToValueAtTime(d.y, h);
          f.forwardZ.linearRampToValueAtTime(d.z, h);
          f.upX.linearRampToValueAtTime(g.x, h);
          f.upY.linearRampToValueAtTime(g.y, h);
          f.upZ.linearRampToValueAtTime(g.z, h);
        } else
          f.setPosition(a.x, a.y, a.z),
            f.setOrientation(d.x, d.y, d.z, g.x, g.y, g.z);
      };
    })()
  });
  lc.prototype = Object.assign(Object.create(D.prototype), {
    constructor: lc,
    getOutput: function() {
      return this.gain;
    },
    setNodeSource: function(a) {
      this.hasPlaybackControl = !1;
      this.sourceType = "audioNode";
      this.source = a;
      this.connect();
      return this;
    },
    setMediaElementSource: function(a) {
      this.hasPlaybackControl = !1;
      this.sourceType = "mediaNode";
      this.source = this.context.createMediaElementSource(a);
      this.connect();
      return this;
    },
    setBuffer: function(a) {
      this.buffer = a;
      this.sourceType = "buffer";
      this.autoplay && this.play();
      return this;
    },
    play: function() {
      if (!0 === this.isPlaying)
        console.warn("THREE.Audio: Audio is already playing.");
      else if (!1 === this.hasPlaybackControl)
        console.warn("THREE.Audio: this Audio has no playback control.");
      else {
        var a = this.context.createBufferSource();
        a.buffer = this.buffer;
        a.loop = this.loop;
        a.onended = this.onEnded.bind(this);
        a.playbackRate.setValueAtTime(this.playbackRate, this.startTime);
        this.startTime = this.context.currentTime;
        a.start(this.startTime, this.offset);
        this.isPlaying = !0;
        this.source = a;
        return this.connect();
      }
    },
    pause: function() {
      if (!1 === this.hasPlaybackControl)
        console.warn("THREE.Audio: this Audio has no playback control.");
      else
        return (
          !0 === this.isPlaying &&
            (this.source.stop(),
            (this.source.onended = null),
            (this.offset +=
              (this.context.currentTime - this.startTime) * this.playbackRate),
            (this.isPlaying = !1)),
          this
        );
    },
    stop: function() {
      if (!1 === this.hasPlaybackControl)
        console.warn("THREE.Audio: this Audio has no playback control.");
      else
        return (
          this.source.stop(),
          (this.source.onended = null),
          (this.offset = 0),
          (this.isPlaying = !1),
          this
        );
    },
    connect: function() {
      if (0 < this.filters.length) {
        this.source.connect(this.filters[0]);
        for (var a = 1, b = this.filters.length; a < b; a++)
          this.filters[a - 1].connect(this.filters[a]);
        this.filters[this.filters.length - 1].connect(this.getOutput());
      } else this.source.connect(this.getOutput());
      return this;
    },
    disconnect: function() {
      if (0 < this.filters.length) {
        this.source.disconnect(this.filters[0]);
        for (var a = 1, b = this.filters.length; a < b; a++)
          this.filters[a - 1].disconnect(this.filters[a]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());
      return this;
    },
    getFilters: function() {
      return this.filters;
    },
    setFilters: function(a) {
      a || (a = []);
      !0 === this.isPlaying
        ? (this.disconnect(), (this.filters = a), this.connect())
        : (this.filters = a);
      return this;
    },
    getFilter: function() {
      return this.getFilters()[0];
    },
    setFilter: function(a) {
      return this.setFilters(a ? [a] : []);
    },
    setPlaybackRate: function(a) {
      if (!1 === this.hasPlaybackControl)
        console.warn("THREE.Audio: this Audio has no playback control.");
      else
        return (
          (this.playbackRate = a),
          !0 === this.isPlaying &&
            this.source.playbackRate.setValueAtTime(
              this.playbackRate,
              this.context.currentTime
            ),
          this
        );
    },
    getPlaybackRate: function() {
      return this.playbackRate;
    },
    onEnded: function() {
      this.isPlaying = !1;
    },
    getLoop: function() {
      return !1 === this.hasPlaybackControl
        ? (console.warn("THREE.Audio: this Audio has no playback control."), !1)
        : this.loop;
    },
    setLoop: function(a) {
      if (!1 === this.hasPlaybackControl)
        console.warn("THREE.Audio: this Audio has no playback control.");
      else
        return (
          (this.loop = a),
          !0 === this.isPlaying && (this.source.loop = this.loop),
          this
        );
    },
    getVolume: function() {
      return this.gain.gain.value;
    },
    setVolume: function(a) {
      this.gain.gain.setTargetAtTime(a, this.context.currentTime, 0.01);
      return this;
    }
  });
  te.prototype = Object.assign(Object.create(lc.prototype), {
    constructor: te,
    getOutput: function() {
      return this.panner;
    },
    getRefDistance: function() {
      return this.panner.refDistance;
    },
    setRefDistance: function(a) {
      this.panner.refDistance = a;
      return this;
    },
    getRolloffFactor: function() {
      return this.panner.rolloffFactor;
    },
    setRolloffFactor: function(a) {
      this.panner.rolloffFactor = a;
      return this;
    },
    getDistanceModel: function() {
      return this.panner.distanceModel;
    },
    setDistanceModel: function(a) {
      this.panner.distanceModel = a;
      return this;
    },
    getMaxDistance: function() {
      return this.panner.maxDistance;
    },
    setMaxDistance: function(a) {
      this.panner.maxDistance = a;
      return this;
    },
    setDirectionalCone: function(a, b, c) {
      this.panner.coneInnerAngle = a;
      this.panner.coneOuterAngle = b;
      this.panner.coneOuterGain = c;
      return this;
    },
    updateMatrixWorld: (function() {
      var a = new p(),
        b = new ja(),
        c = new p(),
        d = new p();
      return function(e) {
        D.prototype.updateMatrixWorld.call(this, e);
        e = this.panner;
        this.matrixWorld.decompose(a, b, c);
        d.set(0, 0, 1).applyQuaternion(b);
        if (e.positionX) {
          var f = this.context.currentTime + this.listener.timeDelta;
          e.positionX.linearRampToValueAtTime(a.x, f);
          e.positionY.linearRampToValueAtTime(a.y, f);
          e.positionZ.linearRampToValueAtTime(a.z, f);
          e.orientationX.linearRampToValueAtTime(d.x, f);
          e.orientationY.linearRampToValueAtTime(d.y, f);
          e.orientationZ.linearRampToValueAtTime(d.z, f);
        } else e.setPosition(a.x, a.y, a.z), e.setOrientation(d.x, d.y, d.z);
      };
    })()
  });
  Object.assign(ue.prototype, {
    getFrequencyData: function() {
      this.analyser.getByteFrequencyData(this.data);
      return this.data;
    },
    getAverageFrequency: function() {
      for (var a = 0, b = this.getFrequencyData(), c = 0; c < b.length; c++)
        a += b[c];
      return a / b.length;
    }
  });
  Object.assign(ve.prototype, {
    accumulate: function(a, b) {
      var c = this.buffer,
        d = this.valueSize;
      a = a * d + d;
      var e = this.cumulativeWeight;
      if (0 === e) {
        for (e = 0; e !== d; ++e) c[a + e] = c[e];
        e = b;
      } else (e += b), this._mixBufferRegion(c, a, 0, b / e, d);
      this.cumulativeWeight = e;
    },
    apply: function(a) {
      var b = this.valueSize,
        c = this.buffer;
      a = a * b + b;
      var d = this.cumulativeWeight,
        e = this.binding;
      this.cumulativeWeight = 0;
      1 > d && this._mixBufferRegion(c, a, 3 * b, 1 - d, b);
      d = b;
      for (var f = b + b; d !== f; ++d)
        if (c[d] !== c[d + b]) {
          e.setValue(c, a);
          break;
        }
    },
    saveOriginalState: function() {
      var a = this.buffer,
        b = this.valueSize,
        c = 3 * b;
      this.binding.getValue(a, c);
      for (var d = b; d !== c; ++d) a[d] = a[c + (d % b)];
      this.cumulativeWeight = 0;
    },
    restoreOriginalState: function() {
      this.binding.setValue(this.buffer, 3 * this.valueSize);
    },
    _select: function(a, b, c, d, e) {
      if (0.5 <= d) for (d = 0; d !== e; ++d) a[b + d] = a[c + d];
    },
    _slerp: function(a, b, c, d) {
      ja.slerpFlat(a, b, a, b, a, c, d);
    },
    _lerp: function(a, b, c, d, e) {
      for (var f = 1 - d, g = 0; g !== e; ++g) {
        var h = b + g;
        a[h] = a[h] * f + a[c + g] * d;
      }
    }
  });
  Object.assign(wf.prototype, {
    getValue: function(a, b) {
      this.bind();
      var c = this._bindings[this._targetGroup.nCachedObjects_];
      void 0 !== c && c.getValue(a, b);
    },
    setValue: function(a, b) {
      for (
        var c = this._bindings,
          d = this._targetGroup.nCachedObjects_,
          e = c.length;
        d !== e;
        ++d
      )
        c[d].setValue(a, b);
    },
    bind: function() {
      for (
        var a = this._bindings,
          b = this._targetGroup.nCachedObjects_,
          c = a.length;
        b !== c;
        ++b
      )
        a[b].bind();
    },
    unbind: function() {
      for (
        var a = this._bindings,
          b = this._targetGroup.nCachedObjects_,
          c = a.length;
        b !== c;
        ++b
      )
        a[b].unbind();
    }
  });
  Object.assign(oa, {
    Composite: wf,
    create: function(a, b, c) {
      return a && a.isAnimationObjectGroup
        ? new oa.Composite(a, b, c)
        : new oa(a, b, c);
    },
    sanitizeNodeName: (function() {
      var a = /[\[\]\.:\/]/g;
      return function(b) {
        return b.replace(/\s/g, "_").replace(a, "");
      };
    })(),
    parseTrackName: (function() {
      var a = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
        b = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]");
      a = /(WCOD+)?/.source.replace("WCOD", a);
      var c = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace(
          "WC",
          "[^\\[\\]\\.:\\/]"
        ),
        d = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
        e = new RegExp("^" + b + a + c + d + "$"),
        f = ["material", "materials", "bones"];
      return function(a) {
        var b = e.exec(a);
        if (!b) throw Error("PropertyBinding: Cannot parse trackName: " + a);
        b = {
          nodeName: b[2],
          objectName: b[3],
          objectIndex: b[4],
          propertyName: b[5],
          propertyIndex: b[6]
        };
        var c = b.nodeName && b.nodeName.lastIndexOf(".");
        if (void 0 !== c && -1 !== c) {
          var d = b.nodeName.substring(c + 1);
          -1 !== f.indexOf(d) &&
            ((b.nodeName = b.nodeName.substring(0, c)), (b.objectName = d));
        }
        if (null === b.propertyName || 0 === b.propertyName.length)
          throw Error(
            "PropertyBinding: can not parse propertyName from trackName: " + a
          );
        return b;
      };
    })(),
    findNode: function(a, b) {
      if (
        !b ||
        "" === b ||
        "root" === b ||
        "." === b ||
        -1 === b ||
        b === a.name ||
        b === a.uuid
      )
        return a;
      if (a.skeleton) {
        var c = a.skeleton.getBoneByName(b);
        if (void 0 !== c) return c;
      }
      if (a.children) {
        var d = function(a) {
          for (var c = 0; c < a.length; c++) {
            var e = a[c];
            if (e.name === b || e.uuid === b || (e = d(e.children))) return e;
          }
          return null;
        };
        if ((a = d(a.children))) return a;
      }
      return null;
    }
  });
  Object.assign(oa.prototype, {
    _getValue_unavailable: function() {},
    _setValue_unavailable: function() {},
    BindingType: {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3
    },
    Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 },
    GetterByBindingType: [
      function(a, b) {
        a[b] = this.node[this.propertyName];
      },
      function(a, b) {
        for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
          a[b++] = c[d];
      },
      function(a, b) {
        a[b] = this.resolvedProperty[this.propertyIndex];
      },
      function(a, b) {
        this.resolvedProperty.toArray(a, b);
      }
    ],
    SetterByBindingTypeAndVersioning: [
      [
        function(a, b) {
          this.targetObject[this.propertyName] = a[b];
        },
        function(a, b) {
          this.targetObject[this.propertyName] = a[b];
          this.targetObject.needsUpdate = !0;
        },
        function(a, b) {
          this.targetObject[this.propertyName] = a[b];
          this.targetObject.matrixWorldNeedsUpdate = !0;
        }
      ],
      [
        function(a, b) {
          for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
            c[d] = a[b++];
        },
        function(a, b) {
          for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
            c[d] = a[b++];
          this.targetObject.needsUpdate = !0;
        },
        function(a, b) {
          for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
            c[d] = a[b++];
          this.targetObject.matrixWorldNeedsUpdate = !0;
        }
      ],
      [
        function(a, b) {
          this.resolvedProperty[this.propertyIndex] = a[b];
        },
        function(a, b) {
          this.resolvedProperty[this.propertyIndex] = a[b];
          this.targetObject.needsUpdate = !0;
        },
        function(a, b) {
          this.resolvedProperty[this.propertyIndex] = a[b];
          this.targetObject.matrixWorldNeedsUpdate = !0;
        }
      ],
      [
        function(a, b) {
          this.resolvedProperty.fromArray(a, b);
        },
        function(a, b) {
          this.resolvedProperty.fromArray(a, b);
          this.targetObject.needsUpdate = !0;
        },
        function(a, b) {
          this.resolvedProperty.fromArray(a, b);
          this.targetObject.matrixWorldNeedsUpdate = !0;
        }
      ]
    ],
    getValue: function(a, b) {
      this.bind();
      this.getValue(a, b);
    },
    setValue: function(a, b) {
      this.bind();
      this.setValue(a, b);
    },
    bind: function() {
      var a = this.node,
        b = this.parsedPath,
        c = b.objectName,
        d = b.propertyName,
        e = b.propertyIndex;
      a ||
        (this.node = a =
          oa.findNode(this.rootNode, b.nodeName) || this.rootNode);
      this.getValue = this._getValue_unavailable;
      this.setValue = this._setValue_unavailable;
      if (a) {
        if (c) {
          var f = b.objectIndex;
          switch (c) {
            case "materials":
              if (!a.material) {
                console.error(
                  "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                  this
                );
                return;
              }
              if (!a.material.materials) {
                console.error(
                  "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
                  this
                );
                return;
              }
              a = a.material.materials;
              break;
            case "bones":
              if (!a.skeleton) {
                console.error(
                  "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
                  this
                );
                return;
              }
              a = a.skeleton.bones;
              for (c = 0; c < a.length; c++)
                if (a[c].name === f) {
                  f = c;
                  break;
                }
              break;
            default:
              if (void 0 === a[c]) {
                console.error(
                  "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
                  this
                );
                return;
              }
              a = a[c];
          }
          if (void 0 !== f) {
            if (void 0 === a[f]) {
              console.error(
                "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
                this,
                a
              );
              return;
            }
            a = a[f];
          }
        }
        f = a[d];
        if (void 0 === f)
          console.error(
            "THREE.PropertyBinding: Trying to update property for track: " +
              b.nodeName +
              "." +
              d +
              " but it wasn't found.",
            a
          );
        else {
          b = this.Versioning.None;
          this.targetObject = a;
          void 0 !== a.needsUpdate
            ? (b = this.Versioning.NeedsUpdate)
            : void 0 !== a.matrixWorldNeedsUpdate &&
              (b = this.Versioning.MatrixWorldNeedsUpdate);
          c = this.BindingType.Direct;
          if (void 0 !== e) {
            if ("morphTargetInfluences" === d) {
              if (!a.geometry) {
                console.error(
                  "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
                  this
                );
                return;
              }
              if (a.geometry.isBufferGeometry) {
                if (!a.geometry.morphAttributes) {
                  console.error(
                    "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
                    this
                  );
                  return;
                }
                for (
                  c = 0;
                  c < this.node.geometry.morphAttributes.position.length;
                  c++
                )
                  if (a.geometry.morphAttributes.position[c].name === e) {
                    e = c;
                    break;
                  }
              } else {
                if (!a.geometry.morphTargets) {
                  console.error(
                    "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",
                    this
                  );
                  return;
                }
                for (c = 0; c < this.node.geometry.morphTargets.length; c++)
                  if (a.geometry.morphTargets[c].name === e) {
                    e = c;
                    break;
                  }
              }
            }
            c = this.BindingType.ArrayElement;
            this.resolvedProperty = f;
            this.propertyIndex = e;
          } else
            void 0 !== f.fromArray && void 0 !== f.toArray
              ? ((c = this.BindingType.HasFromToArray),
                (this.resolvedProperty = f))
              : Array.isArray(f)
              ? ((c = this.BindingType.EntireArray),
                (this.resolvedProperty = f))
              : (this.propertyName = d);
          this.getValue = this.GetterByBindingType[c];
          this.setValue = this.SetterByBindingTypeAndVersioning[c][b];
        }
      } else
        console.error(
          "THREE.PropertyBinding: Trying to update node for track: " +
            this.path +
            " but it wasn't found."
        );
    },
    unbind: function() {
      this.node = null;
      this.getValue = this._getValue_unbound;
      this.setValue = this._setValue_unbound;
    }
  });
  Object.assign(oa.prototype, {
    _getValue_unbound: oa.prototype.getValue,
    _setValue_unbound: oa.prototype.setValue
  });
  Object.assign(xf.prototype, {
    isAnimationObjectGroup: !0,
    add: function() {
      for (
        var a = this._objects,
          b = a.length,
          c = this.nCachedObjects_,
          d = this._indicesByUUID,
          e = this._paths,
          f = this._parsedPaths,
          g = this._bindings,
          h = g.length,
          k = void 0,
          l = 0,
          p = arguments.length;
        l !== p;
        ++l
      ) {
        var n = arguments[l],
          r = n.uuid,
          x = d[r];
        if (void 0 === x) {
          x = b++;
          d[r] = x;
          a.push(n);
          r = 0;
          for (var t = h; r !== t; ++r) g[r].push(new oa(n, e[r], f[r]));
        } else if (x < c) {
          k = a[x];
          var u = --c;
          t = a[u];
          d[t.uuid] = x;
          a[x] = t;
          d[r] = u;
          a[u] = n;
          r = 0;
          for (t = h; r !== t; ++r) {
            var w = g[r],
              z = w[x];
            w[x] = w[u];
            void 0 === z && (z = new oa(n, e[r], f[r]));
            w[u] = z;
          }
        } else
          a[x] !== k &&
            console.error(
              "THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes."
            );
      }
      this.nCachedObjects_ = c;
    },
    remove: function() {
      for (
        var a = this._objects,
          b = this.nCachedObjects_,
          c = this._indicesByUUID,
          d = this._bindings,
          e = d.length,
          f = 0,
          g = arguments.length;
        f !== g;
        ++f
      ) {
        var h = arguments[f],
          k = h.uuid,
          l = c[k];
        if (void 0 !== l && l >= b) {
          var p = b++,
            n = a[p];
          c[n.uuid] = l;
          a[l] = n;
          c[k] = p;
          a[p] = h;
          h = 0;
          for (k = e; h !== k; ++h) {
            n = d[h];
            var r = n[l];
            n[l] = n[p];
            n[p] = r;
          }
        }
      }
      this.nCachedObjects_ = b;
    },
    uncache: function() {
      for (
        var a = this._objects,
          b = a.length,
          c = this.nCachedObjects_,
          d = this._indicesByUUID,
          e = this._bindings,
          f = e.length,
          g = 0,
          h = arguments.length;
        g !== h;
        ++g
      ) {
        var k = arguments[g].uuid,
          l = d[k];
        if (void 0 !== l)
          if ((delete d[k], l < c)) {
            k = --c;
            var p = a[k],
              n = --b,
              r = a[n];
            d[p.uuid] = l;
            a[l] = p;
            d[r.uuid] = k;
            a[k] = r;
            a.pop();
            p = 0;
            for (r = f; p !== r; ++p) {
              var x = e[p],
                t = x[n];
              x[l] = x[k];
              x[k] = t;
              x.pop();
            }
          } else
            for (
              n = --b, r = a[n], d[r.uuid] = l, a[l] = r, a.pop(), p = 0, r = f;
              p !== r;
              ++p
            )
              (x = e[p]), (x[l] = x[n]), x.pop();
      }
      this.nCachedObjects_ = c;
    },
    subscribe_: function(a, b) {
      var c = this._bindingsIndicesByPath,
        d = c[a],
        e = this._bindings;
      if (void 0 !== d) return e[d];
      var f = this._paths,
        g = this._parsedPaths,
        h = this._objects,
        k = this.nCachedObjects_,
        l = Array(h.length);
      d = e.length;
      c[a] = d;
      f.push(a);
      g.push(b);
      e.push(l);
      c = k;
      for (d = h.length; c !== d; ++c) l[c] = new oa(h[c], a, b);
      return l;
    },
    unsubscribe_: function(a) {
      var b = this._bindingsIndicesByPath,
        c = b[a];
      if (void 0 !== c) {
        var d = this._paths,
          e = this._parsedPaths,
          f = this._bindings,
          g = f.length - 1,
          h = f[g];
        b[a[g]] = c;
        f[c] = h;
        f.pop();
        e[c] = e[g];
        e.pop();
        d[c] = d[g];
        d.pop();
      }
    }
  });
  Object.assign(yf.prototype, {
    play: function() {
      this._mixer._activateAction(this);
      return this;
    },
    stop: function() {
      this._mixer._deactivateAction(this);
      return this.reset();
    },
    reset: function() {
      this.paused = !1;
      this.enabled = !0;
      this.time = 0;
      this._loopCount = -1;
      this._startTime = null;
      return this.stopFading().stopWarping();
    },
    isRunning: function() {
      return (
        this.enabled &&
        !this.paused &&
        0 !== this.timeScale &&
        null === this._startTime &&
        this._mixer._isActiveAction(this)
      );
    },
    isScheduled: function() {
      return this._mixer._isActiveAction(this);
    },
    startAt: function(a) {
      this._startTime = a;
      return this;
    },
    setLoop: function(a, b) {
      this.loop = a;
      this.repetitions = b;
      return this;
    },
    setEffectiveWeight: function(a) {
      this.weight = a;
      this._effectiveWeight = this.enabled ? a : 0;
      return this.stopFading();
    },
    getEffectiveWeight: function() {
      return this._effectiveWeight;
    },
    fadeIn: function(a) {
      return this._scheduleFading(a, 0, 1);
    },
    fadeOut: function(a) {
      return this._scheduleFading(a, 1, 0);
    },
    crossFadeFrom: function(a, b, c) {
      a.fadeOut(b);
      this.fadeIn(b);
      if (c) {
        c = this._clip.duration;
        var d = a._clip.duration,
          e = c / d;
        a.warp(1, d / c, b);
        this.warp(e, 1, b);
      }
      return this;
    },
    crossFadeTo: function(a, b, c) {
      return a.crossFadeFrom(this, b, c);
    },
    stopFading: function() {
      var a = this._weightInterpolant;
      null !== a &&
        ((this._weightInterpolant = null),
        this._mixer._takeBackControlInterpolant(a));
      return this;
    },
    setEffectiveTimeScale: function(a) {
      this.timeScale = a;
      this._effectiveTimeScale = this.paused ? 0 : a;
      return this.stopWarping();
    },
    getEffectiveTimeScale: function() {
      return this._effectiveTimeScale;
    },
    setDuration: function(a) {
      this.timeScale = this._clip.duration / a;
      return this.stopWarping();
    },
    syncWith: function(a) {
      this.time = a.time;
      this.timeScale = a.timeScale;
      return this.stopWarping();
    },
    halt: function(a) {
      return this.warp(this._effectiveTimeScale, 0, a);
    },
    warp: function(a, b, c) {
      var d = this._mixer,
        e = d.time,
        f = this._timeScaleInterpolant,
        g = this.timeScale;
      null === f &&
        (this._timeScaleInterpolant = f = d._lendControlInterpolant());
      d = f.parameterPositions;
      f = f.sampleValues;
      d[0] = e;
      d[1] = e + c;
      f[0] = a / g;
      f[1] = b / g;
      return this;
    },
    stopWarping: function() {
      var a = this._timeScaleInterpolant;
      null !== a &&
        ((this._timeScaleInterpolant = null),
        this._mixer._takeBackControlInterpolant(a));
      return this;
    },
    getMixer: function() {
      return this._mixer;
    },
    getClip: function() {
      return this._clip;
    },
    getRoot: function() {
      return this._localRoot || this._mixer._root;
    },
    _update: function(a, b, c, d) {
      if (this.enabled) {
        var e = this._startTime;
        if (null !== e) {
          b = (a - e) * c;
          if (0 > b || 0 === c) return;
          this._startTime = null;
          b *= c;
        }
        b *= this._updateTimeScale(a);
        c = this._updateTime(b);
        a = this._updateWeight(a);
        if (0 < a) {
          b = this._interpolants;
          e = this._propertyBindings;
          for (var f = 0, g = b.length; f !== g; ++f)
            b[f].evaluate(c), e[f].accumulate(d, a);
        }
      } else this._updateWeight(a);
    },
    _updateWeight: function(a) {
      var b = 0;
      if (this.enabled) {
        b = this.weight;
        var c = this._weightInterpolant;
        if (null !== c) {
          var d = c.evaluate(a)[0];
          b *= d;
          a > c.parameterPositions[1] &&
            (this.stopFading(), 0 === d && (this.enabled = !1));
        }
      }
      return (this._effectiveWeight = b);
    },
    _updateTimeScale: function(a) {
      var b = 0;
      if (!this.paused) {
        b = this.timeScale;
        var c = this._timeScaleInterpolant;
        if (null !== c) {
          var d = c.evaluate(a)[0];
          b *= d;
          a > c.parameterPositions[1] &&
            (this.stopWarping(),
            0 === b ? (this.paused = !0) : (this.timeScale = b));
        }
      }
      return (this._effectiveTimeScale = b);
    },
    _updateTime: function(a) {
      var b = this.time + a,
        c = this._clip.duration,
        d = this.loop,
        e = this._loopCount,
        f = 2202 === d;
      if (0 === a) return -1 === e ? b : f && 1 === (e & 1) ? c - b : b;
      if (2200 === d)
        a: {
          if (
            (-1 === e && ((this._loopCount = 0), this._setEndings(!0, !0, !1)),
            b >= c)
          )
            b = c;
          else if (0 > b) b = 0;
          else break a;
          this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1);
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: 0 > a ? -1 : 1
          });
        }
      else {
        -1 === e &&
          (0 <= a
            ? ((e = 0), this._setEndings(!0, 0 === this.repetitions, f))
            : this._setEndings(0 === this.repetitions, !0, f));
        if (b >= c || 0 > b) {
          d = Math.floor(b / c);
          b -= c * d;
          e += Math.abs(d);
          var g = this.repetitions - e;
          0 >= g
            ? (this.clampWhenFinished
                ? (this.paused = !0)
                : (this.enabled = !1),
              (b = 0 < a ? c : 0),
              this._mixer.dispatchEvent({
                type: "finished",
                action: this,
                direction: 0 < a ? 1 : -1
              }))
            : (1 === g
                ? ((a = 0 > a), this._setEndings(a, !a, f))
                : this._setEndings(!1, !1, f),
              (this._loopCount = e),
              this._mixer.dispatchEvent({
                type: "loop",
                action: this,
                loopDelta: d
              }));
        }
        if (f && 1 === (e & 1)) return (this.time = b), c - b;
      }
      return (this.time = b);
    },
    _setEndings: function(a, b, c) {
      var d = this._interpolantSettings;
      c
        ? ((d.endingStart = 2401), (d.endingEnd = 2401))
        : ((d.endingStart = a ? (this.zeroSlopeAtStart ? 2401 : 2400) : 2402),
          (d.endingEnd = b ? (this.zeroSlopeAtEnd ? 2401 : 2400) : 2402));
    },
    _scheduleFading: function(a, b, c) {
      var d = this._mixer,
        e = d.time,
        f = this._weightInterpolant;
      null === f && (this._weightInterpolant = f = d._lendControlInterpolant());
      d = f.parameterPositions;
      f = f.sampleValues;
      d[0] = e;
      f[0] = b;
      d[1] = e + a;
      f[1] = c;
      return this;
    }
  });
  we.prototype = Object.assign(Object.create(ia.prototype), {
    constructor: we,
    _bindAction: function(a, b) {
      var c = a._localRoot || this._root,
        d = a._clip.tracks,
        e = d.length,
        f = a._propertyBindings;
      a = a._interpolants;
      var g = c.uuid,
        h = this._bindingsByRootAndName,
        k = h[g];
      void 0 === k && ((k = {}), (h[g] = k));
      for (h = 0; h !== e; ++h) {
        var l = d[h],
          p = l.name,
          n = k[p];
        if (void 0 === n) {
          n = f[h];
          if (void 0 !== n) {
            null === n._cacheIndex &&
              (++n.referenceCount, this._addInactiveBinding(n, g, p));
            continue;
          }
          n = new ve(
            oa.create(c, p, b && b._propertyBindings[h].binding.parsedPath),
            l.ValueTypeName,
            l.getValueSize()
          );
          ++n.referenceCount;
          this._addInactiveBinding(n, g, p);
        }
        f[h] = n;
        a[h].resultBuffer = n.buffer;
      }
    },
    _activateAction: function(a) {
      if (!this._isActiveAction(a)) {
        if (null === a._cacheIndex) {
          var b = (a._localRoot || this._root).uuid,
            c = a._clip.uuid,
            d = this._actionsByClip[c];
          this._bindAction(a, d && d.knownActions[0]);
          this._addInactiveAction(a, c, b);
        }
        b = a._propertyBindings;
        c = 0;
        for (d = b.length; c !== d; ++c) {
          var e = b[c];
          0 === e.useCount++ && (this._lendBinding(e), e.saveOriginalState());
        }
        this._lendAction(a);
      }
    },
    _deactivateAction: function(a) {
      if (this._isActiveAction(a)) {
        for (var b = a._propertyBindings, c = 0, d = b.length; c !== d; ++c) {
          var e = b[c];
          0 === --e.useCount &&
            (e.restoreOriginalState(), this._takeBackBinding(e));
        }
        this._takeBackAction(a);
      }
    },
    _initMemoryManager: function() {
      this._actions = [];
      this._nActiveActions = 0;
      this._actionsByClip = {};
      this._bindings = [];
      this._nActiveBindings = 0;
      this._bindingsByRootAndName = {};
      this._controlInterpolants = [];
      this._nActiveControlInterpolants = 0;
      var a = this;
      this.stats = {
        actions: {
          get total() {
            return a._actions.length;
          },
          get inUse() {
            return a._nActiveActions;
          }
        },
        bindings: {
          get total() {
            return a._bindings.length;
          },
          get inUse() {
            return a._nActiveBindings;
          }
        },
        controlInterpolants: {
          get total() {
            return a._controlInterpolants.length;
          },
          get inUse() {
            return a._nActiveControlInterpolants;
          }
        }
      };
    },
    _isActiveAction: function(a) {
      a = a._cacheIndex;
      return null !== a && a < this._nActiveActions;
    },
    _addInactiveAction: function(a, b, c) {
      var d = this._actions,
        e = this._actionsByClip,
        f = e[b];
      void 0 === f
        ? ((f = { knownActions: [a], actionByRoot: {} }),
          (a._byClipCacheIndex = 0),
          (e[b] = f))
        : ((b = f.knownActions), (a._byClipCacheIndex = b.length), b.push(a));
      a._cacheIndex = d.length;
      d.push(a);
      f.actionByRoot[c] = a;
    },
    _removeInactiveAction: function(a) {
      var b = this._actions,
        c = b[b.length - 1],
        d = a._cacheIndex;
      c._cacheIndex = d;
      b[d] = c;
      b.pop();
      a._cacheIndex = null;
      b = a._clip.uuid;
      c = this._actionsByClip;
      d = c[b];
      var e = d.knownActions,
        f = e[e.length - 1],
        g = a._byClipCacheIndex;
      f._byClipCacheIndex = g;
      e[g] = f;
      e.pop();
      a._byClipCacheIndex = null;
      delete d.actionByRoot[(a._localRoot || this._root).uuid];
      0 === e.length && delete c[b];
      this._removeInactiveBindingsForAction(a);
    },
    _removeInactiveBindingsForAction: function(a) {
      a = a._propertyBindings;
      for (var b = 0, c = a.length; b !== c; ++b) {
        var d = a[b];
        0 === --d.referenceCount && this._removeInactiveBinding(d);
      }
    },
    _lendAction: function(a) {
      var b = this._actions,
        c = a._cacheIndex,
        d = this._nActiveActions++,
        e = b[d];
      a._cacheIndex = d;
      b[d] = a;
      e._cacheIndex = c;
      b[c] = e;
    },
    _takeBackAction: function(a) {
      var b = this._actions,
        c = a._cacheIndex,
        d = --this._nActiveActions,
        e = b[d];
      a._cacheIndex = d;
      b[d] = a;
      e._cacheIndex = c;
      b[c] = e;
    },
    _addInactiveBinding: function(a, b, c) {
      var d = this._bindingsByRootAndName,
        e = d[b],
        f = this._bindings;
      void 0 === e && ((e = {}), (d[b] = e));
      e[c] = a;
      a._cacheIndex = f.length;
      f.push(a);
    },
    _removeInactiveBinding: function(a) {
      var b = this._bindings,
        c = a.binding,
        d = c.rootNode.uuid;
      c = c.path;
      var e = this._bindingsByRootAndName,
        f = e[d],
        g = b[b.length - 1];
      a = a._cacheIndex;
      g._cacheIndex = a;
      b[a] = g;
      b.pop();
      delete f[c];
      a: {
        for (var h in f) break a;
        delete e[d];
      }
    },
    _lendBinding: function(a) {
      var b = this._bindings,
        c = a._cacheIndex,
        d = this._nActiveBindings++,
        e = b[d];
      a._cacheIndex = d;
      b[d] = a;
      e._cacheIndex = c;
      b[c] = e;
    },
    _takeBackBinding: function(a) {
      var b = this._bindings,
        c = a._cacheIndex,
        d = --this._nActiveBindings,
        e = b[d];
      a._cacheIndex = d;
      b[d] = a;
      e._cacheIndex = c;
      b[c] = e;
    },
    _lendControlInterpolant: function() {
      var a = this._controlInterpolants,
        b = this._nActiveControlInterpolants++,
        c = a[b];
      void 0 === c &&
        ((c = new cd(
          new Float32Array(2),
          new Float32Array(2),
          1,
          this._controlInterpolantsResultBuffer
        )),
        (c.__cacheIndex = b),
        (a[b] = c));
      return c;
    },
    _takeBackControlInterpolant: function(a) {
      var b = this._controlInterpolants,
        c = a.__cacheIndex,
        d = --this._nActiveControlInterpolants,
        e = b[d];
      a.__cacheIndex = d;
      b[d] = a;
      e.__cacheIndex = c;
      b[c] = e;
    },
    _controlInterpolantsResultBuffer: new Float32Array(1),
    clipAction: function(a, b) {
      var c = b || this._root,
        d = c.uuid;
      c = "string" === typeof a ? za.findByName(c, a) : a;
      a = null !== c ? c.uuid : a;
      var e = this._actionsByClip[a],
        f = null;
      if (void 0 !== e) {
        f = e.actionByRoot[d];
        if (void 0 !== f) return f;
        f = e.knownActions[0];
        null === c && (c = f._clip);
      }
      if (null === c) return null;
      b = new yf(this, c, b);
      this._bindAction(b, f);
      this._addInactiveAction(b, a, d);
      return b;
    },
    existingAction: function(a, b) {
      var c = b || this._root;
      b = c.uuid;
      c = "string" === typeof a ? za.findByName(c, a) : a;
      a = this._actionsByClip[c ? c.uuid : a];
      return void 0 !== a ? a.actionByRoot[b] || null : null;
    },
    stopAllAction: function() {
      for (
        var a = this._actions,
          b = this._nActiveActions,
          c = this._bindings,
          d = this._nActiveBindings,
          e = (this._nActiveBindings = this._nActiveActions = 0);
        e !== b;
        ++e
      )
        a[e].reset();
      for (e = 0; e !== d; ++e) c[e].useCount = 0;
      return this;
    },
    update: function(a) {
      a *= this.timeScale;
      for (
        var b = this._actions,
          c = this._nActiveActions,
          d = (this.time += a),
          e = Math.sign(a),
          f = (this._accuIndex ^= 1),
          g = 0;
        g !== c;
        ++g
      )
        b[g]._update(d, a, e, f);
      a = this._bindings;
      b = this._nActiveBindings;
      for (g = 0; g !== b; ++g) a[g].apply(f);
      return this;
    },
    getRoot: function() {
      return this._root;
    },
    uncacheClip: function(a) {
      var b = this._actions;
      a = a.uuid;
      var c = this._actionsByClip,
        d = c[a];
      if (void 0 !== d) {
        d = d.knownActions;
        for (var e = 0, f = d.length; e !== f; ++e) {
          var g = d[e];
          this._deactivateAction(g);
          var h = g._cacheIndex,
            k = b[b.length - 1];
          g._cacheIndex = null;
          g._byClipCacheIndex = null;
          k._cacheIndex = h;
          b[h] = k;
          b.pop();
          this._removeInactiveBindingsForAction(g);
        }
        delete c[a];
      }
    },
    uncacheRoot: function(a) {
      a = a.uuid;
      var b = this._actionsByClip;
      for (d in b) {
        var c = b[d].actionByRoot[a];
        void 0 !== c &&
          (this._deactivateAction(c), this._removeInactiveAction(c));
      }
      var d = this._bindingsByRootAndName[a];
      if (void 0 !== d)
        for (var e in d)
          (a = d[e]), a.restoreOriginalState(), this._removeInactiveBinding(a);
    },
    uncacheAction: function(a, b) {
      a = this.existingAction(a, b);
      null !== a && (this._deactivateAction(a), this._removeInactiveAction(a));
    }
  });
  Rd.prototype.clone = function() {
    return new Rd(
      void 0 === this.value.clone ? this.value : this.value.clone()
    );
  };
  xe.prototype = Object.assign(Object.create(E.prototype), {
    constructor: xe,
    isInstancedBufferGeometry: !0,
    copy: function(a) {
      E.prototype.copy.call(this, a);
      this.maxInstancedCount = a.maxInstancedCount;
      return this;
    },
    clone: function() {
      return new this.constructor().copy(this);
    }
  });
  ye.prototype = Object.assign(Object.create(sb.prototype), {
    constructor: ye,
    isInstancedInterleavedBuffer: !0,
    copy: function(a) {
      sb.prototype.copy.call(this, a);
      this.meshPerAttribute = a.meshPerAttribute;
      return this;
    }
  });
  ze.prototype = Object.assign(Object.create(F.prototype), {
    constructor: ze,
    isInstancedBufferAttribute: !0,
    copy: function(a) {
      F.prototype.copy.call(this, a);
      this.meshPerAttribute = a.meshPerAttribute;
      return this;
    }
  });
  Object.assign(zf.prototype, {
    linePrecision: 1,
    set: function(a, b) {
      this.ray.set(a, b);
    },
    setFromCamera: function(a, b) {
      b && b.isPerspectiveCamera
        ? (this.ray.origin.setFromMatrixPosition(b.matrixWorld),
          this.ray.direction
            .set(a.x, a.y, 0.5)
            .unproject(b)
            .sub(this.ray.origin)
            .normalize())
        : b && b.isOrthographicCamera
        ? (this.ray.origin
            .set(a.x, a.y, (b.near + b.far) / (b.near - b.far))
            .unproject(b),
          this.ray.direction.set(0, 0, -1).transformDirection(b.matrixWorld))
        : console.error("THREE.Raycaster: Unsupported camera type.");
    },
    intersectObject: function(a, b, c) {
      c = c || [];
      Ae(a, this, c, b);
      c.sort(Af);
      return c;
    },
    intersectObjects: function(a, b, c) {
      c = c || [];
      if (!1 === Array.isArray(a))
        return (
          console.warn(
            "THREE.Raycaster.intersectObjects: objects is not an Array."
          ),
          c
        );
      for (var d = 0, e = a.length; d < e; d++) Ae(a[d], this, c, b);
      c.sort(Af);
      return c;
    }
  });
  Object.assign(Bf.prototype, {
    set: function(a, b, c) {
      this.radius = a;
      this.phi = b;
      this.theta = c;
      return this;
    },
    clone: function() {
      return new this.constructor().copy(this);
    },
    copy: function(a) {
      this.radius = a.radius;
      this.phi = a.phi;
      this.theta = a.theta;
      return this;
    },
    makeSafe: function() {
      this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi));
      return this;
    },
    setFromVector3: function(a) {
      return this.setFromCartesianCoords(a.x, a.y, a.z);
    },
    setFromCartesianCoords: function(a, b, c) {
      this.radius = Math.sqrt(a * a + b * b + c * c);
      0 === this.radius
        ? (this.phi = this.theta = 0)
        : ((this.theta = Math.atan2(a, c)),
          (this.phi = Math.acos(R.clamp(b / this.radius, -1, 1))));
      return this;
    }
  });
  Object.assign(Cf.prototype, {
    set: function(a, b, c) {
      this.radius = a;
      this.theta = b;
      this.y = c;
      return this;
    },
    clone: function() {
      return new this.constructor().copy(this);
    },
    copy: function(a) {
      this.radius = a.radius;
      this.theta = a.theta;
      this.y = a.y;
      return this;
    },
    setFromVector3: function(a) {
      return this.setFromCartesianCoords(a.x, a.y, a.z);
    },
    setFromCartesianCoords: function(a, b, c) {
      this.radius = Math.sqrt(a * a + c * c);
      this.theta = Math.atan2(a, c);
      this.y = b;
      return this;
    }
  });
  Object.assign(Be.prototype, {
    set: function(a, b) {
      this.min.copy(a);
      this.max.copy(b);
      return this;
    },
    setFromPoints: function(a) {
      this.makeEmpty();
      for (var b = 0, c = a.length; b < c; b++) this.expandByPoint(a[b]);
      return this;
    },
    setFromCenterAndSize: (function() {
      var a = new z();
      return function(b, c) {
        c = a.copy(c).multiplyScalar(0.5);
        this.min.copy(b).sub(c);
        this.max.copy(b).add(c);
        return this;
      };
    })(),
    clone: function() {
      return new this.constructor().copy(this);
    },
    copy: function(a) {
      this.min.copy(a.min);
      this.max.copy(a.max);
      return this;
    },
    makeEmpty: function() {
      this.min.x = this.min.y = Infinity;
      this.max.x = this.max.y = -Infinity;
      return this;
    },
    isEmpty: function() {
      return this.max.x < this.min.x || this.max.y < this.min.y;
    },
    getCenter: function(a) {
      void 0 === a &&
        (console.warn("THREE.Box2: .getCenter() target is now required"),
        (a = new z()));
      return this.isEmpty()
        ? a.set(0, 0)
        : a.addVectors(this.min, this.max).multiplyScalar(0.5);
    },
    getSize: function(a) {
      void 0 === a &&
        (console.warn("THREE.Box2: .getSize() target is now required"),
        (a = new z()));
      return this.isEmpty() ? a.set(0, 0) : a.subVectors(this.max, this.min);
    },
    expandByPoint: function(a) {
      this.min.min(a);
      this.max.max(a);
      return this;
    },
    expandByVector: function(a) {
      this.min.sub(a);
      this.max.add(a);
      return this;
    },
    expandByScalar: function(a) {
      this.min.addScalar(-a);
      this.max.addScalar(a);
      return this;
    },
    containsPoint: function(a) {
      return a.x < this.min.x ||
        a.x > this.max.x ||
        a.y < this.min.y ||
        a.y > this.max.y
        ? !1
        : !0;
    },
    containsBox: function(a) {
      return (
        this.min.x <= a.min.x &&
        a.max.x <= this.max.x &&
        this.min.y <= a.min.y &&
        a.max.y <= this.max.y
      );
    },
    getParameter: function(a, b) {
      void 0 === b &&
        (console.warn("THREE.Box2: .getParameter() target is now required"),
        (b = new z()));
      return b.set(
        (a.x - this.min.x) / (this.max.x - this.min.x),
        (a.y - this.min.y) / (this.max.y - this.min.y)
      );
    },
    intersectsBox: function(a) {
      return a.max.x < this.min.x ||
        a.min.x > this.max.x ||
        a.max.y < this.min.y ||
        a.min.y > this.max.y
        ? !1
        : !0;
    },
    clampPoint: function(a, b) {
      void 0 === b &&
        (console.warn("THREE.Box2: .clampPoint() target is now required"),
        (b = new z()));
      return b.copy(a).clamp(this.min, this.max);
    },
    distanceToPoint: (function() {
      var a = new z();
      return function(b) {
        return a
          .copy(b)
          .clamp(this.min, this.max)
          .sub(b)
          .length();
      };
    })(),
    intersect: function(a) {
      this.min.max(a.min);
      this.max.min(a.max);
      return this;
    },
    union: function(a) {
      this.min.min(a.min);
      this.max.max(a.max);
      return this;
    },
    translate: function(a) {
      this.min.add(a);
      this.max.add(a);
      return this;
    },
    equals: function(a) {
      return a.min.equals(this.min) && a.max.equals(this.max);
    }
  });
  Object.assign(Ce.prototype, {
    set: function(a, b) {
      this.start.copy(a);
      this.end.copy(b);
      return this;
    },
    clone: function() {
      return new this.constructor().copy(this);
    },
    copy: function(a) {
      this.start.copy(a.start);
      this.end.copy(a.end);
      return this;
    },
    getCenter: function(a) {
      void 0 === a &&
        (console.warn("THREE.Line3: .getCenter() target is now required"),
        (a = new p()));
      return a.addVectors(this.start, this.end).multiplyScalar(0.5);
    },
    delta: function(a) {
      void 0 === a &&
        (console.warn("THREE.Line3: .delta() target is now required"),
        (a = new p()));
      return a.subVectors(this.end, this.start);
    },
    distanceSq: function() {
      return this.start.distanceToSquared(this.end);
    },
    distance: function() {
      return this.start.distanceTo(this.end);
    },
    at: function(a, b) {
      void 0 === b &&
        (console.warn("THREE.Line3: .at() target is now required"),
        (b = new p()));
      return this.delta(b)
        .multiplyScalar(a)
        .add(this.start);
    },
    closestPointToPointParameter: (function() {
      var a = new p(),
        b = new p();
      return function(c, d) {
        a.subVectors(c, this.start);
        b.subVectors(this.end, this.start);
        c = b.dot(b);
        c = b.dot(a) / c;
        d && (c = R.clamp(c, 0, 1));
        return c;
      };
    })(),
    closestPointToPoint: function(a, b, c) {
      a = this.closestPointToPointParameter(a, b);
      void 0 === c &&
        (console.warn(
          "THREE.Line3: .closestPointToPoint() target is now required"
        ),
        (c = new p()));
      return this.delta(c)
        .multiplyScalar(a)
        .add(this.start);
    },
    applyMatrix4: function(a) {
      this.start.applyMatrix4(a);
      this.end.applyMatrix4(a);
      return this;
    },
    equals: function(a) {
      return a.start.equals(this.start) && a.end.equals(this.end);
    }
  });
  jd.prototype = Object.create(D.prototype);
  jd.prototype.constructor = jd;
  jd.prototype.isImmediateRenderObject = !0;
  kd.prototype = Object.create(S.prototype);
  kd.prototype.constructor = kd;
  kd.prototype.update = (function() {
    var a = new p(),
      b = new p(),
      c = new da();
    return function() {
      var d = ["a", "b", "c"];
      this.object.updateMatrixWorld(!0);
      c.getNormalMatrix(this.object.matrixWorld);
      var e = this.object.matrixWorld,
        f = this.geometry.attributes.position,
        g = this.object.geometry;
      if (g && g.isGeometry)
        for (
          var h = g.vertices, k = g.faces, l = (g = 0), p = k.length;
          l < p;
          l++
        )
          for (var n = k[l], r = 0, x = n.vertexNormals.length; r < x; r++) {
            var t = n.vertexNormals[r];
            a.copy(h[n[d[r]]]).applyMatrix4(e);
            b.copy(t)
              .applyMatrix3(c)
              .normalize()
              .multiplyScalar(this.size)
              .add(a);
            f.setXYZ(g, a.x, a.y, a.z);
            g += 1;
            f.setXYZ(g, b.x, b.y, b.z);
            g += 1;
          }
      else if (g && g.isBufferGeometry)
        for (
          d = g.attributes.position,
            h = g.attributes.normal,
            r = g = 0,
            x = d.count;
          r < x;
          r++
        )
          a.set(d.getX(r), d.getY(r), d.getZ(r)).applyMatrix4(e),
            b.set(h.getX(r), h.getY(r), h.getZ(r)),
            b
              .applyMatrix3(c)
              .normalize()
              .multiplyScalar(this.size)
              .add(a),
            f.setXYZ(g, a.x, a.y, a.z),
            (g += 1),
            f.setXYZ(g, b.x, b.y, b.z),
            (g += 1);
      f.needsUpdate = !0;
    };
  })();
  mc.prototype = Object.create(D.prototype);
  mc.prototype.constructor = mc;
  mc.prototype.dispose = function() {
    this.cone.geometry.dispose();
    this.cone.material.dispose();
  };
  mc.prototype.update = (function() {
    var a = new p(),
      b = new p();
    return function() {
      this.light.updateMatrixWorld();
      var c = this.light.distance ? this.light.distance : 1e3,
        d = c * Math.tan(this.light.angle);
      this.cone.scale.set(d, d, c);
      a.setFromMatrixPosition(this.light.matrixWorld);
      b.setFromMatrixPosition(this.light.target.matrixWorld);
      this.cone.lookAt(b.sub(a));
      void 0 !== this.color
        ? this.cone.material.color.set(this.color)
        : this.cone.material.color.copy(this.light.color);
    };
  })();
  nc.prototype = Object.create(S.prototype);
  nc.prototype.constructor = nc;
  nc.prototype.updateMatrixWorld = (function() {
    var a = new p(),
      b = new P(),
      c = new P();
    return function(d) {
      var e = this.bones,
        f = this.geometry,
        g = f.getAttribute("position");
      c.getInverse(this.root.matrixWorld);
      for (var h = 0, k = 0; h < e.length; h++) {
        var l = e[h];
        l.parent &&
          l.parent.isBone &&
          (b.multiplyMatrices(c, l.matrixWorld),
          a.setFromMatrixPosition(b),
          g.setXYZ(k, a.x, a.y, a.z),
          b.multiplyMatrices(c, l.parent.matrixWorld),
          a.setFromMatrixPosition(b),
          g.setXYZ(k + 1, a.x, a.y, a.z),
          (k += 2));
      }
      f.getAttribute("position").needsUpdate = !0;
      D.prototype.updateMatrixWorld.call(this, d);
    };
  })();
  oc.prototype = Object.create(pa.prototype);
  oc.prototype.constructor = oc;
  oc.prototype.dispose = function() {
    this.geometry.dispose();
    this.material.dispose();
  };
  oc.prototype.update = function() {
    void 0 !== this.color
      ? this.material.color.set(this.color)
      : this.material.color.copy(this.light.color);
  };
  pc.prototype = Object.create(D.prototype);
  pc.prototype.constructor = pc;
  pc.prototype.dispose = function() {
    this.children[0].geometry.dispose();
    this.children[0].material.dispose();
  };
  pc.prototype.update = function() {
    var a = 0.5 * this.light.width,
      b = 0.5 * this.light.height,
      c = this.line.geometry.attributes.position,
      d = c.array;
    d[0] = a;
    d[1] = -b;
    d[2] = 0;
    d[3] = a;
    d[4] = b;
    d[5] = 0;
    d[6] = -a;
    d[7] = b;
    d[8] = 0;
    d[9] = -a;
    d[10] = -b;
    d[11] = 0;
    d[12] = a;
    d[13] = -b;
    d[14] = 0;
    c.needsUpdate = !0;
    void 0 !== this.color
      ? this.line.material.color.set(this.color)
      : this.line.material.color.copy(this.light.color);
  };
  qc.prototype = Object.create(D.prototype);
  qc.prototype.constructor = qc;
  qc.prototype.dispose = function() {
    this.children[0].geometry.dispose();
    this.children[0].material.dispose();
  };
  qc.prototype.update = (function() {
    var a = new p(),
      b = new G(),
      c = new G();
    return function() {
      var d = this.children[0];
      if (void 0 !== this.color) this.material.color.set(this.color);
      else {
        var e = d.geometry.getAttribute("color");
        b.copy(this.light.color);
        c.copy(this.light.groundColor);
        for (var f = 0, g = e.count; f < g; f++) {
          var h = f < g / 2 ? b : c;
          e.setXYZ(f, h.r, h.g, h.b);
        }
        e.needsUpdate = !0;
      }
      d.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());
    };
  })();
  ld.prototype = Object.create(S.prototype);
  ld.prototype.constructor = ld;
  Sd.prototype = Object.create(S.prototype);
  Sd.prototype.constructor = Sd;
  md.prototype = Object.create(S.prototype);
  md.prototype.constructor = md;
  md.prototype.update = (function() {
    var a = new p(),
      b = new p(),
      c = new da();
    return function() {
      this.object.updateMatrixWorld(!0);
      c.getNormalMatrix(this.object.matrixWorld);
      var d = this.object.matrixWorld,
        e = this.geometry.attributes.position,
        f = this.object.geometry,
        g = f.vertices;
      f = f.faces;
      for (var h = 0, k = 0, l = f.length; k < l; k++) {
        var p = f[k],
          n = p.normal;
        a.copy(g[p.a])
          .add(g[p.b])
          .add(g[p.c])
          .divideScalar(3)
          .applyMatrix4(d);
        b.copy(n)
          .applyMatrix3(c)
          .normalize()
          .multiplyScalar(this.size)
          .add(a);
        e.setXYZ(h, a.x, a.y, a.z);
        h += 1;
        e.setXYZ(h, b.x, b.y, b.z);
        h += 1;
      }
      e.needsUpdate = !0;
    };
  })();
  rc.prototype = Object.create(D.prototype);
  rc.prototype.constructor = rc;
  rc.prototype.dispose = function() {
    this.lightPlane.geometry.dispose();
    this.lightPlane.material.dispose();
    this.targetLine.geometry.dispose();
    this.targetLine.material.dispose();
  };
  rc.prototype.update = (function() {
    var a = new p(),
      b = new p(),
      c = new p();
    return function() {
      a.setFromMatrixPosition(this.light.matrixWorld);
      b.setFromMatrixPosition(this.light.target.matrixWorld);
      c.subVectors(b, a);
      this.lightPlane.lookAt(c);
      void 0 !== this.color
        ? (this.lightPlane.material.color.set(this.color),
          this.targetLine.material.color.set(this.color))
        : (this.lightPlane.material.color.copy(this.light.color),
          this.targetLine.material.color.copy(this.light.color));
      this.targetLine.lookAt(c);
      this.targetLine.scale.z = c.length();
    };
  })();
  nd.prototype = Object.create(S.prototype);
  nd.prototype.constructor = nd;
  nd.prototype.update = (function() {
    function a(a, g, h, k) {
      d.set(g, h, k).unproject(e);
      a = c[a];
      if (void 0 !== a)
        for (g = b.getAttribute("position"), h = 0, k = a.length; h < k; h++)
          g.setXYZ(a[h], d.x, d.y, d.z);
    }
    var b,
      c,
      d = new p(),
      e = new Ra();
    return function() {
      b = this.geometry;
      c = this.pointMap;
      e.projectionMatrix.copy(this.camera.projectionMatrix);
      a("c", 0, 0, -1);
      a("t", 0, 0, 1);
      a("n1", -1, -1, -1);
      a("n2", 1, -1, -1);
      a("n3", -1, 1, -1);
      a("n4", 1, 1, -1);
      a("f1", -1, -1, 1);
      a("f2", 1, -1, 1);
      a("f3", -1, 1, 1);
      a("f4", 1, 1, 1);
      a("u1", 0.7, 1.1, -1);
      a("u2", -0.7, 1.1, -1);
      a("u3", 0, 2, -1);
      a("cf1", -1, 0, 1);
      a("cf2", 1, 0, 1);
      a("cf3", 0, -1, 1);
      a("cf4", 0, 1, 1);
      a("cn1", -1, 0, -1);
      a("cn2", 1, 0, -1);
      a("cn3", 0, -1, -1);
      a("cn4", 0, 1, -1);
      b.getAttribute("position").needsUpdate = !0;
    };
  })();
  bb.prototype = Object.create(S.prototype);
  bb.prototype.constructor = bb;
  bb.prototype.update = (function() {
    var a = new Wa();
    return function(b) {
      void 0 !== b &&
        console.warn("THREE.BoxHelper: .update() has no longer arguments.");
      void 0 !== this.object && a.setFromObject(this.object);
      if (!a.isEmpty()) {
        b = a.min;
        var c = a.max,
          d = this.geometry.attributes.position,
          e = d.array;
        e[0] = c.x;
        e[1] = c.y;
        e[2] = c.z;
        e[3] = b.x;
        e[4] = c.y;
        e[5] = c.z;
        e[6] = b.x;
        e[7] = b.y;
        e[8] = c.z;
        e[9] = c.x;
        e[10] = b.y;
        e[11] = c.z;
        e[12] = c.x;
        e[13] = c.y;
        e[14] = b.z;
        e[15] = b.x;
        e[16] = c.y;
        e[17] = b.z;
        e[18] = b.x;
        e[19] = b.y;
        e[20] = b.z;
        e[21] = c.x;
        e[22] = b.y;
        e[23] = b.z;
        d.needsUpdate = !0;
        this.geometry.computeBoundingSphere();
      }
    };
  })();
  bb.prototype.setFromObject = function(a) {
    this.object = a;
    this.update();
    return this;
  };
  bb.prototype.copy = function(a) {
    S.prototype.copy.call(this, a);
    this.object = a.object;
    return this;
  };
  bb.prototype.clone = function() {
    return new this.constructor().copy(this);
  };
  od.prototype = Object.create(S.prototype);
  od.prototype.constructor = od;
  od.prototype.updateMatrixWorld = function(a) {
    var b = this.box;
    b.isEmpty() ||
      (b.getCenter(this.position),
      b.getSize(this.scale),
      this.scale.multiplyScalar(0.5),
      D.prototype.updateMatrixWorld.call(this, a));
  };
  pd.prototype = Object.create(ma.prototype);
  pd.prototype.constructor = pd;
  pd.prototype.updateMatrixWorld = function(a) {
    var b = -this.plane.constant;
    1e-8 > Math.abs(b) && (b = 1e-8);
    this.scale.set(0.5 * this.size, 0.5 * this.size, b);
    this.children[0].material.side = 0 > b ? 1 : 0;
    this.lookAt(this.plane.normal);
    D.prototype.updateMatrixWorld.call(this, a);
  };
  var Td, De;
  cb.prototype = Object.create(D.prototype);
  cb.prototype.constructor = cb;
  cb.prototype.setDirection = (function() {
    var a = new p(),
      b;
    return function(c) {
      0.99999 < c.y
        ? this.quaternion.set(0, 0, 0, 1)
        : -0.99999 > c.y
        ? this.quaternion.set(1, 0, 0, 0)
        : (a.set(c.z, 0, -c.x).normalize(),
          (b = Math.acos(c.y)),
          this.quaternion.setFromAxisAngle(a, b));
    };
  })();
  cb.prototype.setLength = function(a, b, c) {
    void 0 === b && (b = 0.2 * a);
    void 0 === c && (c = 0.2 * b);
    this.line.scale.set(1, Math.max(0, a - b), 1);
    this.line.updateMatrix();
    this.cone.scale.set(c, b, c);
    this.cone.position.y = a;
    this.cone.updateMatrix();
  };
  cb.prototype.setColor = function(a) {
    this.line.material.color.copy(a);
    this.cone.material.color.copy(a);
  };
  cb.prototype.copy = function(a) {
    D.prototype.copy.call(this, a, !1);
    this.line.copy(a.line);
    this.cone.copy(a.cone);
    return this;
  };
  cb.prototype.clone = function() {
    return new this.constructor().copy(this);
  };
  qd.prototype = Object.create(S.prototype);
  qd.prototype.constructor = qd;
  Q.create = function(a, b) {
    console.log("THREE.Curve.create() has been deprecated");
    a.prototype = Object.create(Q.prototype);
    a.prototype.constructor = a;
    a.prototype.getPoint = b;
    return a;
  };
  Object.assign(ab.prototype, {
    createPointsGeometry: function(a) {
      console.warn(
        "THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."
      );
      a = this.getPoints(a);
      return this.createGeometry(a);
    },
    createSpacedPointsGeometry: function(a) {
      console.warn(
        "THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."
      );
      a = this.getSpacedPoints(a);
      return this.createGeometry(a);
    },
    createGeometry: function(a) {
      console.warn(
        "THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."
      );
      for (var b = new I(), c = 0, d = a.length; c < d; c++) {
        var e = a[c];
        b.vertices.push(new p(e.x, e.y, e.z || 0));
      }
      return b;
    }
  });
  Object.assign(Na.prototype, {
    fromPoints: function(a) {
      console.warn(
        "THREE.Path: .fromPoints() has been renamed to .setFromPoints()."
      );
      this.setFromPoints(a);
    }
  });
  Ef.prototype = Object.create(ua.prototype);
  Ff.prototype = Object.create(ua.prototype);
  Ee.prototype = Object.create(ua.prototype);
  Object.assign(Ee.prototype, {
    initFromArray: function() {
      console.error("THREE.Spline: .initFromArray() has been removed.");
    },
    getControlPointsArray: function() {
      console.error("THREE.Spline: .getControlPointsArray() has been removed.");
    },
    reparametrizeByArcLength: function() {
      console.error(
        "THREE.Spline: .reparametrizeByArcLength() has been removed."
      );
    }
  });
  ld.prototype.setColors = function() {
    console.error(
      "THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead."
    );
  };
  nc.prototype.update = function() {
    console.error(
      "THREE.SkeletonHelper: update() no longer needs to be called."
    );
  };
  Object.assign(kc.prototype, {
    extractUrlBase: function(a) {
      console.warn(
        "THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."
      );
      return Vd.extractUrlBase(a);
    }
  });
  Object.assign(Qd.prototype, {
    setTexturePath: function(a) {
      console.warn(
        "THREE.JSONLoader: .setTexturePath() has been renamed to .setResourcePath()."
      );
      return this.setResourcePath(a);
    }
  });
  Object.assign(le.prototype, {
    setTexturePath: function(a) {
      console.warn(
        "THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."
      );
      return this.setResourcePath(a);
    }
  });
  Object.assign(Be.prototype, {
    center: function(a) {
      console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
      return this.getCenter(a);
    },
    empty: function() {
      console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");
      return this.isEmpty();
    },
    isIntersectionBox: function(a) {
      console.warn(
        "THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."
      );
      return this.intersectsBox(a);
    },
    size: function(a) {
      console.warn("THREE.Box2: .size() has been renamed to .getSize().");
      return this.getSize(a);
    }
  });
  Object.assign(Wa.prototype, {
    center: function(a) {
      console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
      return this.getCenter(a);
    },
    empty: function() {
      console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");
      return this.isEmpty();
    },
    isIntersectionBox: function(a) {
      console.warn(
        "THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."
      );
      return this.intersectsBox(a);
    },
    isIntersectionSphere: function(a) {
      console.warn(
        "THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."
      );
      return this.intersectsSphere(a);
    },
    size: function(a) {
      console.warn("THREE.Box3: .size() has been renamed to .getSize().");
      return this.getSize(a);
    }
  });
  Ce.prototype.center = function(a) {
    console.warn("THREE.Line3: .center() has been renamed to .getCenter().");
    return this.getCenter(a);
  };
  Object.assign(R, {
    random16: function() {
      console.warn(
        "THREE.Math: .random16() has been deprecated. Use Math.random() instead."
      );
      return Math.random();
    },
    nearestPowerOfTwo: function(a) {
      console.warn(
        "THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."
      );
      return R.floorPowerOfTwo(a);
    },
    nextPowerOfTwo: function(a) {
      console.warn(
        "THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."
      );
      return R.ceilPowerOfTwo(a);
    }
  });
  Object.assign(da.prototype, {
    flattenToArrayOffset: function(a, b) {
      console.warn(
        "THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
      );
      return this.toArray(a, b);
    },
    multiplyVector3: function(a) {
      console.warn(
        "THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."
      );
      return a.applyMatrix3(this);
    },
    multiplyVector3Array: function() {
      console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
    },
    applyToBuffer: function(a) {
      console.warn(
        "THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."
      );
      return this.applyToBufferAttribute(a);
    },
    applyToVector3Array: function() {
      console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
    }
  });
  Object.assign(P.prototype, {
    extractPosition: function(a) {
      console.warn(
        "THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."
      );
      return this.copyPosition(a);
    },
    flattenToArrayOffset: function(a, b) {
      console.warn(
        "THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
      );
      return this.toArray(a, b);
    },
    getPosition: (function() {
      var a;
      return function() {
        void 0 === a && (a = new p());
        console.warn(
          "THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."
        );
        return a.setFromMatrixColumn(this, 3);
      };
    })(),
    setRotationFromQuaternion: function(a) {
      console.warn(
        "THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."
      );
      return this.makeRotationFromQuaternion(a);
    },
    multiplyToArray: function() {
      console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
    },
    multiplyVector3: function(a) {
      console.warn(
        "THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."
      );
      return a.applyMatrix4(this);
    },
    multiplyVector4: function(a) {
      console.warn(
        "THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."
      );
      return a.applyMatrix4(this);
    },
    multiplyVector3Array: function() {
      console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
    },
    rotateAxis: function(a) {
      console.warn(
        "THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."
      );
      a.transformDirection(this);
    },
    crossVector: function(a) {
      console.warn(
        "THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."
      );
      return a.applyMatrix4(this);
    },
    translate: function() {
      console.error("THREE.Matrix4: .translate() has been removed.");
    },
    rotateX: function() {
      console.error("THREE.Matrix4: .rotateX() has been removed.");
    },
    rotateY: function() {
      console.error("THREE.Matrix4: .rotateY() has been removed.");
    },
    rotateZ: function() {
      console.error("THREE.Matrix4: .rotateZ() has been removed.");
    },
    rotateByAxis: function() {
      console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
    },
    applyToBuffer: function(a) {
      console.warn(
        "THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."
      );
      return this.applyToBufferAttribute(a);
    },
    applyToVector3Array: function() {
      console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
    },
    makeFrustum: function(a, b, c, d, e, f) {
      console.warn(
        "THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."
      );
      return this.makePerspective(a, b, d, c, e, f);
    }
  });
  Pa.prototype.isIntersectionLine = function(a) {
    console.warn(
      "THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."
    );
    return this.intersectsLine(a);
  };
  ja.prototype.multiplyVector3 = function(a) {
    console.warn(
      "THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."
    );
    return a.applyQuaternion(this);
  };
  Object.assign(rb.prototype, {
    isIntersectionBox: function(a) {
      console.warn(
        "THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."
      );
      return this.intersectsBox(a);
    },
    isIntersectionPlane: function(a) {
      console.warn(
        "THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."
      );
      return this.intersectsPlane(a);
    },
    isIntersectionSphere: function(a) {
      console.warn(
        "THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."
      );
      return this.intersectsSphere(a);
    }
  });
  Object.assign(ha.prototype, {
    area: function() {
      console.warn("THREE.Triangle: .area() has been renamed to .getArea().");
      return this.getArea();
    },
    barycoordFromPoint: function(a, b) {
      console.warn(
        "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
      );
      return this.getBarycoord(a, b);
    },
    midpoint: function(a) {
      console.warn(
        "THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."
      );
      return this.getMidpoint(a);
    },
    normal: function(a) {
      console.warn(
        "THREE.Triangle: .normal() has been renamed to .getNormal()."
      );
      return this.getNormal(a);
    },
    plane: function(a) {
      console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");
      return this.getPlane(a);
    }
  });
  Object.assign(ha, {
    barycoordFromPoint: function(a, b, c, d, e) {
      console.warn(
        "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
      );
      return ha.getBarycoord(a, b, c, d, e);
    },
    normal: function(a, b, c, d) {
      console.warn(
        "THREE.Triangle: .normal() has been renamed to .getNormal()."
      );
      return ha.getNormal(a, b, c, d);
    }
  });
  Object.assign(ib.prototype, {
    extractAllPoints: function(a) {
      console.warn(
        "THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."
      );
      return this.extractPoints(a);
    },
    extrude: function(a) {
      console.warn(
        "THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."
      );
      return new vb(this, a);
    },
    makeGeometry: function(a) {
      console.warn(
        "THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."
      );
      return new xb(this, a);
    }
  });
  Object.assign(z.prototype, {
    fromAttribute: function(a, b, c) {
      console.warn(
        "THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."
      );
      return this.fromBufferAttribute(a, b, c);
    },
    distanceToManhattan: function(a) {
      console.warn(
        "THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
      );
      return this.manhattanDistanceTo(a);
    },
    lengthManhattan: function() {
      console.warn(
        "THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."
      );
      return this.manhattanLength();
    }
  });
  Object.assign(p.prototype, {
    setEulerFromRotationMatrix: function() {
      console.error(
        "THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."
      );
    },
    setEulerFromQuaternion: function() {
      console.error(
        "THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."
      );
    },
    getPositionFromMatrix: function(a) {
      console.warn(
        "THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."
      );
      return this.setFromMatrixPosition(a);
    },
    getScaleFromMatrix: function(a) {
      console.warn(
        "THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."
      );
      return this.setFromMatrixScale(a);
    },
    getColumnFromMatrix: function(a, b) {
      console.warn(
        "THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."
      );
      return this.setFromMatrixColumn(b, a);
    },
    applyProjection: function(a) {
      console.warn(
        "THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."
      );
      return this.applyMatrix4(a);
    },
    fromAttribute: function(a, b, c) {
      console.warn(
        "THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."
      );
      return this.fromBufferAttribute(a, b, c);
    },
    distanceToManhattan: function(a) {
      console.warn(
        "THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
      );
      return this.manhattanDistanceTo(a);
    },
    lengthManhattan: function() {
      console.warn(
        "THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."
      );
      return this.manhattanLength();
    }
  });
  Object.assign(Z.prototype, {
    fromAttribute: function(a, b, c) {
      console.warn(
        "THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."
      );
      return this.fromBufferAttribute(a, b, c);
    },
    lengthManhattan: function() {
      console.warn(
        "THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."
      );
      return this.manhattanLength();
    }
  });
  Object.assign(I.prototype, {
    computeTangents: function() {
      console.error("THREE.Geometry: .computeTangents() has been removed.");
    },
    computeLineDistances: function() {
      console.error(
        "THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead."
      );
    }
  });
  Object.assign(D.prototype, {
    getChildByName: function(a) {
      console.warn(
        "THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."
      );
      return this.getObjectByName(a);
    },
    renderDepth: function() {
      console.warn(
        "THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead."
      );
    },
    translate: function(a, b) {
      console.warn(
        "THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."
      );
      return this.translateOnAxis(b, a);
    },
    getWorldRotation: function() {
      console.error(
        "THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead."
      );
    }
  });
  Object.defineProperties(D.prototype, {
    eulerOrder: {
      get: function() {
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
        return this.rotation.order;
      },
      set: function(a) {
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
        this.rotation.order = a;
      }
    },
    useQuaternion: {
      get: function() {
        console.warn(
          "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
        );
      },
      set: function() {
        console.warn(
          "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
        );
      }
    }
  });
  Object.defineProperties(Fc.prototype, {
    objects: {
      get: function() {
        console.warn("THREE.LOD: .objects has been renamed to .levels.");
        return this.levels;
      }
    }
  });
  Object.defineProperty(Gc.prototype, "useVertexTexture", {
    get: function() {
      console.warn("THREE.Skeleton: useVertexTexture has been removed.");
    },
    set: function() {
      console.warn("THREE.Skeleton: useVertexTexture has been removed.");
    }
  });
  Object.defineProperty(Q.prototype, "__arcLengthDivisions", {
    get: function() {
      console.warn(
        "THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."
      );
      return this.arcLengthDivisions;
    },
    set: function(a) {
      console.warn(
        "THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."
      );
      this.arcLengthDivisions = a;
    }
  });
  V.prototype.setLens = function(a, b) {
    console.warn(
      "THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."
    );
    void 0 !== b && (this.filmGauge = b);
    this.setFocalLength(a);
  };
  Object.defineProperties(ca.prototype, {
    onlyShadow: {
      set: function() {
        console.warn("THREE.Light: .onlyShadow has been removed.");
      }
    },
    shadowCameraFov: {
      set: function(a) {
        console.warn(
          "THREE.Light: .shadowCameraFov is now .shadow.camera.fov."
        );
        this.shadow.camera.fov = a;
      }
    },
    shadowCameraLeft: {
      set: function(a) {
        console.warn(
          "THREE.Light: .shadowCameraLeft is now .shadow.camera.left."
        );
        this.shadow.camera.left = a;
      }
    },
    shadowCameraRight: {
      set: function(a) {
        console.warn(
          "THREE.Light: .shadowCameraRight is now .shadow.camera.right."
        );
        this.shadow.camera.right = a;
      }
    },
    shadowCameraTop: {
      set: function(a) {
        console.warn(
          "THREE.Light: .shadowCameraTop is now .shadow.camera.top."
        );
        this.shadow.camera.top = a;
      }
    },
    shadowCameraBottom: {
      set: function(a) {
        console.warn(
          "THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."
        );
        this.shadow.camera.bottom = a;
      }
    },
    shadowCameraNear: {
      set: function(a) {
        console.warn(
          "THREE.Light: .shadowCameraNear is now .shadow.camera.near."
        );
        this.shadow.camera.near = a;
      }
    },
    shadowCameraFar: {
      set: function(a) {
        console.warn(
          "THREE.Light: .shadowCameraFar is now .shadow.camera.far."
        );
        this.shadow.camera.far = a;
      }
    },
    shadowCameraVisible: {
      set: function() {
        console.warn(
          "THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."
        );
      }
    },
    shadowBias: {
      set: function(a) {
        console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
        this.shadow.bias = a;
      }
    },
    shadowDarkness: {
      set: function() {
        console.warn("THREE.Light: .shadowDarkness has been removed.");
      }
    },
    shadowMapWidth: {
      set: function(a) {
        console.warn(
          "THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."
        );
        this.shadow.mapSize.width = a;
      }
    },
    shadowMapHeight: {
      set: function(a) {
        console.warn(
          "THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."
        );
        this.shadow.mapSize.height = a;
      }
    }
  });
  Object.defineProperties(F.prototype, {
    length: {
      get: function() {
        console.warn(
          "THREE.BufferAttribute: .length has been deprecated. Use .count instead."
        );
        return this.array.length;
      }
    },
    copyIndicesArray: function() {
      console.error(
        "THREE.BufferAttribute: .copyIndicesArray() has been removed."
      );
    }
  });
  Object.assign(E.prototype, {
    addIndex: function(a) {
      console.warn(
        "THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."
      );
      this.setIndex(a);
    },
    addDrawCall: function(a, b, c) {
      void 0 !== c &&
        console.warn(
          "THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."
        );
      console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
      this.addGroup(a, b);
    },
    clearDrawCalls: function() {
      console.warn(
        "THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."
      );
      this.clearGroups();
    },
    computeTangents: function() {
      console.warn(
        "THREE.BufferGeometry: .computeTangents() has been removed."
      );
    },
    computeOffsets: function() {
      console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
    }
  });
  Object.defineProperties(E.prototype, {
    drawcalls: {
      get: function() {
        console.error(
          "THREE.BufferGeometry: .drawcalls has been renamed to .groups."
        );
        return this.groups;
      }
    },
    offsets: {
      get: function() {
        console.warn(
          "THREE.BufferGeometry: .offsets has been renamed to .groups."
        );
        return this.groups;
      }
    }
  });
  Object.assign(Sa.prototype, {
    getArrays: function() {
      console.error(
        "THREE.ExtrudeBufferGeometry: .getArrays() has been removed."
      );
    },
    addShapeList: function() {
      console.error(
        "THREE.ExtrudeBufferGeometry: .addShapeList() has been removed."
      );
    },
    addShape: function() {
      console.error(
        "THREE.ExtrudeBufferGeometry: .addShape() has been removed."
      );
    }
  });
  Object.defineProperties(Rd.prototype, {
    dynamic: {
      set: function() {
        console.warn(
          "THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead."
        );
      }
    },
    onUpdate: {
      value: function() {
        console.warn(
          "THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."
        );
        return this;
      }
    }
  });
  Object.defineProperties(L.prototype, {
    wrapAround: {
      get: function() {
        console.warn("THREE.Material: .wrapAround has been removed.");
      },
      set: function() {
        console.warn("THREE.Material: .wrapAround has been removed.");
      }
    },
    overdraw: {
      get: function() {
        console.warn("THREE.Material: .overdraw has been removed.");
      },
      set: function() {
        console.warn("THREE.Material: .overdraw has been removed.");
      }
    },
    wrapRGB: {
      get: function() {
        console.warn("THREE.Material: .wrapRGB has been removed.");
        return new G();
      }
    },
    shading: {
      get: function() {
        console.error(
          "THREE." +
            this.type +
            ": .shading has been removed. Use the boolean .flatShading instead."
        );
      },
      set: function(a) {
        console.warn(
          "THREE." +
            this.type +
            ": .shading has been removed. Use the boolean .flatShading instead."
        );
        this.flatShading = 1 === a;
      }
    }
  });
  Object.defineProperties(Ia.prototype, {
    metal: {
      get: function() {
        console.warn(
          "THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."
        );
        return !1;
      },
      set: function() {
        console.warn(
          "THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead"
        );
      }
    }
  });
  Object.defineProperties(ka.prototype, {
    derivatives: {
      get: function() {
        console.warn(
          "THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
        );
        return this.extensions.derivatives;
      },
      set: function(a) {
        console.warn(
          "THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
        );
        this.extensions.derivatives = a;
      }
    }
  });
  Object.assign(ce.prototype, {
    clearTarget: function(a, b, c, d) {
      console.warn(
        "THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."
      );
      this.setRenderTarget(a);
      this.clear(b, c, d);
    },
    animate: function(a) {
      console.warn(
        "THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."
      );
      this.setAnimationLoop(a);
    },
    getCurrentRenderTarget: function() {
      console.warn(
        "THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."
      );
      return this.getRenderTarget();
    },
    getMaxAnisotropy: function() {
      console.warn(
        "THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."
      );
      return this.capabilities.getMaxAnisotropy();
    },
    getPrecision: function() {
      console.warn(
        "THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."
      );
      return this.capabilities.precision;
    },
    resetGLState: function() {
      console.warn(
        "THREE.WebGLRenderer: .resetGLState() is now .state.reset()."
      );
      return this.state.reset();
    },
    supportsFloatTextures: function() {
      console.warn(
        "THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."
      );
      return this.extensions.get("OES_texture_float");
    },
    supportsHalfFloatTextures: function() {
      console.warn(
        "THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
      );
      return this.extensions.get("OES_texture_half_float");
    },
    supportsStandardDerivatives: function() {
      console.warn(
        "THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
      );
      return this.extensions.get("OES_standard_derivatives");
    },
    supportsCompressedTextureS3TC: function() {
      console.warn(
        "THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
      );
      return this.extensions.get("WEBGL_compressed_texture_s3tc");
    },
    supportsCompressedTexturePVRTC: function() {
      console.warn(
        "THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
      );
      return this.extensions.get("WEBGL_compressed_texture_pvrtc");
    },
    supportsBlendMinMax: function() {
      console.warn(
        "THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."
      );
      return this.extensions.get("EXT_blend_minmax");
    },
    supportsVertexTextures: function() {
      console.warn(
        "THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."
      );
      return this.capabilities.vertexTextures;
    },
    supportsInstancedArrays: function() {
      console.warn(
        "THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
      );
      return this.extensions.get("ANGLE_instanced_arrays");
    },
    enableScissorTest: function(a) {
      console.warn(
        "THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."
      );
      this.setScissorTest(a);
    },
    initMaterial: function() {
      console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
    },
    addPrePlugin: function() {
      console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
    },
    addPostPlugin: function() {
      console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
    },
    updateShadowMap: function() {
      console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
    },
    setFaceCulling: function() {
      console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
    }
  });
  Object.defineProperties(ce.prototype, {
    shadowMapEnabled: {
      get: function() {
        return this.shadowMap.enabled;
      },
      set: function(a) {
        console.warn(
          "THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."
        );
        this.shadowMap.enabled = a;
      }
    },
    shadowMapType: {
      get: function() {
        return this.shadowMap.type;
      },
      set: function(a) {
        console.warn(
          "THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."
        );
        this.shadowMap.type = a;
      }
    },
    shadowMapCullFace: {
      get: function() {
        console.warn(
          "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
        );
      },
      set: function() {
        console.warn(
          "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
        );
      }
    }
  });
  Object.defineProperties(cf.prototype, {
    cullFace: {
      get: function() {
        console.warn(
          "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
        );
      },
      set: function() {
        console.warn(
          "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
        );
      }
    },
    renderReverseSided: {
      get: function() {
        console.warn(
          "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
        );
      },
      set: function() {
        console.warn(
          "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
        );
      }
    },
    renderSingleSided: {
      get: function() {
        console.warn(
          "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
        );
      },
      set: function() {
        console.warn(
          "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
        );
      }
    }
  });
  Object.defineProperties(kb.prototype, {
    wrapS: {
      get: function() {
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
        return this.texture.wrapS;
      },
      set: function(a) {
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
        this.texture.wrapS = a;
      }
    },
    wrapT: {
      get: function() {
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
        return this.texture.wrapT;
      },
      set: function(a) {
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
        this.texture.wrapT = a;
      }
    },
    magFilter: {
      get: function() {
        console.warn(
          "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
        );
        return this.texture.magFilter;
      },
      set: function(a) {
        console.warn(
          "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
        );
        this.texture.magFilter = a;
      }
    },
    minFilter: {
      get: function() {
        console.warn(
          "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
        );
        return this.texture.minFilter;
      },
      set: function(a) {
        console.warn(
          "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
        );
        this.texture.minFilter = a;
      }
    },
    anisotropy: {
      get: function() {
        console.warn(
          "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
        );
        return this.texture.anisotropy;
      },
      set: function(a) {
        console.warn(
          "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
        );
        this.texture.anisotropy = a;
      }
    },
    offset: {
      get: function() {
        console.warn(
          "THREE.WebGLRenderTarget: .offset is now .texture.offset."
        );
        return this.texture.offset;
      },
      set: function(a) {
        console.warn(
          "THREE.WebGLRenderTarget: .offset is now .texture.offset."
        );
        this.texture.offset = a;
      }
    },
    repeat: {
      get: function() {
        console.warn(
          "THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
        );
        return this.texture.repeat;
      },
      set: function(a) {
        console.warn(
          "THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
        );
        this.texture.repeat = a;
      }
    },
    format: {
      get: function() {
        console.warn(
          "THREE.WebGLRenderTarget: .format is now .texture.format."
        );
        return this.texture.format;
      },
      set: function(a) {
        console.warn(
          "THREE.WebGLRenderTarget: .format is now .texture.format."
        );
        this.texture.format = a;
      }
    },
    type: {
      get: function() {
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
        return this.texture.type;
      },
      set: function(a) {
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
        this.texture.type = a;
      }
    },
    generateMipmaps: {
      get: function() {
        console.warn(
          "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
        );
        return this.texture.generateMipmaps;
      },
      set: function(a) {
        console.warn(
          "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
        );
        this.texture.generateMipmaps = a;
      }
    }
  });
  Object.defineProperties(hf.prototype, {
    standing: {
      set: function() {
        console.warn("THREE.WebVRManager: .standing has been removed.");
      }
    },
    userHeight: {
      set: function() {
        console.warn("THREE.WebVRManager: .userHeight has been removed.");
      }
    }
  });
  lc.prototype.load = function(a) {
    console.warn(
      "THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."
    );
    var b = this;
    new pe().load(a, function(a) {
      b.setBuffer(a);
    });
    return this;
  };
  ue.prototype.getData = function() {
    console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");
    return this.getFrequencyData();
  };
  id.prototype.updateCubeMap = function(a, b) {
    console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");
    return this.update(a, b);
  };
  jb.crossOrigin = void 0;
  jb.loadTexture = function(a, b, c, d) {
    console.warn(
      "THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."
    );
    var e = new Gd();
    e.setCrossOrigin(this.crossOrigin);
    a = e.load(a, c, void 0, d);
    b && (a.mapping = b);
    return a;
  };
  jb.loadTextureCube = function(a, b, c, d) {
    console.warn(
      "THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."
    );
    var e = new ie();
    e.setCrossOrigin(this.crossOrigin);
    a = e.load(a, c, void 0, d);
    b && (a.mapping = b);
    return a;
  };
  jb.loadCompressedTexture = function() {
    console.error(
      "THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead."
    );
  };
  jb.loadCompressedTextureCube = function() {
    console.error(
      "THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead."
    );
  };
  l.WebGLRenderTargetCube = Jb;
  l.WebGLRenderTarget = kb;
  l.WebGLRenderer = ce;
  l.ShaderLib = Qa;
  l.UniformsLib = J;
  l.UniformsUtils = va;
  l.ShaderChunk = K;
  l.FogExp2 = Pb;
  l.Fog = Qb;
  l.Scene = vd;
  l.Sprite = Ec;
  l.LOD = Fc;
  l.SkinnedMesh = xd;
  l.Skeleton = Gc;
  l.Bone = wd;
  l.Mesh = pa;
  l.LineSegments = S;
  l.LineLoop = yd;
  l.Line = ma;
  l.Points = Sb;
  l.Group = Ob;
  l.VideoTexture = de;
  l.DataTexture = lb;
  l.DataTexture3D = Mb;
  l.CompressedTexture = Tb;
  l.CubeTexture = Ya;
  l.CanvasTexture = Hc;
  l.DepthTexture = Ic;
  l.Texture = W;
  l.AnimationLoader = rf;
  l.CompressedTextureLoader = sf;
  l.DataTextureLoader = he;
  l.CubeTextureLoader = ie;
  l.TextureLoader = Gd;
  l.ObjectLoader = le;
  l.MaterialLoader = Pd;
  l.BufferGeometryLoader = ke;
  l.DefaultLoadingManager = ta;
  l.LoadingManager = ge;
  l.JSONLoader = Qd;
  l.ImageLoader = ed;
  l.ImageBitmapLoader = me;
  l.FontLoader = uf;
  l.FileLoader = Fa;
  l.Loader = kc;
  l.LoaderUtils = Vd;
  l.Cache = Ib;
  l.AudioLoader = pe;
  l.SpotLightShadow = Id;
  l.SpotLight = Jd;
  l.PointLight = Kd;
  l.RectAreaLight = Od;
  l.HemisphereLight = Hd;
  l.DirectionalLightShadow = Ld;
  l.DirectionalLight = Md;
  l.AmbientLight = Nd;
  l.LightShadow = Hb;
  l.Light = ca;
  l.StereoCamera = vf;
  l.PerspectiveCamera = V;
  l.OrthographicCamera = hd;
  l.CubeCamera = id;
  l.ArrayCamera = Cc;
  l.Camera = Ra;
  l.AudioListener = re;
  l.PositionalAudio = te;
  l.AudioContext = se;
  l.AudioAnalyser = ue;
  l.Audio = lc;
  l.VectorKeyframeTrack = ic;
  l.StringKeyframeTrack = Fd;
  l.QuaternionKeyframeTrack = dd;
  l.NumberKeyframeTrack = hc;
  l.ColorKeyframeTrack = Dd;
  l.BooleanKeyframeTrack = Cd;
  l.PropertyMixer = ve;
  l.PropertyBinding = oa;
  l.KeyframeTrack = qa;
  l.AnimationUtils = ra;
  l.AnimationObjectGroup = xf;
  l.AnimationMixer = we;
  l.AnimationClip = za;
  l.Uniform = Rd;
  l.InstancedBufferGeometry = xe;
  l.BufferGeometry = E;
  l.Geometry = I;
  l.InterleavedBufferAttribute = Dc;
  l.InstancedInterleavedBuffer = ye;
  l.InterleavedBuffer = sb;
  l.InstancedBufferAttribute = ze;
  l.Face3 = Xa;
  l.Object3D = D;
  l.Raycaster = zf;
  l.Layers = Yd;
  l.EventDispatcher = ia;
  l.Clock = qe;
  l.QuaternionLinearInterpolant = Ed;
  l.LinearInterpolant = cd;
  l.DiscreteInterpolant = Bd;
  l.CubicInterpolant = Ad;
  l.Interpolant = Ca;
  l.Triangle = ha;
  l.Math = R;
  l.Spherical = Bf;
  l.Cylindrical = Cf;
  l.Plane = Pa;
  l.Frustum = rd;
  l.Sphere = Ga;
  l.Ray = rb;
  l.Matrix4 = P;
  l.Matrix3 = da;
  l.Box3 = Wa;
  l.Box2 = Be;
  l.Line3 = Ce;
  l.Euler = mb;
  l.Vector4 = Z;
  l.Vector3 = p;
  l.Vector2 = z;
  l.Quaternion = ja;
  l.Color = G;
  l.ImmediateRenderObject = jd;
  l.VertexNormalsHelper = kd;
  l.SpotLightHelper = mc;
  l.SkeletonHelper = nc;
  l.PointLightHelper = oc;
  l.RectAreaLightHelper = pc;
  l.HemisphereLightHelper = qc;
  l.GridHelper = ld;
  l.PolarGridHelper = Sd;
  l.FaceNormalsHelper = md;
  l.DirectionalLightHelper = rc;
  l.CameraHelper = nd;
  l.BoxHelper = bb;
  l.Box3Helper = od;
  l.PlaneHelper = pd;
  l.ArrowHelper = cb;
  l.AxesHelper = qd;
  l.Shape = ib;
  l.Path = Na;
  l.ShapePath = ne;
  l.Font = oe;
  l.CurvePath = ab;
  l.Curve = Q;
  l.ImageUtils = jb;
  l.ShapeUtils = Za;
  l.WebGLUtils = df;
  l.WireframeGeometry = Ub;
  l.ParametricGeometry = Jc;
  l.ParametricBufferGeometry = Vb;
  l.TetrahedronGeometry = Lc;
  l.TetrahedronBufferGeometry = Wb;
  l.OctahedronGeometry = Mc;
  l.OctahedronBufferGeometry = tb;
  l.IcosahedronGeometry = Nc;
  l.IcosahedronBufferGeometry = Xb;
  l.DodecahedronGeometry = Oc;
  l.DodecahedronBufferGeometry = Yb;
  l.PolyhedronGeometry = Kc;
  l.PolyhedronBufferGeometry = ya;
  l.TubeGeometry = Pc;
  l.TubeBufferGeometry = Zb;
  l.TorusKnotGeometry = Qc;
  l.TorusKnotBufferGeometry = $b;
  l.TorusGeometry = Rc;
  l.TorusBufferGeometry = ac;
  l.TextGeometry = Wc;
  l.TextBufferGeometry = bc;
  l.SphereGeometry = Xc;
  l.SphereBufferGeometry = wb;
  l.RingGeometry = Yc;
  l.RingBufferGeometry = cc;
  l.PlaneGeometry = yc;
  l.PlaneBufferGeometry = qb;
  l.LatheGeometry = Zc;
  l.LatheBufferGeometry = dc;
  l.ShapeGeometry = xb;
  l.ShapeBufferGeometry = yb;
  l.ExtrudeGeometry = vb;
  l.ExtrudeBufferGeometry = Sa;
  l.EdgesGeometry = ec;
  l.ConeGeometry = $c;
  l.ConeBufferGeometry = ad;
  l.CylinderGeometry = zb;
  l.CylinderBufferGeometry = $a;
  l.CircleGeometry = bd;
  l.CircleBufferGeometry = fc;
  l.BoxGeometry = Kb;
  l.BoxBufferGeometry = pb;
  l.ShadowMaterial = Ab;
  l.SpriteMaterial = hb;
  l.RawShaderMaterial = gc;
  l.ShaderMaterial = ka;
  l.PointsMaterial = Ha;
  l.MeshPhysicalMaterial = Bb;
  l.MeshStandardMaterial = Ta;
  l.MeshPhongMaterial = Ia;
  l.MeshToonMaterial = Cb;
  l.MeshNormalMaterial = Db;
  l.MeshLambertMaterial = Eb;
  l.MeshDepthMaterial = eb;
  l.MeshDistanceMaterial = fb;
  l.MeshBasicMaterial = Ea;
  l.MeshMatcapMaterial = Fb;
  l.LineDashedMaterial = Gb;
  l.LineBasicMaterial = T;
  l.Material = L;
  l.Float64BufferAttribute = xc;
  l.Float32BufferAttribute = C;
  l.Uint32BufferAttribute = ob;
  l.Int32BufferAttribute = wc;
  l.Uint16BufferAttribute = nb;
  l.Int16BufferAttribute = vc;
  l.Uint8ClampedBufferAttribute = uc;
  l.Uint8BufferAttribute = tc;
  l.Int8BufferAttribute = sc;
  l.BufferAttribute = F;
  l.ArcCurve = jc;
  l.CatmullRomCurve3 = ua;
  l.CubicBezierCurve = Ja;
  l.CubicBezierCurve3 = Ua;
  l.EllipseCurve = wa;
  l.LineCurve = Aa;
  l.LineCurve3 = Ka;
  l.QuadraticBezierCurve = La;
  l.QuadraticBezierCurve3 = Va;
  l.SplineCurve = Ma;
  l.REVISION = "98";
  l.MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2 };
  l.CullFaceNone = 0;
  l.CullFaceBack = 1;
  l.CullFaceFront = 2;
  l.CullFaceFrontBack = 3;
  l.FrontFaceDirectionCW = 0;
  l.FrontFaceDirectionCCW = 1;
  l.BasicShadowMap = 0;
  l.PCFShadowMap = 1;
  l.PCFSoftShadowMap = 2;
  l.FrontSide = 0;
  l.BackSide = 1;
  l.DoubleSide = 2;
  l.FlatShading = 1;
  l.SmoothShading = 2;
  l.NoColors = 0;
  l.FaceColors = 1;
  l.VertexColors = 2;
  l.NoBlending = 0;
  l.NormalBlending = 1;
  l.AdditiveBlending = 2;
  l.SubtractiveBlending = 3;
  l.MultiplyBlending = 4;
  l.CustomBlending = 5;
  l.AddEquation = 100;
  l.SubtractEquation = 101;
  l.ReverseSubtractEquation = 102;
  l.MinEquation = 103;
  l.MaxEquation = 104;
  l.ZeroFactor = 200;
  l.OneFactor = 201;
  l.SrcColorFactor = 202;
  l.OneMinusSrcColorFactor = 203;
  l.SrcAlphaFactor = 204;
  l.OneMinusSrcAlphaFactor = 205;
  l.DstAlphaFactor = 206;
  l.OneMinusDstAlphaFactor = 207;
  l.DstColorFactor = 208;
  l.OneMinusDstColorFactor = 209;
  l.SrcAlphaSaturateFactor = 210;
  l.NeverDepth = 0;
  l.AlwaysDepth = 1;
  l.LessDepth = 2;
  l.LessEqualDepth = 3;
  l.EqualDepth = 4;
  l.GreaterEqualDepth = 5;
  l.GreaterDepth = 6;
  l.NotEqualDepth = 7;
  l.MultiplyOperation = 0;
  l.MixOperation = 1;
  l.AddOperation = 2;
  l.NoToneMapping = 0;
  l.LinearToneMapping = 1;
  l.ReinhardToneMapping = 2;
  l.Uncharted2ToneMapping = 3;
  l.CineonToneMapping = 4;
  l.UVMapping = 300;
  l.CubeReflectionMapping = 301;
  l.CubeRefractionMapping = 302;
  l.EquirectangularReflectionMapping = 303;
  l.EquirectangularRefractionMapping = 304;
  l.SphericalReflectionMapping = 305;
  l.CubeUVReflectionMapping = 306;
  l.CubeUVRefractionMapping = 307;
  l.RepeatWrapping = 1e3;
  l.ClampToEdgeWrapping = 1001;
  l.MirroredRepeatWrapping = 1002;
  l.NearestFilter = 1003;
  l.NearestMipMapNearestFilter = 1004;
  l.NearestMipMapLinearFilter = 1005;
  l.LinearFilter = 1006;
  l.LinearMipMapNearestFilter = 1007;
  l.LinearMipMapLinearFilter = 1008;
  l.UnsignedByteType = 1009;
  l.ByteType = 1010;
  l.ShortType = 1011;
  l.UnsignedShortType = 1012;
  l.IntType = 1013;
  l.UnsignedIntType = 1014;
  l.FloatType = 1015;
  l.HalfFloatType = 1016;
  l.UnsignedShort4444Type = 1017;
  l.UnsignedShort5551Type = 1018;
  l.UnsignedShort565Type = 1019;
  l.UnsignedInt248Type = 1020;
  l.AlphaFormat = 1021;
  l.RGBFormat = 1022;
  l.RGBAFormat = 1023;
  l.LuminanceFormat = 1024;
  l.LuminanceAlphaFormat = 1025;
  l.RGBEFormat = 1023;
  l.DepthFormat = 1026;
  l.DepthStencilFormat = 1027;
  l.RedFormat = 1028;
  l.RGB_S3TC_DXT1_Format = 33776;
  l.RGBA_S3TC_DXT1_Format = 33777;
  l.RGBA_S3TC_DXT3_Format = 33778;
  l.RGBA_S3TC_DXT5_Format = 33779;
  l.RGB_PVRTC_4BPPV1_Format = 35840;
  l.RGB_PVRTC_2BPPV1_Format = 35841;
  l.RGBA_PVRTC_4BPPV1_Format = 35842;
  l.RGBA_PVRTC_2BPPV1_Format = 35843;
  l.RGB_ETC1_Format = 36196;
  l.RGBA_ASTC_4x4_Format = 37808;
  l.RGBA_ASTC_5x4_Format = 37809;
  l.RGBA_ASTC_5x5_Format = 37810;
  l.RGBA_ASTC_6x5_Format = 37811;
  l.RGBA_ASTC_6x6_Format = 37812;
  l.RGBA_ASTC_8x5_Format = 37813;
  l.RGBA_ASTC_8x6_Format = 37814;
  l.RGBA_ASTC_8x8_Format = 37815;
  l.RGBA_ASTC_10x5_Format = 37816;
  l.RGBA_ASTC_10x6_Format = 37817;
  l.RGBA_ASTC_10x8_Format = 37818;
  l.RGBA_ASTC_10x10_Format = 37819;
  l.RGBA_ASTC_12x10_Format = 37820;
  l.RGBA_ASTC_12x12_Format = 37821;
  l.LoopOnce = 2200;
  l.LoopRepeat = 2201;
  l.LoopPingPong = 2202;
  l.InterpolateDiscrete = 2300;
  l.InterpolateLinear = 2301;
  l.InterpolateSmooth = 2302;
  l.ZeroCurvatureEnding = 2400;
  l.ZeroSlopeEnding = 2401;
  l.WrapAroundEnding = 2402;
  l.TrianglesDrawMode = 0;
  l.TriangleStripDrawMode = 1;
  l.TriangleFanDrawMode = 2;
  l.LinearEncoding = 3e3;
  l.sRGBEncoding = 3001;
  l.GammaEncoding = 3007;
  l.RGBEEncoding = 3002;
  l.LogLuvEncoding = 3003;
  l.RGBM7Encoding = 3004;
  l.RGBM16Encoding = 3005;
  l.RGBDEncoding = 3006;
  l.BasicDepthPacking = 3200;
  l.RGBADepthPacking = 3201;
  l.TangentSpaceNormalMap = 0;
  l.ObjectSpaceNormalMap = 1;
  l.CubeGeometry = Kb;
  l.Face4 = function(a, b, c, d, e, f, g) {
    console.warn(
      "THREE.Face4 has been removed. A THREE.Face3 will be created instead."
    );
    return new Xa(a, b, c, e, f, g);
  };
  l.LineStrip = 0;
  l.LinePieces = 1;
  l.MeshFaceMaterial = function(a) {
    console.warn(
      "THREE.MeshFaceMaterial has been removed. Use an Array instead."
    );
    return a;
  };
  l.MultiMaterial = function(a) {
    void 0 === a && (a = []);
    console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");
    a.isMultiMaterial = !0;
    a.materials = a;
    a.clone = function() {
      return a.slice();
    };
    return a;
  };
  l.PointCloud = function(a, b) {
    console.warn("THREE.PointCloud has been renamed to THREE.Points.");
    return new Sb(a, b);
  };
  l.Particle = function(a) {
    console.warn("THREE.Particle has been renamed to THREE.Sprite.");
    return new Ec(a);
  };
  l.ParticleSystem = function(a, b) {
    console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");
    return new Sb(a, b);
  };
  l.PointCloudMaterial = function(a) {
    console.warn(
      "THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."
    );
    return new Ha(a);
  };
  l.ParticleBasicMaterial = function(a) {
    console.warn(
      "THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."
    );
    return new Ha(a);
  };
  l.ParticleSystemMaterial = function(a) {
    console.warn(
      "THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."
    );
    return new Ha(a);
  };
  l.Vertex = function(a, b, c) {
    console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
    return new p(a, b, c);
  };
  l.DynamicBufferAttribute = function(a, b) {
    console.warn(
      "THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."
    );
    return new F(a, b).setDynamic(!0);
  };
  l.Int8Attribute = function(a, b) {
    console.warn(
      "THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."
    );
    return new sc(a, b);
  };
  l.Uint8Attribute = function(a, b) {
    console.warn(
      "THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."
    );
    return new tc(a, b);
  };
  l.Uint8ClampedAttribute = function(a, b) {
    console.warn(
      "THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."
    );
    return new uc(a, b);
  };
  l.Int16Attribute = function(a, b) {
    console.warn(
      "THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."
    );
    return new vc(a, b);
  };
  l.Uint16Attribute = function(a, b) {
    console.warn(
      "THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."
    );
    return new nb(a, b);
  };
  l.Int32Attribute = function(a, b) {
    console.warn(
      "THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."
    );
    return new wc(a, b);
  };
  l.Uint32Attribute = function(a, b) {
    console.warn(
      "THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."
    );
    return new ob(a, b);
  };
  l.Float32Attribute = function(a, b) {
    console.warn(
      "THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."
    );
    return new C(a, b);
  };
  l.Float64Attribute = function(a, b) {
    console.warn(
      "THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."
    );
    return new xc(a, b);
  };
  l.ClosedSplineCurve3 = Ef;
  l.SplineCurve3 = Ff;
  l.Spline = Ee;
  l.AxisHelper = function(a) {
    console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");
    return new qd(a);
  };
  l.BoundingBoxHelper = function(a, b) {
    console.warn(
      "THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."
    );
    return new bb(a, b);
  };
  l.EdgesHelper = function(a, b) {
    console.warn(
      "THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."
    );
    return new S(
      new ec(a.geometry),
      new T({ color: void 0 !== b ? b : 16777215 })
    );
  };
  l.WireframeHelper = function(a, b) {
    console.warn(
      "THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."
    );
    return new S(
      new Ub(a.geometry),
      new T({ color: void 0 !== b ? b : 16777215 })
    );
  };
  l.XHRLoader = function(a) {
    console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");
    return new Fa(a);
  };
  l.BinaryTextureLoader = function(a) {
    console.warn(
      "THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."
    );
    return new he(a);
  };
  l.GeometryUtils = {
    merge: function(a, b, c) {
      console.warn(
        "THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."
      );
      if (b.isMesh) {
        b.matrixAutoUpdate && b.updateMatrix();
        var d = b.matrix;
        b = b.geometry;
      }
      a.merge(b, d, c);
    },
    center: function(a) {
      console.warn(
        "THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."
      );
      return a.center();
    }
  };
  l.Projector = function() {
    console.error(
      "THREE.Projector has been moved to /examples/js/renderers/Projector.js."
    );
    this.projectVector = function(a, b) {
      console.warn(
        "THREE.Projector: .projectVector() is now vector.project()."
      );
      a.project(b);
    };
    this.unprojectVector = function(a, b) {
      console.warn(
        "THREE.Projector: .unprojectVector() is now vector.unproject()."
      );
      a.unproject(b);
    };
    this.pickingRay = function() {
      console.error(
        "THREE.Projector: .pickingRay() is now raycaster.setFromCamera()."
      );
    };
  };
  l.CanvasRenderer = function() {
    console.error("THREE.CanvasRenderer has been removed");
  };
  l.SceneUtils = {
    createMultiMaterialObject: function() {
      console.error(
        "THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js"
      );
    },
    detach: function() {
      console.error(
        "THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js"
      );
    },
    attach: function() {
      console.error(
        "THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js"
      );
    }
  };
  l.LensFlare = function() {
    console.error(
      "THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js"
    );
  };
  Object.defineProperty(l, "__esModule", { value: !0 });
});
