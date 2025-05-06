import React from 'react';
import Navbar from './components/Navbar.jsx';
import Matrix from './components/Matrix.jsx';

const App = () => {
    return (
      <div className='bg-gradient-to-b from-teal-400 via-zinc-400 to-white'>
        <Navbar />
        <Matrix />
      </div>
    );
  };

export default App;
