import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-tours-guided-talks",
  title: "Tours and guided talks",
  summary:
    "Follow a guide on a tour or at an event: use the plan at the start to keep your place, catch times and places on a schedule, and tell the difference between what a place used to be and what it is now.",
  skill: "listening",
  level: "B1",
  order: 11,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Listening Part 2" },
    { exam: "toeic", task: "Listening Part 4 – Talks" },
  ],
  objectives: [
    "Use the speaker's plan and signposts to follow a tour from place to place",
    "Complete an event schedule with times, events and places",
    "Match places with what visitors can do there, and avoid “then and now” traps",
    "Answer multiple-choice questions where you choose TWO answers",
  ],
  warmUp: [
    "Have you ever been on a guided tour of a museum, a factory or an old town? What did the guide talk about?",
    "What kind of rules do guides usually give visitors?",
  ],
  learn: [
    {
      type: "text",
      title: "The shape of a guided talk",
      body: "Tours and event talks usually follow this order:\n\n1. **Welcome**: who the speaker is and where you are.\n2. **The plan**: “We'll start here, then walk to the river, and finish at the castle.”\n3. **Each stop**: what you can see or do there.\n4. **Rules and safety**: “Please don't …”, “You must …”.\n5. **Times and meeting points**: “We'll meet back here at three.”\n\nThe plan at the start is very useful. It tells you the order of the places, and the questions usually follow the same order.",
    },
    {
      type: "table",
      title: "Tour signposts",
      headers: ["The speaker is …", "What you might hear"],
      rows: [
        ["moving to a new place", "Our next stop is … / From here, we'll head to … / Before we move on …"],
        ["pointing something out", "On your left, you can see … / In front of us is …"],
        ["talking about the past", "This used to be … / Originally, it was … / Until 1990, …"],
        ["talking about now", "Today, it's … / These days … / Now it's used as …"],
        ["giving a rule", "Please don't … / You aren't allowed to … / Make sure you …"],
        ["giving a time or meeting point", "You'll have about twenty minutes. / We'll meet back here at …"],
      ],
    },
    {
      type: "text",
      title: "Then and now",
      body: "Guides love history, so they often say what a place **used to be** and what it **is now**. Exam questions usually ask about **now**, and the past use is a trap.\n\n“The old fire station used to have three fire engines. **Now** it's a restaurant.” → What can visitors do there? Have a meal, not see fire engines.\n\nIn the same way, listen for changes to this year's plan: “Last year it was in the library, but **this year** it's in the school hall.”",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: what is the speaker doing?",
        instructions: "Match each sentence from a tour with what the speaker is doing. There is one extra option.",
        left: [
          "Our next stop is the old bridge.",
          "This building used to be a school.",
          "Please don't take photos inside.",
          "We'll meet back here at three.",
          "On your right, you can see the town hall.",
        ],
        right: [
          "giving a rule",
          "pointing something out",
          "giving a price",
          "moving to a new place",
          "giving a time and meeting point",
          "talking about the past",
        ],
        answer: [3, 5, 0, 4, 1],
      },
    },
    {
      type: "tip",
      exam: "ielts",
      body: "IELTS Listening Part 2 is one speaker talking about an everyday topic, such as local facilities or an event, often with multiple choice, matching or map labelling. Some multiple-choice questions ask you to choose TWO answers, so read the instruction carefully.",
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model talk: a walking tour",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Good morning, everyone, and welcome to the Old Town walking tour. I'm Kate, and I'll be your guide for the next ninety minutes. We'll start here in the market square, then walk down to the river, and we'll finish at the castle.\n\nFirst, the building in front of us. It looks like a museum, but it used to be the town's main post office. Today, it's the tourist information centre, and you can pick up free maps inside. From here, we'll head to the river. Please stay together when we cross the main road, because it's very busy.",
    },
    {
      type: "text",
      title: "How a strong listener does it",
      body: "1. **Welcome**: Kate, a guide, on a ninety-minute walking tour.\n2. **The plan**: market square → river → castle. Now the listener knows the order of the questions.\n3. **The first stop**: “It looks like a museum, but it used to be the town's main post office. Today, it's the tourist information centre.” Three uses are mentioned, but only one is true now: **tourist information centre**.\n4. **Moving on**: “From here, we'll head to the river.” This signpost tells you the next questions will be about the river.\n5. **Rule**: stay together when crossing the main road.\n\nA question like “What is the building used for now?” has two traps: *museum* (it only looks like one) and *post office* (the past).",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice audio 1: a food festival",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Hello, everyone, and welcome to the Greenhill Food Festival. Here's the plan for today.\n\nAt ten thirty, there's a cooking demonstration in the big tent, with a local chef who'll show you how to make fresh pasta. At twelve, the children's baking competition starts in the school hall. Please note, it was in the library last year, but it's moved because we needed more space. Lunch is served from twelve until two in the main field, and all the food stalls take cards.\n\nAt half past two, there's a talk on growing your own vegetables, in the garden next to the car park. And the day finishes at four with live music by the river. If it rains, the music will move into the big tent.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Schedule completion",
        instructions: "Listen and complete the festival schedule. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        text: "Greenhill Food Festival: today's schedule\n\n10.30: cooking demonstration (how to make fresh {{0}}), in the big tent\n{{1}}: children's baking competition, in the school {{2}}\n12.00 to 2.00: lunch, in the main {{3}}\n2.30: talk on growing your own {{4}}, in the garden next to the {{5}}\n{{6}}: live music by the river (if it rains: in the {{7}})",
        answers: [
          ["pasta"],
          ["12", "12.00", "12:00", "twelve", "12 noon", "noon", "12 pm", "12pm", "midday"],
          ["hall"],
          ["field"],
          ["vegetables"],
          ["car park"],
          ["4", "4.00", "4:00", "four", "4 pm", "4pm", "4.00 pm", "4:00 pm", "4 p.m.", "16:00", "16.00"],
          ["big tent", "tent"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 2: a visit to Ashby Hall",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Right, before you start exploring, let me tell you about the different parts of Ashby Hall.\n\nIn the library, you can see the family's collection of old maps. Please don't touch the books, though. Next is the kitchen, which is my favourite room. Volunteers bake bread there every morning, and you can try some for free.\n\nUpstairs, the long gallery used to be where the family took exercise when it rained. Now it's where we show paintings by local artists, and they're all for sale. Outside, the walled garden has plants from all over the world, and you can buy seeds in the small shop by the gate.\n\nFinally, the old stables. There are no horses now, of course. It's our café, and it's the best place for a cup of tea at the end of your visit.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Matching: what can visitors do?",
        instructions: "Listen to the guide. What can visitors do in each part of Ashby Hall today? Choose the correct letter. There are three extra options.",
        left: ["the library", "the kitchen", "the long gallery", "the walled garden", "the old stables"],
        right: [
          "see horses",
          "look at old maps",
          "buy paintings",
          "try some free food",
          "watch a short film",
          "buy seeds",
          "do some exercise",
          "have a hot drink",
        ],
        answer: [1, 3, 2, 5, 7],
      },
    },
    {
      type: "audio",
      title: "Practice audio 3: a nature reserve",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Welcome to Marsh End Nature Reserve. My name's Peter, and I'm one of the wardens here. Just a few things before you set off.\n\nThere are three walking paths. The red path is the shortest, about twenty minutes, and it's flat, so it's good for families with buggies. The blue path goes up the hill and takes about an hour. From the top, you get a wonderful view of the coast. The green path goes through the woods, but it's closed this week, because a tree fell during the storm.\n\nThe best place to see birds is the hide by the lake, early in the morning. Please keep dogs on a lead everywhere, and don't feed the ducks, because bread is bad for them. Oh, and the visitor centre closes at four today, not five, because the staff have a training session.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Multiple choice, including choose TWO",
        instructions: "Listen to the warden. For questions 1 and 3, choose TWO answers. For questions 2 and 4, choose ONE answer.",
        questions: [
          {
            prompt: "1. Which TWO things does Peter say about the red path?",
            options: [
              "It is the shortest path.",
              "It goes through the woods.",
              "It is flat.",
              "It has a view of the coast.",
              "It is closed this week.",
            ],
            answer: [0, 2],
            explanation: "“The red path is the shortest … and it's flat.” The view is from the blue path, and the green path goes through the woods and is closed.",
          },
          {
            prompt: "2. Why is the green path closed?",
            options: ["It is flooded.", "Birds are nesting there.", "A tree fell in a storm.", "It is being repaired."],
            answer: 2,
            explanation: "“It's closed this week, because a tree fell during the storm.”",
          },
          {
            prompt: "3. Which TWO things are visitors asked not to do?",
            options: [
              "feed the ducks",
              "let their dogs off the lead",
              "walk on the blue path",
              "visit the lake early in the morning",
              "take buggies on the paths",
            ],
            answer: [0, 1],
            explanation: "“Please keep dogs on a lead everywhere, and don't feed the ducks.” Early morning is recommended, and buggies are fine on the red path.",
          },
          {
            prompt: "4. Why does the visitor centre close early today?",
            options: [
              "The staff have a training session.",
              "There are not many visitors.",
              "The weather is bad.",
              "It closes at four every day.",
            ],
            answer: 0,
            explanation: "“The visitor centre closes at four today, not five, because the staff have a training session.”",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 4: a factory tour",
      voice: "us",
      cast: { narrator: "female" },
      transcript:
        "Good afternoon, and welcome to Brightwater Juice Company. I'm Carla, and I'll be showing you around our factory today. The tour takes about forty-five minutes.\n\nFirst, we'll visit the room where the fruit is washed and sorted. Then we'll see the bottling line, where we fill about two thousand bottles an hour. Before we go in, please put on a hairnet and safety glasses. You'll find them in the box next to the door. And for safety reasons, phones must stay in your bags during the tour. At the end, we'll stop at our shop, where everyone on today's tour gets ten per cent off.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "TOEIC-style questions",
        instructions: "Listen to the talk. Choose the best answer to each question.",
        questions: [
          {
            prompt: "Where does the speaker most likely work?",
            options: ["At a fruit farm", "At a drinks factory", "At a supermarket", "At a restaurant"],
            answer: 1,
            explanation: "Carla welcomes the group to “Brightwater Juice Company” and talks about “our factory” and “the bottling line”.",
          },
          {
            prompt: "How long does the tour take?",
            options: ["About 15 minutes", "About 45 minutes", "About an hour", "About two hours"],
            answer: 1,
            explanation: "“The tour takes about forty-five minutes.”",
          },
          {
            prompt: "What are the listeners asked to do before they go in?",
            options: [
              "Wash their hands",
              "Buy a ticket at the shop",
              "Put on protective items",
              "Switch off their phones",
            ],
            answer: 2,
            explanation: "“Please put on a hairnet and safety glasses.” Phones must stay in bags, but nobody says they must be switched off.",
          },
          {
            prompt: "What does the speaker say about the shop?",
            options: [
              "It is next to the door.",
              "It sells fresh fruit.",
              "It closes at the end of the tour.",
              "Visitors on the tour get a discount.",
            ],
            answer: 3,
            explanation: "“Everyone on today's tour gets ten per cent off.”",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In Part 2, the speaker often gives a plan at the start (“We'll start here, then …”). Write the places in order in the margin. When you hear a signpost such as “Our next stop is …”, move to the next question.",
    },
    {
      exam: "ielts",
      body: "In matching tasks, the questions follow the order of the audio, but the list of options usually does not. Read all the options before you listen, and cross them out as you use them. Watch out for options about the past (“used to be”) when the question is about now.",
    },
    {
      exam: "toeic",
      body: "Part 4 talks each have three questions. In tour talks, typical questions are: Where does the speaker work? What are the listeners asked to do? What will happen at the end of the tour? Rules and safety instructions often come just before the group goes in somewhere.",
    },
  ],
  vocabulary: [
    { word: "guide", meaning: "a person whose job is to show visitors around a place", example: "Our guide told us the history of the castle.", topic: "travel" },
    { word: "head to", meaning: "to go towards a place", example: "From here, we'll head to the river.", topic: "travel" },
    { word: "used to be", meaning: "was in the past, but is not now", example: "The café used to be a stable for horses.", topic: "travel" },
    { word: "demonstration", meaning: "an event where someone shows how to do something", example: "There's a cooking demonstration at ten thirty.", topic: "everyday" },
    { word: "stall", meaning: "a table or small shop where things are sold, often outside", example: "All the food stalls take cards.", topic: "business" },
    { word: "for sale", meaning: "available to buy", example: "The paintings in the gallery are all for sale.", topic: "business" },
    { word: "warden", meaning: "a person whose job is to look after a place, such as a nature reserve", example: "The warden told us to keep our dogs on a lead.", topic: "environment" },
    { word: "buggy", meaning: "a light chair on wheels for pushing a small child (stroller in US English)", example: "The red path is flat, so it's good for buggies.", topic: "everyday" },
    { word: "hide", meaning: "a small hut where people can watch birds without being seen", example: "We watched the birds from the hide by the lake.", topic: "environment" },
    { word: "safety glasses", meaning: "strong glasses that protect your eyes at work", example: "Please put on safety glasses before you enter the factory.", topic: "work" },
  ],
  keyPoints: [
    "Guided talks usually go: welcome, plan, each stop, rules, times and meeting points.",
    "The plan at the start tells you the order of the places, and the questions follow that order.",
    "Signposts like “Our next stop is …” tell you to move to the next question.",
    "Questions usually ask what a place is like now, so “used to be” information is often a trap.",
    "In “choose TWO” questions, check that both of your answers are true. Options that are true of a different place are traps.",
  ],
};

export default lesson;
