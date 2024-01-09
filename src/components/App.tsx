import React, { useState } from 'react';
import styles from './styles.module.scss';
import image from '@/assets/image.png';
import Support from '@/assets/support.svg';

export const App: React.FC = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      {clicks}
      <img src={image} alt="" />
      <Support width={200} height={200}/>
      <button className={styles.button} onClick={() => setClicks(clicks - 1)}>-</button>
      <button onClick={() => setClicks(clicks + 1)}>+</button>
    </div>
  )
}
