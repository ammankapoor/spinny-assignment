import React from "react";
import "./Overview.scss";

import utility from "../../shared/utility";

function Overview() {
const deviceType = utility.getDeviceType();
  return (
    <div className={deviceType.desktop && 'main'}>
        <div className='heading'><img className='spinny-logo' src='https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1438197017/bpdpscfwegecqxxx7hkb.png' alt='spinny-logo' />Spinny</div>
        <div className='subheading'>REACT INTERVIEW ASSIGNMENT</div>
        <p className='information'>This assignment is done by using latest version of react, redux, Sass and more. Below is some of the information about the project. </p>
        <ul>
            <li>React 16.13.0 used.</li>
            <li>Redux used.</li>
            <li>Javascript used.</li>
            <li>Webpack used.</li>
            <li>Babel used.</li>
            <li>Sass used.</li>
            <li>ES6 used.</li>
            <li>Debouncing used.</li>
            <li>Support Desktop and Mobile Both.</li>
        </ul>
        <div>On th right corner of screen you can find my resume, linkedin and code repo link.</div>
    </div>
  );
}

export default Overview;
