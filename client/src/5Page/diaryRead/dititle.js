import styled from "styled-components";

const DiaryTitle = () => {

  return(
    <>
      <DiaryBoxContainer>
        <div className="DiaryWrap">

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

  & .DiaryWrap {
    width: 265px;
    height: 85px;
    margin-top: 40px;
    background-color: antiquewhite;
  }
`