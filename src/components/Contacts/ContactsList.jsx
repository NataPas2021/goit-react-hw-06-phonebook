import css from './ContactsList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-slice';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';

const ContactsList = () => {
 const contacts = useSelector(getFilteredContacts);
 const dispatch = useDispatch();

  const elements = contacts.map(({id, name, number}) => {
      return (
           <li key={id}
               className={css.contact}
              >
             {name}: {number}
             <button type='button'
              className={css.deleteButton}
              onClick={() => dispatch(deleteContact(id))}>Delete
             </button>
           </li>
      )
     })
     

 return (
    <>
    <ul>
       {elements}
    </ul>
    </> 
 )
}


export default ContactsList;

