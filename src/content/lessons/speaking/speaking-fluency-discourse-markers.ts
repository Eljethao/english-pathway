import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-fluency-discourse-markers",
  title: "Fluency: fillers and discourse markers",
  summary:
    "Sound smoother and more organised by replacing long pauses and 'um' with natural thinking phrases, and by linking ideas with spoken discourse markers.",
  skill: "speaking",
  level: "B2",
  order: 2,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Speaking Part 3" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
    { exam: "toeic", task: "Speaking – Express an opinion" },
  ],
  objectives: [
    "Understand what examiners mean by fluency and coherence",
    "Use natural phrases to buy thinking time instead of silence or 'um'",
    "Link ideas with spoken discourse markers for adding, contrasting, giving examples and summing up",
    "Rephrase smoothly when you make a mistake",
  ],
  warmUp: [
    "What do you say in your own language when you need a second to think?",
    "Do you think speaking fast and speaking fluently are the same thing? Why or why not?",
  ],
  learn: [
    {
      type: "text",
      title: "What fluency really means",
      body: "Fluency is **not** speed. A fluent speaker talks at a steady pace, keeps going without long silences, and connects ideas so the listener can follow. Even native speakers pause, repeat themselves and correct mistakes; they just do it smoothly.\n\nIn IELTS, this is called **Fluency and Coherence**, and it is a quarter of your speaking score. TOEFL and TOEIC speaking scores also reward a natural pace and ideas that are clearly connected.",
    },
    {
      type: "text",
      title: "Good fillers and bad fillers",
      body: "Everyone needs a moment to think. The problem is **long silences** or the same sound again and again: *um… er… like… um…*. Instead, use a short phrase that sounds natural and gives you two or three seconds:\n\n- *Well, …*\n- *Let me think…*\n- *That's an interesting question.*\n- *I've never really thought about that, but…*\n- *How can I put it?*\n- *I'd say…*\n\nUse them once at the start of an answer or when you change direction, not in every sentence. One *um* is fine; ten is a problem.",
    },
    {
      type: "table",
      title: "Spoken discourse markers",
      headers: ["Function", "Natural in speech"],
      rows: [
        ["Adding a point", "On top of that,… / Plus,… / And another thing is…"],
        ["Contrasting", "Having said that,… / On the other hand,… / Mind you,…"],
        ["Giving an example", "For instance,… / Take my brother, for example. / A good example is…"],
        ["Rephrasing or clarifying", "What I mean is,… / In other words,… / Sorry, let me put that another way."],
        ["Giving your view", "Personally,… / If you ask me,… / The way I see it,…"],
        ["Summing up", "So overall,… / So basically,… / All in all,…"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Words like *Moreover*, *Furthermore* and *In conclusion* belong in essays. In speech they can sound memorised and stiff. Choose *On top of that*, *Plus* and *So overall* instead.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: what does each marker do?",
        instructions: "Match each marker to its function. There is one extra function.",
        left: ["Having said that,…", "On top of that,…", "Take my sister, for example.", "What I mean is,…", "So overall,…", "Let me think…"],
        right: [
          "giving an example",
          "summing up",
          "buying thinking time",
          "contrasting",
          "rephrasing",
          "adding a point",
          "asking the examiner a question",
        ],
        answer: [3, 5, 0, 4, 1, 2],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model: IELTS Speaking Part 3",
      transcript:
        "Examiner: Do you think people today spend too much time on their phones?\nCandidate: Well, that's an interesting question. I'd say yes, for most people, although it depends on what they're actually doing. I mean, if you're using your phone to study or to keep in touch with family abroad, that's pretty valuable. Having said that, a lot of the time people are just scrolling without really thinking about it. Take my younger brother, for example. He picks up his phone the second he wakes up, and he's still on it at midnight. Even at dinner, it's always on the table next to his plate. So overall, I think we've lost a bit of control.\nExaminer: How has technology changed the way families communicate?\nCandidate: Let me think. In some ways, it's made communication much easier. My grandparents, for instance, live about three hundred kilometres away, but we video call them every Sunday, which was much harder twenty years ago. On top of that, most families have a group chat now, so everyone knows what's going on. On the other hand, I sometimes feel that families talk less face to face, even when they're in the same room. What I mean is, everyone's together physically, but they're all looking at different screens. So it's a bit of a mixed picture, really.",
      cast: { Examiner: "male", Candidate: "female" },
    },
    {
      type: "text",
      title: "How a fluent speaker does it",
      body: "- **A thinking phrase, not silence**: *Well, that's an interesting question* and *Let me think* give the candidate time to plan, but they are used only once per answer.\n- **A clear direct answer early**: *I'd say yes, for most people* and *In some ways, it's made communication much easier.*\n- **Markers show the shape of the answer**: a point → a contrast (*Having said that*, *On the other hand*) → an example (*Take my younger brother, for example*, *for instance*) → a summary (*So overall*, *So it's a bit of a mixed picture*).\n- **Smooth rephrasing**: *What I mean is…* explains the idea again in simpler words instead of stopping.\n- **Spoken, not written, language**: *pretty valuable*, *just scrolling*, *the second he wakes up*. Nothing sounds like an essay.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Complete the spoken answer",
        instructions: "Question: “Is it better to study alone or with other people?” Complete the answer with the markers in the box. Use each one once.",
        text: "{{0}}, that's a tricky one. I'd say it depends on the subject. {{1}}, if you're learning vocabulary, studying alone is probably better, because you can go at your own speed. {{2}}, for something like a group project, you obviously need other people. {{3}}, studying with friends can make it more fun, so you're more likely to keep going. {{4}}, I think a mix of both works best. {{5}}, I do most of my studying alone, but I meet a classmate once a week so we can test each other.",
        answers: [
          ["Well"],
          ["For example", "For instance"],
          ["On the other hand"],
          ["On top of that"],
          ["So overall", "So, overall"],
          ["Personally"],
        ],
        wordBank: ["Well", "For example", "On the other hand", "On top of that", "So overall", "Personally"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Fluency check",
        questions: [
          {
            prompt: "You need a moment to think before answering. What is the most natural way to start?",
            options: ["Um… um… er…", "Well, that's an interesting question.", "In conclusion,…", "Firstly and most importantly,…"],
            answer: 1,
            explanation: "A short thinking phrase sounds natural and gives you a few seconds. Repeated 'um' sounds hesitant, and essay phrases sound memorised.",
          },
          {
            prompt: "Which marker sounds most natural in conversation?",
            options: ["Moreover,…", "Furthermore,…", "On top of that,…", "In addition to the aforementioned point,…"],
            answer: 2,
            explanation: "On top of that is common in speech. The others are formal written language.",
          },
          {
            prompt: "You said something unclear and want to explain it again. Which phrase helps?",
            options: ["What I mean is,…", "Having said that,…", "Take … for example.", "All in all,…"],
            answer: 0,
            explanation: "What I mean is introduces a clearer version of the same idea.",
          },
          {
            prompt: "Which phrase introduces a contrast?",
            options: ["Plus,…", "Having said that,…", "For instance,…", "So basically,…"],
            answer: 1,
            explanation: "Having said that means 'even though I've just said this, there is another side'.",
          },
          {
            prompt: "Which description best matches a high fluency score?",
            options: [
              "Speaking as fast as possible",
              "Never pausing at all",
              "A steady pace, short natural pauses and clear links between ideas",
              "Using a different discourse marker in every sentence",
            ],
            answer: 2,
            explanation: "Fluency means smooth, connected speech, not speed. Too many markers sound unnatural.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "shadow",
        title: "Say it smoothly",
        instructions: "Listen and repeat. Copy the rhythm: the marker is quick and light, followed by a tiny pause, then the main idea.",
        sentences: [
          "Well, that's an interesting question.",
          "I'd say yes, although it depends on the situation.",
          "Having said that, a lot of people don't really need one.",
          "Take my brother, for example.",
          "What I mean is, we're together, but we're not really talking.",
          "On top of that, it's much cheaper than it used to be.",
          "So overall, I think it's a positive change.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "IELTS Speaking Part 3",
        instructions: "Answer with no preparation time, as in the real test. Start with a thinking phrase if you need one, then use at least three different markers.",
        prompt: "Some people think that working from home will become normal for most office workers in the future. What's your opinion?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "Well, I'd say it'll become more common, but I'm not sure it'll be normal for everyone. I mean, for jobs that are mostly done on a computer, like programming or accounting, working from home makes a lot of sense. People save time on commuting, and on top of that, companies can spend less on office space. Having said that, I think a lot of people actually miss the office. Take my sister, for example. She worked from home for two years, and in the end she asked to go back, because she felt quite lonely. What I mean is, work isn't only about getting tasks done; it's also about being part of a team. So overall, I think most companies will end up with a mix: a few days at home and a few in the office.",
        targetPhrases: ["Well", "I'd say", "on top of that", "Having said that", "for example", "What I mean is", "So overall"],
        checklist: [
          "I started quickly, using a thinking phrase instead of a long silence.",
          "I gave a clear opinion near the start.",
          "I used at least three different discourse markers.",
          "I gave a contrast and an example.",
          "I finished with a short summary (So overall…).",
          "I didn't say 'um' or 'like' again and again.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Part 3 answers are usually longer than Part 1 answers, so aim for about 45–60 seconds. A simple pattern is opinion → reason → example → contrast → summary, linked with spoken markers.",
    },
    {
      exam: "toefl",
      body: "In Take an Interview there is no preparation time. A short opener like *That's a good question. I'd say…* lets you start immediately while you plan, so the recording doesn't begin with silence.",
    },
    {
      exam: "toeic",
      body: "In Express an opinion, you have 45 seconds to prepare and 60 seconds to speak. Plan your opinion and two reasons, then link them with markers: *The main reason is… On top of that… For instance… So overall…*",
    },
  ],
  vocabulary: [
    { word: "fluency", meaning: "the ability to speak smoothly and easily, without long pauses", example: "Reading aloud every day helped my fluency.", topic: "education" },
    { word: "coherence", meaning: "the quality of ideas being clearly connected and easy to follow", example: "Good linking words improve the coherence of your answer.", topic: "education" },
    { word: "hesitate", meaning: "to pause before you say or do something, often because you are unsure", example: "She hesitated before answering the question.", topic: "everyday" },
    { word: "discourse marker", meaning: "a word or phrase that organises speech, such as 'well' or 'having said that'", example: "'On the other hand' is a common discourse marker.", topic: "education" },
    { word: "rephrase", meaning: "to say something again in a different way", example: "If the listener looks confused, rephrase your idea.", topic: "education" },
    { word: "stiff", meaning: "too formal and not relaxed", example: "His answer sounded a bit stiff, as if he'd memorised it.", topic: "everyday" },
    { word: "scroll", meaning: "to move through content on a screen", example: "I spent an hour scrolling through photos.", topic: "technology" },
    { word: "keep in touch", meaning: "to continue to communicate with someone", example: "We keep in touch with a weekly video call.", topic: "society" },
    { word: "face to face", meaning: "in person, not by phone or online", example: "Some problems are easier to solve face to face.", topic: "society" },
    { word: "a mixed picture", meaning: "a situation with both good and bad sides", example: "The research on remote work shows a mixed picture.", topic: "society" },
    { word: "end up", meaning: "to finally be in a situation, often without planning it", example: "We ended up staying until midnight.", topic: "everyday" },
  ],
  keyPoints: [
    "Fluency means smooth, connected speech at a steady pace, not speaking fast.",
    "Replace long silences and repeated 'um' with short thinking phrases like Well, … or Let me think…",
    "Use spoken markers to add, contrast, give examples, rephrase and sum up.",
    "Avoid essay words like Moreover and In conclusion when you speak.",
    "Don't overuse markers: one or two per idea is enough.",
  ],
};

export default lesson;
