import Hero from './components/Hero/Hero';
import Advantages from './components/Advantages/Advantages';
import Programs from './components/Programs/Programs';
import HowToApply from './components/HowToApply/HowToApply';

export default function Home() {
  return (
    <main>
      <Hero />
      <Advantages />
      <Programs />
      <HowToApply />
    </main>
  );
}
