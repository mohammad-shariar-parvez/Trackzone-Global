import { useState } from 'react';
import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import ClockDisplay from './components/shared/clock-display';
import useClock from './hooks/useClock';

const LOCAL_CLOCK_INIT = {
  title: 'My Clock',
  timezone: '',
  offset: 0,
  date: null,
};
function App() {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });

  // const { date: localDate, localOffset, localTimezone } = useClock();
  // const { date: india, offset, timezone } = useClock('PST', 5.5 * 60);
  // const {
  //   date: pakisthan,
  //   offset: offset2,
  //   timezone: timezone2,
  // } = useClock('GMT', 5 * 60);

  // const { clock: est } = useClock('EST');
  // const { clock: pst } = useClock('PST');
  // const { clock: pakistan } = useClock('UTC', 5 * 60);
  // const { clock: edt } = useClock('EDT');
  // const { clock: british } = useClock('BST');
  // const { clock: mst } = useClock('MST ');

  // console.log('date ', localDate);
  // console.log('offset', localOffset);
  // console.log(' timezone', localTimezone);

  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  return (
    <div>
      <LocalClock clock={localClock} updateClock={updateLocalClock} />

      {/* {india !== null && (
        <ClockDisplay
          date={india}
          title={'India'}
          timezone={timezone}
          offset={offset}
        />
      )}
      {pakisthan !== null && (
        <ClockDisplay
          date={pakisthan}
          title={'Pakisthan'}
          timezone={timezone2}
          offset={offset2}
        />
      )} */}
    </div>
  );
}

export default App;
