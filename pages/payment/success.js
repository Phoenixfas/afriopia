import style from "../../styles/Payment.module.css";
import ParticlesBackground from "../../components/ParticlesBackground";

export default function success() {
  return (
    <div className={style.success}>
      <ParticlesBackground />
      <div className={style.success_container}>
        <h1>Payment Success</h1>
      </div>
    </div>
  );
}
