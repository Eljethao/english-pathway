import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-long-turn-cue-cards",
  title: "The 2-minute long turn (cue cards)",
  summary:
    "Use your one minute of preparation well and speak for a full two minutes on an IELTS Speaking Part 2 cue card, with clear structure, real details and a strong explanation.",
  skill: "speaking",
  level: "B2",
  order: 1,
  minutes: 20,
  exams: [{ exam: "ielts", task: "Speaking Part 2" }],
  objectives: [
    "Make quick, useful notes in one minute",
    "Organise a two-minute talk around the cue card bullet points",
    "Extend each point with details, a short story and feelings",
    "Keep talking naturally until the examiner stops you",
  ],
  warmUp: [
    "Could you talk about your favourite place for two minutes without stopping? What would you say first?",
    "When you tell a friend a story, what makes it interesting to listen to?",
  ],
  learn: [
    {
      type: "text",
      title: "What happens in Part 2",
      body: "The examiner gives you a **cue card** with a topic and three or four bullet points, plus paper and a pencil. You have **one minute to prepare** and make notes. Then you speak for **one to two minutes** without interruption. The examiner will stop you when two minutes are up, and may ask one or two short follow-up questions.\n\nTwo minutes feels long. Many candidates run out of things to say after 50 or 60 seconds, often not because their English is weak but because they have not planned enough to say. The solution is good notes and a simple structure.",
    },
    {
      type: "text",
      title: "Using your one minute",
      body: "- Write **keywords, not sentences**. You don't have time for full sentences, and reading them aloud sounds unnatural.\n- Give each bullet point **one line** of notes, so you can see your plan at a glance.\n- For each line, add **a detail you can expand**: a name, a number, a small story, a feeling.\n- Spend the most time on the last bullet, which usually starts with *explain*. This is where you show you can give reasons and develop ideas.",
    },
    {
      type: "table",
      title: "Example notes (written in one minute)",
      headers: ["Cue card bullet", "Notes"],
      rows: [
        ["Topic: a place you visited that you would like to go back to", "Porto, Portugal"],
        ["Where it is", "north Portugal, hill + river, colourful houses, steps"],
        ["When you went there", "2 yrs ago, 2 uni friends, after final exams → relaxed"],
        ["What you did there", "walking + food (sardines!); boat trip; sunset by river; bookshop queue"],
        ["Explain why you would like to go back", "only 3 days, too short; beaches, food; slow, friendly; spring + parents"],
      ],
    },
    {
      type: "text",
      title: "A simple structure for two minutes",
      body: "1. **Opening (about 10 seconds)**: say what you are going to talk about. *I'm going to talk about…*\n2. **The first bullets (about 60 seconds)**: answer each one, then extend with details, examples or a short story.\n3. **The explain bullet (about 40 seconds)**: give two or three reasons and develop them.\n4. **A natural ending**: a final thought or a look to the future. *Next time, I'd like to…* If the examiner hasn't stopped you, add another detail rather than stopping early.",
    },
    {
      type: "example",
      title: "Ways to extend an idea",
      items: [
        "Add a detail: It's a small café, **and what I love about it is** the huge window.",
        "Tell a mini story: **I still remember the moment when** the boat went under the bridge.",
        "Add a feeling: **It made me feel** really calm.",
        "Compare: **It's completely different from** my hometown, which is flat and quite busy.",
        "Look ahead: **Next time, I'd love to** go in spring, when it's less crowded.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Many cue cards ask about the past (*Describe a time when…*). Show a range of tenses: past simple for events, past continuous for background (*we were walking when…*), past perfect for earlier events (*I had never seen…*), and present or future forms for how you feel now.",
    },
  ],
  model: [
    {
      type: "text",
      title: "The cue card",
      body: "**Describe a place you visited that you would like to go back to.**\n\nYou should say:\n\n- where it is\n- when you went there\n- what you did there\n\nand explain why you would like to go back.",
    },
    {
      type: "audio",
      title: "Model answer (about 2 minutes)",
      transcript:
        "I'm going to talk about Porto, a city in the north of Portugal, which I visited about two years ago. I went there with two friends from university, right after our final exams, so we were in a really good mood and we just wanted to relax.\n\nPorto is built on a hillside next to a wide river, and the old town is full of narrow streets, colourful houses and steep staircases. I remember thinking that every corner looked like a postcard.\n\nAs for what we did, to be honest, we spent most of our time just walking around and eating. My favourite meal was grilled sardines in a tiny family restaurant, where the owner kept bringing us extra bread and wouldn't let us leave without trying his dessert. One afternoon we took a little boat trip under the bridges, and in the evening we sat by the river and watched the sun go down. We also visited an old bookshop that's famous for its beautiful wooden staircase, although there was a huge queue to get in.\n\nSo why would I like to go back? Well, the main reason is that we only had three days there, and it felt far too short. We didn't have time to visit the beaches just outside the city, or to try half of the local dishes people had recommended. But I think it's also about the atmosphere. Everything felt slow and relaxed, and people were incredibly friendly, even though our Portuguese was terrible. Next time, I'd like to go in spring, when it's less crowded, and maybe take my parents, because I'm sure they'd love it as much as I did.",
      cast: { narrator: "female" },
    },
    {
      type: "text",
      title: "How a strong candidate does it",
      body: "- **A clear opening** answers the first two bullets at once: the place and when the speaker went.\n- **Each bullet is extended.** The speaker doesn't just say *We walked around*, but adds the sardine meal, the boat trip, the sunset and the bookshop queue. Small, real details make the talk interesting and fill the time naturally.\n- **Signposts** guide the listener: *As for what we did… So why would I like to go back? Well, the main reason is… But I think it's also about…*\n- **The explain bullet is the longest part**, with two developed reasons (the visit was too short, and the atmosphere) and a plan for next time.\n- **A range of grammar**: past simple (*we took*), past perfect (*people had recommended*), relative clauses (*which I visited*, *that's famous for*), and a conditional idea (*they'd love it*).\n- **Natural, not memorised**: phrases like *to be honest* and *I remember thinking…* make it sound like real speech.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Useful phrases for the long turn",
        instructions: "Match each purpose to a phrase that does that job. There is one extra phrase.",
        left: [
          "Introducing the topic",
          "Moving to the next bullet point",
          "Telling a short story",
          "Describing a feeling",
          "Giving the main reason",
          "Ending in a natural way",
        ],
        right: [
          "So, all in all, that's why it means so much to me.",
          "It made me feel completely relaxed.",
          "I'd like to talk about a café near my old school.",
          "I still remember the day when the power went off in the middle of class.",
          "As for what I did there,…",
          "The main reason is that it reminds me of my grandfather.",
          "Could you say that again, please?",
        ],
        answer: [2, 4, 3, 1, 5, 0],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Part 2 strategy check",
        questions: [
          {
            prompt: "What is the best way to use your one minute of preparation?",
            options: [
              "Write out your first two sentences in full",
              "Write keywords for each bullet, with a detail or story you can expand",
              "Don't write anything, so you can think more freely",
              "Write a list of advanced words to use somewhere in your talk",
            ],
            answer: 1,
            explanation: "Keywords are quick to write and easy to read while you speak. Full sentences take too long, and a list of unconnected words won't help your structure.",
          },
          {
            prompt: "You have answered all the bullet points and only 80 seconds have passed. What should you do?",
            options: [
              "Stop and wait for the examiner's next question",
              "Say “That's all” and smile",
              "Go back to one point and add a story, a feeling or a comparison",
              "Start talking about a completely different topic",
            ],
            answer: 2,
            explanation: "Keep developing the same topic. The examiner will stop you at two minutes.",
          },
          {
            prompt: "Which part of the cue card usually deserves the most time?",
            options: ["The first bullet", "The explain… bullet at the end", "All bullets need exactly the same time"],
            answer: 1,
            explanation: "The explain bullet lets you give reasons and develop ideas, which shows a higher level of English.",
          },
          {
            prompt: "The examiner interrupts you in the middle of a sentence. What does this mean?",
            options: [
              "Your answer was too weak",
              "You made a serious grammar mistake",
              "Your two minutes are up; this is normal",
            ],
            answer: 2,
            explanation: "The examiner stops you when two minutes are up, even in the middle of a sentence. This is normal and doesn't affect your score.",
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
        title: "Put the talk in order",
        instructions: "Cue card: “Describe a useful object you own.” Put the parts of this talk in the best order.",
        items: [
          "I'd like to talk about a small backpack that my sister gave me for my birthday about three years ago.",
          "It's dark green, quite light, and it has lots of pockets, including a secret one for my passport.",
          "Because of all those pockets, I use it almost every day: for work, for the gym, and especially when I travel.",
          "In fact, I still remember a trip to Seoul when my suitcase got lost, and everything I needed was in that backpack.",
          "The main reason it's so useful is that it's small enough to carry everywhere but big enough for a whole day out.",
          "So even though it's a bit old now, I don't think I'll ever replace it.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "Your turn: a full Part 2 task",
        instructions: "You have one minute to make notes. Then speak for up to two minutes. Try to keep going until the timer ends.",
        prompt: "Describe a skill that took you a long time to learn.",
        cueCard: [
          "what the skill is",
          "when and how you learned it",
          "what was difficult about learning it",
          "and explain how you feel about this skill now",
        ],
        prepSeconds: 60,
        speakSeconds: 120,
        modelAnswer:
          "I'd like to talk about swimming, which might sound strange, because most people learn it as children. But I only learned properly when I was twenty-three.\n\nWhen I was a kid, we lived far from the sea and there wasn't a public pool in our town, so I just never had the chance. Then, a couple of years ago, some friends invited me on a beach holiday, and I realised I was a bit embarrassed that I couldn't join them in the water. So I signed up for adult lessons at a sports centre near my office. I went twice a week, early in the morning, for about eight months.\n\nThe hardest part wasn't the technique. It was the fear. For the first few weeks, I couldn't even put my face in the water without panicking. My instructor was really patient, though. She made me practise breathing out slowly under the water again and again, until it started to feel normal. After that, I made progress much faster, although swimming in deep water took another few months.\n\nAs for how I feel about it now, I'm really proud of myself, to be honest. I go swimming at least once a week, and it's become one of my favourite ways to relax after work. Last summer I even swam in the sea on holiday, which I could never have imagined a few years ago. More importantly, it taught me that it's never too late to learn something, even if you feel a bit silly at the start. So, yes, it took a long time, but it was definitely worth it.",
        targetPhrases: [
          "I'd like to talk about",
          "When I was",
          "The hardest part",
          "As for",
          "to be honest",
          "it was definitely worth it",
        ],
        checklist: [
          "I covered every bullet point on the card.",
          "I spent the most time on the explain bullet, with more than one reason.",
          "I added at least one short story or specific detail.",
          "I used signposts to move between points (As for…, The main reason is…).",
          "I used a range of past tenses correctly.",
          "I kept talking for close to two minutes without long pauses.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Keep talking until the examiner says *Thank you*. Speaking at length is part of the Fluency and Coherence criterion, so stopping after one minute gives the examiner less evidence of your English. Being stopped at two minutes is normal and does not affect your score.",
    },
    {
      exam: "ielts",
      body: "You don't have to tell the truth. If you can't think of a real example quickly, invent one or borrow a friend's experience. The examiner scores your English, not your life story.",
    },
    {
      exam: "ielts",
      body: "Look at your notes while you speak, but don't read from them. Glance down, pick up the next keyword, then look up and keep talking.",
    },
  ],
  vocabulary: [
    { word: "cue card", meaning: "a card with a topic and points to help you speak", example: "The examiner handed me a cue card about a memorable journey.", topic: "education" },
    { word: "long turn", meaning: "a period when one person speaks without being interrupted", example: "Part 2 is a two-minute long turn.", topic: "education" },
    { word: "run out of (things to say)", meaning: "to have nothing left", example: "I ran out of ideas after a minute.", topic: "everyday" },
    { word: "elaborate", meaning: "to add more details or explanation", example: "Could you elaborate on why you chose that city?", topic: "academic" },
    { word: "anecdote", meaning: "a short, interesting story about something that happened to you", example: "She started her talk with a funny anecdote.", topic: "society" },
    { word: "atmosphere", meaning: "the feeling or mood of a place", example: "The old town has a relaxed atmosphere.", topic: "travel" },
    { word: "steep", meaning: "rising or falling sharply", example: "We climbed a steep street to the castle.", topic: "travel" },
    { word: "sign up for", meaning: "to put your name on a list to join a course or activity", example: "I signed up for evening Spanish classes.", topic: "education" },
    { word: "make progress", meaning: "to improve or get closer to a goal", example: "After a month, I started to make real progress.", topic: "education" },
    { word: "patient", meaning: "able to wait calmly or deal with problems without getting angry", example: "My driving instructor was incredibly patient.", topic: "everyday" },
    { word: "(well) worth it", meaning: "good enough to justify the effort, time or money", example: "The hike was hard, but the view was well worth it.", topic: "everyday" },
  ],
  keyPoints: [
    "You get one minute to prepare and then speak for up to two minutes; the examiner stops you.",
    "Write keywords for each bullet, plus a detail, story or feeling you can expand.",
    "Open clearly, extend each bullet, and give the explain bullet the most time.",
    "Use signposts (As for…, The main reason is…) to sound organised.",
    "If you finish early, go back and add a story, a feeling or a comparison.",
  ],
};

export default lesson;
