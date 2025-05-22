import styles from './styles.module.css'

type ContainerProps = {
  children: React.ReactNode;
    className?: string;
};

export default function Container(children: ContainerProps) {
  return (
    <div className={styles.App}>
      {children.children}
    </div>
  );

}