import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-sentence-stress-rhythm",
  title: "Sentence stress and rhythm",
  summary:
    "Make your English easier to follow: stress the words that carry the meaning, use weak forms for small words, keep a steady rhythm, and move the stress to show new or corrected information.",
  skill: "speaking",
  level: "B1",
  order: 11,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Speaking Part 1" },
    { exam: "toefl", task: "Speaking – Listen and Repeat" },
    { exam: "toeic", task: "Speaking – Read a text aloud" },
  ],
  objectives: [
    "Find the content words in a sentence and stress them",
    "Use weak forms of small words, and know when they become strong",
    "Keep a steady rhythm, with the stressed syllables on a regular beat",
    "Move the main stress to show new or corrected information",
  ],
  warmUp: [
    "Say “I really like this city” twice: once like a robot, with every word the same, and once naturally. What changes?",
  ],
  learn: [
    {
      type: "text",
      title: "From word stress to sentence rhythm",
      body: "In lesson 1 you learned that every long word has one strong syllable. In lesson 3 you saw that content words are usually strong and grammar words are usually weak. This lesson puts these ideas together into **rhythm**, the music of spoken English.\n\nEnglish is often described as **stress-timed**: the stressed syllables come at a fairly regular beat, and the weak syllables between them are squeezed in. So adding small words to a sentence doesn't add much time, as long as the number of stressed words stays the same.",
    },
    {
      type: "example",
      title: "Same beat, more words (CAPITALS = stressed)",
      items: [
        "**SAM** · **LIKES** · **TEA**.",
        "**SAM** · **LIKES** the · **TEA**.",
        "**SAM** would have · **LIKED** the · **TEA**.",
        "**BUY** · **FRESH** · **BREAD**.",
        "You should **BUY** some · **FRESH** · **BREAD**.",
      ],
    },
    {
      type: "text",
      title: "Try it",
      body: "Tap the table three times at a steady speed and say each line in a group on the taps. The taps stay the same; the small words in between get quicker and weaker. In *Sam would have liked the tea*, *would have* sounds like *wuduv*.",
    },
    {
      type: "table",
      title: "Weak forms: the small words in a sentence",
      headers: ["Word", "Weak form", "In a sentence"],
      rows: [
        ["to", "/tə/ (tuh)", "I need to go → I need *tuh* go"],
        ["for", "/fə/ (fuh)", "It's for you → It's *fuh* you"],
        ["and", "/ən/ (un)", "fish and chips → fish *un* chips"],
        ["of", "/əv/ (uv)", "a cup of tea → a cup *uv* tea"],
        ["can", "/kən/ (kun)", "I can swim → I *kun* swim"],
        ["was", "/wəz/ (wuz)", "It was late → It *wuz* late"],
        ["from", "/frəm/ (frum)", "I'm from Peru → I'm *frum* Peru"],
      ],
    },
    {
      type: "text",
      title: "When small words are strong",
      body: "Small words keep their full, strong form:\n\n- **at the end of a sentence**: *Where are you **from**?* / *What are you looking **at**?*\n- **in short answers**: *Yes, I **can**.* / *Yes, it **was**.*\n- **when they are negative**: *can't*, *wasn't* and *don't* are always strong. That is how listeners hear the difference between *I can go* (weak *kən*) and *I CAN'T go*.\n- **when you contrast them**: *Is this letter **to** you or **from** you?*",
    },
    {
      type: "text",
      title: "Moving the stress to show meaning",
      body: "In a normal sentence, the **last content word** in a group usually gets the strongest stress: *I'm meeting her at the STATION.*\n\nBut you can move the main stress to show **new** or **corrected** information:\n\n- A: *Is the meeting on Tuesday?* B: *No, it's on THURSDAY.*\n- A: *Did you buy the blue shirt?* B: *No, I bought the GREEN one.*\n- A: *Is that your brother's car?* B: *No, it's MY car.*\n\nThis is useful in exams when you correct something (a TOEIC schedule question) or compare two things (*I prefer SUMMER to WINTER*).",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check",
        questions: [
          {
            prompt: "Which words are stressed in “I'm going to the shop for some bread”?",
            options: ["going, shop, bread", "I'm, to, the, for", "the, some"],
            answer: 0,
            explanation: "Going (main verb), shop and bread (nouns) carry the meaning. The small grammar words are weak.",
          },
          {
            prompt: "In “I need to go”, how is “to” usually said?",
            options: ["Strong, like the number two", "Weak, like tuh /tə/", "It is not pronounced at all"],
            answer: 1,
            explanation: "In the middle of a sentence, to is usually weak: I need tuh go.",
          },
          {
            prompt: "In “Where are you from?”, how is “from” said?",
            options: ["Weak: frəm", "Strong: from, because it is the last word"],
            answer: 1,
            explanation: "Small words at the end of a sentence keep their strong form.",
          },
          {
            prompt: "“Can you swim?” “Yes, I can.” How is “can” said in the answer?",
            options: ["Weak: kən", "Strong: can"],
            answer: 1,
            explanation: "In short answers, small words like can are strong.",
          },
          {
            prompt: "Why is it easy to hear the difference between “I can come” and “I can't come”?",
            options: [
              "Because can't is always stressed, while can is usually weak",
              "Because the t in can't is always very loud",
              "Because can't always comes at the end of the sentence",
            ],
            answer: 0,
            explanation: "The t in can't is often very quiet, especially in American English. The stress and the full vowel tell the listener it is negative.",
          },
          {
            prompt: "In English, the stressed syllables come…",
            options: [
              "at a fairly regular beat, with weak syllables squeezed in between",
              "on every word, equally strong",
              "only at the start of a sentence",
            ],
            answer: 0,
            explanation: "This regular beat is what gives English its rhythm.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      voice: "uk",
      cast: { Examiner: "female", Candidate: "male" },
      title: "Model: IELTS Part 1 with natural rhythm",
      transcript:
        "Examiner: Do you like going to the cinema?\nCandidate: Yes, I love it, but I don't go very often these days. Tickets are quite expensive where I live, so I usually go once a month, on a Tuesday, because it's cheaper. I like action films best, but my girlfriend prefers comedies, so we take turns to choose. To be honest, I think films are much better on a big screen.",
    },
    {
      type: "text",
      title: "How a clear speaker does it",
      body: "CAPITALS show the main stressed syllables. The small words in between are quick and weak.\n\n- YES, I LOVE it, but I DON'T go VERy OFten these DAYS.\n- TICKets are quite exPENsive where I LIVE, so I USually go ONCE a MONTH, on a TUESday, because it's CHEAPer.\n\nNotice:\n\n- **DON'T** is strong because it is negative.\n- *Tickets are* sounds like *TICKets uh*, *to choose* sounds like *tuh CHOOSE*, and *on a big screen* sounds like *on uh BIG SCREEN*.\n- **Contrast**: in *my girlfriend prefers COMedies*, the speaker stresses *comedies* to contrast it with *action films*.\n- The beat stays steady. The speaker doesn't rush the long phrases or slow down on the short ones, and the voice falls at the end of each statement.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Where is the main stress?",
        instructions: "Read each short exchange. Which word in B's answer gets the strongest stress? Say B's answer aloud before you choose.",
        questions: [
          {
            prompt: "A: “Do you live in London?” B: “No, I work in London.”",
            options: ["I", "work", "London"],
            answer: 1,
            explanation: "London is old information (A already said it). The new information is work, so it gets the main stress: No, I WORK in London.",
          },
          {
            prompt: "A: “Is the meeting at ten?” B: “No, it's at eleven.”",
            options: ["it's", "at", "eleven"],
            answer: 2,
            explanation: "Eleven is the corrected information: No, it's at ELEVEN.",
          },
          {
            prompt: "A: “Did you buy the red bag?” B: “No, I bought the black one.”",
            options: ["bought", "black", "one"],
            answer: 1,
            explanation: "The contrast is red / black, so black gets the main stress. One is a small word that replaces bag.",
          },
          {
            prompt: "A: “Is this your phone?” B: “No, it's her phone.”",
            options: ["it's", "her", "phone"],
            answer: 1,
            explanation: "The contrast is your / her. Phone is old information, so the stress moves to her.",
          },
          {
            prompt: "A: “Is the letter from the bank?” B: “No, it's to the bank.”",
            options: ["it's", "to", "bank"],
            answer: 1,
            explanation: "A small word becomes strong when it shows a contrast: from / TO.",
          },
          {
            prompt: "A TOEIC caller says: “The workshop is in Room A, right?” You answer: “Actually, it's in Room B.”",
            options: ["Actually", "Room", "B"],
            answer: 2,
            explanation: "B is the corrected information, so it gets the strongest stress: Actually, it's in Room B.",
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
        title: "Keep the beat",
        instructions: "Tap a steady beat. Each sentence has three strong beats. Say the small words faster and weaker so that the beat doesn't change.",
        sentences: [
          "Sam likes tea.",
          "Sam likes the tea.",
          "Sam would have liked the tea.",
          "Buy fresh bread.",
          "Buy some fresh bread.",
          "You should buy some fresh bread.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "shadow",
        voice: "uk",
        title: "Weak forms and contrast",
        instructions: "Listen and repeat. Make to, of, for, from and was weak in the middle of a sentence, but strong at the end and in short answers. Stress the words that show a contrast.",
        sentences: [
          "I need to go to the bank.",
          "It's a cup of tea for my mum.",
          "Where are you from?",
          "I'm from a small town near the coast.",
          "Yes, I can, but I can't do it today.",
          "It's not on Tuesday. It's on Thursday.",
          "It was late, and we were tired.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "TOEIC Read a text aloud: stress and rhythm",
        instructions: "You have 45 seconds to prepare. Decide which words to stress in each sentence and where to pause. Then read the text aloud in 45 seconds, with a steady rhythm.",
        prompt:
          "Read this recorded message aloud:\n\n“Thank you for calling Parkside Dental Clinic. Our opening hours are from eight in the morning to six in the evening, Monday to Friday, and from nine to one on Saturdays. To book, change or cancel an appointment, please press one. For questions about payments, please press two. If you have a dental emergency outside our normal hours, please call the number on our website. Please arrive ten minutes before your appointment, and bring a list of any medicines you are taking.”",
        prepSeconds: 45,
        speakSeconds: 45,
        modelAnswer:
          "Thank you for calling Parkside Dental Clinic. Our opening hours are from eight in the morning to six in the evening, Monday to Friday, and from nine to one on Saturdays. To book, change or cancel an appointment, please press one. For questions about payments, please press two. If you have a dental emergency outside our normal hours, please call the number on our website. Please arrive ten minutes before your appointment, and bring a list of any medicines you are taking.",
        targetPhrases: ["opening hours", "book, change or cancel", "press one", "press two", "emergency", "ten minutes"],
        checklist: [
          "I stressed the content words (opening hours, book, cancel, emergency) and kept small words like for, to and of weak.",
          "I kept a steady rhythm and didn't rush the long sentences.",
          "My voice rose on book and change and fell on cancel.",
          "I paused between chunks, at commas and full stops.",
          "Numbers and times were clear: eight, six, nine to one, ten minutes.",
          "I finished within 45 seconds.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Pronunciation is one of the four IELTS Speaking criteria, and examiners listen to features like stress, rhythm and intonation, not only single sounds. If every word has the same stress, you can sound flat and be harder to follow, even when your grammar is correct.",
    },
    {
      exam: "toefl",
      body: "In Listen and Repeat, copy the rhythm as well as the words. If you remember where the stressed words were, the small words in between are much easier to rebuild.",
    },
    {
      exam: "toeic",
      body: "In Read a text aloud, intonation and stress are part of your score. Use the 45 seconds of preparation to decide which words to stress in each sentence, especially names, numbers, lists and any contrast.",
    },
  ],
  vocabulary: [
    { word: "content word", meaning: "a word that carries meaning, such as a noun, main verb or adjective", example: "In “I bought fresh bread”, bought, fresh and bread are content words.", topic: "education" },
    { word: "function word", meaning: "a small grammar word, such as to, the, of or can", example: "Function words are usually short and weak.", topic: "education" },
    { word: "weak form", meaning: "the short, quick way to say a small word, often with an “uh” sound", example: "The weak form of “for” sounds like “fuh”.", topic: "education" },
    { word: "schwa", meaning: "the short, relaxed “uh” sound, the most common vowel sound in English", example: "The first sound in “about” is a schwa.", topic: "education" },
    { word: "beat", meaning: "a regular strong sound in music or speech", example: "Tap the beat on the table while you speak.", topic: "education" },
    { word: "emphasise", meaning: "to say a word more strongly to show it is important", example: "She emphasised the word “not”.", topic: "education" },
    { word: "contrast", meaning: "a clear difference between two things", example: "Stress the words that show a contrast: tea, not coffee.", topic: "education" },
    { word: "flat", meaning: "(of a voice) without much change, so it sounds bored", example: "His voice was flat, so he sounded tired.", topic: "everyday" },
    { word: "appointment", meaning: "a fixed time to meet someone, such as a doctor", example: "I've got a dentist appointment at three.", topic: "health" },
    { word: "emergency", meaning: "a sudden, dangerous situation that needs action quickly", example: "In an emergency, call this number.", topic: "health" },
    { word: "opening hours", meaning: "the times when a shop or office is open", example: "The library's opening hours are nine to five.", topic: "everyday" },
  ],
  keyPoints: [
    "Stress content words (nouns, main verbs, adjectives, negatives); keep function words short and weak.",
    "Weak forms use the schwa: to → tə, for → fə, of → əv, can → kən.",
    "Small words become strong at the end of a sentence, in short answers, in negatives and in contrasts.",
    "Keep a steady beat: more small words means quicker, weaker small words, not more time.",
    "Move the main stress to show new or corrected information: No, it's on THURSDAY.",
  ],
};

export default lesson;
