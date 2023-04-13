import { margin, percent, px } from "csx";
import { media, style } from "typestyle";
import { sousTitre3, sousTitre4, text } from "../style/designSystem";
import { hoobies } from "../utils/data";
import { Card } from "./commun/Card";

const cssPhoto = style(
  {
    width: percent(100),
    borderRadius: px(12),
    objectFit: "cover",
    maxHeight: px(150),
  },
  media(
    { minWidth: 0, maxWidth: 1000 },
    {
      margin: margin(0),
    }
  ),
  media(
    { minWidth: 1000 },
    {
      margin: margin(30, 0),
    }
  )
);

const body = style(
  {},
  media(
    { minWidth: 0, maxWidth: 600 },
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }
  ),
  media(
    { minWidth: 600, maxWidth: 1000 },
    {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    }
  ),
  media(
    { minWidth: 1000 },
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }
  )
);

const divPhoto = style(
  {},
  media(
    { minWidth: 0, maxWidth: 1000 },
    {
      flex: 1,
    }
  ),
  media(
    { minWidth: 1000 },
    {
      flex: 1,
    }
  )
);

const divText = style(
  {},
  media(
    { minWidth: 0, maxWidth: 1000 },
    {
      flex: 2,
      display: "flex",
      alignItems: "center",
      padding: px(10),
    }
  ),
  media(
    { minWidth: 1000 },
    {
      flex: 1,
    }
  )
);

export const Hobbies = () => (
  <Card>
    <h1 className={sousTitre3}>Hobbies</h1>
    {hoobies.map((hobbie) => (
      <div key={hobbie.nom} className={body}>
        <div className={divPhoto}>
          <img src={hobbie.photo} alt="description" className={cssPhoto} />
        </div>
        <div className={divText}>
          <div>
            <p className={sousTitre4}>{hobbie.nom}</p>
            <p className={text}>{hobbie.description}</p>
          </div>
        </div>
      </div>
    ))}
  </Card>
);
