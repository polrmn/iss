import Image from 'next/image'
import main from '../../../../assets/images/apply/online/main.webp'
import part1_1 from '../../../../assets/images/apply/online/dec_part_1_1.svg'
import part1_2 from '../../../../assets/images/apply/online/dec_part_1_2.svg'
import part1_3 from '../../../../assets/images/apply/online/dec_part_1_3.svg'
import part1_4 from '../../../../assets/images/apply/online/dec_part_1_4.svg'
import part2 from '../../../../assets/images/apply/online/dec_part_2.svg'
import part3_1 from '../../../../assets/images/apply/online/dec_part_3_1.svg'
import part3_2 from '../../../../assets/images/apply/online/dec_part_3_2.svg'
import part4 from '../../../../assets/images/apply/online/dec_part_4.svg'
import part5 from '../../../../assets/images/apply/online/dec_part_5.svg'
import part6_1 from '../../../../assets/images/apply/online/dec_part_6_1.svg'
import part6_2 from '../../../../assets/images/apply/online/dec_part_6_2.svg'
import styles from '../HowToApply.module.scss'

export default function OnlineImage() {
  return (
    <>
      <div className={styles.mainImage}>
        <Image src={main} alt='online education' />
      </div>

      <div className={styles.part1}>
        <ul>
          <li><Image src={part1_1} alt='home' /></li>
          <li><Image src={part1_2} alt='home' /></li>
          <li><Image src={part1_3} alt='home' /></li>
          <li><Image src={part1_4} alt='home' /></li>
        </ul>
        <div>Around The World</div>
      </div>

      <div className={styles.part2}>
        <Image src={part2} alt='world' />
      </div>

      <div className={styles.part3}>
        <Image src={part3_1} alt='laptop' />
        <Image src={part3_2} alt='cursor' />
      </div>

      <div className={styles.part4}>
        <Image src={part4} alt='face' />
      </div>

      <ul className={styles.part5}>
        {Array.from({ length: 4 }, (_, index) => <li key={index}><Image src={part5} alt='question' /></li>)}
      </ul>

      <ul className={styles.part6}>
        {Array.from({ length: 7 }, (_, index) => <li key={index} />)}
      </ul>

      <ul className={styles.part7}>
        {Array.from({ length: 2 }, (_, index) => (<li key={index}><Image src={part6_1} alt='question' /></li>))}
        {Array.from({ length: 2 }, (_, index) => (<li key={index}><Image src={part6_2} alt='question' /></li>))}
      </ul>
    </>
  )
}
