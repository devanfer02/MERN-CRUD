import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StudentList } from "./components/StudentList";
import { AddStudent } from './components/AddStudent';
import { UpdateStudent } from './components/UpdateStudent';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentList/>}></Route>
          <Route path="/add" element={<AddStudent/>}></Route>
          <Route path="/update/:id" element={<UpdateStudent/>}></Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
