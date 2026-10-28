import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-intonation-connected-speech",
  title: "Intonation and connected speech",
  summary:
    "Sound more natural by stressing the right words, using rising and falling intonation, and linking words together the way fluent speakers do.",
  skill: "speaking",
  level: "B2",
  order: 4,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Speaking Part 1" },
    { exam: "toefl", task: "Speaking – Listen and Repeat" },
    { exam: "toeic", task: "Speaking – Read a text aloud" },
  ],
  objectives: [
    "Stress the key content words in a sentence and move stress to show contrast",
    "Use falling, rising and fall-rise intonation for different meanings",
    "Link words together and use weak forms such as /tə/ and /ən/",
    "Read a short text aloud with natural rhythm",
  ],
  warmUp: [
    "Say “I didn't say she stole the money” three times, stressing a different word each time. Does the meaning change?",
    "When someone speaks English quickly, which small words are hardest for you to hear?",
  ],
  learn: [
    {
      type: "text",
      title: "Stress: the beat of English",
      body: "English has a strong rhythm. **Content words** (nouns, main verbs, adjectives, adverbs, negatives) are usually stressed: they are longer, louder and clearer. **Function words** (a, the, to, of, and, can, was, for…) are usually unstressed and very short.\n\n*I WENT to the SHOPS to BUY some BREAD.*\n\nIn each group of words, one stressed word is the most important: the **focus word**. It is usually the last content word, but you can **move** it to show contrast or new information:\n\n- A: Did you go to Paris by train? B: No, we **DROVE**. (contrast with *train*)\n- A: Is that your car? B: No, it's my **SISTER'S** car. (contrast with *your*)\n\nIf you stress every word equally, you can sound robotic or even annoyed, and the listener cannot hear what matters most.",
    },
    {
      type: "table",
      title: "Three intonation patterns",
      headers: ["Pattern", "Used for", "Example"],
      rows: [
        ["Fall ↘", "Statements, Wh- questions, finished ideas, firm opinions", "I live in the city ↘ centre. / Where do you ↘ work?"],
        ["Rise ↗", "Yes/no questions, checking, showing surprise", "Do you like ↗ cooking? / You've never been to ↗ London?"],
        ["Fall-rise ↘↗", "Lists (before the last item), unfinished ideas, polite disagreement, “but…” meanings", "I like ↘↗ tennis, ↘↗ swimming and ↘ cycling. / The food was ↘↗ okay… (but not great)"],
      ],
    },
    {
      type: "text",
      title: "Connected speech: why words seem to disappear",
      body: "Fluent speakers don't say words one by one. They join them, and some sounds change or drop. You don't have to copy every feature, but using the main ones makes you sound smoother, and recognising them helps your listening.\n\n- **Linking (consonant + vowel):** the final consonant joins the next vowel. *turn it off* → “tur-ni-toff”, *an apple* → “a-napple”.\n- **Weak forms:** function words lose their full vowel. *to* → /tə/, *and* → /ən/, *of* → /əv/, *can* → /kən/. “I can swim” sounds like “I c'n SWIM”.\n- **Elision (dropped sounds):** a /t/ or /d/ between two consonants often disappears. *next week* → “nex week”, *last night* → “las night”.\n- **Assimilation (changed sounds):** a sound changes to be closer to the next one. *did you* → “di-jou”, *would you* → “woo-jou”, *ten boys* → “tem boys”.\n- **Extra linking sounds:** between two vowels, a light /w/ or /j/ appears. *go out* → “go-w-out”, *I agree* → “I-y-agree”.",
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Pronunciation is a quarter of your IELTS Speaking score. The public band descriptors for the higher bands refer to a wide range of “phonological features”, which means stress, rhythm, intonation and connected speech, not just correct individual sounds. An accent is not a problem in itself; what matters is how easy you are to understand.",
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model answer: IELTS Part 1",
      voice: "uk",
      cast: { Examiner: "male", Candidate: "female" },
      transcript:
        "Examiner: Do you prefer to spend your free time indoors or outdoors?\nCandidate: Oh, outdoors, definitely. During the week I'm stuck in an office, so at the weekend I just want to get out of the house. I usually go for a walk in the hills, or I meet up with friends in the park. Having said that, if it's pouring with rain, I'm quite happy to stay in with a good book.",
    },
    {
      type: "text",
      title: "How a strong speaker does it",
      body: "Read the transcript while you listen again. Notice these features:\n\n- **Focus word for emphasis:** “Oh, OUTdoors, ↘ DEFinitely.” Two strong falls show a clear, confident opinion.\n- **Weak forms:** “stuck in **an** office” → “stu-ki-nə-noffice”; “out **of** the house” → “ou-təv thə house”. The small words are almost swallowed.\n- **Linking:** “meet **up** with” → “mee-tup with”; “stay **in**” → “stay-y-in”.\n- **Elision:** “ju(st) want” → the /t/ in *just* almost disappears before *want*.\n- **Fall-rise for a list:** “go for a walk in the ↘↗ hills… or I meet up with friends in the ↘ park.” The rise tells the listener there is more to come; the final fall closes the list.\n- **Contrast:** “Having ↘↗ SAID that…” signals a change of direction, then “if it's POURing with rain” puts focus on the new information.\n\nNone of these features is unusual. They are what makes the answer sound relaxed rather than read from a page.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Stress and intonation",
        questions: [
          {
            prompt: "A: “Did you buy a red jacket?” B: “No, I bought a blue jacket.” Which word should B stress most?",
            say: "No, I bought a blue jacket.",
            options: ["bought", "blue", "jacket", "I"],
            answer: 1,
            explanation: "*Blue* is the new, contrasting information (red vs. blue), so it becomes the focus word.",
          },
          {
            prompt: "Which question normally ends with a rising intonation?",
            options: ["What time does the class start?", "Where did you grow up?", "Have you ever been to Canada?", "Why did you choose that course?"],
            answer: 2,
            explanation: "Yes/no questions usually rise. Wh- questions (what, where, why) usually fall.",
          },
          {
            prompt: "A speaker says “The hotel was ↘↗ clean…” with a fall-rise and stops. What do they probably mean?",
            options: ["The hotel was perfect.", "The hotel was clean, but there was a problem with something else.", "They are asking whether the hotel was clean.", "The hotel was very dirty."],
            answer: 1,
            explanation: "A fall-rise on its own often suggests a hidden “but…”: partly positive, with a reservation.",
          },
          {
            prompt: "In “I want to go and see it”, how are *to* and *and* usually pronounced in natural speech?",
            say: "I want to go and see it.",
            options: ["/tuː/ and /ænd/, clearly and fully", "/tə/ and /ən/, short and weak", "They are stressed because they connect ideas", "They are completely silent"],
            answer: 1,
            explanation: "Function words use weak forms with the schwa sound /ə/. They are short but not silent.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Name the connected speech feature",
        instructions: "Match each example to the feature it shows. One feature is not used.",
        left: [
          "next door → “nex door”",
          "pick it up → “pi-ki-tup”",
          "ten people → “tem people”",
          "do it → “do-w-it”",
          "fish and chips → “fish ən chips”",
          "could you → “cou-jou”",
        ],
        right: [
          "weak form",
          "elision (a sound disappears)",
          "word stress on the first syllable",
          "linking consonant to vowel",
          "assimilation: /n/ becomes /m/",
          "extra /w/ sound between vowels",
          "assimilation: /d/ + /j/ becomes “j”",
        ],
        answer: [1, 3, 4, 5, 0, 6],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "shadow",
        title: "Shadowing: rhythm and linking",
        instructions: "Listen to each sentence, then record yourself copying the rhythm, linking and intonation as closely as you can. Don't worry about speed at first.",
        voice: "uk",
        sentences: [
          "I'd like a cup of tea and a piece of cake, please.",
          "Did you manage to get it all done last night?",
          "We went out for a meal at an Italian place near the station.",
          "It's not that I don't like it. It's just a bit expensive.",
          "I've been learning English for about six years now.",
          "Would you mind turning it off for a minute?",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "TOEIC: Read a text aloud",
        instructions: "You have 45 seconds to prepare and 45 seconds to read the text aloud. In your preparation time, read the text silently and decide where the focus words, the pauses and the lists are.",
        prompt:
          "Read this announcement aloud:\n\n“Good afternoon, and thank you for shopping at Greenway Market. This weekend only, we're offering twenty percent off all fresh fruit, vegetables and bread. Customers who spend more than fifty dollars will also receive a free reusable bag. Please note that our parking lot will be closed on Sunday morning for repairs, so we recommend using the side entrance on Mill Street. Thank you, and enjoy your visit.”",
        prepSeconds: 45,
        speakSeconds: 45,
        modelAnswer:
          "Good afternoon, and thank you for shopping at Greenway Market. This weekend only, we're offering twenty percent off all fresh fruit, vegetables and bread. Customers who spend more than fifty dollars will also receive a free reusable bag. Please note that our parking lot will be closed on Sunday morning for repairs, so we recommend using the side entrance on Mill Street. Thank you, and enjoy your visit.",
        targetPhrases: ["this weekend only", "fruit, vegetables and bread", "more than fifty dollars", "side entrance on Mill Street"],
        checklist: [
          "I paused at commas and full stops, not in the middle of phrases.",
          "I used a fall-rise on “fruit” and “vegetables” and a fall on “bread” (the end of the list).",
          "I stressed key information: twenty percent, free, closed, Sunday morning, side entrance.",
          "Small words like “and”, “for”, “at” and “to” were short and weak.",
          "I linked words smoothly, for example “thank you” and “enjoy your visit”.",
          "I finished the text within 45 seconds without rushing.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Don't try to show off pronunciation features in Part 1. Just answer naturally. Clear stress on key words and falling intonation at the end of your opinion make you sound confident; a flat, even voice can make a good answer sound memorised.",
    },
    {
      exam: "toefl",
      body: "In **Listen and Repeat**, copy the **rhythm** first, not the individual words. If you remember where the stressed beats were, the weak words in between are much easier to recall. Practise repeating sentences of increasing length with shadowing.",
    },
    {
      exam: "toeic",
      body: "In **Read a text aloud**, raters score pronunciation, and intonation and stress. Use the 45 seconds of preparation to find lists (a rise or fall-rise on each item, a fall on the last), numbers and names you need to say clearly, and the natural places to pause.",
    },
  ],
  vocabulary: [
    { word: "intonation", meaning: "the way your voice goes up and down when you speak", example: "Her intonation made the question sound friendly.", topic: "academic" },
    { word: "stress", meaning: "saying a word or syllable more strongly than others", example: "Put the stress on the word you want to emphasise.", topic: "academic" },
    { word: "rhythm", meaning: "the regular pattern of strong and weak beats in speech", example: "English rhythm depends on stressed words.", topic: "academic" },
    { word: "weak form", meaning: "the short, unstressed way a small word is usually said", example: "The weak form of “can” sounds like /kən/.", topic: "academic" },
    { word: "emphasise", meaning: "to show that something is especially important", example: "He emphasised the word “never”.", topic: "everyday" },
    { word: "be stuck in", meaning: "to be in a place or situation you can't easily leave", example: "I was stuck in traffic for an hour.", topic: "everyday" },
    { word: "having said that", meaning: "used to add a point that contrasts with what you just said", example: "It's expensive. Having said that, the quality is excellent.", topic: "everyday" },
    { word: "pour with rain", meaning: "to rain very heavily", example: "It was pouring with rain, so we stayed in.", topic: "everyday" },
    { word: "reusable", meaning: "can be used more than once", example: "Bring a reusable bottle instead of buying water.", topic: "environment" },
    { word: "meet up with", meaning: "to meet someone by arrangement, usually socially", example: "I'm meeting up with some old friends on Friday.", topic: "everyday" },
  ],
  keyPoints: [
    "Stress content words and keep function words short and weak.",
    "Move the focus word to show contrast or new information.",
    "Falling intonation sounds finished and confident; rising asks yes/no questions; fall-rise shows lists, unfinished ideas or a hidden “but”.",
    "Link consonants to vowels and let unstressed sounds weaken: this is what makes speech sound fluent.",
    "Shadowing short sentences is one of the most effective ways to build natural rhythm.",
  ],
};

export default lesson;
