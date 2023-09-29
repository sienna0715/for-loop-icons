import { styled } from 'styled-components';
import React, { useEffect, useState } from 'react';
import { PALETTE_COMPONENT } from '../../styles/colors';
import { FONT_STYLE_V1 } from '../../styles/fontStyles';

const Container = styled.div<{ width: number }>`
  width: ${(props) => (props.width ? props.width : 300)}px;
`;

const Result = styled.div<{ isdropdown?: string; width: number }>`
  width: ${(props) => (props.width ? props.width : 300)}px;
  height: ${(props) => (props.width ? props.width / 6 : 50)}px;
  padding: ${(props) => (props.width ? props.width / 25 : 12)}px;
  display: flex;
  align-items: center;
  background-color: ${PALETTE_COMPONENT.primary_white};
  border: 1px solid ${PALETTE_COMPONENT.gray03};
  border-radius: ${(props) =>
    props.isdropdown === 'true' ? '10px 10px 0 0' : '10px'};
  ${FONT_STYLE_V1.text.text_16_medium}
  font-size: ${(props) => props.width * 0.05}px;

  line-height: 24px;
  font-weight: 400;
  color: ${PALETTE_COMPONENT.primary_black};
`;

const Dropdown = styled.div<{ width: number }>`
  position: absolute;
  height: ${(props) => (props.width ? props.width * 0.58 : 175)}px;
  width: ${(props) => (props.width ? props.width : 300)}px;
  background-color: ${PALETTE_COMPONENT.primary_white};
  border: 1px solid ${PALETTE_COMPONENT.gray03};
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  overflow-y: scroll;
`;

const DropdownList = styled(Result)`
  border: none;
  border-radius: 0;
  font-size: ${(props) => props.width * 0.05}px;

  &:hover {
    background-color: #fff0cc;
  }
`;

interface IDefaultDropdownProps {
  width: number;
  list: string[];
}

function DefaultDropdown({
  width = 300,
  list = ['옵션 1', '옵션 2', '옵션 3', '옵션 4', '옵션 5'],
}: IDefaultDropdownProps) {
  const [isDropdown, setIsDropdown] = useState('false');
  const [result, setResult] = useState('');

  useEffect(() => {
    setResult(list[0]);
  }, [list]);

  const resultDropdownHandler = () => {
    if (isDropdown === 'false') {
      setIsDropdown('true');
    } else if (isDropdown === 'true') {
      setIsDropdown('false');
    }
  };

  const changeResultHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.textContent) {
      setResult(e.currentTarget.textContent);
      setIsDropdown('false');
    }
  };
  return (
    <Container width={width}>
      <Result
        onClick={resultDropdownHandler}
        isdropdown={isDropdown}
        width={width}
      >
        {result}
      </Result>
      {isDropdown === 'true' ? (
        <Dropdown width={width}>
          {list.map((el) => {
            return (
              <DropdownList width={width} onClick={changeResultHandler}>
                {el}
              </DropdownList>
            );
          })}
        </Dropdown>
      ) : null}
    </Container>
  );
}

export default DefaultDropdown;
