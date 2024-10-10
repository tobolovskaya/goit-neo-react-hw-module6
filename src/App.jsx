import React from 'react';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Book</h1>
      
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Add a new contact</h2>
        <ContactsForm />
      </section>
      
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Contacts</h2>
        <SearchBox />
        <ContactList />
      </section>
    </div>
  );
};

export default App;
