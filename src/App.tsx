import { px } from "csx";
import { media, style } from "typestyle";
import "./App.css";
import { CardPeople } from "./components/CardPeople";
import { CardSkill } from "./components/CardSkill";
import { ProfessionalExperience } from "./components/ProfessionalExperience";
import { Projets } from "./components/Projets";
import "moment/locale/fr";
import moment from "moment";
import { Hobbies } from "./components/Hobbies";

moment().locale("fr");

const divCss = style({
  backgroundColor: "#bcbcbc",
  minHeight: "100vh",
});

const body = style(
  {
    maxWidth: px(1100),
    margin: "0 auto",
  },
  media(
    { minWidth: 0, maxWidth: 1000 },
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }
  ),
  media(
    { minWidth: 1000 },
    {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    }
  )
);

function App() {
  return (
    <div className={divCss}>
      <div className={body}>
        <div style={{ flex: 1 }}>
          <CardPeople />
          <CardSkill />
          <Hobbies />
        </div>
        <div style={{ flex: 2 }}>
          <ProfessionalExperience />
          <Projets />
        </div>
      </div>
    </div>
  );
}

export default App;
