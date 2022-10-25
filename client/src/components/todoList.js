import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

const TodoList = () => {

  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "샌드위치 먹기",
    },
    {
      id: 2,
      text: "베개커버 씌우기"
    },
    {
      id: 3,
      text: "방 정리 하기"
    },
  ])

  return (
    <>
      {todo.map((item) => (
        <TodoCheck key={item.id}>
          <div>
            <input 
              className="checkInput"
              id={item.id}
              type={"checkbox"}
            />
            <label for={item.id}></label>
          </div>
          
          <input 
            className="textInput"
            type={"text"} 
            value={item.text}
          />
          <FontAwesomeIcon className="faXmark" icon={faXmark}/>
        </TodoCheck>
      ))}
    </>
  );
}

export default TodoList;



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
    background: url('./img/square-regular.svg') no-repeat;
  }

  & .checkInput[type="checkbox"]:checked + label::after{
    content: ''; 
    position: absolute; 
    width: 15px;
    height: 15px;
    left: 4px;
    top: 2px;
    background: url('./img/square-check-regular.svg') no-repeat;
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