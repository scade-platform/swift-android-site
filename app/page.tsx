
import Image from "next/image";

//md file
import DynamicTextField from '../components/DynamicTextField';
import getDynamicTextFieldMetadata from '../utils/getDynamicTextField';
import TextChangeWidth from '../components/TextChangeWidth';
import ButtonClientHome from '../components/ButtonClientHome';
import  Footer  from "@/components/footer";







export default function Home() {
  //md file
  const postMatadata = getDynamicTextFieldMetadata ("content/HomePage")
  
 

 
  return (
    <div className="grid grid-rows-[10px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
          
        
        <div>
              <TextChangeWidth /> 
              <h1 className="dynamic-title" >Swift For Android</h1>
              
             
              {/* Additional paragraphs... */}
        </div>
        
        <Image
          className="dark"
          
          src="/logo-swift.png"
          alt="Next.js logo"
         
          width={200}
          height={20}
          style={{
            margin: "auto",
          }}
          priority
        />
        <ol className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]" 
        style={{
            margin: "auto",
          }}>
        <div>
          {<div className="container">
            {postMatadata.map((post, postIndex) => {
              return (
                <DynamicTextField key={postIndex} post={post} />
              )
            })}
          </div>}
        </div>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row" style={{
            margin: "auto",
          }}>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/scade-platform/swift-android-toolchain/releases/download/5.9.2/swift-android-5.9.2.pkg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Install
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
       
        </div>
       
          
        
        
      
      </main>
      <div className="row-start-4">
      <ButtonClientHome/>
      </div>
      <div className="row-start-5 col-start-0"><Footer/></div>
      
    </div>
    
  );
}





