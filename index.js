const root = document.querySelector("#root");

const br = React.createElement("br", {} , "");

const h1 = React.createElement("h1" , {} , "Topics Covered");

const h31 = React.createElement("h3" , {} , 'List of the covered Topics shown in GeeksterPortal');

const a1 = React.createElement("a" , {href : "#Dsa"} , "DSA Topics");

const p1 = React.createElement("p" , {} , 'Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that teaches you how to think and solve complex problems systematically. Using the right data structure and algorithm makes your program run faster, especially when working with lots of data.'," ", a1);

const h32 = React.createElement("h3" , {} , 'List of the covered Topics Frontend');


const subhead1 = React.createElement("h2",  {} , 'Figma');
const a2 = React.createElement("a" , {href : "#Dsa"} , "Figma");
const p2 = React.createElement("p" , {} ,subhead1, 'Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that teaches you how to think and solve complex problems systematically. Using the right data structure and algorithm makes your program run faster, especially when working with lots of data.', " " , a2);


const subhead2 = React.createElement("h2",  {} , 'Html');
const a3 = React.createElement("a" , {href : "#html"} , "Html");
const p3 = React.createElement("p" , {} ,subhead2, 'Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that teaches you how to think and solve complex problems systematically. Using the right data structure and algorithm makes your program run faster, especially when working with lots of data.', " " , a3);


const subhead3 = React.createElement("h2",  {} , 'CSS');
const a4 = React.createElement("a" , {href : "#css"} , "CSS");
const p4 = React.createElement("p" , {} ,subhead3, 'Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that teaches you how to think and solve complex problems systematically. Using the right data structure and algorithm makes your program run faster, especially when working with lots of data.', " " , a4);

const subhead4 = React.createElement("h2",  {} , 'JavaScript');
const a5 = React.createElement("a" , {href : "#JavaScript"} , "JavaScript");
const p5 = React.createElement("p" , {} ,subhead4, 'Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that teaches you how to think and solve complex problems systematically. Using the right data structure and algorithm makes your program run faster, especially when working with lots of data.', " " , a5);

const subhead5 = React.createElement("h2",  {} , 'React');
const a6 = React.createElement("a" , {href : "#react"} , "REACT");
const p6 = React.createElement("p" , {} ,subhead5, 'Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that teaches you how to think and solve complex problems systematically. Using the right data structure and algorithm makes your program run faster, especially when working with lots of data.', " " , a6);

const divContainer = React.createElement("div" , {}, [h1, h31, p1, h32, p2, p3 , p4 , p5, p6])

ReactDOM.render(divContainer , root);
