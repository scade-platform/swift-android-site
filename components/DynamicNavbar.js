import React from 'react';
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from 'next/link';

import { ReactLenis } from "lenis/dist/lenis-react";
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
  } from "motion/react";



export default function DynamicNavbar  (props)  {
    const {post} = props
  return (
          <li><a href={post.link}>{post.title},{post.id},{post.link}</a></li>
            
         
  )
}


