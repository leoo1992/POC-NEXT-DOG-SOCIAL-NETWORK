import styles from './login.module.css';

export default async function LoginLayout({ children }: { children: React.ReactNode })
{
    <div className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </div>
}