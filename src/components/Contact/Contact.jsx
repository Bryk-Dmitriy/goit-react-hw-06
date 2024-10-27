import css from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.listItem}>
      <p>
        <span className={css.userIcon}>
          <FaUserAlt />
        </span>
        {name}
      </p>
      <p>
        <span className={css.userIcon}>
          <FaPhoneAlt />
        </span>
        {number}
      </p>
      <button
        type="button"
        onClick={onDeleteContact}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
}
