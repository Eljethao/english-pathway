import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-examples-analogies",
  title: "Examples, anecdotes and analogies",
  summary:
    "Support abstract points with the right kind of evidence: a specific or hypothetical example, a short anecdote, an analogy or a counter-example, always linked back to your point.",
  skill: "speaking",
  level: "C1",
  order: 7,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Speaking Part 3" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
  ],
  objectives: [
    "Choose the right kind of support for a point: a specific example, a hypothetical example, a brief anecdote, an analogy or a counter-example",
    "Keep an anecdote short and link it back to the question so that it supports, rather than replaces, your answer",
    "Build clear analogies with It's a bit like…, Think of it as…, In the same way that…",
    "Use a counter-example to challenge an overgeneralisation",
  ],
  warmUp: [
    "Think of a time a piece of technology let you down. Could you tell the story in three sentences?",
    "Complete the sentence: “Learning a language is a bit like ______, because ______.”",
  ],
  learn: [
    {
      type: "text",
      title: "Why support matters, and which kind to use",
      body: "Part 3 claims are abstract. Support makes them concrete and believable, and it gives you a natural reason to use a wider range of language. But support only helps if it is **relevant**, **brief** and **linked back** to your point.\n\nThere are five main kinds:\n\n1. **Specific example**: a real case. *Take bike-sharing schemes, for instance…*\n2. **Hypothetical example**: an imagined case that makes the logic clear. *Say you're a nurse working night shifts… / Imagine a family with two young children…*\n3. **Brief anecdote**: a short personal story, used as one illustration rather than the whole answer.\n4. **Analogy**: a comparison with something familiar. *It's a bit like learning to drive: you can read the manual, but…*\n5. **Counter-example**: a case that shows a generalisation isn't always true. *That's not always the case, though. Look at…*\n\nIn IELTS Part 3, specific and hypothetical examples about **people in general** usually work best, because they keep the answer at the level of society. In the TOEFL interview, where the early questions ask about your own experience, a short anecdote is often exactly what's needed.",
    },
    {
      type: "table",
      title: "Introducing support and linking it back",
      headers: ["Type", "Introduce it", "Link it back"],
      rows: [
        ["Specific example", "Take…, for instance. / A good case in point is… / Look at…", "…which shows how… / That's a good illustration of…"],
        ["Hypothetical example", "Say you're… / Imagine… / Suppose a company…", "In that situation, you'd… / So you can see why…"],
        ["Brief anecdote", "I saw this first-hand when… / Something similar happened to me when…", "…which just goes to show… / …and that's really what I mean by…"],
        ["Analogy", "It's a bit like… / Think of it as… / It's the equivalent of… / In the same way that…, …", "The point is that… / …and it's the same with…"],
        ["Counter-example", "That's not always the case, though. / Not necessarily. Look at… / There are exceptions, of course.", "So it's not as simple as… / So it really depends on…"],
      ],
    },
    {
      type: "text",
      title: "The rules for anecdotes and analogies",
      body: "- **Anecdotes: about three sentences, then link.** Set the scene in one sentence, give the key moment in one or two, and link back: *…which is exactly why I think…*. If your story is still going after 20 seconds in Part 3, you have probably drifted away from the question.\n- **Make the example fit the claim.** If you say *most people…*, one friend is weak evidence. Present it honestly: *That's just one case, of course, but…*\n- **Analogies must be familiar and clearly similar.** Use everyday things (driving, cooking, a gym membership, a garden), and say *what* the similarity is. An analogy without an explanation can confuse the listener.\n- **Don't invent statistics.** “Ninety per cent of people…” sounds made up and adds nothing to your language score. A clear hypothetical example is more convincing.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Name the support",
        instructions: "Match each piece of support to its type. There is one extra type.",
        left: [
          "Look at how quickly contactless payment spread once shops started encouraging it.",
          "Suppose a shop assistant is told she'll be judged only on sales. Of course she'll push the most expensive products.",
          "Something similar happened to me in my first job: nobody explained the rules, so I learned them by breaking them.",
          "Choosing a university course at seventeen is a bit like ordering from a menu in a language you don't speak.",
          "It's often said that older people can't cope with new technology, but that's not always true: plenty of people in their eighties video call their grandchildren every week.",
        ],
        right: [
          "an analogy",
          "a counter-example",
          "a statistic",
          "a hypothetical example",
          "a brief personal anecdote",
          "a specific real-world example",
        ],
        answer: [5, 3, 4, 0, 1],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model answers: Part 3 on the topic of “Habits and learning”",
      voice: "us",
      cast: { Examiner: "female", Candidate: "male" },
      transcript:
        "Examiner: Why do people often find it so hard to change their habits?\nCandidate: Mainly because habits are designed to run without us thinking about them. That's what makes them useful, but it's also what makes them so hard to shift. I think of a habit as a bit like a path across a field. The more often people walk the same way, the deeper the path gets, and to make a new one, you have to keep choosing the long grass, day after day, until it becomes the easier option. Say you've decided to stop checking your phone first thing in the morning. On day one, it's pure willpower. But if your phone's still on the bedside table, you're fighting your own environment every single morning. I saw this first-hand when I tried to stop putting sugar in my coffee. I failed twice, and it only worked when I stopped buying sugar altogether, which just goes to show that changing your surroundings matters more than motivation.\nExaminer: Do people learn more from their own mistakes or from other people's advice?\nCandidate: From their own mistakes, generally, although that's not always the case. Advice is a bit like a map of a city you've never visited. It's useful, but it doesn't really sink in until you've walked the streets yourself. That's why teenagers so often ignore their parents' warnings and then find out the hard way. That said, there are areas where learning from your own mistakes is far too costly. Take driving, for instance. Nobody wants new drivers to learn about speeding by crashing. So in high-risk situations, we rely on rules and training precisely because we can't afford to let people learn from experience.",
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "**Answer 1**\n\n- **Point first:** “Mainly because habits are designed to run without us thinking about them.” The support comes *after* the claim.\n- **Analogy, explained:** the path across a field. The speaker doesn't just name the comparison; they spell out the similarity (the more you use a path, the deeper it gets).\n- **Hypothetical example:** “Say you've decided to stop checking your phone…” It turns the abstract idea of “environment” into a scene the listener can picture.\n- **Brief anecdote, linked back:** three sentences about sugar in coffee, then “which just goes to show that changing your surroundings matters more than motivation.” The story serves the point.\n\n**Answer 2**\n\n- **Analogy:** advice is like a map of a city you've never visited. Again, the similarity is explained.\n- **Counter-example to the speaker's own claim:** “That said… Take driving, for instance.” This shows the generalisation has limits, which makes the answer more convincing, not less.\n- **Final link:** “So in high-risk situations, we rely on rules…” brings the example back to the question.\n\nNotice the balance: two analogies, one hypothetical example, one short anecdote, one counter-example, and no invented statistics.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Is it good support?",
        questions: [
          {
            prompt: "Point: “Working from home can blur the line between work and rest.” Which support is the most relevant and convincing?",
            options: [
              "Say you've got your laptop on the kitchen table. It's always there, so it's very tempting to answer one more email at ten at night.",
              "My office is in a very modern building with a nice canteen.",
              "About 87 per cent of all workers in the world now work from home.",
              "Working from home became popular for many different reasons.",
            ],
            answer: 0,
            explanation: "A is a hypothetical example that shows exactly how the line gets blurred. B is irrelevant, C is an invented (and false-sounding) statistic, and D restates a different point.",
          },
          {
            prompt: "Which analogy best supports the point “A good teacher gives students just enough help and then steps back”?",
            options: [
              "It's like the weather: sometimes it rains and sometimes it doesn't.",
              "It's a bit like teaching a child to ride a bike: you hold the seat at first, then let go once they've got their balance.",
              "It's like a computer, because computers are very useful.",
              "It's like a library, which has lots of books.",
            ],
            answer: 1,
            explanation: "B matches both parts of the point: support at first (holding the seat), then stepping back (letting go). The other comparisons share nothing important with the point.",
          },
          {
            prompt: "In Part 3, a candidate's anecdote about cycling has lasted 40 seconds and is now about a holiday abroad. What should they do?",
            options: [
              "Keep going until the examiner stops them, because more speech is always better.",
              "Finish the story in one sentence and link it back: “…which is why I think cycle lanes only work if they're properly connected.”",
              "Apologise for talking too much and stop speaking.",
              "Start a second anecdote to balance the first one.",
            ],
            answer: 1,
            explanation: "A quick link back rescues the answer and shows control. Long, drifting stories weaken coherence, and stopping or starting another story doesn't answer the question.",
          },
          {
            prompt: "Which ending links an example back to the point most effectively?",
            options: [
              "…and that was in 2019.",
              "…which just goes to show that a small change in price can change people's behaviour.",
              "…anyway, that's my friend.",
              "…so yes, that's an example.",
            ],
            answer: 1,
            explanation: "B states what the example proves. The others end the example without connecting it to any point.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "order",
        title: "Build a short anecdote",
        instructions:
          "Question: “Do people learn better by doing things or by reading instructions?” Put the sentences in order to make a short anecdote that supports the answer.",
        mode: "lines",
        items: [
          "I saw this first-hand when I started my current job.",
          "My manager gave me a long document explaining how everything worked, and I read it twice.",
          "But on my first day, I still had no idea where anything was or who to ask.",
          "It was only when a colleague walked me round the building that it all clicked.",
          "That just goes to show that people learn far more by doing than by reading instructions.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "IELTS Part 3: support your point",
        instructions:
          "No preparation, as in Part 3. Make your point first, then support it with at least two different kinds of support (an analogy, a hypothetical example, a brief anecdote or a counter-example). Link each one back. Aim for 45–60 seconds.",
        prompt: "Topic: Money. Why do many people find it difficult to save money?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "I think the main reason is that saving means giving up something real now for something abstract later, and most of us aren't very good at that trade. It's a bit like going to the gym: the benefits are huge, but they're invisible for months, whereas the sofa is right there. Say you're twenty-five and you've just been paid. A new phone is something you can hold today, while a pension is forty years away, so the phone usually wins. On top of that, spending has become almost effortless. You tap a card or a phone and you barely notice the money leaving. I noticed this myself when I switched from cash to paying by phone. I was spending noticeably more without realising it, which just goes to show how much the way we pay affects what we spend.",
        targetPhrases: ["it's a bit like", "say you're", "which just goes to show", "whereas"],
        checklist: [
          "I made my main point in the first sentence, before any example.",
          "I used at least two different kinds of support.",
          "Each piece of support clearly matched my point, and I linked it back.",
          "Any personal anecdote took no more than about 20 seconds.",
          "I didn't invent statistics.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "TOEFL Take an Interview: a focused anecdote",
        instructions:
          "No preparation, as in the TOEFL interview. Start the story straight away, say why it worked, and finish with what it shows. Stop at 45 seconds.",
        prompt:
          "Interviewer: Think about a time when a teacher, coach or manager explained something in a way that really helped you understand it. What did they do, and why did it work?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "When I was learning to code at university, I just couldn't understand how variables worked, until a tutor compared them to labelled boxes. She said a variable is basically a box with a name on it, and you can put a value inside and swap it for another one later. It sounds simple, but suddenly everything made sense, because I could picture what the computer was doing. I think it worked because she connected something abstract to an object I already understood. Since then, whenever I explain something complicated at work, I look for a comparison like that first.",
        targetPhrases: ["compared them to", "I could picture", "it worked because", "since then"],
        checklist: [
          "I started the story straight away, with no long introduction.",
          "I explained why the explanation worked, not just what happened.",
          "I kept the story focused on the question.",
          "I finished with what the experience shows, within 45 seconds.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In Part 3, examples about people in general (*Say you're the parent of a teenager…*) often work better than long personal stories, because they keep the answer at the level of society. A short personal example is fine, but link it back to the question straight away. Coherence suffers when an anecdote drifts away from the point.",
    },
    {
      exam: "toefl",
      body: "The early **Take an Interview** questions are about your own experience, so a brief, specific anecdote is often the natural answer. With 45 seconds, use a simple shape: what happened (two sentences), why it mattered (one or two), and what it shows (one).",
    },
  ],
  vocabulary: [
    { word: "a case in point", meaning: "a good example of what is being discussed", example: "Online banking is a case in point: it changed habits in just a few years.", topic: "academic" },
    { word: "first-hand", meaning: "from your own direct experience", example: "I've seen first-hand how stressful the job can be.", topic: "everyday" },
    { word: "illustrate", meaning: "to make a point clearer by giving an example", example: "Let me illustrate that with a quick example.", topic: "academic" },
    { word: "analogy", meaning: "a comparison that explains something by showing how it is similar to something else", example: "She used the analogy of a garden to explain how cities grow.", topic: "academic" },
    { word: "hypothetical", meaning: "imagined, not real, but possible", example: "Let's take a hypothetical case: a family with two working parents.", topic: "academic" },
    { word: "counter-example", meaning: "an example that shows a general statement is not always true", example: "His success is a counter-example to the idea that you need a degree.", topic: "academic" },
    { word: "sink in", meaning: "to be fully understood or accepted after a while", example: "It took a few days for the news to sink in.", topic: "everyday" },
    { word: "find out the hard way", meaning: "to learn something through an unpleasant experience", example: "I found out the hard way that you should always back up your files.", topic: "everyday" },
    { word: "it just goes to show", meaning: "used to say what an example or story proves", example: "He passed without studying, which just goes to show how easy the test was.", topic: "everyday" },
    { word: "willpower", meaning: "the ability to control yourself and do what you have decided to do", example: "Giving up sweets takes a lot of willpower.", topic: "health" },
    { word: "click", meaning: "(informal) to suddenly become clear or understood", example: "After the third example, the grammar rule finally clicked.", topic: "education" },
    { word: "shift", meaning: "(verb) to move or change something, often with effort", example: "It's hard to shift a habit you've had for years.", topic: "health" },
  ],
  keyPoints: [
    "Choose support that fits the point: a specific or hypothetical example, an anecdote, an analogy or a counter-example.",
    "Point first, support second, link back third (…which just goes to show…).",
    "Keep Part 3 anecdotes to about three sentences; in the early TOEFL interview questions, a short anecdote can be the whole answer.",
    "An analogy needs a familiar comparison and a clear explanation of the similarity.",
    "Never invent statistics: a clear hypothetical example is more convincing.",
  ],
};

export default lesson;
