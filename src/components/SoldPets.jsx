import { useEffect, useState } from 'react';
import axios from 'axios';

function SoldPets() {

  // Punto 2: Recoger Status de mascotas y ver las que se han vendido
  const [soldPets, setSoldPets] = useState([]);

  const findPetsStatus = async () => {
    try {
      const response = await axios.get("https://petstore.swagger.io/v2/pet/findByStatus?status=sold");
      setSoldPets(response.data);
      console.log(soldPets);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(soldPets);
  }, [soldPets]);

  return (
    <>
        <button onClick={findPetsStatus}>See Sold Pets</button>
        <div>
        {soldPets.map((pet) => (
            <div key={pet.id}>
            <p>ID: {pet.id}</p>
            <p>Name: {pet.name}</p>
            </div>
        ))}
        </div>
    </>
  );
}

export default SoldPets;
