import React from 'react'
import { format } from 'date-fns';
import s from './Sidebar.module.scss';
import { useSelector } from 'react-redux';
import { SelectDate, SelectSummary } from '../../redux/diary/diarySelectors';

export const Summary = () => {
    const summary = useSelector(SelectSummary);
    const selectedDate = useSelector(SelectDate);

    const dailyRate = summary !== null && summary !== undefined ? summary.dailyRate : '000';
    const consumed = summary !== null && summary !== undefined ? summary.kcalConsumed : '000';
    const left = summary !== null && summary !== undefined ? summary.kcalLeft : '000';
    const partOfNormal = summary !== null && summary !== undefined ? Math.round((consumed * 100) / dailyRate) : '00';

    const currentDate = format(Date.now(), 'yyyy-MM-dd');
    const date = selectedDate !== null && selectedDate !== undefined ? selectedDate : currentDate;
    const summaryDate = date.split('-').reverse().join('.');

    return (
        <div>
            <h3 className={s.SidebarTitle}>Summary for {summaryDate}</h3>
            <ul className={s.SidebarList}>
                <li className={s.SidebarItem}>
                    <p className={s.SidebarText}>Left</p>
                    <p className={s.SidebarText}>{Math.round(left)} kcal</p>
                </li>
                <li className={s.SidebarItem}>
                    <p className={s.SidebarText}>Сonsumed</p>
                    <p className={s.SidebarText}>{Math.round(consumed)} kcal</p>
                </li>
                <li className={s.SidebarItem}>
                    <p className={s.SidebarText}>Daily rate</p>
                    <p className={s.SidebarText}>{Math.round(dailyRate)} kcal</p>
                </li>
                <li className={s.SidebarItem}>
                    <p className={s.SidebarText}>% from the norm</p>
                    <p className={s.SidebarText}>{`${Math.round(partOfNormal)}%`}</p>
                </li>
            </ul>
        </div>
    );
}