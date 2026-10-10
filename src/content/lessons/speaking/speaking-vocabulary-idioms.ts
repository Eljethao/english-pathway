import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-vocabulary-idioms",
  title: "Less common vocabulary and idioms (used naturally)",
  summary:
    "Use precise collocations and a few well-chosen idioms the way fluent speakers do, accurately, in the right register and without sounding memorised: the key to IELTS Lexical Resource band 7+.",
  skill: "speaking",
  level: "C1",
  order: 3,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Speaking Part 2" },
    { exam: "ielts", task: "Speaking Part 3" },
  ],
  objectives: [
    "Understand what “less common” and “idiomatic” vocabulary mean in the IELTS band descriptors",
    "Choose strong collocations instead of general words like big, good and very",
    "Use idioms accurately, in their fixed form and in the right context",
    "Deliver a Part 2 long turn that includes natural, precise vocabulary",
  ],
  warmUp: [
    "Think of an English idiom you know. Can you remember the exact situation where you heard it used?",
    "How many ways can you say “very difficult” without using the word “very”?",
  ],
  learn: [
    {
      type: "text",
      title: "What examiners mean by “less common” and “idiomatic”",
      body: "At band 7 and above, IELTS looks for **less common and idiomatic vocabulary**, used with **awareness of style and collocation**. This does not mean rare, academic or old-fashioned words. It means the precise words a fluent speaker would naturally choose.\n\nThere are three layers:\n\n1. **Collocations**: words that naturally go together. *A steep learning curve*, *a heated debate*, *strike a balance*, *a fleeting visit*. These are the most useful and the safest.\n2. **Phrasal verbs and fixed phrases**: *get the hang of*, *come round to an idea*, *on the spur of the moment*, *for the time being*.\n3. **Idioms**: phrases whose meaning is not literal. *A far cry from*, *the tip of the iceberg*, *bite off more than you can chew*.\n\nThe golden rule: **one precise expression used correctly is worth more than five idioms forced in.** Examiners quickly notice memorised phrases that don't fit the context, and errors in idioms (wrong word, wrong form) are especially noticeable.",
    },
    {
      type: "table",
      title: "Upgrading general vocabulary",
      headers: ["General", "More precise (collocation / idiom)", "Example"],
      rows: [
        ["very difficult to learn", "a steep learning curve", "The first month in the job was a steep learning curve."],
        ["very different from", "a far cry from", "My flat now is a far cry from my tiny student room."],
        ["find a middle way", "strike a balance (between… and…)", "It's hard to strike a balance between work and family."],
        ["start to understand how to do it", "get the hang of (something)", "It took me weeks to get the hang of driving on the left."],
        ["very important / essential", "crucial / indispensable", "A reliable internet connection is indispensable for remote work."],
        ["slowly change your mind", "come round to (an idea)", "I wasn't keen at first, but I came round to the idea."],
        ["a small visible part of a big problem", "the tip of the iceberg", "The complaints we hear are just the tip of the iceberg."],
        ["try to do too much", "bite off more than you can chew", "I bit off more than I could chew by taking three courses."],
      ],
    },
    {
      type: "text",
      title: "Using idioms naturally",
      body: "- **Keep the fixed form.** It's *a piece of cake*, not *a piece of cakes*; *once in a blue moon*, not *once in a blue sky*. Only the verb changes: *I bit off more than I could chew.*\n- **Match the register.** Idioms suit Part 1 and Part 2, where you talk about your own life. In Part 3, precise collocations (*a marked decline*, *a pressing issue*) usually sound more appropriate than very informal idioms.\n- **Avoid clichés and old-fashioned expressions.** *It's raining cats and dogs* is famous in textbooks but rarely heard; *it's pouring (down)* is what people actually say.\n- **Don't announce them.** Saying “as the idiom goes…” draws attention to the phrase and makes it sound rehearsed.\n- **Learn them in a sentence.** Note *who* says it and *when*, not just the meaning.",
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model answer: IELTS Part 2",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "I'd like to talk about learning to cook properly, which I did when I moved abroad for my master's degree about three years ago. Before that, I'd always lived with my parents, and to be honest, I'd hardly ever set foot in the kitchen. So when I arrived and realised that eating out every night was going to cost me a fortune, I decided I had to learn. I started with really simple things, like pasta and omelettes, mostly by watching videos online. It was a steep learning curve, though. In the first few weeks I burnt more meals than I care to remember, and I set off the smoke alarm at least twice, which didn't go down very well with my flatmates. But gradually I got the hang of it. I learnt to plan meals for the week, and I started experimenting with recipes from home, which was a nice way to cope with homesickness. The reason this skill took longer than I expected is that cooking isn't just following a recipe. It's about timing, and juggling three things at once, and that only comes with practice. Looking back, I'm really glad I stuck with it. Now I genuinely enjoy cooking, and my cooking is a far cry from those first disasters. It's probably the most useful thing I learnt that year, apart from the degree itself, of course.",
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "**Cue card:** Describe a skill you learned that took longer than you expected.\n\n- **Precise collocations:** *cost me a fortune*, *a steep learning curve*, *set off the smoke alarm*, *cope with homesickness*. None of these is rare, but each one is exactly the right word.\n- **Phrasal verbs and fixed phrases:** *set foot in*, *got the hang of it*, *stuck with it*, *go down well with*.\n- **Idioms, used sparingly:** *more than I care to remember* and *a far cry from*. They fit naturally into a personal story, and they appear only where they add colour.\n- **Accurate forms:** “didn't go down **very** well with my flatmates” and “I **got** the hang of **it**”. The fixed parts stay fixed; only tense and pronouns change.\n- **No forced phrases:** there's no “as the saying goes”, and nothing that sounds memorised from a list. The vocabulary serves the story.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Meanings",
        instructions: "Match each expression to its meaning. There is one extra meaning.",
        left: [
          "on the spur of the moment",
          "a double-edged sword",
          "once in a blue moon",
          "go the extra mile",
          "hit it off",
          "take something for granted",
          "be second nature",
        ],
        right: [
          "very rarely",
          "make more effort than is expected",
          "to fail completely",
          "suddenly, without planning",
          "to be so familiar that you do it without thinking",
          "something with both good and bad effects",
          "to like each other immediately",
          "not appreciate something because you always have it",
        ],
        answer: [3, 5, 0, 1, 6, 7, 4],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Complete the answers",
        instructions: "Complete each Part 1 or Part 2 answer with an expression from the box. Change nothing in the expression.",
        wordBank: ["strike a balance", "a far cry from", "the tip of the iceberg", "get the hang of", "came round to", "a steep learning curve"],
        text:
          "1. I found the first year of university hard. It was {{0}}, especially academic writing.\n2. I was against moving to the suburbs at first, but I eventually {{1}} the idea.\n3. My current job is {{2}} my first one in a call centre. I actually enjoy it now.\n4. Most students try to {{3}} between studying and having a social life.\n5. Typing on a phone screen was difficult at first, but you soon {{4}} it.\n6. The pollution you can see in the river is just {{5}}. The real damage is below the surface.",
        answers: [["a steep learning curve"], ["came round to", "came around to"], ["a far cry from"], ["strike a balance"], ["get the hang of"], ["the tip of the iceberg"]],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Natural or forced?",
        questions: [
          {
            prompt: "Which sentence uses an idiom both correctly and naturally?",
            options: [
              "Learning Japanese was a piece of cakes for me.",
              "I only go to the cinema once in a blue sky.",
              "I took on too many projects and bit off more than I could chew.",
              "As the famous idiom says, I hit it off with my roommate.",
            ],
            answer: 2,
            explanation: "Only C is both correct and natural: it keeps the fixed form and changes only the verb tense. A and B change the fixed words; D uses *hit it off* correctly but announces it, which sounds rehearsed.",
          },
          {
            prompt: "Examiner (Part 3): “Why do some governments struggle to reduce traffic in cities?” Which phrase fits the register of a Part 3 answer best?",
            options: [
              "It's a real pain in the neck for them.",
              "There's a constant tension between economic growth and environmental goals.",
              "It's raining cats and dogs with problems.",
              "Governments are, like, totally stuck.",
            ],
            answer: 1,
            explanation: "Part 3 suits precise, neutral collocations (*a constant tension between… and…*). A is too informal, C is a misused cliché, and D is too casual.",
          },
          {
            prompt: "Which sentence shows the best collocation?",
            options: [
              "There was a strong debate about the new policy.",
              "There was a heated debate about the new policy.",
              "There was a hot debate about the new policy.",
              "There was a big hot debate about the new policy.",
            ],
            answer: 1,
            explanation: "*Heated debate* is the natural collocation. *Hot debate* and *strong debate* are understandable but not what fluent speakers say.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "IELTS Part 2: long turn",
        instructions: "You have one minute to prepare and up to two minutes to speak. In your notes, write two or three precise expressions you want to use, but let them come naturally.",
        prompt: "Describe a time when you had to adapt to a new situation.",
        cueCard: [
          "what the situation was",
          "when and where it happened",
          "what you found difficult about it",
          "and explain how you managed to adapt",
        ],
        prepSeconds: 60,
        speakSeconds: 120,
        modelAnswer:
          "I'm going to talk about starting a new job in a completely different field, which happened about two years ago. I'd spent several years working in a busy clothes shop, and then I got a position as an administrator at a hospital. On paper it sounded like a straightforward office job, but it turned out to be a far cry from anything I'd done before. The first thing I found difficult was the sheer amount of jargon. Doctors and nurses would rattle off abbreviations, and I'd just nod and frantically look them up afterwards. On top of that, the pace was completely different. In a shop, if something goes wrong, it's an inconvenience. In a hospital, a mistake with an appointment can have serious consequences, so I felt under a lot of pressure. Honestly, for the first month I wondered whether I'd bitten off more than I could chew. So how did I adapt? Well, a few things helped. One of the senior administrators took me under her wing, and she was incredibly patient with all my questions. I also made myself a little glossary and went through it on the bus every morning. And gradually, I just stopped panicking about not knowing everything. By about the third month, the systems had become second nature, and I could help newer staff. Looking back, it taught me that I'm more adaptable than I thought, and that it's fine to feel out of your depth at first, as long as you're willing to ask for help.",
        targetPhrases: ["a far cry from", "bitten off more than I could chew", "took me under her wing", "second nature", "out of your depth"],
        checklist: [
          "I covered all four points on the cue card.",
          "I used at least three precise collocations or phrasal verbs, not just general words.",
          "Any idioms I used kept their fixed form and fitted the situation.",
          "I didn't announce any idioms (“as the saying goes…”).",
          "I kept talking for close to two minutes, with a short reflection at the end.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Lexical Resource is 25% of your Speaking score. To reach band 7, show **flexibility**: paraphrase when you don't know a word, use some less common items accurately, and show awareness of collocation. Occasional small errors are acceptable at band 7; memorised phrases that don't fit the context work against you.",
    },
    {
      exam: "ielts",
      body: "Part 2 is often the most natural place for idiomatic language, because you are telling a personal story. In Part 3, switch to precise, slightly more formal collocations such as *a pressing concern*, *a growing tendency* or *strike a balance*.",
    },
  ],
  vocabulary: [
    { word: "a steep learning curve", meaning: "a situation where you have to learn a lot very quickly", example: "Moving into management was a steep learning curve.", topic: "work" },
    { word: "a far cry from", meaning: "very different from", example: "The new stadium is a far cry from the old one.", topic: "everyday" },
    { word: "get the hang of", meaning: "to learn how to do something, often after some practice", example: "Once you get the hang of it, skiing is great fun.", topic: "everyday" },
    { word: "strike a balance", meaning: "to find a sensible middle position between two things", example: "Parents need to strike a balance between freedom and safety.", topic: "society" },
    { word: "come round to", meaning: "to gradually change your mind and accept an idea", example: "My dad has finally come round to the idea of online banking.", topic: "everyday" },
    { word: "bite off more than you can chew", meaning: "to try to do more than you are able to", example: "I bit off more than I could chew when I agreed to organise the whole event.", topic: "everyday" },
    { word: "take someone under your wing", meaning: "to look after and help someone with less experience", example: "A colleague took me under her wing during my first year.", topic: "work" },
    { word: "out of your depth", meaning: "in a situation that is too difficult for your knowledge or skill", example: "I felt completely out of my depth in the advanced class.", topic: "everyday" },
    { word: "second nature", meaning: "something you can do easily and automatically", example: "After a few months, using the software became second nature.", topic: "everyday" },
    { word: "jargon", meaning: "special words used by a particular profession that others find hard to understand", example: "The report was full of legal jargon.", topic: "work" },
    { word: "the tip of the iceberg", meaning: "a small, visible part of a much larger problem", example: "These cases are only the tip of the iceberg.", topic: "society" },
  ],
  keyPoints: [
    "“Less common” vocabulary means precise, natural choices, not rare or academic words.",
    "Collocations are the safest way to sound fluent: a steep learning curve, strike a balance, a heated debate.",
    "Idioms have fixed forms: change only the tense and pronouns.",
    "Use idioms mainly in Parts 1 and 2; prefer precise collocations in Part 3.",
    "One well-placed expression is better than several forced ones.",
  ],
};

export default lesson;
