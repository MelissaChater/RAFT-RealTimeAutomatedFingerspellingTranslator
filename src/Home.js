import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setblogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const [name, setName] = useState('mario')

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setblogs(newBlogs)
    }

    /* va ad ogni render se usato da solo*/
    /* metto dipendeza su cosa voglio che ri-renderi */
    useEffect(() => {
        console.log("use effect ran")
        console.log(name)
    }, [name])

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="all Blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home