// import from ReactDOM 
import ReactDOM  from "react-dom/client";

// main component (not a function!!!)
function App() {
    return <h1> Hi React Gangs </h1>
}

// concecting virtual-dom with real dom with ReactDOM library
const root = document.getElementById("root")

ReactDOM.createRoot(root).render(<App />)


