// console.log(React);
// console.log(ReactDOM);

const myReactElement = React.createElement(
    "div",
    { name: "Zim" },
    React.createElement(
        "p",
        { nestedName: "Sahel job" },
        "Hello React Create Element"
    )
);

const myJsxElement = (
    <div>
        <p>Hello React Creat Element-2</p>
    </div>
)

const Age = (props) => {
    return (
        <p>I am {props.age} years old</p>
    );
}

const MyFirstFN = (props) => {
    console.log("my props", props.children);
    return (
        <div>
            <p>Hello React Creat Element from Name: {props.name}</p>
            {props.children}
        </div>
    );
};

// console.log(myJsxElement);
// console.log(MyFirstFN());


const Counter = () => {

    const [myCounter, setMyCounter] = React.useState(0);

    function handleAdd(){

        setMyCounter(myCounter + 1);
        // const prevCount = document.getElementById("counter").innerText;

        // const parseNumber = parseInt(prevCount);
        // document.getElementById("counter").innerText = parseNumber + 1;

    }

    return(
        <div>
            <button onClick={handleAdd}>Counter Clicked</button>
            <p>Counter: <span id="counter">{myCounter}</span></p>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById
    ("myDivRoot")).render(
        <>
            {/* <MyFirstFN name={"Hasu Apa"}></MyFirstFN>
            <Age age={"25"}></Age> */}
            <Counter></Counter>
        </>
    );