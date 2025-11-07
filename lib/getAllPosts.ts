import {PostProps} from "@/types";
import getCollection, {POST_COLLECTION} from "@/db";

export default async function getAllPosts(): Promise<PostProps[]> {
    const postsCollection = await getCollection(POST_COLLECTION);
    const data = await postsCollection.find().toArray();

    const posts: PostProps[] = data.map((p) => ({
        id: p._id.toHexString(),
        title: p.title,
        content: p.content,
        upvotes: p.upvotes,
        downvotes: p.downvotes,
    }));

    return posts.reverse()
}