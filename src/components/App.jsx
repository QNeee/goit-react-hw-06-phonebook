
import { Form } from "./Form/Form";
import { nanoid } from 'nanoid'
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container, Title } from "./App.styled";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addContact } from "../Redux/phonebookSlice"

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts.items);
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

  return (<Container>
    <Title>Phonebook</Title>
    <Form onSubmit={formSubmitHander} />
    <Title>Contacts</Title>
    <Filter />
    <ContactList />
  </Container >)
}