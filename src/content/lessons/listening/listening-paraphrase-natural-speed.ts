import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-paraphrase-natural-speed",
  title: "Recognising paraphrase at natural speed",
  summary:
    "Match the words in exam questions to the very different words speakers actually use, and cope with fast, connected speech in conversations, talks and lectures.",
  skill: "listening",
  level: "C1",
  order: 3,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Listening Part 3" },
    { exam: "toefl", task: "Listening – Academic Talk" },
    { exam: "toeic", task: "Listening Part 3 – Conversations" },
  ],
  objectives: [
    "Recognise the main types of paraphrase: synonyms, word-class changes, negatives and opposites, general and specific words, and numbers expressed differently",
    "Predict how a question might be paraphrased before you listen",
    "Avoid “word-matching” traps, where an option repeats the speaker's words but changes the meaning",
    "Follow natural-speed speech with weak forms, linking and contractions",
  ],
  warmUp: [
    "How many different ways can you say “The meeting has been postponed”?",
    "When people speak fast, which small words do you find hardest to hear?",
  ],
  learn: [
    {
      type: "text",
      title: "The question rarely uses the speaker's words",
      body: "In all three exams, the words in the question and the words in the audio are usually **different**. The examiners test whether you understand meaning, not whether you can spot a repeated word.\n\nIn fact, an option that repeats a word you heard is often a **trap**. If the speaker says “the *price* wasn't the issue, it was the *delivery time*”, an option about price uses the speaker's word but is wrong.\n\nAt C1, you also need to do this at natural speed: speakers link words together, shorten small words and use idioms and phrasal verbs instead of formal vocabulary.",
    },
    {
      type: "table",
      title: "Common types of paraphrase",
      headers: ["Type", "In the question", "What you hear"],
      rows: [
        ["Synonym", "The results were surprising.", "The findings were unexpected."],
        ["Phrasal verb or idiom", "The meeting was postponed.", "We've had to push the meeting back a week."],
        ["Word class change", "There was a significant increase in demand.", "Demand increased significantly."],
        ["Negative + opposite", "The task was easy.", "It wasn't nearly as hard as we'd feared."],
        ["General ↔ specific", "Some equipment was damaged.", "Two of the laptops and a projector got broken."],
        ["Numbers and proportions", "About a quarter of the staff", "roughly one in four employees"],
        ["Active ↔ passive", "The council approved the plan.", "The plan was given the green light by the council."],
      ],
    },
    {
      type: "text",
      title: "Natural speed: what happens to the sounds",
      body: "Fast speech is not just faster. The words change shape:\n\n- **Weak forms**: *to*, *for*, *and*, *can*, *of* become very short, e.g. *a cup of tea* sounds like “a cuppa tea”.\n- **Linking**: a final consonant joins the next vowel, so *pick it up* sounds like “pi-ki-tup”.\n- **Elision**: sounds disappear, so *next week* sounds like “nex week” and *should have* sounds like “should've”.\n- **Contractions**: *we'd*, *they'll*, *wouldn't have*.\n\nYou don't need to hear every sound. Focus on the **stressed content words** (nouns, main verbs, adjectives), which stay clear, and let your knowledge of grammar fill in the rest.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: match the paraphrases",
        instructions: "Match each question phrase to what a speaker might say. There are two spoken phrases you do not need: they sound similar but mean something different.",
        left: [
          "The project was delayed.",
          "The meeting has been postponed.",
          "Most participants were satisfied.",
          "about 25 per cent",
          "She has doubts about the plan.",
          "It was easier than expected.",
          "Attendance fell.",
        ],
        right: [
          "We've had to bring the meeting forward.",
          "It turned out to be far less of a struggle than we'd feared.",
          "Fewer people turned up.",
          "The vast majority said they were happy with it.",
          "We've had to push the meeting back.",
          "roughly one in four",
          "She's not entirely convinced it'll work.",
          "We didn't manage to finish on schedule.",
          "Hardly anyone said they were happy with it.",
        ],
        answer: [7, 4, 3, 5, 6, 1, 2],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model: a local news report",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "And now some local news. The council's new food waste collection, which began in March, has got off to a better start than many expected. In the first three months, roughly one in four households signed up, comfortably above the council's target of fifteen per cent. Officials had warned that persuading people to separate their food waste would be an uphill battle, particularly in blocks of flats.\n\nCouncillor Ruth Adeyemi admitted that the scheme hadn't been without its teething problems. A number of residents complained that the collection day kept changing from week to week, and the council has now promised a fixed day for every street. The money saved on landfill charges, she said, would be put back into children's playgrounds across the district.\n\nNot everyone is persuaded, however. The local business association says the standard bins would be far too small for restaurants, and has urged the council to think again before the scheme is extended to shops and restaurants in the autumn.\n\nResidents who haven't yet joined can still order a free kitchen caddy through the council's website. The council stresses that cooked food, including meat and fish, can go in the bins, something it says many people don't realise. The waste is taken to a plant on the edge of town, where it is turned into fertiliser for local farms and enough electricity to power around four hundred homes.",
    },
    {
      type: "table",
      title: "How a strong listener matches question and audio",
      headers: ["Question says", "Audio says", "Type of paraphrase"],
      rows: [
        ["The scheme has been more successful than predicted.", "has got off to a better start than many expected", "Synonym + idiom"],
        ["About 25% of households joined.", "roughly one in four households signed up", "Number + phrasal verb"],
        ["It exceeded its target.", "comfortably above the council's target", "Synonym"],
        ["There were some early difficulties.", "hadn't been without its teething problems", "Double negative + idiom"],
        ["Collection times were inconsistent.", "the collection day kept changing", "Adjective ↔ verb phrase"],
        ["Savings will fund children's facilities.", "money saved… put back into children's playgrounds", "Word class + specific"],
        ["Business owners want the plan reconsidered.", "urged the council to think again", "Passive structure ↔ idiom"],
      ],
    },
    {
      type: "text",
      title: "What to notice",
      body: "**“hadn't been without its teething problems”** is a double negative: *not without problems* = *there were some problems*. *Teething problems* are small difficulties at the start of something new. A question might simply say *initial difficulties*.\n\n**“comfortably above the target”**: if a question asked “What proportion of households did the council aim for?”, the answer is **15%**, not 25%. Both numbers are in the same sentence. Always check which number answers the question.\n\n**Watch the trap:** an option such as “Restaurants have stopped using the scheme” repeats the word *restaurants* but is wrong. The scheme has **not yet** been extended to restaurants.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice 1: a problem with the printer",
      voice: "us",
      transcript:
        "Woman: Hi Daniel, have you got a minute? It's about the brochures for the trade fair.\nMan: Sure. Is there a problem with the printer?\nWoman: Sort of. They've just told me the paper we chose is out of stock, and they can't get any more until the end of the month.\nMan: That's cutting it fine. The fair's on the third.\nWoman: Exactly. So they've offered us a slightly thinner paper instead, at no extra charge, and they can still deliver on time.\nMan: Hmm. I'd want to see it before we agree to anything. Last time we went with a substitute, the colours came out looking really washed out.\nWoman: I thought you'd say that. I've already asked them to courier a few samples over this afternoon.\nMan: Great. Could you also find out whether they could do a smaller run on the original paper later on? We'll need more brochures for the sales team in the spring anyway.\nWoman: Good thinking. I'll ask them when they call back.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "TOEIC-style questions",
        instructions: "Listen to the conversation and choose the best answer. The correct options paraphrase what the speakers say.",
        questions: [
          {
            prompt: "What problem does the woman report?",
            options: [
              "A material is temporarily unavailable.",
              "The printer has raised its prices.",
              "The trade fair has been rescheduled.",
              "The brochure contains an error.",
            ],
            answer: 0,
            explanation: "“The paper we chose is out of stock… until the end of the month” = temporarily unavailable.",
          },
          {
            prompt: "Why is the man hesitant about the printer's offer?",
            options: [
              "He thinks the new paper is too expensive.",
              "He was disappointed by a previous replacement.",
              "He doubts the printer can deliver on time.",
              "He prefers to use a different printer.",
            ],
            answer: 1,
            explanation: "“Last time we went with a substitute, the colours came out looking really washed out.” Note that the new paper costs nothing extra, so option A is a trap.",
          },
          {
            prompt: "What has the woman already done?",
            options: [
              "Cancelled the original order",
              "Approved the thinner paper",
              "Arranged for examples to be sent",
              "Contacted the sales team",
            ],
            answer: 2,
            explanation: "“I've already asked them to courier a few samples over” = arranged for examples to be sent.",
          },
          {
            prompt: "What does the man ask the woman to find out?",
            options: [
              "Whether a future order could use the original paper",
              "Whether the trade fair could be moved to the spring",
              "How many brochures the sales team needs",
              "When the printer will call back",
            ],
            answer: 0,
            explanation: "“Whether they could do a smaller run on the original paper later on.” A *run* is a quantity printed at one time.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice 2: a lecture on the IKEA effect",
      voice: "us",
      cast: { narrator: "male" },
      transcript:
        "So, the next idea I want to introduce has a slightly unusual name: the IKEA effect. It refers to the tendency for people to place a disproportionately high value on things they've partly created themselves. The name comes from the flat-pack furniture company, but the effect turns up in all sorts of places.\n\nIn a series of experiments published in the early twenty-tens, participants were asked to fold paper into simple animal shapes, and then say how much they'd pay for their own creations. On average, they offered far more than other participants were prepared to pay for exactly the same objects. What's more, they rated their own rather amateurish efforts almost as highly as models made by experts.\n\nNow, here's the important qualification. The effect only appeared when people actually completed the task. Participants who built something and then had to take it apart, or who didn't get to finish it, didn't show the same attachment. So it's not effort on its own that matters. It's effort that ends in success.\n\nWhy should this be? The leading explanation is that finishing a task makes us feel competent, and we transfer that good feeling onto the object itself.\n\nFor businesses, the implications are fairly obvious. Cake mixes that ask you to add a fresh egg, or apps that let you customise the layout, may be more popular precisely because they give the user something to do. But there's a downside, too. Managers may overvalue projects they've personally designed, and be reluctant to abandon them, even when the evidence suggests they should.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Academic talk: match the meaning",
        instructions: "Listen to the lecture and choose the best answer. Watch out for options that repeat the speaker's words but change the meaning.",
        questions: [
          {
            prompt: "What is the IKEA effect?",
            options: [
              "Preferring furniture that is easy to assemble",
              "Valuing things more highly because you helped to make them",
              "Paying more for products from well-known brands",
              "Enjoying a task more when it is difficult",
            ],
            answer: 1,
            explanation: "“A disproportionately high value on things they've partly created themselves.” Option A uses the furniture idea but misses the meaning.",
          },
          {
            prompt: "How did participants judge the objects they had made?",
            options: [
              "As nearly equal in quality to experts' work",
              "As clearly better than experts' work",
              "As worth less than other people's objects",
              "As too amateurish to sell",
            ],
            answer: 0,
            explanation: "“They rated their own rather amateurish efforts almost as highly as models made by experts.” Option D repeats “amateurish” but is a trap.",
          },
          {
            prompt: "According to the lecturer, what is necessary for the effect to occur?",
            options: [
              "A large amount of effort",
              "Help from an expert",
              "Successfully finishing the task",
              "Choosing the design yourself",
            ],
            answer: 2,
            explanation: "“It's not effort on its own that matters. It's effort that ends in success.”",
          },
          {
            prompt: "Why does the lecturer mention cake mixes?",
            options: [
              "To show that customers prefer fresh ingredients",
              "To illustrate how products can benefit from involving the user",
              "To criticise companies that make products too simple",
              "To explain where the name of the effect comes from",
            ],
            answer: 1,
            explanation: "Products “may be more popular precisely because they give the user something to do”.",
          },
          {
            prompt: "What risk does the lecturer mention?",
            options: [
              "Customers may lose interest in finished products",
              "Managers may continue with their own projects for too long",
              "Companies may spend too much on product design",
              "Employees may refuse to work on other people's projects",
            ],
            answer: 1,
            explanation: "Managers may “be reluctant to abandon them, even when the evidence suggests they should”.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "dictation",
        title: "Dictation: connected speech",
        instructions: "Listen and type each sentence exactly as you hear it, with normal spelling. Write contractions such as I'd or they've when the speaker uses them. Try each sentence at normal speed first, then slow it down if you need to.",
        voice: "us",
        sentences: [
          "We should have asked them to send it over a bit sooner.",
          "I'd have gone if I'd known about it in advance.",
          "What are you going to do with all of them?",
          "They've had to push it back until the end of next month.",
          "It turned out to be far less of a problem than we'd expected.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In Part 3 multiple choice, underline the key idea in each option and think of one or two ways it could be said. Expect the correct option to use different words from the audio, and be suspicious of an option that copies an exact phrase.",
    },
    {
      exam: "toefl",
      body: "Academic Talk answer choices often restate the professor's idea in more general, academic language. A choice that copies a detail word for word but changes the relationship (cause, contrast, condition) is a common wrong answer.",
    },
    {
      exam: "toeic",
      body: "In Part 3 you can read the questions (and often the options) before the conversation. Use that time to predict paraphrases: “What problem does the woman mention?” means listen for words like *unfortunately*, *out of stock*, *delayed* or *sort of*.",
    },
  ],
  vocabulary: [
    { word: "paraphrase", meaning: "to express the same meaning using different words", example: "The question paraphrases what the speaker says.", topic: "academic" },
    { word: "teething problems", meaning: "small problems at the beginning of a new project or system", example: "The new booking system had a few teething problems.", topic: "business" },
    { word: "push back", meaning: "to move an event to a later time", example: "They pushed the launch back by a month.", topic: "work" },
    { word: "bring forward", meaning: "to move an event to an earlier time", example: "The deadline has been brought forward to Friday.", topic: "work" },
    { word: "cutting it fine", meaning: "leaving only just enough time for something", example: "Arriving ten minutes before the exam is cutting it fine.", topic: "everyday" },
    { word: "substitute", meaning: "something used instead of the usual or planned thing", example: "The printer offered a thinner paper as a substitute.", topic: "business" },
    { word: "washed out", meaning: "pale, without strong colour", example: "The photos looked washed out on the thin paper.", topic: "everyday" },
    { word: "disproportionately", meaning: "too much or too little compared with something else", example: "People value their own work disproportionately highly.", level: "C1", topic: "academic" },
    { word: "competent", meaning: "having enough skill to do something well", example: "Finishing a difficult task makes us feel competent.", topic: "work" },
    { word: "reluctant", meaning: "not wanting to do something", example: "Managers are often reluctant to cancel their own projects.", topic: "work" },
    { word: "give the green light", meaning: "to give official permission for something to start", example: "The council gave the green light to the new cycle lanes.", topic: "society" },
  ],
  keyPoints: [
    "Questions and audio usually use different words for the same meaning: synonyms, idioms, word-class changes, negatives and numbers expressed differently.",
    "An option that repeats the speaker's exact words is often a trap.",
    "When two numbers appear close together, check which one the question asks for.",
    "At natural speed, focus on stressed content words and let grammar fill in weak forms and contractions.",
    "Predict paraphrases before you listen, whenever you can see the questions.",
  ],
};

export default lesson;
