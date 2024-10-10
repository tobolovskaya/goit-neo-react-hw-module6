import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import styles from './ContactsForm.module.css';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <input
        type="tel"
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Add Contact</button>
    </form>
  );
};

export default ContactsForm;
