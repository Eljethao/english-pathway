import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-describing-places",
  title: "Describing your home and hometown",
  summary:
    "Describe your home, hometown and city: where it is, what it's like, how it has changed and why you like it, for IELTS Speaking Parts 1 and 2.",
  skill: "speaking",
  level: "B1",
  order: 9,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Speaking Part 1" },
    { exam: "ielts", task: "Speaking Part 2" },
  ],
  objectives: [
    "Say where a place is: on the coast, in the north of…, about an hour from…",
    "Answer “What's it like?” with a description and “What do you like about it?” with reasons",
    "Talk about how a place has changed and compare it with other places",
    "Describe a place for up to 2 minutes from a task card",
  ],
  warmUp: [
    "Describe your hometown in three adjectives.",
    "What's your favourite room in your home, and why?",
  ],
  learn: [
    {
      type: "text",
      title: "Two questions that sound similar",
      body: "Your home and your hometown are typical topics in IELTS Part 1, and Part 2 may ask you to describe a place. Be careful with two questions that sound almost the same:\n\n- **What's your hometown like?** = Describe it. Give facts and adjectives: *It's a small, quiet town on the coast.*\n- **What do you like about your hometown?** = Give reasons. *I like the beach and the friendly people.*\n\nMany learners answer *What's it like?* with *Yes, I like it.* That answers a different question.",
    },
    {
      type: "table",
      title: "Where is it?",
      headers: ["Phrase", "Example"],
      rows: [
        ["in the north / south / east / west of…", "It's in the north of the country."],
        ["on the coast / on a river / in the mountains", "It's a small town on the coast."],
        ["about an hour from… / not far from…", "It's about an hour from the capital by train."],
        ["in the city centre / in the suburbs / on the outskirts", "I live on the outskirts, near some fields."],
        ["next to / opposite / near…", "My flat is opposite a big park."],
      ],
    },
    {
      type: "table",
      title: "What's it like?",
      headers: ["Topic", "Useful words"],
      rows: [
        ["Size and type", "a big city, a small town, a village, the capital"],
        ["Atmosphere", "lively, busy, peaceful, quiet, friendly"],
        ["How it looks", "historic, modern, green, beautiful, a bit run-down"],
        ["Things to do", "There are plenty of… / There aren't many… / There's hardly any…"],
        ["Your home", "spacious, cosy, bright, a bit small, in a good location"],
      ],
    },
    {
      type: "text",
      title: "Making a description longer",
      body: "Put two adjectives together, with your opinion first: *a lovely old town*, *a busy modern city*, *a small but cosy flat*.\n\nThen add **change** or **comparison**:\n\n- **Change** (present perfect): *It **has changed** a lot. A lot of new cafés **have opened**.* / *It's **got** much busier.*\n- **Comparison**: *It's **much quieter than** the capital.* / *It isn't **as expensive as** the big cities.* / *It's **the most beautiful** part of the country.*",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check",
        questions: [
          {
            prompt: "Examiner: “What's your hometown like?” Which answer is best?",
            options: [
              "Yes, I like it very much.",
              "It's a small, peaceful town on a river, about an hour from the capital.",
              "I was born there in 2003.",
            ],
            answer: 1,
            explanation: "What's it like? asks for a description: size, atmosphere, location.",
          },
          {
            prompt: "Examiner: “What do you like about your home?” Which answer is best?",
            options: [
              "It's a flat on the fifth floor.",
              "I like the big kitchen, because I love cooking for my friends.",
              "It's in the south of the city.",
            ],
            answer: 1,
            explanation: "What do you like about it? asks for something you like and a reason. The other answers only describe the flat.",
          },
          {
            prompt: "Which sentence is correct?",
            options: ["My town is on the coast.", "My town is in the coast.", "My town is at coast."],
            answer: 0,
            explanation: "We say on the coast, like on a river.",
          },
          {
            prompt: "My city is much … than my hometown.",
            options: ["busy", "busier", "more busy"],
            answer: 1,
            explanation: "Busy → busier (two-syllable adjectives ending in -y take -ier).",
          },
          {
            prompt: "Which sentence talks about change?",
            options: [
              "There are lots of shops in the centre.",
              "A lot of new shops have opened in the centre recently.",
              "I like the shops in the centre.",
            ],
            answer: 1,
            explanation: "The present perfect with recently (have opened) shows a change from the past to now.",
          },
          {
            prompt: "Which is the most natural order?",
            options: ["an old lovely house", "a lovely old house", "a house lovely old"],
            answer: 1,
            explanation: "Opinion adjectives (lovely) come before fact adjectives like age (old).",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      voice: "uk",
      cast: { Examiner: "female", Candidate: "male" },
      title: "Model: IELTS Speaking Part 1 about your hometown",
      transcript:
        "Examiner: Let's talk about your hometown. Where is your hometown?\nCandidate: I'm from a small town in the north of the country, about two hours from the capital by train. It's on a big river, so there are lots of bridges, and it's surrounded by hills.\nExaminer: What's it like?\nCandidate: It's quite a peaceful place, and very green. The old town is lovely, with narrow streets and a lot of historic buildings. There isn't much nightlife, to be honest, so young people often go to the city at weekends. But it's a great place for families, because it's safe and everyone knows each other.\nExaminer: Has it changed much in recent years?\nCandidate: Yes, quite a lot. When I was a child, there were only a few shops in the centre. Now a lot of new cafés and restaurants have opened, and it's got much busier in summer, because more tourists come. I think it's a good change, but prices have gone up too, so it isn't as cheap as it used to be.",
    },
    {
      type: "text",
      title: "How a strong candidate does it",
      body: "- **Where is it?** Location phrases: *in the north of the country*, *about two hours from the capital*, *on a big river*.\n- **What's it like?** This is a “describe” question, so the answer gives adjectives and facts: *peaceful*, *green*, *narrow streets*, *historic buildings*. It is also balanced: *There isn't much nightlife… But it's a great place for families.*\n- **Has it changed?** The present perfect for change (*have opened*, *it's got much busier*, *prices have gone up*), plus a past–present contrast and a comparison: *it isn't as cheap as it used to be*.\n- Each answer is about 20–30 seconds, and none of them sounds memorised.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Complete the descriptions",
        instructions: "Complete each sentence with a word or phrase from the box. Use each one once.",
        text: "1. My hometown is a small fishing village {{0}} the coast.\n2. We live on the {{1}} of the city, so it's quiet, but the centre is only twenty minutes away.\n3. It's about three hours {{2}} the capital by car.\n4. There are {{3}} of parks, so it's great for families.\n5. There's {{4}} any nightlife, so young people often get bored.\n6. My neighbourhood {{5}} a lot. There are new flats everywhere now.\n7. Our new flat isn't {{6}} big as our old house, but it's in a better location.\n8. My bedroom is small but {{7}}, with soft lights and lots of cushions.",
        answers: [
          ["on", "by", "near"],
          ["outskirts", "edge"],
          ["from", "away from"],
          ["plenty", "lots", "loads"],
          ["hardly", "barely", "scarcely"],
          ["has changed", "'s changed", "changed"],
          ["as", "so"],
          ["cosy", "cozy", "comfortable", "warm"],
        ],
        wordBank: ["on", "outskirts", "from", "plenty", "hardly", "has changed", "as", "cosy"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "shadow",
        voice: "uk",
        title: "Listen and repeat: describing places",
        instructions: "Listen and repeat. Stress the adjectives and place words (small, north, lovely, quieter), and keep the small words weak.",
        sentences: [
          "I'm from a small town in the north of the country.",
          "It's about two hours from the capital by train.",
          "It's a lovely old town with lots of narrow streets.",
          "There isn't much nightlife, but it's great for families.",
          "A lot of new cafés have opened in the last few years.",
          "It's much quieter than the city where I live now.",
          "My favourite room is the kitchen, because it's bright and cosy.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "IELTS Speaking Part 1: your home",
        instructions: "Answer with no preparation time. This is a “describe” question, so talk about the place itself: size, rooms, location, one good point and one small problem. Aim for about 30 seconds.",
        prompt: "Let's talk about your home. Can you describe the place where you live?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Sure. I live in a flat on the third floor of an old building, quite close to the city centre. It isn't very big. There's a living room, a small kitchen and two bedrooms, and I share it with a friend from university. The best thing is the location. There are plenty of shops and cafés nearby, and the bus stop is right outside. The only problem is the noise at night.",
        targetPhrases: ["I live in", "close to", "There's", "The best thing is", "There are plenty of", "nearby"],
        checklist: [
          "I described the place (size, rooms, location), not just whether I like it.",
          "I used at least two adjectives and a location phrase.",
          "I used there is / there are correctly.",
          "I added one good point and one small problem.",
          "I spoke for about 30 seconds.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "IELTS Speaking Part 2: a place you like",
        instructions: "You have one minute to prepare and make notes. Then speak for up to two minutes. Follow the points on the card in order.",
        prompt: "Describe a place in your town or city where you like to spend time.",
        cueCard: [
          "where it is",
          "what it looks like",
          "what you do there",
          "and explain why you like spending time there",
        ],
        prepSeconds: 60,
        speakSeconds: 120,
        modelAnswer:
          "I'd like to talk about a small park near my flat. It's called Willow Park, and it's only five minutes' walk from where I live, just behind the main shopping street.\n\nIt isn't a famous place, and it's not very big, but it's really lovely. In the middle, there's a pond with ducks, and around it there are old trees and lots of wooden benches where people sit and chat. On one side there's a children's playground, and on the other side there's a small café in an old glass building. In spring there are flowers everywhere, and in autumn the trees turn red and gold, so it looks completely different in every season.\n\nI go there three or four times a week. On weekday mornings I sometimes go for a quick run around the pond before work. At weekends I usually take a book, buy a coffee from the café and sit on my favourite bench under a big tree. Now and then I meet friends there after work, and in summer we have picnics on the grass and stay until it gets dark.\n\nSo why do I like it so much? I think the main reason is that it's so peaceful. My street is quite noisy, and my job is very busy, so the park is the place where I can really relax. It's also full of good memories. For example, I met one of my best friends there, when our dogs started playing together. It's much quieter than the big parks in the city centre, and for me, it's the best place in town.",
        targetPhrases: ["I'd like to talk about", "In the middle", "On one side", "I usually", "the main reason is that", "much quieter than"],
        checklist: [
          "I covered all four points on the card.",
          "I said where it is with a location phrase.",
          "I described what it looks like with adjectives and position words (in the middle, on one side).",
          "I said how often I go and what I do there.",
          "I explained why I like it, with a reason and an example.",
          "I kept talking for most of the 2 minutes.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In Part 1, listen for the difference between *What's it like?* (describe it) and *What do you like about it?* (give reasons). Answering the wrong one is a common mistake, and it can make an answer sound memorised.",
    },
    {
      exam: "ielts",
      body: "In a Part 2 “describe a place” task, use your minute of preparation to note one or two words for each point on the card. Choose a real place you know well: it is much easier to describe than an imaginary one, because the details come naturally.",
    },
  ],
  vocabulary: [
    { word: "outskirts", meaning: "the outer parts of a town or city", example: "We live on the outskirts of the city, near the fields.", topic: "everyday" },
    { word: "peaceful", meaning: "quiet and calm", example: "The village is very peaceful at night.", topic: "everyday" },
    { word: "lively", meaning: "full of people, activity and energy", example: "The old town is lively at weekends.", topic: "everyday" },
    { word: "historic", meaning: "old and important in history", example: "There are many historic buildings in the centre.", topic: "travel" },
    { word: "cosy", meaning: "small, warm and comfortable", example: "Our living room is small but cosy.", topic: "everyday" },
    { word: "spacious", meaning: "with a lot of space inside", example: "The new flat is bright and spacious.", topic: "everyday" },
    { word: "run-down", meaning: "old and in bad condition", example: "Some parts of the town are a bit run-down.", topic: "society" },
    { word: "nightlife", meaning: "places to go out at night, such as bars, clubs and concerts", example: "There isn't much nightlife in my hometown.", topic: "travel" },
    { word: "plenty of", meaning: "a lot of; more than enough", example: "There are plenty of buses to the centre.", topic: "everyday" },
    { word: "facilities", meaning: "buildings and services for people to use, such as sports centres and libraries", example: "The town has good sports facilities.", topic: "society" },
    { word: "surrounded by", meaning: "with something all around", example: "My village is surrounded by hills.", topic: "travel" },
  ],
  keyPoints: [
    "What's it like? = describe it; What do you like about it? = give reasons.",
    "Say where it is: on the coast, in the north of…, about an hour from…, on the outskirts.",
    "Describe with adjectives (opinion first: a lovely old town) and there is / there are.",
    "Make answers longer with change (has changed, have opened) and comparison (quieter than, not as… as).",
    "In Part 2, follow the card and finish with why the place matters to you.",
  ],
};

export default lesson;
