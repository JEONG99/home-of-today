import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSkrapPostsUpdate } from "../lib/posts";
import AskModal from "./common/AskModal";
import Header from "./Header";
import PictureFeedList from "./PictureFeedList";

const PictureFeedTemplateBlock = styled.div`
  width: 1160px;
  margin: 100px auto;
  background: white;
  padding: 0 20px;
  border: 1px solid #eaedef;
`;

const PictureFeedTemplate = () => {
  const setSkrapPosts = useSkrapPostsUpdate();
  const [showOnlySkrap, setShowOnlySkrap] = useState(false);

  const changeMode = () => {
    setShowOnlySkrap(!showOnlySkrap);
  };

  useEffect(() => {
    if (localStorage.getItem("skrapPosts")) {
      setSkrapPosts(JSON.parse(localStorage.getItem("skrapPosts")));
    }
  }, [setSkrapPosts]);

  return (
    <PictureFeedTemplateBlock>
      <AskModal />
      <Header onClick={changeMode} checked={showOnlySkrap} />
      <PictureFeedList showOnlySkrap={showOnlySkrap} />
    </PictureFeedTemplateBlock>
  );
};

export default PictureFeedTemplate;
