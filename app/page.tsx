import Image from "next/image";

//md file
import DynamicTextField from '../components/DynamicTextField';
import getDynamicTextFieldMetadata from '../utils/getDynamicTextField';
import TextChangeWidth from '../components/TextChangeWidth';
import Footer from "@/components/footer";


export default function Home() {
  //md file
  const postMatadata = getDynamicTextFieldMetadata("content/HomePage")
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div
      className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">


        <div>
          <TextChangeWidth/>
          <h1 className="dynamic-title">Swift For Android</h1>
        </div>

        <Image
          className="dark"

          src={`${basePath}/logo-swift.png`}
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
                  <DynamicTextField key={postIndex} post={post}/>
                )
              })}
            </div>}
          </div>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row" style={{
          margin: "auto",
        }}>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://www.scade.io/"
          >
            Get Started
          </a>

        </div>
        <div className="flex items-center" style={{
          margin: "auto",
        }}><Footer/></div>
      </main>

    </div>

  );
}





