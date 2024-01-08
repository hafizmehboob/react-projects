import React, {useEffect, useState} from "react";
import appwrtieService from '../appwrite/config';
import {Container, PostCard} from '../components'

export default function Home(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwrtieService.getPosts().then((post) => {
            if(post){
                setPosts(post.documents)
            }
        })
    },[])

    if(posts.length === 0){
        return (
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-blod hover:text-gray-500 ">
                            Login to Read Posts
                        </h1>
                    </div>
                </div>
            </Container>
        )
    }
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div className="p-2 w-1/4" key={post.$id}>
                            <PostCard post={post} /> 
                            
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
// use also {...post} (sending all posts) or post={post} (send only one post) in <PostCard/> component