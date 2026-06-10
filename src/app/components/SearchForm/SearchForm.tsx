'use client'

import SearchIcon from '../icons/SearchIcon'
import styles from './SearchForm.module.scss'

export default function SearchForm() {
    return (
        <form onSubmit={(e) => e.preventDefault()} className={styles.searchForm}>
            <input type="text" placeholder="Search..." name='search' />
            <button type="submit"><div><SearchIcon /></div></button>
        </form>
    )
}
