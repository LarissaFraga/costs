import styles from "./Home.module.css";
import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Welcome to <span>Costs</span>
      </h1>
      <p>Start to manage your projects right now!</p>
      <LinkButton to="/newproject" text="Create Project" />
      <img
        src={savings}
        alt="a guy saving his money in his piggy bank"
        className={styles.home}
      />
    </section>
  );
}

export default Home;
