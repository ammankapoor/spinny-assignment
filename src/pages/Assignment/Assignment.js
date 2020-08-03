import React from 'react';
import './Assignment.scss';

import Header from '../../components/Header/Header';
import Overview from '../../components/Overview/Overview';
import Search from '../../container/Search/Search';
import ResultSection from '../../container/ResultSection/ResultSection';

import utility from "../../shared/utility";

function Assignment() {
  const deviceType = utility.getDeviceType();
  return (
    <React.Fragment>
    <div className="app-container">
      <Header />
      <div className={deviceType.desktop && 'flex-container margin-top-50'}>
        <div style={{ width: deviceType.desktop && '50%'}}>
        <Overview />
        </div>
        <div style={{ width: deviceType.desktop && '50%'}}>
        <Search />
        <ResultSection />
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Assignment;
