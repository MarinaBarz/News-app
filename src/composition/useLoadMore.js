import useEventListener from "@/composition/useEventListener";

export default function(element = window, callback) {
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    callback();
  };

  useEventListener(element, "scroll", handleScroll);
}
