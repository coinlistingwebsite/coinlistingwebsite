import React from "react";

const ProfileBanner = ({ details, onDatabase }) => {
  if (!details.banner) {
    return (
      <div className="relative flex justify-center">
        <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg">
          <img
            className="h-full w-full rounded-full object-cover"
            src={details.logo}
            alt={onDatabase ? details.project_name : details.name}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Banner Container */}
      <div
        className="relative flex h-48 w-full justify-center rounded-xl overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${details.banner}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Profile Picture */}
      <div className="absolute left-1/2 -bottom-12 -translate-x-1/2">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg">
          <img
            className="h-full w-full rounded-full object-cover"
            src={details.logo}
            alt={onDatabase ? details.project_name : details.name}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
