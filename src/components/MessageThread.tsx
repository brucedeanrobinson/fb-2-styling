import Message, { type MessageData } from './Message'

type MessageThreadProps = {
  messages: MessageData[]
}

function MessageThread({ messages }: MessageThreadProps) {

  // okay, so 
  // 1. to only show one image at the top right of consecutive messages by same author
  // so i need have a bool flag that tracks last author
  // or... loop messages checking the author and `if else` it out
  // single message, first in group and last in group, else (sandwiched)

  return (
    <div className="flex flex-col gap-4 p-4">
      {messages.map((message, index) => {
        const prevMessage = messages[index - 1]
        const nextMessage = messages[index + 1]
        
        const isFirstInGroup = !prevMessage || prevMessage.sender !== message.sender
        const isLastInGroup = !nextMessage || nextMessage.sender !== message.sender
        
        return (
          <Message 
            key={message.id}
            messageData={message}
            showImage={isFirstInGroup}
            isFirstInGroup={isFirstInGroup}
            isLastInGroup={isLastInGroup}
          />
        )
      })}
    </div>
  )
}

export default MessageThread