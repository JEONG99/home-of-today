import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { usePostsUpdate, usePostsValue } from "../lib/posts";
import PictureFeedItem from "./PictureFeedItem";

const PictureFeedListBlock = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const PictureFeedList = () => {
  const posts = usePostsValue();
  const setPosts = usePostsUpdate();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView();

  const getPosts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`../cards/page_${page}.json`);
      setPosts((posts) => [...posts, ...response.data]);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, [page, setPosts]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  useEffect(() => {
    if (inView && !loading) {
      if (page === 5) {
        setPage(0);
      } else {
        setPage((page) => page + 1);
      }
    }
  }, [inView, loading, page]);

  if (!posts) return <div>포스트 제로</div>;

  return (
    <PictureFeedListBlock>
      {posts.map((post, index) => (
        <React.Fragment key={post.id}>
          {posts.length - 1 === index ? (
            <div ref={ref}>
              <PictureFeedItem post={post} />
            </div>
          ) : (
            <PictureFeedItem post={post} />
          )}
        </React.Fragment>
      ))}
    </PictureFeedListBlock>
  );
};

export default PictureFeedList;
