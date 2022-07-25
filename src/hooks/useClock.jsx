import { useEffect, useState } from 'react';
import { addMinutes } from 'date-fns';
import { TIMEZONE_OFFSET } from '../constance/timezone';

// const TIMEZONE_OFFSET = {
//   PST: -7 * 60,
//   EST: -4 * 60,
//   EDT: -4 * 60,
//   BST: 1 * 60,
//   MST: -6 * 60,
// };

const useClock = (timezone, offset) => {
  const [loaclDate, setLocalDate] = useState(null);
  const [localOffset, setLocalOffset] = useState(0);
  const [localTimezone, setLocalTimezone] = useState('');
  const [utc, setUTC] = useState(null);

  useEffect(() => {
    let d = new Date();
    const lo = d.getTimezoneOffset();
    d = addMinutes(d, lo);
    setUTC(d);
    setLocalOffset(lo);
  }, []);

  useEffect(() => {
    if (utc !== null) {
      if (timezone) {
        offset = TIMEZONE_OFFSET[timezone] ?? offset;
        // console.log('Real offset is ', offset);
        const newUtc = addMinutes(utc, offset);
        setLocalDate(newUtc);
      } else {
        const newUtc = addMinutes(utc, -localOffset);
        const dateStrArr = newUtc.toUTCString().split(' ');
        setLocalDate(newUtc);
        setLocalTimezone(dateStrArr.pop());
      }
    }
  }, [utc, timezone, offset]);

  return {
    date: loaclDate,
    dateUTC: utc,
    offset: offset || -localOffset,
    timezone: timezone || localTimezone,
  };
};

export default useClock;
