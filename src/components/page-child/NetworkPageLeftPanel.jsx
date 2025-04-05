import React from "react";
import ManageMyNetwork from "./child-level-2/ManageMyNetwork";
import AdsLinkedBanner from "./child-level-2/AdsLinkedInBanner";
import MainPageFooter from "../reusable/MainPageFooter";

const dummyNetworkData = [
  { id: 1, name: "Emma Williams", connectionType: "Colleague at Google", image: "https://randomuser.me/api/portraits/women/10.jpg" },
  { id: 2, name: "Liam Johnson", connectionType: "Friend at Meta", image: "https://randomuser.me/api/portraits/men/11.jpg" },
  { id: 3, name: "Sophia Brown", connectionType: "Studied at Harvard University", image: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 4, name: "Noah Davis", connectionType: "Works at Microsoft", image: "https://randomuser.me/api/portraits/men/13.jpg" },
];

const NetworkPageLeftPanel = () => {
  return (
    <div className="network-page-left-panel w-1/4 p-4 bg-gray-50 min-h-screen">
      <div className="manage-my-network-container mt-3 mb-5 p-4 bg-white shadow-lg rounded-xl">
        <h2 className="manage-my-network pb-3 font-bold text-xl text-gray-800">Manage My Network</h2>
        <ManageMyNetwork />
      </div>
      <div className="suggested-connections mt-3 p-4 bg-white shadow-lg rounded-xl">
        <h2 className="pb-3 font-bold text-xl text-gray-800">People You May Know</h2>
        <ul className="space-y-4">
          {dummyNetworkData.map((person) => (
            <li key={person.id} className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition">
              <img src={person.image} alt={person.name} className="w-14 h-14 rounded-full border-2 border-gray-300 shadow-sm" />
              <div>
                <p className="font-semibold text-gray-800">{person.name}</p>
                <p className="text-sm text-gray-500">{person.connectionType}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <AdsLinkedBanner />
      <MainPageFooter />
    </div>
  );
};

export default NetworkPageLeftPanel;
