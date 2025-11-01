import React from 'react';
import cssModule from './GroupChatQueue.module.css';
import ProfileImage from "../commonComponents/ProfileImage.js";
import CommonKeyValue from "../commonComponents/CommonKeyValue.js";
import { BsThreeDotsVertical } from 'react-icons/bs';

const GroupChatQueue = (props) => {
    console.log("group data in props ", props.groupData);

    return <div className={cssModule.ChatGroupQueue}>
        <ProfileImage url={props.groupData.imgUrl}></ProfileImage>
        <div className={cssModule.chatGroupShortSummary}>
            <span className={cssModule.groupName}>{props.groupData.groupName}</span>
            <span className={cssModule.groupLastMessage}>{props.groupData.latestMessage.message}</span>
            <span className={cssModule.groupLastMessageSentOn}>{props.groupData.latestMessage.sentOn}</span>
        </div>
    </div>
}

export default GroupChatQueue;