import React from 'react';
import Navbar from './components/Navbar';
import BlogPost from './components/BlogPost';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <BlogPost />
    </div>
  );
}

export default App;
