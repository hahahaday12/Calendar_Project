import DiaryForm from "../components/diaryForm";
import Layout from "../Layout/layout"
import DiaryReadTitle from "./diaryRead/diaryRead";
import DiaryTitle from "./diaryRead/diaryTitle";
import { useState } from "react";

const Fivepage = () => {

const [title, setTitle] = useState([
  {
    id: 7,
    date: "22.9.28",
    title: "비온 날",
  },
  {
    id: 8,
    date: "22.10.22",
    title: "자도 자도 졸려",
  },
  {
    id: 9,
    date: "22.10.26",
    title: "옷 입기 너무 애매해",
  }
])

  return (
    <>
      <Layout>
        <DiaryForm/>
        {title.map((item) => (
          <DiaryTitle key={item.id}/>
        ))}
        <DiaryReadTitle/>
      </Layout>
    </>
  )
}

    

export default Fivepage;
