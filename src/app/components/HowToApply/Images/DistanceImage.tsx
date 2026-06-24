import Image from 'next/image'
import main from '../../../../assets/images/apply/distance/main.webp'
import part1 from '../../../../assets/images/apply/distance/dec_part_1.svg'
import part2 from '../../../../assets/images/apply/distance/dec_part_2.svg'
import part3_1 from '../../../../assets/images/apply/distance/dec_part_3_1.svg'
import part3_2 from '../../../../assets/images/apply/distance/dec_part_3_2.svg'
import part4 from '../../../../assets/images/apply/distance/dec_part_4.svg'
import styles from '../HowToApply.module.scss'

export default function DistanceImage() {
  return (
    <>
      <div className={styles.mainImage}>
        <Image src={main} alt='distance education' />
      </div>

      <div className={styles.part1}>
        <Image src={part1} alt='Around The World' />
        <div>Around The World</div>
      </div>

      <div className={styles.part2}>
        <Image src={part2} alt='pancil' />
      </div>

      <ul className={styles.part3}>
        {Array.from({ length: 5 }, (_, index) => (<li key={index}><Image src={index === 2 ? part3_2 : part3_1} alt='question' /></li>))}
      </ul>
      <ul className={styles.part4}>
        {Array.from({ length: 5 }, (_, index) => (<li key={index}><Image src={part3_2} alt='question' /></li>))}
      </ul>

      <ul className={styles.part5}>
        {Array.from({ length: 4 }, (_, index) => (<li key={index}>{index === 0 && <Image src={part4} alt='question' />}</li>))}
      </ul>
    </>
  )
}
