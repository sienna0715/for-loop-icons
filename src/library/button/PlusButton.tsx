import styled from 'styled-components';
import plus from '../../assets/darkPlus.svg';
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
  border: none;
  border-radius: ${(props) => `${(props.$size / 115) * 10}px`};
  background-color: #fff8e7;

  ${FONT_STYLE_V1.text.text_16_medium}
  font-size: ${(props) => `${(props.$size / 115) * 16}px`};
  line-height: ${(props) => `${(props.$size / 115) * 24}px`};
  font-weight: 500;
  color: ${PALETTE_COMPONENT.primary_black};

  &:hover {
    box-shadow: 0 0 14px #66470020;
  }
  &:active {
    background-color: #fff0cc;
    box-shadow: 0 0 14px #66470020;
  }
  img {
    width: ${(props) => `${(props.$size / 115) * 14}px`};
    height: ${(props) => `${(props.$size / 115) * 14}px`};
  }
`;

interface IPlusButtonProps {
  size: number;
}

function PlusButton({ size }: IPlusButtonProps) {
  return (
    <Button type='button' $size={size}>
      <span>
        <img src={plus} alt='plus' />
      </span>
      <span>Button</span>
    </Button>
  );
}

export default PlusButton;
