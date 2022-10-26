import DiaryForm from "../components/diaryForm";
import Layout from "../Layout/layout"
import DiaryReadTitle from "./diaryRead/diread";
import DiaryTitle from "./diaryRead/dititle";

const Fivepage = () => {
  return (
    <>
      <Layout>
        <DiaryForm/>
        <DiaryTitle/>
        <DiaryReadTitle/>
      </Layout>
    </>
  )
}

    

export default Fivepage;
