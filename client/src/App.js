import './App.css';
import { BrowserRouter , Route , Routes} from 'react-router-dom'
//import LoinButton from './1Page/loginButton/index.js';
import TwoPage from './2Page';
import Onepage from './1Page';
import Fourpage from './4Page';
import Fivepage from './5Page';
// import { Children } from 'react';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onepage/>} />
          <Route path="/twopage" element={<TwoPage/>} />
          <Route path="/fourpage" element={<Fourpage/>} />
          <Route path="/fivepage" element={<Fivepage/>} />
        </Routes>
      </BrowserRouter>
{/* 
    const Button = ({ Children }) => {
      return (
        
        <div>


        </div>
      )
    }

    <button>밥먹기</button>
    <button>운동하기</button>
    
     */}
     </>
  );
}

export default App;

