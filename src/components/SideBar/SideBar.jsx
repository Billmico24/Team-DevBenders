import React from 'react';
import s from './Sidebar.module.scss';
import { Summary } from './Summary';
import { Diet } from './Diet';

export const SideBar = () => {


    return (
        <div className={s.Back}>
            <div className={s.SidebarSection}>
                <div className={s.SidebarWrap}>
                    <Summary />
                    <Diet />
                </div>
            </div>
        </div>
    );
};

