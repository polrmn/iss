import Image from 'next/image'
import main from '../../../../assets/images/apply/on-campus/main.webp'
import part1 from '../../../../assets/images/apply/on-campus/dec_part_1.svg'
import part2 from '../../../../assets/images/apply/on-campus/dec_part_2.svg'
import part3 from '../../../../assets/images/apply/on-campus/dec_part_3.svg'
import part4 from '../../../../assets/images/apply/on-campus/dec_part_4.svg'
import part5 from '../../../../assets/images/apply/on-campus/dec_part_5.svg'
import part6 from '../../../../assets/images/apply/on-campus/dec_part_6.svg'
import styles from '../HowToApply.module.scss'

export default function OnCampusImage() {
  return (
    <>
      <div className={styles.mainImage}>
        <Image src={main} alt='distance education' />
        <div className={styles.part1}>
          <Image src={part1} alt='easy admission process' />
          <div>Easy admission process</div>
        </div>
        <div className={styles.part2}>
          <Image src={part2} alt='idea' />
        </div>
        <div className={styles.part3}>
          <Image src={part3} alt='tuition' />
        </div>
        <div className={styles.part4}>
          <Image src={part4} alt='watching' />
        </div>
        <ul className={styles.part5}>
          {Array.from({ length: 3 }, (_, index) => (
            <li key={index}><Image src={part5} alt='question' /></li>
          ))}
        </ul>
        <ul className={styles.part6}>
          {Array.from({ length: 4 }, (_, index) => (
            <li key={index}><Image src={part6} alt='claimation' /></li>
          ))}
        </ul>
        <div className={styles.part7} />
        <div className={styles.part8} />
        <div className={styles.part9} />
      </div>
    </>
  )
}
