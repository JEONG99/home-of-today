import styled, { css } from "styled-components";
import palette from "../../styles/palette";

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 4px 16px;
  color: white;
  outline: none;
  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
