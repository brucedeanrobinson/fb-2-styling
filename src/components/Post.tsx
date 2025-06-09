export type PostData = {
  id: number,
  author: string,
  authorImage?: string,
  groupName: string,
  timestamp: string,
  postImage?: string,
  description: string,
  likes: number,
  comments: number
}

type PostProps = {
  postData: PostData
}

function Post({ postData }: PostProps) {
  const postStyle = "flex flex-row gap-4 p-4 max-w-4xl"
  const authorImageStyle = "aspect-square w-12 h-12 rounded-full flex-shrink-0"
  const postContentStyle = "flex-1"
  const postImageStyle = "w-full max-w-lg rounded-lg mb-4"
  
  return (
    <div className={postStyle}>
      {/* Left column author image */}
      <div className="relative">
        {/* "Post" label */}
        {/* <div className="absolute -top-6 left-0 text-sm text-gray-light">
          Post
        </div> */}
        
        {postData.authorImage ? (
          <img
            src={postData.authorImage}
            className={authorImageStyle}
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0" />
        )}
      </div>

      {/* Right column post content */}
      <div className={postContentStyle}>
        {/* Author and group info */}
        <div className="mb-3">
          <div className="text-lg">
            <span className="font-bold">{postData.author}</span> in {postData.groupName}
          </div>
          <div className="text-sm text-gray-light">{postData.timestamp}</div>
        </div>

        {/* Post image */}
        {postData.postImage && (
          <img
            src={postData.postImage}
            className={postImageStyle}
          />
        )}

        {/* Post description */}
        <div className="mb-4 text-gray-800">
          {postData.description}
        </div>

        {/* likes comments */}
        <div className="flex gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <span>❤️</span>
            <span>{postData.likes} likes</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💬</span>
            <span>{postData.comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post