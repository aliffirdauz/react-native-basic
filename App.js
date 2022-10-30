import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Stackk from './routes/Stackk';

function App() {
  return (
    <>
      <NavigationContainer independent={true}>
        <Stackk />
      </NavigationContainer>
    </>
  );
}

export default App;