import PostDisplay from "@/app/component/PostDisplay";
import getAllPosts from "@/lib/getAllPosts";

export default async function Home() {
    const posts = await getAllPosts();
  return (
    <div className="flex flex-col items-center bg-blue-200 p-4">
        <PostDisplay inputPosts={posts}/>
    </div>
  );
}
