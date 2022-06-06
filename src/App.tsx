import { Header, Post, Sidebar } from "./components";

import './styles/global.css';

import styles from './styles/App.module.css';

const posts = [
  {
    id: '1',
    author: {
      name: 'Matheus Zanin',
      avatar_url: 'https://github.com/MattZ6.png?size=56',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare', link: '#' },
    ],
    published_at: new Date('2022-06-02T20:00:00'),
  },
  {
    id: '2',
    author: {
      name: 'Mayk Brito',
      avatar_url: 'https://github.com/maykbrito.png?size=56',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare', link: '#' },
    ],
    published_at: new Date('2022-05-31T12:00:00'),
  },
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          { posts.map(post => <Post key={post.id} post={post} />) }
        </main>
      </div>
    </>
  );
}

export default App
