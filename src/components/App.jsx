
import css from './App.module.css';
import Form from './Form/Form';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../redux/contacts/contacts-slice';
import { setFilter } from '../redux/filter/filter-slice';
import { getFilteredContacts } from '../redux/contacts/contacts-selectors';


 function App() {

  const contacts = useSelector(getFilteredContacts);
  
  const dispatch = useDispatch();

  const isDublicate = ({name, number}) => {
    const normilizedName = name.toLowerCase();
    const normalNumber = number;
    
    const dublicate = contacts.find(contact => {
      const normilizedCurrentName = contact.name.toLowerCase();
      const currentNumber = contact.number;
      return (normilizedCurrentName === normilizedName && currentNumber === normalNumber);
    } 
      )
      return Boolean(dublicate);
  }

  const onAddContact = (data) => {
    if(isDublicate(data)) {
        alert(`${data.name} is elready in contacts!`)
        return
      } 

      dispatch(addContact(data));
    
};
      
  const changeFilter = e => dispatch(setFilter(e.currentTarget.value));
        
  const ondDeleteContact = contactID => {
        dispatch(deleteContact(contactID));
        
  };
       
  return (
        <div className={css.appContainer}>
          <h1>Phonebook</h1>
          <Form onSubmit={onAddContact}/>
          <h2>Contacts</h2>
          <Filter text='Search by name' name='filter' onChange={changeFilter}/>
          <ContactsList contacts={contacts} deleteContact={ondDeleteContact}/>
        </div>
      );     


};

export default App;
