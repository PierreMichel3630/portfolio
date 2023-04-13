import { sousTitre1 } from "../../style/designSystem";

interface Props {
  icon: any;
  text: string;
}

export const IconText = ({ icon, text }: Props) => (
  <div
    style={{
      width: "fit-content",
      display: "flex",
      alignItems: "center",
      marginBottom: 5,
    }}
  >
    {icon}
    <span
      className={sousTitre1}
      style={{ alignContent: "center", marginLeft: 5 }}
    >
      {text}
    </span>
  </div>
);
