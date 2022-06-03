import styles from './styles.module.css';

type Props = {
  url: string;
  hasBorder?: boolean;
}

export function Avatar({ url, hasBorder = true }: Props) {
  return (
    <img
      className={`${styles.avatar} ${hasBorder ? styles.withBorder : ''}`}
      src={url}
      alt=""
    />
  );
}
