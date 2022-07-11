import React from 'react';
import Dashboard from './components/Dashboard';

export default function App() {
  var price1 = 5738.00;
  var price2 = 1831.57;
  var price3 = 1700;
  var price4 = 1700;
  var price5 = 682.80;
  return (
    <div>
      <Dashboard price1 = {price1} price2 = {price2} price3 = {price3} price4 = {price4} price5 = {price5} />
    </div>
  )
}
