import styles from '../styles/Category.module.scss';
import CategoryCard from './CategoryCard';

const Category = () => {
    return (
        <div className={styles.Category}>
            <div className={styles.heading}>
                Choose your Category
            </div>
            <div className={styles.categories}>
                <CategoryCard category="Hand Drawn" />
                <CategoryCard category="Monochrome" />
                <CategoryCard category="Portrait" />
                <CategoryCard category="Digital Art" />
            </div>
        </div>
    );
};

export default Category;