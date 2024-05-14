import React from 'react'
import "../../styles/Blog.css"
import videoImg from "../../assets/images/video.png"
import articaleImg from "../../assets/images/article.png"
import caseStudy from "../../assets/images/case-study.png"
const Blog = () => {
    const blogData = [
        {
            imgUrl: videoImg,
            title: "Video",
            desc: "To know about Work. Watch some video f....",
            linkUrl: "#"
        },
        {
            imgUrl: videoImg,
            title: "Video",
            desc: "To know about Work. Watch some video f....",
            linkUrl: "#"
        },
        {
            imgUrl: caseStudy,
            title: "Case Study",
            desc: "To know about Work. Watch some video f....",
            linkUrl: "#"
        },
        {
            imgUrl: videoImg,
            title: "Video",
            desc: "To know about Work. Watch some video f....",
            linkUrl: "#"
        }
    ]
    return (
        <section>
            <div className="container">
                <div className="blog_top-content">
                    <h6 className="subtitle">Our Blog</h6>
                    <h2>
                        Let's have a look from our <span className='highlight'>recent blog</span>
                    </h2>
                </div>
                <div className="blog_wrapper">
                    {
                        blogData.map((item, index) => (
                            <div key={index} className="blog_item">
                                <h3>{item.title}</h3>
                                <div className="blog_img">
                                    <img src={item.imgUrl} alt='project img 1' />
                                </div>
                                <p className="description blog_desc">
                                    {item.desc}
                                </p>
                                <div>
                                    <a href='#' className='learn_more'> <i className='ri-arrow-right-line'></i> </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog