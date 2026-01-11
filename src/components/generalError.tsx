import Lottie from 'lottie-react';
import animationData from '../assets/error.json'

const GeneralError = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: '300px', height: '300px' }}
      />
    </div>
  );
};

export default GeneralError;