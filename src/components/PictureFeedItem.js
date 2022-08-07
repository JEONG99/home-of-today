import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSkrapPostsUpdate, useSkrapPostsValue } from "../lib/posts";
import palette from "../styles/palette";
import SkrapButton from "./SkrapButton";

const PictureFeedItemBlock = styled.div`
  background: white;
  margin: 0 10px;
  margin-top: 10px;
  position: relative;
  }
`;

const UserInfoBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  img {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-right: 7px;
  }
  span {
    font-size: 15px;
    font-weight: 600;
    color: ${palette.gray[7]};
  }
`;

const ImageBlock = styled.div`
  width: 270px;
  height: 270px;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.4);
    }
  }
`;

const PictureFeedItem = ({ post, skrap }) => {
  const skrapPosts = useSkrapPostsValue();
  const setSkrapPosts = useSkrapPostsUpdate();
  const [isSkrap, setIsSkrap] = useState(skrap);
  const onSkrap = () => {
    setIsSkrap(!isSkrap);
    if (!isSkrap) {
      setSkrapPosts((skrapPosts) => [...skrapPosts, post]);
      return;
    }
    setSkrapPosts((skrapPosts) => skrapPosts.filter((el) => el.id !== post.id));
  };

  useEffect(() => {
    localStorage.setItem("skrapPosts", JSON.stringify(skrapPosts));
  }, [skrapPosts]);

  return (
    <PictureFeedItemBlock>
      <UserInfoBlock>
        <img src={post.profile_image_url} alt="정보" />
        <span>{post.nickname}</span>
      </UserInfoBlock>
      <ImageBlock>
        <img src={post.image_url} alt="사진" />
      </ImageBlock>
      <SkrapButton onSkrap={onSkrap} isSkrap={isSkrap} />
    </PictureFeedItemBlock>
  );
};

export default PictureFeedItem;
