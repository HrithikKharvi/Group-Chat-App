import React from 'react'
import GroupChatQueue from './GroupChatQueue.js'
import useApiHook from '../../customHooks/useApiHook.js';
import cssModule from "./GroupChatLanding.css"
import { extractLatestMessage } from "../../CommonFunctions.js";

import { URL_GET_INITIAL_GROUP_LOAD_DATA } from '../../commons/constant.js';

function formGroupsWithData(groups) {
    return groups.map(group => {
        console.log("grooup forming ", group)
        return {
            "key": group["channelId"],
            "imgUrl": "/logo192.png",
            "groupName": group["chanelName"],
            "latestMessage": extractLatestMessage(group?.["messageMetaData"]["messages"])
        }
    })
}
const GroupChatLanding = () => {

    const [groupData, error] = useApiHook(URL_GET_INITIAL_GROUP_LOAD_DATA + "?userId=1234", { "method": "GET" });
    console.log("error " + error);
    if (error != null) return <>
        Failed to load data : <br></br>
        {error}
    </>
    console.log("groupData ", groupData["data"]);
    if (groupData == null || groupData["groupsWithMessages"] == null) return <>
        Wait data is loading
    </>

    let groups = groupData['groupsWithMessages'];
    console.log("groups " + groups);

    return <div className="groupMessageContainer">
        {
            formGroupsWithData(groups).map(groupData => <GroupChatQueue key={groupData["key"]} groupData={groupData}></GroupChatQueue>)
        }
    </div>

}

export default GroupChatLanding;