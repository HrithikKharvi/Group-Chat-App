import React from 'react'
import GroupChatQueue from './GroupChatQueue.js'
import useApiHook from '../../customHooks/useApiHook.js';
import cssModule from "./GroupChatLanding.css"

import { URL_GET_INITIAL_GROUP_LOAD_DATA } from '../../commons/constant.js';

function formGroupsWithData(groups) {
    console.log(groups);
    return groups.map(group => {
        return {
            "key": group["channelId"],
            "imgUrl": "/logo192.png",
            "groupName": group["chanelName"],
        }
    })
}
const GroupChatLanding = () => {

    const groupData = useApiHook(URL_GET_INITIAL_GROUP_LOAD_DATA + "?userId=1234", { "method": "GET" });
    let groups = groupData["data"];
    groups = groups['groupsWithMessages'];

    if (groups == undefined || groups == null) return <>
        Wait data is loading
    </>

    return <div className="groupMessageContainer">
        {
            formGroupsWithData(groups).map(groupData => <GroupChatQueue key={groupData["key"]} groupData={groupData}></GroupChatQueue>)
        }
    </div>

}

export default GroupChatLanding;