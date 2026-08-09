import React, { useState } from 'react'

function UpdateObjectState() {

    const [car, setCar] = useState({ year: 2024, make: "Ford", model: "Mustang" });

    function handleYearChange(e) {

        setCar(prevCar => ({ ...prevCar, year: Number(e.target.value) })); // safe update the state 'track prev and update new one
    };

    function handleMakeChange(e) {
        setCar(prevCar => ({ ...prevCar, make: String(e.target.value) }))

    };

    function handleModelChange(e) {
        setCar(prevCar => ({ ...prevCar, model: String(e.target.value) }))

    };

    return (
        <>
            <div className="car-container">

                <div className="car-info">
                    <h2>🚗 Your Favorite Car</h2>

                    <p>
                        <strong>Year:</strong> {car.year}
                    </p>

                    <p>
                        <strong>Make:</strong> {car.make}
                    </p>

                    <p>
                        <strong>Model:</strong> {car.model}
                    </p>
                </div>

                <div className="car-form">
                    <label>
                        Year
                        <input
                            className="car-input"
                            type="number"
                            value={car.year}
                            onChange={handleYearChange}
                        />
                    </label>

                    <label>
                        Make
                        <input
                            className="car-input"
                            type="text"
                            value={car.make}
                            onChange={handleMakeChange}
                        />
                    </label>

                    <label>
                        Model
                        <input
                            className="car-input"
                            type="text"
                            value={car.model}
                            onChange={handleModelChange}
                        />
                    </label>
                </div>

            </div>
        </>
    );
}

export default UpdateObjectState