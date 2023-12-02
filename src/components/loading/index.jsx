import Lottie from "lottie-react";
import loadingLottie from "../../assets/loadingLottie.json";
import { useSetScreenSize } from "../../setScreenHeight";
import * as styles from './loadingStyle'

const LoadingScreen = () => {
    useSetScreenSize();

  return (
    <styles.LoadingScreenContainer>
      <styles.LottieContainer>
        <Lottie animationData={loadingLottie} />
      </styles.LottieContainer>
    </styles.LoadingScreenContainer>
  );
};

export default LoadingScreen;