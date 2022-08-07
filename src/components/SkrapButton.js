import { useState } from "react";
import styled from "styled-components";
import AskClearSkrapModal from "./skrap_modal/AskClearSkrapModal";
import AskSkrapModal from "./skrap_modal/AskSkrapModal";

const SkrapButtonBlock = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
`;

const SkrapActionButton = styled.button`
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
`;

const SkrapButton = ({ onSkrap, isSkrap }) => {
  const [modal, setModal] = useState(false);
  const onCancel = () => {
    setModal(false);
  };
  const onClick = () => {
    setModal(true);
  };
  const onConfirm = () => {
    onSkrap();
    setModal(false);
  };
  return (
    <SkrapButtonBlock>
      {isSkrap ? (
        <>
          <SkrapActionButton onClick={onClick}>
            <svg viewBox="0 0 25 25" width="25" height="25">
              <path
                stroke="white"
                fill="#35C5F0"
                d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"
              />
            </svg>
          </SkrapActionButton>
          <AskClearSkrapModal
            visible={modal}
            onConfirm={onConfirm}
            onCancel={onCancel}
          />
        </>
      ) : (
        <>
          <SkrapActionButton onClick={onClick}>
            <svg viewBox="0 0 25 25" width="25" height="25">
              <path
                stroke="white"
                fill="rgba(255,255,255, 0.2)"
                d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"
              />
            </svg>
          </SkrapActionButton>
          <AskSkrapModal
            visible={modal}
            onConfirm={onConfirm}
            onCancel={onCancel}
          />
        </>
      )}
    </SkrapButtonBlock>
  );
};

export default SkrapButton;
