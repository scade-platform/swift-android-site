import React from 'react';


export default function DynamicNavbar  (props)  {
    const {post} = props
  return (
          <li><a href={post.link}>{post.title},{post.id},{post.link}</a></li>                     
  )
}


