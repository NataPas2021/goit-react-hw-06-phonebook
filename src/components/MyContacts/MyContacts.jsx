import Form from '../Form/Form';
import ContactsList from '../Contacts/ContactsList';
import Filter from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
//import { useSelector, useDispatch } from 'react-redux';
//import { deleteContact } from '../../redux/contacts/contacts-slice';
//import { setFilter } from '../../redux/filter/filter-slice';
//import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';


const MyContacts = () => { 
  const contacts = useSelector(getAllContacts);

    return (
      <>
         <h1>Phonebook</h1>
         <Form />
         <h2>Contacts</h2>
         <Filter name='filter' />
         {contacts.length > 0 && <ContactsList />}
      </>
     );             
 };


export default MyContacts;