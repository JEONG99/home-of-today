import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { usePostsUpdate } from "../lib/posts";
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
  const setPosts = usePostsUpdate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/cards/page_1.json"
        );
        console.log(response.data);
        setPosts(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [setPosts]);

  return (
    <PictureFeedTemplateBlock>
      <Header />
      <PictureFeedList />
    </PictureFeedTemplateBlock>
  );
};

export default PictureFeedTemplate;
