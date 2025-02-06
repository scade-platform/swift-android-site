import fs from "fs";
import matter from "gray-matter";



export default function getDynamicTextField (basePath)  {
    const folder = basePath + "/"
    const files = fs.readdirSync(folder)
    const markdownPost =  files.filter (file => file.endsWith(".md"))

    const posts = markdownPost.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf-8")
        const matterResult = matter(fileContents)
        return{
            title: matterResult.data.title,
            id: matterResult.data.id,

            content: matterResult.content,
        }

    })
    return posts
}


