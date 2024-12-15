import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment1, decrement1, increment2, decrement2, fetchPosts, resetStatus } from "../store/store";
import { Button, Pagination, PaginationItem, TextField, Typography } from "@mui/material";

const TestRedux = () => {
  const dispatch = useDispatch();

  // Lấy state từ store
  const countTest1 = useSelector((state) => state.counter.countTest);
  const countTest2 = useSelector((state) => state.counter2.countTest);


  // search
  const initSearch = {
    inputSearch: {
      id: '',
      title: ''
    },
    page: 1,
    limit: 2
  };
  const [searchState, setSearchState] = useState(initSearch);
  

  const error = useSelector((state) => state.getPosts.error);
  const posts = useSelector((state) => state.getPosts.posts);
  const status = useSelector((state) => state.getPosts.status);
  
  
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts({ page: searchState.page}));
    }
  }, [dispatch, status, searchState.page]);
  {/*if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;*/}

  const handleSearchClick = () => {
    dispatch(fetchPosts({ page: searchState.page, id: searchState.inputSearch.id }));
  }
  

  return (
    <div>
      <h1>Counter 1: {countTest1}</h1>
      <button onClick={() => dispatch(increment1())}>Increment Counter 1</button>
      <button onClick={() => dispatch(decrement1())}>Decrement Counter 1</button>

      <h1>Counter 2: {countTest2}</h1>
      <button onClick={() => dispatch(increment2())}>Increment Counter 2</button>
      <button onClick={() => dispatch(decrement2())}>Decrement Counter 2</button>


      <Typography>Id:</Typography>
      <TextField 
        value={searchState.inputSearch.id}
        onChange={(e) => 
          setSearchState({
            ...searchState,
            inputSearch: {
              ...searchState.inputSearch,
              id: e.target.value
            }
          })
        }
      />
      <Button
        variant="contained"
        onClick={() => handleSearchClick()}
      >Search</Button>


      <Pagination
        page={searchState.page}
        count={5}
        onChange={(e, value) => {
          setSearchState({
            ...searchState,
            page: value
          });
          dispatch(resetStatus());  // Gọi dispatch để gán lại status = "idle"
        }}
        renderItem={(item) => (
          <PaginationItem
            {...item}
          />
        )}
      />

      <ul>
        {(Array.isArray(posts) ? posts : []).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

    </div>
  );
};

export default TestRedux;
