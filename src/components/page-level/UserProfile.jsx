import React from "react";
import UserProfileCard from "../reusable/UserProfileCard"; // ✅ Correct import path

const UserProfile = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
      <UserProfileCard />
    </div>
  );
};

export default UserProfile;
