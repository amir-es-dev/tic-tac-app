import styles from "./Block.module.css";

const Block = ({ data, setData, player, setPlayer, setWinner, itemNum }) => {
  const winnerArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (itemNum) => {
    // let newVal = { ...data[itemNum] };
    // if (newVal.clicked === true) return;
    // newVal = { value: player, clicked: true };
    // data.splice(itemNum, 1, newVal);

    let newData = [...data];
    if (newData[itemNum].clicked === true) return;
    newData[itemNum] = { value: player, clicked: true };
    setData(newData);
    checkWinner(newData);
    setPlayer((p) => (p === "X" ? "O" : "X"));
  };

  const checkWinner = (newData) => {
    let result;
    winnerArr.forEach((arr) => {
      const values = arr.map((item) => newData[item].value);

      if (
        values[0] === values[1] &&
        values[1] === values[2] &&
        values[0] === player
      ) {
        result = player;
      }

      if (result) {
        newData.map((item) => {
          item.clicked = true;
          return item;
        });

        result === "X"
          ? setWinner((p) => ({ ...p, status: result, X: p.X++ }))
          : setWinner((p) => ({ ...p, status: result, O: p.O++ }));
      }
    });
    if (!result && newData.every((item) => item.value)) {
      setWinner((p) => ({ ...p, status: "draw" }));
    }
    console.log(newData);
  };

  return (
    <>
      <button
        className={styles.btn}
        style={{ color: data[itemNum].value === "X" ? "red" : "green" }}
        onClick={() => handleClick(itemNum)}
      >
        {data[itemNum].value}
      </button>
    </>
  );
};

export default Block;
