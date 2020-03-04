class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
         return <button id="checkout">Checkout</button>
        // <form id="formData" method="POST" action="/uploadjson">
        //             <input type="text" name="jsonText">
        //             <button>Submit</button>
        //         </form>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
