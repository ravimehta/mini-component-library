/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZE_STYLES = {
  small: {
    "--height": "8px",
    "--outerCornerRadius": "4px",
    "--innerCornerRadius": "4px",
    "--padding": "0px",
  },
  medium: {
    "--height": "12px",
    "--outerCornerRadius": "4px",
    "--innerCornerRadius": "4px",
    "--padding": "0px",
  },
  large: {
    "--height": "24px",
    "--outerCornerRadius": "8px",
    "--innerCornerRadius": "4px",
    "--padding": "4px",
  },
};

const ProgressBarElement = styled.progress`
  /* Reset the default appearance */
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  height: var(--height);

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--outerCornerRadius);
    padding: var(--padding);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    overflow: hidden;
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: var(--innerBorderRadius);
  }
`;

const ProgressBar = ({ value, size }) => {
  const style = SIZE_STYLES[size];

  if (!style) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  const innerCornerRadius = style["--innerCornerRadius"];

  if (value >= 98) {
    style["--innerBorderRadius"] = innerCornerRadius;
  } else {
    style[
      "--innerBorderRadius"
    ] = `${innerCornerRadius} 0 0 ${innerCornerRadius}`;
  }

  return <ProgressBarElement value={value} max={100} style={style} />;
};

export default ProgressBar;
