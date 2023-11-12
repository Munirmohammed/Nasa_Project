import React from "react";
import styles from "./Griditem.module.css";
import Explorer from "./Explorer";
import Badge from "./Badge";

const Griditem = (props) => {
  return (
    <div
      className={styles.card}
      onClick={() => props.updateClicked(props.fact.id)}
    >
      {props.fact.clicked ? <Explorer /> : <Badge />}
      <h2 className={styles.title}>{props.fact.title}</h2>
      <article className={styles.fact}>{props.fact.fact}</article>
    </div>
  );
};

export default Griditem;
