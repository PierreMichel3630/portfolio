import { person } from "../utils/data";
import { Card } from "./commun/Card";

import { ReactComponent as Phone } from "../assets/icons/phone.svg";
import { ReactComponent as Mail } from "../assets/icons/mail.svg";
import { titre2, sousTitre2, text } from "../style/designSystem";
import { IconText } from "./commun/IconText";
import { media, style } from "typestyle";
import { percent, px } from "csx";

const cssPhoto = style({
  width: percent(100),
  borderRadius: px(12),
  height: percent(100),
  objectFit: "cover",
});

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

export const CardPeople = () => (
  <Card>
    <div className={body}>
      <div className={divPhoto}>
        <img src={person.photo} alt="" className={cssPhoto} />
      </div>
      <div className={divText}>
        <p className={titre2}>
          {person.prenom} {person.nom}
        </p>
        <p className={sousTitre2}>{person.metier}</p>
        <div style={{ marginTop: "30px" }}>
          <IconText
            icon={<Mail width={20} height="auto" />}
            text={person.mail}
          />
          <IconText
            icon={<Phone width={20} height="auto" />}
            text={person.telephone}
          />
        </div>
        <div style={{ marginTop: 30 }}>
          <span className={text}>{person.description}</span>
        </div>
      </div>
    </div>
  </Card>
);
