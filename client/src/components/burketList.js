import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

const BurketList = () => {

  const [burket, setBurket] = useState([
    {
      id: 5,
      text: "운동 시작하기",
    },
    {
      id: 6,
      text: "그림 그리기",
    }
  ])

  return (
    <>
      {burket.map((v) => (
        <TodoCheck key={v.id}>
          <div>
            <input 
              className="checkInput"
              id={v.id}
              type={"checkbox"}
            />
            <label for={v.id}></label>
          </div>
          
          <input 
            className="textInput"
            type={"text"} 
            value={v.text}
          />
          <FontAwesomeIcon className="faXmark" icon={faXmark}/>
        </TodoCheck>
      ))}
      안녕하세요
      
    </>
  );
}

export default BurketList;


const TodoCheck = styled.div`
  height: auto;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* checkbox 커스텀 */

  & div {
    position: relative;
  }

  & .checkInput {
    visibility: hidden;
  }

  
  & .checkInput[type="checkbox"] + label::before{
    content: '';
    cursor: pointer;
    width: 15px;
    height: 15px;
    position: absolute;
    left: 4px;
    top: 2px;
    background: url('./img/square-regular_pink.svg') no-repeat;
  }

  & .checkInput[type="checkbox"]:checked + label::after{
    content: ''; 
    position: absolute; 
    width: 15px;
    height: 15px;
    left: 4px;
    top: 2px;
    background: url('./img/square-check-regular_pink.svg') no-repeat;
  }

  & input {
    border: none;
    font-family: 'SB 어그로 L';

    :focus {
      outline: none;
    }
  }

  & .textInput {
    width: 160px;
    margin-right: 10px;
    margin-left: 10px;
  }

  .faXmark {
    color: #AFAFAF;
    cursor: pointer;
    margin-right: 2px;
  }
`