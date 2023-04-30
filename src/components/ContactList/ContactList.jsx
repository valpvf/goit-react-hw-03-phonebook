import { BtnStyled } from 'components/ContactForm/ContactForm.styled';

const ContactList = ({ contacts, removeContacts }) => {
  // console.log(contacts);
  return (
    <ul>
      {contacts.contacts.map(el => (
        <li key={el.id}>
          {el.name}: {el.number}
          <BtnStyled onClick={() => removeContacts(el.id)}>Delete</BtnStyled>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
