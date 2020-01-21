const Pet = ({name, animal, breed}) => {
	return React.createElement("div", {}, 
		[
		React.createElement("h3", {}, name),
		React.createElement("p", {}, animal),
		React.createElement("p", {}, breed)
		]);
};

const App = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Adopt Me!"),
		React.createElement(Pet, {name: "Calu", animal: "Dog", breed: "Golden Retriever"}),
		React.createElement(Pet, {name: "Birdie", animal: "Bird", breed: "Humming Bird"}),
		React.createElement(Pet, {name: "Kitty", animal: "Cat", breed: "Mixed"})
		]); };  
		

ReactDOM.render(React.createElement(App), document.getElementById("root"));