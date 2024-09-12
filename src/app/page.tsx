import Soon from "@/widgets/soon/soon";
import style from "./page.module.scss";
import Card from "@/widgets/card/card";

export default function Home() {
  return (
    <div className={style.container}>
      <Card />
      <Soon />
    </div>
  );
}
