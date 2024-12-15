import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AnimalForm from "../components/AnimalForm";

const API_BASE = 'https://localhost:7132/api/Animal';

const EditAnimal = () => {
    const  { name } =  useParams();
    const [animal, setAnimal] = useState({ name: '', eyesCount: 0, legsCount: 0});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_BASE}/GetAnimal/${name}`)
        .then(response => setAnimal(response.data))
        .catch(error => console.error(error))
    }, [name])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${API_BASE}/UpdateAnimal`, animal)
        .then(() => {
            alert('Animal updated successfully')
            navigate('/')
        })
        .catch(error => console.error(error))
    }

    return(
        <div>
            <h1>Edit Animal</h1>
            <AnimalForm
            animal={{
                ...animal,
                setName: (newName) => setAnimal((prev) => ({ ...prev, name:newName})),
                setEyesCount: (count) => setAnimal((prev) => ({ ...prev, eyesCount: count})),
                setLegsCount: (count) => setAnimal((prev) => ({ ...prev, legsCount: count}))
            }}
            onSubmit={handleSubmit}
            onCancel={() => navigate('/')}
            isEdit={true}
            />
        </div>
    )
}

export default EditAnimal;