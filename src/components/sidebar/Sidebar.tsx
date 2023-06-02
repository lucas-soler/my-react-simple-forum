import { PencilSimpleLine } from "phosphor-react";
import Avatar from "../avatar/Avatar";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=270&q=50"
          className={styles.cover}
        />

        <div className={styles.profile}>
          <Avatar src="https://github.com/lucas-soler.png" />
          <strong>Lucas Soler</strong>
          <span>Software Engineer</span>
        </div>

        <footer>
          <a href="#">
            <PencilSimpleLine size="20" />
            My profile
          </a>
        </footer>
      </aside>
    </>
  );
}
