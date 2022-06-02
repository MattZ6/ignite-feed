import { HandsClapping, Trash } from 'phosphor-react';

import styles from './styles.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/MattZ6.png?size=56" />

      <div className={styles.container}>
        <div>
          <header>
            <div>
              <strong>You</strong>
              <time title="june 2 16pm" dateTime="2022-06-02 16:00:00">1hr ago</time>
            </div>

            <button type="button" title="Delete post">
              <Trash size={20} />
            </button>
          </header>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eligendi fugiat aut?</p>
        </div>

        <footer>
          <button>
            <HandsClapping size={20} />
            Applause <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
