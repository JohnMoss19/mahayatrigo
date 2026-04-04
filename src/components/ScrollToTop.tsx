import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // If it's the initial load, we let App.tsx handle the scroll to top
    // to avoid conflicts and ensure we always start at the top.
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Small delay to ensure the page has rendered before scrolling to hash
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}
