import styles from '../styles/Category.module.scss';

const CategoryCard = ({ category }: { category: string; }) => {
    return (
        <div className={styles.CategoryCard}>
            <span>{category}</span>
        </div>
    );
};

export default CategoryCard;