import style from "../styles/Home.module.css"
import ClientsRow from "./ClientsRow"

export default function Clients() {
  return (
    <div className={style.clients}>
        <div className={style.clients__title}>
            <h2>Clients</h2>
        </div>
        <div className={style.clientsRow}>
            {/* <div className={style.clientsRow__holder}> */}
                <ClientsRow />
                <ClientsRow />
            {/* </div> */}
        </div>
    </div>
  )
}
