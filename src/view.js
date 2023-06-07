import domReady from '@wordpress/dom-ready';
import {render, useState} from '@wordpress/element';

const App = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setName( event.target.value);
  }

  return (
    <div className="wp-block-create-block-react-on-frontend-block">
      <h2>Hello <span className="mark-text">{name}</span> in React app</h2>
      <input type="text" onChange={handleChange} placeholder="name" />
    </div>
  
  )
}

domReady(function () {
  const container = document.getElementById('app');
  ReactDOM.render(<App />, container);
})