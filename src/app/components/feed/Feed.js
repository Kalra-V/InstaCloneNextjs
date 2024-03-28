
import Header from "../header/Header";
import Post from "../post/Post";

const Feed = ({ setIsAuthenticated }) => {
  return (
    <div className="w-full h-full bg-[#FAFAFA]">
      <Header setIsAuthenticated={setIsAuthenticated}/>

      <div className="grid w-full grid-cols-3 gap-6 mx-auto mt-20 max-w-screen-lg">
        <div className="w-full  col-span-2">
          <section className="flex flex-col gap-y-3">
            {
                new Array(5).fill(1).map((_,i)=> (
                    <Post key={i} postIndex={i}/>
                ))
            }
          </section>
        </div>

        <div className="col-span-1 fixed right-[7%] max-w-sm">
          <div className="flex">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tempus, enim nec semper suscipit, tortor metus tempus nisl, eu
            finibus velit purus ac dui. Nam sed rhoncus sem, in pellentesque
            dolor. Nunc molestie vulputate orci ut sollicitudin. Phasellus
            scelerisque interdum venenatis. Integer sed eros ipsum. Nullam nec
            ornare tortor, porta.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
