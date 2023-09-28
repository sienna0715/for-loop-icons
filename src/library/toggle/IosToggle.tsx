import { styled } from 'styled-components';
import { useState } from 'react';
// components
import { PALETTE_COMPONENT } from '../../styles/colors';

const Container = styled.span<{ state: boolean }>`
  width: 50px;
  height: 30px;
  padding: 1px;
  border-radius: 15px;
  background-color: ${(props) =>
    props.state ? '#fff0cc' : PALETTE_COMPONENT.gray03};
  transition: all 0.3s ease-in;
  > div {
    width: 28px;
    height: 28px;
    border-radius: 14px;
    background-color: ${PALETTE_COMPONENT.primary_white};
    box-shadow: 0 2px 2px #00000030;
    transform: ${(props) => (props.state ? 'translateX(71%)' : 'none')};
    transition: all 0.3s ease-in;
  }
`;

function IosToggle() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleHandler = () => {
    setIsToggle((prev: boolean) => !prev);
  };

  return (
    <Container onClick={toggleHandler} state={isToggle}>
      <div />
    </Container>
  );
}

export default IosToggle;
