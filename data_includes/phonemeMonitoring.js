var shuffleSequence = seq("consent","demo","welcome",
    "phoneme-Intro","ready","phoneme-Test","debrief", "exit");

var defaults = [
    "Message", {
        hideProgressBar: true
    },
    "AY_Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    },
    "Form", {
        hideProgressBar: true,
    },
];

var items = [
      
    ["setcounter", "__SetCounter__", { }],
    ["welcome", "Form", {hideProgressBar: true, countsForProgressBar: false,  continueOnReturn: true, consentRequired: true, continueMessage:null, html: {include: "welcome.html"}} ],
    ["exit", "Form", {consentRequired: false, continueMessage:"Click here to submit your HIT!", html: {include: "MTurk_SONA_exit.html"}} ],
    ["consent", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, consentRequired: true, html: {include: "MTurk_SONA_consent_2020.html"}} ],
    ["debrief", "Form", {hideProgressBar: true, countsForProgressBar: false, continueOnReturn: false, consentRequired: true, continueMessage:"Click here to get your study code!", html: {include: "MTurk_SONA_debrief.html"}} ],
    ["demo", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, html: {include: "demographics.html"}} ],
    ["ready", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, html: {include: "ready_screen.html"}} ],

    
    // Play the beginning of the story to practice
    ["phoneme-Intro", "AY_Form", {html: { include: "cocoPhonemeIntro.html" }} ],

    // Play the rest of the story with no breaks
    ["phoneme-Test", "AY_Form", {html: { include: "cocoPhonemeTest.html" }} ],

];
