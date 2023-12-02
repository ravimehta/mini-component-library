import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const SelectLabel = styled.span`
  vertical-align: middle;
`;

const SelectIcon = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 16px;
`;

const SelectElement = styled.select`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const SelectWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  border-radius: 8px;
  display: inline-block;
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <SelectLabel>{displayedValue}</SelectLabel>
      <SelectIcon>
        <Icon id="chevron-down" strokeWidth={1} size={24} />
      </SelectIcon>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
    </SelectWrapper>
  );
};

export default Select;
