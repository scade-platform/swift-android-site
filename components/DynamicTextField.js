import React from 'react';
import ReactMarkdown from "react-markdown";


export default function DynamicTextfield (props)  {
    const {post} = props
  return (
    <div>
     <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  )
}


