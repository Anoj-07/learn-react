import { useState } from "react";

function UpdateArrayOfObjectInState() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');


    function handleAddcar() {

        const newCar = {
            year: Number(carYear),
            make: carMake,
            model: carModel
        };
        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    }

    function handleRemovecar(index) {
        setCars(c => c.filter((_, idx) => idx !== index))
    }

    function handleYearChange(e) {
        setCarYear(e.target.value);
    }

    function handleMakeChange(e) {
        setCarMake(e.target.value);
    }

    function handleModelChange(e) {
        setCarModel(e.target.value);
    }

    return (
        <div>
            <h2>List of Car Objects: </h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={() => handleRemovecar(index)}>
                        {car.year}, {car.make}, {car.model}
                    </li>
                )}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} /> <br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Maker" /> <br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model" /> <br />

            <button onClick={handleAddcar}> Add Car</button>

        </div>
    );

}
export default UpdateArrayOfObjectInState