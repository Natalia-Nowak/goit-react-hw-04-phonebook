import React from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

export default function ContactForm({
  name,
  number,
  changeName,
  changeNumber,
  handleSubmit,
}) {
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={changeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Phone</label>
      <input
        type="tel"
        name="number"
        placeholder="Enter number"
        value={number}
        onChange={changeNumber}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className="button-form" type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
