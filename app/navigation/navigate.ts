/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import throttle from "lodash.throttle";

const navigateOneTime = (navigate) => throttle(navigate, 1000, { trailing: false });

/* navigate */

const navigateScanQR = (navigation) => (props = {}) => {
  navigation.navigate("ScanQR", props);
};

const navigateLogin = (navigation) => (props = {}) => {
  navigation.navigate("NotSignedInStack", props);
};

/* push */

const openScanQR = (navigation) => (props = {}) => {
  navigation.push("ScanQR", props);
};

const openCollected = (navigation) => (props = {}) => {
  console.log({ props });
  navigation.push("Collected", props);
};

const openItemSlider = (navigation) => (props = {}) => {
  navigation.push("Slider", props);
};

const openScanCamera = (navigation) => (props = {}) => {
  navigation.push("ScanCamera", props);
};

const navigate = (navigation) => ({
  goBack: navigation.goBack,
  openScanQR: navigateOneTime(openScanQR(navigation)),
  navigateLogin: navigateOneTime(navigateLogin(navigation)),
  navigateScanQR: navigateOneTime(navigateScanQR(navigation)),
  openCollected: navigateOneTime(openCollected(navigation)),
  openItemSlider: navigateOneTime(openItemSlider(navigation)),
  openScanCamera: navigateOneTime(openScanCamera(navigation)),
});

export default navigate;
