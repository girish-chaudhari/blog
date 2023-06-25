import React from 'react';

const CreatePost = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="mb-3">
            <label htmlFor="title" className="dark:text-white text-black">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="dark:text-white text-black">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
            >
              <option value="code">Code</option>
              <option value="life">Life</option>
              <option value="mix">Mix</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="dark:text-white text-black">
              Content
            </label>
            <textarea
              name="content"
              id="content"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black min-h-[100px]"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="heading" className="dark:text-white text-black">
              Heading
            </label>
            <input
              type="text"
              name="heading"
              id="heading"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
              value=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageUrl" className="dark:text-white text-black">
              Image Url
            </label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
              value=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="slug" className="dark:text-white text-black">
              Slug
            </label>
            <input
              type="text"
              name="slug"
              id="slug"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
              value=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="dark:text-white text-black">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              id="tags"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
              value=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="dark:text-white text-black">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
              value=""
            />
          </div>

          <div className="md:col-span-5 text-right">
            <div className="inline-flex items-end">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
