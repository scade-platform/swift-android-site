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



export default function DynamicTextfield (props)  {
    const {post} = props
  return (
    <div>
     <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  )
}


