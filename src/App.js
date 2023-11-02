import React from 'react';
import Document from './components/Document.js'
import './App.css'

const DocumentItems = [
  {
    color: "#FFFFF0",
    icon: "H",
    title: "Hydrogen",
    content: "Hydrogen is the lightest element in the universe and is essential for life. It is found in water, methane, and other organic compounds."
  },
  {
    color: "#F0FFFF",
    icon: "He",
    title: "Helium",
    content: "Helium is a noble gas that is inert and non-toxic. It is used in balloons, airships, and other applications where a lightweight gas is needed."
  },
  {
    color: "#F0F8FF",
    icon: "Li",
    title: "Lithium",
    content: "Lithium is a soft, silvery-white metal that is used in batteries, alloys, and other applications. It is also a mood stabilizer and is used to treat bipolar disorder."
  }
];

const App = () => {
  return (
    <div>
      <h1>React Accessible Accordion Example</h1>
        {DocumentItems.map((item) => (
          <Document key={item.title} {...item}>
            {item.content}
          </Document>
        ))}
    </div>
  );
};

export default App;
