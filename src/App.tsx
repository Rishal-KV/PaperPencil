
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './assets/Components/Student/Pages/LoginPage/LoginPage';
import SignUpage from './assets/Components/Student/Pages/SignuPage/SignUpage';
import Home from './assets/Components/Student/Home/Home';

import './App.css'
function App() {
 

  return (
    <>
    <Router>
    <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpage/>}/>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
