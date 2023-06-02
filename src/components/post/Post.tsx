import { format, formatDistanceToNow } from "date-fns";

import { ptBR } from "date-fns/locale";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import Avatar from "../avatar/Avatar";
import Comment from "../comment/Comment";
import styles from "./Post.module.css";

// author: { avatarUrl: string, name: string, role: string}
// publishedAt: Date
// content: string

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

export interface Content {
  id: number;
  type: "paragraph" | "link";
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export interface PostProps {
  post: PostType;
}

export default function Post({ post }: PostProps) {
  const [comments, setComments] = useState(["Post muito bacana hein??"]);

  const [newCommentText, setNewCommentText] = useState("");

  const isNewCommentEmpty = newCommentText.length === 0;

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelatedToNow = formatDistanceToNow(
    post.publishedAt,

    {
      locale: ptBR,
      addSuffix: true,
    }
  );

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  };

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("");

    setNewCommentText(event.target.value);
  };

  const handleDeleteComment = (commentIndex: number) => {
    comments.splice(commentIndex, 1);

    const newComments = [...comments];

    setComments(newComments);
  };

  const handleNewCommentInvalid = (
    event: InvalidEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity(
      "You have to fill in this comment before send it"
    );
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelatedToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.id}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.id}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Leave a comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        ></textarea>
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              content={comment}
              id={index}
              onDeleteComment={handleDeleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
