import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-collocations-paraphrasing",
  title: "Collocations and paraphrasing (lexical resource)",
  summary:
    "Raise your lexical resource score with accurate academic collocations and three reliable paraphrasing techniques: synonyms, word-form changes and structural changes.",
  skill: "writing",
  level: "C1",
  order: 2,
  minutes: 55,
  exams: [
    { exam: "ielts", task: "Writing Task 2" },
    { exam: "ielts", task: "Writing Task 1 (Academic)" },
  ],
  objectives: [
    "Use precise verb + noun and adjective + noun collocations in academic writing",
    "Paraphrase a task prompt by combining synonyms, word-form changes and structural changes",
    "Replace vague words such as big, thing, good and do with precise alternatives",
    "Recognise and avoid collocation errors that lower a lexical resource score",
  ],
  warmUp: [
    "Which sounds more natural in English: *make a mistake* or *do a mistake*? *heavy traffic* or *strong traffic*? How do you know?",
    "When you write an essay, how do you avoid repeating the words from the question?",
  ],
  learn: [
    {
      type: "text",
      title: "What examiners mean by lexical resource",
      body: "Lexical resource is one quarter of your IELTS Writing score. In the public band descriptors, a band 7 resource allows *some flexibility and precision*, includes some *less common and/or idiomatic items* and shows *an awareness of style and collocation*, though some inappropriacies occur. Band 8 adds *skilful use of uncommon and/or idiomatic items*, with only occasional inaccuracies in word choice and collocation.\n\nA **collocation** is a combination of words that native speakers naturally use together: *pose a threat*, *heavy rain*, *a sharp rise*. The meaning of *make research* is clear, but it sounds translated. Accurate collocations are often what separates a band 6 essay from a band 7 essay, more than rare or long words.",
    },
    {
      type: "table",
      title: "High-value academic collocations",
      headers: ["Avoid", "Use instead", "Example"],
      rows: [
        ["make research", "carry out / conduct research", "Researchers conducted a survey of 2,000 households."],
        ["give a solution", "find / propose a solution", "The report proposes several practical solutions."],
        ["a big problem", "a serious / pressing problem", "Air pollution is a pressing problem in many cities."],
        ["solve a challenge", "meet / tackle / address a challenge", "Cities must tackle the challenge of an ageing population."],
        ["make awareness", "raise awareness (of)", "The campaign raised awareness of food waste."],
        ["a big amount of", "a considerable / substantial amount of", "The project required a substantial amount of funding."],
        ["make an effect on", "have an effect / impact on", "Screen time can have a negative effect on sleep."],
        ["do a role", "play a role (in)", "Parents play a key role in children's education."],
        ["give pressure on", "put pressure on / place a strain on", "Tourism places a strain on local infrastructure."],
      ],
    },
    {
      type: "text",
      title: "Three ways to paraphrase",
      body: "1. **Synonyms**, used with care: *children → young people*, *harmful → damaging*. Not every word has a perfect synonym. Keep technical terms such as *public transport* or *greenhouse gases* if there is no natural alternative, and paraphrase the rest of the sentence.\n2. **Change the word form**: *Unemployment has increased* → *There has been an increase in unemployment*; *It is important to…* → *The importance of…*\n3. **Change the structure**: active ↔ passive, clause → noun phrase, or a different order of information: *Governments should invest more in public transport* → *More public money should be spent on buses and trains.*\n\nThe best paraphrases combine all three. Two rules: never change the meaning, and never use a word you are not sure about just because it looks impressive.",
    },
    {
      type: "example",
      title: "Paraphrasing task prompts",
      items: [
        "Prompt: Many people believe that the government **should spend more money on** preventing illness **rather than** treating it.",
        "Paraphrase: **It is widely argued that** a greater share of the health budget **should be devoted to** prevention **instead of** cure.",
        "Prompt: The number of international students has **increased dramatically** in recent years.",
        "Paraphrase: Recent years have **seen a dramatic rise in** the number of students studying abroad.",
        "Prompt (Task 1): The chart **shows** how many people **used** three types of transport.",
        "Paraphrase: The bar chart **compares the number of passengers** on three modes of transport.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Do not memorise long “impressive” phrases and drop them into any essay. Examiners notice memorised language, and a rare word in the wrong collocation can lower your score. Precise, natural collocations (*a serious problem*, *tackle unemployment*) are better than rare words used wrongly.",
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*Many people believe that the best way to improve public health is to build more sports facilities. To what extent do you agree or disagree?*",
    },
    {
      type: "passage",
      title: "Model introduction and first body paragraph",
      paragraphs: [
        "It is often argued that providing more sports facilities is the most effective way to improve the health of the population. While easy access to gyms and swimming pools certainly encourages some people to take regular exercise, I would argue that diet plays a far greater role in long-term well-being, so building facilities alone would have only a limited impact.",
        "The main reason for my view is that the most widespread health problems today are closely linked to what people eat. Heart disease and type 2 diabetes, for instance, pose a serious threat to millions of people, and the excessive consumption of sugar and processed food is one of their main risk factors. A new swimming pool will do little to address this issue if residents continue to rely on cheap fast food. Governments would therefore achieve better results by imposing a tax on sugary drinks or by raising awareness of healthy eating in schools. Such measures tackle the root cause of the problem rather than one of its symptoms.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "**Paraphrasing the prompt**\n\n- *Many people believe* → *It is often argued* (structure change)\n- *the best way to improve public health* → *the most effective way to improve the health of the population* (synonym + structure change)\n- *build more sports facilities* → *providing more sports facilities* (synonym + word-form change), then *gyms and swimming pools* (specific examples instead of repetition)\n\n**Collocations in the body paragraph**\n\n- *widespread health problems*, *closely linked to*, *pose a serious threat*, *excessive consumption*, *address this issue*, *achieve better results*, *impose a tax on*, *raise awareness of*, *tackle the root cause*\n\nNone of these words is rare. The paragraph sounds advanced because each word is combined with the right partner.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Verb + noun collocations",
        instructions: "Match each verb to the noun it most naturally collocates with. One noun is not used.",
        left: ["conduct", "pose", "raise", "tackle", "meet", "draw", "bridge"],
        right: ["a conclusion", "the gap", "research", "a threat", "awareness", "the demand", "unemployment", "a mistake"],
        answer: [2, 3, 4, 6, 5, 0, 1],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Choose the natural collocation",
        instructions: "Complete each sentence with a word from the box. Three words are not used.",
        text: "1. Governments must take urgent action to {{0}} the problem of youth unemployment.\n2. The new policy had a {{1}} impact on air quality, cutting pollution by almost half.\n3. Scientists have {{2}} extensive research into the effects of screen time on sleep.\n4. Rising sea levels {{3}} a serious threat to low-lying coastal communities.\n5. The campaign aims to {{4}} awareness of the risks of skin cancer.\n6. Many employers attach great {{5}} to communication skills.\n7. Online courses have made higher education more {{6}} to people in remote areas.",
        answers: [
          ["tackle", "address", "solve", "deal with", "combat"],
          ["significant", "dramatic", "considerable", "substantial", "major", "marked", "positive", "huge", "noticeable"],
          ["conducted", "carried out", "done", "undertaken"],
          ["pose", "present", "represent", "constitute"],
          ["raise", "increase", "build", "spread"],
          ["importance", "weight", "value", "significance"],
          ["accessible", "available"],
        ],
        wordBank: ["tackle", "significant", "conducted", "pose", "raise", "importance", "accessible", "make", "high", "do"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Paraphrasing and word choice",
        questions: [
          {
            prompt: "Prompt: “Some people think that young people should be required to learn a second language at school.” Which is the most accurate paraphrase?",
            options: [
              "Some people think that young people should be required to learn a foreign language at school.",
              "It is sometimes argued that studying a foreign language should be compulsory for school pupils.",
              "Many people believe that all young people already speak two languages.",
              "Everyone agrees that languages are the most important school subject.",
            ],
            answer: 1,
            explanation: "It changes the structure (*It is sometimes argued that studying… should be…*), uses synonyms (*required → compulsory*, *young people at school → school pupils*) and keeps the meaning. The first option changes only one word; the others change the meaning.",
          },
          {
            prompt: "Original: “The number of car owners has risen sharply over the past decade.” Which paraphrase keeps the original meaning?",
            options: [
              "Car owners have risen sharply over the past decade.",
              "Cars have become slightly more popular in recent years.",
              "Over the past decade, the number of cars has declined sharply.",
              "The past decade has seen a sharp increase in car ownership.",
            ],
            answer: 3,
            explanation: "*risen sharply* → *a sharp increase*; *car owners* → *car ownership*. The others are illogical (*owners have risen*) or change the meaning.",
          },
          {
            prompt: "Which sentence contains a collocation error?",
            options: [
              "The study draws attention to a serious gap in the research.",
              "The report highlights the need for further investment.",
              "The company did a big profit last year.",
              "Volunteers play a vital role in the community.",
            ],
            answer: 2,
            explanation: "We *make* a profit, and a large profit is *substantial* or *considerable*: *The company made a substantial profit last year.*",
          },
          {
            prompt: "Which word best replaces *very important* in “Clean water is very important for public health”?",
            options: ["huge", "strong", "essential", "heavy"],
            answer: 2,
            explanation: "*essential for* is a precise, natural collocation. The other adjectives do not collocate with *for public health* in this meaning.",
          },
          {
            prompt: "What is the best strategy for a technical term such as *greenhouse gases* in the prompt?",
            options: [
              "Replace it with a rare synonym",
              "Keep it, because there is no natural synonym, and paraphrase the rest of the sentence",
              "Translate it from your own language",
              "Avoid mentioning it in your essay",
            ],
            answer: 1,
            explanation: "Forcing a synonym for a technical term often produces an error. Repeating it is acceptable; vary the words around it.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "write",
        title: "Your turn: IELTS Writing Task 2",
        instructions: "Before you write, paraphrase the prompt and list six collocations you plan to use. After writing, underline every collocation you used.",
        prompt:
          "Some people believe that tourism does more harm than good to the places that tourists visit. To what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
        minWords: 250,
        minutes: 40,
        rubric: [
          "Task response: My position is clear throughout, and I considered both the harm and the benefits of tourism.",
          "Coherence and cohesion: Each paragraph has a clear central idea, and I used reference and linking language accurately.",
          "Lexical resource: I paraphrased the prompt in my introduction using synonyms, word-form changes and a different structure.",
          "Lexical resource: I used at least six accurate collocations (for example place a strain on, generate revenue, play a key role).",
          "Lexical resource: I avoided vague words such as thing, good, bad and big where a more precise word exists.",
          "Lexical resource: I did not repeat the key words of the prompt (tourism, harm, good) more than necessary.",
          "Grammatical range and accuracy: I used a variety of complex structures, and most of my sentences are error-free.",
          "I wrote at least 250 words in about 40 minutes.",
        ],
        modelAnswer:
          "Leisure travel has expanded enormously in recent decades, and some argue that the damage it causes to popular destinations now outweighs its benefits. Although I accept that mass tourism can place a heavy burden on some communities, I believe that, when it is properly managed, tourism brings far more advantages than disadvantages.\n\nThere is no denying that uncontrolled tourism can have serious consequences. In some historic cities, the sheer volume of visitors places a severe strain on local infrastructure, from public transport to waste collection. Rising demand for short-term holiday rentals has also driven up housing costs, forcing many long-term residents to move away. In fragile natural environments, coral reefs and mountain trails can suffer lasting damage when visitor numbers exceed what the ecosystem can sustain.\n\nHowever, these problems stem from poor management rather than from tourism itself. For many regions, tourism is a vital source of income that creates jobs, supports small businesses and generates tax revenue which can be reinvested in schools and hospitals. It can also play a key role in preserving cultural heritage, since entrance fees often fund the restoration of ancient buildings and the protection of national parks. Where authorities have introduced sensible measures, such as limiting daily visitor numbers or charging a modest tourist tax, destinations have been able to enjoy these benefits while reducing the negative effects.\n\nIn conclusion, while the drawbacks of mass tourism should not be underestimated, I disagree that travel does more harm than good overall. Provided that governments regulate it carefully, tourism remains a powerful force for economic development and cultural preservation.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Paraphrase the prompt in your introduction, but do not try to change every word. Changing three or four key elements naturally is better than a sentence full of forced synonyms. Language copied directly from the question shows nothing about your own vocabulary.",
    },
    {
      exam: "ielts",
      body: "In Task 1, paraphrase the chart description in your first sentence: *The graph shows the number of…* → *The line graph illustrates how many…*. Then vary your trend language: *a sharp rise*, *a gradual decline*, *remained stable*, *peaked at*.",
    },
  ],
  vocabulary: [
    { word: "collocation", meaning: "words that are often used together in a natural way", example: "“Heavy traffic” is a common collocation.", topic: "academic" },
    { word: "pose a threat (to)", meaning: "to be a possible danger to someone or something", example: "Rising temperatures pose a threat to coral reefs.", topic: "environment" },
    { word: "tackle", meaning: "to deal with a difficult problem in a determined way", example: "The city introduced new measures to tackle congestion.", topic: "society" },
    { word: "conduct research", meaning: "to carry out a formal study", example: "The team conducted research into sleep and memory.", topic: "science" },
    { word: "raise awareness (of)", meaning: "to make more people know about an issue", example: "The campaign raised awareness of the dangers of smoking.", topic: "health" },
    { word: "place a strain on", meaning: "to cause difficulties by making too many demands on something", example: "An ageing population places a strain on health services.", topic: "society" },
    { word: "generate revenue", meaning: "to produce income", example: "The festival generates revenue for local businesses.", topic: "business" },
    { word: "cultural heritage", meaning: "the traditions, buildings and objects that a society values from its past", example: "Entrance fees help to protect the region's cultural heritage.", topic: "travel" },
    { word: "root cause", meaning: "the basic reason why a problem exists", example: "Poor diet is a root cause of many health problems.", topic: "health" },
    { word: "outweigh", meaning: "to be greater or more important than something else", example: "The benefits of the scheme outweigh its costs.", topic: "academic" },
  ],
  keyPoints: [
    "Lexical resource rewards precision and natural collocation more than rare or long words.",
    "Learn collocations as chunks: conduct research, pose a threat, raise awareness, place a strain on.",
    "Paraphrase by combining synonyms, word-form changes and structural changes, without changing the meaning.",
    "Keep technical terms that have no natural synonym, and paraphrase the words around them.",
    "Replace vague words (big, thing, good, do) with precise alternatives.",
  ],
};

export default lesson;
