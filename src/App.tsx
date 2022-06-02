import { Header, Post, Sidebar } from "./components";

import './styles/global.css';

import styles from './styles/App.module.css';

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
        </main>
      </div>
    </>
  );
}

export default App
