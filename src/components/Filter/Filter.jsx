import {nanoid} from 'nanoid';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filter-slice';

const inputSearchId = nanoid();

const Filter = () => {
  
  const dispatch = useDispatch()
  
  return (
    <div>
      <label htmlFor={inputSearchId} className={css.label}>Search by name</label>
      <input type='text' onChange={(e) => dispatch(setFilter(e.currentTarget.value))} id={inputSearchId}/>
    </div>
  )
}

export default Filter;
