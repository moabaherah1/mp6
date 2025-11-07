import createNewPost from "@/lib/createNewPost";

"use-client";
import { Textarea } from "@mui/joy";
import {Button, FormHelperText, TextField} from "@mui/material";
import {useState} from "react";
import {PostProps} from "@/types";

export default function NewPostForm({
    append,
    }: {
    append: (post: PostProps) => void;
}){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <form className="w-96 rounded-xl p-4 bg-sky-400"
        onSubmit={async (event) => {
            event.preventDefault();
            createNewPost(title,content)
                .then((newPost) => append(newPost))
                .catch((err) => console.log(err));
        }}
        >
            <TextField
                variant="filled"
                sx={{  backgroundColor: "white", width: "100%"}}
                label = "Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            <Textarea
                sx={{
                    padding: "0.5rem",
                    height: "100px",
                    width: "100%",
                    borderRadius: 0,
                }}
                variant="soft"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                />
            <FormHelperText>Whats on your mind?</FormHelperText>
            <div className=" w-full flex justify-end">
                <Button
                    sx = {{ width: "80px"}}
                    variant="contained"
                    type="submit"
                    disabled={title === "" || content === ""}
                    >
                    Create
                </Button>
            </div>


        </form>
    );
}