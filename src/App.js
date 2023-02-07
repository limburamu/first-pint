import React from 'react';
import './style.css';
import Header from './components/Header';
import MainRoute from './routes/MainRoute';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainRoute />
    </BrowserRouter>
  );
}
