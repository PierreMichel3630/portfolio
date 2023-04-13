import { CSSProperties, ReactNode } from "react";
import { px } from "csx";
import { style } from "typestyle";

const cardCss = style({
  backgroundColor: "white",
  borderRadius: px(12),
  padding: px(18),
  margin: px(10),
});

interface Props {
  children: ReactNode;
  style?: CSSProperties;
}

export const Card = ({ children, style }: Props) => (
  <div style={style} className={cardCss}>
    {children}
  </div>
);
