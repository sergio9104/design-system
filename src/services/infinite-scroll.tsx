
import { useState, useEffect } from "react";

const useInfiniteScroll = (callback, id): [boolean, (e: boolean) => void] => {
  const [isFetching, setIsFetching] = useState(false);
  let element;
  useEffect(() => {
    element = document.querySelector(`#${id}`);
    element.addEventListener("scroll", isScrolling);
    return () => element.removeEventListener("scroll", isScrolling);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  function isScrolling() {
    if (
      (element.scrollHeight - element.scrollTop) !== element.clientHeight ||
      isFetching
    ) {
      return;
    }
    setIsFetching(true);
  }
  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;