const screens = {
    screen1: {
      message: "You are the most beautiful girl in the world. Can I have a few moments of your time?",
      options: [
        { label: "Yes", nextScreen: "screen2" },
        { label: "No", nextScreen: "screen1Retry" },
      ],
    },
    screen1Retry: {
      message: "Pretty please?",
      options: [
        { label: "Yes", nextScreen: "screen2" },
        { label: "Yes", nextScreen: "screen2" },
      ],
    },
    screen2: {
      message: "Do you know how special you are?",
      options: [
        { label: "Yes", nextScreen: "screen3" },
        { label: "No", nextScreen: "screen3" },
      ],
    },
    screen3: {
      message: "Will you be my partner for life?",
      options: [
        { label: "Yes", nextScreen: "final" },
        { label: "No", nextScreen: "rethink" },
      ],
    },
    final: {
      message: "Thank you! You just made my life amazing!",
      options: [],
    },
    rethink: {
      message: "Let's rethink this. You're too special for me to give up on.",
      options: [
        { label: "Okay, Yes", nextScreen: "final" },
      ],
    },
  };
  
  export default screens;
  