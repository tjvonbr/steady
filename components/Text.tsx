import React from "react";
import classNames from "classnames";

export enum Size {
  BASE = "BASE",
  LARGE = "LARGE",
  XLARGE = "XLARGE",
  XSMALL = "XSMALL",
  SMALL = "SMALL",
}

export enum Weight {
  BOLD = "BOLD",
  LIGHT = "LIGHT",
  MEDIUM = "MEDIUM",
  NORMAL = "NORMAL",
}

const SIZE_MAP: Record<Size, string> = {
  BASE: "text-base",
  LARGE: "text-lg",
  SMALL: "text-sm",
  XLARGE: "text-xl",
  XSMALL: "text-xs",
};

const WEIGHT_MAP: Record<Weight, string> = {
  BOLD: "font-bold",
  LIGHT: "font-light",
  MEDIUM: "font-medium",
  NORMAL: "font-normal",
};

interface TextProps {
  children: React.ReactNode;
  weight?: Weight;
  size?: Size;
}

const Text = ({
  children,
  weight = Weight.NORMAL,
  size = Size.BASE,
}: TextProps) => {
  return (
    <p className={classNames("mb-0", SIZE_MAP[size], WEIGHT_MAP[weight])}>
      {children}
    </p>
  );
};

export default Text;
