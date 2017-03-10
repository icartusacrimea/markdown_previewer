var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');

var Previewer = React.createClass({
  getInitialState : function() {
    return {
      markdown: "Heading\n=======\n\nSub-heading\n-----------\n \n### Sub-sub-heading\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * ducks\n  * weasels\n  * penguins\n\nNumbered list:\n\n  1. Jupiter\n  2. Uranus\n  3. Neptune\n"
    }
  },
  
  createChange : function(event) {
    this.setState({ markdown: event.target.value });
  },
  
  render : function() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h2>Markdown</h2>
          {/*onChange={this.createChange.bind(this)}*/}
          <textarea onChange={() => this.createChange(event)} value={this.state.markdown} />
        </div>
        <div className="col-md-6">
          <h2>Preview</h2>
          <div id="danger" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<Previewer />, document.getElementById("container"));