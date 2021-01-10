import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Box, Button as MuiButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import Button from '../../UiKit/Button';
import Input from '../../UiKit/Input';
import Accordion from '../../UiKit/Accordion';
import Select from '../../UiKit/Select';
import Table from './QuestionsTable';

import { useAuth } from '../../../lib/api/auth';

import s from './styles.module.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useSupport} from "../../../lib/api/support";
import Loading from "../../Loading";
import UnauthorizedContainer from "../../UnauthorizedPage";

const categoryData = {
  title: 'Категория',
  placeholder: 'Выберите категорию'
};

const answersData = {
  headElements: ['Название', 'Категория', 'Статус', 'Последнее обновление']
};

function Support() {
  const isDesk = useMediaQuery('(max-width: 1459px)');
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');

  const { user, steamAuth } = useAuth();
  const { categories, activeCategory, setActiveCategory, loading, storeFaq, popularQuestions, questions } = useSupport();
  const router = useRouter();
  const theme = useTheme();
  const [screen, setScreen] = useState('answers');
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');

  if (loading){
    return <Loading />;
  }

  return (
    <Box
      display="flex"
      flexDirection={isMobileOrTablet && 'column'}
      height={1}
      pt={isMobileOrTablet ? 3 : 6}
      pl={1}
      pr={isMobileOrTablet ? 1 : 4}
      width={(isMobileOrTablet && "98vw") || (isDesk && "calc(100vw - 300px)") || "calc(100vw - 430px)"}
    >
      {isMobileOrTablet && (
        <Box fontSize={24} fontWeight={700} color="#fff" mb={2}>
          Поддержка
        </Box>
      )}

      <Box
        borderRadius={10}
        py={5}
        px={!isMobileOrTablet ? 7 : 3}
        bgcolor={theme.background.primary}
        width={isMobileOrTablet ? '100vw' : 1}
        display="flex"
        flexDirection="column"
      >
        {!isMobileOrTablet && (
          <Box
            fontSize={24}
            fontWeight={700}
            color="#fff"
            mb={2}
          >
            Поддержка
          </Box>
        )}
        <Box
          display="flex"
          justifyContent="space-between"
          width={1}
          alignItems="center"
          mb={3}
        >
          <Box display="flex">
            <Button
              fontSize={14}
              fontWeight="bold"
              fontFamily="Open Sans, sans-serif"
              value="FAQ"
              onClick={() => setScreen('answers')}
              variant={screen !== 'question' ? 'contained' : 'outlined'}
              bgcolor={
                screen !== 'question'
                  ? 'linear-gradient(139.23deg, #7D20FF 13.34%, #6101E9 86.08%)'
                  : 'transparent'
              }
              borderSize={screen !== 'question' ? '0px' : '2px'}
              w="70px"
              h="30px"
              m="0 20px 0 0"
              borderColor="#7D20FF"
              color={screen !== 'question' ? '#fff' : '#D0D0D0'}
            />
            <Button
              value="Задать вопрос"
              fontSize={14}
              fontWeight="bold"
              fontFamily="Open Sans, sans-serif"
              onClick={() => setScreen('question')}
              variant={screen === 'question' ? 'contained' : 'outlined'}
              bgcolor={
                screen === 'question'
                  ? 'linear-gradient(139.23deg, #7D20FF 13.34%, #6101E9 86.08%)'
                  : 'transparent'
              }
              borderSize={screen === 'question' ? '0px' : '2px'}
              w="120px"
              h="30px"
              m="0 20px 0 0"
              borderColor="#7D20FF"
              color={screen === 'question' ? '#fff' : '#D0D0D0'}
            />
          </Box>
          {!isMobileOrTablet && (
            <Box>
              <Box
                onClick={() => router.push('/privacy-policy')}
                display="flex"
                alignItems="center"
                style={{ cursor: 'pointer' }}
              >
                <img src="privacy-policy.svg" alt="privacy-policy" />
                <Box
                  ml={1}
                  color={theme.text.gray}
                  fontSize={14}
                  fontWeight={400}
                  lineHeight="20px"
                >
                  Пользовательское соглашение
                </Box>
              </Box>
            </Box>
          )}
        </Box>
        {screen === 'answers' && (
          <Box>
            <Accordion items={
              popularQuestions?.map(question => ({
                title: question.question,
                content: question.answers?.map(answer => <p>{answer.answer}</p>)
              }))}
            />
          </Box>
        )}
        {screen === 'question' && (
          <Box flexGrow={1} height={2} display="flex" flexDirection="column">
            <UnauthorizedContainer>
              <>
                <Box display={isMobileOrTablet ? "block" : "flex"} justifyContent="space-between">
                  <Box width={isMobileOrTablet ? 1 : 475}>
                    <Input
                      value={title}
                      onChange={setTitle}
                      name="title"
                      placeholder="Название"
                      bgcolor="#070707"
                      h="50px"
                      fontSize="16px"
                      borderSize="0"
                      align="left"
                    />
                    <Box className={s.textareaWrapper} mb="10px">
                      <textarea
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className={s.textarea}
                        name="message"
                        rows={7}
                        placeholder="Введите ваш Вопрос"
                      />
                      <img src="/send.svg" alt="send" style={{cursor: "pointer", width: isMobileOrTablet ? 33 : 43,
                        transform: "rotate(45deg)", marginTop: "10px"}} onClick={async () => {
                        if(!loading) {
                          await storeFaq(title, question);
                          setQuestion("");
                          setTitle("");
                        }
                      }}/>
                    </Box>
                  </Box>
                  <Box width={225}>
                    <Select
                      name="category-select"
                      withPlaceholderOption
                      value={activeCategory}
                      onChange={setActiveCategory}
                      options={categories.map((item) => ({id: item.id, label: item.name}))}
                      title={categoryData.title}
                      placeholder={categoryData.placeholder}
                    />
                  </Box>
                </Box>
                <Box width={1} className={s.overflow}>
                  <Table
                    headElements={answersData.headElements}
                    items={questions}
                  />
                </Box>
              </>
            </UnauthorizedContainer>
          </Box>
        )}
        {
          isMobileOrTablet && <Box mt={15}>
            <Box
                onClick={() => router.push('/privacy-policy')}
                display="flex"
                alignItems="center"
                style={{ cursor: 'pointer' }}
            >
              <img src="/privacy-policy.svg" alt="privacy-policy" />
              <Box
                  ml={1}
                  color={theme.text.gray}
                  fontSize={14}
                  fontWeight={400}
                  lineHeight="20px"
              >
                Пользовательское соглашение
              </Box>
            </Box>
          </Box>
        }

      </Box>
    </Box>
  );
}

export default Support;
