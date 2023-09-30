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
  border: 1px solid ${PALETTE_COMPONENT.gray04};
  border-radius: ${(props) => `${props.$size / 8}px`};
  background-color: ${PALETTE_COMPONENT.gray02};

  ${FONT_STYLE_V1.text.text_16_medium}
  font-size: ${(props) => `${props.$size / 5}px`};
  line-height: ${(props) => `${(props.$size / 10) * 3}px`};
  font-weight: 500;
  color: ${PALETTE_COMPONENT.gray04};
`;

interface IDisableOutLineButtonProps {
  size: number;
}

function DisableOutLineButton({ size = 80 }: IDisableOutLineButtonProps) {
  return (
    <Button type='button' $size={size}>
      Button
    </Button>
  );
}

export default DisableOutLineButton;
