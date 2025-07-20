import DynamicTextField from '@/components/DynamicTextField';
import getDynamicTextFieldMetadata from '@/utils/getDynamicTextField';
import Footer from "@/components/Footer";


export default function SwiftForAndroid() {
  const postMatadata = getDynamicTextFieldMetadata("content/Blog")

  return (
    <div>
      <div
        className="pt-16 grid grid-rows-[1fr] items-center justify-items-center p-8 font-(family-name:--font-geist-sans)">

        <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
          {<div className="container prose">
            {postMatadata.map((post, postIndex) => {
              return (
                <DynamicTextField key={postIndex} post={post}/>
              )
            })}
          </div>}
        </main>

      </div>
      <div className="flex items-center m-auto"><Footer/></div>
    </div>

  );
}





