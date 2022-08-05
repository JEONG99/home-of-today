import styled from "styled-components";
import { usePostsValue } from "../lib/posts";
import PictureFeedItem from "./PictureFeedItem";

const PictureFeedListBlock = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const PictureFeedList = () => {
  const posts = usePostsValue();
  if (!posts) return <div>포스트 제로</div>;

  return (
    <PictureFeedListBlock>
      {posts.map((post) => (
        <PictureFeedItem post={post} key={post.id} />
      ))}
    </PictureFeedListBlock>
  );
};

export default PictureFeedList;
