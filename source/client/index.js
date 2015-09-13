import Hello from './hello-world.js'

const word = 'puppy';

React.render (
    <Hello word={ word } />,
    document.getElementById('content')
);