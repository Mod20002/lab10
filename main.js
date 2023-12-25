



function CounterApp() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
  
    return (
        <div className="counter">
            
            <button onClick={increment}>+</button>
            <h2>{count}</h2>
            
            <button onClick={decrement}>-</button>
            <button  >C</button>
        </div>
    );
}

const root = document.getElementById('root');
ReactDOM.render(<CounterApp />, root);