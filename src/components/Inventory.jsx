import React from 'react';
import PropTypes from 'prop-types';

import base from '../setup/base';
import firebase from 'firebase';

import AddFishForm from './AddFishForm';

class Inventory extends React.Component {

  constructor () {
    super(...arguments);

    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);

    this.state = {
      uid: null,
      owner: null
    }
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user)
        this.authHandler(null, { user });
    });
  }

  handleChange (e, key) {
    const fish = this.props.fishes[key];
    const updatedFish = { ...fish, [e.target.name]: e.target.value };

    this.props.updateFish(key, updatedFish);
  }

  authenticate () {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(this.authHandler).catch(error => {
    	console.log(error);
    });
  }

  authHandler (err, authData) {
    if (err)
      return;

    const storeRef = firebase.database().ref(this.props.storeId);
    storeRef.once('value', (snapshot) => {
      const data = snapshot.val() || {};

      if (!data.owner)
        storeRef.set({ owner: authData.user.uid });

      this.setState({
        uid: authData.user.uid,
        owner: data.owner || authData.user.uid
      });
    })
  }

  logout () {
    firebase.auth().signOut();
    this.setState({ uid: null });
  }

  renderLogin () {
    return (
      <nav className="login">
        <h2>Inventory</h2>
        <button className="facebook" onClick={ () => this.authenticate() }>Log In with Facebook</button>
      </nav>
    );
  }

  renderInventory (key) {
    const fish = this.props.fishes[key];

    return (
      <div className="fish-edit" key={key}>
        <input type="text" name="name" placeholder="Fish Name" value={fish.name} onChange={(e) => this.handleChange(e, key)}/>
        <input type="text" name="price" placeholder="Fish Price" value={fish.price} onChange={(e) => this.handleChange(e, key)}/>

        <select type="text" name="status" placeholder="Fish Status" value={fish.status} onChange={(e) => this.handleChange(e, key)}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea type="text" name="desc" placeholder="Fish Desc" value={fish.desc} onChange={(e) => this.handleChange(e, key)}/>
        <input type="text" name="image" placeholder="Fish Image" value={fish.image} onChange={(e) => this.handleChange(e, key)}/>
        <button onClick={ () => this.props.removeFish(key) }>Remove Fish</button>
      </div>
    );
  }

  render () {
    const logout = <button onClick={ this.logout }>Log Out!</button>

    if (!this.state.uid)
      return <div>{ this.renderLogin() }</div>

    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry, you're not the owner of the store!</p>
          { logout }
        </div>
      );
    }

    return (
      <div>
        <h3>Inventory</h3>
        { logout }
        { Object.keys(this.props.fishes).map(this.renderInventory) }

        <AddFishForm addFish={ this.props.addFish }/>
        <button onClick={ this.props.loadSamples }>Load Sample Fishes</button>
      </div>
    );
  }
}

Inventory.propTypes = {
  fishes: PropTypes.object.isRequired,
  updateFish: PropTypes.func.isRequired,
  removeFish: PropTypes.func.isRequired,
  addFish: PropTypes.func.isRequired,
  loadSamples: PropTypes.func.isRequired,
  storeId: PropTypes.string.isRequired
};

export default Inventory;
