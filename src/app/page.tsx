import Soon from "@/widgets/soon/soon";
import style from "./page.module.scss";
import Map from "../widgets/map/map";
import Opening from "@/features/imgHeader/opening";

export default function Home() {
  return (
    <div>
      <Opening />
      <div className={style.container}>
        <Map />
        <Soon />
      </div>
    </div>
  );
}
