import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bulma/css/bulma.css';
import { Pagination } from './Pagination';

export const StudentList = () => {
    const [students, setStudent] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [studentsPerPage] = useState(10);

    const indexLastStudent = currentPage * studentsPerPage;
    const indexFirstStudent = indexLastStudent - studentsPerPage
    
    useEffect(() => {
        getStudents();
        document.title = "List Students";
    }, []);

    const getStudents = async () => {
        const response = await axios.get('http://localhost:5000/students');
        setStudent(response.data);
    }

    const deleteStudent = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/students/${id}`)
            getStudents();
        } catch(error){
            console.log(`Error: ${error}`);
        }
    }

    return (
        <div className="columns is-centered">
            <div className="column is-four-fifths">
                <h1>List Students</h1>
                <hr />
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} studentsPerPage={studentsPerPage} totalStudents={students.length} />
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>NIM</th>
                            <th>Email</th>
                            <th>Major</th>
                            <th className='has-text-centered'>University</th>
                            <th className='has-text-centered'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.slice(indexFirstStudent, indexLastStudent).map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + indexFirstStudent + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.nim}</td>
                            <td>{student.email}</td>
                            <td>{student.major}</td>
                            <td className='has-text-centered'>
                                <figure className='image is-48x48'>
                                    <img src={`/img/uni_logos/${student.university}.png`} alt="universitas"/>
                                </figure>
                            </td>
                            <td>
                                <Link to={`/update/${student.id}`} className='button is-small is-success' style={{textDecoration: 'none'}}>Update</Link>
                                <button onClick={() => deleteStudent(student.id)} className='button is-small is-danger'>Delete</button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
