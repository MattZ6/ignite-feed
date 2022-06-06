import { format } from 'date-fns';
import { HandsClapping, Trash } from 'phosphor-react';
import { useMemo } from 'react';
import { formateRelativeDime } from '../../utils/dateFormat';

import { Avatar } from '../Avatar';

import styles from './styles.module.css';

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
  comment: Comment;
  onDelete: () => void;
}

export function Comment({ comment, onDelete }: Props) {
  const {
    publishedAtFormatted,
    publishedAtRelativeToNow
  } = useMemo(() => {
    return {
      publishedAtFormatted: format(comment.created_at, "dd LLLL 'at' HH'h' mm'min"),
      publishedAtRelativeToNow: formateRelativeDime(comment.created_at),
    };
  }, [comment.created_at])

  return (
    <div className={styles.comment}>
      <Avatar url={comment.author.avatar_url} hasBorder={false} />

      <div className={styles.container}>
        <div>
          <header>
            <div>
              <strong className={`${comment.mine ? styles.me : ''}`}>{ comment.mine ? 'You' : comment.author.name }</strong>
              <time title={publishedAtFormatted} dateTime={comment.created_at.toISOString()}>
                { publishedAtRelativeToNow }
              </time>
            </div>

            <button
              type="button"
              title="Delete post"
              onClick={onDelete}
            >
              <Trash size={20} />
            </button>
          </header>

          <p>{ comment.content }</p>
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
