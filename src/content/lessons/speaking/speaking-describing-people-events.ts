import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-describing-people-events",
  title: "Describing people and events",
  summary:
    "Bring people and events to life in IELTS Speaking Part 2: show personality with real evidence, set the scene, tell what happened in a clear order and finish with a short reflection.",
  skill: "speaking",
  level: "B2",
  order: 5,
  minutes: 25,
  exams: [{ exam: "ielts", task: "Speaking Part 2" }],
  objectives: [
    "Describe a person's character with specific evidence, not just a list of adjectives",
    "Add detail about people and places with relative clauses (who, whose, which, where)",
    "Tell the story of an event in a clear sequence, with a scene, a highlight and a reflection",
    "Speak for up to two minutes on a person or event cue card",
  ],
  warmUp: [
    "Think of someone you know well. Which three adjectives describe them? Can you remember something they did that shows one of those qualities?",
    "What is the most memorable event you have been to in the last year: a wedding, a concert, a match, a festival?",
  ],
  learn: [
    {
      type: "text",
      title: "Two of the most common cue card types",
      body: "Many IELTS Part 2 cue cards ask you to describe a **person** (*someone you admire, a teacher who helped you, a friend you have known for a long time*) or an **event** (*a celebration, a time you helped someone, a performance you watched*).\n\nYou already know how to use your minute of preparation and organise two minutes of speech. This lesson gives you the language to make people and events **vivid**, so the examiner hears a real person and a real story, not a list.",
    },
    {
      type: "text",
      title: "People: show, don't just tell",
      body: "Adjectives on their own are thin: *She's kind and hard-working.* The examiner has heard that hundreds of times. Strong speakers **prove** each quality with something the person did, a habit or a moment you remember.\n\nA simple pattern: **adjective → evidence → effect on you**.\n\n*She's incredibly patient.* (adjective) *When I was failing maths, she stayed after class twice a week to go through problems with me* (evidence), *and she never once made me feel stupid* (effect).\n\nKeep **appearance** short: one or two details are enough (*tall, with grey hair and glasses that are always on top of his head*). Character, habits and your relationship with the person are much more interesting to talk about.",
    },
    {
      type: "table",
      title: "Language for describing people",
      headers: ["Purpose", "Useful language", "Example"],
      rows: [
        ["Character, with a modifier", "incredibly / genuinely / a bit + adjective", "He's genuinely generous, but a bit stubborn."],
        ["Typical behaviour", "She's the kind of person who… / He tends to…", "She's the kind of person who remembers everyone's birthday."],
        ["Habits you notice (often affectionate or annoying)", "always + present continuous", "He's always making jokes, even in serious meetings."],
        ["Past habits", "used to… / would…", "When I was little, she would read to me every night."],
        ["Extra detail", "who / whose / which / where", "my uncle, whose shop is next to the station"],
        ["Your relationship", "I've known her since… / We get on really well. / I look up to him.", "I've known him since we were at primary school."],
        ["Admiration", "What I admire most about her is… / The thing that strikes me about him is…", "What I admire most about her is her honesty."],
      ],
    },
    {
      type: "text",
      title: "Events: scene, sequence, highlight, reflection",
      body: "A good event description has four parts:\n\n1. **Set the scene**: when, where, who was there and why.\n2. **Tell what happened in order**, using sequencing words so the listener can follow.\n3. **Zoom in on one highlight**: describe a single moment in detail, including what you saw, heard and felt.\n4. **Reflect**: what the event meant to you, or how you see it now.\n\nAtmosphere words help the listener *be there*: *the room was packed*, *the atmosphere was electric*, *everyone burst out laughing*, *you could smell the food from the street*.",
    },
    {
      type: "example",
      title: "Sequencing an event",
      items: [
        "**To set the scene,** it was my grandmother's eightieth birthday, and the whole family had travelled to her village.",
        "**At first,** everyone was a bit formal, sitting around a long table in the garden.",
        "**Just as** we were about to start eating, the power went off.",
        "**By the time** the lights came back on, we'd moved outside and someone had found a guitar.",
        "**The highlight for me was when** my grandmother stood up and sang a song from her childhood.",
        "**Looking back,** it was the most relaxed family party we've ever had.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Lexical Resource rewards precise words. *Reliable*, *outgoing*, *down-to-earth*, *a lively atmosphere* and *a moving speech* say much more than *nice* and *good*. But accuracy matters more than rarity: choose words you are sure of, in the right combinations.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Prove it: adjective and evidence",
        instructions: "Match each adjective to the evidence that shows it. There is one extra piece of evidence.",
        left: ["reliable", "generous", "stubborn", "outgoing", "easy-going", "ambitious"],
        right: [
          "She hardly ever talks about herself and goes red when people praise her.",
          "Once she's made up her mind, nothing you say will change it.",
          "He'll start a conversation with anyone, even a stranger in a lift.",
          "If she says she'll be there at eight, she's there at five to eight.",
          "He's already planning to run his own company before he's thirty.",
          "When plans change at the last minute, she just shrugs and says, “No problem.”",
          "He once lent me his car for a whole month and wouldn't take any money for petrol.",
        ],
        answer: [3, 6, 1, 2, 5, 4],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The cue card",
      body: "**Describe a person who has taught you something important outside school.**\n\nYou should say:\n\n- who this person is\n- how you know them\n- what they taught you\n\nand explain why this lesson has been important to you.",
    },
    {
      type: "audio",
      title: "Model answer (about 2 minutes)",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "I'd like to talk about my uncle Tomás, who runs a small bicycle repair shop in the town where I grew up. He's my mum's younger brother, and he's the kind of person who can fix almost anything: bikes, radios, even my grandmother's old sewing machine.\n\nI've known him all my life, obviously, but we only became close when I was about fifteen. That summer I was bored and a bit lost, so my parents sent me to help out in his shop three mornings a week. At first, I thought it was a kind of punishment.\n\nWhat he taught me, though, wasn't really about bikes. It was about patience. He's incredibly calm. I remember one morning a customer came in shouting because his gears still weren't working. Instead of arguing, my uncle just listened, nodded, took the bike back and spent an hour on it without charging him anything. When I asked him why, he said, “An angry customer is usually a worried customer.” I've never forgotten that. He also had this habit of never rushing a job. If I tried to hurry, he'd say, “Slowly, so you only do it once.”\n\nSo why has this been important to me? Well, I'm studying engineering now, and whenever a project goes wrong, I can almost hear him telling me to slow down. On top of that, when I worked part-time in a café last year and customers were rude, I tried to remember that they might just be stressed. So, looking back, those boring summer mornings taught me more about dealing with people than any class I've ever taken.",
    },
    {
      type: "text",
      title: "How a strong candidate does it",
      body: "- **The opening answers the first bullet in one sentence**, with a relative clause that adds detail at once: *my uncle Tomás, who runs a small bicycle repair shop*.\n- **One quality, proved by a story.** The speaker says *He's incredibly calm*, then tells the story of the angry customer. The story does the work; no list of adjectives is needed.\n- **Direct speech** makes the person real: *he said, “An angry customer is usually a worried customer.”* One or two short quotes are enough.\n- **Habits:** *he had this habit of…* and *he'd say…* (would for past habits) show grammatical range naturally.\n- **The reflection connects past and present**: *whenever a project goes wrong, I can almost hear him…* This answers the *explain* bullet with two developed reasons, not one sentence.\n- **Natural spoken markers**: *obviously*, *though*, *Well*, *On top of that*, *So, looking back*.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Complete the event description",
        instructions: "Complete the talk with the words and phrases in the box. Use each one once.",
        text: "The event I'd like to describe is a street festival {{0}} takes place in my neighbourhood every September. Last year I went with my neighbour Ana, {{1}} family has lived on our street for three generations. {{2}}, it was quite quiet, with just a few stalls setting up. But {{3}} the sun went down, the whole street was packed and the atmosphere was {{4}}. {{5}} we were queuing for food, a brass band suddenly marched past, and everyone started dancing. {{6}}, I think it was the first time I felt I really belonged there.",
        answers: [["which", "that"], ["whose"], ["At first", "At the beginning", "In the beginning"], ["by the time", "once", "when", "as soon as", "after"], ["electric", "amazing", "incredible", "fantastic"], ["While", "As", "When", "Just as"], ["Looking back", "Looking back on it"]],
        wordBank: ["which", "whose", "At first", "by the time", "electric", "While", "Looking back"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "order",
        mode: "lines",
        title: "Put the story in order",
        instructions: "Cue card: “Describe an event that didn't go as planned.” Put the parts of this talk in the best order.",
        items: [
          "I'm going to talk about a surprise party that some friends and I organised for my best friend's thirtieth birthday last spring.",
          "To set the scene, eight of us had booked a private room in a restaurant and decorated it with photos from her teenage years.",
          "The plan was that her boyfriend would bring her in at eight o'clock, and we'd all jump up and shout “Surprise!”",
          "Unfortunately, just as we turned off the lights, the manager came in and told us there was a gas leak in the kitchen.",
          "By the time she arrived, we were all standing outside on the pavement, holding balloons in the rain.",
          "Looking back, it's the party we laugh about most, because nothing went right but everyone had a great time.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "shadow",
        title: "Say it smoothly",
        instructions: "Listen and repeat. Keep each relative clause or time clause in one smooth group, with a tiny pause before the main idea.",
        voice: "uk",
        sentences: [
          "She's the kind of person who notices when you're having a bad day.",
          "What I admire most about him is his patience.",
          "My uncle, who runs a small bike shop, can fix almost anything.",
          "Just as we were about to leave, the band came back on stage.",
          "By the time we got home, it was nearly three in the morning.",
          "Looking back, it was one of the best days of my life.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "Your turn: an event cue card",
        instructions: "You have one minute to make notes. Plan the four parts: scene, sequence, one highlight and a reflection. Then speak for up to two minutes.",
        prompt: "Describe a public event you went to and enjoyed, such as a festival, a concert or a sports match.",
        cueCard: [
          "what the event was",
          "when and where it took place",
          "who you went with and what happened",
          "and explain why you enjoyed it so much",
        ],
        prepSeconds: 60,
        speakSeconds: 120,
        modelAnswer:
          "The event I'd like to describe is an open-air film festival that takes place every August in a big park near my flat. I went last summer with my flatmate Jonas and two friends from work.\n\nTo set the scene, the organisers put up a huge screen at one end of the park, and people bring blankets, picnics and folding chairs. Tickets are cheap, so the audience is a real mix: families with small kids, students, older couples. We arrived about an hour early to get a good spot, and at first it was just a relaxed picnic. We'd brought far too much food, as usual.\n\nThe film that night was an old black-and-white comedy, which I'd never heard of, and to be honest I wasn't expecting much. But just as the film started, the sun went down behind the trees, and the whole park went quiet. What I remember most is the sound of a few thousand people laughing at exactly the same moment. It was a bit like being at a concert. Then, about halfway through, it started to drizzle, and instead of leaving, everyone just put up umbrellas or pulled their blankets over their heads and carried on watching.\n\nSo why did I enjoy it so much? Partly it was the atmosphere. Watching a film outside with strangers feels completely different from watching it alone on your laptop. But I think it was also the feeling of being part of the city. By the time we walked home, we were already planning to go again, and we've been to two more screenings since then.",
        targetPhrases: ["I'd like to describe", "to set the scene", "at first", "just as", "what I remember most", "by the time"],
        checklist: [
          "I set the scene: when, where and who was there.",
          "I told the events in a clear order, using sequencing words.",
          "I zoomed in on one moment and described what I saw, heard or felt.",
          "I used at least one relative clause (who…, which…, where…).",
          "I explained why I enjoyed it with more than one reason.",
          "I kept talking for close to two minutes without long pauses.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Person cue cards often end with *explain why you admire / like / respect this person*. In your minute of preparation, choose **one strong moment** that proves your main adjective. One detailed story is worth more than five adjectives.",
    },
    {
      exam: "ielts",
      body: "Give the person a name and a role: *my uncle Tomás*, *my first manager, Priya*. It is easier to keep talking about a specific person than about *a person*, and it sounds more real.",
    },
    {
      exam: "ielts",
      body: "After your talk, the examiner may ask one or two short follow-up questions, such as *Do you still see this person?* A brief answer of one or two sentences is fine: the long turn is over.",
    },
  ],
  vocabulary: [
    { word: "look up to (someone)", meaning: "to admire and respect someone, often an older person", example: "I've always looked up to my older sister.", topic: "society" },
    { word: "get on (well) with", meaning: "to have a friendly relationship with someone", example: "I get on really well with my flatmates.", topic: "everyday" },
    { word: "down-to-earth", meaning: "practical, honest and easy to talk to", example: "Even though she's famous, she's very down-to-earth.", topic: "society" },
    { word: "reliable", meaning: "able to be trusted to do what you expect", example: "He's the most reliable person on the team.", topic: "work" },
    { word: "stubborn", meaning: "refusing to change your opinion or plans", example: "My grandfather is too stubborn to use a smartphone.", topic: "everyday" },
    { word: "outgoing", meaning: "friendly and happy to meet new people", example: "She's so outgoing that she made friends on her first day.", topic: "society" },
    { word: "packed", meaning: "extremely full of people", example: "The stadium was packed for the final.", topic: "everyday" },
    { word: "highlight", meaning: "the best or most exciting part of something", example: "The highlight of the trip was the boat ride.", topic: "travel" },
    { word: "moving", meaning: "causing strong feelings, especially of sadness or sympathy", example: "The bride's father gave a very moving speech.", topic: "society" },
    { word: "burst out laughing", meaning: "to suddenly start laughing", example: "When the cake fell over, everyone burst out laughing.", topic: "everyday" },
    { word: "carry on", meaning: "to continue doing something", example: "It started to rain, but we carried on watching.", topic: "everyday" },
  ],
  keyPoints: [
    "For people, use adjective → evidence → effect: one real moment proves a quality better than a list.",
    "Keep appearance brief and spend your time on character, habits and your relationship.",
    "Relative clauses (who, whose, which, where) add detail smoothly.",
    "For events, set the scene, tell what happened in order, zoom in on one highlight, then reflect.",
    "Sequencing phrases such as Just as…, By the time… and Looking back… make a story easy to follow.",
  ],
};

export default lesson;
