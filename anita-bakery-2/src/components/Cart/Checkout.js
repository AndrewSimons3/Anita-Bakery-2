

const Checkout = props => {

	return (
		<form>
			<div>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name"></input>
			</div>
			<div>
				<label htmlFor="address">Address</label>
				<input type="text" id="address"></input>
			</div>
			<div>
				<label htmlFor="city">City</label>
				<input type="text" id="city"></input>
			</div>
			<div>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" id="postal"></input>
      </div>
      <div><button onClose={props.onClose}>Cancel</button></div>
			
			<button onClick={props.onSubmit}>Order</button>
		</form>
	);
};

export default Checkout;
