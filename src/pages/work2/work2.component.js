import React from 'react';

import NumberProvider from '../../components/Calculator/NumberProvider';
import Calculator from '../../components/Calculator/Calculator';

const Work2 = () => (
  <div className='Work2'>
    <NumberProvider>
      <Calculator />
    </NumberProvider>
  </div>
);
export default Work2;
