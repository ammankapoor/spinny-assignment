import React, {useState} from "react";
import "./Header.scss";

import utility from "../../shared/utility";

function Header() {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const deviceType = utility.getDeviceType();

  function getContactList(){
    return <React.Fragment>
        <a href="https://zety.com/mycv/ammankapoor" target="_blank" className='anchor'>
            <img
              className="img"
              src="https://storage.needpix.com/rsynced_images/sheet-1292824_1280.png"
              alt="resume"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/amman-kapoor-6a8a95120/"
            target="_blank"
            className='anchor'
          >
            <img
              className="img"
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
              alt="linkedin"
            />
          </a>
          <a href="https://github.com/ammankapoor" target="_blank" className='anchor'>
            <img
              className="img"
              src="https://cdn.icon-icons.com/icons2/1907/PNG/512/iconfinder-github-4555889_121361.png"
              alt="github"
            />
          </a>
    </React.Fragment>
  }

  return (
    <div className="container flex">
      <div className="flex">
        <div className="flex logo">A</div>
        <div className="title">Aman Kapoor</div>
      </div>
      {deviceType.desktop ? (
        <div>
          {getContactList()}
        </div>
      ) : (
        <div className={`${menuOpen && 'change'} menu-container`} onClick={()=>toggleMenuOpen(!menuOpen)}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      )}
      {menuOpen &&
          <div className="overlay flex flex-column">
              {getContactList()}
        </div>
      }
    </div>
  );
}

export default Header;
