import Image from "next/image"
import styles from "./rightbar.module.css"

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
      <div className={styles.bgContainer}>


      <Image src="/astronaut.png" alt="Astronaut" width={500} height={500}/>
      </div>

      <div className={styles.texts}>

      </div>
      </div>
    </div>
  )
}

export default Rightbar
