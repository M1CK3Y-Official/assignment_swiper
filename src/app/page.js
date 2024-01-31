import BoilerBox from '@/components/boilerplate/boilerbox'
import styles from './page.module.css'
import OurSwiper from '@/components/ourSwiper/ourSwiper'
import { fetchImagesForGallery } from '@/lib/data.service'
import OurAuthorSection from '@/components/ourAuthorSection/ourAuthorSection'

export default async function Page() {

  const images = await fetchImagesForGallery('obscura')


  return (
    <main className={styles.page}>

      <OurAuthorSection author="Lena Riis">Klik her for Lena Rizzgod</OurAuthorSection>
      <OurAuthorSection author="Mikkel Schwitzer">Klik her for Mikkel Schwitzer</OurAuthorSection>

    </main>
  )
}

