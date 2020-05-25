import React from "react";
import {Link} from "react-router-dom";
import Post from "./Post";
class PostsLinks extends React.Component {


    constructor(props) {
        super(props);
        this.posts = Post.staticPosts;
    }

    render() {
        return (
            <ul>
                {
                    this.posts.map((post) => {
                        return (
                            <li key={post.id} className="text-left"><Link  to={"/posts/"+post.id}>
                                {post.title}
                            </Link></li>
                        );
                    })
                }
            </ul>
        )
    }
}

export default PostsLinks;