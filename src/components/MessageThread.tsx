import Message, { type MessageData } from './Message'

type MessageThreadProps = {
  messages: MessageData[]
}

function MessageThread({ messages }: MessageThreadProps) {

  return (
    <div className="flex flex-col gap-4 p-4">
      {messages.map(message => (
        <Message 
          key={message.id}
          messageData={message}
        />
      ))}
    </div>
  )
}

export default MessageThread