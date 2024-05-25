function formatConvHistory(messages) {
    console.log(messages)
    return messages.map((message, index) => {
        return (index % 2 === 0) ? `Human: ${message}` : `AI: ${message}`
    }).join('\n')
}

export { formatConvHistory }