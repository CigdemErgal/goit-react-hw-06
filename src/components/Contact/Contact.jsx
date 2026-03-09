import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

function Contact({ contact }) {
    const dispatch = useDispatch();

    return (
        <li className={css.item}>
            <p className={css.text}>
                {contact.name}: {contact.number}
            </p>
            <button
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
                className={css.button}
            >
                Delete
            </button>
        </li>
    );
}

export default Contact;