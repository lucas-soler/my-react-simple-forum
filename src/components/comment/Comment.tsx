import { ThumbsUp, Trash } from "phosphor-react";

import { useState } from "react";

import Avatar from "../avatar/Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  id: number;
  content: string;
  onDeleteComment: (id: number) => void;
}

export default function Comment({
  id,
  content,
  onDeleteComment,
}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const handleDelete = () => {
    onDeleteComment(id);
  };

  const handleLikeComment = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lucas-soler.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Soler</strong>
              <time title="May 11th at 8:13" dateTime="2022-05-11 08:13:30">
                Cerca de 1 hora atrás
              </time>
            </div>
            <button title="Delete comment" onClick={handleDelete}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button title="Like" onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
