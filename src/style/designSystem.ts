import { border, px } from "csx";
import { style } from "typestyle";

export const Colors = {
  noir: "#333333",
  gris: "#828282",
  gris2: "#C4C4C4",
  gris3: "#4F4F4F",
  bleu: "#2F80ED",
};

export const Font = {
  Montserrat: "Montserrat",
};

export const FontStyle = {
  Medium: "Medium",
  SemiBold: "SemiBold",
};

export const titre1 = style({
  fontFamily: Font.Montserrat,
  fontStyle: FontStyle.Medium,
  fontSize: px(24),
  color: Colors.noir,
  fontWeight: 500,
  margin: 0,
});

export const titre2 = style({
  fontFamily: Font.Montserrat,
  fontStyle: FontStyle.Medium,
  fontSize: px(24),
  color: Colors.noir,
  fontWeight: 600,
  margin: 0,
});

export const titre3 = style({
  fontFamily: Font.Montserrat,
  fontStyle: FontStyle.SemiBold,
  fontSize: px(16),
  color: Colors.noir,
  margin: 0,
});

export const sousTitre1 = style({
  fontFamily: Font.Montserrat,
  fontSize: px(16),
  color: Colors.gris3,
  margin: 0,
});

export const sousTitre2 = style({
  fontFamily: Font.Montserrat,
  fontSize: px(18),
  color: Colors.gris,
  fontWeight: 500,
  margin: 0,
});

export const sousTitre3 = style({
  fontFamily: Font.Montserrat,
  fontSize: px(24),
  color: Colors.gris3,
  margin: 0,
  fontWeight: 500,
});

export const sousTitre4 = style({
  fontFamily: Font.Montserrat,
  fontSize: px(18),
  color: Colors.noir,
  margin: 0,
  fontWeight: 600,
});

export const text = style({
  fontFamily: Font.Montserrat,
  fontSize: px(16),
  color: Colors.gris,
  fontWeight: 500,
  margin: 0,
});

export const text2 = style({
  fontFamily: Font.Montserrat,
  fontSize: px(14),
  color: Colors.gris,
  fontWeight: 500,
  margin: 0,
});

export const buttonBlue = style({
  backgroundColor: Colors.bleu,
  color: "white",
  border: "none",
  appearance: "none",
  fontFamily: Font.Montserrat,
  fontSize: px(18),
  fontWeight: 500,
  textAlign: "center",
  borderRadius: "12px",
  padding: "0.6rem 1.2rem",
  cursor: "pointer",
  margin: px(2),
});

export const buttonWhite = style({
  backgroundColor: "white",
  color: Colors.bleu,
  border: border({ color: Colors.bleu, width: px(1), style: "solid" }),
  appearance: "none",
  fontFamily: Font.Montserrat,
  fontSize: px(18),
  fontWeight: 500,
  textAlign: "center",
  borderRadius: "12px",
  padding: "0.6rem 1.2rem",
  cursor: "pointer",
  margin: px(2),
});
