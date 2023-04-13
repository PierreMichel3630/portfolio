import { Colors, sousTitre1, sousTitre3 } from "../style/designSystem";
import { competences } from "../utils/data";
import { Card } from "./commun/Card";

export const CardSkill = () => (
  <Card>
    <h1 className={sousTitre3}>Compétences</h1>
    {competences.map((competence) => (
      <div key={competence.nom}>
        <div style={{ flex: 1 }}>
          <span className={sousTitre1}>{competence.nom}</span>
        </div>
        <div style={{ flex: 2 }}>
          <div
            style={{
              backgroundColor: Colors.gris2,
              height: "10px",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                backgroundColor: Colors.bleu,
                height: "10px",
                borderRadius: "12px",
                width: `${competence.niveau}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    ))}
  </Card>
);
