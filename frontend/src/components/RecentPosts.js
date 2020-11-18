import React, { useState, useEffect } from 'react';
import './recentpostsstyle.css';
import Card from './Card';
import blogPost from '../data/blog.json';


/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {


    const [ recentPosts, setRecentPosts ] = useState([]);

    useEffect(()=> {
        const post = blogPost.data;
        // Shows the last item in JSON Object which is going to be the most recent post that will be displayed on the page.
        const recentPosts =  post[post.length-1]
        setRecentPosts(recentPosts);
    }, [recentPosts]);


  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={require("../blogPostImages/memories-from.jpg")} alt="Post Image"/>
                {/* <img src={recentPosts.blogImage} alt="Post Image"/> */}
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Featured</span>
                <h2>{recentPosts.blogTitle}</h2>
                <span>posted on {recentPosts.postedOn} by {recentPosts.author}</span>
                <p>{recentPosts.blogParagraph}...</p>

                <button>Read More</button>     

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts