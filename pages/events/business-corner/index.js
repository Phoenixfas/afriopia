import Head from "next/head"
import BusinessCorner from "../../../components/BusinessCorner"

export default function businessCorner() {
   return (
      <>
         <Head>
            <title>Afriopia | Tech Trade Show</title>
            <meta name="description" content="Tech Trade Show" />
            <link rel="icon" href="/images/events/Logo.svg" />
         </Head>
         <BusinessCorner />
      </>
   )
}
