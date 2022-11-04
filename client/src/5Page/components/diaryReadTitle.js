import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";

const DiaryReadTitle = () => {

  const [list, setList] = useState([
    {
      id: 15,
      date: "2022.09.30",
      title: "일기 제목 보이기",
      color: "#FFCCCC",
    },
    {
      id: 16,
      date: "2022.09.27",
      title: "일기 제목 보이기",
      color: "#C4C4C4",
    },
    {
      id: 17,
      date: "2022.09.23",
      title: "일기 제목 보이기",
      color: "#FFDF78",
    },
    {
      id: 18,
      date: "2022.09.22",
      title: "일기 제목 보이기",
      color: "#7A90E2",
    },
  ])

  return (
    <>
      <WhiteContainer>
        {list.map((item) => (
          <DiaryBoxContainer key={item.id}>
            <div className="DiaryWrap">
              <div 
                className="dateBox" 
                style={{color: item.color, borderColor: item.color}}
              >
                {item.date}
                <FontAwesomeIcon className="XIcon" icon={faXmark}/>
              </div>
              <div 
                className="titleBox"
                style={{backgroundColor: item.color}}
              >
                <div>
                  {item.title}
                </div>
              </div>
            </div>
          </DiaryBoxContainer>
        ))}
      </WhiteContainer>
    </>
  );
}

export default DiaryReadTitle;

const WhiteContainer = styled.div`
  width: 676px;
  height: 280px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const DiaryBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SB 어그로 M';
  margin: 0 auto;
  
  & .DiaryWrap {
    width: 265px;
    height: 85px;
  }

  & .dateBox {
    width: 261px;
    height: 30px;
    border-radius: 10px 10px 0 0;
    border: 2px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;


    & .XIcon {
      color: #C4C4C4;
      position: relative;
      left: 65px;
      bottom: 2px;
    }
  }

  & .titleBox {
    width: 265px;
    height: 55px;
    border-radius: 0 0 10px 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`