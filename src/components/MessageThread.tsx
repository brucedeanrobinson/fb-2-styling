import clsx from 'clsx'

export type MessageData = {
  id: number,
  author: string,
  authorImage: string,
  message: string,
}

type MessageThreadProps = {
  messages: MessageData[]
}

function MessageThread({ messages }: MessageThreadProps) {

  //todo "border-radius dependent on next-message"
  const messageStyle = "max-w-[1200px] min-h-[69x] rounded-2xl flex flex-row items-center gap-3 p-4 px-4"
  const messageAuthorStyle = "bg-blue-message"
  const messageReceiverStyle = "bg-gray-default"
  const imageStyle = "aspect-square w-12 h-12 rounded-full"

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* set justify depending on message author */}
      {messages.map(message => (
        <div
          key={message.id}
          className={clsx("flex items-end gap-2", message.author === "me" ? 'justify-end flex-row-reverse': 'justify-start')}
        >
          {/* Author image */}
          <img
            src={message.authorImage}
            alt={message.author}
            className={imageStyle}
          />

          {/* Message */}
          <div className={clsx(messageStyle, message.author === 'me' ? messageAuthorStyle : messageReceiverStyle)}>
          <div className="flex-1">
              <div>{message.message}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MessageThread