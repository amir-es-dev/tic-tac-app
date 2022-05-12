import { useState } from "react";
import Block from "../Block/Block";
import styles from "./Main.module.css";

const Main = () => {
  const [data, setData] = useState(Array(9).fill({ value: null }));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState({ status: false, X: 0, O: 0 });

  const handleReset = () => {
    setData(Array(9).fill({ value: null }));
    setPlayer("X");
    winner.status = false;
  };

  return (
    <div className={styles.main}>
      <div className={styles.playerColor}>
        <span>{`X ${winner.X}`}</span>
        <span>{`O ${winner.O}`}</span>
      </div>
      <p className={styles.turnColor}>
        {winner.status ? `Game is over` : `${player} Turn`}
      </p>
      <div className={styles.container}>
        <div className={`${styles.grid} ${winner.status && styles.hideBox}`}>
          {data.map((a, index) => {
            return (
              <Block
                key={index}
                data={data}
                setData={setData}
                player={player}
                setPlayer={setPlayer}
                itemNum={index}
                setWinner={setWinner}
              />
            );
          })}
        </div>
        <div
          className={`${styles.winnerBox} ${winner.status && styles.showBox}`}
        >
          {winner.status === "X" && <p>{`${winner.status} Win!`}</p>}
          {winner.status === "O" && <p>{`${winner.status} Win!`}</p>}
          {winner.status === "draw" && <p>Draw!!!</p>}
        </div>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Main;
