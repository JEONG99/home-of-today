import React from "react";
import styled from "styled-components";

const PictureFeedItemBlock = styled.div`
  background: white;
  margin: 0 10px;
  margin-top: 10px;
  position: relative;

  .strapButton {
    position: absolute;
    right: 15px;
    bottom: 15px;
    padding: 0;
    margin: 0;
    width: 25px;
    height: 25px;
    border: none;
    background: none;
    cursor: pointer;

    svg {
      transition: opacity 0.1s;
    }
    &:hover svg {
      opacity: 0.5;
    }
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
    color: #424242;
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

const PictureFeedItem = ({ post }) => {
  return (
    <PictureFeedItemBlock>
      <UserInfoBlock>
        <img src={post.profile_image_url} alt="정보" />
        <span>{post.nickname}</span>
      </UserInfoBlock>
      <ImageBlock>
        <img src={post.image_url} alt="사진" />
      </ImageBlock>
      <button className="strapButton">
        <svg viewBox="0 0 25 25" width="25" height="25">
          <path
            stroke="white"
            fill="rgba(255,255,255, 0.2)"
            d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"
          />
        </svg>
      </button>
    </PictureFeedItemBlock>
  );
};

export default PictureFeedItem;
