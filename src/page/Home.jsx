import React from "react";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import Add from "../components/Add";
import {Box, Stack} from "@mui/material";

const Home = ({mode, setMode}) => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar></Navbar>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode} />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
};

export default Home;
