import React, { useEffect, useRef } from 'react';
import laserAnimation from '../../animations/laser.js';
import s from './styles.module.scss';

function Laser() {
  const canvas = useRef(null);
  const container = useRef(null);
  const overflow = useRef(null);

  const init = (createjs, AdobeAn) => {
    const comp = AdobeAn.getComposition('92901EF004C3AC418127070A73A08DF9');
    const loader = new createjs.LoadQueue(false);

    loader.addEventListener('fileload', function (evt) {
      handleFileLoad(evt, comp);
    });

    loader.addEventListener('complete', function (evt) {
      handleComplete(evt, comp, createjs, AdobeAn);
    });

    loader.loadManifest(comp.getLibrary().properties.manifest, true);
  };

  function handleFileLoad(evt, comp) {
    const images = comp.getImages();
    if (evt && evt.item.type === 'image') {
      images[evt.item.id] = evt.result;
    }
  }

  function handleComplete(evt, comp, createjs, AdobeAn) {
    const lib = comp.getLibrary();
    const ss = comp.getSpriteSheet();
    const queue = evt.target;
    const ssMetadata = lib.ssMetadata;

    for (let i = 0; i < ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet({
        images: [queue.getResult(ssMetadata[i].name)],
        frames: ssMetadata[i].frames,
      });
    }

    const exportRoot = new lib.p7();
    window.stage = new lib.Stage(canvas.current);

    const fnStartAnimation = () => {
      window.stage.addChild(exportRoot);
      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener('tick', window.stage);
    };

    AdobeAn.makeResponsive(false, 'both', false, 1, [
      canvas.current,
      container.current,
      overflow.current,
    ]);

    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
  }

  useEffect(() => {
    import('../../createjs-module/createjs').then(createjs => {
      let animation = {};
      laserAnimation(createjs.default, animation);
      init(createjs.default, animation);
    });
  }, []);

  return (
    <div ref={container}>
      <canvas ref={canvas} style={{ width: '800px', height: '800px' }} />
      <div ref={overflow} className={s.overflow} />
    </div>
  );
}

export default Laser;
