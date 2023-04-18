import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const StudentList = () => {
    const [students, setStudent] = useState([]);

    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = async () => {
        const response = await axios.get('http://localhost:5000/students');
        setStudent(response.data);
    }
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-three-quarters">
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>NIM</th>
                            <th>Email</th>
                            <th>Major</th>
                            <th>University</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.nim}</td>
                            <td>{student.email}</td>
                            <td>{student.major}</td>
                            <td>
                                <figure className='image is-48x48'>
                                    <img src={`/img/uni_logos/${student.university}.png`} alt="universitas"/>
                                </figure>
                            </td>
                            <td>
                                <button className='button is-small is-success'>Update</button>
                                <button className='button is-small is-danger'>Delete</button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}