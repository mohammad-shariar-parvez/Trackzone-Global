import { useEffect, useState } from 'react';
import { TIMEZONE_OFFSET } from '../../../constance/timezone';
import { getOffsets } from '../../../utils/timezone';

const ClockForm = ({
  values = { title: '', timezone: '', offset: 0 },
  title = false,
  handleClock,
  eidt = false,
}) => {
  const [formValues, setFormValues] = useState({ ...values });
  // console.log('Get offsets is ', getOffsets());

  useEffect(() => {
    if (TIMEZONE_OFFSET[formValues.timezone]) {
      setFormValues({
        ...formValues,
        offset: TIMEZONE_OFFSET[formValues.timezone],
      });
    }
  }, [formValues.timezone]);

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    console.log(e.target);

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'offset') {
      value = Number(value) * 60;
    }
    setFormValues({
      ...formValues,
      [name]: value,
    });
    // console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClock(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Enter Title</label>
        <input
          type='text'
          id='title'
          name='title'
          value={formValues.title}
          onChange={handleChange}
          disabled={title}
        />
      </div>
      <div>
        <label htmlFor='timezone'>Enter Timezone</label>

        <select
          id='timezone'
          name='timezone'
          onChange={handleChange}
          value={formValues.timezone}
        >
          <option value='GMT'>GMT</option>
          <option value='UTC'>UTC</option>
          <option value='PST'>PST</option>
          <option value='EST'>EST</option>
          <option value='EDT'>EDT</option>
          <option value='BST'>BST</option>
          <option value='MST'>MST</option>
        </select>
      </div>

      {(formValues.timezone == 'GMT' || formValues.timezone == 'UTC') && (
        <div>
          <label htmlFor='offset'>Enter Offset</label>

          <select
            id='offset'
            name='offset'
            value={formValues.offset / 60}
            onChange={handleChange}
          >
            {getOffsets().map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}
      {/* <div>
        <label htmlFor='offset'>Enter Offset</label>
        <input
          type='number'
          id='offset'
          name='offset'
          value={formValues.offset}
          onChange={handleChange}
        />
      </div> */}
      <button>{eidt ? 'Update' : 'Create'} </button>
    </form>
  );
};

export default ClockForm;
