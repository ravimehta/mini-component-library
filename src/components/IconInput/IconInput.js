import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZE_STYLES = {
  small: {
    height: 24,
    borderThickness: 1,
    fontSize: 14,
    iconSize: 16,
    iconStrokeWidth: 1,
    paddingLeft: 24,
  },
  large: {
    height: 36,
    borderThickness: 2,
    fontSize: 18,
    iconSize: 24,
    iconStrokeWidth: 2,
    paddingLeft: 36,
  },
};

const InputField = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: var(--fontSize);
  font-weight: 700;

  width: 100%;
  height: 100%;

  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};

  padding-left: var(--paddingLeft);

  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  width: var(--iconSize);
  height: var(--iconSize);
  pointer-events: none;
`;

const IconInputWrapper = styled.div`
  position: relative;
  width: var(--width);
  height: var(--height);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = SIZE_STYLES[size];

  return (
    <IconInputWrapper
      style={{
        "--width": width + "px",
        "--height": styles.height + "px",
      }}
    >
      <IconWrapper style={{ "--iconSize": styles.iconSize + "px" }}>
        <Icon
          id={icon}
          size={styles.iconSize}
          strokeWidth={styles.iconStrokeWidth}
        />
      </IconWrapper>
      <InputField
        type="text"
        style={{
          "--fontSize": styles.fontSize + "px",
          "--borderThickness": styles.borderThickness + "px",
          "--paddingLeft": styles.paddingLeft + "px",
        }}
        {...delegated}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
    </IconInputWrapper>
  );
};

export default IconInput;
