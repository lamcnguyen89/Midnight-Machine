import React, { useState, useEffect } from 'react';
import './recentpostsstyle.css';
import Card from './Card';
import blogPost from '../data/blog.json';
import { NavLink, Link } from 'react-router-dom';


/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {

    const [post, setPost] = useState({
        id: "" ,
        blogCategory: "" ,
        blogTitle : "" ,
        postedOn: "" ,
        author: "" ,
        blogImage: "" ,
        blogParagraph: "",
        blogParagraph2: "",
        blogParagraph3: "",
        blogVideo: ""
    });
    
    useEffect(() => {
        const data = blogPost.data
        const post = data[data.length-1]
        setPost(post);
  
    }, [post]);

    if(post.blogImage === "") return null;

  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={require('../blogPostImages/' + post.blogImage)} alt="Post Image" />
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Latest Post</span>
                <h2>{post.blogTitle}</h2>
                <span>posted on {post.postedOn} by {post.author}</span>
                <p>{post.blogParagraph}...</p>

                {/* <button>
                    <NavLink key={post.id} to={`/post/${post.slug}`}>
                        Read More
                    </NavLink>
                </button>      */}
              <Link to={`/post/${post.slug}`}>
                <button color="white" className="is-rounded">
                  <span>Read More</span>
                </button>
              </Link>
       

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts