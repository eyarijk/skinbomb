import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import s from './styles.module.scss';
import WeaponCard from '../WeaponCard';
import UiButton from '../UiKit/Button';
import cn from 'classnames';

function CaseOpen({ card, onOpened, openCase }) {
  const cardWidth = 142;
  const [skins, setSkins] = useState([]);
  const [winSkinUuid, setWinUuid] = useState(null);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (!card) {
      return;
    }

    const countSkins = Math.round(window.innerWidth / cardWidth);
    const parts = Math.floor(countSkins / card.case.skins.length);

    const skinsList = [];
    let uuid = 1;
    for (let i = 0; i < parts; i++) {
      for (const skin of card.case.skins) {
        skinsList.push({ ...skin, uuid });
        uuid++;
      }
    }

    setSkins(skinsList.splice(0, countSkins));
  }, [card]);

  useEffect(() => {
    if (skins.length === 0 && !isOpened) {
      return;
    }

    setTimeout(async () => {
      const skinId = await openCase(card);
      const skin = skins.find(skin => skin.skin_id === skinId);

      setWinUuid(skin.uuid);
      setIsOpened(true);
    }, 100);
  }, [skins]);

  return (
    <>
      <Box className={s.overflow} />
      <Box className={s.root}>
        <Box>
          <Box className={s.skins}>
            {skins.map(skin => (
              <Box
                key={skin.id}
                className={cn(s.skin, {
                  [s.skinCompleted]: skin.uuid === winSkinUuid,
                })}
              >
                <img
                  src="/vector.svg"
                  className={cn(s.skinArrow, s.skinArrowTop)}
                />
                <WeaponCard card={skin.skin} percent={skin.percent} />
                <img
                  src="/vector.svg"
                  className={cn(s.skinArrow, s.skinArrowBottom)}
                />
              </Box>
            ))}
          </Box>
          {isOpened && (
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
        </Box>
      </Box>
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
