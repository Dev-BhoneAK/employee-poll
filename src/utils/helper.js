export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (question, user) {
    const { id, timestamp } = question;
    const { name, avatarURL } = user

    return {
        name,
        id,
        timestamp,
        avatar: avatarURL
    }
}