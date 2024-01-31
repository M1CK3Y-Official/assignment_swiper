import BoilerBox from '@/components/boilerplate/boilerbox'
import styles from './page.module.css'
import OurSwiper from '@/components/ourSwiper/ourSwiper'
import { fetchImagesForGallery } from '@/lib/data.service'

export default async function Page() {

  const images = await fetchImagesForGallery('obscura')


  return (
    <main className={styles.page}>

      <OurSwiper images={images} />

    </main>
  )
}

