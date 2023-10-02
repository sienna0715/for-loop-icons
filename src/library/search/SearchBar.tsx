import { useState } from "react";
import styled from "styled-components";
// components
import { PALETTE_COMPONENT } from "../../styles/colors";
import { FONT_STYLE_V1 } from "../../styles/fontStyles";
import DeleteImg from "../../assets/inputDelete.svg";
import SearchIcon from "../../assets/search.svg";

const SearchBarWrap = styled.div`
  .focus {
    border: 1px solid ${PALETTE_COMPONENT.primary_black};
    box-shadow: 0px 0px 3px 0px ${PALETTE_COMPONENT.primary_black};
  }
  cursor: pointer;
`;
const SearchBarContainer = styled.div<{ width: number }>`
  width: ${(props) => (props.width ? props.width : 400)}px;
  height: 70px;
  padding: 1rem;
  border: 1.5px solid ${PALETTE_COMPONENT.primary_black};
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    fill: ${PALETTE_COMPONENT.primary_black};
  }
`;
const Input = styled.input`
  ${FONT_STYLE_V1.text.text_18_medium};
  width: 100%;
  margin: 0 1rem;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${PALETTE_COMPONENT.primary_black};
  &::placeholder {
    color: ${PALETTE_COMPONENT.gray04};
  }
`;
const DeleteBtn = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const SearchImg = styled.img``;

interface ISearchProps {
  width: number;
}

export default function SearchBar({ width = 400 }: ISearchProps) {
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const count = value.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <SearchBarWrap>
      <SearchBarContainer className={isFocus ? "focus" : ""} width={width}>
        <SearchImg src={SearchIcon} />
        <Input
          type='text'
          placeholder='search...'
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleChange}
        />
        {count !== 0 && (
          <DeleteBtn src={DeleteImg} onClick={() => setValue("")} />
        )}
      </SearchBarContainer>
    </SearchBarWrap>
  );
}
