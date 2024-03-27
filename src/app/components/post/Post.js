import { BsThreeDots } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";

const Post = ({ postIndex }) => {
  return (
    <div className="flex flex-col w-full border-gray-200 border">
      <div className="flex items-center justify-between w-full p-2">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-10 h-10 bg-black border-2 rounded-full" />
          <div>username</div>
        </div>
        <div className="w-4 select-none ">
          <BsThreeDots className="text-xl" />
        </div>
      </div>
      <div className="aspect-square bg-black w-full h-full "></div>

      <div className="flex justify-between p-2 text-lg items-center">
        <div className="flex space-x-2">
          <div>
            <AiOutlineHeart
              size={25}
              className="hover:text-black/60 text-black cursor-pointer"
            />
          </div>
          <div>
            <FaRegComment
              size={22}
              className="hover:text-black/60 text-black cursor-pointer"
            />
          </div>
          <div>
            <IoShareOutline
              size={22}
              className="hover:text-black/60 text-black cursor-pointer"
            />
          </div>
        </div>
        <div>
          <BsBookmark className="hover:text-black/60 text-black cursor-pointer" />
        </div>
      </div>
      <div className="px-2">1000 likes</div>
      <div className="p-2">
        <div className="flex flex-col space-y-1">
          {new Array(3).fill(0).map((_, i) => (
            <div key={i} className="flex space-x-2">
              <div className="font-medium">username</div>
              <div>comment {i + 1}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-2">3 hours ago</div>
      <div className="px-2 mt-1 flex items-center space-x-3 py-4 border-t border-gray-200">
        <div>
          <BsEmojiSmile className="text-lg" size={22}/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="w-full flex px-2">
          <div className="w-full">
            <input
              type="text"
              name={`comment ${postIndex}`}
              id={`comment ${postIndex}`}
              className="w-full outline-none rounded px-1"
              placeholder="Add a comment..."
            />
          </div>
          <div>
            <button className="text-blue-600 font-semibold text-sm">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
