import React from "react";

const dummyJobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    logo: "https://logo.clearbit.com/google.com",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Amazon",
    location: "Seattle, WA",
    logo: "https://logo.clearbit.com/amazon.com",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Facebook",
    location: "Menlo Park, CA",
    logo: "https://logo.clearbit.com/facebook.com",
  },
  {
    id: 4,
    title: "UX Designer",
    company: "Apple",
    location: "Cupertino, CA",
    logo: "https://logo.clearbit.com/apple.com",
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: "Netflix",
    location: "Los Gatos, CA",
    logo: "https://logo.clearbit.com/netflix.com",
  },
  {
    id: 6,
    title: "Backend Engineer",
    company: "Twitter",
    location: "San Francisco, CA",
    logo: "https://logo.clearbit.com/twitter.com",
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "Microsoft",
    location: "Redmond, WA",
    logo: "https://logo.clearbit.com/microsoft.com",
  },
  {
    id: 8,
    title: "Cybersecurity Analyst",
    company: "Tesla",
    location: "Palo Alto, CA",
    logo: "https://logo.clearbit.com/tesla.com",
  }
];

const JobPage = () => {
  return (
    <div className="job-page p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Jobs for You</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyJobs.map((job) => (
          <div key={job.id} className="job-card bg-white shadow-md p-4 rounded-lg flex items-center gap-4">
            <img src={job.logo} alt={job.company} className="w-12 h-12 object-contain" />
            <div>
              <h2 className="text-lg font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500 text-sm">{job.location}</p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Apply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPage;
