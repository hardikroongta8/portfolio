import Lottie from "lottie-react";
import NotFound from "../assets/lottie/not_found.json";

export default function NotFoundPage() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center h-5/6">
        <div className="w-3/5 md:w-1/3 mx-auto">
          <Lottie animationData={NotFound} />
        </div>
        <div className="flex flex-col mt-4 items-center text-center">
          <h1 className="text-white w-fit text-2xl md:text-3xl font-montserrat">
            Lost your way?
          </h1>
          <p className="text-white md:text-xl my-3 w-4/6 font-montserrat">
            Looks like you've ventured into uncharted territory!
          </p>
          <div className="mt-8 w-fit bg-gray-700 px-5 py-2 rounded-xl">
            <p className="text-white text-lg md:text-xl font-nunito">
              <a href="/">Return home</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
