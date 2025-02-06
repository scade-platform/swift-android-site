
"use client"

import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import * as content from '../content/HomePage/HomePageInfo.mdx';
import { useEffect, useRef } from 'react';

import  React  from "react";



export const InfoHome = () => {
  
  
  return (
    <section id="InfoHome">
      
      <motion.div
        id="launch-schedule"
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        
      >
      <div className="items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-2 row-start-1 items-center sm:items-start">
          <HomeInfoItemOneTextW title={content.titleBox_6xl} text={content.contentBox_6xl} />
          <HomeInfoItemOneTextAuto title={content.titleBox_auto} text={content.contentBox_auto} />
          <HomeInfoItemTwoTextAuto  title1={content.titleBox_Two1} text1={content.contentBox_Two1 } 
                                    title2={content.titleBox_Two2} text2={content.contentBox_Two2 }/>
          <HomeInfoItemOneTextAutoImg title1={content.titleBox_Img} text1={content.contentBox_Img } 
                                      imgSource={content.imgBox_Img}/>
          <HomeInfoItemTwoTextAutoImg  title1={content.titleBox_TwoImg1} text1={content.contentBox_TwoImg1 }
                                        title2={content.titleBox_TwoImg2} text2={content.contentBox_TwoImg2 } imgSource={content.imgBox_TwoImg}/>
                                    
          </div>
      </div>
      </motion.div>
    </section>
  )
}

/// Box with one title and one text. The widht of the Box always stays the same 
/// To use the Box copy <HomeInfoItemOneTextW title={content.box_w_same_textVariable} text={content.box_w_same_textVariable} /> and insert your own Variables
const HomeInfoItemOneTextW= ({ title, text}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <div>
      <div 
      className="border dark:border-[#ccc] border-black/[.08] shadow rounded-md p-4 max-h-4xl ms-auto" style={{
        width: 896,
      }}>
                              <div className="flex space-x-4">
                              
                                <div className="flex-1 space-y-4 py-1">
                                  <div className="font-semibold">{title}</div>
                                  <div className="space-y-2">
                                    <div>{text}</div>
                                  
                                  </div>
                                </div>
                              </div>
                            </div>
      </div>
    </motion.div>
  );
};

/// Box with one title and one text. The widht of the Box changes according to the amount af text 
/// To use the Box copy <HomeInfoItemOneTextW title={content.box_w_cahnge_textVariable} text={content.textVariable} /> and insert your own Variables
const HomeInfoItemOneTextAuto = ({ title, text}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <div>
      <div className="border dark:border-[#ccc] border-black/[.08] shadow rounded-md p-4 max-w-4xl  max-h-4xl w-full ms-auto">
                              <div className="flex space-x-4">
                              
                                <div className="flex-1 space-y-4 py-1">
                                  <div className="font-semibold">{title}</div>
                                  <div className="space-y-2">
                                    <div>{text}</div>
                                  
                                  </div>
                                </div>
                              </div>
                            </div>
      </div>
    </motion.div>
  );
};

/// Box with two titles and two texts.  The widht of the Box always stays the same 
/// To use the Box copy <HomeInfoItemOneTextW title={content.textVariable} text={content.textVariable} 
//                                            title2={content.textVariable2} text2={content.textVariable2] /> and insert your own Variables
const HomeInfoItemTwoTextAuto = ({ title1, text1 ,title2, text2}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
       <div className="border border-transparent  max-w-4xl flex gap-2">
                    
                    <div className="border dark:border-[#ccc] border-black/[.08] shadow rounded-md p-4 w-1/2 max-h-4xl ms-auto col-span-2">
                    <div className="flex ">
                      <div className="flex-1 space-y-4 py-1">
                        <div className="font-semibold">{title1}</div>
                        <div className="space-y-2">
                          <div>{text1}</div>
                        </div>
                      </div>
                    </div>
                    </div>

                    <div className="border dark:border-[#ccc] border-black/[.08] shadow rounded-md p-4 w-1/2  max-h-4xl ms-auto ">
                    <div className="flex space-x-4">
                      <div className="flex-1 space-y-4 py-1">
                        <div className="font-semibold">{title2}</div>
                        <div className="space-y-2">
                          <div>{text2}</div>
                        </div>
                      </div>
                    </div>
                    </div>
                    
                  </div>
    </motion.div>
  );
};

const HomeInfoItemThreeTextAuto = ({ title1, text1 ,title2, text2}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
       <div className="border border-transparent  max-w-4xl flex gap-2">
                    
                    <div className="border dark:border-[#ccc] border-black/[.08] shadow rounded-md p-4 max-w-lg max-h-4xl w-full ms-auto col-span-2">
                    <div className="flex ">
                      <div className="flex-1 space-y-4 py-1">
                        <div className="font-semibold">{title1}</div>
                        <div className="space-y-2">
                          <div>{text1}</div>
                        </div>
                      </div>
                    </div>
                    </div>

                    <div className="border dark:border-[#ccc] border-black/[.08] shadow rounded-md p-4 max-w-lg  max-h-4xl w-full ms-auto ">
                    <div className="flex space-x-4">
                      <div className="flex-1 space-y-4 py-1">
                        <div className="font-semibold">{title2}</div>
                        <div className="space-y-2">
                          <div>{text2}</div>
                        </div>
                      </div>
                    </div>
                    </div>
                    
                  </div>
    </motion.div>
  );
};

/// Box with one title and one text. The widht of the Box always stays the same 
//  To use the Box copy <HomeInfoItemOneTextAutoImg title1={content.titleBox_Img} text1={content.contentBox_Img } imgSource={content.imgBox_Img}/>
const HomeInfoItemOneTextAutoImg = ({ title1, text1 , imgSource}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
       <div className="border border-transparent  max-w-4xl flex gap-2">
                    
                    <div className="border dark:border-[#ccc] border-black/[.08] shadow rounded-md p-4 min-w-lg max-h-4xl w-full ms-auto col-span-2">
                    <div className="flex ">
                      <div className="flex-1 space-y-4 py-1">
                        <div className="font-semibold">{title1}</div>
                        <div className="space-y-2">
                          <div>{text1}</div>
                        </div>
                      </div>
                    </div>
                    </div>

                    <div className="border dark:border-[#ccc] border-black/[.08] shadow rounded-md p-4 max-w-lg  max-h-4xl w-full ms-auto ">
                    <div className="flex space-x-4">
                      <div className="flex-1 space-y-4 py-1">
                         <motion.img
                                  className="dark "
                                  
                                  src={imgSource}
                                  alt="Next.js logo"
                                 
                                  width={200}
                                  height={20}
                                  style={{
                                    margin: "auto",
                                  }}
                                />
                      </div>
                    </div>
                    </div>
                    
                  </div>
    </motion.div>
  );
};

//Box with two titles and two texts and an image.  The widht of the Box always stays the same 
// To use the Box copy  <HomeInfoItemTwoTextAutoImg  title1={content.titleBox_TwoImg1} text1={content.contentBox_TwoImg1 }
//                                                   title2={content.titleBox_TwoImg2} text2={content.contentBox_TwoImg2 } imgSource={content.imgBox_TwoImg}/>
const HomeInfoItemTwoTextAutoImg = ({ title1, text1 ,title2, text2, imgSource}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
       <div className="border border-transparent  max-w-4xl flex gap-2">
                    
                    <div className="border dark:border-[#ccc] border-black/[.08] shadow rounded-md p-4 w-1/3 max-h-4xl ms-auto col-span-2">
                    <div className="flex ">
                      <div className="flex-1 space-y-4 py-1">
                        <div className="font-semibold">{title1}</div>
                        <div className="space-y-2">
                          <div>{text1}</div>
                        </div>
                      </div>
                    </div>
                    </div>

                    <div className="border dark:border-[#ccc] border-black/[.08] shadow rounded-md p-4 max-w-lg  max-h-4xl w-1/3  ms-auto col-span-2">
                    <div className="flex space-x-4">
                      <div className="flex-1 space-y-4 py-1">
                        <div className="font-semibold">{title2}</div>
                        <div className="space-y-2">
                          <div>{text2}</div>
                        </div>
                      </div>
                    </div>
                    </div>

                    <div className="border dark:border-[#ccc] border-black/[.08] shadow rounded-md p-4 max-w-lg max-h-4xl w-1/3 ms-auto col-span-2">
                    <div className="flex ">
                      <div className="flex-1 space-y-4 py-1">
                      <motion.img
                                    className="dark ml-auto"
                                    
                                    src={imgSource}
                                    alt="Next.js logo"
                                  
                                    width={200}
                                    height={20}
                                    style={{
                                      margin: "auto",
                                    }}
                                  />
                      </div>
                    </div>
                    </div>
                    
                  </div>
    </motion.div>
  );
};







