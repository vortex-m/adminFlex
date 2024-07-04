import React from "react";

export const BlogDash = () => {
  return (
    <>
   <div className="ml-[20%] md:w-[80%] w-full h-[100svh] bg-blue-500 p-10">
   <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 flex justify-center items-center lg:px-8">
          <div className="bg-white overflow-hidden border border-gray-500 md:w-[60%] w-full shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <form  className="">
                <div className="mb-4">
                  <label className="text-xl text-gray-600">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-2 border-gray-300 p-2 w-full"
                    name="title"
                    id="title"
                    defaultValue
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="text-xl text-gray-600">Description</label>
                  <br />
                  <input
                    type="text"
                    className="border-2 border-gray-300 p-2 w-full"
                    name="description"
                    id="description"
                    placeholder="(Optional)"
                  />
                </div>
                <div className="mb-8 ">
                  <label className="text-xl text-gray-600">
                    Content <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <textarea
                    name="content"
                    className="border-2 w-full border-gray-500"
                
                  />
                </div>
                <div className="flex p-1">
                  <select
                    className="border-2 border-gray-300 border-r p-2"
                    name="action"
                  >
                    <option>Save and Publish</option>
                    <option>Save Draft</option>
                  </select>
                  <button
                    role="submit"
                    className="p-3 bg-blue-500 text-white hover:bg-blue-400"
                    required
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   </div>
    </>
  );
};

// export default BlogDash;
