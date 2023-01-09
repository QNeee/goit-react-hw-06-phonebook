
import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container, Title } from "./App.styled";


export const App = () => {
  return (<Container>
    <Title>Phonebook</Title>
    <Form />
    <Title>Contacts</Title>
    <Filter />
    <ContactList />
  </Container >)
}