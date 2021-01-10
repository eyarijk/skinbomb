import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import s from './styles.module.scss';
import WeaponCard from '../WeaponCard';
import Loading from '../Loading';
import UiButton from '../UiKit/Button';
import cn from 'classnames';

function CaseOpen({ card, onOpened, openCase }) {
  const cardWidth = 142;
  const [skins, setSkins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [viewportSkins, setViewportSkins] = useState(null);
  const [selectedCards, setSelectedCards] = useState({});
  const wrapSkins = useRef(null);

  const startGame = async () => {
    const winSkinId = await openCase(card);

    const countScreens = 8;
    const countSkinsPerScreen = Math.floor(window.innerWidth / cardWidth);
    const allCount = countSkinsPerScreen * countScreens + countSkinsPerScreen;
    const viewPortSkins = countSkinsPerScreen * cardWidth;
    const offsetSide = window.innerWidth - viewPortSkins;

    let uuid = 1;
    const skinsList = [];
    while (skinsList.length < allCount) {
      for (const skin of card.case.skins) {
        skinsList.push({ ...skin, uuid });
        uuid++;
      }
    }

    const skins = skinsList.splice(0, allCount);
    const winIndex =
      (countScreens - 1) * countSkinsPerScreen +
      Math.floor(countSkinsPerScreen / 2);

    const tempSkinIndex = skins.findIndex(skin => skin.skin_id === winSkinId);
    const tempSkin = skins[winIndex];
    skins[winIndex] = skins[tempSkinIndex];
    skins[tempSkinIndex] = tempSkin;

    setSkins(skins);
    setIsCompleted(false);
    setViewportSkins(viewPortSkins * (countScreens + 1));

    setIsLoading(false);

    setTimeout(async () => {
      const speed = 3500;
      const translateX = (countScreens - 1) * viewPortSkins - offsetSide;
      wrapSkins.current.style.transition = `transform ${speed}ms ease-out 0s`;
      wrapSkins.current.style.transform = `translateX(-${translateX}px)`;

      setTimeout(() => {
        setSelectedCards({ [skins[winIndex].uuid]: true });
        setIsCompleted(true);
      }, speed);
    }, 2000);
  };

  useEffect(() => {
    setIsLoading(true);

    if (card.case.skins.length === 0) {
      setIsCompleted(true);
      setIsLoading(false);
      return;
    }

    startGame();
  }, [card]);

  if (isLoading) {
    return (
      <>
        <Box className={s.overflow} />
        <Box className={s.root}>
          <Loading />
        </Box>
      </>
    );
  }

  const renderSlider = () => {
    if (skins.length === 0) {
      return (
        <>
          <Box className={s.emptyList} component="h2">
            Здесь пусто
          </Box>
          <Box className={cn(s.nav, s.navEmpty)}>
            <UiButton
              value="Продолжить"
              onClick={() => onOpened()}
              w="150px"
              h="40px"
              bgcolor="#F89D00"
              borderColor="#F89D00"
            />
          </Box>
        </>
      );
    }

    return (
      <>
        <div
          className={s.skins}
          ref={wrapSkins}
          style={{
            width: `${viewportSkins}px`,
            transform: `translateX(0px)`,
          }}
        >
          {skins.map(skin => (
            <Box key={skin.id} className={s.skin}>
              <Box key={skin.id} className={s.skin}>
                <WeaponCard
                  card={{ ...skin.skin, id: skin.uuid }}
                  percent={skin.percent}
                  selectedCards={selectedCards}
                />
                {selectedCards[skin.uuid] && (
                  <>
                    <img
                      src="/vector.svg"
                      className={cn(s.skinArrow, s.activeSkinArrowTop)}
                    />
                    <img
                      src="/vector.svg"
                      className={cn(s.skinArrow, s.activeSkinArrowBottom)}
                    />
                  </>
                )}
              </Box>
            </Box>
          ))}
        </div>
        {!isCompleted && (
          <div className={s.skinArrowWrap}>
            <img
              src="/vector.svg"
              className={cn(s.skinArrow, s.skinArrowTop)}
            />
            <img
              src="/vector.svg"
              className={cn(s.skinArrow, s.skinArrowBottom)}
            />
          </div>
        )}
        {isCompleted && (
          <Box className={s.nav}>
            <UiButton
              value="Продолжить"
              onClick={() => onOpened()}
              w="150px"
              h="40px"
              bgcolor="#F89D00"
              borderColor="#F89D00"
            />
          </Box>
        )}
      </>
    );
  };

  return (
    <>
      <Box className={s.overflow} />
      <Box className={s.root}>{renderSlider()}</Box>
    </>
  );
}

CaseOpen.defaultProps = {
  onOpened: () => {},
};

CaseOpen.propTypes = {
  card: PropTypes.shape().isRequired,
  onOpened: PropTypes.func,
  openCase: PropTypes.func.isRequired,
};

export default CaseOpen;
