import { useEffect, useState } from "react";

// Define a custom hook called useMediaQuery that accepts a query string as its argument
export const useMediaQuery = (query: string) => {
  // Initialize a state variable called isMatch with an initial value of false
  const [isMatch, setIsMatch] = useState<boolean>(false);

  // useEffect hook is used for side effects
  useEffect(() => {
    // Create a media query object based on the provided query string
    const media = window.matchMedia(query);

    // Check if the media query matches the current state value of isMatch
    if (media.matches !== isMatch) {
      // If there's a change in match status, update isMatch state
      setIsMatch(media.matches);
    }

    // Define a listener function that sets isMatch whenever the media query matches change
    const listener = () => setIsMatch(media.matches);

    // Add an event listener to the window's resize event, calling the listener function on resize
    window.addEventListener("resize", listener);

    // Return a cleanup function that removes the event listener when the component unmounts
    return () => window.removeEventListener("resize", listener);
  }, [isMatch, query]); // useEffect dependencies include isMatch and query
  return isMatch; // Return the current value of isMatch from the custom hook
};
