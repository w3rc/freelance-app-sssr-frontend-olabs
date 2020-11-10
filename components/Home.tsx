import styles from '../styles/Home.module.scss';
import Category from './Category';
import Navbar from './shared/Navbar';
import Searchbar from './shared/Searchbar';

const Home = () => {
    return (
        <div className={styles.Home}>
            <Navbar />
            <div className={styles.body}>
                <img className={styles.img} src="https://images.unsplash.com/photo-1553490038-143ef3ab2a98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80" alt="landing_img" />
                <Searchbar />
                <Category />
            </div>
        </div>
    );
};

export default Home;