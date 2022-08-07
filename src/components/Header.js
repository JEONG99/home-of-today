import styled from "styled-components";
import palette from "../styles/palette";

const HeaderBlock = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 5px;
  padding: 0 10px;

  div:first-child {
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover button {
      background: ${palette.gray[2]};
    }
  }

  button {
    width: 25px;
    height: 25px;
    background: none;
    border: 1px solid #eaedef;
    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    padding: 0;
  }

  span {
    font-size: 15px;
    font-weight: 600;
    color: ${palette.gray[6]};
  }
`;

const Header = ({ onClick, checked }) => {
  return (
    <HeaderBlock>
      {checked ? (
        <div onClick={onClick}>
          <button style={{ background: `${palette.cyan[5]}` }}></button>
          <span>전체 보기</span>
        </div>
      ) : (
        <div onClick={onClick}>
          <button></button>
          <span>스크랩한 것만 보기</span>
        </div>
      )}
      <div />
    </HeaderBlock>
  );
};

export default Header;
