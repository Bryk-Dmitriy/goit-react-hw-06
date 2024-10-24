import css from './Contact.module.css'
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({id, name, number, onDeleteContact }) {
  return (
    <li className={css.listItem}>
      <p><span className={css.userIcon}><FaUserAlt/></span>{name}</p>
      <p><span className={css.userIcon}><FaPhoneAlt/></span>{number}</p>
      <button type="button" onClick={() => onDeleteContact(id)} className={css.deleteButton}>Delete</button>
    </li>
  );
}
