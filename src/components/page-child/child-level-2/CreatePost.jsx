import React from 'react';
import UserProfilePhoto from "../../../assets/imgs/profile-photo.png";

const CreatePost = () => {
  return (

    <div className='create-post ss:rounded-lg ss:border-l ss:border-r ss-border-bdr-separator'>       
        <div className=" flex items-center ">
        <img 
            src={UserProfilePhoto} 
            className="w-12 h-12 rounded-full ml-5 mt-3 mr-4"/>
        <div className=' mt-3 h-12 flex-grow mr-5 rounded-full border-box border-gray-300 border'>
            <p className='text-gray-700 font-medium text-sm ml-4 my-3'>
                Start a post, try writing with AI
            </p>
            </div>
        </div>

        <div className=' flex justify-between mx-7 mt-4 '>

            <div className='flex '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="#2b6fff" class="size-6">
                < path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 
                2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 
                2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <p className='text-gray-700 text-sm font-medium pl-2 pt-0.5'>
                Photo
            </p>
            </div>

            <div className='flex ml-3 '>
                <svg class="w-[33px] h-[31px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#34b42f" viewBox="0 3 24 24">
                    <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 
                    4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 
                    6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
                </svg>
            <p className='text-gray-700 text-sm font-medium pl-2 pt-0.5'>
                Video
            </p>
            </div>

            <div className='flex mr-1'>
                <svg class="w-[29px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 3 24 24">
                    <path stroke="#b77022" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 
                    1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"/>
                </svg>
            <p className='text-gray-700 text-sm font-medium pl-2 pt-0.5'>
                Write article
            </p>
            </div>

        </div>
    </div>
    );
}

export default CreatePost;
