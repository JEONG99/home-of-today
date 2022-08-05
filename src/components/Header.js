import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 5px;
  padding: 0 10px;

  button {
    width: 25px;
    height: 25px;
    background: none;
    border: 1px solid #eaedef;
    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
  }

  span {
    font-size: 15px;
    font-weight: 600;
    color: gray;
  }

  &:hover button {
    background: #eaedef;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <button></button>
      <span>스크랩한 것만 보기</span>
    </HeaderBlock>
  );
};

export default Header;
