import { useState } from 'react';
import axios from 'axios';

function SameNamePets() {

  // Punto 3: Recorrer las Mascotas Disponibles e identificar cuantas hay con cada nombre
  const [nameCount, setNameCount] = useState({});
  const [showList, setShowList] = useState(false);

  const numberPetsWithSameName = async () => {
    try {
      const response = await axios.get("https://petstore.swagger.io/v2/pet/findByStatus?status=available");
      if (response && response.data) {
        const pets = response.data;
        const count = {};

        pets.forEach((pet) => {
          const name = pet.name;
          if (count[name]) {
            count[name] += 1;
          } else {
            count[name] = 1;
          }
        });

        setNameCount(count);
        setShowList(true);
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <button onClick={numberPetsWithSameName}>Same Name Pets</button>
      {showList && (
        <div>
          <h2>Pets with the Same Name Count:</h2>
          <ul>
            {Object.keys(nameCount).map((name) => (
              <li key={name}>
                {name}: {nameCount[name]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default SameNamePets;
