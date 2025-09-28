
import React from 'react'
import appwriteService from "../appWrite/config"
import {Link} from 'react-router-dom'

function PostCard({
  // $id, title, featuredImage
  post
}) {
  console.log(appwriteService.getFilePreview(post.featuredImage))
  return (
   <Link to= {`/post/${post.$id}`}>
    <div className='w-full bg-gray rounded-xl p-4'>
      <div className = 'w-full justify-center mb-4'>
        <img src ={post.featuredImage ? appwriteService.getFilePreview(post.featuredImage) : '/placeholder.png'}
         alt ={post.title} className='rounded-xl'/>
      </div>
      <h2>{post.title}</h2>
    </div>
   </Link>
  )
}

export default PostCard

