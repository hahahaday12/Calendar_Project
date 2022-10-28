import { useState } from "react";
import styled from "styled-components";

const BurketList = () => {

  const [todo, setTodo] = useState([
    {
      id: 7,
      text: "운동 시작하기",
    },
    {
      id: 8,
      text: "그림그리기"
    },
    {
      id: 9,
      text: "버킷리스트 작성하기"
    },
  ])

  return (
    <>
      {todo.map((item) => (
        <Buket key={item.id}>
          <div className="inputBox">
            <input 
              type={"text"} 
              value={item.text}
              readOnly
            />
          </div>
        </Buket>
      ))}
    </>
  );
}

export default BurketList;


const Buket = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
  margin-top: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .inputBox {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: #FFCCCC;
    display: flex;
    padding-left: 30px;
    align-items: center;
  }

  & input {
    width: 160px;
    border: none;
    font-family: 'SB 어그로 L';
    background-color: #FFCCCC;
    color: white;
    font-size: 16px;
    :focus {
      outline: none;
    }
  }
`