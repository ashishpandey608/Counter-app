import {useState, useEffect} from 'react';
const Counter=()=>{

const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) || 0;
  });

  // Save count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);


return (
     <div style={styles.container}>
        <h1>Counter APP</h1>
        <p style={{ ...styles.count, color: count > 0 ? "green" : "black" }}>Count : { count }</p>
        <button style={styles.button} onClick={() => setCount(count + 1) } disabled={count >= 10}> Increment </button>
        <button style={styles.button} onClick={() => setCount(count - 1)} disabled={count === 0}> Decrement </button>
        <button style={styles.button} onClick={() => setCount(0)}> Reset </button>
     </div>

);
};

//  Add the missing styles object
const styles = {
    container: {
      border: "1px black ",
      textAlign: "center",
      padding: "20px",
      fontFamily: "Arial",
    },
    count: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    button: {
      margin: "5px",
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
    },
    resetButton: {
      marginTop: "10px",
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "red",
      color: "white",
      cursor: "pointer",
    }
  };
export default Counter;
