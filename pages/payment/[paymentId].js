import style from "../../styles/Payment.module.css";
import Head from "next/head";
import Enroll from "../../components/Enroll";

export default function payment() {
  return (
    <div className={style.payment}>
      <Head>
        <title>Afriopia | Enroll</title>
        <meta name="description" content="Afriopia Enrollment Page" />
      </Head>
      <Enroll />
    </div>
  );
}
