import React from 'react';
import { FaBookmark } from "react-icons/fa6";


const Blog = ({ blog, handleBookMark,handleMarkAsRead }) => {
    const {cover,title, author_img, author, hashtags,reading_time,id} = blog;

    return (
        <div className='m-2'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={cover}
                        alt="blogs" />
                </figure>
                <div className="card-body">
                    <div className='author flex justify-around items-center'>
                        <h1>{author}</h1>
                        <img className='w-16' src={author_img} alt="" />
                        <button onClick={()=>handleBookMark(blog)}><FaBookmark size={25} /></button>


                    </div>
                    <h2 className="card-title">{title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className='flex'>
                        {
                            hashtags.map(hash=><p className='border-2'>{hash}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleMarkAsRead(reading_time, id)} className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;