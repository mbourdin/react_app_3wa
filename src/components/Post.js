import React from "react";
class Post extends React.Component{
    static  staticPosts = [
        { id: 16, title: "React JS", content: "Libraire ou Framework ?" },
        { id: 11, title: "React Native", content: "Mobile React" },
        { id: 100, title: "Angular", content: "Super ..." },
        { id: 7, title: "Symfony", content: "Framework expressif ..." },
        { id: 27, title: "MongoDB", content: "Base de données NoSQL" },
    ];


    constructor(props) {
        super(props);
        this.posts=Post.staticPosts;
    }
    render(){
        let post=this.posts.find((post)=>(post.id)===Number.parseInt(this.props.match.params.id));
        let postArray=[];
        let index=0;
        for (let field in post){
            postArray[index]=[];
            postArray[index][0]=field;
            postArray[index][1]=post[field];
            index++;
        }
        console.log(postArray);

        return(
                    <div>
                        {
                            postArray.map((key,value)=>{
                                return (
                                    <div key={key}>{key} : {value}</div>
                                );
                            })
                        }
                    </div>
        );
    }
}
export default Post;