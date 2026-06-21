import { programs } from '@/constants/programs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import studentsIcon from '../../../assets/images/programs/students.svg'
import nationalitiesIcon from '../../../assets/images/programs/nationalities.svg'
import styles from './Programs.module.scss';

const iconsMap = {
    students: studentsIcon,
    nationalities: nationalitiesIcon
}

export default function ProgramsInfoList({ activeSlug }: { activeSlug: string }) {
    return (
        <ul className={styles.programsList}>
            {programs.items.map(item => {
                const isActive = item.slug === activeSlug;

                return (
                    <motion.li
                        key={item.slug}
                        className={styles.programItem}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ type: "tween", ease: "linear", duration: 0.4 }}
                        style={{
                            pointerEvents: isActive ? 'auto' : 'none'
                        }}
                    >
                        <h3>{item.title}</h3>
                        <p className={styles.description}>{item.description}</p>

                        <ul className={styles.stats}>
                            {item.stats.map(stat => (
                                <li key={stat.slug}>
                                    <Image src={iconsMap[stat.slug]} alt={stat.title} />
                                    <div className={styles.statValue}>
                                        <p>{stat.title}</p>
                                        <p>{stat.value}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.li>
                );
            })}
        </ul>
    );
}
