class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Checkout",
            value: "",
            page: "Checkout"
        }
        this.receiveForms = this.receiveForms.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.distributeForm = this.distributeForm.bind(this);
    }


    receiveForms() {
        event.preventDefault()
    }


    handleChange(event) {
        event.preventDefault()
        console.log('value: ', event.target.value)
        console.log(event.target.value)
        this.setState({ value: event.target.value });
    }


    distributeForm() {
        event.preventDefault()
        console.log(event.target)

        alert('this test works')
    }


    render() {

        if (this.state.value === "Account Info") {
            return <form id="accountForm" action="api/client" method="POST">
                        <h1>Please enter your {this.state.value}</h1>
                        <p>Name:</p>
                <input
                    type='text'
                    name='name'
                />
                <p>Email</p>
                <input
                    type='text'
                    name="email"
                />
                <p>Password</p>
                <input
                    type='text'
                    name="password"
                />
                <button>onSubmit</button>
            </form>
        }else if (this.state.value === "Shipping Info") {
    return <form id="shippingForm">
                <h1>Please enter your {this.state.value}</h1>
                <p>Address:</p>
        <input
            type='text'
            onChange={this.handleChange}
        />
        <p>City:</p>
        <input
            type='text'
            onChange={this.handleChange}
        />
        <p>State</p>
        <input
            type='text'
            onChange={this.handleChange}
        />
        <p>Zipcode:</p>
        <input
            type='text'
            onChange={this.handleChange}
        />
        <button>onSubmit</button>
    </form>
        }else if (this.state.value === "Process Payment") {
    return <form id="processForm">
                <h1>Please enter your {this.state.value}</h1>
                <p>Name:</p>
        <input
            type='text'
            onChange={this.handleChange}
        />
        <p>Email</p>
        <input
            type='text'
            onChange={this.handleChange}
        />
        <p>Password</p>
        <input
            type='text'
            onChange={this.handleChange}
        />
        <button>onSubmit</button>
    </form>
        }
        else{
        return (
            <div> <form onSubmit={this.receiveForms}>
                <label> {this.state.text}:
                <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Process Payment">Process Payment</option>
                        <option value="Account Info">Account Info</option>
                        <option value="Shipping Info">Shipping Info</option>
                    </select>
                    <input type="submit" value="Submit" />
                </label>
            </form>

            </div>

        )
    }
}
}
//<button id="checkout" onClick={this.receiveForms}>{this.state.text}</button>
ReactDOM.render(<App />, document.getElementById('app'));
