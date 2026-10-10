import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-speculating-hedging-comparing",
  title: "Speculating, hedging and comparing",
  summary:
    "Talk about the future and the unknown with the right degree of certainty, soften claims you can't prove, and make precise comparisons: three skills that lift IELTS Part 3 answers to band 7+.",
  skill: "speaking",
  level: "C1",
  order: 2,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Speaking Part 3" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
  ],
  objectives: [
    "Express different degrees of certainty when speculating about the future, the past and hypothetical situations",
    "Hedge claims naturally so you sound measured rather than vague or dogmatic",
    "Make precise comparisons using modifiers and structures beyond “more… than”",
  ],
  warmUp: [
    "How do you think your city will look in thirty years? Make one prediction you are sure about and one you are not sure about.",
    "What is the difference between “Young people are addicted to their phones” and “A lot of young people seem to spend a great deal of time on their phones”?",
  ],
  learn: [
    {
      type: "text",
      title: "Why these three skills matter",
      body: "Part 3 questions often have no factual answer: *Will…? Why might…? How does… compare with…?* Strong candidates show **how sure they are**, and they choose words that match.\n\n- **Speculating** means discussing what is possible or probable, now, in the past or in the future.\n- **Hedging** means softening a claim so it is accurate. “Rich people don't understand everyday problems” is a sweeping claim; “People on very high incomes are *arguably* more insulated from everyday problems” is a hedged one.\n- **Comparing** precisely means saying *how much* things differ, not just that they do.\n\nBe careful: too much hedging sounds evasive. Hedge the claims you can't prove, and state your actual opinion clearly.",
    },
    {
      type: "table",
      title: "Degrees of certainty",
      headers: ["Certainty", "Future / general", "Past"],
      rows: [
        ["Almost certain", "There's no doubt that… / …is bound to… / I'd be amazed if… didn't…", "…must have… / There's no question that…"],
        ["Probable", "In all likelihood… / Chances are… / …is likely to… / I wouldn't be surprised if…", "…probably… / …will have…"],
        ["Possible", "It's conceivable that… / …could well… (a real possibility) / There's an outside chance that… (a small one)", "…might well have… / …may have…"],
        ["Unlikely", "I can't really see… / It's doubtful whether… / …is unlikely to…", "…probably didn't… / I doubt that…"],
        ["Almost certainly not", "There's no way… / I can't imagine… ever…", "…can't have… / …couldn't have…"],
      ],
    },
    {
      type: "example",
      title: "Hedging: from sweeping to measured",
      items: [
        "Sweeping: “Social media makes people depressed.”",
        "Hedged: “Heavy social media use **would seem to be linked to** low mood in **some** teenagers, **although** it's hard to say which causes which.”",
        "Sweeping: “Nobody reads books any more.”",
        "Hedged: “People **tend to** read **fewer** full-length books than they used to, **or at least** that's **the impression I get**.”",
        "Other useful hedges: **to some extent**, **arguably**, **more often than not**, **by and large**, **I'd be inclined to say**, **it's fair to say that**",
      ],
    },
    {
      type: "table",
      title: "Precise comparison",
      headers: ["Meaning", "Structure", "Example"],
      rows: [
        ["Big difference", "far / considerably / significantly + comparative", "Rents are considerably higher in the capital."],
        ["Big difference (negative)", "nowhere near as… as / not nearly as… as", "Public transport is nowhere near as reliable as it used to be."],
        ["Small difference", "slightly / marginally / a little + comparative", "Online courses are marginally cheaper."],
        ["Similarity", "much the same as / on a par with / just as… as", "Pay in the private sector is roughly on a par with pay in the public sector."],
        ["Change together", "the + comparative…, the + comparative…", "The more choice people have, the harder it is to decide."],
        ["Contrast", "whereas / while / by contrast / unlike…", "Unlike their parents, many young people rent rather than buy."],
      ],
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model answer: Part 3 on the topic of “Cities”",
      voice: "us",
      cast: { Examiner: "male", Candidate: "female" },
      transcript:
        "Examiner: How do you think cities will change in the next few decades?\nCandidate: Well, it's very hard to predict, but I'd be amazed if cars were still as dominant as they are now. Chances are that a lot more city centres will be pedestrianised, and there's every likelihood that public transport will be considerably more automated. I also wouldn't be surprised if we saw people moving back out of cities to some extent, because remote work means you don't have to live near the office. Having said that, I can't really see big cities declining. Arguably, the more people work remotely, the more they value having somewhere lively to go in the evenings and at weekends. So my guess is that cities will become less about work and more about leisure and culture. Of course, that's assuming housing doesn't become even more unaffordable, which is a big if.",
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "- **Sets expectations:** “It's very hard to predict, but…” is a brief hedge, followed immediately by a clear prediction. It doesn't hide behind the uncertainty.\n- **Varies certainty:** *I'd be amazed if… (almost certain) → Chances are… (probable) → I wouldn't be surprised if… (probable) → to some extent (limited) → I can't really see… (unlikely)*. The listener knows exactly how confident the speaker is about each point.\n- **Precise comparison:** “considerably more automated”, “the more people work remotely, the more they value…”, “less about work and more about leisure”.\n- **Hedges the bold claim:** “arguably” softens the idea that remote workers value city life more, which is an interesting but unproven claim.\n- **Conditions:** “that's assuming housing doesn't become even more unaffordable, which is a big if.” Ending with a condition shows the speaker sees the bigger picture.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "How sure is the speaker?",
        questions: [
          {
            prompt: "Which sentence expresses the HIGHEST degree of certainty?",
            options: [
              "Prices could well rise next year.",
              "Prices are bound to rise next year.",
              "There's an outside chance that prices will rise next year.",
              "I doubt that prices will rise next year.",
            ],
            answer: 1,
            explanation: "*Bound to* means almost certain. *Could well* is possible, *an outside chance* is a small possibility, and *I doubt* means unlikely.",
          },
          {
            prompt: "“The ancient builders ______ used some kind of ramp. There's no other way they could have lifted the stones.” Choose the best option.",
            options: ["must have", "might have", "can't have", "should have"],
            answer: 0,
            explanation: "The second sentence shows the speaker is almost certain, so *must have* is the right past deduction.",
          },
          {
            prompt: "Which response is hedged most appropriately for IELTS Part 3?",
            options: [
              "All old people hate technology.",
              "Maybe, perhaps, possibly some old people might sort of not like technology, I don't know.",
              "Older people are, by and large, a bit more cautious about new technology, although that's changing fast.",
              "Technology is good.",
            ],
            answer: 2,
            explanation: "Option C hedges once (*by and large*), stays clear and adds a qualification. Option B piles up hedges until it says nothing.",
          },
          {
            prompt: "“I wouldn't be surprised if more people started working four-day weeks.” What does the speaker think?",
            options: ["It is very unlikely.", "It is fairly likely.", "It has already happened.", "They would be shocked if it happened."],
            answer: 1,
            explanation: "*I wouldn't be surprised if…* means the speaker thinks it is probable.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Make precise comparisons",
        instructions: "Complete the answer with ONE word in each gap.",
        text:
          "Question: How does life in the countryside compare with life in the city?\n\nWell, the countryside is nowhere {{0}} as convenient, obviously. Things like hospitals and shops can be miles away. {{1}} city dwellers, people in rural areas usually need a car just to get by. On the other hand, the cost of living tends to be {{2}} lower, sometimes by a third or more. And I'd say the pace of life is a lot more relaxed, {{3}} in the city everyone seems to be in a hurry. Interestingly, broadband speeds in some villages are now roughly on a {{4}} with those in the city, so remote workers have started moving out. I suppose the {{5}} expensive cities become, the more attractive the countryside looks.",
        answers: [["near"], ["unlike"], ["considerably", "significantly", "far", "much", "substantially", "markedly", "dramatically", "vastly", "noticeably", "way"], ["whereas", "while", "whilst", "but"], ["par"], ["more"]],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "order",
        title: "Build a hedged sentence",
        instructions: "Put the words in order to make a natural, hedged sentence.",
        mode: "words",
        items: ["It", "would", "seem", "that", "younger", "workers", "are", "keener", "to", "change", "careers."],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "IELTS Part 3: compare and speculate",
        instructions: "No preparation. Compare the past and present, then speculate about the future. Use at least two certainty expressions and one precise comparison. Aim for 45–60 seconds.",
        prompt: "Topic: Communication. How has the way people keep in touch with family changed compared with your grandparents' generation? Do you think face-to-face contact will become less important in the future?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "Oh, it's changed almost beyond recognition. My grandparents' generation would have relied on letters and the occasional expensive phone call, whereas now you can video call someone on the other side of the world for free. So contact is far more frequent, although it's arguably more superficial. A quick message isn't nearly as meaningful as a long letter. As for the future, I can't really see face-to-face contact losing its importance. If anything, the more of our lives we spend online, the more people seem to value actually being in the same room. In all likelihood we'll see even more of these virtual tools, but I'd be amazed if they ever fully replaced a family meal or a hug. Chances are they'll just fill in the gaps between visits.",
        targetPhrases: ["whereas", "far more", "arguably", "I can't really see", "in all likelihood", "chances are"],
        checklist: [
          "I made a clear comparison between past and present, using a structure such as “whereas” or “far more”.",
          "I said how big the difference is, not just that there is one.",
          "I used at least two different expressions of certainty.",
          "I hedged a claim I couldn't prove, but still gave a clear opinion.",
          "I avoided piling up hedges (“maybe perhaps possibly…”).",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "TOEFL Take an Interview: speculate in 45 seconds",
        instructions:
          "No preparation, as in the TOEFL interview. Give a clear answer first, compare now with the future, and use one expression of certainty. Stop at 45 seconds.",
        prompt:
          "Interviewer: Some people think that in ten years most university lectures will be online. Do you think that will happen? Why or why not?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "Honestly, I doubt most lectures will move online, although I'd imagine far more of them will be recorded. Online lectures are clearly convenient, whereas a lecture hall gives you the chance to ask questions and meet other students, and that's much harder to replace. So chances are we'll see a mix: the basic content online, and smaller seminars on campus for discussion. It will probably depend on the subject, though, because lab-based courses can't really move online. I'd be surprised if universities gave up their buildings completely, because students still seem to value learning together.",
        targetPhrases: ["I doubt", "I'd imagine", "far more", "whereas", "chances are", "I'd be surprised if"],
        checklist: [
          "I answered the question in my first sentence.",
          "I used at least one expression of certainty and one comparison.",
          "I gave a reason, not just an opinion.",
          "I finished my last sentence before 45 seconds.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "The Grammatical Range and Accuracy criterion rewards complex structures used accurately. Speculation gives you a natural reason to use modal perfects (*must have*, *might well have*), conditionals (*I'd be amazed if…*) and comparatives (*the more…, the more…*) without forcing them.",
    },
    {
      exam: "toefl",
      body: "In **Take an Interview**, the later questions move from your own experience to wider issues, so you may be asked what you *would* do or how something *might* change. Give a clear prediction in your first sentence (“I'd say it's very likely that…”), then explain why. A short hedge is fine, but don't spend your 45 seconds saying it's hard to know.",
    },
  ],
  vocabulary: [
    { word: "be bound to", meaning: "to be almost certain to happen", example: "With so much traffic, there's bound to be a delay.", topic: "everyday" },
    { word: "in all likelihood", meaning: "very probably", example: "In all likelihood, the meeting will be postponed.", topic: "academic" },
    { word: "an outside chance", meaning: "a very small possibility", example: "There's an outside chance we'll finish early.", topic: "everyday" },
    { word: "conceivable", meaning: "possible to imagine or believe", example: "It's conceivable that petrol cars will be banned within ten years.", topic: "academic" },
    { word: "arguably", meaning: "used to say something can be supported with reasons, though others may disagree", example: "She is arguably the best player of her generation.", topic: "academic" },
    { word: "by and large", meaning: "generally, when everything is considered", example: "By and large, the public reacted positively.", topic: "everyday" },
    { word: "nowhere near as", meaning: "not nearly as; much less", example: "The sequel was nowhere near as good as the original.", topic: "everyday" },
    { word: "on a par with", meaning: "at the same level or standard as", example: "Salaries here are on a par with those in the capital.", topic: "work" },
    { word: "pedestrianised", meaning: "made into an area for people walking, with no cars", example: "The old town centre was pedestrianised in 2015.", topic: "travel" },
    { word: "superficial", meaning: "only on the surface; not deep or serious", example: "Our conversations were polite but fairly superficial.", topic: "society" },
    { word: "a big if", meaning: "a condition that is very uncertain", example: "We'll finish on time if the supplier delivers, but that's a big if.", topic: "everyday" },
  ],
  keyPoints: [
    "Match your language to your certainty: bound to → chances are → could well → I can't really see.",
    "Use modal perfects (must have, might have, can't have) to speculate about the past.",
    "Hedge claims you can't prove, but always give a clear opinion; don't pile up hedges.",
    "Say how big a difference is: considerably, marginally, nowhere near as, on a par with.",
    "“The more…, the more…” and “whereas” are natural ways to compare and contrast in speech.",
  ],
};

export default lesson;
