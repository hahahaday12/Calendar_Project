import BurketList from "./burketList";
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components";


const BurketListForm = () => {
  return (
    <>
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
    </>
  );
}

export default BurketListForm;




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