import styles from './Banner.module.css'

export const Banner = () => (
  <section className={styles.banner}>
    <div className={styles.left}>
      <p className={styles.content}>
        NEW YEAR
        <span>SALE</span>
      </p>
      <button className={styles.more}>See more</button>
    </div>

    <div
      className={styles.right}
      style={{ backgroundImage: 'url(./images/banner.png)' }}
    >
      <p className={styles.discount}>
        save up to <span>50%</span> off
      </p>
    </div>
  </section>
  
);