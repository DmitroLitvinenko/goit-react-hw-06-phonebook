import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        Find contacts by name:
        <input
          type="text"
          id="filter"
          name="filter"
          onChange={evt =>
            dispatch(filterContact(evt.target.value.toLowerCase()))
          }
        />
      </label>
    </div>
  );
};
