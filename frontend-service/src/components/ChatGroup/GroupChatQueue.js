import React from 'react';
import cssModule from './GroupChatQueue.module.css';
import ProfileImage from "../commonComponents/ProfileImage.js";
import CommonKeyValue from "../commonComponents/CommonKeyValue.js";
import { BsThreeDotsVertical } from 'react-icons/bs';

const GroupChatQueue = (props) => {

    return <div className={cssModule.ChatGroupQueue}>
        <ProfileImage url={props.groupData.imgUrl}></ProfileImage>
        <span className={cssModule.groupName}>{props.groupData.groupName}</span>
        <span>
            <BsThreeDotsVertical size={24}></BsThreeDotsVertical>
        </span>
    </div>
}

export default GroupChatQueue;