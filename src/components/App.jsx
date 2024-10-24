import { useState, useEffect} from "react";
import { nanoid } from "nanoid";
import contactsData from "./contactsData";
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import SearchBox from './SearchBox';

export default function App() {

  const [contacts, setContacts] = useState(() => {
    const localeContacts = localStorage.getItem('contacts');
    return localeContacts ? JSON.parse(localeContacts): contactsData;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);


  const [filter, setFilter] = useState("");

  const filteredUsers = contacts.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const onDeleteContact = (contactId) => {
    const updateContact = contacts.filter(contact => contact.id !== contactId)
    setContacts(updateContact)
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact}/>
      <SearchBox setFilter={setFilter}/>
      <ContactList contacts={filteredUsers} onDeleteContact={onDeleteContact}/>
    </div>
  );
};
