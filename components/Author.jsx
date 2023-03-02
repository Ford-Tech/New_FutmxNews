import React from 'react';


const Author = ({ author }) => {
  return (
    <div className="flex items-center flex-col text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute -top-10 w-20 h-20  overflow-hidden rounded-full">
        <img
          src={author.photo.url} 
          alt={author.name} 
          className='align-middle'
        />
      </div>
      <div className="justify-center">
        <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
        <p className='text-white text-lg'>{author.bio}</p>
      </div>
    </div>
  );
}

export default Author;