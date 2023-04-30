import * as React from 'react';
import styles from './taglist.module.css';

const TagList = ({ items, keyName }) => {
    return (
        <ul className={styles.tagsContainer}>
        {items.map((item, i) => {
          return (
            <li key={`${keyName}-${i}`} className={styles.tagContainer}>
              {item}
            </li>
          );
        })}
      </ul>
    )
}

export default TagList;