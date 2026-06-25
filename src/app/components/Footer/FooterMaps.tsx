'use client'

import { useState } from 'react'
import { maps } from '@/constants/contacts'
import styles from './Footer.module.scss'

const FooterMaps = () => {
    const [activeMap, setActiveMap] = useState(maps[0].value);

    return (
        <div className={styles.footerMapsContainer}>
            <ul>
                {maps.map(map => (
                    <li key={map.value} className={styles.footerLinkItem}>
                        <button onClick={() => setActiveMap(map.value)}>{map.label}: {map.value}</button>
                    </li>
                ))}
            </ul>
            <div className={styles.maps}>
                {maps.map(map => (
                    <iframe
                        key={map.value}
                        className={activeMap === map.value ? styles.activeMap : ''}
                        width={600}
                        height={450}
                        src={map.src}
                        allowFullScreen
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'

                    />
                ))}
            </div>
        </div>
    )
}

export default FooterMaps