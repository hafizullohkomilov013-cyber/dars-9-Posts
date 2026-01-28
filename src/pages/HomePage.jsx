import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function HomePage() {
  const [post, setPost] = useState([]);

  const deletePhoto = (id) => {
    console.log(id);
    const newPost = post.filter(item => item.id !== id)
    setPost(newPost)
    toast(`${id} ga ega card o'chirildi`)
  }

  useEffect(() => {
    async function GetPost() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/photos");

        if (!res.ok) {
          throw new Error("Xatolik !");
        }

        let data = await res.json();
        setPost(data);
        toast(`${id} ga ega card o'chirildi`)
      } catch (error) {
        toast(error.message);
        
      }
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
              <div className="delete">
                <button className="delete-btn"  onClick={() => deletePhoto(item.id) }>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomePage;
