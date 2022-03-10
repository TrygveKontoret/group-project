import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../utils/api/api";
import { fake } from "../utils/api/api";

const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <>
      <div className="filter-container">
        <h3>Search Filter</h3>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTitle(e.target.value)}
        />

        {loading ? (
          <h4>loading</h4>
        ) : (
          posts
            .filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => <h6 key={item.id}> {item.title} </h6>)
        )}
      </div>
    </>
  );
};
export default SearchBar;
