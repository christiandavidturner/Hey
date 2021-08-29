import React from "react";
import Email from "./Email";

const Read = () => {
  return (
    <div className="bg-mid pb-4">
      <div className="px-14">
        <div className="pb-5 pt-8 text-off-white font-bold">
          PREVIOUSLY SEEN
        </div>
        <Email
          subject={"CS 6035 - Project 1 - Part 1 Released!"}
          body={
            "CS 6035 via Ed - Your instructor Christian Turner posted an announcement on Ed. Simply click to"
          }
          url="user.jpg"
        />
        <Email
          subject={
            "Re: [christiandavidturner/Hey] Emails & Email component (5306237)"
          }
          body={
            "vercel[bot] - Successfully deployed to the following URLs: • hey-clone.vercel.app • hey-christiandavidturner.ve"
          }
          url="github.png"
        />
        <Email
          subject={"Square just requested your Coding Report!"}
          body={
            "CodeSignal - Sign in to take the test and share your Coding Report with Square . Square is waiting for your"
          }
          url="user.jpg"
        />
        <Email
          subject={"The Design Event: Our tips & tricks for a home refresh"}
          body={
            "Crate & Barrel - Furniture, Home Decor and Wedding Registry | Crate and Barrel Plus, earn Double Rewards through"
          }
          url="user.jpg"
        />
        <Email
          subject={
            "Please DocuSign: Christian Turner Ship & Scan Shredding Agreement.docx"
          }
          body={
            "Tanner Murray via DocuSign - Tanner Murray sent you a document to review and sign. REVIEW DOCUMENT Tanner Murray tmurray@"
          }
          url="user.jpg"
        />
      </div>
    </div>
  );
};

export default Read;