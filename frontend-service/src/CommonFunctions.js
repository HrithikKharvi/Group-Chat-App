
export function extractLatestMessage(messages) {
    messages.sort((message1, message2) => new Date(message1["sentOn"]) - new Date(message2["sentOn"]))
    return messages[messages.length - 1];
}