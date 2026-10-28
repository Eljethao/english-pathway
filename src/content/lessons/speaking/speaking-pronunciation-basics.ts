import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-pronunciation-basics",
  title: "Pronunciation basics: sounds and word stress",
  summary:
    "Learn to hear and say difficult English sounds, put the stress on the right syllable, and speak more clearly in any speaking exam.",
  skill: "speaking",
  level: "B1",
  order: 1,
  minutes: 15,
  exams: [
    { exam: "ielts", task: "Speaking Part 1" },
    { exam: "toefl", task: "Speaking – Listen and Repeat" },
    { exam: "toeic", task: "Speaking – Read a text aloud" },
  ],
  objectives: [
    "Hear and say the difference between similar sounds, such as ship and sheep",
    "Find the stressed syllable in common words and say it clearly",
    "Use simple patterns to guess the stress in new words",
  ],
  warmUp: [
    "Is there an English word that people often don't understand when you say it? Which word is it?",
    "Say the word 'photograph', then 'photographer'. Does anything change?",
  ],
  learn: [
    {
      type: "text",
      title: "Why pronunciation matters",
      body: "You do not need a perfect British or American accent. Examiners want speech that is **easy to understand**. Two things help most:\n\n- **Clear sounds**: some vowels and consonants change the meaning of a word (*ship* or *sheep*?).\n- **Correct word stress**: in every word with two or more syllables, one syllable is **stronger**. If the stress is in the wrong place, listeners may not recognise the word, even if every sound is correct.",
    },
    {
      type: "text",
      title: "Minimal pairs: sounds that change the meaning",
      body: "A **minimal pair** is two words that are the same except for one sound. Practising them trains your ear and your mouth.\n\n- **ship / sheep**: short /ɪ/ is quick and relaxed; long /iː/ is longer, and you smile a little.\n- **live / leave**: the same short and long sounds.\n- **light / right**: for /l/ the tongue touches the top of the mouth; for /r/ it does not touch anything.\n- **van / fan**: /v/ buzzes (touch your throat and feel it); /f/ is only air.\n- **cup / cap**: /ʌ/ is short and central; /æ/ opens the mouth wider.\n- **pen / pan**: /e/ is short, with the mouth half open; for /æ/, drop your jaw and open the mouth wider.\n- **work / walk**: /ɜː/ in *work* is like a long *er* (American speakers also say the *r*); /ɔː/ in *walk* has round lips.\n\nThe symbols between slashes are the ones you see in British learner dictionaries.",
    },
    {
      type: "text",
      title: "Word stress: one strong syllable",
      body: "A stressed syllable is **longer**, **louder** and a little **higher** than the others. The other syllables are short and weak, and their vowel often becomes a quick *uh* sound (called *schwa*).\n\nIn this lesson, CAPITAL letters show the stressed syllable: PHO-to-graph, pho-TOG-ra-pher.\n\nThere are no perfect rules, but these patterns help with many words.",
    },
    {
      type: "table",
      title: "Useful stress patterns",
      headers: ["Pattern", "Examples"],
      rows: [
        ["Most two-syllable nouns and adjectives: stress the first syllable", "TA-ble, PROB-lem, HAP-py, MOR-ning"],
        ["Many two-syllable verbs: stress the second syllable", "be-GIN, de-CIDE, re-LAX, ex-PLAIN"],
        ["Words ending in -tion and -sion: stress the syllable just before", "ed-u-CA-tion, in-for-MA-tion, de-CI-sion"],
        ["Words ending in -ic and -ity: stress the syllable just before", "e-co-NOM-ic, sci-en-TIF-ic, u-ni-VER-si-ty"],
        ["Numbers ending in -teen: stress -teen; tens: stress the first syllable", "fif-TEEN / FIF-ty, thir-TEEN / THIR-ty"],
      ],
    },
    {
      type: "example",
      title: "Same word, different stress",
      items: [
        "I'd like to buy a new **RE**-cord. (noun)",
        "Can you re-**CORD** the meeting, please? (verb)",
        "Take a **PHO**-to-graph. → She's a pho-**TOG**-ra-pher. → He has a pho-to-**GRAPH**-ic memory.",
        "The bus leaves at four fif-**TEEN**, not four **FIF**-ty.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Pronunciation is one of the four criteria in IELTS Speaking, worth a quarter of your score. Clear word stress and sounds can lift your band even if your accent is strong.",
    },
  ],
  model: [
    {
      type: "audio",
      voice: "uk",
      cast: { narrator: "female" },
      title: "Model: a short introduction",
      transcript:
        "Hi, I'm Sam. I'm a photographer, and I live in a small town near the coast. I usually photograph weddings and hotels, but my favourite thing is taking pictures of the sea early in the morning. It's quiet, the light is beautiful, and there are hardly any people.\n\nLast year I decided to do an online course in photography, because I think education is important, even when you've been working for a long time. It was more difficult than I expected, but it was really interesting, and I learned a lot.",
    },
    {
      type: "text",
      title: "How a clear speaker does it",
      body: "Listen again and notice the stressed syllables in the long words:\n\n- I'm a pho-**TOG**-ra-pher… I usually **PHO**-to-graph weddings and ho-**TELS**.\n- I de-**CI**-ded to do an online course in pho-**TOG**-ra-phy.\n- ed-u-**CA**-tion is im-**POR**-tant.\n- It was more **DIF**-fi-cult than I ex-**PEC**-ted, but it was really **IN**-ter-est-ing.\n\nNotice also that small words like *a*, *and*, *to* and *of* are short and weak, and so are the unstressed syllables: in British English, *a pho-TOG-ra-pher* sounds like *uh-fuh-TOG-ruh-fuh*. Sam also says **live** with a short sound and **sea** and **people** with a long sound, so every word is clear.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Find the stressed syllable",
        instructions: "Say each word aloud a few times. Which version shows the correct stress? CAPITAL letters show the stressed syllable.",
        questions: [
          {
            prompt: "hotel",
            say: "hotel",
            options: ["HO-tel", "ho-TEL"],
            answer: 1,
            explanation: "This is an exception to the noun rule: we say ho-TEL.",
          },
          {
            prompt: "photographer",
            say: "photographer",
            options: ["PHO-tog-ra-pher", "pho-TOG-ra-pher", "pho-tog-RA-pher"],
            answer: 1,
            explanation: "The stress moves from PHO-to-graph to pho-TOG-ra-pher.",
          },
          {
            prompt: "information",
            say: "information",
            options: ["IN-for-ma-tion", "in-FOR-ma-tion", "in-for-MA-tion"],
            answer: 2,
            explanation: "Words ending in -tion stress the syllable just before it: in-for-MA-tion.",
          },
          {
            prompt: "comfortable",
            say: "comfortable",
            options: ["COM-for-ta-ble", "com-FOR-ta-ble", "com-for-TA-ble"],
            answer: 0,
            explanation: "COM-for-ta-ble. Many speakers say only three syllables: COMF-ta-ble.",
          },
          {
            prompt: "decide",
            say: "decide",
            options: ["DE-cide", "de-CIDE"],
            answer: 1,
            explanation: "Many two-syllable verbs stress the second syllable: de-CIDE.",
          },
          {
            prompt: "interesting",
            say: "interesting",
            options: ["IN-ter-est-ing", "in-TER-est-ing", "in-ter-EST-ing"],
            answer: 0,
            explanation: "IN-ter-est-ing. Many speakers say IN-tres-ting.",
          },
          {
            prompt: "economic",
            say: "economic",
            options: ["E-co-nom-ic", "e-CO-nom-ic", "e-co-NOM-ic"],
            answer: 2,
            explanation: "Words ending in -ic stress the syllable just before: e-co-NOM-ic.",
          },
          {
            prompt: "“Please don't record our conversation.” How do you say record here?",
            say: "Please don't record our conversation.",
            options: ["RE-cord", "re-CORD"],
            answer: 1,
            explanation: "Here record is a verb, so the stress is on the second syllable.",
          },
        ],
      },
    },
    {
      type: "audio",
      voice: "uk",
      cast: { narrator: "male" },
      title: "Minimal pairs: eight sentences",
      transcript:
        "Number one. Look at that big ship.\n\nNumber two. I don't want to leave here.\n\nNumber three. I think it's the light one.\n\nNumber four. We bought a new van.\n\nNumber five. Can I have your cup?\n\nNumber six. Can I borrow your pan?\n\nNumber seven. I work every day.\n\nNumber eight. The bus leaves at four fifteen.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Which word do you hear?",
        instructions: "Listen to the eight sentences above. For each one, choose the word you hear. Both words make sense, so listen carefully to the sound.",
        questions: [
          { prompt: "1. Look at that big …", options: ["ship", "sheep"], answer: 0, explanation: "Short /ɪ/: ship." },
          { prompt: "2. I don't want to … here.", options: ["live", "leave"], answer: 1, explanation: "Long /iː/: leave." },
          { prompt: "3. I think it's the … one.", options: ["light", "right"], answer: 0, explanation: "The tongue touches the top of the mouth: light." },
          { prompt: "4. We bought a new …", options: ["van", "fan"], answer: 0, explanation: "The sound buzzes: /v/, van." },
          { prompt: "5. Can I have your …?", options: ["cup", "cap"], answer: 0, explanation: "Short, central /ʌ/: cup." },
          { prompt: "6. Can I borrow your …?", options: ["pen", "pan"], answer: 1, explanation: "The mouth opens wider for /æ/: pan." },
          { prompt: "7. I … every day.", options: ["walk", "work"], answer: 1, explanation: "/ɜː/ like a long 'er': work." },
          {
            prompt: "8. The bus leaves at four …",
            options: ["fifteen", "fifty"],
            answer: 0,
            explanation: "You hear a long /iː/ and an /n/ at the end, and the stress is on the last syllable: fif-TEEN. FIF-ty has the stress at the start and ends in a short sound.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "shadow",
        voice: "uk",
        title: "Listen and repeat",
        instructions: "Listen to each sentence, then record yourself saying it. Make the stressed syllables long and clear, and keep the difficult sounds different.",
        sentences: [
          "I'd like a cheap seat on the ship, please.",
          "We wanted to leave, but we still live nearby.",
          "The photographer took a photograph of the hotel.",
          "Education is important for the economy.",
          "Turn right at the traffic lights.",
          "It costs fifteen pounds, not fifty.",
          "I walk to work when the weather is nice.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "Speaking practice: IELTS Part 1",
        instructions: "Answer as you would in IELTS Speaking Part 1. There is no preparation time. Focus on clear word stress in longer words.",
        prompt: "Let's talk about photos. Do you like taking photographs? Why or why not?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Yes, I really do. I'm not a professional photographer or anything, but I take photographs on my phone almost every day. I think it's interesting to look back at them later, because they remind me of small moments I'd normally forget, like a nice meal or a beautiful view from the bus. My favourite photos are probably the ones of my family, especially when nobody's posing.",
        targetPhrases: ["photographer", "photographs", "interesting", "probably", "especially", "family"],
        checklist: [
          "I stressed the right syllable in long words (pho-TOG-ra-pher, IN-ter-est-ing).",
          "Small words like a, and, to and of were short and weak.",
          "I kept similar sounds clear (live / leave, work / walk).",
          "I gave a reason, not just yes or no.",
          "I spoke for about 30 seconds without long pauses.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In IELTS Speaking, pronunciation is judged across all three parts. Don't try to copy an accent; focus on clear sounds, correct word stress and stressing the important words in each sentence.",
    },
    {
      exam: "toefl",
      body: "In TOEFL Listen and Repeat, you repeat each sentence exactly as you hear it. ETS says the task measures speech that is accurate and clearly intelligible, so copy the stress of every long word: a word with the wrong stress is much harder for a listener to recognise.",
    },
    {
      exam: "toeic",
      body: "In TOEIC Read a text aloud, your pronunciation, intonation and stress are scored. Use the 45 seconds of preparation to find long or unusual words and decide where the stress goes before you start reading.",
    },
  ],
  vocabulary: [
    { word: "syllable", meaning: "a part of a word with one vowel sound", example: "'Hotel' has two syllables: ho-tel.", topic: "education" },
    { word: "stress", meaning: "saying one part of a word more strongly than the rest", example: "In 'decide', the stress is on the second syllable.", topic: "education" },
    { word: "vowel", meaning: "a sound like a, e, i, o or u, made with the mouth open", example: "'Ship' and 'sheep' have different vowel sounds.", topic: "education" },
    { word: "consonant", meaning: "a sound like b, f, l or r, where the lips, teeth or tongue stop or block some of the air", example: "The words 'light' and 'right' start with different consonants.", topic: "education" },
    { word: "minimal pair", meaning: "two words that differ in only one sound", example: "'Van' and 'fan' are a minimal pair.", topic: "education" },
    { word: "pronounce", meaning: "to say a word in a particular way", example: "How do you pronounce your surname?", topic: "everyday" },
    { word: "mispronounce", meaning: "to say a word wrongly", example: "I always mispronounce 'comfortable'.", topic: "everyday" },
    { word: "accent", meaning: "the way people from a particular place speak", example: "She has a soft Scottish accent.", topic: "society" },
    { word: "rhythm", meaning: "a regular pattern of strong and weak sounds", example: "English has a rhythm of strong and weak syllables.", topic: "education" },
    { word: "recognise", meaning: "to know what something is when you see or hear it", example: "I didn't recognise the word because the stress was wrong.", topic: "everyday" },
  ],
  keyPoints: [
    "Clear speech matters more than a 'perfect' accent.",
    "Minimal pairs (ship / sheep, light / right) change the meaning, so practise hearing and saying them.",
    "Every long word has one strong syllable: longer, louder and higher.",
    "Patterns help: -tion, -sion, -ic and -ity stress the syllable just before; many two-syllable verbs stress the second syllable.",
    "Check the stress of new words in a dictionary and say them aloud when you learn them.",
  ],
};

export default lesson;
