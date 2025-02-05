import React from "react";

const Contents = () => {
  const data = [
    {
      title: "News Platform",
      points: [
        "Swipe-able cards like Instagram reels",
        "Comments",
        "Social share with image preview",
        "Support for user-created time-bound disappearing stories",
      ],
    },
    {
      title: "Direct Messaging",
      points: [
        "Developed with Azure Communication REST APIs",
        "Support for document sharing",
        "WhatsApp-like message reactions",
      ],
    },
    {
      title: "Salaries Platform",
      points: [
        "CRUD operations for salary details",
        "Sort and filters basis compensation, company and role",
      ],
    },
    {
      title: "Mobile App Onboarding",
      points: [
        "Authentication with phone number and OTP",
        "Permissions for notifications, files and media",
      ],
    },
  ];

  return (
    <div className="mb-24">
      <div className="flex justify-center items-center gap-6 mb-10">
        <h3 className="text-white text-4xl text-opacity-60">EXPERIENCE</h3>
        <div className="w-full bg-white h-[1px] opacity-40" />
      </div>
      <div className="flex gap-14">
        <div className="flex-[1]">
          <h4 className="text-white text-4xl font-semibold mb-8">Grapevine</h4>
          <p className="text-white text-3xl font-light text-opacity-80 mt-2">
            Frontend Engineer
          </p>
          <p className="text-white text-3xl font-light text-opacity-40 mt-2">
            Oct ‘23 - present
          </p>
        </div>
        <div className="flex-[2]">
          <p className="body_text">
            Grapevine is professional networking app with 450k users. Joining as
            the <span className="body_heading">founding engineer</span>,
            developed end-to-end UX for key features:
          </p>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <h6 className="body_heading mt-12">{item.title}</h6>
                <ul className="list-disc pl-8 space-y-1">
                  {item.points.map((point, index) => {
                    return (
                      <li className="body_text" key={index}>
                        {point}
                      </li>
                    );
                  })}
                  <a href="https://www.google.com/" target="blank">
                    <li className="body_text_link">Watch Video</li>
                  </a>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contents;
