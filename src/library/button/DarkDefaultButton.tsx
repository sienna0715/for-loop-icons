import styled from 'styled-components';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import { PALETTE_COMPONENT } from '../../styles/colors';

const Button = styled.button<{ $size: number }>`
  width: ${(props) => `${props.$size}px`};
  height: ${(props) => `${props.$size / 2}px`};
  padding: ${(props) => `${props.$size / 10}px ${props.$size / 5}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: ${(props) => `${props.$size / 8}px`};
  background-color: ${PALETTE_COMPONENT.primary_black};

  ${FONT_STYLE_V1.text.text_16_medium}
  font-size: ${(props) => `${props.$size / 5}px`};
  line-height: ${(props) => `${(props.$size / 10) * 3}px`};
  font-weight: 500;
  text-align: center;
  color: #fff8e7;

  &:hover {
    box-shadow: 0 0 14px #fef7e6;
  }
  &:active {
    border: 1px solid #fff0cc;
    box-shadow: 0 0 14px #66470020;
  }
`;

interface IDarkDefaultButtonProps {
  size: number;
}

function DarkDefaultButton({ size = 80 }: IDarkDefaultButtonProps) {
  return (
    <Button type='button' $size={size}>
      Button
    </Button>
  );
}

export default DarkDefaultButton;
