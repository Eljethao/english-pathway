import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-precision-nuance",
  title: "Precision and nuance",
  summary:
    "Say exactly what you mean: choose precise words for degree and frequency, show where your information comes from, and qualify claims so they are accurate rather than vague.",
  skill: "speaking",
  level: "C1",
  order: 8,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Speaking Part 3" },
    { exam: "toefl", task: "Speaking – Take an Interview" },
  ],
  objectives: [
    "Replace vague words (very, a lot, sometimes) with precise expressions of degree and frequency (largely, barely, virtually; seldom, more often than not)",
    "Show where a claim comes from with apparently, supposedly and presumably",
    "Qualify a statement precisely: not so much X as Y, in the sense that…, at least as far as… is concerned",
    "Use understatement (not entirely convinced, not unheard of) to sound measured while keeping your view clear",
  ],
  warmUp: [
    "How often do you read reviews before you buy something online? Answer without using “sometimes” or “often”.",
    "What is the difference between “Apparently the shop is closing” and “Presumably the shop is closing”?",
  ],
  learn: [
    {
      type: "text",
      title: "Precise, not vague",
      body: "Compare these two answers to *How important are online reviews?*\n\n- “Online reviews are very important. People look at them a lot.”\n- “For restaurants, reviews are **largely** what people go on, although I **barely** look at them when I buy clothes.”\n\nThe second answer tells the listener **how much**, **how often** and **where the limits are**. That is what precision means in speaking: not rare words, but exact ones.\n\nIn the public IELTS band descriptors, a vocabulary resource used “to discuss all topics and convey precise meaning” is part of the **band 8** description of Lexical Resource. At band 7, the descriptor refers to a resource “flexibly used to discuss a variety of topics” and to “some ability to use less common and idiomatic items”. So precision is one of the features that separates band 8 from band 7, and it is worth practising once you can already speak at length with flexibility.\n\nYou already know how to show degrees of certainty about the future (*bound to*, *chances are*). This lesson adds four more tools:\n\n1. **Degree**: how much? (*largely, partly, barely, virtually*)\n2. **Frequency**: how often? (*seldom, now and then, more often than not*)\n3. **Source**: how do you know? (*apparently, supposedly, presumably*)\n4. **Qualification**: in what sense, where, and with what exceptions?",
    },
    {
      type: "table",
      title: "Degree and frequency, from most to least",
      headers: ["Scale", "Degree (how much?)", "Frequency (how often?)"],
      rows: [
        ["All", "entirely, completely, wholly", "invariably, without fail"],
        ["Almost all", "virtually, practically, all but (all but impossible = almost impossible)", "nearly always, almost invariably"],
        ["Most", "largely, mainly, for the most part", "more often than not, as a rule, generally"],
        ["Some", "partly, to a degree, in part", "now and then, from time to time, on occasion"],
        ["Very little", "barely, scarcely, hardly", "seldom, rarely, hardly ever"],
        ["None", "not at all, by no means, in no way", "never, not once"],
      ],
    },
    {
      type: "table",
      title: "Where does the claim come from?",
      headers: ["Word", "What it tells the listener", "Example"],
      rows: [
        ["apparently", "I heard or read this; I can't confirm it", "Apparently, the café on the corner is closing."],
        ["supposedly", "People say this, but I have doubts", "It's supposedly the best phone on the market, but mine broke in a month."],
        ["presumably", "I'm assuming this, based on logic", "They've put their prices up, presumably because their costs have risen."],
        ["reportedly", "The news or official sources say this", "The company is reportedly planning to cut jobs."],
        ["evidently / clearly", "The evidence I can see shows this", "The campaign evidently worked: the queues were out of the door."],
      ],
    },
    {
      type: "example",
      title: "Qualifying precisely",
      items: [
        "Shifting the focus: “It's **not so much** the price **as** the hassle that puts people off.”",
        "Limiting the meaning: “Shopping online is cheaper, **in the sense that** you save on travel, but not always on the product itself.”",
        "Limiting the area: “Reviews are useful, **at least as far as** restaurants **are concerned**.”",
        "Naming the exception: “Most people trust reviews, **with the possible exception of** older shoppers, who tend to ask friends.”",
        "Understatement: “I'm **not entirely convinced** that star ratings mean much.” (= I doubt it, politely)",
        "Understatement: “It's **not unheard of** for businesses to post fake reviews.” (= it does happen)",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "What exactly does the speaker mean?",
        questions: [
          {
            prompt: "“Finding a flat in the city centre is all but impossible.” What does the speaker mean?",
            options: ["It is completely impossible.", "It is almost impossible.", "It is possible for everyone except the speaker.", "It is quite easy."],
            answer: 1,
            explanation: "*All but* means *almost*: all but impossible = almost impossible.",
          },
          {
            prompt: "“The new policy is supposedly saving the city millions.” What is the speaker's attitude?",
            options: [
              "They are certain it is saving millions.",
              "They have worked out that it must be saving millions.",
              "People claim it is saving millions, but the speaker has doubts.",
              "They know for a fact that it isn't saving any money.",
            ],
            answer: 2,
            explanation: "*Supposedly* reports what others claim and suggests the speaker doubts it.",
          },
          {
            prompt: "“They've closed the main road, presumably because of the flooding.” How does the speaker know the reason?",
            options: ["Someone told them.", "They read it in an official report.", "They are making a logical assumption.", "They saw a sign explaining it."],
            answer: 2,
            explanation: "*Presumably* signals an assumption based on logic, not on information from someone else.",
          },
          {
            prompt: "“It's not so much the cost as the time that stops people from cooking.” Which statement is true?",
            options: [
              "Cost is the main reason people don't cook.",
              "Time is a more important reason than cost.",
              "Cost and time are equally important.",
              "Neither cost nor time matters.",
            ],
            answer: 1,
            explanation: "*Not so much X as Y* shifts the focus from X to Y: Y (time) is the more accurate explanation.",
          },
          {
            prompt: "Which sentence expresses the LOWEST frequency?",
            options: ["I go there from time to time.", "More often than not, I go there.", "I seldom go there.", "As a rule, I go there."],
            answer: 2,
            explanation: "*Seldom* means rarely. *From time to time* is occasionally; *more often than not* and *as a rule* mean usually.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model answers: Part 3 on the topic of “Shopping and consumer choices”",
      voice: "uk",
      cast: { Examiner: "male", Candidate: "female" },
      transcript:
        "Examiner: How much do online reviews influence what people buy?\nCandidate: Quite a lot, I'd say, but it varies enormously depending on what people are buying. For things like restaurants and hotels, reviews are largely what people go on, because you can't try them out in advance. For everyday items, on the other hand, I suspect most people barely glance at them. Personally, I seldom read the written reviews. I just look at the overall rating and maybe the most negative comments, which are often more revealing. And it's not so much the number of stars that matters as the number of reviews. A rating of four point eight based on three reviews is virtually meaningless. That said, people are becoming more sceptical. Apparently, quite a few businesses have been caught posting fake reviews, so trust is presumably lower than it was a few years ago.\nExaminer: Do people buy more things than they really need?\nCandidate: On the whole, yes, at least as far as clothes and gadgets are concerned. It's not that people are deliberately wasteful. It's more that shopping has become almost effortless, in the sense that you can buy something with two taps at midnight. Food is a slightly different story, because people are more aware of waste there, and I'd say a lot of households are, if anything, more careful than they used to be. But with clothes, it's not uncommon to see T-shirts that cost less than a sandwich, and when something costs that little, people treat it as disposable. So I wouldn't say we buy more than we need all the time, but more often than not, when something is cheap and easy to get, we do.",
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "- **Degree:** *largely what people go on*, *barely glance at them*, *virtually meaningless*. Each one says exactly how much.\n- **Frequency:** *seldom read*, *more often than not*. Notice there is no *sometimes* or *a lot of times*.\n- **Source:** *Apparently* (heard or read it, can't confirm) versus *presumably* (a logical assumption that follows from it). The speaker is careful to show which claims are second-hand and which are inferences.\n- **Qualification:** *not so much the number of stars… as the number of reviews*; *at least as far as clothes and gadgets are concerned*; *in the sense that you can buy something with two taps*; *Food is a slightly different story*.\n- **Understatement:** *it's not uncommon to see…* means it happens fairly often, and sounds more measured than *you always see…*.\n- **A precise conclusion:** “I wouldn't say we buy more than we need all the time, but more often than not…” The final sentence states exactly where the claim holds and where it doesn't.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Make it precise",
        instructions: "Complete the Part 3 answer with words from the box. There is one extra word.",
        wordBank: ["virtually", "hardly", "as", "least", "Apparently", "presumably"],
        text:
          "Question: Do people still read printed newspapers?\n\nNot many, no. Among people my age, print is {{0}} dead: I can't think of a single friend who buys a paper. My parents still get one, but mostly at weekends, so during the week they {{1}} ever open one. The decline isn't so much about cost {{2}} about habit: people get their news on their phones because the phone is already in their hand. Local papers are a slightly different story, at {{3}} as far as older readers are concerned. {{4}}, our local paper still sells quite well, although I only heard that from a neighbour, so I can't be sure.",
        answers: [
          ["virtually", "practically", "almost", "nearly", "all but", "pretty much", "more or less", "basically", "essentially", "effectively", "as good as"],
          ["hardly", "scarcely", "barely"],
          ["as"],
          ["least"],
          ["apparently", "supposedly"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "What does each qualifier do?",
        instructions: "Match each expression to its function. There is one extra function.",
        left: [
          "not so much X as Y",
          "in the sense that…",
          "at least as far as… is concerned",
          "with the possible exception of…",
          "I'm not entirely convinced",
          "presumably",
        ],
        right: [
          "names a group or case the claim may not apply to",
          "presents a logical assumption",
          "reports something you heard from someone else",
          "moves the focus to a more accurate explanation",
          "disagrees politely through understatement",
          "limits the claim to one area",
          "explains which meaning of a word you intend",
        ],
        answer: [3, 6, 5, 0, 4, 1],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "IELTS Part 3: say exactly how often and how much",
        instructions:
          "No preparation, as in Part 3. Use at least two precise degree or frequency expressions, one qualification and one source word. Aim for 45–60 seconds.",
        prompt: "Topic: Consumer habits. How often do people really read the small print, such as terms and conditions, before they agree to something? Why?",
        prepSeconds: 0,
        speakSeconds: 60,
        modelAnswer:
          "Hardly ever, I'd say, at least as far as apps and websites are concerned. Most people scroll straight to the bottom and click accept without reading a word, and I'm no exception. It's not so much that people don't care as that the documents are virtually unreadable. They're often extremely long and written in legal language, presumably because they're designed to protect the company rather than to inform the user. With bigger commitments, like a phone contract or a loan, it's a slightly different story. People are more likely to check the key points, such as the length of the contract or the cancellation fees, although even then, I suspect very few read every clause. So it's not entirely fair to blame consumers. If companies really wanted people to read the terms, they could make them a fraction of the length.",
        targetPhrases: ["hardly ever", "at least as far as", "not so much", "virtually", "presumably", "a slightly different story"],
        checklist: [
          "I answered “how often” with a precise expression, not just “sometimes”.",
          "I used at least two precise degree words (largely, barely, virtually…).",
          "I qualified my main claim (at least as far as…, with the exception of…).",
          "I showed where a claim came from when I wasn't sure (apparently, presumably).",
          "I avoided vague words like very, a lot and thing where a precise word fitted.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "TOEFL Take an Interview: precise in 45 seconds",
        instructions:
          "No preparation, as in the TOEFL interview. Don't open with “It depends”: say precisely what it depends on in your first sentence. Stop at 45 seconds.",
        prompt:
          "Interviewer: How much do you rely on recommendations from friends when you choose things like films, restaurants or books? Has that changed in recent years?",
        prepSeconds: 0,
        speakSeconds: 45,
        modelAnswer:
          "Quite heavily, actually, at least when it comes to restaurants. If a close friend says a place is good, that carries far more weight for me than a hundred online ratings, because I know their taste. For films, it's a slightly different story. I mostly go by what the streaming service suggests, which is presumably based on what I've watched before. That's changed a lot in the last few years. I used to ask friends what to watch, whereas now I seldom do, and to be honest, I'm not entirely convinced the algorithm knows me as well as they do.",
        targetPhrases: ["at least when it comes to", "a slightly different story", "presumably", "seldom", "not entirely convinced"],
        checklist: [
          "My first sentence was precise (how much, and for what), not just “it depends”.",
          "I used at least one precise frequency word.",
          "I compared the past and the present.",
          "I finished within 45 seconds.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In the public descriptors, band 8 Lexical Resource is a “wide resource, readily and flexibly used to discuss all topics and convey precise meaning”. Precise degree and frequency words (*largely*, *barely*, *seldom*, *more often than not*) are a reliable way to work towards this without forcing rare vocabulary into your answers.",
    },
    {
      exam: "toefl",
      body: "In **Take an Interview** you have 45 seconds and no preparation, so a vague opening like “It depends” wastes time. Say what it depends on straight away and precisely: “Quite heavily for restaurants, much less for films.”",
    },
  ],
  vocabulary: [
    { word: "all but", meaning: "almost", example: "The last train had all but left when we reached the platform.", topic: "everyday" },
    { word: "barely", meaning: "only just; almost not", example: "I barely slept before the exam.", topic: "everyday" },
    { word: "virtually", meaning: "almost completely", example: "The town centre is virtually empty on Sundays.", topic: "everyday" },
    { word: "seldom", meaning: "not often; rarely", example: "We seldom eat out during the week.", topic: "everyday" },
    { word: "more often than not", meaning: "usually; in most cases", example: "More often than not, the train is a few minutes late.", topic: "everyday" },
    { word: "apparently", meaning: "according to what you have heard or read", example: "Apparently, the concert has sold out.", topic: "everyday" },
    { word: "supposedly", meaning: "according to what people say, although you may doubt it", example: "The diet supposedly helps you lose weight in a week.", topic: "health" },
    { word: "presumably", meaning: "used to say you think something is true because it is logical", example: "The office is dark, so presumably everyone has gone home.", topic: "everyday" },
    { word: "not so much… as…", meaning: "used to say the second idea describes something more accurately than the first", example: "It's not so much a job as a way of life.", topic: "academic" },
    { word: "at least as far as… is concerned", meaning: "used to limit a statement to one particular area", example: "The plan works well, at least as far as cost is concerned.", topic: "academic" },
    { word: "not entirely convinced", meaning: "having some doubts (a polite way to disagree)", example: "I'm not entirely convinced the new system is an improvement.", topic: "academic" },
    { word: "a fraction of", meaning: "a very small part or amount of", example: "Second-hand books cost a fraction of the price of new ones.", topic: "business" },
  ],
  keyPoints: [
    "Replace very, a lot and sometimes with precise words: largely, barely, virtually, seldom, more often than not.",
    "All but impossible means almost impossible; barely and hardly mean almost not.",
    "Show your source: apparently (I heard), supposedly (people say, but I doubt it), presumably (I assume).",
    "Qualify claims precisely: not so much X as Y, in the sense that…, at least as far as… is concerned.",
    "Understatement (not entirely convinced, not unheard of) sounds measured but still makes your view clear.",
  ],
};

export default lesson;
