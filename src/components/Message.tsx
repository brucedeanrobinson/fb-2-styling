import clsx from 'clsx'

export type MessageData = {
  id: number,
  author: string,
  authorImage?: string,
  message: string,
}

type MessageProps = {
  messageData: MessageData,
  showImage?: boolean,
  isFirstInGroup?: boolean,
  isLastInGroup?: boolean
}

function Message({ messageData, showImage = true, isFirstInGroup = true, isLastInGroup = true }: MessageProps) {

  //todo "border-radius dependent on next-message"
  const messageStyle = "w-[800px] min-h-[69px] flex flex-row items-center gap-3 p-4 px-4"
  const messageAuthorStyle = "bg-blue-message"
  const messageReceiverStyle = "bg-gray-default"
  const imageStyle = "aspect-square w-12 h-12 rounded-full"

  const getBorderRadius = () => {
    const isMe = messageData.author === "me"
    
    if (isFirstInGroup && isLastInGroup) {
      return "rounded-2xl"
    } else if (isFirstInGroup) {
      return isMe ? "rounded-2xl rounded-br-sm" : "rounded-2xl rounded-bl-sm"
    } else if (isLastInGroup) {
      return isMe ? "rounded-2xl rounded-tr-sm" : "rounded-2xl rounded-tl-sm"
    } else {
      return isMe ? "rounded-2xl rounded-tr-sm rounded-br-sm" : "rounded-2xl rounded-tl-sm rounded-bl-sm"
    }
  }

  return (
    <div
      className={clsx("flex gap-2 w-[69%]", messageData.author === "me" ? 'justify-end flex-row-reverse ml-auto': 'justify-start mr-auto')}
    >
      {/* TODO author name. seems tricky, i know i need to use some sort of inline for the name to appear as if it's adjacent to a preceeding other authored message, but like... */}

      {/* Author image */}
      {showImage && messageData.authorImage ? (
        <img
          src={messageData.authorImage}
          alt={messageData.author}
          className={clsx(imageStyle, "self-start")}
        />
      ) : (
        <div className="w-12 h-12 flex-shrink-0" /> // invisible space
      )}

      {/* Message */}
      <div className={clsx(messageStyle, getBorderRadius(), messageData.author === 'me' ? messageAuthorStyle : messageReceiverStyle)}>
        <div className="flex-1">
          <div>{messageData.message}</div>
        </div>
      </div>
    </div>
  )
}

export default Message