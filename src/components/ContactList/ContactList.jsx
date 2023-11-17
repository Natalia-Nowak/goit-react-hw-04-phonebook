import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';

export default function ContactList({ filter, contactList, handleDelete }) {
  return (
    <ul className="contact-list">
      {contactList
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <li className="contact-list-item" key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className="button-list"
              onClick={() => handleDelete(contact.name)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  props: PropTypes.string,
};
