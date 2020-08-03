export default {
  getDeviceType() {
    const device = { mobile: false, desktop: false };
    if (window.screen.width < 1200) {
      device.mobile = true;
    } else {
      device.desktop = true;
    }
    return device;
  },
  debounce(func, delay) {
    let debounceTimer;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  }
};
