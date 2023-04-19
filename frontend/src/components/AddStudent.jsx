import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { universities } from '../js/universityList';
import 'bulma/css/bulma.css';

export const AddStudent = () => {
    const [ name, setName ] = useState("");
    const [ nim, setNim ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ major, setMajor ] = useState("");
    const [ university, setUniversity ] = useState("Universitas Brawijaya");
    const navigate = useNavigate();

    const saveStudent = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/students', {
                name, nim, email, major, university
            });
            navigate('/');  
        } catch(error){
            console.log(`Error: ${error}`);
        }
    };

    return (
        <div className="columns mb-3 is-centered">
            <div className="column is-three-quarters">
                <form onSubmit={saveStudent}>
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
                        <button type='submit' className='button is-info'>Add Data</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
