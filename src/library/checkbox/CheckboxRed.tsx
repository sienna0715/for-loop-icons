import { useState } from 'react';
import { styled } from 'styled-components';
// components
import { PALETTE_COMPONENT } from '../../styles/colors';
import Check from '../../assets/checkWhite.svg';

const CheckboxWrap = styled.div<{ scale: number }>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  transform: scale(${(props) => (props.scale ? props.scale : 1)});
  cursor: pointer;
`;
const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid ${PALETTE_COMPONENT.primary_red};
  border-radius: 2px;
`;
const CheckboxFill = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${PALETTE_COMPONENT.primary_red};
  border: 1px solid ${PALETTE_COMPONENT.primary_red};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CheckIcon = styled.img``;

interface ICheckboxProps {
  scale: number;
}

export default function CheckboxRed({ scale }: ICheckboxProps) {
  const [check, isCheck] = useState(false);

  return (
    <CheckboxWrap scale={scale} onClick={() => isCheck(!check)}>
      {check ? (
        <CheckboxFill>
          <CheckIcon src={Check} />
        </CheckboxFill>
      ) : (
        <Checkbox />
      )}
    </CheckboxWrap>
  );
}
