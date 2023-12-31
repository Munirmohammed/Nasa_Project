import React from "react";
import Griditem from "./Griditem";
import styles from "./Grid.module.css";
import cx from "classnames";
import mediaStyles from "./Media.module.css";

export default class Grid extends React.Component {
  updateClicked(id) {
    this.props.updateClicked(id);
  }
  renderFacts() {
    return this.props.facts.map((item) => (
      <Griditem
        key={item.id}
        fact={item}
        updateClicked={this.updateClicked.bind(this)}
      />
    ));
  }
  render() {
    return (
      <section className={cx(styles.grid, mediaStyles.grid)}>
        {this.renderFacts()}
      </section>
    );
  }
}
