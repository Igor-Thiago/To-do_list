import styles from "./Header.module.css"

export function Header(){
    return(
        <header className={styles.header}>
             <img src="/Logo.svg" alt="logo da aplicação" />

        </header>
    )
}