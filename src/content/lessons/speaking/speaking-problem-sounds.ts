import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "speaking-problem-sounds",
  title: "Problem sounds and stress in long words",
  summary:
    "Fix the sounds that most often cause misunderstandings (th, v and w, l and r) and put the stress in the right place in long words and word families such as PHOtograph, phoTOGraphy and photoGRAPHic.",
  skill: "speaking",
  level: "B2",
  order: 11,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Speaking Part 1" },
    { exam: "toefl", task: "Speaking – Listen and Repeat" },
    { exam: "toeic", task: "Speaking – Read a text aloud" },
  ],
  objectives: [
    "Hear and say the difference between /θ/ and /s/, /t/ or /f/; /v/ and /w/; /l/ and /r/",
    "Use word endings to find the stressed syllable in long words",
    "Move the stress correctly across word families (PHOtograph, phoTOGraphy, photoGRAPHic)",
    "Read a short text aloud with clear sounds and correct word stress",
  ],
  warmUp: [
    "Say these three phrases quickly: “three free trees”, “very well”, “a long road”. Which one is hardest for you?",
    "Say “economy” and then “economic”. Is the strong syllable in the same place?",
  ],
  learn: [
    {
      type: "text",
      title: "Which problems really matter?",
      body: "An accent is not a problem. Examiners care about how easy you are to understand, and most accents are perfectly clear. Problems start when a sound change makes **a different word** (*I'll collect your essay* when you mean *correct*) or **a word that doesn't exist** (*I sink so*, for *I think so*).\n\nIn long words, **misplaced stress** is often a bigger problem than a wrong sound. Listeners use the stressed syllable to recognise a word, so *pho-to-GRA-phy* may simply not be understood, even if every sound in it is correct.\n\nIn this lesson, CAPITAL letters show the main stressed syllable, and the IPA symbols are the British ones used in learner dictionaries. In IPA, ˈ comes before the main stressed syllable and ˌ before a weaker, secondary stress.",
    },
    {
      type: "table",
      title: "Three pairs of problem sounds",
      headers: ["Sounds", "How to make them", "Minimal pairs"],
      rows: [
        [
          "/θ/ as in think, /ð/ as in this",
          "Put the tip of your tongue lightly between or just behind your top teeth and push air out over it. /θ/ is voiceless (only air); /ð/ is voiced (your throat buzzes). Don't let the tongue block the air completely, or you'll say /t/ or /d/.",
          "think / sink · thought / taught / fought · thin / tin · path / pass · then / den · breathe / breeze",
        ],
        [
          "/v/ as in very, /w/ as in well",
          "For /v/, touch your top teeth to your bottom lip and let your voice buzz. For /w/, your teeth touch nothing: round your lips as if you are saying “oo”, then open them quickly into the vowel.",
          "vest / west · vine / wine · verse / worse · vet / wet",
        ],
        [
          "/l/ as in light, /r/ as in right",
          "For /l/, the tip of your tongue touches the ridge just behind your top teeth, and air flows round the sides. For /r/, the tongue touches nothing: pull it back slightly and round your lips a little.",
          "light / right · collect / correct · glass / grass · cloud / crowd · fly / fry · alive / arrive",
        ],
      ],
    },
    {
      type: "text",
      title: "Stress in long words: the ending is your clue",
      body: "Many long words belong to **families**: *photograph, photographer, photography, photographic*. When you add an ending, the stress often **moves**. Three patterns cover a lot of words:\n\n- **Endings that put the stress on the syllable just before them**: *-ic, -ical, -ity, -tion / -sion, -ian*. eco-NOM-ic, po-LIT-i-cal, e-lec-TRIC-i-ty, ed-u-CA-tion, pol-i-TI-cian.\n- **Words ending in -graphy, -logy and -nomy stress the third syllable from the end**: pho-TOG-ra-phy, tech-NOL-o-gy, e-CON-o-my, bi-OL-o-gy.\n- **Endings that don't move the stress**: *-ment, -ness, -ful, -less*. em-PLOY → em-PLOY-ment, HAP-py → HAP-pi-ness, suc-CESS → suc-CESS-ful.\n\nThere are exceptions. The most common one in speaking tests is *POL-i-tics*, which does not follow the *-ic* pattern, although *po-LIT-i-cal* does.",
    },
    {
      type: "table",
      title: "Word families to learn together",
      headers: ["Word", "Stress", "IPA (British)"],
      rows: [
        ["photograph", "PHO-to-graph", "/ˈfəʊtəɡrɑːf/"],
        ["photographer", "pho-TOG-ra-pher", "/fəˈtɒɡrəfə(r)/"],
        ["photography", "pho-TOG-ra-phy", "/fəˈtɒɡrəfi/"],
        ["photographic", "pho-to-GRAPH-ic", "/ˌfəʊtəˈɡræfɪk/"],
        ["economy", "e-CON-o-my", "/ɪˈkɒnəmi/"],
        ["economist", "e-CON-o-mist", "/ɪˈkɒnəmɪst/"],
        ["economic", "e-co-NOM-ic", "/ˌiːkəˈnɒmɪk/ or /ˌekəˈnɒmɪk/"],
        ["politics", "POL-i-tics", "/ˈpɒlətɪks/"],
        ["political", "po-LIT-i-cal", "/pəˈlɪtɪkl/"],
        ["politician", "pol-i-TI-cian", "/ˌpɒləˈtɪʃn/"],
        ["democracy", "de-MOC-ra-cy", "/dɪˈmɒkrəsi/"],
        ["democratic", "dem-o-CRAT-ic", "/ˌdeməˈkrætɪk/"],
        ["analyse", "AN-a-lyse", "/ˈænəlaɪz/"],
        ["analysis", "a-NAL-y-sis", "/əˈnæləsɪs/"],
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Pronunciation is one of the four IELTS Speaking criteria. Examiners judge how easy you are to understand, so work on the sounds and stress patterns that change meaning or make words hard to recognise. Trying to remove your accent completely is not necessary.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Find the stress in long words",
        instructions: "Say each word aloud. Which version shows the correct stress? CAPITAL letters show the stressed syllable.",
        questions: [
          {
            prompt: "photography",
            say: "photography",
            options: ["PHO-tog-ra-phy", "pho-TOG-ra-phy", "pho-tog-RA-phy"],
            answer: 1,
            explanation: "Words ending in -graphy stress the third syllable from the end: pho-TOG-ra-phy /fəˈtɒɡrəfi/.",
          },
          {
            prompt: "photographic",
            say: "photographic",
            options: ["PHO-to-graph-ic", "pho-TOG-raph-ic", "pho-to-GRAPH-ic"],
            answer: 2,
            explanation: "-ic puts the stress on the syllable just before it: pho-to-GRAPH-ic /ˌfəʊtəˈɡræfɪk/.",
          },
          {
            prompt: "economist",
            say: "economist",
            options: ["E-con-o-mist", "e-CON-o-mist", "e-con-O-mist"],
            answer: 1,
            explanation: "Economist keeps the stress of economy: e-CON-o-mist /ɪˈkɒnəmɪst/.",
          },
          {
            prompt: "political",
            say: "political",
            options: ["po-LIT-i-cal", "POL-i-ti-cal", "po-li-TI-cal"],
            answer: 0,
            explanation: "-ical puts the stress on the syllable just before it: po-LIT-i-cal /pəˈlɪtɪkl/.",
          },
          {
            prompt: "politics",
            say: "politics",
            options: ["po-LI-tics", "po-li-TICS", "POL-i-tics"],
            answer: 2,
            explanation: "This is an exception to the -ic pattern: POL-i-tics /ˈpɒlətɪks/.",
          },
          {
            prompt: "electricity",
            say: "electricity",
            options: ["e-LEC-tri-ci-ty", "e-lec-TRIC-i-ty", "e-lec-tri-CI-ty"],
            answer: 1,
            explanation: "-ity puts the stress on the syllable just before it: e-lec-TRIC-i-ty /ɪˌlekˈtrɪsəti/.",
          },
          {
            prompt: "development",
            say: "development",
            options: ["DEV-el-op-ment", "de-vel-OP-ment", "de-VEL-op-ment"],
            answer: 2,
            explanation: "-ment doesn't move the stress, so development keeps the stress of develop: de-VEL-op-ment.",
          },
          {
            prompt: "analysis",
            say: "analysis",
            options: ["a-NAL-y-sis", "AN-a-ly-sis", "a-na-LY-sis"],
            answer: 0,
            explanation: "The stress moves from AN-a-lyse to a-NAL-y-sis /əˈnæləsɪs/.",
          },
          {
            prompt: "technological",
            say: "technological",
            options: ["tech-NOL-o-gi-cal", "TECH-no-lo-gi-cal", "tech-no-LOG-i-cal"],
            answer: 2,
            explanation: "Technology is tech-NOL-o-gy, but -ical moves the stress: tech-no-LOG-i-cal.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model: IELTS Part 1 answer",
      voice: "uk",
      cast: { Examiner: "female", Candidate: "male" },
      transcript:
        "Examiner: Do you enjoy taking photographs?\nCandidate: Yes, very much. I'm not a professional photographer, but photography has been my main hobby for about three years. I think what I like most is that it makes me look at things more carefully. Last weekend, for example, I walked along the river at sunrise and took about a hundred photos of the light on the water. My brother, who's an economist, thinks it's a waste of money, because I've just bought a new lens, but honestly, I think it was worth every penny.",
    },
    {
      type: "text",
      title: "How a clear speaker does it",
      body: "Listen again and notice how the speaker handles the problem sounds and the long words:\n\n- **Stress in the word family:** the examiner says *PHO-to-graphs*; the candidate answers with *a pro-FES-sion-al pho-TOG-ra-pher* and *pho-TOG-ra-phy*. The stress moves, and each word is easy to recognise.\n- **Another family:** *e-CON-o-mist* has the same stress as *e-CON-o-my*.\n- **th sounds:** *think*, *three*, *things*, *worth* (/θ/, only air) and *the*, *that*, *brother* (/ð/, with a buzz). The tongue never blocks the air completely.\n- **v and w:** *very*, *river*, *of* (/v/, teeth on lip) and *weekend*, *walked*, *water*, *waste*, *worth* (/w/, rounded lips, no teeth).\n- **l and r:** *look*, *last*, *along*, *light*, *lens* (/l/) and *river*, *sunrise*, *brother*, *professional* (/r/). In *river* and *sunrise*, the tongue never touches the roof of the mouth.\n\nNone of this sounds forced. The speaker doesn't exaggerate the sounds; they are simply clear enough that every word is the right word.",
    },
  ],
  practice: [
    {
      type: "audio",
      title: "Minimal pairs: which word do you hear?",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Sentence one. We thought about it for hours.\n\nSentence two. Can you pass me the thin one?\n\nSentence three. This wine comes from a small farm in the south.\n\nSentence four. The teacher will correct the tests on Friday.\n\nSentence five. Mind the glass on the floor.\n\nSentence six. The next word on the list is vest.\n\nSentence seven. Look at that crowd over there.\n\nSentence eight. We followed the path to the top of the hill.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        answerBy: "voice",
        title: "Which word did you hear?",
        instructions: "Listen to the eight sentences. In each one, both words would make sense, so you have to rely on the sound. Record yourself saying just the word you hear, then check your answers.",
        questions: [
          { prompt: "Sentence 1: We ___ about it for hours.", options: ["fought", "taught", "thought"], answer: 2, explanation: "thought /θɔːt/: the tongue is between the teeth, with air flowing. Fought starts with /f/ (teeth on lip) and taught with /t/ (air blocked)." },
          { prompt: "Sentence 2: Can you pass me the ___ one?", options: ["tin", "thin"], answer: 1, explanation: "thin /θɪn/ starts with air flowing over the tongue; tin /tɪn/ starts with a short burst after the air is blocked." },
          { prompt: "Sentence 3: This ___ comes from a small farm in the south.", options: ["wine", "vine"], answer: 0, explanation: "wine /waɪn/ starts with rounded lips and no teeth; vine /vaɪn/ starts with top teeth on the bottom lip." },
          { prompt: "Sentence 4: The teacher will ___ the tests on Friday.", options: ["collect", "correct"], answer: 1, explanation: "correct /kəˈrekt/ has /r/: the tongue touches nothing. Collect /kəˈlekt/ has /l/, with the tongue tip touching the ridge behind the teeth." },
          { prompt: "Sentence 5: Mind the ___ on the floor.", options: ["glass", "grass"], answer: 0, explanation: "glass /ɡlɑːs/ has /l/, with the tongue tip touching the ridge behind the teeth. Grass /ɡrɑːs/ has /r/." },
          { prompt: "Sentence 6: The next word on the list is ___.", options: ["west", "vest"], answer: 1, explanation: "vest /vest/ starts with a buzzing /v/ (teeth on lip)." },
          { prompt: "Sentence 7: Look at that ___ over there.", options: ["crowd", "cloud"], answer: 0, explanation: "crowd /kraʊd/ has /r/: the tongue touches nothing. Cloud /klaʊd/ has /l/." },
          { prompt: "Sentence 8: We followed the ___ to the top of the hill.", options: ["pass", "path"], answer: 1, explanation: "path /pɑːθ/ ends with /θ/, air flowing over the tongue between the teeth; pass /pɑːs/ ends with a hissing /s/." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "shadow",
        title: "Shadowing: sounds and long words",
        instructions: "Listen and repeat each sentence. Say it slowly first, focusing on the th, v / w and l / r sounds and the stress in the long words, then repeat it at a natural speed.",
        voice: "uk",
        sentences: [
          "I think the three of them are with their mother.",
          "We visited a village in the west with very good wine.",
          "Please collect the forms and correct any errors.",
          "She's a photographer who studied photography in Rome.",
          "Most economists think the economic situation will improve.",
          "Politicians don't always explain their political decisions.",
          "It's worth thinking about the weather before you travel.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "speak",
        title: "TOEIC: Read a text aloud",
        instructions: "You have 45 seconds to prepare and 45 seconds to read. In your preparation time, find the long words and decide where the stress goes, and notice the th, v / w and l / r sounds.",
        prompt:
          "Read this announcement aloud:\n\n“Welcome to the Riverside Photography Festival. This year, more than thirty photographers from twelve countries will show their work in the gallery and along the river walk. On Thursday evening, the well-known travel photographer Olivia Ward will talk about her latest project, which explores the relationship between wildlife and local communities. Workshops on photographic techniques run every morning at ten. Please note that tickets for the evening talk are limited, so we recommend booking online in advance.”",
        prepSeconds: 45,
        speakSeconds: 45,
        modelAnswer:
          "Welcome to the Riverside Photography Festival. This year, more than thirty photographers from twelve countries will show their work in the gallery and along the river walk. On Thursday evening, the well-known travel photographer Olivia Ward will talk about her latest project, which explores the relationship between wildlife and local communities. Workshops on photographic techniques run every morning at ten. Please note that tickets for the evening talk are limited, so we recommend booking online in advance.",
        targetPhrases: ["Riverside Photography Festival", "photographers from", "relationship between wildlife", "photographic techniques"],
        checklist: [
          "I stressed the long words correctly: pho-TOG-ra-phy, pho-TOG-ra-phers, pho-to-GRAPH-ic, re-LA-tion-ship, com-MU-ni-ties.",
          "My th in thirty, Thursday and the was clear, not s, t, f or d.",
          "I kept /v/ and /w/ different in evening, travel, well-known, Ward, wildlife and walk.",
          "I kept /l/ and /r/ different in Riverside, relationship, local, latest and limited.",
          "I paused at commas and full stops, and finished within 45 seconds.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "speak",
        title: "IELTS Part 1: use your new sounds in a real answer",
        instructions: "No preparation time. Answer in two to four sentences. Afterwards, listen to your recording and check the sounds and stress in the checklist.",
        prompt: "Do you use technology a lot in your daily life?",
        prepSeconds: 0,
        speakSeconds: 30,
        modelAnswer:
          "Yes, very much. I work in an office, so I'm on a computer most of the day, and I'd be lost without my phone. Having said that, I think technology can be a real distraction, so every evening I try to switch off for an hour and read a book. It's probably the most relaxing thing I do all week.",
        targetPhrases: ["very much", "technology", "without", "every evening", "relaxing"],
        checklist: [
          "I stressed tech-NOL-o-gy and com-PU-ter correctly.",
          "My /v/ in very and every was different from my /w/ in work and without.",
          "My th sounds in think, that and thing were clear.",
          "My /l/ and /r/ in lost, real and relaxing were clear.",
          "I answered directly and stopped naturally after about 20–30 seconds.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "In Listen and Repeat, a wrong sound can turn the sentence into a different one (*collect* instead of *correct*). Train your ear with minimal pairs as well as your mouth: it is much harder to repeat a sound accurately if you cannot hear the difference.",
    },
    {
      exam: "toeic",
      body: "In Read a text aloud, use the 45 seconds of preparation to find the long words (*photography*, *relationship*, *communities*) and decide where the stress goes before you start. Long words are the easiest to mis-stress when you are reading under time pressure.",
    },
    {
      exam: "ielts",
      body: "Don't slow down or exaggerate sounds in the real test. Practise the difficult sounds slowly at home until they are automatic, then speak at your normal pace in the exam. Natural rhythm matters as much as individual sounds.",
    },
  ],
  vocabulary: [
    { word: "minimal pair", meaning: "two words that differ in only one sound, such as think and sink", example: "Light and right are a minimal pair.", topic: "education" },
    { word: "voiced", meaning: "(of a sound) made with the throat vibrating, like /v/ or /ð/", example: "/v/ is voiced, but /f/ is not.", topic: "academic" },
    { word: "syllable", meaning: "a unit of sound in a word that contains one vowel sound", example: "Photography has four syllables.", topic: "education" },
    { word: "suffix", meaning: "letters added to the end of a word to make a new word", example: "-ness is a suffix that makes nouns from adjectives.", topic: "academic" },
    { word: "word family", meaning: "a group of words that share the same base, such as photograph and photography", example: "Learning word families helps your vocabulary grow quickly.", topic: "education" },
    { word: "economist", meaning: "an expert who studies how money, trade and industry work", example: "The economist expects prices to fall next year.", topic: "business" },
    { word: "politician", meaning: "a person whose job is in politics, especially an elected one", example: "The politician answered questions from local voters.", topic: "society" },
    { word: "wildlife", meaning: "wild animals and plants in their natural environment", example: "The national park protects local wildlife.", topic: "environment" },
    { word: "in advance", meaning: "before a particular time or event", example: "You need to book tickets in advance.", topic: "everyday" },
    { word: "worth every penny", meaning: "worth all the money it cost", example: "The course was expensive, but it was worth every penny.", topic: "everyday" },
    { word: "distraction", meaning: "something that takes your attention away from what you are doing", example: "Phones are a big distraction in class.", topic: "technology" },
  ],
  keyPoints: [
    "th: tongue between or just behind the top teeth with air flowing; don't block the air (t / d) or replace it with s, z or f.",
    "v: top teeth on the bottom lip with a buzz. w: rounded lips and no teeth.",
    "l: the tongue tip touches the ridge behind the top teeth. r: the tongue touches nothing.",
    "-ic, -ical, -ity, -tion and -ian put the stress just before the ending; -graphy, -logy and -nomy stress the third syllable from the end; -ment, -ness, -ful and -less don't move it.",
    "Learn long words in families and say them aloud: PHOtograph, phoTOGraphy, photoGRAPHic.",
  ],
};

export default lesson;
