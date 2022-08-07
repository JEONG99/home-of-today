import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import {
  usePostsUpdate,
  usePostsValue,
  useSkrapPostsValue,
} from "../lib/posts";
import PictureFeedItem from "./PictureFeedItem";

const PictureFeedListBlock = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 30px;

  div {
    margin-top: 10px;
  }
`;

const PictureFeedList = ({ showOnlySkrap }) => {
  const skrapPosts = useSkrapPostsValue();
  const posts = usePostsValue();
  const setPosts = usePostsUpdate();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [skrapIds, setSkrapIds] = useState([]);

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
        return;
      } else {
        setPage((page) => page + 1);
      }
    }
  }, [inView, loading, page]);

  useEffect(() => {
    setSkrapIds(skrapPosts.map((post) => post.id));
  }, [skrapPosts]);

  if (!posts) return <div>포스트 제로</div>;

  return (
    <PictureFeedListBlock>
      {showOnlySkrap
        ? skrapPosts.map((post) => (
            <PictureFeedItem key={post.id} post={post} skrap={true} />
          ))
        : posts.map((post, index) => {
            if (skrapIds.includes(post.id)) {
              return (
                <React.Fragment key={post.id}>
                  {posts.length - 1 === index ? (
                    <div ref={ref}>
                      <PictureFeedItem post={post} skrap={true} />
                    </div>
                  ) : (
                    <PictureFeedItem post={post} skrap={true} />
                  )}
                </React.Fragment>
              );
            }
            return (
              <React.Fragment key={post.id}>
                {posts.length - 1 === index ? (
                  <div ref={ref}>
                    <PictureFeedItem post={post} skrap={false} />
                  </div>
                ) : (
                  <PictureFeedItem post={post} skrap={false} />
                )}
              </React.Fragment>
            );
          })}
    </PictureFeedListBlock>
  );
};

export default PictureFeedList;
