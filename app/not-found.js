"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PageNotFound = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <main className="flex items-center justify-center w-full min-h-screen py-8 text-gray-900 page md:py-16 ">
      <div className="relative flex flex-col items-center w-full gap-8 px-8 md:px-18 xl:px-40 md:gap-16">
        <h2 className="text-2xl md:text-[300px] w-full select-none text-center font-black  text-gray-400">
          404
        </h2>
        <p className="text-3xl mt-20 font-bold">Page Not Found with this URL</p>
        <p className="text-2xl font-medium break-words text-dull"></p>
        <div className="flex flex-col justify-between w-full gap-6 md:flex-row md:gap-32 xl:px-16">
          <button
            onClick={handleGoBack}
            className="flex items-center justify-center w-full gap-4 p-3 font-semibold capitalize border-2 border-blue-500 rounded shadow-lg md:w-fit hover:bg-blue-500 md:p-6 focus:outline-none hover:scale-105 active:scale-90 hover:shadow-xl "
          >
            Go back to Previous Page
          </button>
          <Link
            href="/"
            className="rounded flex w-full md:w-fit group items-center gap-4 justify-center border-2 border-green-500 font-semibold hover:bg-green-500 p-3 md:p-6 capitalize focus:outline-none hover:scale-105 active:scale-90 shadow-lg hover:shadow-xl "
          >
            Go back to Home Page
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
