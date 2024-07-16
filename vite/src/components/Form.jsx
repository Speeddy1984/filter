import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, cancelEdit } from '../redux/actions';

const Form = () => {
  const dispatch = useDispatch();
  const editingItem = useSelector(state => state.editingItem);
  const [input, setInput] = useState({ id: '', field1: '', field2: '' });
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    if (editingItem) {
      setInput(editingItem);
    } else {
      setInput({ id: '', field1: '', field2: '' });
    }
  }, [editingItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      dispatch(updateItem(input));
    } else {
      dispatch(addItem({ ...input, id: Date.now() }));
    }
    setInput({ id: '', field1: '', field2: '' });
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
    setInput({ id: '', field1: '', field2: '' });
  };

  const handleFilterChange = (e) => {
    dispatch({ type: 'SET_FILTER', payload: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter items"
        value={filter}
        onChange={handleFilterChange}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="field1"
          value={input.field1}
          onChange={handleChange}
          placeholder="Field 1"
        />
        <input
          type="text"
          name="field2"
          value={input.field2}
          onChange={handleChange}
          placeholder="Field 2"
        />
        <button type="submit">Save</button>
        {editingItem && <button type="button" onClick={handleCancel}>Cancel</button>}
      </form>
    </div>
  );
};

export default Form;