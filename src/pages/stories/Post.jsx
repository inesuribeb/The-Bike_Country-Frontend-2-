import { useState } from "react";
import Button from "../../components/button/Button";


function Post ({data}){

    return (
        <article className="card">
            <img src={data.image} alt={data.title} />
            <div className="card-content">
                <h2 className="card-title">{data.title}</h2>
                <p className="card-description">{data.content}</p>
                <p>{data.client}</p>
            </div>
        </article>
    );
}


/*function Post({ data, onDelete, onUpdate}) {
    const [editing, setEditing] = useState(false);
    function handleUpdatePost(postData){
        setEditing(false);
        onUpdate(postData);
    }
    if (editing) {
        return (
            <article className="post-edit">
                <Form
                    initialPost={data}
                    onSubmit={handleUpdatePost}
                />
                <Button
                    funcionClick={() => setEditing(false)}
                >
                    Cancel
                </Button>
            </article>
        )
    }

    return (
        <article className = "story">
            <h2>{data.title}</h2>
            <p>{data.content}</p>
            <p>{data.client} </p>
            <Button
                functionClick={()=>onDelete(data.id)}
            >       
                Delete Post
            </Button>
            <Button
                funcionClick={() => setEditing(true)}
            >
                Edit
            </Button>

        </article>

    )

}*/

export default Post;