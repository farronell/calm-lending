import logo from "../../img/logo/logo.png";
import styles from "./Calm.module.css"

export default function Calm() {
    return (
        <section className={styles.section}>
            <img src={logo} alt="logo" />
            <h1 className={styles.h1}>Welcome to Calm – a lifestyle blog about minimalism, technology, design & travel.</h1>
        </section>
    )
}