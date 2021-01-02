
// Philipp M. Srivastava
// 2021-01-01
//
// Filename: src/content.js
// Description: This file contains
// the content displayed on the home page


// Defining content
const content = [
    {
      type: "text",
      title: "About",
      largeContent: false,
      content: `Same Eyes is based in Ann Arbor Michigan and consists of Alex Hughes and Chad Pratt.
      Along with regular collaborators Fred Thomas and Dykehouse, Same Eyes makes soft focus
      synth pop that is equally as emotional as it is danceable. Drawing influence from
      everything from 80s new wave to modern post punk, Same Eyes brings an unheard approach
      to modern synth pop to the table. This is encapsulated and exemplified in their debut
      full length Parties To End, out January 22nd 2021 on their label Desperate Ones. Drawn
      together through the contract of employment (house painters by day) and a mutual love for
       drum machines and synthesizers, Hughes and Pratt began creating music together in the
        Summer of 2019 and are constantly writing and recording new material through emailed
         Ableton files and sporadic sessions in an Ann Arbor basement.`
    },
    {
      type: "img",
      source: "images/same_eyes_both.png"
    },
    {
      type: "text",
      title: "In the Media",
      largeContent: true,
      content: `"A recent discovery, the Ann Arbor duo Same Eyes makes fantastic synth-pop songs
       that would be at home on a John Hughes soundtrack or on the NewRetroWave label"`,
      source: "PULP"
    },
    {
      type: "img",
      source: "images/alex.png"
    },
    {
      type: "text",
      title: "Desperate Ones",
      largeContent: true,
      desperateOnes: true,
      media: "/images/desperrateones.png",
      content: `Desperate Ones is an independent record label based out of Ann
       Arbor Michigan run by Same Eyes. We use it to put out our records and
       our friends records but if you’ve got an amazing band send us your stuff
       and we will check it out! `
    },
    {
      type: "img",
      source: "images/chad.png"
    }
];


// exporting
module.exports = {
  content
};
