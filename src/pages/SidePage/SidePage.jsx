import React, { Suspense } from 'react';
import { Summary } from '../../components/SideBar/Summary';
import { Diet } from '../../components/SideBar/Diet';
import s from '../../components/SideBar/Sidebar.module.scss';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const SidePage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Outlet />
        <section className={s.SidebarSection}>
          <div className={s.SidebarWrap}>
            <Summary dailyCalorie={0} />
            <Diet diet={[]} />
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default SidePage;
