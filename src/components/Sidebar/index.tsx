import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

import styles from './styles.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="Picture of a hill with trees"
      />

      <div className={styles.profile}>
        <Avatar url="https://github.com/MattZ6.png?size=56" />

        <strong>Matheus Zanin</strong>
        <span>Sofware Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit profile
        </a>
      </footer>
    </aside>
  );
}
