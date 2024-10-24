import Contact from './Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <Contact key={contact.id} id={contact.id}  name={contact.name} number={contact.number} onDeleteContact={onDeleteContact}/>
      ))}
    </ul>
  );
}
