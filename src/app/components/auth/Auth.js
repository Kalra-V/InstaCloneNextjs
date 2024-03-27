"use client";
import AuthAnimation from "../../../../public/assets/animations/auth-page.json";
import Lottie from "react-lottie-player";
import Button from "../button/Button";
import useForm from "../../hooks/useForm";
import { useMemo } from "react";

const Auth = () => {
    const { form, onChangeHandler } = useForm({
        email: "",
        password: "",
      });
    
      const submitHandler = async (e) => {
        e.preventDefault();
        console.log(form)
      };
    
      const isDisabled = useMemo(() => {
        return !Object.values(form).every((val)=> !!val)
    
      }, [form])
    
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
            <div className="w-full bg-white border border-gray-300 p-10">
              <form onSubmit={submitHandler} className="flex flex-col items-center space-y-5">
                <div className="tracking-wider text-5xl my-5">Instagram</div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={onChangeHandler}
                  value={form.email}
                  className="bg-gray-100 border px-2 py-1 placeholder:text-sm hover:bg-transparent focus:bg-transparent outline-none w-full rounded-sm focus:border-gray-400"
                  placeholder="Email"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={onChangeHandler}
                  value={form.password}
                  placeholder="Password"
                  className="bg-gray-100 border px-2 py-1 placeholder:text-sm hover:bg-transparent focus:bg-transparent outline-none w-full rounded-sm focus:border-gray-400"
                />
                <button
                  type="submit"
                  className="bg-[#0095F6] rounded text-sm font-semibold py-2 px-6 text-white active:scale-95 transform transition w-full disabled:bg-opacity-50 disabled:scale-100"
                  disabled={isDisabled}
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      )
};

export default Auth;