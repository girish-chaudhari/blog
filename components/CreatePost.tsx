import axios from '@/lib/axiosConfig';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import * as yup from 'yup';
import Editor from './Editor';
import { useEffect, useState } from 'react';

const options = [
  { value: 'nextjs', label: 'Nextjs' },
  { value: 'prisma', label: 'Prisma' },
  { value: 'react', label: 'React' }
];
const items = [
  { id: 1, name: 'dropdown1' },
  { id: 2, name: 'dropdown2' }
];

const schema = yup.object().shape({
  tags: yup
    .array()
    // .of(yup.string())
    .min(1, 'min 1 tag is required!')
    // .nullable() // for handling null value when clearing options via clicking "x"
    .required('tags is required'),
  title: yup.string().required('Field is required!'),
  description: yup.string().required('Field is required!'),
  category: yup.string().required('Field is required!'),
  content: yup.string().required('Field is required!'),
  heading: yup.string().required('Field is required!'),
  imageUrl: yup.string().required('Field is required!'),
  slug: yup.string().required('Field is required!')
  // tags: yup.string().required('Field is required!')
});

const CreatePost = () => {
  const [tags, setTags] = useState<string[]>([])
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const getAllTags = async () => {
    try {
      let res = await axios.get('/post/tags');
      let { status, data } = res.data;
      if (status == 'success') {
        console.log('data', data)
        let arr:string[] =[]
        data.map((str: string, i : number) =>{
          arr.push({ id: i, name: str } as any);
          return 
        })
        setTags([...arr])
      } else {
      }
    } catch (error) {}
  };

  useEffect(() => {
    getAllTags();
  }, []);

  // console.log('errors >>', errors);

  const onSubmit = async (data: any) => {
    data.authorId = '647acd3df2c57d976165715a';
    data.tags = data.tags.name
    console.log('data', data)
    try {
      let res = await axios.post('/post/create', {
        ...data
      });
      if (res.data == 'success') {
        alert('blog is created successfully!');
      } else {
        console.log('Something went wrong!');
      }
    } catch (error) {
      console.log('Something went wrong!');
    }
    console.log(data);
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
              {...register('title')}
              className={`h-10 border mt-1 rounded px-4 w-full ${
                errors.title
                  ? 'ring-red-500 ring-2'
                  : 'ring-blue-500 focus:ring-2'
              } outline-none ring-offset-2 bg-gray-50 text-black`}
            />
            {errors.title && (
              <p className="text-red-500 mt-2"> {errors.title.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="dark:text-white text-black">
              Description
            </label>
            <textarea
              id="description"
              {...register('description')}
              className={`h-10 border mt-1 rounded px-4 min-h-[120px] w-full ${
                errors.description
                  ? 'ring-red-500 ring-2'
                  : 'ring-blue-500 focus:ring-2'
              } outline-none ring-offset-2 bg-gray-50 text-black`}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 mt-1"> {errors.description.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="dark:text-white text-black">
              Tags
            </label>
            <Controller
              name="tags"
              control={control}
              render={({ field }: any) => (
                <Select
                  isMulti
                  {...field}
                  isClearable // enable isClearable to demonstrate extra error handling
                  isSearchable={false}
                  className={`react-dropdown `}
                  classNames={{
                    control: (state) =>
                      `${
                        errors.tags
                          ? 'ring-red-500 ring-2'
                          : `ring-blue-500 ${state.isFocused && 'ring-2'}`
                      } outline-none`
                  }}
                  classNamePrefix="dropdown"
                  options={tags}
                  getOptionLabel={(option: { name: string }) => option.name}
                  getOptionValue={({ name }: { name: string }) => name}
                />
              )}
            />
            {errors.tags && (
              <p className="text-red-500 mt-1"> {errors.tags.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="dark:text-white text-black">
              Content
            </label>
            <Controller
              name="content"
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Editor
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  error={errors.content}
                />
              )}
            />
            {errors.content && (
              <p className="text-red-500 mt-1"> {errors.content.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="dark:text-white text-black">
              Category
            </label>
            <select
              {...register('category')}
              id="category"
              className={`h-10 border mt-1 rounded px-4 w-full ${
                errors.category
                  ? 'ring-red-500 ring-2'
                  : 'ring-blue-500 focus:ring-2'
              } outline-none ring-offset-2 bg-gray-50 text-black`}
            >
              <option value="code">Code</option>
              <option value="life">Life</option>
              <option value="mix">Mix</option>
            </select>
            {errors.category && (
              <p className="text-red-500 mt-1"> {errors.category.message}</p>
            )}
          </div>

          {/* <div className="mb-3">
            <label htmlFor="content" className="dark:text-white text-black">
              Content
            </label>
            <textarea
              {...register('content')}
              id="content"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-black min-h-[100px]"
            ></textarea>
          </div> */}
          <div className="mb-3">
            <label htmlFor="heading" className="dark:text-white text-black">
              Heading
            </label>
            <input
              type="text"
              {...register('heading')}
              id="heading"
              className={`h-10 border mt-1 rounded px-4 w-full ${
                errors.heading
                  ? 'ring-red-500 ring-2'
                  : 'ring-blue-500 focus:ring-2'
              } outline-none ring-offset-2 bg-gray-50 text-black`}
            />
            {errors.heading && (
              <p className="text-red-500 mt-1"> {errors.heading.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="imageUrl" className="dark:text-white text-black">
              Image Url
            </label>
            <input
              type="text"
              {...register('imageUrl')}
              id="imageUrl"
              className={`h-10 border mt-1 rounded px-4 w-full ${
                errors.imageUrl
                  ? 'ring-red-500 ring-2'
                  : 'ring-blue-500 focus:ring-2'
              } outline-none ring-offset-2 bg-gray-50 text-black`}
            />
            {errors.imageUrl && (
              <p className="text-red-500 mt-1"> {errors.imageUrl.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="slug" className="dark:text-white text-black">
              Slug
            </label>
            <input
              type="text"
              {...register('slug')}
              id="slug"
              className={`h-10 border mt-1 rounded px-4 w-full ${
                errors.slug
                  ? 'ring-red-500 ring-2'
                  : 'ring-blue-500 focus:ring-2'
              } outline-none ring-offset-2 bg-gray-50 text-black`}
            />
            {errors.slug && (
              <p className="text-red-500 mt-1"> {errors.slug.message}</p>
            )}
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
