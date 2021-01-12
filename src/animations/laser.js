export default function laserAnimation(cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [
    {
      name: 'p7_atlas_',
      frames: [
        [3899, 1502, 2289, 2289],
        [5787, 233, 43, 18],
        [6054, 88, 26, 8],
        [5787, 209, 48, 22],
        [6032, 117, 23, 11],
        [5838, 161, 23, 50],
        [5472, 389, 47, 32],
        [5986, 157, 8, 30],
        [6049, 0, 114, 70],
        [5688, 209, 27, 96],
        [5751, 248, 34, 23],
        [5837, 213, 23, 38],
        [5863, 161, 37, 28],
        [5717, 104, 104, 47],
        [5986, 75, 29, 24],
        [5652, 209, 31, 13],
        [5472, 353, 48, 34],
        [5928, 0, 119, 73],
        [5863, 191, 36, 26],
        [5717, 248, 32, 26],
        [5599, 261, 28, 50],
        [5823, 104, 116, 38],
        [5522, 353, 29, 52],
        [5986, 101, 47, 14],
        [5941, 75, 43, 93],
        [6017, 117, 13, 24],
        [5558, 0, 101, 119],
        [5472, 224, 69, 127],
        [5543, 232, 35, 95],
        [5599, 313, 27, 51],
        [5629, 261, 26, 53],
        [5926, 177, 8, 28],
        [5926, 144, 12, 31],
        [6017, 88, 35, 11],
        [5986, 117, 29, 11],
        [5580, 232, 106, 27],
        [5838, 144, 79, 15],
        [6000, 130, 9, 29],
        [5553, 329, 20, 64],
        [5824, 0, 102, 98],
        [5717, 0, 105, 102],
        [5580, 261, 17, 105],
        [5661, 0, 54, 207],
        [5472, 0, 84, 222],
        [5902, 161, 22, 47],
        [6017, 75, 46, 11],
        [5787, 153, 49, 54],
        [5717, 153, 37, 93],
        [5986, 130, 12, 25],
        [5558, 121, 92, 109],
        [6165, 0, 60, 123],
        [5756, 153, 29, 92],
        [5657, 261, 23, 50],
        [0, 0, 5470, 1500],
        [0, 1502, 3897, 1811],
      ],
    },
  ];
  // symbols:
  (lib._298064275282211 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_0 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_1 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_12_0 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(4);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_13_0 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(5);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_14 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(6);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_14_0 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(7);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_15 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(8);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_15_0 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(9);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_16_0 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(10);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_17_0 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(11);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_18 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(12);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_18_0 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(13);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_19 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(14);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_19_0 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(15);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_1_12 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(16);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_1_13 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(17);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_1_15 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(18);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_1_16 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(19);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_1_17 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(20);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_1_24 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(21);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_1_25 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(22);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_1_27 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(23);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_1_28 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(24);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_1_29 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(25);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_1_30 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(26);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_1_31 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(27);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_1_32 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(28);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_1_33 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(29);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_20 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(30);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_20_0 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(31);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_21_0 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(32);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_22_0 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(33);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_23_0 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(34);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_27 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(35);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_31 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(36);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_32 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(37);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_33 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(38);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_39 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(39);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_40 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(40);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_56 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(41);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_60 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(42);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_61 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(43);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_63 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(44);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_65 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(45);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_66 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(46);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_67 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(47);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_68 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(48);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_69 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(49);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_70 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(50);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_71 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(51);
  }).prototype = p = new cjs.Sprite();
  (lib.Mesh_72 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(52);
  }).prototype = p = new cjs.Sprite();
  (lib.color_line642 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(53);
  }).prototype = p = new cjs.Sprite();
  (lib.color_line94 = function () {
    this.initialize(ss['p7_atlas_']);
    this.gotoAndStop(54);
  }).prototype = p = new cjs.Sprite();
  // helper functions:
  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(this.mode, this.startPosition, this.loop),
    );
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }
  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }
  (lib.s1копия = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .rf(
        ['#FFFFFF', 'rgba(0,153,153,0.969)', 'rgba(0,0,0,0)'],
        [0, 0.451, 1],
        0,
        0,
        0,
        0,
        0,
        7.2,
      )
      .s()
      .p(
        'AgtAuQgTgUAAgaQAAgZATgUQAUgTAZAAQAaAAAUATQATAUAAAZQAAAagTAUQgUATgaAAQgZAAgUgTg',
      );
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.s1копия,
    new cjs.Rectangle(-6.4, -6.4, 12.9, 12.9),
    null,
  );
  (lib.s1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .rf(
        ['#FFFFFF', 'rgba(52,24,104,0.969)', 'rgba(0,0,0,0)'],
        [0, 0.451, 1],
        0,
        0,
        0,
        0,
        0,
        7.2,
      )
      .s()
      .p(
        'AgtAuQgTgUAAgaQAAgZATgUQAUgTAZAAQAaAAAUATQATAUAAAZQAAAagTAUQgUATgaAAQgZAAgUgTg',
      );
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.s1,
    new cjs.Rectangle(-6.4, -6.4, 12.9, 12.9),
    null,
  );
  (lib.Символ10 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.instance = new lib._298064275282211();
    this.instance.parent = this;
    this.instance.setTransform(-188.1, -188.1, 0.1643, 0.1643);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ10,
    new cjs.Rectangle(-188.1, -188.1, 376.2, 376.2),
    null,
  );
  (lib.Символ3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AlRNfQiMllAAn6QAAn5CMlmQCMllDFAAQDGAACMFlQCMFmAAH5QAAH6iMFlQiMFnjGgBQjFABiMlng',
      );
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ3,
    new cjs.Rectangle(-76.2, -194.7, 152.4, 389.5),
    null,
  );
  (lib.Символ2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#6600CC').s().p('Eg+UAMoIAA5PMB8pAAAIAAZPg');
    this.shape.setTransform(0, 0.025);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ2,
    new cjs.Rectangle(-398.8, -80.8, 797.7, 161.7),
    null,
  );
  (lib.Символ1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'Eg9VADXIgkgDIgLgCIgVgHIgYgJIgRgIIgMgJIgMgJIgMgJIgJgJIgJgJIgFgJIgGgIIgJgJIgDgJIgGgJIgDgJIgGgJIgDgIIgDgJIAAgJIgDgJIgDgJIAAgJIAAgBMCBVAAAIAAABIgDAJIAAAJIgDAJIgDAJIgDAJIgDAIIgDAJIgGAJIgDAJIgGAJIgFAJIgGAIIgJAJIgGAJIgJAJIgMAJIgMAJIgOAJIgSAIIgVAJIgUAHIgMACIgkADMh6rAAAgEhAqgAYIAAgBIAAgJIADgJIADgJIAAgJIADgJIADgIIAGgJIADgJIAGgJIADgJIAJgJIAGgJIAFgIIAJgJIAJgJIAMgJIAMgJIAMgJIARgIIAYgJIAVgHIALgCIAkAAIAAgDMB6rAAAIAkADIAMACIAUAHIAVAJIASAIIAOAJIAMAJIAMAJIAJAJIAGAJIAJAIIAGAJIAFAJIAGAJIADAJIAGAJIADAJIADAIIADAJIADAJIADAJIAAAJIADAJIAAABg',
      );
    this.shape.setTransform(0.175, 0);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ1,
    new cjs.Rectangle(-413.7, -21.5, 827.8, 43.1),
    null,
  );
  (lib.lights = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.instance = new lib.Mesh_12_0();
    this.instance.parent = this;
    this.instance.setTransform(-8.55, -31.5, 0.9998, 0.9998, 144.7532);
    this.instance_1 = new lib.Mesh_13_0();
    this.instance_1.parent = this;
    this.instance_1.setTransform(-45, -68.35, 0.9998, 0.9998, 144.7532);
    this.instance_2 = new lib.Mesh_14_0();
    this.instance_2.parent = this;
    this.instance_2.setTransform(-11.25, -68.95, 0.9998, 0.9998, 144.7532);
    this.instance_3 = new lib.Mesh_15_0();
    this.instance_3.parent = this;
    this.instance_3.setTransform(-3.05, 15.95, 0.9998, 0.9998, 144.7532);
    this.instance_4 = new lib.Mesh_16_0();
    this.instance_4.parent = this;
    this.instance_4.setTransform(-33.5, 10.7, 0.9998, 0.9998, 144.7532);
    this.instance_5 = new lib.Mesh_17_0();
    this.instance_5.parent = this;
    this.instance_5.setTransform(-101.65, 1.25, 0.9998, 0.9998, 144.7532);
    this.instance_6 = new lib.Mesh_72();
    this.instance_6.parent = this;
    this.instance_6.setTransform(-5.65, -0.7, 0.9996, 0.9996, 144.7543);
    this.instance_7 = new lib.Mesh_1_33();
    this.instance_7.parent = this;
    this.instance_7.setTransform(-3.7, -2.1, 0.9996, 0.9996, 144.7543);
    this.instance_8 = new lib.Mesh_71();
    this.instance_8.parent = this;
    this.instance_8.setTransform(-10.45, 9.4, 0.9996, 0.9996, 144.7543);
    this.instance_9 = new lib.Mesh_1_32();
    this.instance_9.parent = this;
    this.instance_9.setTransform(-7.6, 9.1, 0.9996, 0.9996, 144.7543);
    this.instance_10 = new lib.Mesh_18_0();
    this.instance_10.parent = this;
    this.instance_10.setTransform(-10.25, 17.25, 0.9998, 0.9998, 144.7532);
    this.instance_11 = new lib.Mesh_70();
    this.instance_11.parent = this;
    this.instance_11.setTransform(-6.05, -7.35, 0.9996, 0.9996, 144.7543);
    this.instance_12 = new lib.Mesh_1_31();
    this.instance_12.parent = this;
    this.instance_12.setTransform(-1.95, -8.2, 0.9996, 0.9996, 144.7543);
    this.instance_13 = new lib.Mesh_69();
    this.instance_13.parent = this;
    this.instance_13.setTransform(55.4, -29.55, 0.9996, 0.9996, 144.7543);
    this.instance_14 = new lib.Mesh_1_30();
    this.instance_14.parent = this;
    this.instance_14.setTransform(55.6, -26.2, 0.9996, 0.9996, 144.7543);
    this.instance_15 = new lib.Mesh_19_0();
    this.instance_15.parent = this;
    this.instance_15.setTransform(-155.95, 14.15, 0.9998, 0.9998, 144.7532);
    this.instance_16 = new lib.Mesh_20_0();
    this.instance_16.parent = this;
    this.instance_16.setTransform(-89.15, -49.45, 0.9998, 0.9998, 144.7532);
    this.instance_17 = new lib.Mesh_21_0();
    this.instance_17.parent = this;
    this.instance_17.setTransform(-86.4, -49.3, 0.9998, 0.9998, 144.7532);
    this.instance_18 = new lib.Mesh_68();
    this.instance_18.parent = this;
    this.instance_18.setTransform(-29.75, 58.2, 0.9996, 0.9996, 144.7543);
    this.instance_19 = new lib.Mesh_1_29();
    this.instance_19.parent = this;
    this.instance_19.setTransform(-30.7, 55.6, 0.9996, 0.9996, 144.7543);
    this.instance_20 = new lib.Mesh_22_0();
    this.instance_20.parent = this;
    this.instance_20.setTransform(-45.65, 18.5, 0.9998, 0.9998, 144.7532);
    this.instance_21 = new lib.Mesh_67();
    this.instance_21.parent = this;
    this.instance_21.setTransform(-44.3, -48.55, 0.9996, 0.9996, 144.7543);
    this.instance_22 = new lib.Mesh_1_28();
    this.instance_22.parent = this;
    this.instance_22.setTransform(-41.5, -50.8, 0.9996, 0.9996, 144.7543);
    this.instance_23 = new lib.Mesh_66();
    this.instance_23.parent = this;
    this.instance_23.setTransform(3.4, -51.6, 0.9996, 0.9996, 144.7543);
    this.instance_24 = new lib.Mesh_23_0();
    this.instance_24.parent = this;
    this.instance_24.setTransform(4.7, -78.45, 0.9998, 0.9998, 144.7532);
    this.instance_25 = new lib.Mesh_65();
    this.instance_25.parent = this;
    this.instance_25.setTransform(-91.55, 43.6, 0.9996, 0.9996, 144.7543);
    this.instance_26 = new lib.Mesh_1_27();
    this.instance_26.parent = this;
    this.instance_26.setTransform(-90.15, 44.1, 0.9996, 0.9996, 144.7543);
    this.instance_27 = new lib.Mesh_63();
    this.instance_27.parent = this;
    this.instance_27.setTransform(-102.65, 22, 0.9996, 0.9996, 144.7543);
    this.instance_28 = new lib.Mesh_1_25();
    this.instance_28.parent = this;
    this.instance_28.setTransform(-99.35, 20.1, 0.9996, 0.9996, 144.7543);
    this.instance_29 = new lib.Mesh_27();
    this.instance_29.parent = this;
    this.instance_29.setTransform(-80.8, 6.5, 0.9996, 0.9996, 144.7543);
    this.instance_30 = new lib.Mesh_1_24();
    this.instance_30.parent = this;
    this.instance_30.setTransform(-71.1, 7.75, 0.9996, 0.9996, 144.7543);
    this.instance_31 = new lib.Mesh_31();
    this.instance_31.parent = this;
    this.instance_31.setTransform(-31.9, 25.8, 0.9998, 0.9998, 144.7532);
    this.instance_32 = new lib.Mesh_32();
    this.instance_32.parent = this;
    this.instance_32.setTransform(-184.45, -19.9, 0.9998, 0.9998, 144.7532);
    this.instance_33 = new lib.Mesh_20();
    this.instance_33.parent = this;
    this.instance_33.setTransform(-50, -110.6, 0.9996, 0.9996, 144.7543);
    this.instance_34 = new lib.Mesh_1_17();
    this.instance_34.parent = this;
    this.instance_34.setTransform(-48.2, -107.7, 0.9996, 0.9996, 144.7543);
    this.instance_35 = new lib.Mesh_33();
    this.instance_35.parent = this;
    this.instance_35.setTransform(-83.85, -7.4, 0.9998, 0.9998, 144.7532);
    this.instance_36 = new lib.Mesh_19();
    this.instance_36.parent = this;
    this.instance_36.setTransform(-120.7, 59.8, 0.9996, 0.9996, 144.7543);
    this.instance_37 = new lib.Mesh_1_16();
    this.instance_37.parent = this;
    this.instance_37.setTransform(-118.5, 60.3, 0.9996, 0.9996, 144.7543);
    this.instance_38 = new lib.Mesh_18();
    this.instance_38.parent = this;
    this.instance_38.setTransform(-157.3, -15.9, 0.9996, 0.9996, 144.7543);
    this.instance_39 = new lib.Mesh_1_15();
    this.instance_39.parent = this;
    this.instance_39.setTransform(-154.5, -16.55, 0.9996, 0.9996, 144.7543);
    this.instance_40 = new lib.Mesh_15();
    this.instance_40.parent = this;
    this.instance_40.setTransform(-13.55, 15.45, 0.9996, 0.9996, 144.7543);
    this.instance_41 = new lib.Mesh_1_13();
    this.instance_41.parent = this;
    this.instance_41.setTransform(-8.95, 15.9, 0.9996, 0.9996, 144.7543);
    this.instance_42 = new lib.Mesh_14();
    this.instance_42.parent = this;
    this.instance_42.setTransform(-22.25, 44.55, 0.9996, 0.9996, 144.7543);
    this.instance_43 = new lib.Mesh_1_12();
    this.instance_43.parent = this;
    this.instance_43.setTransform(-20.9, 46.2, 0.9996, 0.9996, 144.7543);
    this.instance_44 = new lib.Mesh_39();
    this.instance_44.parent = this;
    this.instance_44.setTransform(-39.3, 7.1, 0.9998, 0.9998, 144.7532);
    this.instance_45 = new lib.Mesh_40();
    this.instance_45.parent = this;
    this.instance_45.setTransform(-40.15, 7.8, 0.9998, 0.9998, 144.7532);
    this.instance_46 = new lib.Mesh_56();
    this.instance_46.parent = this;
    this.instance_46.setTransform(-66, -94.1, 0.9998, 0.9998, 144.7532);
    this.instance_47 = new lib.Mesh_60();
    this.instance_47.parent = this;
    this.instance_47.setTransform(10.6, 8.75, 0.9998, 0.9998, 144.7532);
    this.instance_48 = new lib.Mesh_0();
    this.instance_48.parent = this;
    this.instance_48.setTransform(-48.05, 47.2, 0.9996, 0.9996, 144.7543);
    this.instance_49 = new lib.Mesh_61();
    this.instance_49.parent = this;
    this.instance_49.setTransform(23.45, 1.7, 0.9998, 0.9998, 144.7532);
    this.instance_50 = new lib.Mesh();
    this.instance_50.parent = this;
    this.instance_50.setTransform(-133.65, -7, 0.9996, 0.9996, 144.7543);
    this.instance_51 = new lib.Mesh_1();
    this.instance_51.parent = this;
    this.instance_51.setTransform(-129.95, -5.95, 0.9996, 0.9996, 144.7543);
    this.instance_52 = new lib.Mesh_12_0();
    this.instance_52.parent = this;
    this.instance_52.setTransform(13.55, 62.15, 0.9998, 0.9998, -50.2453);
    this.instance_53 = new lib.Mesh_13_0();
    this.instance_53.parent = this;
    this.instance_53.setTransform(58.4, 88.3, 0.9998, 0.9998, -50.2453);
    this.instance_54 = new lib.Mesh_14_0();
    this.instance_54.parent = this;
    this.instance_54.setTransform(26, 97.7, 0.9998, 0.9998, -50.2453);
    this.instance_55 = new lib.Mesh_15_0();
    this.instance_55.parent = this;
    this.instance_55.setTransform(-3.65, 17.45, 0.9998, 0.9998, -50.2453);
    this.instance_56 = new lib.Mesh_16_0();
    this.instance_56.parent = this;
    this.instance_56.setTransform(26.8, 14.7, 0.9998, 0.9998, -50.2453);
    this.instance_57 = new lib.Mesh_17_0();
    this.instance_57.parent = this;
    this.instance_57.setTransform(95.1, 6.3, 0.9998, 0.9998, -50.2453);
    this.instance_58 = new lib.Mesh_72();
    this.instance_58.parent = this;
    this.instance_58.setTransform(2.9, 32.95, 0.9996, 0.9996, -50.2455);
    this.instance_59 = new lib.Mesh_1_33();
    this.instance_59.parent = this;
    this.instance_59.setTransform(1.25, 34.85, 0.9996, 0.9996, -50.2455);
    this.instance_60 = new lib.Mesh_71();
    this.instance_60.parent = this;
    this.instance_60.setTransform(4.95, 21.65, 0.9996, 0.9996, -50.2455);
    this.instance_61 = new lib.Mesh_1_32();
    this.instance_61.parent = this;
    this.instance_61.setTransform(2.25, 22.7, 0.9996, 0.9996, -50.2455);
    this.instance_62 = new lib.Mesh_18_0();
    this.instance_62.parent = this;
    this.instance_62.setTransform(2.6, 14.4, 0.9998, 0.9998, -50.2453);
    this.instance_63 = new lib.Mesh_70();
    this.instance_63.parent = this;
    this.instance_63.setTransform(5, 39.5, 0.9996, 0.9996, -50.2455);
    this.instance_64 = new lib.Mesh_1_31();
    this.instance_64.parent = this;
    this.instance_64.setTransform(1.15, 41.35, 0.9996, 0.9996, -50.2455);
    this.instance_65 = new lib.Mesh_69();
    this.instance_65.parent = this;
    this.instance_65.setTransform(-48.55, 76.9, 0.9996, 0.9996, -50.2455);
    this.instance_66 = new lib.Mesh_1_30();
    this.instance_66.parent = this;
    this.instance_66.setTransform(-49.6, 73.55, 0.9996, 0.9996, -50.2455);
    this.instance_67 = new lib.Mesh_19_0();
    this.instance_67.parent = this;
    this.instance_67.setTransform(144.2, -20.15, 0.9998, 0.9998, -50.2453);
    this.instance_68 = new lib.Mesh_20_0();
    this.instance_68.parent = this;
    this.instance_68.setTransform(96.1, 58.6, 0.9998, 0.9998, -50.2453);
    this.instance_69 = new lib.Mesh_21_0();
    this.instance_69.parent = this;
    this.instance_69.setTransform(93.35, 59.25, 0.9998, 0.9998, -50.2453);
    this.instance_70 = new lib.Mesh_68();
    this.instance_70.parent = this;
    this.instance_70.setTransform(10.7, -30, 0.9996, 0.9996, -50.2455);
    this.instance_71 = new lib.Mesh_1_29();
    this.instance_71.parent = this;
    this.instance_71.setTransform(12.5, -27.7, 0.9996, 0.9996, -50.2455);
    this.instance_72 = new lib.Mesh_22_0();
    this.instance_72.parent = this;
    this.instance_72.setTransform(36.5, 3.95, 0.9998, 0.9998, -50.2453);
    this.instance_73 = new lib.Mesh_67();
    this.instance_73.parent = this;
    this.instance_73.setTransform(52.6, 69.3, 0.9996, 0.9996, -50.2455);
    this.instance_74 = new lib.Mesh_1_28();
    this.instance_74.parent = this;
    this.instance_74.setTransform(50.5, 72.2, 0.9996, 0.9996, -50.2455);
    this.instance_75 = new lib.Mesh_66();
    this.instance_75.parent = this;
    this.instance_75.setTransform(6.85, 84.65, 0.9996, 0.9996, -50.2455);
    this.instance_76 = new lib.Mesh_23_0();
    this.instance_76.parent = this;
    this.instance_76.setTransform(12.75, 110.95, 0.9998, 0.9998, -50.2453);
    this.instance_77 = new lib.Mesh_65();
    this.instance_77.parent = this;
    this.instance_77.setTransform(74.25, -31.85, 0.9996, 0.9996, -50.2455);
    this.instance_78 = new lib.Mesh_1_27();
    this.instance_78.parent = this;
    this.instance_78.setTransform(72.7, -32.1, 0.9996, 0.9996, -50.2455);
    this.instance_79 = new lib.Mesh_63();
    this.instance_79.parent = this;
    this.instance_79.setTransform(90.7, -13.9, 0.9996, 0.9996, -50.2455);
    this.instance_80 = new lib.Mesh_1_25();
    this.instance_80.parent = this;
    this.instance_80.setTransform(87.95, -11.35, 0.9996, 0.9996, -50.2455);
    this.instance_81 = new lib.Mesh_27();
    this.instance_81.parent = this;
    this.instance_81.setTransform(73.45, 6.3, 0.9996, 0.9996, -50.2455);
    this.instance_82 = new lib.Mesh_1_24();
    this.instance_82.parent = this;
    this.instance_82.setTransform(63.7, 7.6, 0.9996, 0.9996, -50.2455);
    this.instance_83 = new lib.Mesh_31();
    this.instance_83.parent = this;
    this.instance_83.setTransform(21.35, 0.5, 0.9998, 0.9998, -50.2453);
    this.instance_84 = new lib.Mesh_32();
    this.instance_84.parent = this;
    this.instance_84.setTransform(180.65, 5.45, 0.9998, 0.9998, -50.2453);
    this.instance_85 = new lib.Mesh_20();
    this.instance_85.parent = this;
    this.instance_85.setTransform(74.05, 127.7, 0.9996, 0.9996, -50.2455);
    this.instance_86 = new lib.Mesh_1_17();
    this.instance_86.parent = this;
    this.instance_86.setTransform(71.65, 125.5, 0.9996, 0.9996, -50.2455);
    this.instance_87 = new lib.Mesh_33();
    this.instance_87.parent = this;
    this.instance_87.setTransform(80.1, 19.35, 0.9998, 0.9998, -50.2453);
    this.instance_88 = new lib.Mesh_19();
    this.instance_88.parent = this;
    this.instance_88.setTransform(98.1, -55.15, 0.9996, 0.9996, -50.2455);
    this.instance_89 = new lib.Mesh_1_16();
    this.instance_89.parent = this;
    this.instance_89.setTransform(96, -55.25, 0.9996, 0.9996, -50.2455);
    this.instance_90 = new lib.Mesh_18();
    this.instance_90.parent = this;
    this.instance_90.setTransform(153.4, 8.45, 0.9996, 0.9996, -50.2455);
    this.instance_91 = new lib.Mesh_1_15();
    this.instance_91.parent = this;
    this.instance_91.setTransform(150.85, 9.95, 0.9996, 0.9996, -50.2455);
    this.instance_92 = new lib.Mesh_15();
    this.instance_92.parent = this;
    this.instance_92.setTransform(6, 15, 0.9996, 0.9996, -50.2455);
    this.instance_93 = new lib.Mesh_1_13();
    this.instance_93.parent = this;
    this.instance_93.setTransform(1.85, 15.75, 0.9996, 0.9996, -50.2455);
    this.instance_94 = new lib.Mesh_14();
    this.instance_94.parent = this;
    this.instance_94.setTransform(7.1, -14.85, 0.9996, 0.9996, -50.2455);
    this.instance_95 = new lib.Mesh_1_12();
    this.instance_95.parent = this;
    this.instance_95.setTransform(5.4, -16.15, 0.9996, 0.9996, -50.2455);
    this.instance_96 = new lib.Mesh_39();
    this.instance_96.parent = this;
    this.instance_96.setTransform(33.35, 16.7, 0.9998, 0.9998, -50.2453);
    this.instance_97 = new lib.Mesh_40();
    this.instance_97.parent = this;
    this.instance_97.setTransform(33.95, 15.9, 0.9998, 0.9998, -50.2453);
    this.instance_98 = new lib.Mesh_56();
    this.instance_98.parent = this;
    this.instance_98.setTransform(85.35, 107.8, 0.9998, 0.9998, -50.2453);
    this.instance_99 = new lib.Mesh_60();
    this.instance_99.parent = this;
    this.instance_99.setTransform(-15.3, 28.15, 0.9998, 0.9998, -50.2453);
    this.instance_100 = new lib.Mesh_0();
    this.instance_100.parent = this;
    this.instance_100.setTransform(31.35, -24.35, 0.9996, 0.9996, -50.2455);
    this.instance_101 = new lib.Mesh_61();
    this.instance_101.parent = this;
    this.instance_101.setTransform(-25.85, 38.1, 0.9998, 0.9998, -50.2453);
    this.instance_102 = new lib.Mesh();
    this.instance_102.parent = this;
    this.instance_102.setTransform(128.2, 6.15, 0.9996, 0.9996, -50.2455);
    this.instance_103 = new lib.Mesh_1();
    this.instance_103.parent = this;
    this.instance_103.setTransform(124.35, 6, 0.9996, 0.9996, -50.2455);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_103 },
            { t: this.instance_102 },
            { t: this.instance_101 },
            { t: this.instance_100 },
            { t: this.instance_99 },
            { t: this.instance_98 },
            { t: this.instance_97 },
            { t: this.instance_96 },
            { t: this.instance_95 },
            { t: this.instance_94 },
            { t: this.instance_93 },
            { t: this.instance_92 },
            { t: this.instance_91 },
            { t: this.instance_90 },
            { t: this.instance_89 },
            { t: this.instance_88 },
            { t: this.instance_87 },
            { t: this.instance_86 },
            { t: this.instance_85 },
            { t: this.instance_84 },
            { t: this.instance_83 },
            { t: this.instance_82 },
            { t: this.instance_81 },
            { t: this.instance_80 },
            { t: this.instance_79 },
            { t: this.instance_78 },
            { t: this.instance_77 },
            { t: this.instance_76 },
            { t: this.instance_75 },
            { t: this.instance_74 },
            { t: this.instance_73 },
            { t: this.instance_72 },
            { t: this.instance_71 },
            { t: this.instance_70 },
            { t: this.instance_69 },
            { t: this.instance_68 },
            { t: this.instance_67 },
            { t: this.instance_66 },
            { t: this.instance_65 },
            { t: this.instance_64 },
            { t: this.instance_63 },
            { t: this.instance_62 },
            { t: this.instance_61 },
            { t: this.instance_60 },
            { t: this.instance_59 },
            { t: this.instance_58 },
            { t: this.instance_57 },
            { t: this.instance_56 },
            { t: this.instance_55 },
            { t: this.instance_54 },
            { t: this.instance_53 },
            { t: this.instance_52 },
            { t: this.instance_51 },
            { t: this.instance_50 },
            { t: this.instance_49 },
            { t: this.instance_48 },
            { t: this.instance_47 },
            { t: this.instance_46 },
            { t: this.instance_45 },
            { t: this.instance_44 },
            { t: this.instance_43 },
            { t: this.instance_42 },
            { t: this.instance_41 },
            { t: this.instance_40 },
            { t: this.instance_39 },
            { t: this.instance_38 },
            { t: this.instance_37 },
            { t: this.instance_36 },
            { t: this.instance_35 },
            { t: this.instance_34 },
            { t: this.instance_33 },
            { t: this.instance_32 },
            { t: this.instance_31 },
            { t: this.instance_30 },
            { t: this.instance_29 },
            { t: this.instance_28 },
            { t: this.instance_27 },
            { t: this.instance_26 },
            { t: this.instance_25 },
            { t: this.instance_24 },
            { t: this.instance_23 },
            { t: this.instance_22 },
            { t: this.instance_21 },
            { t: this.instance_20 },
            { t: this.instance_19 },
            { t: this.instance_18 },
            { t: this.instance_17 },
            { t: this.instance_16 },
            { t: this.instance_15 },
            { t: this.instance_14 },
            { t: this.instance_13 },
            { t: this.instance_12 },
            { t: this.instance_11 },
            { t: this.instance_10 },
            { t: this.instance_9 },
            { t: this.instance_8 },
            { t: this.instance_7 },
            { t: this.instance_6 },
            { t: this.instance_5 },
            { t: this.instance_4 },
            { t: this.instance_3 },
            { t: this.instance_2 },
            { t: this.instance_1 },
            { t: this.instance },
          ],
        })
        .wait(1),
    );
  }).prototype = getMCSymbolPrototype(
    lib.lights,
    new cjs.Rectangle(-208.7, -179.9, 417.5, 360),
    null,
  );
  (lib.Анимация21 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgoAWIAAgUQAOgPADgYQAGggAkACQAdARgIA0IgBAKQgUAegdAUQgJAGgHAAQgRAAADgug',
      );
    this.shape.setTransform(0.0117, -0.0442);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4.1, -6.8, 8.3, 13.6);
  (lib.Анимация20 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AAWAzQgCAAAAgFQg5gSgLg9IgBgKQAtgbAbAiIAMAQQAPAUAAAkQADAUgOAAQgHAAgKgFg',
      );
    this.shape.setTransform(-0.0226, 0.0027);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-5, -5.6, 10, 11.2);
  (lib.Анимация19 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgxAfQgFAAgDgCQgOgKACgbQAegKAcgOQAYgNAvAHQAbAwgvATQgFACgFAAQAAAFgBABQgUAFgQAAQgZAAgRgLg',
      );
    this.shape.setTransform(0.0152, -0.0181);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-7, -4.1, 14, 8.3);
  (lib.Анимация18 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p('AgngWIAAgKQAsgSAcAuQAJAOgCAbIgMABQhAAAgDg8g');
    this.shape.setTransform(-0.0228, 0.0117);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3.8, 8, 7.6);
  (lib.Анимация17 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgSA+QgbgNAGgvIABgJQAOgZATgWQAMgQAeAMQAEABAAAKQABAqgQAYQgKAOgFATQgCAMgNAAQgGAAgIgCg',
      );
    this.shape.setTransform(0.0182, 0.0199);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4.1, -6.4, 8.2, 12.9);
  (lib.Анимация16 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AAQAtIgKAAQgtABAQg8IAKAAIAAgKIAAgKQAvgfgIBGIAAAKIABAJQAFAVgOAAIgCAAg',
      );
    this.shape.setTransform(-0.0282, -0.0057);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-2.8, -4.4, 5.6, 8.9);
  (lib.Анимация15 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p('AgaAaQAAgCgGAAQgNgegGgnIgBgKQBnAHACBmIgGAAIgTACQgoAAgOgeg');
    this.shape.setTransform(0, 0.0227);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-5.2, -5.5, 10.5, 11.1);
  (lib.Анимация14 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AgCAeQgFAAgDgCQgYgVgIgkQAZgTAVAWQADACAAAFQAqANgHASQgKAbgQAAQgJAAgJgJg',
      );
    this.shape.setTransform(0, 0.0167);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4.3, -3.8, 8.6, 7.699999999999999);
  (lib.Анимация12 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.instance = new lib.color_line94();
    this.instance.parent = this;
    this.instance.setTransform(
      202,
      -144.8,
      0.1157,
      0.1157,
      0,
      -10.7125,
      169.2875,
    );
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-240.9, -144.8, 481.9, 289.6);
  (lib.Анимация4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.instance = new lib.color_line94();
    this.instance.parent = this;
    this.instance.setTransform(-225.4, -104.75, 0.1157, 0.1157);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-225.4, -104.7, 450.8, 209.5);
  (lib.Анимация3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_2
    this.instance = new lib.color_line642();
    this.instance.parent = this;
    this.instance.setTransform(490, -207, 0.2763, 0.2763);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    // Слой_1
    this.instance_1 = new lib.color_line642();
    this.instance_1.parent = this;
    this.instance_1.setTransform(-2010, -207, 0.2763, 0.2763);
    this.instance_2 = new lib.color_line642();
    this.instance_2.parent = this;
    this.instance_2.setTransform(-756, 133.5, 0.2763, 0.2197, 0, 180, 0);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_2 }, { t: this.instance_1 }] })
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-2010, -207, 4011.3, 414.5);
  (lib.Символ15 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_2
    this.instance = new lib.Анимация20('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(-169.95, -222.1);
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ x: -204.95, y: -273.1 }, 29, cjs.Ease.quadOut)
        .to({ _off: true }, 1)
        .wait(30),
    );
    // Слой_3
    this.instance_1 = new lib.Анимация21('synched', 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(108.05, -257.7);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .to({ x: 134.85, y: -310.75 }, 29, cjs.Ease.quadOut)
        .to({ _off: true }, 1)
        .wait(30),
    );
    // Слой_4
    this.instance_2 = new lib.Анимация19('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(276.95, -35.6);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .to({ x: 322.15, y: -47.15 }, 29, cjs.Ease.quadOut)
        .to({ _off: true }, 1)
        .wait(30),
    );
    // Слой_5
    this.instance_3 = new lib.Анимация14('synched', 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(171.3, 130.45);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .to({ x: 237.7, y: 177.35 }, 59, cjs.Ease.quadOut)
        .wait(1),
    );
    // Слой_6
    this.instance_4 = new lib.Анимация15('synched', 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(169.25, 222.05);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .to({ x: 199.85, y: 257.9 }, 59, cjs.Ease.quadOut)
        .wait(1),
    );
    // Слой_7
    this.instance_5 = new lib.Анимация16('synched', 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(-27.55, 213.05);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .to({ x: -29.15, y: 290.05 }, 59, cjs.Ease.quadOut)
        .wait(1),
    );
    // Слой_8
    this.instance_6 = new lib.Анимация17('synched', 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(-108.1, 258.25);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .to({ x: -123.9, y: 300.9 }, 59, cjs.Ease.quadOut)
        .wait(1),
    );
    // Слой_9
    this.instance_7 = new lib.Анимация18('synched', 0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(-170.95, -130.25);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .to({ x: -219, y: -166.3 }, 59, cjs.Ease.quadOut)
        .wait(1),
    );
    // Слой_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#FFFFFF')
      .s()
      .p(
        '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',
      );
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-304, -317.5, 633.2, 624.9);
  (lib.Символ14копия = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.instance = new lib.Символ15();
    this.instance.parent = this;
    this.instance.setTransform(0, 0, 0.1965, 0.1965);
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ scaleX: 0.5299, scaleY: 0.5299 }, 7, cjs.Ease.quadOut)
        .to({ scaleX: 0.7012, scaleY: 0.7012, alpha: 0 }, 47, cjs.Ease.quadOut)
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-213.1, -210, 426.29999999999995, 420);
  (lib.Символ14 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.instance = new lib.Символ15();
    this.instance.parent = this;
    this.instance.setTransform(0, 0, 0.1965, 0.1965);
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ scaleX: 0.5299, scaleY: 0.5299 }, 7, cjs.Ease.quadOut)
        .to({ scaleX: 0.7012, scaleY: 0.7012, alpha: 0 }, 52, cjs.Ease.quadOut)
        .wait(1),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-213.1, -210, 426.29999999999995, 420);
  (lib.Символ6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.instance = new lib.Символ1();
    this.instance.parent = this;
    this.instance.shadow = new cjs.Shadow('#FFFFFF', 0, 0, 25);
    this.instance.filters = [new cjs.BlurFilter(22, 22, 1)];
    this.instance.cache(-416, -23, 832, 47);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ6,
    new cjs.Rectangle(-451.7, -59.5, 907, 122),
    null,
  );
  (lib.Символ5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Символ_3
    this.instance = new lib.Символ3();
    this.instance.parent = this;
    this.instance.setTransform(-256.5, 0, 0.3933, 0.2663);
    this.instance.filters = [new cjs.BlurFilter(19, 19, 1)];
    this.instance.cache(-78, -197, 156, 394);
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ scaleY: 0.5614, alpha: 0 }, 39)
        .wait(21),
    );
    // Символ_3
    this.instance_1 = new lib.Символ3();
    this.instance_1.parent = this;
    this.instance_1.setTransform(-365.45, 0, 0.3933, 0.2663);
    this.instance_1._off = true;
    this.instance_1.filters = [new cjs.BlurFilter(19, 19, 1)];
    this.instance_1.cache(-78, -197, 156, 394);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(5)
        .to({ _off: false }, 0)
        .to({ scaleY: 0.4983, alpha: 0 }, 39)
        .wait(16),
    );
    // Символ_3
    this.instance_2 = new lib.Символ3();
    this.instance_2.parent = this;
    this.instance_2.setTransform(-474.45, 0, 0.3933, 0.2663);
    this.instance_2.filters = [new cjs.BlurFilter(19, 19, 1)];
    this.instance_2.cache(-78, -197, 156, 394);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .to({ scaleY: 0.5618, alpha: 0 }, 39)
        .wait(21),
    );
    // Символ_3
    this.instance_3 = new lib.Символ3();
    this.instance_3.parent = this;
    this.instance_3.setTransform(-584.45, 0, 0.3933, 0.2663);
    this.instance_3._off = true;
    this.instance_3.filters = [new cjs.BlurFilter(19, 19, 1)];
    this.instance_3.cache(-78, -197, 156, 394);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(2)
        .to({ _off: false }, 0)
        .to({ scaleY: 0.4665, alpha: 0 }, 39)
        .wait(19),
    );
    // Символ_3
    this.instance_4 = new lib.Символ3();
    this.instance_4.parent = this;
    this.instance_4.setTransform(164, 0, 0.3933, 0.2663);
    this.instance_4._off = true;
    this.instance_4.filters = [new cjs.BlurFilter(19, 19, 1)];
    this.instance_4.cache(-78, -197, 156, 394);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(5)
        .to({ _off: false }, 0)
        .to({ scaleY: 0.6564, alpha: 0 }, 39)
        .wait(16),
    );
    // Символ_3
    this.instance_5 = new lib.Символ3();
    this.instance_5.parent = this;
    this.instance_5.setTransform(55.05, 0, 0.3933, 0.2663);
    this.instance_5._off = true;
    this.instance_5.filters = [new cjs.BlurFilter(19, 19, 1)];
    this.instance_5.cache(-78, -197, 156, 394);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(20)
        .to({ _off: false }, 0)
        .to({ scaleY: 0.4983, alpha: 0 }, 39)
        .wait(1),
    );
    // Символ_3
    this.instance_6 = new lib.Символ3();
    this.instance_6.parent = this;
    this.instance_6.setTransform(-53.95, 0, 0.3933, 0.2663);
    this.instance_6._off = true;
    this.instance_6.filters = [new cjs.BlurFilter(19, 19, 1)];
    this.instance_6.cache(-78, -197, 156, 394);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ scaleY: 0.5827, alpha: 0 }, 39)
        .wait(20),
    );
    // Символ_3
    this.instance_7 = new lib.Символ3();
    this.instance_7.parent = this;
    this.instance_7.setTransform(-163.95, 0, 0.3933, 0.2663);
    this.instance_7._off = true;
    this.instance_7.filters = [new cjs.BlurFilter(19, 19, 1)];
    this.instance_7.cache(-78, -197, 156, 394);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(13)
        .to({ _off: false }, 0)
        .to({ scaleY: 0.5086, alpha: 0 }, 39)
        .wait(8),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-623.2, -100.2, 833.4000000000001, 207);
  (lib.ball = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1___копия___копия
    this.instance = new lib.lights();
    this.instance.parent = this;
    this.instance.setTransform(0, -16.4, 1.2886, 1.2886, 120, 0, 0, -0.1, -0.4);
    this.instance.alpha = 0;
    this.instance._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(61)
        .to({ _off: false }, 0)
        .to({ scaleX: 1.198, scaleY: 1.3043, x: -0.15, alpha: 0.1406 }, 4)
        .to(
          {
            regY: -0.2,
            scaleX: 1.3147,
            scaleY: 1.3147,
            rotation: 125.001,
            x: 0.05,
            y: -16.25,
            alpha: 0,
          },
          9,
        )
        .wait(6),
    );
    // Слой_1___копия
    this.instance_1 = new lib.lights();
    this.instance_1.parent = this;
    this.instance_1.setTransform(
      0.05,
      -16.35,
      1.2886,
      1.2886,
      77.9996,
      0,
      0,
      0,
      -0.4,
    );
    this.instance_1.alpha = 0;
    this.instance_1._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(43)
        .to({ _off: false }, 0)
        .to(
          {
            regX: -0.1,
            scaleX: 1.3066,
            scaleY: 1.3066,
            rotation: 78.0003,
            x: -0.1,
            y: -16.45,
            alpha: 0.0781,
          },
          4,
        )
        .to(
          {
            regY: -0.2,
            scaleX: 1.3148,
            scaleY: 1.3148,
            rotation: 82.9995,
            x: -0.05,
            y: -16.3,
            alpha: 0,
          },
          9,
        )
        .wait(24),
    );
    // Слой_1___копия
    this.instance_2 = new lib.lights();
    this.instance_2.parent = this;
    this.instance_2.setTransform(
      -0.05,
      -16.5,
      1.2887,
      1.2887,
      39.9997,
      0,
      0,
      -0.1,
      -0.4,
    );
    this.instance_2.alpha = 0;
    this.instance_2._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(18)
        .to({ _off: false }, 0)
        .to(
          {
            scaleX: 1.3065,
            scaleY: 1.3065,
            rotation: 40.0004,
            x: -0.1,
            y: -16.45,
            alpha: 0.1211,
          },
          4,
        )
        .to(
          {
            regY: -0.1,
            scaleX: 1.3148,
            scaleY: 1.3148,
            rotation: 45.1937,
            y: -16.25,
            alpha: 0,
          },
          9,
        )
        .to({ _off: true }, 6)
        .wait(43),
    );
    // Слой_1
    this.instance_3 = new lib.lights();
    this.instance_3.parent = this;
    this.instance_3.setTransform(
      -0.15,
      -16.45,
      1.2887,
      1.2887,
      -0.5054,
      0,
      0,
      -0.1,
      -0.4,
    );
    this.instance_3.alpha = 0;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .to(
          { scaleX: 1.3066, scaleY: 1.3066, rotation: -1.9081, alpha: 0.0781 },
          4,
        )
        .to(
          {
            regX: 0,
            regY: -0.1,
            scaleX: 1.3149,
            scaleY: 1.3149,
            rotation: 3.5036,
            x: 0,
            y: -16.15,
            alpha: 0,
          },
          9,
          cjs.Ease.quadOut,
        )
        .to({ _off: true }, 24)
        .wait(43),
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-343.9, -344, 667.7, 680);
  (lib.Анимация8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_1
    this.instance = new lib.Символ10();
    this.instance.parent = this;
    this.instance.alpha = 0.1289;
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-188.1, -188.1, 376.2, 376.2);
  (lib.ball_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_4
    this.instance_4 = new lib.Анимация8('synched', 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(-0.9, -0.9);
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4).to({ rotation: 360 }, 59).wait(1),
    );
    // Слой_2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .rf(['#6208C0', 'rgba(0,0,0,0)'], [0, 1], 0, 0, 0, 0, 0, 130.2)
      .s()
      .p(
        'AuIOJQl3l3AAoSQAAoRF3l3QF3l3IRAAQISAAF3F3QF3F3AAIRQAAISl3F3Ql3F3oSAAQoRAAl3l3g',
      );
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));
    // Слой_3
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .rf(
        ['#520BA2', 'rgba(102,0,204,0.969)', 'rgba(0,0,0,0)'],
        [0, 0.451, 1],
        0,
        0,
        0,
        0,
        0,
        160.6,
      )
      .s()
      .p(
        'AxcRdQnOnPAAqOQAAqNHOnPQHPnOKNAAQKOAAHPHOQHOHPAAKNQAAKOnOHPQnPHOqOAAQqNAAnPnOg',
      );
    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(60));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-266.3, -266.3, 531, 531);
  // stage content:
  (lib.p7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});
    // Слой_5
    this.instance = new lib.Символ3();
    this.instance.parent = this;
    this.instance.setTransform(617.75, 378.1);
    this.instance.filters = [new cjs.BlurFilter(52, 52, 1)];
    this.instance.cache(-78, -197, 156, 394);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));
    // Слой_7 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('EgxFAR+MAAAgj7MBiLAAAMAAAAj7g');
    mask.setTransform(303.575, 385.225);
    // Слой_3
    this.instance_1 = new lib.Символ6();
    this.instance_1.parent = this;
    this.instance_1.setTransform(396, 379.95);
    var maskedShapeInstanceList = [this.instance_1];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));
    // Слой_2
    this.instance_2 = new lib.Анимация3('synched', 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(-1150.2, 395.2);
    var maskedShapeInstanceList = [this.instance_2];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .to({ regX: 0.1, regY: 0.1, scaleY: 0.9998, x: 1345.5, y: 395.25 }, 59)
        .wait(1),
    );
    // Слой_4
    this.instance_3 = new lib.Символ2();
    this.instance_3.parent = this;
    this.instance_3.setTransform(
      397.75,
      375.8,
      0.8722,
      0.5764,
      0,
      0,
      0,
      0.1,
      0,
    );
    this.instance_3.alpha = 0.4219;
    this.instance_3.filters = [new cjs.BlurFilter(129, 129, 1)];
    this.instance_3.cache(-401, -83, 802, 166);
    var maskedShapeInstanceList = [this.instance_3];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));
    // Слой_16___копия___копия
    this.instance_4 = new lib.Анимация12('synched', 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(545.95, 382.75, 0.247, 0.247);
    this.instance_4._off = true;
    this.instance_4.filters = [
      new cjs.ColorFilter(0, 0, 0, 1, 116, 63, 172, 0),
    ];
    this.instance_4.cache(-243, -147, 486, 294);
    var maskedShapeInstanceList = [this.instance_4];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(40)
        .to({ _off: false }, 0)
        .to(
          {
            regX: 0.1,
            scaleX: 0.9388,
            scaleY: 0.9388,
            x: 505.4,
            y: 388.1,
            alpha: 0,
          },
          19,
        )
        .wait(1),
    );
    // Слой_16___копия
    this.instance_5 = new lib.Анимация12('synched', 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(545.95, 382.75, 0.247, 0.247);
    this.instance_5._off = true;
    this.instance_5.filters = [
      new cjs.ColorFilter(0, 0, 0, 1, 116, 63, 172, 0),
    ];
    this.instance_5.cache(-243, -147, 486, 294);
    var maskedShapeInstanceList = [this.instance_5];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(14)
        .to({ _off: false }, 0)
        .to(
          {
            regX: 0.1,
            scaleX: 0.9388,
            scaleY: 0.9388,
            x: 505.4,
            y: 388.1,
            alpha: 0,
          },
          19,
        )
        .wait(27),
    );
    // Слой_16
    this.instance_6 = new lib.Анимация12('synched', 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(545.95, 382.75, 0.247, 0.247);
    this.instance_6.filters = [
      new cjs.ColorFilter(0, 0, 0, 1, 116, 63, 172, 0),
    ];
    this.instance_6.cache(-243, -147, 486, 294);
    var maskedShapeInstanceList = [this.instance_6];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .to({ scaleX: 1, scaleY: 1, x: 505.3, y: 415, alpha: 0 }, 19)
        .wait(41),
    );
    // Слой_8
    this.instance_7 = new lib.Анимация4('synched', 0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(593.5, 383.9, 0.5215, 0.5215, 0, 0, 0, 0.1, 0);
    this.instance_7.alpha = 0.2109;
    var maskedShapeInstanceList = [this.instance_7];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .to(
          {
            regX: 0,
            scaleX: 0.9567,
            scaleY: 0.8415,
            x: 433.4,
            y: 381.75,
            alpha: 0.6484,
          },
          15,
        )
        .to(
          {
            regY: 0.1,
            scaleX: 1.1301,
            scaleY: 0.994,
            x: 397.85,
            y: 381.85,
            alpha: 0,
          },
          14,
        )
        .to(
          {
            regX: 0.1,
            regY: 0,
            scaleX: 0.5215,
            scaleY: 0.5215,
            x: 593.5,
            y: 383.9,
            alpha: 0.2109,
          },
          1,
        )
        .to(
          {
            regX: 0,
            scaleX: 0.9567,
            scaleY: 0.8415,
            x: 433.4,
            y: 381.75,
            alpha: 0.6484,
          },
          15,
        )
        .to(
          {
            regY: 0.1,
            scaleX: 1.1301,
            scaleY: 0.994,
            x: 397.85,
            y: 381.85,
            alpha: 0,
          },
          14,
        )
        .wait(1),
    );
    // Слой_6
    this.instance_8 = new lib.Символ5();
    this.instance_8.parent = this;
    this.instance_8.setTransform(266.75, 378.1);
    var maskedShapeInstanceList = [this.instance_8];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .to({ x: 487.2, y: 382.35 }, 14)
        .to({ x: 266.75, y: 378.1 }, 1)
        .to({ x: 489.25, y: 382.35 }, 14)
        .to({ x: 266.75, y: 378.1 }, 1)
        .to({ x: 489.25, y: 382.35 }, 14)
        .to({ x: 266.75, y: 378.1 }, 1)
        .to({ x: 489.25, y: 382.35 }, 14)
        .wait(1),
    );
    // s3
    this.instance_9 = new lib.s1копия();
    this.instance_9.parent = this;
    this.instance_9.setTransform(212.95, 424.95);
    this.instance_9.alpha = 0;
    var maskedShapeInstanceList = [this.instance_9];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .to({ x: 264.15, alpha: 1 }, 13)
        .to({ x: 327.15, alpha: 0 }, 16)
        .to({ x: 212.95 }, 1)
        .to({ x: 264.15, alpha: 1 }, 13)
        .to({ x: 327.15, alpha: 0 }, 16)
        .wait(1),
    );
    // s2
    this.instance_10 = new lib.s1();
    this.instance_10.parent = this;
    this.instance_10.setTransform(387.1, 445.3);
    this.instance_10.alpha = 0;
    var maskedShapeInstanceList = [this.instance_10];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .to({ x: 450.15, alpha: 1 }, 9)
        .to({ x: 590.25 }, 20)
        .to({ x: 387.1, alpha: 0 }, 1)
        .to({ x: 450.15, alpha: 1 }, 9)
        .to({ x: 590.25 }, 20)
        .wait(1),
    );
    // s1
    this.instance_11 = new lib.s1();
    this.instance_11.parent = this;
    this.instance_11.setTransform(193.35, 301.8);
    this.instance_11.alpha = 0;
    var maskedShapeInstanceList = [this.instance_11];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .to({ x: 251, alpha: 1 }, 4)
        .to({ x: 611.3 }, 25)
        .to({ x: 193.35, alpha: 0 }, 1)
        .to({ x: 251, alpha: 1 }, 4)
        .to({ x: 611.3 }, 25)
        .wait(1),
    );
    // Слой_17
    this.instance_12 = new lib.Символ14копия();
    this.instance_12.parent = this;
    this.instance_12.setTransform(614.3, 372.2, 0.7594, 1.3834, 180);
    this.instance_12._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_12).wait(4).to({ _off: false }, 0).wait(56),
    );
    // Слой_11
    this.instance_13 = new lib.Символ14();
    this.instance_13.parent = this;
    this.instance_13.setTransform(614.2, 372.2, 0.7594, 1.3834);
    this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60));
    // lights2
    this.instance_14 = new lib.ball();
    this.instance_14.parent = this;
    this.instance_14.setTransform(
      636.45,
      380.4,
      0.5025,
      1.2288,
      180,
      0,
      0,
      0.8,
      0.1,
    );
    this.instance_14._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_14).wait(10).to({ _off: false }, 0).wait(50),
    );
    // light1
    this.instance_15 = new lib.ball();
    this.instance_15.parent = this;
    this.instance_15.setTransform(
      636.45,
      380.25,
      0.5025,
      1.2288,
      0,
      0,
      0,
      0.7,
      0.1,
    );
    this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60));
    // Слой_9
    this.instance_16 = new lib.ball_1();
    this.instance_16.parent = this;
    this.instance_16.setTransform(
      630.1,
      376.25,
      1.0096,
      1.8487,
      0,
      0,
      0,
      0.8,
      0.4,
    );
    this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(389.4, 426.1, 428.80000000000007, 295.4);
  // library properties:
  lib.properties = {
    id: '92901EF004C3AC418127070A73A08DF9',
    width: 800,
    height: 800,
    fps: 30,
    color: '#000000',
    opacity: 1.0,
    manifest: [{ src: '/p7_atlas_.png', id: 'p7_atlas_' }],
    preloads: [],
  };
  // bootstrap callback support:
  (lib.Stage = function (canvas) {
    cjs.Stage.call(this, canvas);
  }).prototype = p = new cjs.Stage();
  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };
  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };
  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }
  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };
  an.compositions = an.compositions || {};
  an.compositions['92901EF004C3AC418127070A73A08DF9'] = {
    getStage: function () {
      return exportRoot.getStage();
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };
  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };
  an.getComposition = function (id) {
    return an.compositions[id];
  };
  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers,
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == 'width' && lastW == iw) ||
          (respDim == 'height' && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + 'px';
        container.style.height = h * sRatio + 'px';
      });
      window.stage.scaleX = pRatio * sRatio;
      window.stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      window.stage.tickOnUpdate = false;
      window.stage.update();
      window.stage.tickOnUpdate = true;
    }
  };
};
