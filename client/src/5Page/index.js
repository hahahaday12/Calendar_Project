import DiaryForm from "./components/diaryForm";
import Layout from "../Layout/layout"
import DiaryReadTitle from "./components/diaryReadTitle";
import ColorForm from "./components/colorForm";

const Fivepage = () => {


  return (
    <>
      <Layout>
        <ColorForm/>
        <DiaryForm/>
        <DiaryReadTitle/>
      </Layout>
    </>
  )
}

    

export default Fivepage;
