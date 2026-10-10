import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-predicting-answers",
  title: "Predicting answers before you listen",
  summary:
    "Use the seconds before the audio starts to predict the type of word, the meaning and the likely paraphrases you will hear, so you know exactly what you are listening for.",
  skill: "listening",
  level: "B2",
  order: 1,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Listening Part 1" },
    { exam: "toeic", task: "Listening Part 3 – Conversations" },
    { exam: "toefl", task: "Listening – Conversation" },
  ],
  objectives: [
    "Use preview time to predict the word type and kind of information each gap needs",
    "Use the grammar and context around a gap to narrow down possible answers",
    "Anticipate paraphrases of key words in the questions",
    "Read questions and graphics before a conversation so you know what to listen for",
  ],
  warmUp: [
    "Before you listen to a weather forecast, which words do you expect to hear? Make a quick list.",
    "When you read a question before listening, what do you look at first, and why?",
  ],
  learn: [
    {
      type: "text",
      title: "Why prediction works",
      body: "Listening is much easier when you know what you are waiting for. In IELTS you are given time to read each group of questions before you hear the recording, and in TOEIC Parts 3 and 4 the questions are printed in front of you. Strong candidates use every second of this time to predict.\n\nFor each gap or question, predict three things:\n\n1. **Word type**: noun, verb, adjective or number?\n2. **Meaning**: a price, a day, a material, a job, a place?\n3. **Form**: singular or plural? Does *a* or *an* before the gap mean it starts with a consonant sound or a vowel sound?",
    },
    {
      type: "table",
      title: "From gap to prediction",
      headers: ["Gap", "Clue", "Prediction"],
      rows: [
        ["Cost per person: £___", "the £ sign", "a number: a price"],
        ["Bring a pair of ___", "“a pair of”", "a plural noun, e.g. gloves, boots, trousers"],
        ["The tour starts at the ___ entrance", "“the ___ entrance”", "an adjective or direction, e.g. main, north, side"],
        ["Most visitors arrive by ___", "“arrive by”", "a means of transport, e.g. train, coach, ferry"],
        ["Members get a ___ discount", "“a ___ discount”", "a percentage (e.g. 10%) or a word that describes the discount (e.g. student, special)"],
        ["The course is aimed at people with no ___", "“no” + noun", "probably an uncountable noun (e.g. experience) or a plural noun (e.g. qualifications)"],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: what kind of answer?",
        instructions: "You haven't heard anything yet. Read each gap and choose the best prediction.",
        questions: [
          {
            prompt: "Participants should wear comfortable ___.",
            options: ["a singular noun", "a plural noun, probably clothes or shoes", "a verb", "an adjective"],
            answer: 1,
            explanation: "After “wear comfortable” we need a noun. With no *a* before it, it is almost certainly plural or uncountable: shoes, trainers, clothes.",
          },
          {
            prompt: "The museum was built in the ___ century.",
            options: ["a material, such as stone", "a person's name", "an ordinal number, such as eighteenth", "a plural noun"],
            answer: 2,
            explanation: "“The ___ century” needs an ordinal number: the 18th century, the nineteenth century.",
          },
          {
            prompt: "Applications must be submitted no later than ___.",
            options: ["a date or time", "a person", "a place", "an adjective"],
            answer: 0,
            explanation: "“No later than” introduces a deadline, so expect a date or time.",
          },
          {
            prompt: "The main problem with the old system was that it was too ___.",
            options: ["a noun", "a number", "a verb ending in -ing", "an adjective, probably negative"],
            answer: 3,
            explanation: "“Too” is followed by an adjective, and “problem” suggests a negative one: slow, expensive, complicated.",
          },
          {
            prompt: "Children under ___ can enter for free.",
            options: ["a price", "a number: an age", "a job", "a day of the week"],
            answer: 1,
            explanation: "“Children under …” refers to age, so expect a number such as 5 or 12.",
          },
        ],
      },
    },
    {
      type: "text",
      title: "Predict paraphrases, but stay flexible",
      body: "The words in the question are often **not** the words you hear. Before listening, think of other ways the speaker could express the key idea.\n\nPredictions guide your attention, but they are not answers. Write what you **hear**, not what you guessed. Remember that the speaker may mention a word that fits your prediction and then reject it. For example, you predict a time, and you hear two times.",
    },
    {
      type: "example",
      title: "Key words and possible paraphrases",
      items: [
        "the **cheapest** option → it costs the least / it's the most affordable",
        "**not allowed** → you can't / it's not permitted / please don't",
        "**every week** → once a week / weekly / each Monday",
        "the **deadline** → you need to hand it in by …",
        "**free of charge** → you don't have to pay / it's included",
      ],
    },
  ],
  model: [
    {
      type: "text",
      title: "Step 1: predict before you listen",
      body: "Here are some notes with five gaps. Before listening, a strong candidate writes a quick prediction next to each one.\n\n1. Meet at the ___ gate → *a direction or adjective: north, main, back?*\n2. Start time: ___ → *a time*\n3. Wear old clothes and strong ___ → *a plural noun, probably footwear: boots, shoes?*\n4. Lunch provided by a local ___ → *a noun for a business or person: café, bakery, farmer?*\n5. Main task this month: building ___ → *a plural noun: fences, paths, beds?*",
    },
    {
      type: "audio",
      title: "Step 2: listen",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Thanks for calling the Riverside Community Garden information line. Our next volunteer day is this Saturday. Please don't go to the main entrance on Park Road, because it's locked at weekends. Instead, meet us at the east gate, which is next to the children's playground.\n\nWe'll start at nine thirty. Some people like to arrive a bit earlier for a coffee and a chat, but the work itself begins at half past nine. You don't need any experience, but do wear old clothes. You'll also need strong boots, because the ground gets very muddy at this time of year. We'll provide gloves and tools, so there's no need to bring your own.\n\nAt around one, we stop for lunch, which is kindly provided by a local bakery, Harvest Bread. Last month we spent most of our time planting fruit trees. This month, the main job will be building raised beds for vegetables, so that people in wheelchairs can garden too. If it rains heavily, we'll cancel, and we'll post a message on our website by eight o'clock that morning.",
    },
    {
      type: "text",
      title: "Step 3: check how the predictions helped",
      body: "1. A direction was predicted. *Main entrance* is heard first, but it is locked. The answer is **east**.\n2. A time was predicted. “Arrive a bit earlier” is a distractor with no exact time. The answer is **9.30**.\n3. Footwear was predicted: **boots**. *Gloves* is also a plural noun, but the speaker says they will be provided, so you don't need to bring them.\n4. A business was predicted: **bakery**. The name, Harvest Bread, confirms it.\n5. A plural noun was predicted. *Fruit trees* was last month's job. This month it is **raised beds**.\n\nIn four of the five gaps, the prediction was right **and** a distractor matched the prediction too. Prediction tells you *when* to listen hard. Careful listening tells you *which* answer is correct.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Practice audio 1: renting a holiday cottage",
      voice: "uk",
      cast: { Agent: "female" },
      transcript:
        "Agent: Good morning, Coastline Holiday Cottages. Sophie speaking.\nMan: Hi, I'm interested in renting one of your cottages in August.\nAgent: Lovely. Do you have a particular one in mind?\nMan: Yes, the one called Seaview. I saw it on your website.\nAgent: Ah, I'm afraid Seaview is already booked for the whole of August. But Harbour Cottage is very similar, and it's available. It's slightly smaller, but it's closer to the beach.\nMan: That sounds fine. How many people does it sleep?\nAgent: Up to six. There are three bedrooms.\nMan: Perfect, there are five of us. What's the price?\nAgent: In August it's eight hundred and fifty pounds a week. That includes electricity and heating, but there's an extra charge of forty pounds for cleaning at the end of your stay.\nMan: OK. Is there anywhere to park?\nAgent: There's no garage, I'm afraid, but you can park on the street outside for free.\nMan: And can we bring our dog?\nAgent: Yes, pets are welcome, but we ask you to keep them out of the bedrooms.\nMan: Great. What day do we arrive?\nAgent: All our bookings run from Saturday to Saturday. You can check in any time after four in the afternoon.\nMan: And how do we get the keys?\nAgent: They'll be in a key box by the front door. We'll text you the code the day before you arrive.\nMan: And what do you need from me to book?\nAgent: Just a deposit of twenty per cent, which is one hundred and seventy pounds.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Form completion",
        instructions: "Before you listen, take a minute to predict the type of answer for each gap. Then listen and complete the form. Write ONE WORD AND/OR A NUMBER for each answer.",
        text: "Holiday cottage booking\n\nCottage name: {{0}} Cottage\nNumber of bedrooms: {{1}}\nPrice per week: £{{2}}\nExtra charge for: {{3}}\nParking: free, on the {{4}}\nPets: allowed, but not in the {{5}}\nArrival day: {{6}}\nKey box code: sent by {{7}}\nDeposit: £{{8}}",
        answers: [
          ["Harbour", "Harbor"],
          ["3", "three"],
          ["850", "850.00"],
          ["cleaning"],
          ["street"],
          ["bedrooms", "bedroom"],
          ["Saturday", "Saturdays"],
          ["text", "SMS"],
          ["170", "170.00"],
        ],
      },
    },
    {
      type: "audio",
      title: "Practice audio 2: a talk on urban beekeeping",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Today I'd like to talk about a trend that has surprised many people: keeping bees in cities. Ten years ago, there were only a few hundred hives in our city. Since then, the number has gone up by around sixty per cent, and it is still growing.\n\nYou might expect city bees to struggle, but in fact they often produce more honey than bees in the countryside. The reason is the huge variety of flowers in parks, gardens and along streets, which bloom at different times of the year. Farmland, by contrast, may grow just one crop.\n\nHowever, there is a risk. If too many people keep bees in a small area, there simply isn't enough food to go round, and wild bees may suffer as well.\n\nSo where do people keep their hives? Gardens are one option, but in our city most hives are actually placed on the roofs of buildings, including hotels and offices, where they are safely away from the public.\n\nKeeping bees is more work than many people expect. In summer, a beekeeper needs to check each hive every week, to make sure the bees are healthy and have enough space. Because of this, the city council now runs a free course for anyone who wants to start. Places are limited, so early booking is recommended.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Note completion",
        instructions: "Read the notes and predict each answer. Then listen and complete the notes. Write ONE WORD AND/OR A NUMBER for each answer.",
        text: "Urban beekeeping\n\nGrowth: number of city hives up by about {{0}} per cent in ten years\nWhy city bees make more honey: wide variety of {{1}}\nMain risk: not enough {{2}} for all the bees\nMost hives are kept on the {{3}} of buildings\nIn summer, hives must be checked every {{4}}\nThe council offers a {{5}} course for beginners",
        answers: [
          ["60", "sixty"],
          ["flowers"],
          ["food"],
          ["roofs", "roof", "rooftops"],
          ["week"],
          ["free"],
        ],
      },
    },
    {
      type: "table",
      title: "Meeting room schedule: Thursday",
      headers: ["Time", "Room", "Booked for"],
      rows: [
        ["9.00", "Room A", "Budget meeting"],
        ["10.30", "Room B", "Client presentation"],
        ["1.00", "Room C", "Staff training"],
        ["3.30", "Room D", "Project review"],
      ],
    },
    {
      type: "audio",
      title: "Practice audio 3: a problem at work",
      voice: "us",
      transcript:
        "Woman: Hi Tom, have you got a minute? It's about the client presentation tomorrow.\nMan: Sure. Is everything ready?\nWoman: Almost. But the projector in our room isn't working, and the technician can't fix it until next week.\nMan: Oh no. Can we move to another room?\nWoman: That's what I was thinking. The room we use for staff training has a really good projector. It's booked in the afternoon, but it's free all morning.\nMan: Great, then let's move the presentation there and keep the same time.\nWoman: OK. I'll update the online calendar.\nMan: And could you let the clients know? They might go straight to the old room.\nWoman: Actually, I'll ask the receptionist to put up a sign in the lobby. That'll be easier than emailing everyone.\nMan: Good idea. Oh, and the slides. Have you sent them to Mr Patel for approval?\nWoman: Not yet. I'm still adding the latest sales figures. I'll send them to him by five today.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Conversation with a graphic",
        instructions: "First read the questions and the schedule above, and predict what you need to listen for. Then listen and choose the best answer.",
        questions: [
          {
            prompt: "What problem does the woman mention?",
            options: ["A client has cancelled.", "Some equipment is not working.", "A room has been booked twice.", "The slides have been lost."],
            answer: 1,
            explanation: "“The projector in our room isn't working.” A projector is equipment.",
          },
          {
            prompt: "Look at the schedule. Where will the client presentation now take place?",
            options: ["Room A", "Room B", "Room C", "Room D"],
            answer: 2,
            explanation: "They move to “the room we use for staff training”. The schedule shows staff training is in Room C. Room B is the room with the broken projector.",
          },
          {
            prompt: "What will the woman ask the receptionist to do?",
            options: ["Email the clients", "Put up a sign", "Fix the projector", "Book another room"],
            answer: 1,
            explanation: "“I'll ask the receptionist to put up a sign in the lobby.” Emailing is mentioned but rejected.",
          },
          {
            prompt: "What does the woman say she will do by five o'clock?",
            options: ["Send the slides to Mr Patel", "Meet the clients", "Update the calendar", "Call the technician"],
            answer: 0,
            explanation: "“I'll send them to him by five today.” She will also update the calendar, but no time is given for that.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Before each part, you get time to read the questions. Use it to write a tiny prediction next to each gap (n, adj, £, time …) and underline key words. When the recording finishes a part, don't spend the next reading time checking old answers: move on and predict the next questions.",
    },
    {
      exam: "toeic",
      body: "In Parts 3 and 4, read the three questions, and any graphic, before the conversation starts. A question that begins “Look at the graphic” usually means the audio will **not** say the answer directly. You need to link what you hear (for example, “the training room”) with the information in the table.",
    },
    {
      exam: "toefl",
      body: "In TOEFL Listening, you may not see the questions until the conversation has finished, so you can't always preview them. Instead, predict from the situation as soon as it starts. When a student visits an office, expect a problem, a possible solution and a next step. Listen for those three things.",
    },
  ],
  vocabulary: [
    { word: "predict", meaning: "to say what you think will happen or what you will hear", example: "Try to predict the type of word that fits each gap.", topic: "academic" },
    { word: "paraphrase", meaning: "to say something again using different words", example: "The speaker paraphrased “cheap” as “it won't cost you much”.", topic: "academic" },
    { word: "volunteer", meaning: "a person who works without being paid, usually to help others", example: "The garden is run entirely by volunteers.", topic: "society" },
    { word: "provide", meaning: "to give people something they need", example: "Gloves and tools are provided.", topic: "everyday" },
    { word: "deposit", meaning: "part of the price that you pay in advance to book something", example: "We paid a deposit of twenty per cent.", topic: "business" },
    { word: "extra charge", meaning: "an amount you pay on top of the normal price", example: "There's an extra charge for cleaning.", topic: "business" },
    { word: "available", meaning: "free to be used or booked", example: "Harbour Cottage is available in August.", topic: "travel" },
    { word: "hive", meaning: "a structure where bees live", example: "Many urban hives are kept on rooftops.", topic: "environment" },
    { word: "variety", meaning: "a number of different types of something", example: "City parks contain a huge variety of flowers.", topic: "environment" },
    { word: "approval", meaning: "official agreement that something is acceptable", example: "The slides need the manager's approval.", topic: "work" },
    { word: "aimed at", meaning: "designed for a particular group of people", example: "The course is aimed at complete beginners.", topic: "education" },
  ],
  keyPoints: [
    "Use preview time to predict the word type, meaning and form of every answer.",
    "Grammar around the gap (a/an, plurals, prepositions, “too”) narrows down the possibilities.",
    "Think of paraphrases for key words, because the audio rarely repeats the question's wording.",
    "Predictions tell you when to listen hard, but distractors often fit your prediction too. Write what you hear.",
  ],
};

export default lesson;
