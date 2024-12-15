import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimalForm from "../components/AnimalForm";
import axios from "axios";

const API_BASE = "https://localhost:7132/api/Animal"

const AddAnimal = () => {
    const[name, setName] = useState('');
    const[eyesCount, setEyesCount] = useState();
    const[legsCount, setLegsCount] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const animal = {name, eyesCount, legsCount};

        axios.post(`${API_BASE}/AddAnimal`, animal)
            .then(() => {
                alert('Animal added successfully!')
                navigate('/');
            })
            .catch(error => console.error(error))
    }


    return(
        <div>
            <h1>Add Animal</h1>
            <AnimalForm
            animal={{name, eyesCount, legsCount, setName, setEyesCount, setLegsCount}}
            onSubmit={handleSubmit}
            onCancel={() => navigate('/')}
            isEdit = {false}
            />
        </div>
    )

}

export default AddAnimal