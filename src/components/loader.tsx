import Lottie from 'lottie-react';
import animationData from '../assets/loading.json'

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: '200px', height: '200px' }}
      />
    </div>
  );
};

export default Loader;