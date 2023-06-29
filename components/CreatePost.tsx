import axios from '@/lib/axiosConfig';
import { useForm } from 'react-hook-form';

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data: any) => {
  data.authorId = "647acd3df2c57d976165715a"  
  try {
    let res = await axios.post('/post/create',{
      ...data
    })
    if(res.data == 'success'){
      alert('blog is created successfully!')
    }else{
      console.log('Something went wrong!')
    }
    
  } catch (error) {
    
  }
    console.log(data)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="mb-3">
            <label htmlFor="title" className="dark:text-white text-black">
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register('title', { required: true })}
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="dark:text-white text-black">
              Description
            </label>
            <textarea
              id="description"
              {...register('description', { required: true })}
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black min-h-[100px]"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="dark:text-white text-black">
              Category
            </label>
            <select
              {...register('category', { required: true })}
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
              {...register('content', { required: true })}
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
              {...register('heading', { required: true })}
              id="heading"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageUrl" className="dark:text-white text-black">
              Image Url
            </label>
            <input
              type="text"
              {...register('imageUrl', { required: true })}
              id="imageUrl"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="slug" className="dark:text-white text-black">
              Slug
            </label>
            <input
              type="text"
              {...register('slug', { required: true })}
              id="slug"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="dark:text-white text-black">
              Tags
            </label>
            <input
              type="text"
              {...register('tags', { required: true })}
              id="tags"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black"
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
    </form>
  );
};

export default CreatePost;
