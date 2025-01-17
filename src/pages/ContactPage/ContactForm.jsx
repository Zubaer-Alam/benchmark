import React from 'react'
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa6'

const ContactForm = () => {
    return (
        <div className='w-5/6 lg:w-3/6'>
            <form>
                <h1 className="text-4xl text-black font-bold">Contact</h1>
                <p className="text-sm mt-1 text-dark">
                    <FaEnvelope className='inline-block my-4'></FaEnvelope> careerbenchmark71@gmail.com
                </p>

                <div className="mb-6">
                    <label
                        htmlFor="name"
                        className={`block mb-4 text-sm font-medium text-dark`}
                    >
                        User name
                    </label>
                    <input
                        type="name"
                        id="name"
                        className="relative flex p-2.5 rounded-lg text-black bg-gray-400/10 hover:bg-gray-400/20 outline-none border-2 border-white/0 w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5 focus:bg-gray-400/20 focus:border-orange-600/70 border-neutral-600"
                        placeholder="User name"

                        required=""
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className={`block mb-4 text-sm font-medium text-dark`}
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="relative flex p-2.5 rounded-lg text-black bg-gray-400/10 hover:bg-gray-400/20 outline-none border-2 border-white/0 w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5 focus:bg-gray-400/20 focus:border-orange-600/70 border-neutral-600"
                        placeholder="Enter your email"
                        required=""
                    />
                </div>

                <div className="flex items-start flex-col mb-6">
                    <label
                        htmlFor="message"
                        className={`block mb-4 text-sm font-medium text-dark`}
                    >
                        Your message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        className="relative flex p-2.5 rounded-lg text-black bg-gray-400/10 hover:bg-gray-400/20 outline-none border-2 border-white/0 w-full transition-all duration-200 ease-in-out sm:text-sm sm:leading-5 focus:bg-gray-400/20 focus:border-orange-600/70 border-neutral-600"
                        placeholder="Leave a message..."
                        defaultValue={""}
                    />

                </div>
                <button className="py-2 w-40 px-3 rounded-sm  bg-red-700 hover:bg-red-600 duration-300 text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group"><svg viewBox="0 0 1024 1024" className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M244.5 662l268.1-446.4 268 446.4z" fill="#d26d6d"></path><path d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z" fill="#c71d1d"></path><path d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z" fill="#ffffff"></path><path d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z" fill="#c71d1d"></path><path d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z" fill="#d26d6d"></path><path d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z" fill="#bb1010"></path><path d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z" fill="#d26d6d"></path><path d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z" fill="#bb1010"></path></g></svg><span className="duration-500">Send</span></button>
            </form>

        </div>
    )
}

export default ContactForm