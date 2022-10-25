import DiaryForm from "../components/diaryForm";
import Layout from "../Layout/layout"
import DiaryReadTitle from "./diaryRead/diread";

const Fivepage = () => {
  return (
    <>
      <Layout>
        <DiaryForm/>
        <DiaryReadTitle/>
      </Layout>
    </>
  )
}

    

export default Fivepage;
