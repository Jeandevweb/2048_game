import styles from "@/styles/board.module.css";
import Tile from "./Tile";

export default function Board() {
  const renderGrid = () => {
    const cells: JSX.Element[] = [];
    const totalCellCount = 16;

    for (let i = 0; i < totalCellCount; i++) {
      cells.push(<div className={styles.cell} key={i} />);
    }
    return cells;
  };

  return (
    <div className={styles.board}>
      <div className={styles.tiles}>
        <Tile />
      </div>
      <div className={styles.grid}>{renderGrid()}</div>
    </div>
  );
}
