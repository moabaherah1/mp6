"use server";
import getCollection, {POST_COLLECTION} from "@/db";
import { PostProps } from "@/types"

export default async function createNewPost(
    title: string,
    content: string,
): Promise<PostProps> {
    console.log("Creating new post...");
    const p ={
        title: title,
        content: content,
        upvotes: 0,
        downvotes: 0,
    };

    // insert into mongoDB
    const postCollection = await getCollection(POST_COLLECTION);
    const res = await postCollection.insertOne({...p});
    if (!res.acknowledged) {
        throw new Error("Failed to insert into DB");
    }


    return {...p, id: res.insertedId.toHexString()};
}
