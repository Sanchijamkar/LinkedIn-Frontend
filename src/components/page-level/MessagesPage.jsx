import React from "react";

const dummyMessages = [
  {
    id: 1,
    sender: "John Doe",
    message: "Hey! How are you?",
    time: "2m ago",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    sender: "Jane Smith",
    message: "Are we still on for the meeting?",
    time: "10m ago",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    sender: "Michael Brown",
    message: "I sent you the documents. Let me know your thoughts.",
    time: "1h ago",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const MessagesPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Messages</h1>

      <div className="bg-white shadow-md rounded-lg p-4">
        {dummyMessages.map((msg) => (
          <div key={msg.id} className="flex items-center gap-4 border-b last:border-none p-3">
            <img src={msg.avatar} alt={msg.sender} className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="text-lg font-semibold">{msg.sender}</h2>
              <p className="text-gray-600">{msg.message}</p>
              <span className="text-gray-400 text-sm">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;
