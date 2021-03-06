const useHeaderHeight = () => {
  return typeof document !== "undefined"
    ? document.getElementsByTagName("header")[0]?.offsetHeight
    : 0;
};

export default useHeaderHeight;
