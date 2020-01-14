import React from 'react';
import Form from './form';
import MultipleForm from './multiInputform';
import ShoppingList from './ShoppingList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Form />
      <MultipleForm />
      <ShoppingList />
    </div>
  );
}

export default App;
