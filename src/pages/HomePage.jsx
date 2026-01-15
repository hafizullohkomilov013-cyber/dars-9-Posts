import React from "react";
import { useState, useEffect } from "react";

function HomePage() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function GetPost() {
      let res = await fetch("https://jsonplaceholder.typicode.com/photos");

      if (!res.ok) {
        throw new Error("Xatolik !");
      }

      let data = await res.json();
      setPost(data);
    }
    GetPost();
  }, []);

  return (
    <section className="main-section">
      <div className="container photos-container">
        {post.slice(0, 9).map((item) => {
          return (
            <div key={item.id} className="photos-card">
              <img
                className="img-card"
                src={`https://picsum.photos/150?random=${item.id}`}
                alt={item.title}
              />
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomePage;
