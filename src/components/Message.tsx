import clsx from 'clsx'

export type MessageData = {
  id: number,
  author: string,
  authorImage?: string,
  message: string,
  sender: boolean
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
    const isMe = messageData.sender
    
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
      className={clsx("flex gap-2 w-[69%]", messageData.sender ? 'justify-end flex-row-reverse ml-auto': 'justify-start mr-auto')}
    >
      {/* Author image */}
      {showImage && messageData.authorImage ? (
        <div className="relative w-12 h-12 flex-shrink-0">
          <div className="absolute -top-6 left-0 text-gray-500">
            {messageData.author.substring(0, 2)}{messageData.author.length > 2 ? '...' : ''}
          </div>
          <img
            src={messageData.authorImage}
            alt={messageData.author}
            className={imageStyle}
          />
        </div>
      ) : (
        <div className="w-12 h-12 flex-shrink-0" />
      )}
  
      {/* Message */}
      <div className={clsx(messageStyle, getBorderRadius(), messageData.sender ? messageAuthorStyle : messageReceiverStyle)}>
        <div className="flex-1">
          <div>{messageData.message}</div>
        </div>
      </div>
    </div>
  )
}

export default Message