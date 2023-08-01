import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../images/1.png';
import fimage2 from '../images/2.png';
import fimage3 from '../images/3.png';
import fimage4 from '../images/4.png';

export default function Feature() {
  return (
    <div id='features'>
      <h1>FEATURES</h1>
      <div className='a-container'>
<Featurebox image={fimage1} title="Converged Infrastructure" />
<Featurebox image={fimage2} title="Applications Services" />
<Featurebox image={fimage3} title="Managed Services" />
<Featurebox image={fimage4} title="Professional Services" />
      </div>
      
    </div>
  )
}

