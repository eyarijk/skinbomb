import React, { useState } from 'react';
import { Box, Button, List } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Picker } from 'emoji-mart';
import Message from './Message';
import UiButton from '../UiKit/Button';
import { useChat } from '../../lib/api/chat';
import s from './styles.module.scss';
import NeedAuth from '../NeedAuth';
import { useAuth } from '../../lib/api/auth';

const rules = [
  '— Запрещено использовать в никнейме название или ссылки ведущие на сторонний сайт.',
  '— Запрещено рекламировать каналы Youtube / Twitch / Discord.',
  '— Запрещено оскорблять других участников чата / сайта.',
  '— Запрещено упоминание платежных реквизитов в целях попрошайничества.',
  '— Запрещено распространять URL ссылки и промо-коды (кроме Администрации и Модераторов).',
  '— Запрещено спамить сообщения в чат по одному символу.',
];

function Chat() {
  const theme = useTheme();
  const auth = useAuth();
  const { messages, online, sendMessage } = useChat();
  const [screen, setScreen] = useState('');
  const [rateLimit, setRateLimit] = useState(true);
  const [newMessage, setNewMessage] = useState('');
  const [isOpenPicker, setIsOpenPicker] = useState(false);

  function submitMessage() {
    sendMessage(newMessage).then(res => {
      if (res.status === 'success') {
        setNewMessage('');
      }
      setRateLimit(true);
    });
    setRateLimit(false);
    setIsOpenPicker(false);
  }

  function addEmoji(e) {
    setNewMessage(newMessage + e.native);
  }

  const renderSendMessage = () => {
    if (!auth.user) {
      return <NeedAuth text="Войдите, чтобы отправить сообщение" />;
    }

    return (
      <>
        <Box className={s.textareaWrapper} mb="10px">
          <textarea
            className={s.textarea}
            name="message"
            rows={7}
            placeholder="Введите сообщение"
            maxLength={100}
            value={newMessage}
            onKeyPress={e => {
              if (e.key === 'Enter' && newMessage.length >= 1) {
                e.preventDefault();
                rateLimit &&
                  newMessage.replace(/ /g, '').length >= 1 &&
                  submitMessage();
              }
            }}
            onChange={e =>
              e.target.value !== '\n' &&
              e.target.value.replace(/ /g, '').length >= 1
                ? setNewMessage(e.target.value)
                : setNewMessage('')
            }
          />
          <img
            className={s.emoji}
            src="/emoji.svg"
            alt="emoji"
            onClick={() => setIsOpenPicker(!isOpenPicker)}
          />
        </Box>
        <Box
          width={1}
          height={60}
          display="flex"
          justifyContent="space-between"
        >
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box
              color={theme.text.gray}
              fontSize={12}
              fontWeight={400}
              lineHeight="20px"
              fontFamily="Open Sans, sans-serif"
            >
              100 символов максимум
            </Box>
            <div
              className={s.chatRulesButton}
              onClick={() => setScreen('chatRules')}
            >
              <img src="/chat.svg" alt="chat-icon" />
              <Box
                ml={1}
                color={theme.text.gray}
                fontSize={14}
                fontWeight={400}
                lineHeight="20px"
              >
                Правила чата
              </Box>
            </div>
          </Box>
          <Box>
            <Button
              disabled={!rateLimit}
              className={s.send}
              onClick={() =>
                rateLimit &&
                newMessage.replace(/ /g, '').length >= 1 &&
                submitMessage()
              }
            >
              <img
                src="/send.svg"
                alt="send"
                style={{ transform: 'rotate(45deg)', width: '45px' }}
              />
            </Button>
          </Box>
        </Box>
      </>
    );
  };

  function renderContent() {
    switch (screen) {
      case 'chatRules':
        return (
          <Box width={1} height={1} className={s.chatRules}>
            <Box
              display="flex"
              width={1}
              justifyContent="center"
              fontSize={20}
              fontWeight={400}
              color="#E4E4E4"
              mb={5}
            >
              Правила чата
            </Box>
            {rules.map(rule => (
              <Box
                key={Math.round(Math.random * 10000)}
                fontSize={14}
                fontWeight={400}
                color="#898989"
                mb={3.5}
              >
                {rule}
              </Box>
            ))}
            <Box color="#fff" fontSize={14} fontWeight={400}>
              Любой участник сайта/чата, должен с уважение относится ко всем без
              исключения участникам.
            </Box>
            <Box display="flex" justifyContent="center" mt={5}>
              <UiButton
                value="Вернуться в чат"
                w={140}
                p="11px 0"
                onClick={() => setScreen('')}
                bgcolor="linear-gradient(139.23deg, #7D20FF 13.34%, #6101E9 86.08%)"
                fontSize={14}
                border="none"
                fontWeight="700"
                fontFamily="Open Sans, sans-serif"
              />
            </Box>
          </Box>
        );
      default:
        return (
          <>
            {isOpenPicker ? (
              <span>
                <Picker onSelect={addEmoji} />
              </span>
            ) : (
              <Box
                className={s.listWrapper}
                height="100%"
                width={1}
              >
                <List className={s.list}>
                  {messages.map(item => (
                    <Message
                      key={item.id}
                      img={item.user.avatar}
                      isAdmin={item.user.is_admin}
                      name={item.user.personaname}
                      message={item.message}
                      time={item.created_at}
                    />
                  ))}
                </List>
              </Box>
            )}
            <Box width={1} borderTop="2px solid #252525">
              <Box
                display="flex"
                color="#24AE60"
                alignItems="center"
                mt={1.5}
                mb={1.2}
                fontFamily="Open Sans, sans-serif"
              >
                <div className={s.dot} />
                {`Онлайн: ${online}`}
              </Box>
              {renderSendMessage()}
            </Box>
          </>
        );
    }
  }

  return (
    <Box
      className={s.root}
      width={1}
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {renderContent()}
    </Box>
  );
}

export default Chat;
