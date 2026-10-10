import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-daily-routine-free-time",
  title: "Daily routine and free time",
  summary:
    "Talk about your daily routine, free time and preferences with clear “how often” details and contrasts, for IELTS Speaking Part 1 and the TOEFL interview.",
  skill: "speaking",
  level: "B1",
  order: 5,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Speaking Part 1" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
  ],
  objectives: [
    "Say how often you do things with words like hardly ever, twice a week and every other day",
    "Make answers longer with a contrast: weekdays and weekends, or now and before",
    "Talk about preferences with prefer, would rather and it depends",
    "Answer routine and free-time questions for 30–45 seconds",
  ],
  warmUp: [
    "What do you do every day without thinking about it?",
    "Name one thing you do once a week and one thing you hardly ever do.",
  ],
  learn: [
    {
      type: "text",
      title: "From A-R-E to better details",
      body: "In lesson 2 you learned A-R-E: **Answer**, **Reason**, **Example or Extra detail**. Questions about your routine and free time look easy, so many learners give a quick list and stop: *I get up, I go to work, I come home.* That is a list, not an answer.\n\nThis lesson adds three tools that make routine answers longer, clearer and more interesting:\n\n1. **How often**: *I go swimming twice a week.*\n2. **A contrast**: *On weekdays I'm always busy, but at weekends I take things slowly.*\n3. **A preference**: *I'd rather stay in than go out on a Friday night.*",
    },
    {
      type: "table",
      title: "Tool 1: how often?",
      headers: ["Word or phrase", "Example"],
      rows: [
        ["always / usually / often", "I usually get up at about seven."],
        ["sometimes / now and then", "Now and then I have lunch with my old classmates."],
        ["rarely / hardly ever / never", "I hardly ever watch TV these days."],
        ["once / twice / three times a week (a month, a year)", "I go to the gym three times a week."],
        ["every day / every morning / every other day", "I call my mum every other day."],
        ["on weekdays / at weekends", "At weekends I sleep in until nine."],
      ],
    },
    {
      type: "text",
      title: "Where does the word go?",
      body: "- One-word adverbs like *usually*, *often* and *hardly ever* go **before the main verb**: *I **usually** walk to work.*\n- But they go **after** *am*, *is* and *are*: *I'm **always** tired on Mondays.*\n- Longer expressions like *twice a week* and *every other day* usually go **at the end**: *I play tennis **twice a week**.*\n\nBritish speakers usually say *at weekends*; American speakers say *on weekends*. Both are correct.",
    },
    {
      type: "table",
      title: "Tools 2 and 3: contrasts and preferences",
      headers: ["Purpose", "Useful language"],
      rows: [
        ["Weekdays and weekends", "On weekdays I…, but at weekends I… / During the week…, whereas on Saturdays…"],
        ["Now and before", "I used to…, but these days I… / Recently I've started…"],
        ["Usual and unusual", "Most of the time I…, but now and then I…"],
        ["Preferences", "I prefer swimming to running. / I'd rather stay in than go out."],
        ["It depends", "It depends on the weather. If it's sunny, I… If it's raining, I…"],
        ["Strong likes and dislikes", "I really enjoy cooking. / I can't stand waiting in queues."],
      ],
    },
    {
      type: "example",
      title: "Grammar to remember",
      items: [
        "I **prefer** cook**ing** at home **to** eat**ing** out. (prefer + -ing … to + -ing)",
        "I'**d rather** cook at home **than** eat out. (would rather + base verb … than + base verb)",
        "**It depends on** my mood. / **It depends.** If I'm tired, I stay in.",
        "I'm **always** busy on Mondays. / I **always** have breakfast at home.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check",
        questions: [
          {
            prompt: "Which sentence is correct?",
            options: [
              "I go usually to the gym after work.",
              "I usually go to the gym after work.",
              "I am usually go to the gym after work.",
            ],
            answer: 1,
            explanation: "One-word adverbs go before the main verb (I usually go). Don't add am before another present simple verb: I'm usually at the gym is correct, but I am usually go is not.",
          },
          {
            prompt: "I'm tired tonight. I'd rather … at home.",
            options: ["stay", "staying", "to stay"],
            answer: 0,
            explanation: "After would rather, use the base verb: I'd rather stay.",
          },
          {
            prompt: "I prefer tea … coffee.",
            options: ["than", "to", "as"],
            answer: 1,
            explanation: "We say prefer A to B: I prefer tea to coffee.",
          },
          {
            prompt: "I go to the cinema …",
            options: ["once a month.", "once in month.", "one month once."],
            answer: 0,
            explanation: "Use once / twice / three times + a + week, month or year.",
          },
          {
            prompt: "Which expression means “almost never”?",
            options: ["now and then", "hardly ever", "every other day"],
            answer: 1,
            explanation: "Hardly ever means almost never. Now and then means sometimes; every other day means one day yes, one day no.",
          },
          {
            prompt: "Question: “What do you do at weekends?” Which answer uses a contrast?",
            options: [
              "I go shopping and I see my friends.",
              "During the week I'm very busy, but at weekends I relax with my family.",
              "At weekends I go shopping, I clean the flat and I cook.",
            ],
            answer: 1,
            explanation: "It compares weekdays and weekends with but. The other two answers are only lists.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      voice: "uk",
      cast: { Examiner: "male", Candidate: "female" },
      title: "Model: IELTS Speaking Part 1 about free time",
      transcript:
        "Examiner: Let's talk about your free time. How much free time do you have on a normal weekday?\nCandidate: Not very much, to be honest. I work until six, and by the time I get home and cook dinner, it's usually about eight o'clock. So I only have an hour or two in the evening. At weekends it's completely different, though. I hardly ever work on Saturdays, so I've got the whole day for myself.\nExaminer: What do you usually do in your free time?\nCandidate: It depends on the day. On weekday evenings I'm normally quite tired, so I just watch a series or read for a while. But at weekends I like to be more active. I play basketball with some friends once a week, and every other Sunday I visit my parents, who live about an hour away by train.\nExaminer: Do you prefer spending your free time alone or with other people?\nCandidate: With other people, mostly. I spend all week in front of a computer, so I'd rather see my friends than stay at home on my own. But I do need some quiet time now and then, especially after a busy week. On those days, a long walk by myself is perfect.",
    },
    {
      type: "text",
      title: "How a strong candidate does it",
      body: "- **Direct answers first**: *Not very much*, *It depends on the day*, *With other people, mostly*. The examiner knows straight away that the question has been answered.\n- **Clear “how often” details**: *hardly ever*, *once a week*, *every other Sunday*, *now and then*. They make the answers sound real.\n- **Contrasts** make the answers longer without memorised sentences: weekday evenings are quiet, *but at weekends I like to be more active*.\n- **A preference with a reason**: *I'd rather see my friends than stay at home on my own*, because the candidate spends all week at a computer.\n- Each answer is about 25–30 seconds, the right length for Part 1.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Complete the answers",
        instructions: "Complete each sentence with a word or phrase from the box. Use each one once.",
        text: "1. I go running {{0}} a week, usually on Tuesdays and Fridays.\n2. I {{1}} ever eat breakfast. I just have a coffee.\n3. On weekdays I get up early, {{2}} at weekends I stay in bed until ten.\n4. I prefer reading {{3}} watching TV.\n5. I'd {{4}} cook at home than eat out.\n6. {{5}} on the weather. If it's sunny, I go to the park.\n7. I visit my grandparents every {{6}} weekend, so about twice a month.\n8. I {{7}} play video games: maybe once or twice a year.",
        answers: [
          ["twice", "two times"],
          ["hardly"],
          ["but", "whereas", "while"],
          ["to"],
          ["rather"],
          ["It depends", "It all depends", "That depends"],
          ["other", "second"],
          ["rarely", "seldom", "hardly ever", "almost never"],
        ],
        wordBank: ["twice", "hardly", "but", "to", "rather", "It depends", "other", "rarely"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "shadow",
        voice: "uk",
        title: "Listen and repeat: routine and preferences",
        instructions: "Listen and repeat each sentence. Keep the small words short (to, at, than) and make the time words clear (twice a week, every other Sunday).",
        sentences: [
          "I hardly ever have time for breakfast.",
          "I go swimming twice a week, usually before work.",
          "During the week I'm always busy, but at weekends I relax.",
          "I'd rather stay in than go out on a Friday night.",
          "It depends on the weather.",
          "I prefer cooking at home to eating out.",
          "Every other Sunday, I visit my grandparents.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "IELTS Speaking Part 1: weekdays and weekends",
        instructions: "Answer with no preparation time, as in the real test. Use a contrast and at least two “how often” words. Aim for about 30 seconds.",
        prompt: "Let's talk about weekends. Is your routine at weekends different from your routine during the week?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Yes, it's very different. During the week I get up at six thirty and I'm always in a hurry, so breakfast is just a coffee and a piece of toast. At weekends I take things much more slowly. I usually sleep in until about nine, and on Sundays my flatmate and I often make a big breakfast together. It's probably my favourite part of the week.",
        targetPhrases: ["During the week", "always", "At weekends", "usually", "often", "sleep in"],
        checklist: [
          "I answered the question directly in my first sentence.",
          "I used a contrast (during the week… at weekends…).",
          "I said how often I do things (usually, often, once a week…).",
          "I put usually, often and always in the right place (I usually sleep in / I'm always busy).",
          "I spoke for about 30 seconds and stopped naturally.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "TOEFL Take an Interview: planning your free time",
        instructions: "A researcher is interviewing you for a study about free time. Answer with no preparation time. You have 45 seconds: give your preference, a reason with a contrast, and a real example.",
        prompt: "Some people like to plan their free time carefully. Others prefer to decide what to do at the last minute. Which do you prefer, and why?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "I prefer to decide at the last minute, at least at weekends. During the week, everything is planned: work, the gym on Tuesdays and Thursdays, and English classes on Wednesday evenings. So when Saturday comes, I'd rather keep it free and see how I feel. For example, last Saturday I woke up, saw that it was sunny, and called a friend. Two hours later we were having a picnic by the lake. You can't plan a day like that. Of course, it depends a little on the season. In winter I plan more, because there's less to do outside. But mostly, I like the freedom.",
        targetPhrases: ["I prefer", "During the week", "I'd rather", "For example", "it depends", "But mostly"],
        checklist: [
          "I said my preference clearly in the first sentence.",
          "I gave a reason, using a contrast (during the week… but at weekends…).",
          "I gave a real example from my own life.",
          "I used prefer or would rather correctly (I'd rather keep it free).",
          "I kept talking for most of the 45 seconds and finished with a short final sentence.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Part 1 questions about routines and free time sound easy, so it is tempting to answer in one sentence or to list everything you do in a day. Instead, choose two or three moments, say how often you do them, and add one contrast. About 20–30 seconds is enough. The examiner may stop you to move on; that is normal.",
    },
    {
      exam: "toefl",
      body: "Take an Interview has four questions on one topic, with no preparation time and 45 seconds for each answer. The early questions are about your own experience, so real details (days, times, how often) are your best material. The later questions ask for your opinion on wider issues, so keep one reason and one example ready.",
    },
  ],
  vocabulary: [
    { word: "hardly ever", meaning: "almost never", example: "I hardly ever eat fast food.", topic: "everyday" },
    { word: "every other", meaning: "every second one: one yes, the next no, and so on", example: "I go to the gym every other day, so three or four times a week.", topic: "everyday" },
    { word: "now and then", meaning: "sometimes, but not often", example: "Now and then we go out for a nice dinner.", topic: "everyday" },
    { word: "spare time", meaning: "time when you are not working or studying", example: "In my spare time, I like baking.", topic: "everyday" },
    { word: "unwind", meaning: "to relax after work or stress", example: "I usually unwind with a hot bath and some music.", topic: "health" },
    { word: "commute", meaning: "the journey to and from work or school every day", example: "My commute takes about forty minutes by train.", topic: "work" },
    { word: "sleep in", meaning: "to stay in bed later than usual in the morning", example: "On Sundays I sleep in until ten.", topic: "everyday" },
    { word: "catch up on", meaning: "to do something you did not have time to do before", example: "At weekends I catch up on emails and housework.", topic: "everyday" },
    { word: "would rather", meaning: "would prefer to", example: "I'd rather walk than wait for the bus.", topic: "everyday" },
    { word: "make the most of", meaning: "to use a time or chance as well as you can", example: "It's sunny today, so let's make the most of it.", topic: "everyday" },
    { word: "in a hurry", meaning: "needing to do things quickly", example: "I'm always in a hurry in the mornings.", topic: "everyday" },
  ],
  keyPoints: [
    "Say how often: always, usually, hardly ever, once a week, every other day.",
    "Usually, often and always go before the main verb but after am, is and are; twice a week goes at the end.",
    "Add a contrast to make answers longer: during the week… but at weekends…",
    "Prefer + -ing … to …; would rather + base verb … than …; it depends on…",
    "Keep IELTS Part 1 answers to about 20–30 seconds and use the full 45 seconds in the TOEFL interview.",
  ],
};

export default lesson;
