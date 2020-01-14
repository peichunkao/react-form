import React from 'react';
import Form from './form';
import MultipleForm from './multiInputform';
import ShoppingList from './ShoppingList'
import BoxList from './BoxList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Form />
      <MultipleForm />
      <ShoppingList />
      <BoxList />
    </div>
  );
}

export default App;
