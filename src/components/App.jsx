import React from 'react';
import { Header, Sidebar, DisplaySection } from './';

const App = () => (
  <div>
    <Header />
    <Sidebar />
    <DisplaySection />
  </div>
);

export default App;

// If you have a Login component, you're going to have to conditionally render <Sidebar /> + <DisplaySection />
