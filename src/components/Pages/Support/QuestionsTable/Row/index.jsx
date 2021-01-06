import React, { useState } from 'react';
import moment from "moment";
import Box from "@material-ui/core/Box";
import Button from "../../../../UiKit/Button";
import Input from "../../../../UiKit/Input";
import {useSupport} from "../../../../../lib/api/support";

function Row( item ) {
  const {storeFaqToFaq, loading} = useSupport();

  const [open, setOpen] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [question, setQuestion] = useState("");

  return (
    <>
      <tr
        key={item.key}
        className="row"
        onClick={() => setOpen(!open)}
      >
         <td className="collapse-icon">
           <img
             className="icon"
             src={open ? '/cancel.svg' : '/plus.svg'}
             alt="icon"
           />
         </td>
        <td className="item" key={item.id}>
          {item.name}
        </td>
        <td className="item" key={item.id}>
          {item.category}
        </td>
        <td className="item" key={item.id}>
          {item.status}
        </td>
        <td className="item" key={item.id}>
          {moment(item.updated_at).format("yyyy-MM-DD H:M:ss")}
        </td>
      </tr>
        <tr className="row accordion">
          <td colSpan="5">
              {item.answers.map(answer => <p>{answer.answer}</p>)}
              <Box width={1} display="flex" justifyContent="center">
                  {!openInput ? (
                      <Button
                          value="Еще есть вопрос"
                          onClick={() => {setOpenInput(true)}}
                          variant="contained"
                          bgcolor="#FB9A01"
                          w="140px"
                          h="40px"
                          m="0 20px 0 0"
                          borderColor="#FB9A01"
                          color="#fff"
                          fontSize={14}
                          fontWeight={600}
                      />
                  ) : (
                      <Box display="flex">
                          <Input
                              value={question}
                              onChange={setQuestion}
                              name="title"
                              placeholder="Вопрос"
                              bgcolor="#070707"
                              h="40px"
                              borderSize="0"
                              align="left"
                          />
                          <Button
                              value="Отправить"
                              onClick={async () => {
                                  if(!loading) {
                                      await storeFaqToFaq(item.id, question);
                                      setQuestion("");
                                      setOpenInput(false);
                                  }
                              }}
                              variant="contained"
                              bgcolor="#2DC53A"
                              w="100px"
                              h="40px"
                              m="0 0 0 5px"
                              borderColor="#2DC53A"
                              color="#fff"
                              fontSize={14}
                              fontWeight={600}
                          />
                      </Box>
                  )}

              </Box>
          </td>
        </tr>
      <style jsx>{`
        .row {
          height: 54px;
          border-bottom: 1px solid #434343;
        }

        .collapse-icon {
          height: 54px;
          width: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .item {
          text-align: left;
          padding-left: 20px;
          padding-right: 20px;
          font-size: 16px;
          font-weight: 400;
          color: #e5e5e5;
        }

        .accordion {
          display: ${open ? '' : 'none'};
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          color: #898989;
        }

        .accordion > td {
          padding: 16px 60px;
        }
      `}</style>
    </>
  );
}

export default Row;
