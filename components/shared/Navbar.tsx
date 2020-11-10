import styles from '../../styles/shared/Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    Openlabs
            </div>
                <div className={styles.rightNav}>
                    <span>Login</span>
                    <span>Signup</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;