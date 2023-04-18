import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StudentList } from "./components/StudentList";
import { AddStudent } from './components/AddStudent';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentList/>}></Route>
          <Route path="/add" element={<AddStudent/>}></Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
