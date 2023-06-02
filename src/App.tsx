import "./global.css";

import styles from "./App.module.css";
import Header from "./components/header/Header";
import Post, { PostType } from "./components/post/Post";
import Sidebar from "./components/sidebar/Sidebar";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lucas-soler.png",
      name: "Lucas Soler",
      role: "Software Engineer",
    },
    content: [
      { id: 1, type: "paragraph", content: "Hey guys!" },
      {
        id: 2,
        type: "paragraph",
        content: "I've just uploaded my new project on GitHub! Check it out!",
      },
      { id: 3, type: "link", content: "syob.com.au" },
    ],
    publishedAt: new Date("2023-06-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/lucas-soler.png",
      name: "Lucas Soler",
      role: "Software Engineer",
    },
    content: [
      { id: 1, type: "paragraph", content: "Hi devs!!" },
      {
        id: 2,
        type: "paragraph",
        content:
          "This is a simple content test. What did you think about this test?",
      },
      { id: 3, type: "link", content: "https://github.com/lucas-soler" },
    ],
    publishedAt: new Date("2023-06-02 08:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}
export default App;
