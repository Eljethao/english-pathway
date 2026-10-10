import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-describing-people-places",
  title: "Describing people, places and experiences",
  summary:
    "Make your descriptions come alive: choose precise adjectives, put them in the right order, use -ed and -ing adjectives correctly, and add details from your senses.",
  skill: "writing",
  level: "B1",
  order: 6,
  minutes: 30,
  exams: [
    { exam: "ielts", task: "Writing Task 1 (General Training)" },
    { exam: "toefl", task: "Writing – Write an Email" },
    { exam: "toeic", task: "Writing – Write a sentence based on a picture" },
  ],
  objectives: [
    "Put two or three adjectives in the correct order before a noun",
    "Choose correctly between -ed and -ing adjectives (bored / boring)",
    "Describe what a person looks like and what they are like",
    "Describe a place or an experience with details from the senses and your feelings",
  ],
  warmUp: [
    "Think of your favourite place in your town. Which three words would you use to describe it?",
    "Describe a good friend in one sentence. Did you write about how they look or about their personality?",
  ],
  learn: [
    {
      type: "text",
      title: "Good descriptions are specific",
      body: "Words like *nice*, *good*, *big* and *interesting* are correct, but they do not give the reader a clear picture. A good description uses **precise adjectives** and **specific details**.\n\n- General: *It was a nice beach.*\n- Specific: *It was a quiet sandy beach with clear blue water and a small café under the trees.*\n\nIn exam letters and emails, a few precise details also show the examiner a wider range of vocabulary.",
    },
    {
      type: "table",
      title: "Adjective order before a noun",
      headers: ["Order", "Type of adjective", "Examples"],
      rows: [
        ["1", "opinion", "lovely, beautiful, ugly, comfortable"],
        ["2", "size", "big, small, tall, tiny"],
        ["3", "age", "old, new, modern, young"],
        ["4", "colour", "red, dark blue, grey"],
        ["5", "origin (where it is from)", "Italian, Japanese, Mexican"],
        ["6", "material", "wooden, stone, cotton, leather"],
      ],
    },
    {
      type: "example",
      title: "Adjective order in action",
      items: [
        "a **lovely old stone** house (opinion → age → material)",
        "a **small black leather** bag (size → colour → material)",
        "a **beautiful modern Japanese** car (opinion → age → origin)",
        "Two adjectives before a noun are common. Three is usually the most you need: add other details after the noun (*a small café **under the trees***).",
      ],
    },
    {
      type: "text",
      title: "-ed or -ing?",
      body: "Adjectives that end in **-ed** describe how a person **feels**. Adjectives that end in **-ing** describe the person, thing or experience that **causes** the feeling.\n\n- *The film was **boring**, so we were **bored**.*\n- *The news was **surprising**. Everyone was **surprised**.*\n- *I was **exhausted** after the **tiring** journey.*\n\nA common mistake is *I am boring* when you mean *I am bored*. *I am boring* means that other people find you dull!",
    },
    {
      type: "text",
      title: "People: looks and personality",
      body: "When you describe a person, think about two things:\n\n- **Appearance** (*What does she look like?*): *She is tall, with short curly hair and glasses.* / *He has a friendly smile.*\n- **Personality** (*What is she like?*): *She is patient and very generous.* / *He is a bit shy at first, but he is really funny.*\n\nDo not just list adjectives. Add an example that **shows** the personality: *She is very patient. When I was learning to drive, she never shouted, even when I made the same mistake again and again.*",
    },
    {
      type: "text",
      title: "Places and experiences: use your senses",
      body: "To describe a place or an experience, say what you could **see**, **hear**, **smell**, **taste** or **feel**, and how it made you feel.\n\n1. Start with the general picture: where it is and your first impression.\n2. Add two or three specific details from your senses.\n3. Finish with your feelings or why it was special.\n\nUse **very** with normal adjectives (*very cold*, *very tired*, *very good*) and **absolutely** with strong adjectives (*absolutely freezing*, *absolutely exhausted*, *absolutely amazing*). Do not write *very freezing* or *absolutely cold*.",
    },
    {
      type: "tip",
      exam: "toeic",
      body: "In **Write a sentence based on a picture**, a short description can make your sentence clearer: *The woman **with long dark hair** is carrying a **large brown** box.* Only describe what you can really see in the picture.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: order and -ed / -ing",
        questions: [
          {
            prompt: "Choose the correct order.",
            options: ["a wooden old lovely table", "a lovely old wooden table", "an old lovely wooden table", "a lovely wooden old table"],
            answer: 1,
            explanation: "Opinion (lovely) → age (old) → material (wooden).",
          },
          {
            prompt: "Choose the correct order.",
            options: ["a red small Italian car", "an Italian small red car", "a small red Italian car", "a small Italian red car"],
            answer: 2,
            explanation: "Size (small) → colour (red) → origin (Italian).",
          },
          {
            prompt: "The museum tour was really ___. I learned a lot.",
            options: ["interested", "interesting", "interest", "interestingly"],
            answer: 1,
            explanation: "The tour causes the feeling, so we need the -ing adjective.",
          },
          {
            prompt: "After the ten-hour flight, we were absolutely ___.",
            options: ["tired", "tiring", "exhausted", "exhausting"],
            answer: 2,
            explanation: "We need an -ed adjective because it describes how we felt, and *absolutely* goes with strong adjectives such as *exhausted*, not with normal ones such as *tired*.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*Write an email to an English-speaking friend about a weekend trip you took recently. In your email:*\n\n- *describe the place you visited*\n- *describe a person you met there*\n- *explain how you felt about the trip*",
    },
    {
      type: "passage",
      title: "Model email",
      paragraphs: [
        "Hi Tom,",
        "I've just come back from a weekend in a small fishing village on the coast, and I wanted to tell you about it. The village is built on a steep hill, so the narrow streets go all the way down to the harbour. Most of the houses are lovely old stone cottages with bright blue doors, and there are colourful fishing boats everywhere.",
        "On the first evening, we had dinner in a tiny family restaurant. The owner, Marco, was a tall man with a grey beard and a very loud laugh. He was really cheerful. He told us funny stories about his years at sea and gave us a free dessert because it was my sister's birthday. It was absolutely delicious!",
        "The best moment was on Sunday morning. I sat on the harbour wall with a coffee, listening to the seagulls and smelling the fresh bread from the bakery behind me. I felt completely relaxed for the first time in months.",
        "You'd love it. Let's go together next summer!",
        "Love,",
        "Sofia",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Place**: Sofia starts with the general picture (*a small fishing village on the coast*), then adds specific details: *a steep hill*, *narrow streets*, *lovely old stone cottages* (opinion → age → material).\n- **Person**: she describes Marco's **appearance** (*a tall man with a grey beard*) and his **personality** (*really cheerful*), and then gives examples that show it (*told us funny stories… gave us a free dessert*).\n- **Experience**: she uses her senses (*listening to the seagulls*, *smelling the fresh bread*) and says how she felt (*completely relaxed*).\n- **Strong adjectives**: *absolutely delicious* uses *absolutely* with a strong adjective.\n- **Tone**: this is an informal email to a friend, so it uses contractions (*I've*, *You'd*) and an informal ending (*Love,*).",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "-ed or -ing?",
        instructions: "Complete each sentence with the correct adjective made from the word in brackets: the -ed or the -ing form.",
        text: "1. The hotel room was very small, and the view was {{0}}. (disappoint)\n2. We were {{1}} when the train finally left, three hours late. (relieve)\n3. My grandfather tells really {{2}} stories about his childhood. (fascinate)\n4. The instructions were so {{3}} that we got lost twice. (confuse)\n5. Everyone was {{4}} by the size of the waterfall. (amaze)\n6. The long walk back to the car was {{5}}. (exhaust)\n7. Are you {{6}} in art? There is a new gallery in town. (interest)",
        answers: [["disappointing"], ["relieved"], ["fascinating"], ["confusing"], ["amazed"], ["exhausting"], ["interested"]],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Looks, personality or likes?",
        instructions: "Match each question with the best answer. There is one extra answer.",
        left: [
          "What does your sister look like?",
          "What is your sister like?",
          "What does your sister like?",
          "How is your sister?",
          "What does your sister do?",
        ],
        right: [
          "She's really kind and quite talkative.",
          "She loves hiking and Korean food.",
          "She's tall and slim, with long red hair.",
          "She's fine, thanks. She's just started a new job.",
          "She's a nurse at the city hospital.",
          "She's twenty-eight.",
        ],
        answer: [2, 0, 1, 3, 4],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "order",
        mode: "words",
        title: "Build a description",
        instructions: "Put the words in order to make a correct sentence. Think about adjective order.",
        items: ["We rented", "a", "small", "white", "wooden", "boat", "for the day."],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: describe a special day",
        prompt:
          "Write an email to an English-speaking friend about a special day out or a trip you had recently.\n\nIn your email:\n\n- describe the place you went to\n- describe a person you were with or met there\n- explain how you felt and why the day was special\n\nUse at least four precise adjectives, one -ed adjective, one -ing adjective and at least one detail from your senses. Write at least 120 words.",
        minWords: 120,
        minutes: 15,
        rubric: [
          "Task: I covered all three points (the place, the person and my feelings).",
          "Coherence: I moved from the general picture to specific details, with one paragraph for each point.",
          "Lexical resource: I used precise adjectives instead of nice, good or big, and I put them in the correct order.",
          "Lexical resource: I used -ed adjectives for feelings and -ing adjectives for things and experiences.",
          "Detail: I included at least one thing I saw, heard, smelled, tasted or felt.",
          "Tone: my email is friendly and informal, with a suitable greeting and ending.",
          "Grammatical accuracy: I used past tenses correctly to describe the day, and my spelling is correct.",
        ],
        modelAnswer:
          "Hi Lena,\n\nI hope you're well! Last Saturday I went to the flower festival in the old town with my cousin Ana, and I wanted to tell you about it.\n\nThe main square was full of colourful stalls, and the narrow streets were covered with thousands of red and yellow tulips. The smell of fresh flowers and hot waffles was everywhere, and a small brass band was playing cheerful music outside the town hall.\n\nAna is the perfect person for a day like that. She's short, with curly dark hair and a huge smile, and she's very curious. She talked to almost every flower seller and asked them how they grow their plants!\n\nBy the evening, I was exhausted, but it was an amazing day. I felt really relaxed and happy, and I can't wait to go back next year.\n\nSpeak soon,\nMaya",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In **General Training Task 1**, you may need to describe something, for example a place you visited or a person you want to recommend. Precise adjectives and a few concrete details show a good range of vocabulary (**Lexical Resource**). Two or three good details are better than a long list of general adjectives.",
    },
    {
      exam: "toefl",
      body: "In **Write an Email**, a social situation might ask you to describe something, such as an event you went to. You only have 7 minutes, so choose one or two specific details for each point instead of many adjectives.",
    },
    {
      exam: "toeic",
      body: "In **Write a sentence based on a picture**, you can add a short description to make your sentence clear, for example *the man **in the blue jacket***. Keep it accurate: describe only what you can see, and check the adjective order.",
    },
  ],
  vocabulary: [
    { word: "appearance", meaning: "the way someone or something looks", example: "He changed his appearance by growing a beard.", topic: "everyday" },
    { word: "personality", meaning: "the type of person you are, shown by how you behave", example: "She has a warm, friendly personality.", topic: "everyday" },
    { word: "cheerful", meaning: "happy and positive", example: "The receptionist was cheerful and helpful.", topic: "everyday" },
    { word: "generous", meaning: "happy to give money, time or help to other people", example: "My neighbour is very generous with her time.", topic: "everyday" },
    { word: "curious", meaning: "wanting to know or learn about things", example: "Young children are naturally curious.", topic: "everyday" },
    { word: "narrow", meaning: "not wide", example: "The streets in the old town are very narrow.", topic: "travel" },
    { word: "lively", meaning: "full of energy, people and activity", example: "The market is very lively on Saturday mornings.", topic: "travel" },
    { word: "breathtaking", meaning: "extremely beautiful or impressive", example: "The view from the top of the hill was breathtaking.", topic: "travel" },
    { word: "exhausted", meaning: "extremely tired", example: "I was exhausted after the long walk.", topic: "everyday" },
    { word: "fascinating", meaning: "extremely interesting", example: "The museum has a fascinating collection of old maps.", topic: "everyday" },
    { word: "memorable", meaning: "special and likely to be remembered", example: "It was a memorable day for the whole family.", topic: "everyday" },
  ],
  keyPoints: [
    "Replace general words (nice, good, big) with precise adjectives and specific details.",
    "Usual adjective order: opinion → size → age → colour → origin → material → noun (a lovely old stone house).",
    "-ed adjectives describe feelings (bored); -ing adjectives describe what causes them (boring).",
    "For people, describe appearance (look like) and personality (be like), and give an example that shows the personality.",
    "For places and experiences, add details from your senses and say how you felt.",
  ],
};

export default lesson;
