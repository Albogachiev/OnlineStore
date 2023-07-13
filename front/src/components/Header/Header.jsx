import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={'/'}>
          <img className={styles.logotip} src='./images/logoPremium.jpg' alt='логотип'></img>
        </Link>
      </div>
      <div className={styles.info}>
          <div className={styles.user}>
            <div className={styles.avatar} style={{backgroundImage : `url(./images/userIcon.svg)`}}/>
            <div className={styles.username}>Gues</div>
          </div>
          <form className={styles.form}>
            <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
            </div>
            <div className={styles.input}>
              <input 
              type='search' 
              name='search' 
              placeholder='Seqrch for anyting..' 
              autoComplete='off'
              onChange={() => { }} 
              value={''}
              />
            </div>
            { false && <div className={styles.box}></div>}
          </form>
          <div className={styles.account}>
            <Link to={'/'} className={styles.favourites}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
            </Link>

            <Link to={'/cart'} className={styles.cart}>
            <svg className={styles["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            <span className={styles.count}>2</span>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Header
