import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-paraphrasing-strategies",
  title: "When you don't know the word",
  summary:
    "Keep talking when a word is missing: describe it, use a more general word, compare it with something similar, say the opposite or give examples, so the listener understands and your fluency doesn't suffer.",
  skill: "speaking",
  level: "B2",
  order: 8,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Speaking Part 2" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
    { exam: "toeic", task: "Speaking – Describe a picture" },
  ],
  objectives: [
    "Describe an object, person, place or feeling when you can't remember its name",
    "Choose quickly between several paraphrase strategies, without stopping",
    "Use short bridging phrases to keep the flow while you search for a word",
    "Recover smoothly in a two-minute talk full of specific vocabulary",
  ],
  warmUp: [
    "Think of an object in your kitchen whose English name you don't know. How could you explain what it is without using your own language?",
  ],
  learn: [
    {
      type: "text",
      title: "Every speaker has gaps",
      body: "Even very fluent speakers forget words or meet things they have never needed to name: a kitchen tool, a part of a bike, a type of plant. What separates strong speakers from weak ones is **what they do next**.\n\nWeak response: a long silence, *um… um… how do you say…*, or a word in their own language. The conversation stops.\n\nStrong response: a quick description that gets the meaning across, and the answer continues: *We cooked it on a, well, a big flat metal pan, the kind you put straight over a fire.*\n\nThe CEFR describes this as a B2 ability: using **circumlocution** (describing something in other words) and **paraphrase** to cover gaps in vocabulary. Examiners see it as a skill, not a weakness.",
    },
    {
      type: "table",
      title: "Seven ways to say it without the word",
      headers: ["Strategy", "Useful language", "Example (missing word)"],
      rows: [
        ["Say what it's for", "It's a thing you use to… / It's for + -ing", "It's a thing you use to open bottles of wine. (corkscrew)"],
        ["Describe how it looks or what it's made of", "It's made of… / It looks like… / It's shaped like…", "It's a small metal tool that looks like a tiny spade. (trowel)"],
        ["Describe a person or place by its role", "someone who… / the person who… / the place where…", "the person who checks your ticket on the train (ticket inspector)"],
        ["Use a general word plus detail", "a kind of / a type of / a sort of + general word", "a type of bird from New Zealand that can't fly (kiwi)"],
        ["Compare it with something similar", "It's a bit like…, but… / It's similar to…", "It's a bit like a lemon, but it's small and green. (lime)"],
        ["Say the opposite", "not very… / not exactly… / the opposite of…", "He's not exactly generous with money. (mean / stingy)"],
        ["Give examples of things in the group", "things like… / for example… / …and so on", "things like pans, knives and chopping boards (kitchen equipment)"],
      ],
    },
    {
      type: "text",
      title: "Bridging phrases: keep the flow",
      body: "A short phrase tells the listener *I'm looking for a word* and fills the pause naturally. Use one, then go straight into your description:\n\n- *What's the word… it's the…*\n- *I can't think of the word, but it's…*\n- *I'm not sure what it's called in English, but…*\n- *…what do you call it… the thing that…*\n\nAfterwards, carry on with your answer. Don't apologise again and again, and don't ask the examiner to tell you the word: the examiner is there to assess you, not to supply vocabulary. If you notice a problem, you can quickly rephrase with *In other words,…* or *What I mean is,…*",
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Lexical Resource is one quarter of your IELTS Speaking score, and the public band descriptors for it specifically mention paraphrase: stronger candidates use it effectively. A quick, clear description of a missing word shows this skill. A long search for the perfect word shows nothing and hurts your fluency.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Name the strategy",
        instructions: "Match each paraphrase to the strategy it uses. There is one extra strategy you do not need.",
        left: [
          "It's what you use to make holes in a wall.",
          "She's not exactly the most patient person in the world.",
          "It's a bit like a cardigan, but it has a hood.",
          "I mean things like tents, sleeping bags and camping stoves.",
          "It's the person who fixes the water pipes in your house.",
          "It's a type of fish that people often eat raw in sushi.",
        ],
        right: [
          "using a general word with extra detail",
          "asking the examiner to translate",
          "saying what it is used for",
          "giving examples of things in the group",
          "saying the opposite or using “not”",
          "describing a person by their role",
          "comparing it with something similar",
        ],
        answer: [2, 4, 6, 3, 5, 0],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model: talking about food with two missing words",
      voice: "uk",
      cast: { Examiner: "female", Candidate: "male" },
      transcript:
        "Examiner: What kind of food is popular where you live?\nCandidate: Well, the thing everyone eats where I'm from is a sort of thick, savoury pancake. It's made from rice flour, and it's cooked on a, what's the word, a big, flat iron pan, the kind street sellers put directly over a fire. You fill it with things like cabbage, spring onions and a little bit of meat, and then you fold it in half. It's a bit like an omelette, but crispier on the outside. Honestly, it's not exactly healthy, because it's fried in quite a lot of oil, but it's really cheap, so students basically live on it.\nExaminer: Do you ever cook it yourself?\nCandidate: I've tried, but I'm not very good at it. The difficult part is turning it over. You need a, I can't think of the word, a wide, flat tool with a long handle, and you have to slide it under the pancake really quickly. Mine usually breaks in half, so, in other words, I'd rather buy it from the experts.",
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "The speaker doesn't know two words: **griddle** (the big flat pan) and **spatula** (the flat tool). Notice what happens:\n\n- **A bridging phrase, then a description**: *a, what's the word, a big, flat iron pan, the kind street sellers put directly over a fire*. The pause lasts about one second, and the listener can picture it exactly.\n- **Several strategies at once**: material (*iron*), shape (*flat*, *wide*), purpose (*slide it under the pancake*) and a comparison (*a bit like an omelette, but crispier*).\n- **A general word plus detail**: *a sort of thick, savoury pancake* is clear even though the dish has its own name.\n- **The opposite for a softer meaning**: *not exactly healthy* sounds natural and avoids needing a stronger word.\n- **Examples instead of a category**: *things like cabbage, spring onions and a little bit of meat*.\n- **The answer never stops.** After each gap, the speaker carries on with the main idea. A listener would hardly notice that any words were missing.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Guess the word",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Description one. It's a kind of small room or box that carries people up and down between the floors of a building. You press a button to call it.\n\nDescription two. It's the person on a plane who serves food and drinks and looks after the passengers' safety.\n\nDescription three. It's not a hotel exactly. It's a cheap place where travellers, often students, sleep in shared rooms with bunk beds.\n\nDescription four. It's a feeling you get when you've been away from home for a long time and you really miss your family.\n\nDescription five. It's someone who doesn't like spending money, even when they have plenty of it.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Which word is the speaker describing?",
        instructions: "Listen to the five descriptions. Choose the word each speaker is trying to say. Good paraphrases make the word easy to guess.",
        questions: [
          {
            prompt: "Description 1",
            options: ["an escalator", "a corridor", "a lift", "a staircase"],
            answer: 2,
            explanation: "A small room or box that carries people between floors, and you press a button to call it: a lift (in American English, an elevator). An escalator is a moving staircase, not a room.",
          },
          {
            prompt: "Description 2",
            options: ["a pilot", "a flight attendant", "a travel agent", "a passenger"],
            answer: 1,
            explanation: "Serves food and drinks and looks after passengers' safety: a flight attendant.",
          },
          {
            prompt: "Description 3",
            options: ["a hostel", "a campsite", "a resort", "a guest house"],
            answer: 0,
            explanation: "Cheap, often students, shared rooms with bunk beds: a hostel.",
          },
          {
            prompt: "Description 4",
            options: ["jealous", "relieved", "bored", "homesick"],
            answer: 3,
            explanation: "Missing your family after a long time away from home: homesick.",
          },
          {
            prompt: "Description 5",
            options: ["wealthy", "stingy", "generous", "broke"],
            answer: 1,
            explanation: "Someone who doesn't like spending money even though they have plenty: stingy (in British English, also mean).",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Complete the paraphrases",
        instructions: "Complete each paraphrase with a phrase from the box. Use each phrase once.",
        text: "1. I've forgotten its name, but it's {{0}} Spanish soup that you eat cold.\n2. It's a tool that's {{1}} cut metal or wood into shapes.\n3. A scooter is {{2}} a motorbike, but it's smaller and easier to ride.\n4. The hotel was {{3}} luxurious. The shower was broken and the walls were really thin.\n5. I mean {{4}} checks the tickets on the train.\n6. It's {{5}} you go to get your car repaired.\n7. You need camping equipment, {{6}} a tent, a sleeping bag and a torch.",
        answers: [
          ["a kind of", "a type of", "a sort of"],
          ["used to", "designed to", "made to"],
          ["a bit like", "similar to", "like", "a little like", "quite like", "a lot like"],
          ["not exactly", "not very", "not particularly", "not really", "far from", "not at all", "not that"],
          ["the person who", "the person that", "someone who", "someone that", "the one who", "the one that"],
          ["the place where", "where", "somewhere", "the place", "a place where", "a place"],
          ["things like", "like", "such as", "for example", "for instance"],
        ],
        wordBank: ["a kind of", "used to", "a bit like", "not exactly", "the person who", "the place where", "things like"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "shadow",
        title: "Bridge and keep going",
        instructions: "Listen and repeat. Say the bridging phrase quickly and lightly, then give the description at a normal, confident pace.",
        voice: "uk",
        sentences: [
          "I can't think of the word, but it's the thing you use to charge your phone.",
          "It's a kind of bread that's flat and round, a bit like a pancake.",
          "She's not exactly the most organised person I know.",
          "We stayed in a, what's it called, a small wooden house in the forest.",
          "I mean things like plates, cups and chopping boards.",
          "In other words, it wasn't as easy as it looked.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "IELTS Part 2: a useful object",
        instructions: "You have one minute to make notes. Choose an object with parts or features you can't name in English, or pretend you have forgotten two key words. Describe them with the strategies from this lesson, and keep talking for up to two minutes.",
        prompt: "Describe a piece of equipment or a gadget in your home that you find useful.",
        cueCard: ["what it is", "how you use it", "how often you use it", "and explain why it is so useful to you"],
        prepSeconds: 60,
        speakSeconds: 120,
        modelAnswer:
          "I'd like to talk about a kitchen gadget that I use almost every day. I'm not sure what it's called in English, but it's a kind of electric pot for cooking rice. My parents gave it to me when I moved into my first flat about three years ago, and to be honest, I didn't think I'd use it much.\n\nIt's quite simple to use. There's a metal bowl inside, the part you take out to wash, and you put the rice and water in that. Then you close the lid and press one button on the front. There's a small hole on the top, a sort of little chimney, where the steam comes out while it's cooking. When the rice is ready, it makes a little musical sound, a bit like a phone notification, and then it keeps the rice warm for hours.\n\nI use it four or five times a week, mostly for dinner. Sometimes I even put vegetables in a, what do you call it, a plastic tray with holes in it that sits on top of the rice, so they cook in the steam at the same time.\n\nSo why is it so useful? Well, the main reason is time. I get home quite late, and I can start the rice, have a shower, and dinner's basically ready. On top of that, it's almost impossible to burn anything, which is important, because I'm not exactly a great cook. And it's cheap to run. In other words, it's probably the best present my parents have ever given me.",
        targetPhrases: ["I'm not sure what it's called", "a kind of", "a sort of", "a bit like", "what do you call it", "not exactly", "in other words"],
        checklist: [
          "When I didn't know a word, I described it instead of stopping.",
          "I used at least three different strategies (purpose, appearance, comparison, general word, opposite, examples).",
          "My bridging phrases were short, and I went straight back to my main idea.",
          "I didn't use any words from my own language.",
          "I covered every bullet point and spent the most time on the explain bullet.",
          "I kept talking for close to two minutes.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Part 2 cue cards often need specific vocabulary (a gadget, a dish, a sport, a building). In your minute of preparation, notice any words you don't know and plan a short description for them, so you don't stop when you reach that point in your talk.",
    },
    {
      exam: "toefl",
      body: "In Take an Interview you have only 45 seconds. A long search for one word can easily cost you five or ten seconds. Give the missing word a quick description and move on to your reason and example.",
    },
    {
      exam: "toeic",
      body: "In Describe a picture, you may see objects you can't name. Describe their position and purpose (*on the left, there's a machine for making coffee*) rather than stopping or leaving them out. You have only 30 seconds, so keep each description short.",
    },
  ],
  vocabulary: [
    { word: "paraphrase", meaning: "to express the same meaning using different words", example: "If you forget a word, paraphrase it and keep going.", topic: "education" },
    { word: "circumlocution", meaning: "describing something in several words because you don't know or can't remember the exact word", example: "Circumlocution helped her explain what she needed in the hardware shop.", topic: "academic", level: "C1" },
    { word: "on the tip of your tongue", meaning: "almost, but not quite, remembered", example: "His name is on the tip of my tongue.", topic: "everyday" },
    { word: "come up with", meaning: "to think of an idea, answer or word", example: "I couldn't come up with the right word, so I described it.", topic: "everyday" },
    { word: "in other words", meaning: "used to say something again in a different, often simpler, way", example: "He's never on time. In other words, he's unreliable.", topic: "everyday" },
    { word: "gadget", meaning: "a small, useful machine or tool", example: "My favourite kitchen gadget is a garlic press.", topic: "technology" },
    { word: "savoury (US savory)", meaning: "salty or spicy rather than sweet", example: "I prefer savoury snacks to sweet ones.", topic: "everyday" },
    { word: "crispy", meaning: "hard and pleasant to bite, especially on the outside", example: "The chips were hot and crispy.", topic: "everyday" },
    { word: "live on", meaning: "to eat a particular food most of the time", example: "During exams, I lived on toast and coffee.", topic: "everyday" },
    { word: "homesick", meaning: "sad because you are away from home and miss it", example: "I felt homesick during my first month abroad.", topic: "travel" },
    { word: "stingy", meaning: "not willing to spend or give money", example: "He's too stingy to buy anyone a coffee.", topic: "everyday" },
  ],
  keyPoints: [
    "Missing words are normal. What matters is that you keep going and make your meaning clear.",
    "Say what it's for, how it looks, who or where it is; use a general word plus detail; compare it; say the opposite; or give examples.",
    "Use one short bridging phrase (What's the word…, I can't think of the word, but…) and go straight back to your answer.",
    "Never switch to your own language or wait in silence, and don't ask the examiner for the word.",
    "Paraphrasing well is part of Lexical Resource: it shows skill, not weakness.",
  ],
};

export default lesson;
