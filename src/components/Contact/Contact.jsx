import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "./Contact.module.css";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contactItem}>
      <span className={styles.contactIcon}>
        <FontAwesomeIcon icon={faUser} />
      </span>
      <span>{name}</span>
      <span className={styles.contactIcon}>
        <FontAwesomeIcon icon={faPhone} />
      </span>
      <span>{number}</span>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
