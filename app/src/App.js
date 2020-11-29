import React from 'react'

import Delaware from './state-components/Delaware'
import Maryland from './state-components/Maryland'
import ProtoState from './state-components/ProtoState';
import Virginia from './state-components/Virginia'

const App = () => {
  return (
    <div className="App">
      <h1>Delmarva News Map roundup</h1>
      {/* <ProtoState /> */}
      <Delaware />
      <Maryland />
      <Virginia />
    </div>
  );
};

export default App;