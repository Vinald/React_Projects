import styles from "./Button.module.css";

export default function Button() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleClick}>
                    Read More
                </button>
            </div>
        </>
    );
}
