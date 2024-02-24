import { useMemo } from 'react';
import {nanoid} from 'nanoid';
import css from './Form.module.css';
import { addContact } from '../../redux/contacts/contacts-slice';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import { getFormData } from '../../redux/form/form-selectors';
import { resetForm, setName, setNumber } from '../../redux/form/form-slice';

const Form  = () => {
  const contacts = useSelector(getAllContacts)
  const form = useSelector(getFormData);
  const {name, number} = form;
  const dispatch = useDispatch();

  console.log(form);
  
  const inputNameId = useMemo(() => nanoid(), []);
  const inputNumberId = useMemo(() => nanoid(), []);

  const isDublicate = () => {
    const formName = name.toLowerCase();
    const formNumber = number;
    
    const dublicate = contacts.find((contact) => {
      return (contact.name === formName && contact.number === formNumber);
    } 
      )
      return Boolean(dublicate);
  }

  const handleChangeName = (e) => {
    dispatch(setName(e.target.value))
  };

  const handleChangeNumber = (e) => {
    dispatch(setNumber(e.target.value))
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(isDublicate(form)) {
        alert(`${form.name} with ${form.number} is elready in contacts!`)
        dispatch(resetForm());
        return
      } 

      dispatch(addContact(form));
      dispatch(resetForm());
    
};

  return (
         <form onSubmit={handleSubmit}>
            <label htmlFor={inputNameId} className={css.label}>Name</label>
            <input className={css.input}
                 type="text"
                 name="name"
                 value={name}
                 id={inputNameId}
                 onChange={handleChangeName}
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
            />
            
            <label htmlFor={inputNumberId} className={css.label}>Phone</label>
            <input className={css.input}
                 type="tel"
                 name="number"
                 value={number}
                 id={inputNumberId}
                 onChange={handleChangeNumber}
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
            />
           
            <button type="submit" className={css.addButton}>Add contact</button>
        </form>
            );
}

export default Form;
