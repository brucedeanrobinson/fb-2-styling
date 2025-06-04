import clsx from 'clsx'

export type MessageData = {
  id: number,
  author: string,
  authorImage: string,
  message: string,
}

type MessageProps = {
  messageData: MessageData
}

function Message({ messageData }: MessageProps) {

  //todo "border-radius dependent on next-message"
  const messageStyle = "w-[800px] min-h-[69px] rounded-2xl flex flex-row items-center gap-3 p-4 px-4"
  const messageAuthorStyle = "bg-blue-message"
  const messageReceiverStyle = "bg-gray-default"
  const imageStyle = "aspect-square w-12 h-12 rounded-full"

  return (
    <div
      className={clsx("flex items-end gap-2 w-[69%]", messageData.author === "me" ? 'justify-end flex-row-reverse ml-auto': 'justify-start mr-auto')}
    >
      {/* Author image */}
      <img
        src={messageData.authorImage}
        alt={messageData.author}
        className={imageStyle}
      />

      {/* Message */}
      <div className={clsx(messageStyle, messageData.author === 'me' ? messageAuthorStyle : messageReceiverStyle)}>
        <div className="flex-1">
          <div>{messageData.message}</div>
        </div>
      </div>
    </div>
  )
}

export default Message