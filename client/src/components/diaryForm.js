import styled from "styled-components";


const DiaryForm = () => {
  return (
    <>
      <WriteOutBox>
          <div>
            <p>2022.10.10</p>
          </div>
          <WriteInnerBox>
            <PostForm>
              <input
                type={"text"}
                placeholder={"제목을 작성해주세요"}
              />
              <textarea
                placeholder={"내용을 작성해주세요"}
              />
            </PostForm>
            <button>작성완료</button>
          </WriteInnerBox>
        </WriteOutBox>
    </>
  );
}

export default DiaryForm;


const WriteOutBox = styled.div`
  width: 600px;
  height: 350px;
  background-color: #C4C4C4;
  justify-content: center;
  padding-bottom: 15px;

  & div p {
    margin: 0 auto;
    padding: 20px 0;
    text-align: center;
    font-size: 18px;
    color: white;
    font-family: 'SB 어그로 M';
  }
`

const WriteInnerBox = styled.div`
  width: 570px;
  height: 290px;
  background-color: white;
  margin: 0 auto;
  

  & button {
    width: 100px;
    height: 30px;
    border: none;
    background-color: #C4C4C4;
    display: block;
    margin: 0 auto;
    font-family: 'SB 어그로 L';
    color: white;
    font-size: 14px;
    padding-top: 2px;
  }
`

const PostForm = styled.form`
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  margin: 0 auto;

  & input {
    width: 510px;
    height: 30px;
    margin-top: 10px;
    border: none;
    padding: 5px 15px;
    border-bottom: 1px solid #C4C4C4;
    font-family: 'SB 어그로 L';

    :focus {
      outline: none;
    }
  }
/* 
  [수정할 것]
  - text 입력시 placeholder와 같은 위치에서 text 입력 할 수 있게
    box 한개씩 해서 안에 input/textarea를 따로 만들 것
*/

  & textarea {
    resize: none;
    width: 510px;
    height: 120px;
    margin-top: 10px;
    font-family: 'SB 어그로 L';
    border: none;
    padding: 15px 15px;


    :focus {
      outline: none;
      
    }

  }


`