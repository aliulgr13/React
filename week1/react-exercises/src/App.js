import React from 'react';
import HobbyList from './HobbyList';
import freeShipping from './f-delivery.png';
import coin from './coin.png';
import chat from './chat.png';
import Guarantee from './Guarantee';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <HobbyList />
      <Guarantee img={freeShipping} title={'Free Shipping'} description={'It is free shipping over 30 euros'} />
      <Guarantee img={coin} title={'100% money back'} description={'if you want the money back, we refund within 30 days.'} />
      <Guarantee img={chat} title={'Online Support'} description={'We sleep at night, call during the day'} />
      <Counter />
    </div>
  );
}

export default App;
