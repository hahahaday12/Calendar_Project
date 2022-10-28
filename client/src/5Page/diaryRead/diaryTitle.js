import styled from "styled-components";

const DiaryTitle = () => {

  return(
    <>
      <DiaryBoxContainer>
        <div className="DiaryWrap">
          <div className="dateBox">
            2022.10.26
          </div>
          <div className="titleBox">
            <div>
              제목 보이기
            </div>
          </div>
        </div>
      </DiaryBoxContainer>
      
    </>
  )
}

export default DiaryTitle;

const DiaryBoxContainer = styled.div`
  width: 600px;
  height: auto;
  display: flex;
  font-family: 'SB 어그로 M';
  

  & .DiaryWrap {
    width: 265px;
    height: 85px;
    margin-top: 40px;
  }

  & .dateBox {
    width: 261px;
    height: 30px;
    border: 2px solid #FFCCCC;
    color: #FFCCCC;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  & .titleBox {
    width: 265px;
    height: 55px;
    background-color: #FFCCCC;
    color: white;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
`