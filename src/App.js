import React from 'react';

const App = () => {
  return (
    <div>
      <h1>React Accessible Accordion Example</h1>
        {DocumentItems.map((item) => (
          <Document key={item.title} title={item.title}>
            {item.content}
          </Document>
        ))}
    </div>
  );
};

export default App;
