import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ContactContext } from '../context/ContactContext';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { addContact } = useContext(ContactContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newContact = {
      name,
      email,
    };

    try {
      await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
      alert('Contact Added Successfully');
      addContact(newContact);
      setName('');
      setEmail('');
      navigate('/');
    } catch (err) {
      console.error('Error adding Contact:', err);
    }
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
