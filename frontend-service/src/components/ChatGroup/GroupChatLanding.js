import React from 'react'
import GroupChatQueue from './GroupChatQueue.js'
import cssModule from "./GroupChatLanding.css"

const dataList = [
    {
        "imgUrl": "/logo192.png",
        "groupName": "Java Group",
        "groupCreatedAt": "2024/23/11",
        "createdBy": "Hrithik"
    },
    {
        "imgUrl": "/logo192.png",
        "groupName": "Python Group",
        "groupCreatedAt": "2024/20/11",
        "createdBy": "Sam"
    },
    {
        "imgUrl": "/logo192.png",
        "groupName": "Node.js Group",
        "groupCreatedAt": "2024/19/11",
        "createdBy": "Jam"
    },
    {
        "imgUrl": "/logo192.png",
        "groupName": "C++ Group",
        "groupCreatedAt": "2024/26/11",
        "createdBy": "Dummy"
    }
]
const GroupChatLanding = () => {
    return <div className="groupMessageContainer">
        {
            dataList.map(groupData => <GroupChatQueue groupData={groupData}></GroupChatQueue>)
        }
    </div>
}

export default GroupChatLanding;