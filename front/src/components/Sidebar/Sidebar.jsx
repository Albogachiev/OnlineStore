import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import styles from "./Sidebar.module.css";
import {categories, products} from '../../store/actions';

const Sidebar = () => {
const dispatch = useDispatch();

React.useEffect(() =>{
  dispatch(categories())
  dispatch(products())
},[])

const state = useSelector(state => state.cat.categories)
const data = state.filter((_, i) => i < 9)

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {data?.map(({id, name}) => 
            <li key={id}>
              <NavLink
              className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}
               to={`/categories/${id}`}>
                {name}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>

      <div className={styles.footer}>
        <a href="/help" target="_blank" className={styles.link}>
          Help
        </a>
        <a
          href="/terms"
          target="_blank"
          className={styles.link}
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;