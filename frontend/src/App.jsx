import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StudentList } from "./components/StudentList";
import { AddStudent } from './components/AddStudent';
import { UpdateStudent } from './components/UpdateStudent';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Home } from './components/Home';

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StudentList/>}></Route>
            <Route path="/add" element={<AddStudent/>}></Route>
            <Route path="/update/:id" element={<UpdateStudent/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </>
    );
}

export default App;
