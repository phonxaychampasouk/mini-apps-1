class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                text : "Checkout",
                value : "Account info",
                page: "Checkout"
        }
        this.receiveForms = this.receiveForms.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.distributeForm = this.distributeForm.bind(this);
    }


receiveForms() {
    this.setState({
      page: 'Payment Processing --->'
    })
}
handleChange(event) {
        console.log('value: ',event.target.value)
        console.log(event.target.value)
        this.setState({value: event.target.value});
      }
distributeForm() {
    event.preventDefault()
    FormAccountInfo();
    console.log(event.target)
   
    alert('this test works')
}

FormAccountInfo = () => {
return (<form>
<input type="submit"></input>
</form>)
}
FormProcessPayment = () => {
<form>
<input type="submit"></input>
</form>
}
FormShippingInfo = () => {
<form>
<input type="submit"></input>
</form>
}

    render() {
    return (
    <div> <form onSubmit={this.receiveForms}>
            <label> {this.state.text}:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Process Payment">Process Payment</option>
                    <option value="Account Info">Account Info</option>
                    <option value="Shipping Info">Shipping Info</option>
                </select>
                <input type="submit" value="Submit" onClick={this.distributeForm}  />
            </label>
            
            </form>
            
    </div>
            
         )}
}
//<button id="checkout" onClick={this.receiveForms}>{this.state.text}</button>
ReactDOM.render(<App />, document.getElementById('app'));
