import "./App.css";
import PictureFeedTemplate from "./components/PictureFeedTemplate";
import { PostsProvider } from "./lib/posts";

function App() {
  return (
    <PostsProvider>
      <PictureFeedTemplate />
    </PostsProvider>
  );
}

export default App;
