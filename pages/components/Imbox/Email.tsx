import React from "react";
import Image from "next/image";

interface Email {
  subject: string;
  body: string;
  url: string;
  read: boolean;
}

const today = new Date();
const now = today
  .toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })
  .replace("AM", "am")
  .replace("PM", "pm")
  .replace(" ", "");

const Email = ({ subject, body, url, read }: Email) => {
  return (
    <div className="flex mb-5 xs:w-72 sm:w-full">
      <div className="">
        <p
          className={`text-unread xs:text-xl sm:text-4xl md:text-5xl ${
            read ? "xs:hidden" : ""
          }`}
        >
          •
        </p>
      </div>

      <div className="self-center flex-img flex ">
        <Image
          className="rounded-full"
          src={`/${url}`}
          alt="me"
          width={50}
          height={50}
        />
      </div>

      <div className="self-center px-2 max-w-full	w-5/6">
        <p className="sm:text-lg xs:text-sm xs:font-medium sm:font-bold text-off-white truncate w-auto">
          {subject}
        </p>
        <p className="text-light-grey xs:text-xs sm:text-base w-auto truncate">
          {body}
        </p>
      </div>

      <p className="text-light-grey xs:text-xs sm:text-md flex items-center justify-end ">
        {now}
      </p>
    </div>
  );
};

export default Email;
