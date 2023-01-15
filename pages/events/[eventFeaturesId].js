import EventFeatureView from "../../components/EventFeatureView"
import Head from "next/head"

export default function eventFeaturesId() {
   return (
      <>
         <Head>
            <title>Afriopia | Tech Trade Show</title>
            <meta name="description" content="Tech Trade Show" />
            <link rel="icon" href="/images/events/Logo.svg" />
         </Head>
         <EventFeatureView />
      </>
   )
}
