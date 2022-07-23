import { useState } from 'react';

const defaultOffsets = [
  -11.5, -11, -10.5, -10, -9.5, -9, -8.5, -8, 0, 1, 2, 3, 4, 5, 5.5, 6, 6.5,
];

const ClockActions = ({ local = false, clock, updateClock }) => {
  const [isEidt, setIsEidt] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'offset') {
      value = parseInt(value) * 60;
    }
    updateClock({
      [name]: value,
    });
    // console.log(name, value);
  };

  return (
    <div>
      <button onClick={() => setIsEidt(!isEidt)}>Eidt</button>
      {local ? <button>Create</button> : <button>Delete</button>}
      {isEidt && (
        <div>
          <input
            type='text'
            name='title'
            value={clock.title}
            onChange={handleChange}
          />
          <select
            name='timezone'
            onChange={handleChange}
            value={clock.timezone}
          >
            <option value='GMT'>GMT</option>
            <option value='UTC'>UTC</option>
            <option value='PST'>PST</option>
            <option value='EST'>EST</option>
            <option value='EDT'>EDT</option>
            <option value='BST'>BST</option>
            <option value='MST'>MST</option>
          </select>
          {(clock.timezone == 'GMT' || clock.timezone == 'UTC') && (
            <select
              name='offset'
              value={clock.offset / 60}
              onChange={handleChange}
            >
              {defaultOffsets.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
    </div>
  );
};

export default ClockActions;
