console.log(React);
console.log(ReactDOM);

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

console.log(myReactElement);
console.log(myReactElement.props.name);

ReactDOM.createRoot(document.getElementById
    ("myDivRoot")).render(
        myJsxElement
    );