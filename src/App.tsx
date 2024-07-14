import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addPost, deletePost } from "./features/Post";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const postList = useSelector((state) => state.posts.value);
  console.log(postList);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      addPost({ id: postList.length + 1, name: name, content: content })
    );
    setName("");
    setContent("");
  };
  return (
    <div className="App">
      <div>
        <h1>掲示板</h1>
      </div>
      <div className="addPost">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button onClick={handleClick}>投稿</button>
      </div>
      <div className="displayPosts">
        {postList.map((post) => (
          <div key={post.id} className="post">
            <h1 className="postName">{post.name}</h1>
            <h1 className="postContent">{post.content}</h1>
            <button onClick={() => dispatch(deletePost({ id: post.id }))}>
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
