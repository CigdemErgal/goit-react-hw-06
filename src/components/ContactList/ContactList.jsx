// Reads contacts and filter text from Redux, then renders filtered list.
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
    );

   

    return (
        <ul className={css.list}>
            {visibleContacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </ul>
    );
}

export default ContactList;
