import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-reference-words",
  title: "Reference words: it, this, they",
  summary:
    "Follow a text by working out what words like it, they, this, which and such point back to, so you can see how sentences connect and answer reference questions correctly.",
  skill: "reading",
  level: "B1",
  order: 5,
  minutes: 25,
  exams: [
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
    { exam: "toeic", task: "Reading Part 6 – Text Completion" },
    { exam: "ielts", task: "Reading – Sentence completion" },
  ],
  objectives: [
    "Find what a pronoun such as it, they or them refers to",
    "Understand how this, these, such and which can point to a whole idea",
    "Use reference words as clues to put sentences in a logical order",
    "Choose the right reference word in a short text completion task",
  ],
  warmUp: [
    "Read this: “My sister bought a bike last week. She rides it to work every day.” What do *She* and *it* mean here?",
    "Why do writers use words like *it* and *they* instead of repeating the same noun again and again?",
  ],
  learn: [
    {
      type: "text",
      title: "What are reference words?",
      body: "Good writers don't repeat the same noun again and again. Instead, they use short **reference words** that point back to something earlier in the text.\n\n“The city opened a new **park** in May. **It** has a lake and a playground.” → *It* = the park.\n\nIf you don't know what a reference word points to, you can easily misunderstand a sentence. That is why exams test them, sometimes directly (*The word “they” in paragraph 2 refers to…*) and sometimes inside questions about details.",
    },
    {
      type: "table",
      title: "Common reference words",
      headers: ["Reference word", "What it usually points to", "Example"],
      rows: [
        ["it, its", "one thing, animal or idea (singular)", "The museum is free. **Its** café is on the top floor."],
        ["they, them, their", "people or things (plural)", "Visitors love the gardens. **They** often stay all day."],
        ["he, she, him, her", "one person", "Ms Lee called. **She** will call again at three."],
        ["this, that", "a thing, or a whole idea in the sentence before", "The buses are often late. **This** makes people angry."],
        ["these, those", "plural things or ideas", "The shop sells old cameras. **These** are popular with students."],
        ["which, who, where", "the noun just before it (after a comma, *which* can also point to a whole idea)", "The train, **which** was late, was very full."],
        ["such + noun", "something of the kind just described", "Some hotels charge for Wi-Fi. **Such** charges are less common now."],
        ["one, ones", "another example of the same noun", "I don't like the red shoes. I prefer the black **ones**."],
        ["here, there, then", "a place or a time already mentioned", "We arrived in Lyon at noon. We had lunch **there**."],
      ],
    },
    {
      type: "text",
      title: "How to find what a reference word points to",
      body: "1. **Look back.** The answer is usually in the same sentence or the sentence before.\n2. **Check the grammar.** Is the word singular (*it, this*) or plural (*they, these*)? Is it a person (*he, she, who*) or a thing (*it, which*)?\n3. **Check the meaning.** Some nouns fit the grammar but not the meaning. Ask: *what can do this action?*\n4. **Test it.** Put your answer in place of the reference word. Does the sentence still make sense?",
    },
    {
      type: "example",
      title: "Test it: put the noun in its place",
      items: [
        "“The council planted 200 trees along the river. **They** will give shade in summer.”",
        "Possible answers in the sentence before: *the council* or *200 trees*. Both can be plural in British English.",
        "Meaning: what gives shade? Trees, not a council.",
        "Test: “**The 200 trees** will give shade in summer.” It makes sense, so *They* = the trees.",
      ],
    },
    {
      type: "text",
      title: "This and which can point to a whole idea",
      body: "*This*, *that* and *which* (after a comma) don't always point to one noun. Sometimes they point to a **whole idea** in the sentence before.\n\n“Many people in our office now work from home on Fridays. **This** means the car park is half empty.” → *This* = the fact that many people work from home on Fridays.\n\n“The library now opens on Sundays, **which** is good news for students.” → *which* = the fact that the library opens on Sundays.\n\nWriters often add a noun after *this* or *such* to make the idea clear: **this change**, **this problem**, **these results**, **such schemes**. The noun tells you what kind of idea to look for.",
    },
    {
      type: "tip",
      exam: "toefl",
      body: "Read an Academic Passage includes questions about how ideas are connected. Reference words are the links between sentences, so when a sentence starts with *This* or *Such*, read the sentence before it carefully.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "The village that saved its shop",
      labelled: true,
      paragraphs: [
        "For more than a hundred years, the village of Elmbury had one small shop. It sold bread, newspapers and almost everything else that people needed from day to day. A few years ago, the owners, Ruth and David Hale, decided to retire. They tried to sell the business, but nobody wanted to buy it.",
        "This was bad news for the village. The nearest supermarket is eleven kilometres away, and the bus goes there only twice a day. Older residents were especially worried, because many of them do not drive. For them, the shop was not just a place to buy milk. It was also a place to meet friends and catch up on local news.",
        "So the villagers made an unusual decision: they would buy the shop themselves. More than 150 people each paid £50 or more to become members, and the local council lent them some money. Such shops, owned by the people who use them, already existed in other parts of the country, but this was the first one in the area.",
        "Today the shop is run by two paid staff and a team of volunteers, who each work one or two mornings a week. The volunteers do more than serve customers. They also deliver shopping to people who cannot leave their homes. On Fridays, they run a coffee morning, which has become the busiest event of the week.",
        "Any money that the shop makes goes back into the village. Ruth Hale, who now works there as a volunteer herself, is delighted. “We thought the shop would close for ever,” she says. “Instead, it belongs to everyone.”",
      ],
    },
    {
      type: "text",
      title: "How a strong reader follows the references",
      body: "**It** (paragraph A, sentence 2): singular, a thing. Look back → *one small shop*. Test: “The shop sold bread, newspapers…” It makes sense.\n\n**They** (paragraph A): plural, people who can try to sell something → *Ruth and David Hale*.\n\n**it** in “nobody wanted to buy it”: singular, something you can buy → *the business*.\n\n**This** (paragraph B): not one noun. It points to the whole situation in paragraph A: the owners wanted to retire, and nobody would buy the shop. The rest of paragraph B explains why this was bad news.\n\n**them** in “many of them do not drive”: plural people → *older residents*.\n\n**Such shops** (paragraph C): shops of the kind just described, bought and owned by local people. *Such* always points back to something you have already read about.\n\n**which** (paragraph D): after a comma, the nearest noun is *a coffee morning*. Test: “The coffee morning has become the busiest event of the week.” It makes sense.\n\nA strong reader checks the **grammar** (singular or plural, person or thing) and the **meaning** every time.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Check the model text",
        instructions: "Use the passage “The village that saved its shop”. What does each reference word refer to?",
        questions: [
          {
            prompt: "In paragraph B, *It* in “It was also a place to meet friends” refers to…",
            options: ["the supermarket", "the bus", "the shop", "the village"],
            answer: 2,
            explanation: "The sentence before says “the shop was not just a place to buy milk”. *It was also a place…* continues the same idea about the shop.",
          },
          {
            prompt: "In paragraph B, *there* in “the bus goes there only twice a day” refers to…",
            options: ["the village", "the nearest supermarket", "the shop", "the council"],
            answer: 1,
            explanation: "*There* points to a place mentioned just before: “The nearest supermarket is eleven kilometres away”.",
          },
          {
            prompt: "In paragraph C, *they* in “they would buy the shop themselves” refers to…",
            options: ["Ruth and David Hale", "the council", "the volunteers", "the villagers"],
            answer: 3,
            explanation: "“So the villagers made an unusual decision: they would buy the shop themselves.” Ruth and David were selling the shop, not buying it.",
          },
          {
            prompt: "In paragraph C, *them* in “the local council lent them some money” refers to…",
            options: ["the members of the council", "the villagers who were buying the shop", "Ruth and David Hale", "people in other parts of the country"],
            answer: 1,
            explanation: "The council lent money to the people who were buying the shop. A council does not lend money to itself, and the Hales were the sellers.",
          },
          {
            prompt: "In paragraph D, *They* in “They also deliver shopping” refers to…",
            options: ["the volunteers", "the two paid staff", "the customers", "people who cannot leave their homes"],
            answer: 0,
            explanation: "The sentence before is about the volunteers: “The volunteers do more than serve customers. They also deliver shopping…”",
          },
          {
            prompt: "In paragraph E, *it* in “Instead, it belongs to everyone” refers to…",
            options: ["the money", "the village", "the shop", "the coffee morning"],
            answer: 2,
            explanation: "Ruth first says “We thought the shop would close for ever.” *Instead, it belongs to everyone* is about the same shop.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Fridays without email",
      labelled: true,
      timerMinutes: 4,
      paragraphs: [
        "Two years ago, Brightwell, a small design company, tried an experiment. On Fridays, its forty employees were not allowed to send emails to each other. If they needed to ask a colleague something, they had to phone them or walk over to their desk.",
        "The idea came from the company's director, Nadia Price. She had noticed that her staff spent hours every day reading and answering messages, and many of these were sent to people who sat only a few metres away. “People had stopped talking to each other,” she explains. “The office was full, but it was completely silent.”",
        "At first, not everyone liked the rule. Some designers said that they found phone calls stressful. Others worried that they would forget decisions if nothing was written down. To solve these problems, the company set up a shared online board, which showed every decision that was made during the day.",
        "After six months, the results were clear. Staff said that they felt less tired at the end of the week, and they solved problems faster because they could discuss them face to face. Such conversations also helped new employees, who learned a lot by listening to their more experienced colleagues.",
        "The experiment was not perfect. Customers still sent emails on Fridays, and most of them expected a quick reply. Brightwell therefore made one exception: staff could still email people outside the company. Today, the rule is still in place, and Nadia has no plans to change it. “Our staff talk to each other again,” she says. “That is worth more than an empty inbox.”",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Reference questions",
        instructions: "Read “Fridays without email” in four minutes. Then choose what each word or phrase refers to.",
        questions: [
          {
            prompt: "In paragraph A, *them* in “they had to phone them” refers to…",
            options: ["the employees", "a colleague", "emails", "the company"],
            answer: 1,
            explanation: "Employees phoned the colleague they needed to ask. English often uses *them* and *their* for one person when we don't say if the person is a man or a woman.",
          },
          {
            prompt: "In paragraph B, *these* in “many of these were sent to people…” refers to…",
            options: ["hours", "staff", "messages", "metres"],
            answer: 2,
            explanation: "Look back: staff spent hours “reading and answering messages”. Messages are things that can be *sent*.",
          },
          {
            prompt: "In paragraph C, *these problems* refers to…",
            options: [
              "finding phone calls stressful and forgetting decisions",
              "the shared online board",
              "the rule about emails on Fridays",
              "emails from customers",
            ],
            answer: 0,
            explanation: "*These problems* sums up the two worries in the sentences just before: stressful phone calls and forgetting decisions.",
          },
          {
            prompt: "In paragraph C, *which* in “which showed every decision” refers to…",
            options: ["the company", "these problems", "the day", "a shared online board"],
            answer: 3,
            explanation: "*Which* comes straight after *a shared online board*, and a board can show decisions.",
          },
          {
            prompt: "In paragraph D, *Such conversations* means…",
            options: [
              "phone calls with customers",
              "emails between colleagues",
              "face-to-face discussions between staff",
              "meetings with the director",
            ],
            answer: 2,
            explanation: "The sentence before says staff could “discuss them face to face”. *Such conversations* = conversations of that kind.",
          },
          {
            prompt: "In paragraph E, *them* in “most of them expected a quick reply” refers to…",
            options: ["customers", "emails", "Fridays", "employees"],
            answer: 0,
            explanation: "Check the meaning: emails can't *expect* anything, but people can. *Them* = the customers.",
          },
          {
            prompt: "In paragraph E, *That* in “That is worth more than an empty inbox” refers to…",
            options: ["the rule", "staff talking to each other again", "an empty inbox", "the experiment"],
            answer: 1,
            explanation: "*That* points to the whole idea in the sentence before: “Our staff talk to each other again.”",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Sentence completion",
        instructions:
          "Complete the sentences about “Fridays without email”. Write NO MORE THAN THREE WORDS from the passage in each gap. Some answers are hidden behind a reference word, so check what *who* and *them* point to.",
        text: "1. On Fridays, Brightwell employees could not send {{0}} to each other.\n2. Nadia noticed that many messages went to people who sat only {{1}} away.\n3. To help staff remember decisions, the company set up a {{2}}.\n4. By listening to more experienced colleagues, {{3}} learned a lot.\n5. On Fridays, most customers wanted a {{4}} to their emails.\n6. Staff can still send emails to people {{5}} on Fridays.",
        answers: [
          ["emails", "email"],
          ["a few metres", "a few meters", "few metres", "few meters"],
          ["shared online board", "online board"],
          ["new employees"],
          ["quick reply"],
          ["outside the company"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "order",
        title: "Put the sentences in order",
        instructions:
          "These sentences come from a short article, but they are mixed up. Use the reference words (*they*, *these*, *this*, *such*) as clues and put the sentences in the correct order.",
        mode: "lines",
        items: [
          "Last spring, the library in our town started lending something unusual: seeds.",
          "They are kept in small paper envelopes in an old wooden cabinet near the front door.",
          "Members can take up to five of these envelopes each month, free of charge.",
          "In return, they are asked to bring back some seeds from the plants they grow.",
          "This means that the library never runs out, and local gardeners can share their best plants.",
          "Such schemes are a simple, cheap way to bring a community together.",
        ],
      },
    },
    {
      type: "passage",
      title: "Email: new printers",
      paragraphs: [
        "To: All staff",
        "From: Laura Kent, Office Manager",
        "Subject: New printers",
        "Dear colleagues,",
        "Two new printers arrived this morning, ___(1)___ is good news because the old ones often broke down. ___(2)___ are on the second floor, next to the kitchen. Each printer has a touch screen, and ___(3)___ instructions are on the wall above it.",
        "To print, you now need your staff card. Hold ___(4)___ against the reader on the right-hand side of the printer, and your document will print. ___(5)___ system means that nobody can pick up your papers by mistake.",
        "If you have any problems, please contact Tom Reed in IT. ___(6)___ will be happy to help.",
        "Best wishes,",
        "Laura",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "Text completion: choose the reference word",
        instructions: "Read “Email: new printers”. Choose the best word for each gap, as in TOEIC Part 6.",
        questions: [
          {
            prompt: "Gap (1): Two new printers arrived this morning, ______ is good news because the old ones often broke down.",
            options: ["which", "who", "that", "it"],
            answer: 0,
            explanation: "After a comma, *which* can point to the whole idea before it (new printers arrived). *Who* is for people, *that* is not used after a comma like this, and *it* would need a new sentence.",
          },
          {
            prompt: "Gap (2): ______ are on the second floor, next to the kitchen.",
            options: ["It", "They", "This", "There"],
            answer: 1,
            explanation: "The word points back to *two new printers*, which is plural, so *They*. *There are on the second floor* is not correct English.",
          },
          {
            prompt: "Gap (3): Each printer has a touch screen, and ______ instructions are on the wall above it.",
            options: ["it", "its", "it's", "itself"],
            answer: 1,
            explanation: "We need a possessive before the noun *instructions*: the instructions of each printer = *its* instructions. *It's* means *it is*.",
          },
          {
            prompt: "Gap (4): Hold ______ against the reader on the right-hand side of the printer.",
            options: ["it", "them", "its", "they"],
            answer: 0,
            explanation: "You hold *your staff card*: one thing, and an object after the verb, so *it*.",
          },
          {
            prompt: "Gap (5): ______ system means that nobody can pick up your papers by mistake.",
            options: ["This", "These", "It", "Such"],
            answer: 0,
            explanation: "*This system* = the system just described (printing with your card). *These* is plural, *It* cannot come before a noun, and *such* would need *a*: *such a system*.",
          },
          {
            prompt: "Gap (6): Please contact Tom Reed in IT. ______ will be happy to help.",
            options: ["He", "His", "Him", "It"],
            answer: 0,
            explanation: "The word is the subject of *will be* and points to one man, Tom Reed, so *He*.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "In Read an Academic Passage, some questions test the connection between ideas. When a sentence starts with *This*, *These* or *Such*, the link is in the sentence before, so read the two sentences together before you choose an answer.",
    },
    {
      exam: "toeic",
      body: "In Part 6, some gaps test words like *it, its, they, their* and *this*. Check what the word points to: singular or plural, person or thing. The answer may depend on a sentence before the gap, not only on the gap's own sentence.",
    },
    {
      exam: "ielts",
      body: "In sentence completion, the question often uses a noun, while the passage uses a reference word (*they*, *who*, *it*). Find what the reference word points to, then copy the answer exactly and keep to the word limit.",
    },
  ],
  vocabulary: [
    { word: "refer to", meaning: "to point to or be about something", example: "In this sentence, “it” refers to the shop.", topic: "academic" },
    { word: "catch up on", meaning: "to learn the latest news about something", example: "We met for coffee to catch up on each other's news.", topic: "everyday" },
    { word: "lend", meaning: "to give someone money or a thing that they will give back later", example: "The bank lent them the money to buy a house.", topic: "business" },
    { word: "deliver", meaning: "to take goods or letters to a person or place", example: "Volunteers deliver shopping to older neighbours.", topic: "everyday" },
    { word: "delighted", meaning: "very pleased", example: "She was delighted with her exam results.", topic: "everyday" },
    { word: "community", meaning: "the people who live in one area, or a group with something in common", example: "The festival brings the whole community together.", topic: "society" },
    { word: "experiment", meaning: "a test to see what happens when you try something new", example: "As an experiment, we turned off our phones for a week.", topic: "work" },
    { word: "colleague", meaning: "a person you work with", example: "I asked a colleague to check my report.", topic: "work" },
    { word: "stressful", meaning: "making you feel worried and nervous", example: "Moving house can be very stressful.", topic: "health" },
    { word: "face to face", meaning: "meeting in person, not by phone or email", example: "It's easier to solve problems face to face.", topic: "work" },
    { word: "exception", meaning: "something that does not follow the usual rule", example: "Everyone must wear a uniform, with one exception: the manager.", topic: "everyday" },
    { word: "inbox", meaning: "the place where your new emails arrive", example: "I had 200 messages in my inbox after the holiday.", topic: "technology" },
  ],
  keyPoints: [
    "Reference words (it, they, this, which, such) point back to something earlier, so writers don't need to repeat nouns.",
    "Look back, check the grammar (singular or plural, person or thing) and the meaning, then test your answer in the sentence.",
    "This, that and which can point to a whole idea; a noun after this or such (this problem, such schemes) tells you what to look for.",
    "Reference words are also clues to the order of sentences and help you choose the right word in text completion.",
  ],
};

export default lesson;
