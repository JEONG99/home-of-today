import React from "react";
import "./App.css";
import PictureFeedTemplate from "./components/PictureFeedTemplate";
import { PostsProvider, SkrapPostsProvider } from "./lib/posts";

const AppProvider = ({ constates, children }) =>
  constates.reduce(
    (prev, constate) =>
      React.createElement(constate, {
        children: prev,
      }),
    children
  );

function App() {
  return (
    <AppProvider constates={[PostsProvider, SkrapPostsProvider]}>
      <PictureFeedTemplate />
    </AppProvider>
  );
}

export default App;
