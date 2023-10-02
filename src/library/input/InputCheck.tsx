import React, { useState } from 'react';
import styled from 'styled-components';
// components
import { PALETTE_COMPONENT } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';
import DeleteIcon from '../../assets/inputDelete.svg';
import AlertIcon from '../../assets/inputAlert.svg';
import CheckIcon from '../../assets/inputCheck.svg';

const InputForm = styled.form`
  border-radius: 4px;
  .success {
    border: 1.5px solid ${PALETTE_COMPONENT.primary_blue};
  }
  .error {
    border: 1.5px solid ${PALETTE_COMPONENT.primary_red};
  }
`;
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
  ${FONT_STYLE_V1.text.text_20_medium};
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${PALETTE_COMPONENT.primary_black};
  &::placeholder {
    color: ${PALETTE_COMPONENT.gray03};
  }
`;
const ButtoneBox = styled.div`
  display: flex;
`;
const DeleteBtn = styled.img`
  padding-right: 0.5rem;
  cursor: pointer;
`;
const ResultIcon = styled.img`
  width: 16px;
  height: 16px;
`;

interface IInputCheckProps {
  width: number;
  check: RegExp;
}

export default function InputCheckIcon({
  width = 400,
  check = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
}: IInputCheckProps) {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [checkIcon, isCheckIcon] = useState(false);
  const count = value.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleCheck = () => {
    if (check.test(value)) {
      isCheckIcon(true);
    } else {
      isCheckIcon(false);
    }
  };

  return (
    <InputForm onChange={handleCheck}>
      {count === 0 ? (
        <InputWrap width={width}>
          <InputContainer>
            <Label>비밀번호</Label>
            <Input
              type="text"
              value={value}
              onFocus={() => setIsFocus(true)}
              onChange={handleChange}
            />
          </InputContainer>
          {isFocus && count !== 0 && (
            <DeleteBtn src={DeleteIcon} onClick={() => setValue('')} />
          )}
        </InputWrap>
      ) : (
        <InputWrap width={width} className={checkIcon ? 'success' : 'error'}>
          <InputContainer>
            <Label>비밀번호</Label>
            <Input
              type="password"
              placeholder="id"
              value={value}
              onFocus={() => setIsFocus(true)}
              onChange={handleChange}
            />
          </InputContainer>
          <ButtoneBox>
            {isFocus && count !== 0 && (
              <DeleteBtn src={DeleteIcon} onClick={() => setValue('')} />
            )}
            <ResultIcon
              src={checkIcon ? CheckIcon : AlertIcon}
              onClick={() => setValue('')}
            />
          </ButtoneBox>
        </InputWrap>
      )}
    </InputForm>
  );
}
