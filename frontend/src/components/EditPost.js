// EditPost.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/EditPost.css";
import axios from 'axios'
import postService from '../services/posts'

export default function EditPost({posts}) {
    const [post, setPost] = useState(null);
    
    let navigate = useNavigate();
    let { id } = useParams();



    useEffect(() => {
        postService.get(id)
          .then(retrievedPost => {
            console.log("Post fetched for editing", retrievedPost);
            setPost(retrievedPost);
          })
          .catch(error => {
            console.log("Error fetching post for editing", error);
          });
      }, [id]);

       const returnHome = () => {
        navigate("/home");
    }

      const editPost = (updatedtitle, updatedbody) => {
        if (updatedtitle === "" || updatedbody === "") {
            alert("Please fill out all fields");
            return;
        }
        
        const updatedPost = {...post, title: updatedtitle, body: updatedbody}
        postService.update(id, updatedPost)
            .then(newPost => {
            setPost(posts.map(post => post.id !== id ? post : newPost.data));
            })
            .catch(error => {
            console.log("Error updating post", error);
            });

        navigate("/home");
    }


    
      if (post === null) {
        return <div>Loading...</div>;
      }
      else{
        return (
            <div>
                <h1>Edit Post</h1>
                <h2>Title</h2>
                <input type="text" id="title" name="title" defaultValue={post.title} />
                <h2>Body</h2>
                <textarea id="body" name="body" rows="4" cols="50" defaultValue={post.body}></textarea>
                <br />
                <button onClick={() => editPost(document.getElementById("title").value, document.getElementById("body").value)}>Save Changes</button>
                <button onClick={() => returnHome()}>Back</button>
            </div>
        );
      }

    // const post = defaultPosts.find(p => p.id === parseInt(id));
    
   
    // if (!post) {
    //     return <div>Post not found!</div>;
    // }
    
    // const editPost = (title, body) => {
    //     if (title === "" || body === "") {
    //         alert("Please fill out all fields");
    //         return;
    //     }
    //     updatePost(posts.id, title, body);
    //     navigate("/home");
    // }

    // const returnHome = () => {
    //     navigate("/home");
    // }

    // const updatePost = (id, title, body) => {

    // }

    
    
}