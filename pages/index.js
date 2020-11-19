import dynamic from 'next/dynamic';
import { useState } from 'react';

const DynamicHello = dynamic(() =>
  import('../components/Hello').then((mod) => mod.Hello),
);

const DynamicGoodbye = dynamic(() =>
  import('../components/Hello').then((mod) => mod.Goodbye),
);

function Home() {
  const [modules, addModule] = useState([]);

  const addHello = () =>
    addModule([
      ...modules,
      { Component: DynamicHello, props: { name: 'World!' } },
    ]);

  const addGoodbye = () =>
    addModule([
      ...modules,
      { Component: DynamicGoodbye, props: { name: 'Cruel World!' } },
    ]);

  return (
    <div>
      {modules.map(({ Component, props }) => (
        <Component {...props} />
      ))}
      <button onClick={addHello}>Add hello!</button>
      <button onClick={addGoodbye}>Add Goodbye!</button>
    </div>
  );
}

export default Home;
