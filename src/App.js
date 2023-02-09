import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import {
  Navbar,
  SearchFeed,
  VideoDetail,
  Feed,
  ChannelDetail,
} from "./components/index";

const App = () => (
  <Box sx={{ backgroundColor: "#000" }}>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  </Box>
);

export default App;
