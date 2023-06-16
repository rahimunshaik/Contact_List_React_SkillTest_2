import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { ContactContext } from '../context/ContactContext';
import './ContactList.css'; // Import the CSS file

const ContactList = () => {
  const { contactList, setContactList } = useContext(ContactContext);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setContactList(response.data);
      } catch (err) {
        console.error('Error fetching contacts', err);
      }
    };
    fetchContact();
  }, [setContactList]);

  return (
    <div className="contact-list-container"> {/* Apply a CSS class to the container */}
      <h2>ContactList</h2>
      {contactList.map((contact) => (
        <div className="contact-item" key={contact.id}> {/* Apply a CSS class to each contact item */}
          <p className="contact-name">{contact.name}</p> {/* Apply a CSS class to the name */}
          <p className="contact-email">{contact.email}</p> {/* Apply a CSS class to the email */}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ContactList;
