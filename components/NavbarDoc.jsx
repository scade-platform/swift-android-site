import Link from 'next/link';
import styles from './Layout.module.css';
import getDynamicNavbarDocMetadata from '../utils/getDynamicNavbarDocMetadata';
import DynamicNavbar from './DynamicNavbar';


export default function NavbarDoc  ({ children }){
  const postMatadata = getDynamicNavbarDocMetadata ("content/docs")
  return (
    <div as="nav" className="fixed">
      <nav className={styles.sidebar}>
        <h2>Navigation</h2>
        {<div className="container">
                  {postMatadata.map((post, postIndex) => {
                    return (
                      <DynamicNavbar key={postIndex} post={post} />
                    )
                  })}
            </div>}
      </nav>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};
