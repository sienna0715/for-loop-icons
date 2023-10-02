import { useState } from 'react';
import styled from 'styled-components';
// components
import { PALETTE_COMPONENT } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import DeleteIcon from '../../assets/inputDelete.svg';

const InputWrap = styled.div<{ width: number }>`
  width: ${(props) => (props.width ? props.width : 400)}px;
  height: 70px;
  padding: 0.8rem;
  border: 1.5px solid ${PALETTE_COMPONENT.primary_black};
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InputContainer = styled.div`
  width: 350px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Label = styled.label`
  ${FONT_STYLE_V1.text.text_8_medium};
  color: ${PALETTE_COMPONENT.gray04};
  padding-bottom: 0.3rem;
`;
const Input = styled.input`
  ${FONT_STYLE_V1.text.text_18_medium};
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${PALETTE_COMPONENT.primary_black};
  &::placeholder {
    color: ${PALETTE_COMPONENT.gray03};
  }
`;
const DeleteBtn = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

interface IInputDefaultProps {
  width: number;
}

export default function InputDefault({ width = 400 }: IInputDefaultProps) {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const count = value.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputWrap width={width}>
      <InputContainer>
        <Label>아이디</Label>
        <Input
          type="text"
          value={value}
          onFocus={() => setIsFocus(true)}
          // onBlur={() => setIsFocus(false)}
          onChange={handleChange}
        />
      </InputContainer>
      {isFocus && count !== 0 && (
        <DeleteBtn src={DeleteIcon} onClick={() => setValue('')} />
      )}
    </InputWrap>
  );
}
