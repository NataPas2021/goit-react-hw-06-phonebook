import { useState, useMemo } from 'react';
import {nanoid} from 'nanoid';
import css from './Form.module.css';
import { addContact } from '../../redux/contacts/contacts-slice';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';

const INITIAL_STATE = {
  name: "",
  number: "",
};

const Form  = () => {
  const [state, setState] = useState({...INITIAL_STATE});

  //console.log(state);

  const contacts = useSelector(getAllContacts)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value} = e.target;
  
    setState({
        ...state,
        [name]: value,
    })
}

  

  const handleSubmit = (e, data) => { 
    e.preventDefault();

    const isDublicate = (data) => {
      console.log(state);
      const formName = state.name.toLowerCase();
      const formNumber = state.number;
      
      const dublicate = contacts.find((contact) => {
        return (contact.name === formName && contact.number === formNumber);
      } 
        )
        return Boolean(dublicate);
    }

    if(isDublicate(state)) {
      console.log(state);
        alert(`${state.name} with ${state.number} is elready in contacts!`)
        reset();
        return
      } 

      dispatch(addContact(state));
      reset();
    
};

  const reset = () => {
    setState({...INITIAL_STATE});
}

  const inputNameId = useMemo(() => nanoid(), []);
  const inputNumberId = useMemo(() => nanoid(), []);

  return (
         <form onSubmit={handleSubmit}>
            <label htmlFor={inputNameId} className={css.label}>Name</label>
            <input className={css.input}
                 type="text"
                 name="name"
                 value={state.name}
                 id={inputNameId}
                 onChange={handleChange}
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
            />
            
            <label htmlFor={inputNumberId} className={css.label}>Phone</label>
            <input className={css.input}
                 type="tel"
                 name="number"
                 value={state.number}
                 id={inputNumberId}
                 onChange={handleChange}
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
            />
           
            <button type="submit" className={css.addButton}>Add contact</button>
        </form>
            );
}

export default Form;
