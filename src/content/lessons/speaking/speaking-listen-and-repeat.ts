import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-listen-and-repeat",
  title: "Listen and repeat",
  summary:
    "Repeat sentences accurately and read short texts aloud with clear chunks, stress and intonation, for TOEFL Listen and Repeat and TOEIC Read a text aloud.",
  skill: "speaking",
  level: "B1",
  order: 3,
  minutes: 15,
  exams: [
    { exam: "toefl", task: "Speaking – Listen and Repeat" },
    { exam: "toeic", task: "Speaking – Read a text aloud" },
  ],
  objectives: [
    "Remember and repeat sentences by listening for meaning and chunks",
    "Stress the important words and make small words weak",
    "Read a short announcement aloud with natural pauses and intonation",
  ],
  warmUp: [
    "Think of a song you know in English. Is it easier to remember the words or the tune?",
    "When you read aloud in your own language, where do you pause?",
  ],
  learn: [
    {
      type: "text",
      title: "Two repeating tasks",
      body: "**TOEFL Listen and Repeat**: a short description tells you the situation, always something on campus or in an academic setting, for example helping new students at the university library. Then you hear a speaker in that place say seven sentences. You hear each sentence once and repeat it exactly, with no preparation time and about 8–12 seconds to respond. The sentences start short and get longer and more complex.\n\n**TOEIC Read a text aloud**: you see a short text, such as an announcement or an advertisement. You have 45 seconds to prepare and 45 seconds to read it aloud.\n\nBoth tasks test the same things: clear sounds, word stress, natural pauses and intonation. TOEFL also tests whether you can hold a whole sentence in your memory.",
    },
    {
      type: "text",
      title: "Listen for meaning, speak in chunks",
      body: "Don't try to remember single words. Listen to the **meaning** and the **chunks**: small groups of words that belong together. Each chunk usually has one strong word.\n\n- *You can borrow / up to ten books / at a time.*\n- *If you need help finding a book, / ask at the front desk.*\n\nPause briefly between chunks, never in the middle of one. Commas and full stops are good places to pause.",
    },
    {
      type: "table",
      title: "Strong words and weak words",
      headers: ["Usually strong (stressed)", "Usually weak (short and quiet)"],
      rows: [
        ["Nouns: library, books, desk", "Articles: a, an, the"],
        ["Main verbs: borrow, ask, leave", "Prepositions: to, at, of, for"],
        ["Adjectives and adverbs: quiet, quickly", "Helping verbs: can, are, was, have"],
        ["Numbers and negatives: ten, don't, never", "Pronouns: you, it, them"],
      ],
    },
    {
      type: "text",
      title: "Intonation in three rules",
      body: "1. **Statements** usually fall at the end: *The café is on the second floor.* ↘\n2. **Yes/no questions** usually rise: *Have you got your ticket?* ↗\n3. **Lists** rise on each item and fall on the last one: *clothing* ↗, *shoes* ↗, *and home electronics* ↘",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check",
        questions: [
          {
            prompt: "Where is the most natural place to pause? “If you need help finding a book, ask at the front desk.”",
            options: [
              "If you need / help finding a book, ask at the front desk.",
              "If you need help finding a book, / ask at the front desk.",
              "If you need help finding a / book, ask at the front desk.",
            ],
            answer: 1,
            explanation: "Pause at the comma, between the two chunks. Never pause in the middle of a chunk like “finding a book”.",
          },
          {
            prompt: "Which words are usually stressed in a sentence?",
            options: [
              "Small grammar words like a, the, to and of",
              "Content words like nouns, main verbs and adjectives",
              "Every word equally",
            ],
            answer: 1,
            explanation: "Content words carry the meaning, so they are strong. Grammar words are usually weak.",
          },
          {
            prompt: "When you read a list like “clothing, shoes, and home electronics”, your voice usually…",
            options: [
              "rises on each item and falls on the last one",
              "falls on every item",
              "stays flat on every item",
            ],
            answer: 0,
            explanation: "Rising tells the listener “there's more coming”; falling on the last item shows the list has finished.",
          },
          {
            prompt: "“Have you got your ticket?” At the end, the voice usually…",
            options: ["rises", "falls"],
            answer: 0,
            explanation: "Yes/no questions usually rise at the end.",
          },
          {
            prompt: "In TOEFL Listen and Repeat you forget one word of a long sentence. What is the best thing to do?",
            options: [
              "Stop and say nothing",
              "Repeat as much as you can, keeping the meaning and rhythm",
              "Say a different sentence that you know well",
            ],
            answer: 1,
            explanation: "Saying most of the sentence with the right meaning is much better than silence, so keep going and stay as close to the original as you can.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model: a library tour (TOEFL style)",
      transcript:
        "Welcome to the main library.\n\nPlease keep your phones on silent.\n\nThe quiet study rooms are on the third floor.\n\nYou can borrow up to ten books at a time.\n\nIf you need help finding a book, ask at the front desk.\n\nThe printers near the entrance take student cards, but not cash.\n\nBefore you leave today, don't forget to pick up a map of the building.",
      cast: { narrator: "male" },
    },
    {
      type: "text",
      title: "How a strong speaker repeats",
      body: "Look at how the longer sentences break into chunks. CAPITALS show the strongest words.\n\n- The QUIET STUDY rooms / are on the THIRD FLOOR.\n- You can BORROW / up to TEN BOOKS / at a TIME.\n- The PRINTERS near the ENTRANCE / take STUDENT CARDS, / but NOT CASH.\n- Before you LEAVE today, / DON'T FORGET / to pick up a MAP / of the BUILDING.\n\nNotice the weak words: *can* sounds like /kən/ and *to* sounds like /tə/. Notice the linking too: *pick up a* sounds like one word, *pi-ku-pa*.\n\nA strong speaker doesn't memorise the words one by one. They remember the **mental picture** (printers, student cards, no cash) and the **rhythm**, then rebuild the sentence.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "shadow",
        title: "TOEFL Listen and Repeat: a museum tour",
        instructions: "Imagine you are a new student on a tour of your university's science museum. Listen to each sentence once, then repeat it exactly. The sentences get longer.",
        sentences: [
          "Good morning, everyone.",
          "Please stay together as a group.",
          "Our first stop is the space gallery.",
          "You're welcome to take photos, but please don't use flash.",
          "This rocket engine was built more than fifty years ago.",
          "If you look up, you'll see a model of every planet in our solar system.",
          "At the end of the tour, there'll be time to visit the gift shop on the ground floor.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "shadow",
        title: "Build it backwards",
        instructions: "Long sentences are easier if you build them from the end. Repeat each line. Each one adds a new chunk to the front.",
        sentences: [
          "on Friday.",
          "until five on Friday.",
          "is open until five on Friday.",
          "The new computer lab is open until five on Friday.",
          "next to the bus stop.",
          "is the building next to the bus stop.",
          "The sports centre is the building next to the bus stop.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "shadow",
        title: "Read-aloud sentences",
        instructions: "These are the sentences of the TOEIC text in the next task. Repeat each one, copying the stress, the pauses between chunks and the intonation.",
        sentences: [
          "Good morning, and welcome to Riverside Shopping Centre.",
          "We'd like to remind shoppers that our summer sale starts today.",
          "You'll find great discounts on clothing, shoes, and home electronics on the second floor.",
          "If you're looking for somewhere to relax, our new rooftop café is now open from nine in the morning until eight in the evening.",
          "Free parking is available for up to three hours.",
          "Thank you for shopping with us, and enjoy your visit.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "TOEIC Read a text aloud",
        instructions: "You have 45 seconds to prepare. Mark the pauses and the stressed words in your head. Then read the text aloud in 45 seconds.",
        prompt:
          "Read this announcement aloud:\n\n“Good morning, and welcome to Riverside Shopping Centre. We'd like to remind shoppers that our summer sale starts today. You'll find great discounts on clothing, shoes, and home electronics on the second floor. If you're looking for somewhere to relax, our new rooftop café is now open from nine in the morning until eight in the evening. Free parking is available for up to three hours. Thank you for shopping with us, and enjoy your visit.”",
        prepSeconds: 45,
        speakSeconds: 45,
        modelAnswer:
          "Good morning, and welcome to Riverside Shopping Centre. We'd like to remind shoppers that our summer sale starts today. You'll find great discounts on clothing, shoes, and home electronics on the second floor. If you're looking for somewhere to relax, our new rooftop café is now open from nine in the morning until eight in the evening. Free parking is available for up to three hours. Thank you for shopping with us, and enjoy your visit.",
        targetPhrases: ["Riverside Shopping Centre", "summer sale", "clothing, shoes, and home electronics", "rooftop café", "Free parking"],
        checklist: [
          "I paused at commas and full stops, not in the middle of chunks.",
          "My voice rose on clothing and shoes and fell on home electronics.",
          "I stressed the important words (sale, discounts, rooftop café, free parking).",
          "Small words like to, and, for and the were short and weak.",
          "I read at a calm, steady speed and finished within 45 seconds.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "In Listen and Repeat, read the short description of the situation before the sentences start. It tells you the setting (for example, a library, a lab or a campus office), so you can predict the kind of words you will hear. Start speaking as soon as the sentence ends, while it is still fresh in your memory.",
    },
    {
      exam: "toeic",
      body: "In Read a text aloud, use the 45 seconds of preparation to read the text silently and plan your pauses. Look for lists, questions, numbers and names, because these need special care with intonation and stress. Don't rush: clear and steady is better than fast.",
    },
  ],
  vocabulary: [
    { word: "chunk", meaning: "a small group of words that belong together", example: "Say the sentence in short chunks.", topic: "education" },
    { word: "intonation", meaning: "the way your voice goes up and down when you speak", example: "Your intonation should rise at the end of a yes/no question.", topic: "education" },
    { word: "pause", meaning: "a short stop when speaking", example: "Make a short pause at each comma.", topic: "education" },
    { word: "remind", meaning: "to help someone remember something", example: "We'd like to remind passengers to keep their bags with them.", topic: "everyday" },
    { word: "discount", meaning: "money taken off the usual price", example: "Students get a ten per cent discount.", topic: "business" },
    { word: "available", meaning: "free to use or ready to get", example: "Free parking is available behind the hotel.", topic: "everyday" },
    { word: "entrance", meaning: "the door or place where you go into a building", example: "Meet me at the main entrance.", topic: "everyday" },
    { word: "borrow", meaning: "to take something and give it back later", example: "Can I borrow your charger?", topic: "everyday" },
    { word: "gallery", meaning: "a room or building that shows art or objects", example: "The space gallery is on the first floor.", topic: "travel" },
    { word: "rooftop", meaning: "on the top of a building", example: "We had dinner at a rooftop restaurant.", topic: "travel" },
  ],
  keyPoints: [
    "Listen for meaning and chunks, not single words.",
    "Stress content words; make grammar words short and weak.",
    "Pause at commas and full stops, never inside a chunk.",
    "Statements fall, yes/no questions rise, lists rise and then fall on the last item.",
    "Build long sentences backwards when you practise.",
  ],
};

export default lesson;
