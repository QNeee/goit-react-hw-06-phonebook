
import { Form } from "./Form/Form";
import { nanoid } from 'nanoid'
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container, Title } from "./App.styled";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addContact, removeContactById, getFilter, setFilterValue } from "../Redux/phonebookSlice"

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts.items);
  const filter = useSelector(getFilter);
  const formSubmitHander = (data) => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    }
    const findContact = contacts.find(item => item.name.toLowerCase() === data.name.toLowerCase())

    if (!findContact) {
      return dispatch(addContact(newContact));
    }
    return alert(`${data.name} is already in list`);
  }
  const onDelete = (id) => {
    dispatch(removeContactById(id));
  }
  const getFilteredContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }
  return (<Container>
    <Title>Phonebook</Title>
    <Form onSubmit={formSubmitHander} />
    <Title>Contacts</Title>
    <Filter value={filter} setFilterValue={setFilterValue} />
    <ContactList contacts={getFilteredContacts()} deleteContact={onDelete} />
    {filter.length > 0 && getFilteredContacts().length === 0 && <div>No contacts find</div>}
  </Container >)
}