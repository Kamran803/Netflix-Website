import React from "react";
import SavedShows from "../components/SavedShows";

function Account() {
  return (
    <>
      <div className="w-full text-white">
        <img
          className=" w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/87ae1b52-0b09-4d22-8675-c5d65706d838/PK-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_9dd4a4fb-14d8-4724-ae06-a127d945aaea_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
          <div className="absolute  top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
          </div>
        </div>
      </div>
      <SavedShows />
    </>
  );
}

export default Account;
