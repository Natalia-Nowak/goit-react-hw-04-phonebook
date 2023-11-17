import React, { useEffect } from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import './App.css';

export const App = () => {
  useEffect(() => {
    const contactsJSON = localStorage.getItem('contacts');
    if (contactsJSON === null) {
      setContacts([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]);
    } else {
      const contacts = JSON.parse(contactsJSON);
      setContacts(contacts);
    }
  }, []);

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    for (const contact of contacts) {
      if (name === contact.name) {
        alert(contact.name + ' is already in contacts.');
        return;
      }
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const newContacts = [...contacts, newContact];
    localStorage.setItem('contacts', JSON.stringify(newContacts));

    setContacts(newContacts);
  };

  const handleChangeName = event => {
    setName(event.target.value);
  };
  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };
  const handleChangeFilter = event => {
    setFilter(event.target.value);
  };

  const handleDelete = name => {
    const filteredContacts = contacts.filter(contact => contact.name !== name);
    setContacts(filteredContacts);

    localStorage.setItem('contacts', JSON.stringify(filteredContacts));
  };

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        changeName={handleChangeName}
        changeNumber={handleChangeNumber}
        handleSubmit={handleSubmit}
      />
      <h1>Contacts</h1>
      <Filter filter={filter} changeFilter={handleChangeFilter} />
      <ContactList
        filter={filter}
        contactList={contacts}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
