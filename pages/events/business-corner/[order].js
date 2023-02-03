import Head from "next/head"
import BusinessCornerView from "../../../components/BusinessCornerView"

export default function businessCorner() {
   return (
      <>
         <Head>
            <title>Afriopia | Tech Trade Show</title>
            <meta name="description" content="Tech Trade Show" />
            <link rel="icon" href="/images/events/Logo.svg" />
         </Head>
         <BusinessCornerView />
      </>
   )
}
