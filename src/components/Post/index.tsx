import { format } from 'date-fns';
import { FormEvent, useCallback, useMemo, useState } from 'react';

import { formateRelativeDime } from '../../utils/dateFormat';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './styles.module.css';

type Post =  {
  id: string;
  author: {
    name: string;
    avatar_url: string;
    role: string;
  },
  content: { type: string; content: string; link?: string; }[];
  published_at: Date;
}

type Comment = {
  id: string;
  mine: boolean;
  author: {
    name: string;
    avatar_url: string;
    role: string;
  };
  content: string;
  created_at: Date;
}

type Props = {
  post: Post;
}

export function Post({ post }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState<string>('');

  const {
    publishedAtFormatted,
    publishedAtRelativeToNow
  } = useMemo(() => {
    return {
      publishedAtFormatted: format(post.published_at, "dd LLLL 'at' HH'h' mm'min"),
      publishedAtRelativeToNow: formateRelativeDime(post.published_at),
    };
  }, [post.published_at])

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const content = String(comment ?? '').trim();

    if (!content.trim().length) {
      return;
    }

    setComments(state => [{
      id: String(comments.length + 1),
      content,
      created_at: new Date(),
      mine: true,
      author: {
        name: 'Matheus Zanin',
        role: 'Software Developer',
        avatar_url: 'https://github.com/MattZ6.png?size=56',
      }
    }, ...state,]);
    setComment('');
  }, [comment, comments]);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar url={post.author.avatar_url} />

          <div>
            <strong>{ post.author.name }</strong>
            <span>{ post.author.role }</span>
          </div>
        </div>

        <time title={publishedAtFormatted} dateTime={post.published_at.toISOString()}>
          { publishedAtRelativeToNow }
        </time>
      </header>

      <div className={styles.content}>
        { post.content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={String(`${line.type}_${index}`)}>{ line.content }</p>
          } else if (line.type === 'link') {
            return <p key={String(`${line.type}_${index}`)}><a href={line.link}>{ line.content }</a></p>
          }
        }) }
      </div>

      <form onSubmit={handleSubmit}>
        <strong>Leave your feedback</strong>

        <textarea
          name="comment"
          placeholder="Type your comment..."
          value={comment}
          onChange={ev => setComment(ev.target.value)}
        />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.comments}>
        { comments.map(comment => <Comment key={comment.id} comment={comment} />) }
      </div>
    </article>
  );
}
