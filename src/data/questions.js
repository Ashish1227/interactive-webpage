const questions = [
    {
      id: 0,
      text: "Hi there mlady, You are so so beautiful, Can I have a few moments of your time please?",
      options: [
        { text: "Yes absolutely", redirect: 1 },
        { text: "No, I am Single", redirect: 2 },
      ],
    },
    {
      id: 1,
      text: "Do you know you make my heart skip a beat everytime you do anything like literally you existing makes me happy",
      options: [
        { text: "Really?, lagta toh nahi hai jis tarah tu baat karta hai", redirect: 3 },
        { text: "Hihi you make me happy too", redirect: 4 },
      ],
    },
    {
      id: 2,
      text: "Prettyyyy pleaseeeee?🥺",
      options: [
        { text: "Alright, jeez!", redirect: 1 },
        { text: "Okay, fine!", redirect: 1 },
      ],
    },
    {
      id: 3,
      text: "I mean I know Im bad at expressing but thats only because half the time I dunno how to put your beauty into words",
      options: [
        { text: "Yes, absolutely, gawar saale!", redirect: 4 },
        { text: "Koi baat nai, mann liya meine, ab bata kya chahiye!", redirect: 5 },
      ],
    },
    {
        id: 4,
        text: "But here's an image that shows how much i nob everything about you 🥺",
        image: "/nob.jpg",
        options: [
          { text: "Awwwww, maybe i can give it a chance", redirect: "final" },
          { text: "Haat bc", redirect: 2 },
        ],
      },
      {
        id: 4,
        text: "Roses are red,\n violets are blue, \n Every moment with you feels brand new \n As I hold your hand,\n my heart takes flight\n, A journey with you feels just right.\n Tumi amar jibon, ami tomake bhalobashi",
        options: [
          { text: "Gandha poem tha but theek hai, mann jaenge", redirect: "final" },
          { text: "Wapas woh pretty please wala page hi khulega ispe dabane se", redirect: 2 },
        ],
      },
  ];
  
export default questions;
  