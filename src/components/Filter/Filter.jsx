import { useDispatch } from 'react-redux';
import { filterUserByName } from 'redux/filterSlice';

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
            dispatch(filterUserByName(evt.target.value.toLowerCase()))
          }
        />
      </label>
    </div>
  );
};
