import Layout from "../Layout/layout"
import DiaryForm from "../components/diaryForm";
import TodoListForm from "../components/todoListForm";
import BurketListForm from "../components/burketListForm";
import styled from "styled-components";


const Fourpage = () => {

  return (
    <>
      <Layout>
        <ListWrap>
          <TodoListForm/>
          <BurketListForm/>
        </ListWrap>
        <DiaryForm/>
      </Layout>
    </>
  )
}

export default Fourpage;


const ListWrap = styled.div`
  width: 600px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`