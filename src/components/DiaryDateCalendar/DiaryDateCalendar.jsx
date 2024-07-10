import React from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch } from 'react-redux';
import { getUserInfo } from 'redux/authorization/authOperations';
import { setDate } from 'redux/diary/diarySlice';
import dayjs from 'dayjs';
import moment from 'moment';

import s from './DiaryDataCalendar.module.scss';
import { BrowserInput } from './BrowserInput';

const DiaryDateCalendar = () => {
  const dispatch = useDispatch();

  const handleChangeDate = value => {
    dispatch(setDate(moment(value.$d).format('YYYY-MM-DD')));
    dispatch(getUserInfo());
  };

  const getCurrentDate = () => {
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className={s.inputCalendar}
        format="DD.MM.YYYY"
        defaultValue={dayjs(getCurrentDate())}
        label="Custom input"
        slots={{
          textField: BrowserInput,
        }}
        style={{ fontSize: '26px' }}
        onChange={handleChangeDate}
      />
    </LocalizationProvider>
  );
};

export default DiaryDateCalendar;
