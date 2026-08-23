import type {LucideIcon} from 'lucide-react';
import styles from './FeatureCard.module.css';

type FeatureCardProps = {
    icon: LucideIcon;
    title: string;
    description: string;
};

function FeatureCard({
    icon: Icon,
    title,
    description,
}: FeatureCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.iconWrapper} aria-hidden="true">
                <Icon size={28} strokeWidth={1.8} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}

export default FeatureCard;