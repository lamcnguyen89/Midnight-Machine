import React from 'react';
// import './style.css';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import RecentPosts from '../components/RecentPosts';

import blogData from '../data/blog.json';
import Layout from '../components/Layout';

const SideImage = props => {
    return (
        <div style={{ height: `${props.height}px`  }}>
            <img src={props.src} alt="" />
        </div>
    );
}

const ImageGallery = props => (
        <div className="galleryPost" style={props.galleryStyle}>
                <section style={{ width: props.largeWidth }}>
                    <div className="mainImageWrapper">
                        <img src={require('../blogPostImages/' + props.imagesArray[1])} alt="" />
                    </div>
                </section>
                <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
                    {
                        props.imagesArray.map(image => 
                            <SideImage
                                key={image} 
                                height={props.sideImageHeight}
                                src={require('../blogPostImages/' + image)}
                                alt="" />
                        )
                    }
                </section>
        </div>
);

const BlogPosts  = props => {
    const galleryHeight = 200;
    const galleryStyle = {
        height: galleryHeight+'px',
        overflow: 'hidden'
    }
    const sideImageHeight = galleryHeight / 3;
   const imgAr = blogData.data.map(post => post.blogImage)
    return (
        <div>
            {/* <Card>
                <ImageGallery 
                      largeWidth="30%"
                      smallWidth="30%"
                      sideImageHeight={sideImageHeight}
                      galleryStyle={galleryStyle}
                      imagesArray={imgAr}
                />
            </Card> */}
            <Layout>
                <RecentPosts style={{width: '70%'}}/>
            </Layout>
        </div>
    );
}

export default BlogPosts;