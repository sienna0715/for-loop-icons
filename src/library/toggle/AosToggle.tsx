import { styled } from 'styled-components';
import { useState } from 'react';

import { PALETTE_COMPONENT } from '../../styles/colors';

const Container = styled.div<{ $size: number }>`
  width: ${(props) => `${props.$size}px`};
  height: ${(props) => `${props.$size / 2}px`};
  display: flex;
`;

const ToggleLine = styled.div<{ $state: boolean; $size: number }>`
  width: ${(props) => `${(props.$size / 40) * 34}px`};
  height: ${(props) => `${(props.$size / 40) * 14}px`};
  margin: ${(props) => `${(props.$size / 40) * 3}px`};
  border-radius: ${(props) => `${(props.$size / 40) * 7}px`};
  background-color: ${(props) =>
    props.$state ? '#fff0cc' : PALETTE_COMPONENT.gray03};
  transition: all 0.3s ease-in;
`;

const ToggleCircle = styled.div<{ $state: boolean; $size: number }>`
  width: ${(props) => `${props.$size / 2}px`};
  height: ${(props) => `${props.$size / 2}px`};
  position: absolute;
  border-radius: ${(props) => `${props.$size / 4}px`};
  box-shadow: 0 2px 2px #00000024;
  background-color: ${PALETTE_COMPONENT.primary_white};
  transform: ${(props) => (props.$state ? 'translateX(100%)' : 'none')};
  transition: all 0.3s ease-in;
`;

interface IAosToggleProps {
  size: number;
}

function AosToggle({ size }: IAosToggleProps) {
  const [isToggle, setIsToggle] = useState(false);

  const toggleHandler = () => {
    setIsToggle((prev: boolean) => !prev);
  };

  return (
    <Container onClick={toggleHandler} $size={size}>
      <ToggleLine $state={isToggle} $size={size} />
      <ToggleCircle $state={isToggle} $size={size} />
    </Container>
  );
}

export default AosToggle;
