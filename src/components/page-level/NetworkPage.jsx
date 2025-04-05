import React from "react";
import NetworkPageLeftPanel from "../page-child/NetworkPageLeftPanel";
import NetworkPageMainPanel from "../page-child/NetworkPageMainPanel";

const dummyNotifications = [
  {
    id: 1,
    message: "John Doe accepted your connection request.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    message: "You have 5 new profile views this week.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    message: "Jane Smith sent you a connection request.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const NetworkPage = () => {
  return (
    <div className="w-full flex gap-6 p-6 bg-gray-100 min-h-screen">
      <NetworkPageLeftPanel />
      <div className="flex-1">
        <NetworkPageMainPanel />
        <div className="mt-6 p-6 bg-white shadow-xl rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Notifications</h2>
          <ul className="space-y-4">
            {dummyNotifications.map((notification) => (
              <li
                key={notification.id}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-md hover:bg-gray-200 transition"
              >
                <img
                  src={notification.image}
                  alt="Profile"
                  className="w-14 h-14 rounded-full border-2 border-gray-300 shadow-sm"
                />
                <p className="text-gray-700 text-lg font-medium">{notification.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NetworkPage;
