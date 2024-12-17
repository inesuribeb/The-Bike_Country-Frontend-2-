import "./FormStories.css"
import { useState } from "react";

function FormStories({ initialPost = { title: "", content: "", client: "" }, onSubmit }) {
    const [post, setPost] = useState(initialPost);

    function handleTitle(e) {
        const newTitle = e.target.value;
        setPost(oldPost => {
            const newPost = { ...oldPost };
            newPost.title = newTitle
            return newPost;
        })
    }
    function handleContent(e) {
        const newContent = e.target.value;
        setPost(oldPost => {
            const newPost = { ...oldPost };
            newPost.content = newContent;
            return newPost;
        })

    }
    function handleClient(e) {
        const newClient = e.target.value;
        setPost(oldPost => {
            const newPost = { ...oldPost };
            newPost.client = newClient;
            return newPost;
        })

    }
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(post);
        setPost({
            title: "",
            content: "",
            client: ""
        })
    }
    return (
        <>
            <form className="form-stories" onSubmit={handleSubmit}>
                <div>
                    <div className="form-stories__inputs">
                        <label>Title: </label>
                        <input
                            type="text"
                            name="title"
                            value={post.title}
                            onChange={handleTitle}
                        />
                        <label htmlFor="client">Your Name: </label>
                        <input
                            type="text"
                            name="client"
                            value={post.client}
                            onChange={handleClient}

                        />
                    </div>
                    <div>
                        <label htmlFor="content">Content: </label>
                        <textarea
                            type="text"
                            name="content"
                            value={post.content}
                            onChange={handleContent}
                        />
                    </div>

                    <div>
                        <button className="share-button">SHARE</button>
                    </div>
                </div>
            </form >
        </>
    )

}
export default FormStories;