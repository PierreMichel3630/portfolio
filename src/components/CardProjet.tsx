import { percent, px } from "csx";
import { CSSProperties } from "react";
import { media, style } from "typestyle";
import {
  buttonBlue,
  buttonWhite,
  sousTitre1,
  text,
  titre1,
} from "../style/designSystem";
import { Projet } from "../utils/data";
import { Card } from "./commun/Card";

const cssPhoto = style({
  maxWidth: percent(100),
  borderRadius: px(12),
  height: percent(100),
  objectFit: "cover",
});

const body = style(
  {},
  media(
    { minWidth: 0, maxWidth: 500 },
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }
  ),
  media(
    { minWidth: 500 },
    {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    }
  )
);

const divPhoto = style(
  {},
  media(
    { minWidth: 0, maxWidth: 500 },
    {
      flex: 1,
    }
  ),
  media(
    { minWidth: 500 },
    {
      flex: 2,
    }
  )
);

const divText = style(
  {},
  media(
    { minWidth: 0, maxWidth: 500 },
    {
      flex: 1,
    }
  ),
  media(
    { minWidth: 500 },
    {
      flex: 3,
      padding: px(10),
    }
  )
);

interface Props {
  projet: Projet;
  style?: CSSProperties;
}

export const CardProjet = ({ projet, style }: Props) => (
  <Card style={{ ...style }}>
    <div className={body}>
      <div className={divPhoto}>
        <img src={projet.photo} alt="description" className={cssPhoto} />
      </div>
      <div className={divText}>
        <div>
          {projet.technologies.map((technologie) => (
            <span key={technologie} className={sousTitre1}>
              #{technologie}
            </span>
          ))}
        </div>
        <h1
          className={titre1}
          style={{ marginTop: "25px", marginBottom: "18px" }}
        >
          {projet.nom}
        </h1>
        <p className={text}>{projet.description}</p>
        <div style={{ marginTop: "50px" }}>
          <button
            type="button"
            className={buttonBlue}
            style={{ marginRight: px(16) }}
          >
            Demo
          </button>
          <button type="button" className={buttonWhite}>
            Code
          </button>
        </div>
      </div>
    </div>
  </Card>
);
