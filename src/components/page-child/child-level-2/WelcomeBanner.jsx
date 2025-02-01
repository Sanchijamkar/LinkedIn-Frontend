import React from 'react'
const WelcomeBanner = () => {
  return (


    <div className="welcome-banner bg-white mx-auto height-welcome-card w-auto">
      <h1 className="text-xl font-medium text-black text-left px-5 pt-4">
        Welcome to LinkedIn
      </h1>

      <div className="m-3 w-auto mb-1 mt-2">
        <div className="flex justify-start items-center">
          <div className="w-full">
            <div className="w-auto bg-gray-200 rounded-full h-2 mx-2 mt-2 mb-3">
              <div className="bg-green-900 h-2 rounded-l-full" style={{ width: "38%" }}></div>
            </div>
          </div>
          <div className="pb-2 w-24">
            <p className="m-auto text-xs text-gray-400">
              1/3 complete
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-100 mx-5 py-20  w-auto h-80 ">

        <div className="flex justify-center">
          <svg
            className="h-16 w-16 text-lime-800"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" r="9" />
            <path d="M9 12l2 2l4 -4" />
          </svg>
        </div>

        <h1 className="text-center text-2xl font-medium">
          Followed sources
        </h1>
        <p className="text-center mx-9">
          Check your feed for the latest updates or news.
        </p>

        <div className="mr-3 absolute right-0 bottom-16">
          <svg
            xmlns="credits sa owner"
            width="38"
            height="38"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" fill="grey"></circle>
            <path d="m10 8 4 4-4 4"></path>
          </svg>
        </div>
      </div>
    </div>

  )
}

export default WelcomeBanner