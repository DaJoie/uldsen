import React from 'react';
import Accordion from './acordion';
const items = [
   {
      title: "Section 1",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
   },
   {
      title: "Section 2",
      content: "Ipsum is simply dummy text of the printing and typesetting industry"
   },
   {
      title: "Section 3",
      content: "Ipsum is simply dummy text of the printing and typesetting"
   }
]
function App() {
   return (
      <div>
         <Accordion items={items} />
      </div>
   );
}
export default App;