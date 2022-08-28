var Dispatcher = new Flux.Dispatcher();
var CHANGE_EVENT = 'change';
var BaseStore = Object.assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
})

var ActionTypes = {
  ADD_ONE: 'ADD_ONE',
  MINUS_ONE: 'MINUS_ONE'
}
var ActionCreators = {
  createAddOne: function () {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_ONE
    });
  },
  createMinusOne: function () {
    Dispatcher.dispatch({
      type: ActionTypes.MINUS_ONE
    });
  }
}

var _ticker = 0;
var TickerStore = Object.assign({}, BaseStore, {
  getTicker: function () {
    return _ticker;
  },
  dispatchToken: Dispatcher.register(function(action){
    switch(action.type){
      case ActionTypes.ADD_ONE:
        _ticker = _ticker + 1;
        TickerStore.emitChange();
        break;
      case ActionTypes.MINUS_ONE:
        if (_ticker > 0) {
          _ticker = _ticker - 1;
          TickerStore.emitChange();
        }
        break;
    }
  })
})


var Ticker = React.createClass({
  _getStateFromStores: function(){
    return {ticker: TickerStore.getTicker()};
  },
  _onChange: function(){
    this.setState(this._getStateFromStores());
  },
  getInitialState: function() {
    return this._getStateFromStores();
  },
  componentDidMount: function(){
    TickerStore.addChangeListener(this._onChange)
  },
  componentWillUnmount: function(){
    TickerStore.removeChangeListener(this._onChange)
  },
  render: function() {
    var plus = <Button>+</Button>
    var minus = <Button>-</Button>
    return (
      <div>
        <h3>{this.state.ticker}</h3>
        {plus}
        
        <br/>
        {minus}
       
      </div>
    );
  }
})

var Button = React.createClass({
  _onPlus: function(){
    ActionCreators.createAddOne();
  },
  _onMinus: function(){
    ActionCreators.createMinusOne();
  },
  _onChange: function(e){
    var newVal = e.target.value;
    this.setState({val: newVal});
  },
  getInitialState: function(){
    return {val: 1};
  },
  render: function() {
    var operator = this.props.children.toString();
    if (operator == "+") {
      var onClick = this._onPlus;
    }
    else if (operator == "-") {
      var onClick = this._onMinus;
    }
    return (
      <span>
        <input type="text" onChange={this._onChange} value={this.state.val}></input>
        <button onClick={onClick}>
          {operator}
        </button>
      </span>
    );
  }
})


window.addEventListener('DOMContentLoaded', function() {
    React.render(
      <Ticker/>,
      document.body
    );
});


