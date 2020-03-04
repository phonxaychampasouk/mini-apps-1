class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                text : "Checkout"
        }
        this.receiveForms = this.receiveForms.bind(this);
    }


receiveForms(){
    alert('Test worked')

}
    render() {
    return (<button id="checkout" onClick={this.receiveForms}>{this.state.text}</button>
         
        // <form id="formData" method="POST" action="/uploadjson">
        //             <input type="text" name="jsonText">
        //             <button>Submit</button>
        //         </form>;
         )}
}

ReactDOM.render(<App />, document.getElementById('app'));
