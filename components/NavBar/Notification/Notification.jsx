import React from 'react'
import Style from "./Notification.module.css"
import Image from 'next/image'
import Link from 'next/link'
import images from "../../../img"

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image
            src={images.user1}
            alt="profile image"
            width={50}
            height={50}
            className={Style.notification_box_img}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>Gowtham</h4>
          <p>Measure action you user...</p>
          <small>3 minutes ago</small>
          <span className={Style.notification_box_new}></span>
        </div>
      </div>
    </div>
  )
}

export default Notification