"use client";
import AuthAnimation from "../../public/assets/animations/auth-page.json";
import Lottie from "react-lottie-player";
import Button from "./components/button/Button";

export default function Home() {
  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex h-4/5 w-4/5">
        <div className="w-full h-full">
          First div
          <Lottie
            play
            loop
            animationData={AuthAnimation}
            className="w-full h-full"
          />
        </div>
        <div className="w-full bg-red-200">

          <form onSubmit={submitHandler}>
             <input type="email" name="email" id="email"/>
             <input type="password" name="password" id="password"/>
             <button type="submit" className="bg-[#0095F6] py-2 px-6 text-white active:scale-95 transform trnasition">
              Log In
             </button>
          </form>

        </div>
      </div>
    </div>
  );
}
