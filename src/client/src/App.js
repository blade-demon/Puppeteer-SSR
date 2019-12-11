import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./components/Post/Post";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const entry = performance
      .getEntriesByType("navigation")
      .find(e => e.name === window.location.href);
    console.log(entry.serverTiming[0].toJSON());
    (async function() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(result.data);
    })();
  }, []);

  return (
    <div className="App">
      {posts.length > 0 &&
        posts.map(({ id, title, body }) => {
          return (
            <div key={id}>
              <Post id={id} title={title} body={body} />
            </div>
          );
        })}
    </div>
  );
}

export default App;
