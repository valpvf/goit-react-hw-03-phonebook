import { InputStyled } from "components/ContactForm/ContactForm.styled";

const Filter = ({ filterContacts, filter }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <InputStyled onChange={filterContacts} value={filter} type="text" />
    </>
  );
};

export default Filter;
