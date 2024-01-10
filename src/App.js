import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import Newpost from "./Newpost";
import Postpage from "./Postpage";
// import Post from './Post';
// import PostLayout from './PostLayout';
import { useEffect, useState } from "react";
import { format } from "date-fns";
// import { id } from 'date-fns/locale';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First post",
      datetime: "July 01,2021 11:17:36 AM",
      body: "Made a video about Tesla Q1 results",
    },
    {
      id: 2,
      title: "My 2nd post",
      datetime: "July 01,2021 11:17:36 AM",
      body: "I attend a DEfi blockchain event",
    },
    {
      id: 3,
      title: "My 3rd post",
      datetime: "July 01,2021 11:17:36 AM",
      body: "Web3 global submit next week",
    },
    {
      id: 4,
      title: "My 4th post",
      datetime: "July 01,2021 11:17:36 AM",
      body: "hello how are you",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const filteresult = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteresult.reverse());
  }, [posts, search]);

  const handlesubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newpost = {
      id,
      title: postTitle,
      datetime: datetime,
      body: postBody,
    };
    const allposts = [...posts, newpost];
    setPosts(allposts);
    setPostTitle("");
    setPostBody("");
    navigate("/   ");
  };

  const handledelete = (id) => {
    const postslist = posts.filter((post) => post.id !== id);
    setPosts(postslist);
    navigate("/");
  };

  return (
    <div className="App">
      <Header title="Social media app" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />
        <Route path="post">
          <Route
            index
            element={
              <Newpost
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                handlesubmit={handlesubmit}
              />
            }
          />
          <Route
            path=":id"
            element={<Postpage posts={posts} handledelete={handledelete} />}
          />
        </Route>
        {/* <Postpage /> */}
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
