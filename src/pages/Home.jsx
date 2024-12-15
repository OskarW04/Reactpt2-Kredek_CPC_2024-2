import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AnimalList from '../components/AnimalList'

const API_BASE = "https://localhost:7132/api/Animal"

const Home = () => {
    const [animals, setAnimals] = useState([]);
    const [sortDirection, setSortDirection] = useState(0);
    const navigate = useNavigate();


    const fetchAnimals = () => {
        axios.get(`${API_BASE}/GetAnimals`)
        .then(response => setAnimals(response.data))
        .catch(error => console.error(error));
    }

    const deleteAnimal = (name) => {
        axios.delete(`${API_BASE}/DeleteAnimal/${name}`)
        .then(() => {
            alert(`Animal ${name} deleted successfully!`)
            fetchAnimals();
        })
        .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchAnimals();
    }, [])

    return(
        <div>
            <h1>Animals List</h1>
            <button onClick={() => navigate('/add')}>Add Animal</button>
            <AnimalList animals = {animals} onDelete={deleteAnimal} onEdit={(name) => navigate(`/edit/${name}`)}/>
        </div>

    )

}

export default Home;