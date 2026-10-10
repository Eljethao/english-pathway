import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-toeic-photographs",
  title: "TOEIC Part 1: photographs",
  summary:
    "Look at a picture, hear four statements and choose the one that best describes it. Learn the grammar of picture descriptions and the common traps: similar sounds, the wrong action and things you can't see.",
  skill: "listening",
  level: "B1",
  order: 9,
  minutes: 25,
  exams: [{ exam: "toeic", task: "Listening Part 1 – Photographs" }],
  objectives: [
    "Prepare for each picture by noticing the people, actions, objects and place",
    "Understand the difference between “is being cleaned” and “has been cleaned”",
    "Recognise the common traps: similar sounds, the right object with the wrong action, and things that are not in the picture",
  ],
  warmUp: [
    "Look around you now. Say three sentences about what you can see, for example “A cup is on the desk.”",
    "Which English words do you sometimes mix up because they sound similar?",
  ],
  learn: [
    {
      type: "text",
      title: "How Part 1 works",
      body: "In TOEIC Listening Part 1 there are 6 questions. For each one, you see a photo and hear four statements, A, B, C and D. The statements are **not printed**, and you hear them only once. You choose the statement that best describes the photo.\n\nIn this lesson, the photos are simple drawings, but the skill is the same.",
    },
    {
      type: "text",
      title: "Before the audio: look and predict",
      body: "You have a few seconds before the statements start. Use them well. Ask yourself four questions:\n\n1. **People**: Are there any people? One person or several?\n2. **Actions**: What are they doing? Sitting, pointing, pushing, reading?\n3. **Objects**: What things can you see? Where are they?\n4. **Place**: Where is it? An office, a park, a warehouse?\n\nIf there are no people, the correct answer will describe objects and where they are.",
    },
    {
      type: "table",
      title: "Grammar you will hear",
      headers: ["Form", "Meaning", "Example"],
      rows: [
        ["is / are + -ing", "an action happening now", "A worker **is pushing** a cart."],
        ["is / are **being** + past participle", "someone is doing this action **now**, so a person usually needs to be in the photo", "A window **is being cleaned**."],
        ["has / have **been** + past participle", "a finished action; you see the result", "The lights **have been turned off**."],
        ["There is / There are", "something is in a place", "**There are** some cups on the counter."],
        ["is / are + place", "where something is", "A lamp **is next to** the sofa."],
      ],
    },
    {
      type: "text",
      title: "The four common traps",
      body: "1. **Similar sounds.** A word sounds like something in the photo: *sheet* for *seat*, *car* for *cart*, *pan* for *pen*.\n2. **Right object, wrong action.** The object is in the photo, but the action is wrong. There is a ladder, but nobody is *climbing* it.\n3. **Not in the photo.** The statement talks about people when there are none, or uses *being* when nobody is doing the action.\n4. **Guessing.** The statement says what someone feels, wants or plans: “A person is *hoping* the bus comes soon.” You can't see that, so it is not the best description.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: grammar and guessing",
        instructions: "Read the description of each photo. Choose the statement that could be correct.",
        questions: [
          {
            prompt: "Photo: an empty office at night. The lights are off and the computers are switched off. There are no people.",
            options: [
              "The computers are being switched off.",
              "The computers have been switched off.",
              "A worker is turning off the lights.",
              "Someone is using a computer.",
            ],
            answer: 1,
            explanation: "There are no people, so “are being switched off”, “A worker is turning off …” and “Someone is using …” are wrong. “Have been switched off” describes the result you can see.",
          },
          {
            prompt: "Photo: a person on a ladder with a brush, painting a wall.",
            options: [
              "A wall is being painted.",
              "A person is painting a picture.",
              "The ladder is being carried.",
              "A wall is being built.",
            ],
            answer: 0,
            explanation: "Someone is painting the wall now, so “is being painted” is correct. B has the wrong object, and C and D have the wrong action.",
          },
          {
            prompt: "Photo: a person with an umbrella is standing at a bus stop. A bus is parked by the side of the road.",
            options: [
              "A person is hoping the bus comes soon.",
              "There is a bus at the side of the road.",
              "A person is getting off the bus.",
              "A person is buying an umbrella.",
            ],
            answer: 1,
            explanation: "B describes what you can see. A is a guess about feelings, C is the wrong action, and in D the umbrella is in the photo, but nobody is buying one.",
          },
        ],
      },
    },
    {
      type: "tip",
      exam: "toeic",
      body: "Look at the photo before the audio starts and think of the people, actions and objects you can see. As you hear each statement, decide quickly: wrong, or maybe. Keep the “maybe” statements in mind and choose the best one after D.",
    },
  ],
  model: [
    {
      type: "image",
      src: "/images/listening-toeic-photographs-warehouse.svg",
      alt: "A simple drawing of a warehouse. On the left, a tall set of metal shelves has three levels, and every level is full of cardboard boxes. On the right, a worker wearing a yellow hard hat and a yellow safety vest is standing behind a flat cart with four small wheels. The worker is holding the cart's handle with both hands and pushing it. There are four cardboard boxes on the cart. Nobody is near the shelves, and there is no car.",
      caption: "Model photo: a warehouse",
    },
    {
      type: "audio",
      title: "Model: four statements",
      voice: "us",
      cast: { narrator: "male" },
      transcript:
        "Statement A. A worker is lifting a box onto a shelf.\n\nStatement B. A worker is pushing a cart with some boxes on it.\n\nStatement C. The shelves are empty.\n\nStatement D. A worker is parking a car.",
    },
    {
      type: "text",
      title: "How a strong listener does it",
      body: "Before the audio: **one person**, a worker. **Action**: pushing a cart. **Objects**: boxes on the cart and full shelves. **Place**: a warehouse.\n\n- **A** uses the right objects (a box, a shelf), but the worker isn't lifting anything. Wrong action.\n- **B** matches the person, the action and the objects. **B is correct.**\n- **C** is the opposite of the photo: the shelves are full.\n- **D** is a similar-sound trap: *car* sounds like *cart*, and *parking* is close to *pushing a cart*.\n\nNotice that three of the four statements use words connected to the photo. Just hearing a word you expect is not enough. The whole statement must be true.",
    },
  ],
  practice: [
    {
      type: "image",
      src: "/images/listening-toeic-photographs-restaurant.svg",
      alt: "A simple drawing of an empty restaurant. There are no people in the picture. There are three wooden tables in a row, and on each table two chairs have been placed upside down, with their legs pointing up. On the wall there is a window with a sign that says CLOSED, and a round clock. In the corner on the right, there is a blue bucket with a mop in it.",
      caption: "Photo 1",
    },
    {
      type: "audio",
      title: "Photo 1: four statements",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Statement A. Some people are eating at a table.\n\nStatement B. Chairs have been placed on top of the tables.\n\nStatement C. A waiter is cleaning the floor.\n\nStatement D. Some chairs are being repaired.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Photo 1",
        instructions: "Look at Photo 1 and listen to the four statements. Then answer the questions.",
        questions: [
          {
            prompt: "Which statement best describes the picture?",
            options: ["Statement A", "Statement B", "Statement C", "Statement D"],
            answer: 1,
            explanation: "“Chairs have been placed on top of the tables.” The chairs are on the tables: this is the result of a finished action.",
          },
          {
            prompt: "Why is Statement C wrong?",
            options: [
              "There is no mop in the picture.",
              "There are no people in the picture.",
              "The waiter is cleaning a table, not the floor.",
              "The floor is already clean.",
            ],
            answer: 1,
            explanation: "There is a mop, but there is no waiter. The mop makes C sound possible, but nobody is in the room.",
          },
          {
            prompt: "Why is Statement D wrong?",
            options: [
              "“Are being repaired” means someone is repairing them now, but nobody is there.",
              "There are no chairs in the picture.",
              "The chairs are on the floor.",
              "The tables are being repaired, not the chairs.",
            ],
            answer: 0,
            explanation: "“Is/are being + past participle” means an action is happening now, so a person must be doing it. In an empty room, it is almost always wrong.",
          },
        ],
      },
    },
    {
      type: "image",
      src: "/images/listening-toeic-photographs-meeting.svg",
      alt: "A simple drawing of a meeting room. On the left, a large screen on the wall shows a bar chart with four blue bars that get taller from left to right. A person in a green top is standing in front of the screen and pointing at the chart with one arm. On the right, two people are sitting on chairs behind a wooden table and listening. One of them is writing in a notebook with a pen, and the other has an open laptop. Between them on the table there is a water jug and two glasses. Nobody is pouring water.",
      caption: "Photo 2",
    },
    {
      type: "audio",
      title: "Photo 2: four statements",
      voice: "us",
      cast: { narrator: "male" },
      transcript:
        "Statement A. Some people are standing in a line.\n\nStatement B. A person is pouring water into a glass.\n\nStatement C. All the chairs are empty.\n\nStatement D. A person is pointing at a chart on a screen.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Photo 2",
        instructions: "Look at Photo 2 and listen to the four statements. Then answer the questions.",
        questions: [
          {
            prompt: "Which statement best describes the picture?",
            options: ["Statement A", "Statement B", "Statement C", "Statement D"],
            answer: 3,
            explanation: "“A person is pointing at a chart on a screen.” The standing person points at the bar chart.",
          },
          {
            prompt: "Statement B talks about water and a glass. Why is it wrong?",
            options: [
              "There is no water in the picture.",
              "The glasses are on the floor.",
              "The objects are there, but nobody is pouring.",
              "The person is drinking, not pouring.",
            ],
            answer: 2,
            explanation: "This is the “right object, wrong action” trap. The jug and glasses are on the table, but nobody is pouring water.",
          },
          {
            prompt: "Why is Statement C wrong?",
            options: [
              "There are no chairs in the picture.",
              "Two people are sitting on the chairs.",
              "The chairs are on the table.",
              "The chairs are being moved.",
            ],
            answer: 1,
            explanation: "Two people are sitting at the table, so the chairs are not empty.",
          },
        ],
      },
    },
    {
      type: "image",
      src: "/images/listening-toeic-photographs-park.svg",
      alt: "A simple drawing of a park with green grass. On the left there are two trees. In the middle, a person is sitting on a wooden park bench and reading an open book. On the right, there is a tall lamp post, and a red bicycle is standing against it, with its back wheel touching the post. Nobody is riding the bicycle, and nobody is cutting the trees. There is no water or sand.",
      caption: "Photo 3",
    },
    {
      type: "audio",
      title: "Photo 3: four statements",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Statement A. A person is riding a bicycle.\n\nStatement B. A person is reading on a beach.\n\nStatement C. A bicycle is leaning against a lamp post.\n\nStatement D. Some trees are being cut down.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Photo 3",
        instructions: "Look at Photo 3 and listen to the four statements. Then answer the questions.",
        questions: [
          {
            prompt: "Which statement best describes the picture?",
            options: ["Statement A", "Statement B", "Statement C", "Statement D"],
            answer: 2,
            explanation: "“A bicycle is leaning against a lamp post.” The bicycle stands against the post, and nobody is riding it.",
          },
          {
            prompt: "Why is Statement B wrong?",
            options: [
              "The person is not reading.",
              "“Beach” sounds like “bench”, but the person is on a bench in a park.",
              "The person is lying down.",
              "There are two people on the bench.",
            ],
            answer: 1,
            explanation: "This is a similar-sound trap. The person is reading, but on a bench, not on a beach.",
          },
          {
            prompt: "Which trap does Statement A use?",
            options: [
              "Right object, wrong action",
              "A word that sounds similar",
              "A guess about feelings",
              "The wrong number of people",
            ],
            answer: 0,
            explanation: "There is a bicycle in the photo, but nobody is riding it. The object is right and the action is wrong.",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio: similar sounds",
      voice: "us",
      cast: { narrator: "male" },
      transcript:
        "Number one. A lamp has been turned on in the corner.\n\nNumber two. Some files are on the shelf.\n\nNumber three. A worker is walking along the platform.\n\nNumber four. Some glasses have been left on the counter.\n\nNumber five. A plant is being watered.\n\nNumber six. A ship is leaving the harbour.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "Which word did you hear?",
        instructions: "Listen to six statements. Choose the word you hear in each one.",
        questions: [
          { prompt: "Statement 1", options: ["ramp", "lamp", "lamb"], answer: 1, explanation: "“A lamp has been turned on in the corner.”" },
          { prompt: "Statement 2", options: ["piles", "fires", "files"], answer: 2, explanation: "“Some files are on the shelf.”" },
          { prompt: "Statement 3", options: ["walking", "working", "waking"], answer: 0, explanation: "“A worker is walking along the platform.” Walking has no “r” sound." },
          { prompt: "Statement 4", options: ["grasses", "glasses", "classes"], answer: 1, explanation: "“Some glasses have been left on the counter.”" },
          { prompt: "Statement 5", options: ["plan", "plate", "plant"], answer: 2, explanation: "“A plant is being watered.” Listen for the “t” at the end." },
          { prompt: "Statement 6", options: ["sheep", "ship", "chip"], answer: 1, explanation: "“A ship is leaving the harbour.” Ship has a short vowel sound; sheep has a long one." },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "Part 1 has 6 questions. You hear four statements about each photo, and nothing is printed, so you can't read the statements again. Decide “wrong” or “maybe” after each one, and choose the best “maybe” at the end.",
    },
    {
      exam: "toeic",
      body: "If there are no people in the photo, be careful with statements about people and with “is being + past participle”. Statements like “The lights have been turned off” or “There are some cups on the counter” are much more likely to be correct.",
    },
    {
      exam: "toeic",
      body: "The correct statement doesn't have to describe the main thing in the photo. It can describe a small detail, such as a bicycle in the background, as long as it is completely true.",
    },
  ],
  vocabulary: [
    { word: "cart", meaning: "a small vehicle with wheels that you push (trolley in UK English)", example: "A worker is pushing a cart full of boxes.", topic: "work" },
    { word: "warehouse", meaning: "a large building where goods are stored", example: "The boxes are kept in a warehouse.", topic: "work" },
    { word: "shelf", meaning: "a flat board on a wall or in a cupboard for putting things on (plural: shelves)", example: "The shelves are full of boxes.", topic: "everyday" },
    { word: "stack", meaning: "to put things on top of each other", example: "The chairs have been stacked on the tables.", topic: "everyday" },
    { word: "lean against", meaning: "to rest on something so it holds you up", example: "A bicycle is leaning against the wall.", topic: "everyday" },
    { word: "lamp post", meaning: "a tall post with a light at the top, in a street or park", example: "Someone has left a bike by the lamp post.", topic: "everyday" },
    { word: "point at", meaning: "to show something by holding your finger or arm towards it", example: "The speaker is pointing at a chart.", topic: "work" },
    { word: "pour", meaning: "to make a liquid flow out of a container", example: "A waiter is pouring water into a glass.", topic: "everyday" },
    { word: "mop", meaning: "a tool with a long handle that you use to wash floors", example: "There's a mop and a bucket in the corner.", topic: "everyday" },
    { word: "safety vest", meaning: "a brightly coloured jacket without sleeves that workers wear so others can see them", example: "Everyone in the warehouse wears a safety vest.", topic: "work" },
  ],
  keyPoints: [
    "Before the statements, look at the photo: people, actions, objects and place.",
    "“Is being + past participle” means someone is doing the action now. If there are no people, it is almost always wrong.",
    "Watch out for similar sounds (bench and beach), the right object with the wrong action, and guesses about feelings.",
    "The whole statement must be true. Hearing a word you expect is not enough.",
  ],
};

export default lesson;
