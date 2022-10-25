import styled from "styled-components";
import TodoList from "./todoList";
import BurketList from "./burketList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const ListForm = () => {

  

  return (
    <>
      <ListWrap>
        <TodoListWrap>
          <div className="title">
            <p>Todo List</p>
          </div>
          
          <ListInnerWrap>
            <div className="todoBox">
              <input 
                className="addInput" 
                type={"text"} 
                placeholder={"오늘의 할 일 추가하기"}
              />
              <FontAwesomeIcon className="faPlus" icon={faPlus}/>
            </div>
              <TodoList/>
            
          </ListInnerWrap>
        </TodoListWrap>
        
        <BurketListWrap>
          <div className="title">
            <p>Burket List</p>
          </div>
          <ListInnerWrap>
            <div className="burketBox">
              <input 
                className="addInput" 
                type={"text"} 
                placeholder={"버킷리스트 추가하기"}
              />
              <FontAwesomeIcon className="faPlus" icon={faPlus}/>
            </div>
            <BurketList/>
          </ListInnerWrap>
        </BurketListWrap>
      </ListWrap>
    </>
  )
}

export default ListForm;

const ListWrap = styled.div`
  width: 600px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`

const TodoListWrap = styled.div`
  width: 265px;
  height: 310px;
  border: 2px solid #7A90E2;

  & .title {
    width: 100%;
    height: 60px;
    background-color: #7A90E2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & div p {
    color: white;
    font-size: 18px;
    font-family: 'SB 어그로 M';
  }
`

const ListInnerWrap = styled.div`
  margin: 20px 20px;
  width: 220px;
  height: 200px;

  & .todoBox {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    position: relative;
  }

  .todoBox .addInput {
    width: 220px;
    border: none;
    font-family: 'SB 어그로 L';
    border-bottom: 1px solid #7A90E2;
    padding: 5px 5px 5px 10px;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: #AFAFAF;
    }
  }

  & .faPlus {
    color: #7A90E2;
    cursor: pointer;
    position: absolute;
    top: 2px;
    right: 0;
  }

  

`

// BurketList
const BurketListWrap = styled.div`
  width: 265px;
  height: 310px;
  border: 2px solid #FFCCCC;

  & .title {
    width: 100%;
    height: 60px;
    background-color: #FFCCCC;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & div p {
    color: white;
    font-size: 18px;
    font-family: 'SB 어그로 M';
  }
  
  .burketBox {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    position: relative;

  }

  .burketBox .addInput {
    width: 220px;
    border: none;
    font-family: 'SB 어그로 L';
    border-bottom: 1px solid #FFCCCC;
    padding: 5px 5px 5px 10px;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: #AFAFAF;
    }
  }

  & .faPlus {
    color: #FFCCCC;
  }
`

