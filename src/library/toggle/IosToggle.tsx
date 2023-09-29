import { styled } from 'styled-components';
import { useState } from 'react';
// components
import { PALETTE_COMPONENT } from '../../styles/colors';

const Container = styled.div<{ $state: boolean; $size: number }>`
  width: ${(props) => `${props.$size}px`};
  height: ${(props) => `${(props.$size / 5) * 3}px`};
  padding: ${(props) => `${props.$size / 50}px`};
  border-radius: ${(props) => `${(props.$size / 10) * 3}px`};
  background-color: ${(props) =>
    props.$state ? '#fff0cc' : PALETTE_COMPONENT.gray03};
  transition: all 0.3s ease-in;
  > div {
    width: ${(props) => `${(props.$size / 25) * 14}px`};
    height: ${(props) => `${(props.$size / 25) * 14}px`};
    border-radius: ${(props) => `${(props.$size / 25) * 7}px`};
    background-color: ${PALETTE_COMPONENT.primary_white};
    box-shadow: ${(props) =>
      `0 ${props.$size / 25}px ${props.$size / 25}px #00000030`};
    transform: ${(props) => (props.$state ? 'translateX(71%)' : 'none')};
    transition: all 0.3s ease-in;
  }
`;

interface IIosToggleProps {
  size: number;
}

function IosToggle({ size }: IIosToggleProps) {
  const [isToggle, setIsToggle] = useState(false);

  const toggleHandler = () => {
    setIsToggle((prev: boolean) => !prev);
  };

  return (
    <Container onClick={toggleHandler} $state={isToggle} $size={size}>
      <div />
    </Container>
  );
}

export default IosToggle;
