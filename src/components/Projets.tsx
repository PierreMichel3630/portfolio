import { px } from "csx";
import { useState } from "react";
import { buttonBlue, buttonWhite, sousTitre3 } from "../style/designSystem";
import { projets } from "../utils/data";
import { CardProjet } from "./CardProjet";
import { Card } from "./commun/Card";

export const Projets = () => {
  const types = projets
    .map((el) => el.type)
    .filter((value, index, self) => self.indexOf(value) === index);
  const [selectedType, setSelectedType] = useState<Array<string>>(types);

  const isSelected = (type: string) => {
    return selectedType.includes(type);
  };

  const selectType = (type: string) => {
    if (isSelected(type)) {
      setSelectedType([...selectedType.filter((el) => el !== type)]);
    } else {
      setSelectedType([...selectedType, type]);
    }
  };

  const projetsFilter = projets.filter((el) => selectedType.includes(el.type));

  return (
    <div>
      <Card>
        <h1 className={sousTitre3} style={{ marginBottom: px(16) }}>
          Projects ({projetsFilter.length})
        </h1>
        {types.map((type) => (
          <button
            key={type}
            type="button"
            className={isSelected(type) ? buttonBlue : buttonWhite}
            onClick={() => selectType(type)}
          >
            {type}
          </button>
        ))}
      </Card>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
        }}
      >
        {projetsFilter.map((projet) => (
          <CardProjet key={projet.nom} projet={projet} />
        ))}
      </div>
    </div>
  );
};
