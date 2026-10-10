import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-describing-a-picture",
  title: "Describing a picture",
  summary:
    "Describe a photo clearly in 30 seconds: say what the scene is, who is doing what, where things are, and what you think is happening.",
  skill: "speaking",
  level: "B1",
  order: 4,
  minutes: 15,
  exams: [
    { exam: "toeic", task: "Speaking – Describe a picture" },
    { exam: "toeic", task: "Writing – Write a sentence based on a picture" },
    { exam: "toeic", task: "Listening Part 1 – Photographs" },
  ],
  objectives: [
    "Organise a picture description in four simple steps",
    "Use the present continuous to describe actions",
    "Say where people and things are with phrases like on the left and in the background",
  ],
  warmUp: [
    "Think of the last photo you took on your phone. Where were you, and who or what was in it?",
    "What words can you use to say where something is in a room?",
  ],
  learn: [
    {
      type: "text",
      title: "The task",
      body: "In TOEIC Speaking, you see a photo. You have **45 seconds to prepare** and **30 seconds to speak**. Thirty seconds is short, so you can't describe everything. A clear plan helps you say the most important things without stopping.",
    },
    {
      type: "text",
      title: "Four steps",
      body: "1. **The big picture**: what kind of place is it? *This picture shows a busy café.* / *This is a picture of an office.*\n2. **The main people and actions**: who is doing what? Use the present continuous: *A woman is using a laptop.*\n3. **Other details and where they are**: *On the left, there's a counter. In the background, I can see a window.*\n4. **A guess or impression**: *It looks like a weekend morning.* / *They seem relaxed.* / *Maybe they're waiting for a friend.*",
    },
    {
      type: "table",
      title: "Saying where things are",
      headers: ["Position in the picture", "Position next to other things"],
      rows: [
        ["in the foreground (near you)", "next to / beside the window"],
        ["in the background (far away)", "behind the counter"],
        ["on the left / on the right", "in front of the building"],
        ["in the middle / in the centre", "opposite each other"],
        ["in the top left corner", "between the chair and the door"],
      ],
    },
    {
      type: "example",
      title: "Useful sentence patterns",
      items: [
        "There **is** a plant in the corner. / There **are** two cups on the table.",
        "A man **is reading** a newspaper. / Two people **are sitting** at a table.",
        "**On the right**, a woman **is typing** on her laptop.",
        "**It looks like** a sunny day. / **They seem to be** colleagues.",
        "**I think** / **Maybe** they're having a short break.",
      ],
    },
    {
      type: "tip",
      exam: "toeic",
      body: "Use the present continuous (*is/are + -ing*) for actions in the photo. *A man reads a newspaper* sounds strange here; *A man is reading a newspaper* is correct.",
    },
  ],
  model: [
    {
      type: "image",
      src: "/images/speaking-describing-a-picture-cafe.svg",
      alt: "A simple drawing of a café. On the left, a barista in a blue shirt and a white apron is standing behind a wooden counter and making coffee with a coffee machine. There are two takeaway cups on the counter. A customer in an orange shirt is standing at the counter, holding out a red card to pay. Above the coffee machine there is a dark menu board, and a clock on the wall between the menu board and the window shows nine o'clock. On the right, a large window shows a tree and the sun outside. In front of the window, a woman with long red-brown hair and a pink top is sitting at a round table and typing on a laptop. A man in a green shirt is sitting opposite her and reading a newspaper. There is a cup of coffee on the table and a plant in a pot in the corner.",
      caption: "A café in the morning",
    },
    {
      type: "audio",
      title: "Model answer (about 30 seconds)",
      transcript:
        "This picture shows a busy café, probably in the morning. On the left, a barista is making coffee behind the counter, and a customer is standing at the counter and paying with a card. On the right, two people are sitting at a round table next to a big window. The woman is typing on her laptop, and the man opposite her is reading a newspaper. It looks like a relaxed, sunny day.",
      cast: { narrator: "female" },
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "- **Step 1**: the first sentence names the place: *This picture shows a busy café.* The speaker adds a guess (*probably in the morning*) because the clock shows nine o'clock.\n- **Step 2**: the main people and their actions, all in the present continuous: *is making*, *is standing*, *is paying*, *are sitting*, *is typing*, *is reading*.\n- **Step 3**: position words organise the description: *On the left… On the right… next to a big window… opposite her.* The listener can follow easily.\n- **Step 4**: a short impression at the end: *It looks like a relaxed, sunny day.*\n\nNotice what the speaker does **not** do: describe the menu board, the plant or the coffee cups. With only 30 seconds, the people and actions matter most.",
    },
  ],
  practice: [
    {
      type: "image",
      src: "/images/speaking-describing-a-picture-cafe.svg",
      alt: "A simple drawing of a café. On the left, a barista in a blue shirt and a white apron is standing behind a wooden counter and making coffee with a coffee machine. There are two takeaway cups on the counter. A customer in an orange shirt is standing at the counter, holding out a red card to pay. Above the coffee machine there is a dark menu board, and a clock on the wall between the menu board and the window shows nine o'clock. On the right, a large window shows a tree and the sun outside. In front of the window, a woman with long red-brown hair and a pink top is sitting at a round table and typing on a laptop. A man in a green shirt is sitting opposite her and reading a newspaper. There is a cup of coffee on the table and a plant in a pot in the corner.",
      caption: "Use the café picture for Practice 1 and 2.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "gap",
        title: "Practice 1: where is it?",
        instructions: "Look at the café picture. Complete each sentence with a word or phrase from the box. Use each one once.",
        text: "1. The menu board is {{0}} the coffee machine.\n2. A clock is on the wall {{1}} the menu board and the window.\n3. The barista is standing {{2}} the counter.\n4. The coffee machine is {{3}} the counter.\n5. A customer is standing {{4}} the counter and paying.\n6. The man at the table is sitting {{5}} the woman.\n7. There is a tree {{6}} the window.\n8. There is a plant {{7}} on the right.",
        answers: [
          ["above"],
          ["between"],
          ["behind", "at"],
          ["on"],
          ["at"],
          ["opposite"],
          ["outside"],
          ["in the corner"],
        ],
        wordBank: ["above", "between", "behind", "on", "at", "opposite", "outside", "in the corner"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Practice 2: which sentence is true?",
        instructions: "Look at the café picture again. Choose the sentence that describes it correctly.",
        questions: [
          {
            prompt: "Which sentence is true about the woman at the table?",
            options: [
              "She's typing on a laptop.",
              "She's reading a newspaper.",
              "She's standing at the counter.",
              "She's talking on the phone.",
            ],
            answer: 0,
            explanation: "The woman in the pink top has her hand on a laptop. The man opposite her has the newspaper.",
          },
          {
            prompt: "Which sentence is true about the barista?",
            options: [
              "The barista is cleaning a table.",
              "The barista is using a coffee machine.",
              "The barista is sitting by the window.",
              "The barista is writing on the menu board.",
            ],
            answer: 1,
            explanation: "The barista is behind the counter with one hand on the coffee machine.",
          },
          {
            prompt: "Which sentence is true about the man at the table?",
            options: [
              "He's paying for his coffee.",
              "He's looking at a laptop.",
              "He's holding a newspaper.",
              "He's standing next to the plant.",
            ],
            answer: 2,
            explanation: "The man in the green shirt is sitting and holding a newspaper. The man paying is the customer at the counter.",
          },
          {
            prompt: "What time is it, most likely?",
            options: ["About nine o'clock in the morning", "About three o'clock in the afternoon", "About midnight"],
            answer: 0,
            explanation: "The short hand of the clock points to nine and the long hand to twelve. The sun is shining, so it isn't night.",
          },
          {
            prompt: "Which sentence is best for describing the picture?",
            options: ["A man reads a newspaper.", "A man is reading a newspaper.", "A man read a newspaper."],
            answer: 1,
            explanation: "Use the present continuous for actions happening in the picture.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "order",
        mode: "lines",
        title: "Practice 3: put the description in order",
        instructions: "This is a description of a different photo: a street market. Put the sentences in the best order, using the four steps.",
        items: [
          "This picture shows an outdoor market on a sunny day.",
          "In the middle, a woman is choosing some apples from a fruit stall.",
          "The man behind the stall is putting them into a paper bag.",
          "In the background, there are more stalls and lots of people walking around.",
          "It looks like a busy weekend morning.",
        ],
      },
    },
    {
      type: "image",
      src: "/images/speaking-describing-a-picture-office.svg",
      alt: "A simple drawing of an office. On the left, a man in a dark blue jacket is standing next to a whiteboard and pointing at a bar chart. The chart has three blue bars that get taller from left to right. In the middle, three colleagues are sitting behind a long wooden meeting table and listening to him. The woman on the left has a laptop open in front of her, the man in the middle has some papers, and the woman on the right has a coffee mug. On the right, a woman in an orange top is sitting at a separate desk with a computer and talking on the phone. Behind her, a large window shows tall city buildings. A clock on the wall shows ten o'clock, and there is a plant in a pot in the left corner.",
      caption: "Use this picture for Practice 4.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "Practice 4: TOEIC Describe a picture",
        instructions: "Look at the office picture. You have 45 seconds to prepare and 30 seconds to speak. Follow the four steps.",
        prompt: "Describe the picture in as much detail as you can.",
        prepSeconds: 45,
        speakSeconds: 30,
        modelAnswer:
          "This is a picture of a meeting in an office. On the left, a man is standing next to a whiteboard and pointing at a bar chart. The bars go up, so maybe sales are going well. In the middle, three colleagues are sitting at a table and listening to him. On the right, a woman is talking on the phone at her desk. It looks like a busy morning.",
        targetPhrases: ["This is a picture of", "On the left", "is standing", "In the middle", "are sitting", "On the right", "It looks like"],
        checklist: [
          "My first sentence said what kind of place it is.",
          "I described the main people and what they are doing.",
          "I used the present continuous (is standing, are listening).",
          "I used position words (on the left, in the middle, behind).",
          "I finished with a guess or impression (It looks like…, Maybe…).",
          "I spoke for most of the 30 seconds without long pauses.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toeic",
      body: "In Describe a picture, use the 45 seconds of preparation to choose the place, two or three main actions and your final impression. Don't write full sentences in your head; just remember the order of your four steps.",
    },
    {
      exam: "toeic",
      body: "In Writing – Write a sentence based on a picture, you get two words or phrases (for example *woman / laptop*) and must use both in one correct sentence about the photo. The same present continuous and position phrases work well: *A woman is working on a laptop next to the window.*",
    },
    {
      exam: "toeic",
      body: "In Listening Part 1 – Photographs, wrong answers often use words you can see in the photo but with the wrong action (*He's drinking a coffee* when he is reading). Focus on what each person is **doing**.",
    },
  ],
  vocabulary: [
    { word: "foreground", meaning: "the part of a picture that is nearest to you", example: "In the foreground, there's a small dog.", topic: "everyday" },
    { word: "background", meaning: "the part of a picture that is furthest away", example: "You can see mountains in the background.", topic: "everyday" },
    { word: "barista", meaning: "a person who makes and serves coffee in a café", example: "The barista is making a cappuccino.", topic: "work" },
    { word: "counter", meaning: "a long, flat surface in a shop or café where customers are served", example: "Please pay at the counter.", topic: "everyday" },
    { word: "opposite", meaning: "on the other side, facing someone or something", example: "She's sitting opposite her friend.", topic: "everyday" },
    { word: "colleague", meaning: "a person you work with", example: "Three colleagues are having a meeting.", topic: "work" },
    { word: "whiteboard", meaning: "a white board you write on with special pens", example: "The teacher wrote the answers on the whiteboard.", topic: "education" },
    { word: "point at", meaning: "to show something by holding your finger or hand towards it", example: "He's pointing at the chart.", topic: "everyday" },
    { word: "stall", meaning: "a table or small shop where things are sold, often outside", example: "She bought some apples from a fruit stall.", topic: "business" },
    { word: "it looks like", meaning: "a phrase for making a guess about what you see", example: "It looks like they're on holiday.", topic: "everyday" },
  ],
  keyPoints: [
    "Follow four steps: the place, the main actions, details with positions, and a final guess.",
    "Use the present continuous for actions: is/are + -ing.",
    "Use position phrases: on the left/right, in the background, next to, opposite.",
    "In 30 seconds, focus on people and actions, not every small object.",
  ],
};

export default lesson;
