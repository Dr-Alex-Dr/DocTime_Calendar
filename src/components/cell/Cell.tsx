import styles from './Cell.module.scss';

const Cell = ({params}: any) => {
    return (
        <div className={styles.container}>
            <p>8:00 - 19:00</p>
            <p>204</p>
        </div>
    )
}

export { Cell }