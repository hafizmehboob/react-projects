import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
    <div>
      <h1>My Custom App</h1>
    </div>
  );
}

const reactElement = React.createElement(
  'a',
  {href : 'google.com', target:'_blank'},
  'Click me to visit Google'
);

const reactPara = React.createElement(
  'p',
  'Click me to visit Chohan'
);

ReactDOM.createRoot(document.getElementById('root')).render(
  reactPara
)
