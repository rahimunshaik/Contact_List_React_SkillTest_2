import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contactList, setContactList] = useState([]);

  const addContact = (contact) => {
    setContactList((prevContactList) => [...prevContactList, contact]);
  };

  return (
    <ContactContext.Provider value={{ contactList, addContact }}>
      {children}
    </ContactContext.Provider>
  );
};
