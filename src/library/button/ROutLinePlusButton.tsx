import styled from 'styled-components';
import plus from '/src/assets/darkPlus.svg';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { PALETTE_COMPONENT } from '../../styles/colors';

const Button = styled.button<{ $size: number }>`
  width: ${(props) => `${props.$size}px`};
  height: ${(props) => `${(props.$size / 115) * 40}px`};
  padding: ${(props) =>
    `${(props.$size / 115) * 8}px ${(props.$size / 115) * 16}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => `${(props.$size / 115) * 8}px`};
  border: 1px solid #fff8e7;
  border-radius: ${(props) => `${(props.$size / 115) * 10}px`};
  background-color: #ffffff;

  ${FONT_STYLE_V1.text.text_16_medium}
  font-size: ${(props) => `${(props.$size / 115) * 16}px`};
  line-height: ${(props) => `${(props.$size / 115) * 24}px`};
  font-weight: 500;
  color: ${PALETTE_COMPONENT.primary_black};

  &:hover {
    border-color: #fff0cc;
    box-shadow: 0 0 14px #66470020;
  }
  &:active {
    border-color: #ffd166;
    box-shadow: 0 0 14px #66470020;
  }
  img {
    width: ${(props) => `${(props.$size / 115) * 14}px`};
    height: ${(props) => `${(props.$size / 115) * 14}px`};
  }
`;

interface IROutLinePlusButtonProps {
  size: number;
}

function ROutLinePlusButton({ size = 115 }: IROutLinePlusButtonProps) {
  return (
    <Button type='button' $size={size}>
      <span>Button</span>
      <span>
        <img src={plus} alt='plus' />
      </span>
    </Button>
  );
}

export default ROutLinePlusButton;
