import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import "../css/Home.css"
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import { useAuth } from "../context/AuthContext";
export default function Home() {

    const { isAuthenticated } = useAuth();
    
    // TODO: fetch posts from backend
    const defaultPosts = [
        {title: "Test", body: "Body"},
        {title: "Test", body: "Body"},
        {title: "Test", body: "Body"},
        {title: "Test", body: "Body"},
    ];
    const [posts, setPosts] = useState(defaultPosts);

    const { currentUser } = useAuth();

   
     const storedUser = JSON.parse(localStorage.getItem('user'));
     console.log(storedUser)
    useEffect(() => {

       
        console.log('this is the stored user', storedUser)
        console.log('this is the stored post', posts)
        if (!isAuthenticated) {
            navigate('/login'); // Redirect to login if not authenticated
        }
      
    }, [isAuthenticated]);

    // on page load, fetch posts from backend
    useEffect(() => {
        
        axiosInstance.get('posts/').then(response => {
           

            setPosts(response.data);
            
            
        }).catch(error => {
            console.log(error);
        }
        )}, []);

    let navigate = useNavigate();

    // useEffect(()=>{
    //     const storedUser = JSON.parse(localStorage.getItem('user'));
    //     if (storedUser.author === posts.author){
    //         setcanEdit(true)
    //     }
    // })
  
    const createPost = () => {
        navigate("/post/create");
    }

    const postsChunks = posts.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 3);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
    }, []);

    return (

    
        <div className="posts-container">
            <h1>Home</h1>
            <h2>Welcome {currentUser}</h2>
            {/* {currentUser && <div>Welcome, {currentUser.username}!</div>} */}
            {postsChunks.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className="posts-row">
                    {chunk.map((post, postIndex) => (
                        
                        <Post key={postIndex} post={post} canEdit={storedUser.id === post.author}/>
                    ))}
                </div>
            ))}
            <button onClick={() => createPost()}>Add Post</button>
            <div className="square">
            </div>
        </div>
    );
}

