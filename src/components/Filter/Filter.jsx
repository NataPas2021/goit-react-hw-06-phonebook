import {nanoid} from 'nanoid';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const inputSearchId = nanoid();

const Filter = ({text, onChange }) => {
  return (
    <div>
      <label htmlFor={inputSearchId} className={css.label}>{text}</label>
      <input type='text' onChange={onChange} id={inputSearchId}/>
    </div>
  )
}

export default Filter;

Filter.propTypes = {
  text: PropTypes.string.isRequired,
  
  onChange: PropTypes.func.isRequired,
}