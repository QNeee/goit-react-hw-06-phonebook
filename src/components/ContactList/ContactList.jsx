
import { useDispatch, useSelector } from "react-redux";
import { ContactListUl, ContactListLi, Button } from './ContactList.syled';
import { removeContactById, getFilter, getContacts } from "Redux/phonebookSlice";
export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const getFilteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    const dispatch = useDispatch();
    return (<ContactListUl>
        {getFilteredContacts.map(item => <ContactListLi id={item.id} key={item.id}>{item.name}:{item.number}<Button type="button" onClick={() => dispatch(removeContactById(item.id))}>Delete</Button></ContactListLi>)}
    </ContactListUl>)
}

