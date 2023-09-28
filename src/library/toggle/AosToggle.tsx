import { styled } from 'styled-components';
import { useState } from 'react';

import { PALETTE_COMPONENT } from '../../styles/colors';

const Container = styled.div`
  width: 40px;
  height: 20px;
  display: flex;
`;

const ToggleLine = styled.div<{ state: boolean }>`
  width: 34px;
  height: 14px;
  margin: 3px;
  border-radius: 7px;
  background-color: ${(props) =>
    props.state ? '#fff0cc' : PALETTE_COMPONENT.gray03};
  transition: all 0.3s ease-in;
`;

const ToggleCircle = styled.div<{ state: boolean }>`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 10px;
  box-shadow: 0 2px 2px #00000024;
  background-color: ${PALETTE_COMPONENT.primary_white};
  transform: ${(props) => (props.state ? 'translateX(100%)' : 'none')};
  transition: all 0.3s ease-in;
`;

function AosToggle() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleHandler = () => {
    setIsToggle((prev: boolean) => !prev);
  };

  return (
    <Container onClick={toggleHandler}>
      <ToggleLine state={isToggle} />
      <ToggleCircle state={isToggle} />
    </Container>
  );
}

export default AosToggle;
