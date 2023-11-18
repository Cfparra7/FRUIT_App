import Image from 'next/image'
import styles from './page.module.css'
import ProductCard from "@/components/ProductCard";
import NewsletterCard from "@/components/NewsletterCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductCard></ProductCard>

        <footer>
            <NewsletterCard></NewsletterCard>
        </footer>
    </main>
  )
}
