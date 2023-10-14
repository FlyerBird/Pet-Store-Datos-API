import { useState } from 'react';
import axios from 'axios';

function UserForm() {

  // Punto 1: Crear y obtener datos del Usuario
  const [user, setUser] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleChange = (e) => {
    setUser(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://petstore.swagger.io/v2/user", user);
      if (response) {
        const userFromAPI = await axios.get(`https://petstore.swagger.io/v2/user/${user.username}`);
        console.log(userFromAPI);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='username' placeholder='username' value={user.username} onChange={handleChange}/>
        <input type="text" name='firstName' placeholder='firstName' value={user.firstName}  onChange={handleChange}/>
        <input type="text" name='lastName' placeholder='lastName' value={user.lastName}  onChange={handleChange}/>
        <input type="email" name='email' placeholder='email' value={user.email}  onChange={handleChange}/>
        <input type="password" name='password' placeholder='password' value={user.placeholder}  onChange={handleChange}/>
        <input type="text" name='phone' placeholder='phone' value={user.placeholder}  onChange={handleChange}/>
      <button type="submit">Create User</button>
    </form>
  );
}

export default UserForm;
