import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { universities } from './universityList';

export const UpdateStudent = () => {
    const [ name, setName ] = useState("");
    const [ nim, setNim ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ major, setMajor ] = useState("");
    const [ university, setUniversity ] = useState("Universitas Brawijaya");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getStudentById();
    }, []);

    const updateStudent = async (event) => {
        event.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/students/${id}`, {
                name, nim, email, major, university
            });
            navigate('/');  
        } catch(error){
            console.log(`Error: ${error}`);
        }
    };

    const getStudentById = async () => {
        const response = await axios.get(`http://localhost:5000/students/${id}`);
        setName(response.data.name);
        setNim(response.data.nim);
        setEmail(response.data.email);
        setMajor(response.data.major);
        setUniversity(response.data.university);

    }

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-three-quarters">
                <form onSubmit={updateStudent}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            placeholder='Name' 
                            value={name} 
                            onChange={(event)=> setName(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">NIM</label>
                        <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            placeholder='NIM' 
                            value={nim} 
                            onChange={(event)=> setNim(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            placeholder='Email' 
                            value={email} 
                            onChange={(event)=> setEmail(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Major</label>
                        <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            placeholder='Major' 
                            value={major} 
                            onChange={(event)=> setMajor(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">University</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={university} onChange={(event) => setUniversity(event.target.value)}>
                                    {universities.map((uni) => (
                                        <option value={uni} key={uni}>{uni}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <button type='submit' className='button is-info'>Update Data</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
