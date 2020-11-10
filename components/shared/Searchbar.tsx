import { MdSearch } from 'react-icons/md';
import styles from '../../styles/shared/Searchbar.module.scss';

const Searchbar = () => {
    return (
        <div className={styles.Searchbar}>
            <div className={styles.search}>
                <MdSearch size={30} className={styles.searchIcon} />
                <input type="text" />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Searchbar;