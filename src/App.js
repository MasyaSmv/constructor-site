import React, {useState} from 'react';
import './Styles/App.css';
import PostList from "./Components/PostList";
import MyInput from "./Components/UI/Input/MyInput";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/Select/MySelect";

export default function App() {
    const [posts, setPosts] = useState([
        {
            id: 1, title: 'JavaScript', body: 'Description'
        },
        {
            id: 2, title: 'React', body: 'Description React'
        },
        {
            id: 3, title: 'CSS', body: 'Description CSS'
        }
    ])

    function getSortedPosts()
    {
        if (selectedSort)
            return setPosts([...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])))

        return posts
    }

    const [selectedSort, setSelectedSort] = useState([''])
    const [searchQuery, setSearchQuery] = useState([''])

    const sortedPosts = getSortedPosts()
    const sortPosts = (sort) => {
        setSelectedSort(sort)

    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const createPost = (newPost) =>
        setPosts([...posts, newPost])

    return (
        <div className={"App"}>
            <PostForm create={createPost}/>
            <hr style={{margin: '0.5em 0'}}/>
            <div>
                <MyInput value={searchQuery} placeholder={"search..."} onChange={e => setSearchQuery(e.target.value)}/>
                <MySelect value={selectedSort} onChange={sortPosts} defaultValue={"Sorting by"} options={[
                    {value: "title", name: "Name"},
                    {value: "body", name: "Description"},
                ]}/>
            </div>
            {posts.length
                ?
                <PostList remove={removePost} posts={sortedPosts} title={'Posts list'}/>
                :
                <h1 style={{textAlign: 'center'}}>Posts is not found</h1>
            }
        </ div>
    );
}