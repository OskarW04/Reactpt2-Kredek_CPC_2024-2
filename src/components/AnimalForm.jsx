import React from "react";

const AnimalForm = ({animal, onSubmit, onCancel, isEdit}) => {

    return(
    <form onSubmit={onSubmit}>
        <label>Animal Name:</label>
        <input
        value={animal.name}
        onChange={(e) => animal.setName(e.target.value)}
        placeholder="Name"
        required
        disabled={isEdit}
        />

        <label>Eyes:</label>
        <input
        type="number"
        value={animal.eyesCount === null ? null : animal.eyesCount}
        onChange={(e) => animal.setEyesCount(parseInt(e.target.value, 10))}
        placeholder="Eyes Count"
        required
        />

        <label>Legs:</label>
        <input
        type="number"
        value={animal.legsCount === null ? null : animal.legsCount}
        onChange={(e) => animal.setLegsCount(parseInt(e.target.value, 10))}
        placeholder="Legs Count"
        required
        />

        <button type="submit">{isEdit ? 'Save Changes' : 'Add Animal'}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
    </form>
    )
}

export default AnimalForm;