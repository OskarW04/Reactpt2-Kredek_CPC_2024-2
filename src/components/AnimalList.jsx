import React from "react";

const AnimalList =({animals, onDelete, onEdit}) => {

    if(animals.length === 0){
        return(
            <p>No animals in list</p>
        )
    }

    return(
        <ul>
            {animals.map((animal, index) => (
                <li key={index}>
                    {animal.name} - Eyes: {animal.eyesCount}, Legs: {animal.legsCount}
                    <button onClick={() => onEdit(animal.name)}>Edit</button>
                    <button onClick={() => onDelete(animal.name)}>Delete</button>
                </li>
            ))}
        </ul>
    )


}

export default AnimalList;