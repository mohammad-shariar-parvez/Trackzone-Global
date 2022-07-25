import { useState } from 'react';
import ClockForm from '../clock-form';

const ClockActions = ({ local = false, clock, updateClock }) => {
  const [isEidt, setIsEidt] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  // const handleChange = (e) => {
  //   let { name, value } = e.target;
  //   if (name === 'offset') {
  //     value = Number(value) * 60;
  //   }
  //   updateClock({
  //     [name]: value,
  //   });
  //   // console.log(name, value);
  // };

  const handleClock = (values) => {
    console.log(values);
  };

  return (
    <div>
      <button onClick={() => setIsEidt(!isEidt)}>Eidt</button>
      {local ? (
        <button onClick={() => setIsCreate(!isCreate)}>Create</button>
      ) : (
        <button>Delete</button>
      )}
      {isEidt && (
        <>
          <h3>Eidt Clock</h3>
          <ClockForm
            values={clock}
            handleClock={updateClock}
            title={local}
            eidt={true}
          />
        </>
      )}
      {isCreate && (
        <>
          <h3>Create a new Clock</h3>
          <ClockForm handleClock={handleClock} />
        </>
      )}
    </div>
  );
};

export default ClockActions;

// <div>
//   <input
//     type='text'
//     name='title'
//     value={clock.title}
//     onChange={handleChange}
//   />
//   <select
//     name='timezone'
//     onChange={handleChange}
//     value={clock.timezone}
//   >
//     <option value='GMT'>GMT</option>
//     <option value='UTC'>UTC</option>
//     <option value='PST'>PST</option>
//     <option value='EST'>EST</option>
//     <option value='EDT'>EDT</option>
//     <option value='BST'>BST</option>
//     <option value='MST'>MST</option>
//   </select>
//   {(clock.timezone == 'GMT' || clock.timezone == 'UTC') && (
//     <select
//       name='offset'
//       value={clock.offset / 60}
//       onChange={handleChange}
//     >
//       {defaultOffsets.map((item) => (
//         <option key={item} value={item}>
//           {item}
//         </option>
//       ))}
//     </select>
//   )}
// </div>
