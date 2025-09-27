import React from 'react';
import cssModule from './GroupChatQueue.module.css';
import ProfileImage from "../commonComponents/ProfileImage.js";
import CommonKeyValue from "../commonComponents/CommonKeyValue.js";

const GroupChatQueue = (props) => {

    return <div className={cssModule.ChatGroupQueue}>
        <ProfileImage url={props.groupData.imgUrl}></ProfileImage>
        <span className={cssModule.groupName}>{props.groupData.groupName}</span>
        <CommonKeyValue keyAttribute="Created at" value={props.groupData.groupCreatedAt}></CommonKeyValue>
        <CommonKeyValue keyAttribute="Created by" value={props.groupData.createdBy}></CommonKeyValue>
    </div>
}

export default GroupChatQueue;