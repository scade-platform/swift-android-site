import DynamicTextField from '@/components/DynamicTextField';
import getDynamicTextFieldMetadata from '@/utils/getDynamicTextField';
import Footer from "@/components/Footer";
import {DocsDescription, DocsTitle} from "fumadocs-ui/page";


export default function BlogPage() {
  const postMatadata = getDynamicTextFieldMetadata("content/Blog")
  return (
    <div>
      <div
        className="pt-16 grid grid-rows-[1fr] items-center justify-items-center p-8 font-(family-name:--font-geist-sans)">

        <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
          {<div className="container prose">
            {postMatadata.map((post, postIndex) => {
              return (
                <div className="mb-16" key={postIndex}>
                  <DocsTitle>{post.title}</DocsTitle>
                  <DocsDescription>{post.publishedFormated}</DocsDescription>
                  <DynamicTextField key={postIndex} post={post}/>
                </div>
              )
            })}
          </div>}
        </main>

      </div>
      <div className="flex items-center m-auto"><Footer/></div>
    </div>

  );
}





