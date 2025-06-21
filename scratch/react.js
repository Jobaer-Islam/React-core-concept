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

ReactDOM.createRoot(document.getElementById
    ("myDivRoot")).render(
        <>
            <MyFirstFN name={"Hasu Apa"}></MyFirstFN>
            <Age age={"25"}></Age>
        </>
    );