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
         //let post=this.posts.find((post)=>(post.id)===27);

        let postArray=[];
        let index=0;
        for (let field in post){
            postArray[index]=[];
            postArray[index][0]=field;
            postArray[index][1]=post[field];
            index++;
        }
        return(
                    <table className="text-left table table-bordered">
                        <tbody>
                        {
                            postArray.map((value,key)=>{
                                return (
                                    <tr key={key}><td>{value[0]}</td><td> {value[1]}</td></tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
        );
    }
}
export default Post;