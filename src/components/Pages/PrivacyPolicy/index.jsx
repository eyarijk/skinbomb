import React from 'react';

import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import s from './styles.module.scss';
import useMediaQuery from "@material-ui/core/useMediaQuery";

const privacy = [
  {
    title: 'Общие условия',
    items: [
      'Настоящее Соглашение является публичной офертой. Получая доступ к материалам Сайта, Пользователь считается присоединившимся к настоящему Соглашению.',
      'Администрация сайта имеет право в любое время в одностороннем порядке изменить условия настоящего Соглашения. Такие изменения вступают в силу через 3 (Три) дня с даты размещения новой версии Соглашения на сайте. Если Пользователь не согласен с внесенными изменениями, он обязан отказаться от доступа к Сайту, прекратить использование материалов и услуг Сайта.',
    ],
  },
  {
    title: 'Обязанности Пользователя',
    items: [
      'Использование материалов Сайта без согласия правообладателей не допускается. Для законного использования материалов Сайта необходимо заключить лицензионные соглашения (получение лицензий) с Правообладателями.',
      'При цитировании материалов сайта, в том числе авторских работ, ссылка на сайт обязательна.',
      'Пользователь предупреждается, что Администрация сайта не несет ответственности за посещение и использование внешних ресурсов, ссылки на которые могут содержаться на сайте.',
      'Пользователь соглашается с тем, что Администрация Сайта не несет ответственности и не имеет прямых или косвенных обязательств перед Пользователем в связи с возможными или вытекающими из этого потерями или убытками, связанными с любым содержимым Сайта, регистрацией авторских прав и информацией о такой регистрации, товарах или услугах. доступных или полученных через внешние сайты или ресурсы или другие контакты Пользователя, в которые он вошел, используя информацию, размещенную на Сайте, или ссылки на внешние ресурсы.',
      'Пользователь соглашается с тем, что все материалы и услуги Сайта или любой его части могут сопровождаться рекламой. Пользователь соглашается с тем, что Администрация сайта не несет никакой ответственности и не несет никаких обязательств в связи с такой рекламой.',
    ],
  },
  {
    title: 'Другие условия',
    items: [
      'Ничто в Соглашении не может быть понято как установление между Пользователем и Администрацией Сайта агентских отношений, партнерских отношений, совместных деловых отношений, личных отношений найма или любых других отношений, прямо не предусмотренных в Соглашении.',
      'Признание судом положения Соглашения как недействительного или неисполнимого не влечет за собой недействительность других положений Соглашения.',
      'Бездействие Администрации Сайта в случае нарушения кем-либо из Пользователей положений Соглашения не лишает Администрацию Сайта права предпринимать в дальнейшем соответствующие действия для защиты своих интересов и защиты авторских прав на материалы Сайта, защищенные в соответствии с законом.',
      'При пополнении баланса пользователи получают виртуальную валюту, которая рассчитывается в соответствии с внутренним курсом сайта, отображаемым в поле для пополнения баланса.',
      'При пополнении баланса пользователь гарантированно получает в свое владение виртуальный предмет на сайте, который он может использовать без каких-либо ограничений.',
    ],
  },
];

function PrivacyPolicy() {
  const theme = useTheme();
  const isDesk = useMediaQuery('(max-width: 1459px)');
  const isMobileOrTablet = useMediaQuery('(max-width: 959px)');

  return (
    <Box
        display="flex"
        height={1}
        pt={!isMobileOrTablet && 1}
        pl={1}
        pr={!isMobileOrTablet && 2}
        width={(isMobileOrTablet && "99vw") || (isDesk && "calc(100vw - 300px)") || "calc(100vw - 430px)"}
    >
      <Box
        borderRadius={10}
        py={isMobileOrTablet ? 3 : 5}
        px={isMobileOrTablet ? 2 : 7}
        bgcolor={!isMobileOrTablet && theme.background.primary}
        width={1}
        display="flex"
        flexDirection="column"
      >
        <Box fontSize={isMobileOrTablet ? 16 : 24} fontWeight={700} color="#fff" mb={isMobileOrTablet ? 3 : 6}>
          Пользовательское соглашение
        </Box>
        <Box className={!isMobileOrTablet && s.wrapper} height={2} flexGrow={1} >
          {privacy.map((item, index) => {
            return (
              <>
                <Box
                  color="#898989"
                  fontSize={isMobileOrTablet ? 12 : 14}
                  fontWeight={400}
                  fontFamily="Open Sans, sans-serif"
                >{`${index + 1}. ${item.title}`}</Box>
                {item.items.map((i, key) => {
                  return (
                    <Box
                      color="#898989"
                      key={Math.round(Math.random() * 10000)}
                      fontSize={14}
                      fontWeight={400}
                      ml={2}
                      fontFamily="Open Sans, sans-serif"
                    >
                      {`${index + 1}.${key + 1} ${i}`}
                    </Box>
                  );
                })}
              </>
            );
          })}
          {
            isMobileOrTablet && <Box color="#FB9414" mt={2} mb={6}>
              Последнее изминение: 10.08.20
            </Box>
          }
        </Box>
        {!isMobileOrTablet && <Box color="#FB9414" mt={2}>
          Последнее изминение: 10.08.20
        </Box>}
      </Box>
    </Box>
  );
}

export default PrivacyPolicy;