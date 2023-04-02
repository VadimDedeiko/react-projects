import './Info.css'
import styles from './Info.module.css'

console.log(styles);
function Info() {
  return (
    <>
      <h1 className={styles.myOtherButton}>Hello from the Info component</h1>
      <button className="my-button">Click me</button>
    </>
  );
}

export default Info
