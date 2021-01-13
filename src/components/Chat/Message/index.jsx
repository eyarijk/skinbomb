import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import moment from 'moment';

import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Box,
  ListItemText,
} from '@material-ui/core';

import s from './styles.module.scss';

function Message({ img, isAdmin, name, message, time }) {
  return (
    <ListItem className={s.root}>
      <ListItemAvatar className={cn(s.avatarWrapper, { [s.isAdmin]: isAdmin })}>
        <Avatar className={s.container}>
          <img src={img} className={s.image} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        className={s.text}
        primary={
          <div className={s.userData}>
            <span>{name}</span>
            <span className={s.time}>{moment(time).format('HH:mm')}</span>
          </div>
        }
        primaryTypographyProps={{
          className: cn(s.name, { [s.isAdmin]: isAdmin }),
        }}
        secondary={message}
        secondaryTypographyProps={{
          className: cn(s.message, { [s.isAdmin]: isAdmin }),
        }}
      />
    </ListItem>
  );
}

Message.propTypes = {
  img: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Message;
