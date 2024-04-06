import { Route, Routes } from 'react-router-dom';
import './App.css'
import HeadText  from './components/headText';
import ListPost from './pages/listPost';
import OnPost from './pages/onPost';
import LookLocalStorage from './pages/lookLocalStorage';

function App() {

  return (
    <div  className=''>
      <HeadText/>
      <Routes>
        <Route index element={<ListPost/>}/>
        <Route path='/:id' element={<OnPost/>}/>
        <Route path='/save' element={<LookLocalStorage/>}/>
      </Routes>
    </div>
  )
}

export default App
