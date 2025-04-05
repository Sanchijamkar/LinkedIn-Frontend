import React, { useState } from "react";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      sender: "LinkedIn",
      message: "John Doe has viewed your profile.",
      time: "2h ago",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    },
    {
      id: 2,
      sender: "Company XYZ",
      message: "New job posting: Software Engineer at XYZ Company.",
      time: "4h ago",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    },
    {
      id: 3,
      sender: "Jane Smith",
      message: "Jane commented on your post.",
      time: "1d ago",
      icon: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ]);

  // Function to clear notifications
  const clearNotifications = () => setNotifications([]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4 bg-white shadow-md p-4 rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            🔔 Notifications
          </h1>
          {notifications.length > 0 && (
            <button
              className="text-sm text-red-600 hover:text-red-800 font-semibold transition duration-200"
              onClick={clearNotifications}
            >
              Clear All
            </button>
          )}
        </div>

        {/* Notification List */}
        {notifications.length === 0 ? (
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <p className="text-gray-500">No new notifications 💤</p>
          </div>
        ) : (
          <div className="bg-white shadow-md p-4 rounded-lg divide-y divide-gray-200">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-center gap-4 py-4 hover:bg-gray-100 p-3 rounded-md transition duration-200"
              >
                {/* Notification Icon */}
                <img
                  src={notification.icon}
                  alt={notification.sender}
                  className="w-12 h-12 rounded-full border border-gray-300"
                />
                {/* Notification Content */}
                <div className="flex-1">
                  <h2 className="font-semibold text-gray-900">{notification.sender}</h2>
                  <p className="text-gray-600 text-sm">{notification.message}</p>
                  <p className="text-gray-400 text-xs">{notification.time}</p>
                </div>
                {/* Read Indicator */}
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
