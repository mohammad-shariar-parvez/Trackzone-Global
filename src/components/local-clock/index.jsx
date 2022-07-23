import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';
import useClock from '../../hooks/useClock';
import { useEffect } from 'react';

const LocalClock = ({ clock, updateClock }) => {
  console.log('from local clock', clock.offset);
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);
  console.log('', offset);
  console.log('timezone is ', timezone);
  console.log('------');

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  return (
    <div>
      {date && (
        <ClockDisplay
          date={date}
          title={clock.title}
          timezone={timezone}
          offset={offset}
        />
      )}

      <ClockActions local={true} clock={clock} updateClock={updateClock} />
    </div>
  );
};

export default LocalClock;
