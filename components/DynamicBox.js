import React from 'react';
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import { ReactLenis } from "lenis/dist/lenis-react";
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
  } from "motion/react";



export default function DynamicBox  (props)  {
    const {post} = props
  return (
    <div href={post.id} >
        
            <div>
            <div 
            className="border border-black/[.08] shadow rounded-md p-4 max-h-4xl ms-auto" style={{
                width: 896,
            }}>
                                    <div id={post.id}  className="flex space-x-4">
                                    
                                        <div className="flex-1 space-y-4 py-1">
                                        <div className="font-semibold">{post.title},{post.id}</div>
                                        <div className="space-y-2">
                                        {/* NEW: Render description or content as Markdown */}
              <ReactMarkdown>{post.description}</ReactMarkdown>
              {/* Optionally render full Markdown content: */}
              <ReactMarkdown>{post.content}</ReactMarkdown>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
            </div>
            
    </div>
  )
}


