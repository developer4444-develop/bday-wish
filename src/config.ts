/* ==========================================
   Birthday Surprise Website Configuration

   Edit this file to customize the website
   for your loved one!
   ========================================== */

export const config = {
  /* Name Verification Gate */
  recipientName: "nachu", // required name to enter
  nameHint: '5 letters, starts with "N"', // hint on wrong name

  /* Section Headings */
  soloGalleryTitle: "✨ Birthday Girl ✨", // solo gallery title
  messageTitle: "To My Favorite Person", // letter section title
  footerText: "", // footer text

  /* Button Labels */
  buttons: {
    hero: "Ready for a little surprise?", // hero/landing button
    soloGallery: "Want to see more?", // solo gallery button
  },

  /* Together Gallery (Optional) */
  togetherGallery: {
    enabled: true, // toggle together gallery
    title: "💕 Birthday Girl 💕", // together gallery title
    buttonText: "One Last Thing...", // together gallery button
  },


  /* Birthday Message: Each string is a paragraph */
  message: [
    "Happy Birthday My Kanmaniiiiiii",
    "",
    "I hope today is filled with joy, laughter, and all the little moments that make you smile. As you step into this new year, may it bring exciting opportunities, meaningful memories, and the confidence to chase everything you dream of.",
    "",
    "You are the strongest women i have ever seen , since i have been with you for couple of years , i have seen the struggeles you have faced , the problems you gone through , everything... i cant explain or there is no words to explain this. everything will be alright.. one day.. please wait for that day.. you will get a better life actually you deserves..more than my success in my life , im praying , and waiting for your success , whether im with you or not , thats doesnt matter , i need to know that you are happy and you got what you deserves",
    "",
    "thank you for being with me till this moment",
    "you are eveything to me , the one who knows me , the one who understands me , my bestfriend , girlfriend , my love of life.. eveything.",
    "i know we had lot of good times , good memories , the happiest days everything . But , i know im the reason for your all loses , what you have faced... the bad times ... everything , im the only reason for your change in your life.. i cant think about that , whatever i do will not match the loss i have given to you.. i always have that guilt in my life. I know i cant give nothing but i can tell you one thing , i will never change , i will always same for you.. . im not good or perfect in anything , i dont have anything.. but the only thing i have done from my heart or sicerely in my life is the love for yours. not trying to convince you or hurt you..  im not asking for you to give anything back.. but with or without your permission , i will be like this only in this life.. ",
    "please take this in mind.. i will be always there for you.. i cant give anyone what i have given to you.. You always have a special place in my heart and my life.",

    "",
    "- With love,",
    "Happy Birthday My Nachuuu"
  ],

  /* Theme Colors - Change these to customize the entire website theme! */
  colors: {
    primary: "#ec4899", // main color (buttons, accents)
    light: "#fdf2f8", // lightest shade (backgrounds)
    medium: "#f9a8d4", // medium shade (decorations)
    dark: "#db2777", // darkest shade (hover states)
  },

  /* Typing Animation Text (shown on the start screen) */
  typingText: {
    first: "Hey, wait a second!",
    second: "This website is only for someone special.",
  },
};

export type Config = typeof config;
