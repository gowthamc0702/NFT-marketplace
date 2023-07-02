import React, { useState, useEffect } from 'react';
import Image from "next/image"
import Link from "next/link"

//37:44

//icon import 
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from "react-icons/bs"
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

//internal import 
import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index"
import { Button } from "../componentsindex"
import images from "../../img";

const NavBar = () => {
  //--USE STATE

  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setOpenSideMenu(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setOpenSideMenu(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setOpenSideMenu(false);
      setProfile(false);
    }
  }

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setOpenSideMenu(false);
      setProfile(false);

    }
    else {
      setNotification(false);
    }
  }

  const openProfile = () => {
    if (Profile) {
      setProfile(true);
      setNotification(false);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setOpenSideMenu(false);

    }
    else{
      setProfile(false);
    }
  }

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else setOpenSideMenu(false);
  }

  return (

    <div clasName={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo}
              alt="NFT MARKET PLACE"
              width={100}
              height={100} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => { }} className={Style.search_icon} />
            </div>
          </div>

          {/* END OF LEFT SECTION */}
        </div>

        {/* DISCOVER SECTION */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* HELP CENTER SECTION */}

          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>HELP CENTER</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION CENTER */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications className={Style.notify} onClick={() => openNotification()} />

            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON */}
          <div className={Style.navbar_container_right_button}>
            <Button btnName="Create" handleClick={()=>{}} />
          </div>

          {/* USER PROFILE */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />
              {profile && <Profile />}

            </div>
          </div>

          {/* MENU BUTTON */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>

        </div>


      </div>

      {/* SIDEBAR COMPONENT */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  )
}

export default NavBar;