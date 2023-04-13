import { percent, px } from "csx";
import moment from "moment";
import { media, style } from "typestyle";
import { text, text2, titre1 } from "../style/designSystem";
import { experiences } from "../utils/data";
import { Card } from "./commun/Card";

const cardExperience = style(
  {
    marginBottom: px(15),
  },
  media(
    { minWidth: 0 },
    {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    }
  )
);

const photo = style({
  maxWidth: percent(100),
});

const divPhoto = style({
  flex: 1,
  margin: 5,
});

const divText = style({
  flex: 3,
  display: "flex",
  alignItems: "center",
});

export const ProfessionalExperience = () => (
  <Card>
    <h1 className={titre1}>Experiences</h1>
    {experiences.map((experience, index) => {
      const dateDebut = moment(experience.dateDebut);
      const dateFin = moment(experience.dateFin);
      const diffDuration = moment.duration(dateFin.diff(dateDebut));
      return (
        <div className={cardExperience} key={index}>
          <div className={divPhoto}>
            <img src={experience.logo} alt="" className={photo} />
          </div>
          <div className={divText}>
            <div>
              <p className={text2}>
                {dateDebut.format("MM/YYYY")} -{" "}
                {experience.dateFin ? dateFin.format("MM/YYYY") : "aujourd'hui"}{" "}
                ({diffDuration.years()} ans, {diffDuration.months()} mois,{" "}
                {diffDuration.days()} jours)
              </p>
              <p>{experience.poste}</p>
              <p className={text}>{experience.description}</p>
            </div>
          </div>
        </div>
      );
    })}
  </Card>
);
