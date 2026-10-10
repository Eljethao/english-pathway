import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-reasons-examples",
  title: "Giving reasons and examples",
  summary:
    "Support your opinion in a short paragraph: give a clear reason, explain it, and add a real, specific example, using because, so, such as and for example correctly.",
  skill: "writing",
  level: "B1",
  order: 9,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Writing Task 2" },
    { exam: "toefl", task: "Writing – Academic Discussion" },
    { exam: "toeic", task: "Writing – Write an opinion essay" },
  ],
  objectives: [
    "Support an opinion with a reason, an explanation and an example",
    "Choose examples that are specific and believable: from your own life, people you know or typical situations",
    "Use because, because of, so, for example, for instance and such as correctly",
    "Write a short opinion paragraph of at least 100 words with two supported reasons",
  ],
  warmUp: [
    "What is one thing that you think all young people should learn? Give one reason for your answer.",
    "Think of something you learned outside school. Who or what taught you?",
  ],
  learn: [
    {
      type: "text",
      title: "An opinion needs support",
      body: "When you give an opinion in writing, the reader always asks two questions: **Why?** and **Can you show me?**\n\nSo every main idea in an opinion paragraph needs three parts:\n\n1. a **reason**: why you think this\n2. an **explanation**: what the reason means, or what happens because of it\n3. an **example**: a real or typical case that shows the reason is true\n\nAll three exams ask for this. IELTS Task 2 asks you to give reasons and include relevant examples. The TOEFL Academic Discussion and the TOEIC opinion essay also ask you to support your opinion.",
    },
    {
      type: "table",
      title: "Reason, explanation, example",
      headers: ["Part", "What it does", "Example (topic: learning a musical instrument)"],
      rows: [
        ["Opinion", "Answers the question", "I think most children would benefit from learning a musical instrument."],
        ["Reason", "Says why", "The main reason is that it teaches patience."],
        ["Explanation", "Says more about the reason", "Children have to practise for weeks or months before they can play a piece well."],
        ["Example", "Shows it in real life", "For example, my nephew practised the guitar every day for six months before he could play his favourite song."],
      ],
    },
    {
      type: "example",
      title: "Language for reasons and results",
      items: [
        "I like living in a small town **because** it is quiet. (*because* + subject + verb)",
        "The match was cancelled **because of** the rain. (*because of* + noun)",
        "**Since** most people have a phone, apps are a good way to learn. (*since* = because)",
        "**The main reason is that** a library is free for everyone.",
        "Buses are cheap, **so** many students use them. (*so* shows the result)",
        "Healthy food is expensive. **That is why** some families buy fast food.",
      ],
    },
    {
      type: "text",
      title: "Four kinds of good example",
      body: "- **Your own experience**: *When I was at school, I worked in a café on Saturdays.*\n- **Someone you know**: *My cousin, for instance, learned to cook from online videos.*\n- **A typical situation**: *For example, a student who lives far from the city centre may spend two hours a day on buses.*\n- **Something most people know**: *For example, most supermarkets now have self-service checkouts.*\n\nA good example is **specific** (a real place, person or situation) and it **clearly supports your reason**. Do not invent numbers or studies (*Scientists say that 87% of…*). A clear, believable example is much stronger.",
    },
    {
      type: "example",
      title: "For example, for instance and such as",
      items: [
        "**For example,** my brother saved enough money for driving lessons. (start of a sentence + comma)",
        "My brother, **for instance,** saved enough money for driving lessons. (in the middle, between commas)",
        "Sports **such as** swimming and cycling are good for your heart. (*such as* + nouns)",
        "Wrong: *For example, swimming and cycling.* (This is not a sentence: there is no verb.)",
        "In an exam, write **for example** in full rather than *e.g.*",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Be careful with very big words such as *everyone*, *always*, *never* and *all*. *Everyone hates public transport* is easy to disagree with. *Many people prefer to drive* is more accurate, and examiners notice this.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: reasons and examples",
        questions: [
          {
            prompt: "Opinion: “Cities should have more cycle lanes.” Which is the best reason?",
            options: [
              "Bicycles are made of metal.",
              "Cycle lanes make cycling safer, so more people would cycle instead of driving.",
              "Some people have a bicycle.",
              "I saw a cycle lane on television.",
            ],
            answer: 1,
            explanation: "It says why cycle lanes are a good idea and adds a result. The other options are facts or details that do not support the opinion.",
          },
          {
            prompt: "Reason: “Learning a language helps you to make friends.” Which is the best example?",
            options: [
              "Languages are very interesting.",
              "There are about 7,000 languages in the world.",
              "When I studied Spanish, I joined a conversation club and met two people who are now close friends.",
              "Everyone should learn a language.",
            ],
            answer: 2,
            explanation: "It is specific (Spanish, a conversation club, two friends) and it shows the reason in real life.",
          },
          {
            prompt: "Choose the correct sentence.",
            options: [
              "Many people work from home because of it saves time.",
              "Many people work from home because it saves time.",
              "Many people work from home because saving time.",
              "Many people work from home because of save time.",
            ],
            answer: 1,
            explanation: "*Because* is followed by a subject and a verb (*it saves*). *Because of* is followed by a noun (*because of the traffic*).",
          },
          {
            prompt: "Which sentence is the most accurate?",
            options: [
              "Everyone in my country hates fast food.",
              "Young people never cook at home.",
              "Many young people in my city cook less often than their parents did.",
              "All students always study at night.",
            ],
            answer: 2,
            explanation: "*Many* and *less often* are careful words that the writer can support. The other sentences are over-generalisations.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*Should schools teach students how to manage money?*\n\n*Write one paragraph of at least 100 words. Give reasons for your answer and include examples.*",
    },
    {
      type: "passage",
      title: "Model paragraph",
      paragraphs: [
        "In my opinion, schools should teach students how to manage money, because many young people do not learn this at home. The main reason is that money skills help young people to avoid serious problems later. Many adults find it difficult to use credit cards and loans sensibly. For example, a student who does not understand how a credit card works can quickly get into debt and then need years to pay it back. A second reason is that these lessons give students more independence. When teenagers know how to plan a budget, they can make their own decisions about saving and spending. My sister, for instance, learned to plan a weekly budget in a school project, and a year later she had saved enough to buy her own laptop. Of course, parents can teach some of these skills too. However, not every family talks openly about money, so a few lessons at school would help all students to start adult life with more confidence.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **A clear opinion in the first sentence**: *schools should teach students how to manage money*. The writer says *many young people*, not *all young people* or *everyone*.\n- **Reason 1 → explanation → example**: avoiding problems later → *many adults find it difficult to use credit cards and loans sensibly* → a student who gets into debt with a credit card.\n- **Reason 2 → explanation → example**: more independence → *they can make their own decisions about saving and spending* → the sister who planned a budget and bought her own laptop.\n- **Two kinds of example**: a typical situation (*a student who does not understand how a credit card works*) and someone the writer knows (*my sister*).\n- **Signals the reader can follow**: *The main reason is that*, *For example*, *A second reason is*, *for instance*.\n- **A short final point** that answers a possible objection (*parents can teach some of these skills too*) and returns to the opinion.\n\nLength: about 165 words.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Match the reason and the example",
        instructions: "Match each reason with the example that supports it best. There is one extra example.",
        left: [
          "Living in a big city can be very expensive.",
          "Learning to cook is a useful life skill.",
          "Reading on paper can help you concentrate.",
          "Working from home can save a lot of time.",
          "Team sports help children to make friends.",
        ],
        right: [
          "Many people enjoy watching football on television at the weekend.",
          "For example, in some capital cities a small flat in the centre costs more than half of an average salary.",
          "My sister used to spend two hours a day on the train, but now she uses that time to go running.",
          "When I read a printed book, I am not interrupted by messages and notifications.",
          "My son joined a football club last year, and now he meets his teammates at weekends too.",
          "For instance, people who can make simple meals spend less on takeaways and usually eat more healthily.",
        ],
        answer: [1, 5, 3, 2, 4],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Complete the paragraph",
        instructions: "Complete the paragraph with words from the box. There are two extra words.",
        text: "In my view, every town needs a good public library. The main reason {{0}} that libraries give everyone free access to books and computers. This is important {{1}} not everyone can afford to buy books or pay for the internet at home. {{2}}, a student from a poor family can use a library computer to do homework or apply for jobs. Libraries also offer free activities {{3}} reading groups, language classes and story time for children. Many older people feel lonely, {{4}} these activities are a good way for them to meet others. {{5}} the high cost of living, these free services are more important than ever. {{6}} I believe local governments should spend more money on libraries, not less.",
        answers: [
          ["is"],
          ["because", "as", "since"],
          ["For example", "For instance"],
          ["such as", "like", "including"],
          ["so"],
          ["Because of", "Due to", "As a result of"],
          ["That is why", "This is why", "That's why", "For this reason", "Therefore", "So"],
        ],
        wordBank: ["is", "because", "For example", "such as", "so", "Because of", "That is why", "although", "such"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "order",
        mode: "lines",
        title: "Put the paragraph in order",
        instructions: "The paragraph answers the question “Should all children learn to swim at school?” Put the sentences in the correct order.",
        items: [
          "I strongly believe that all children should learn to swim at school.",
          "The most important reason is safety.",
          "Children who can swim are much safer near rivers, lakes and the sea, especially on holiday.",
          "For example, when my friend's daughter fell into a lake last summer, she was able to swim back to the shore.",
          "Another reason is that swimming is a healthy sport that people can enjoy all their lives.",
          "For these reasons, swimming lessons should be part of every school timetable.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: a supported opinion paragraph",
        instructions: "Plan for 2 minutes: write your opinion, two reasons and one example for each. Then write for about 10 minutes and check your work.",
        prompt:
          "Some people think that young people should do one year of volunteer work before they start university or a job. Do you agree or disagree?\n\nWrite one paragraph of at least 100 words. Give two reasons for your opinion, explain each reason, and give at least one specific example.",
        minWords: 100,
        minutes: 12,
        rubric: [
          "Task: my opinion is clear in the first sentence.",
          "Support: I gave two different reasons, and I explained each one.",
          "Examples: I gave at least one specific example (my own experience, someone I know or a typical situation), and it clearly supports my reason.",
          "Accuracy of ideas: I avoided over-generalisations such as everyone, always and never.",
          "Language: I used because, because of, so, for example, for instance or such as correctly.",
          "Organisation: my reasons are easy to find (The main reason…, A second reason…), and I finished with a sentence that returns to my opinion.",
          "Length: I wrote at least 100 words.",
        ],
        modelAnswer:
          "I agree that a year of volunteer work can be very useful for young people before they start university or a job. The first reason is that volunteering helps them to understand what they really want to do. Many eighteen-year-olds choose a university course without much experience of the world. For example, a young person who helps at an animal shelter for a year may discover that they want to become a vet, or that they do not. The second reason is that volunteers learn to be responsible. They have to arrive on time, follow instructions and work with people of different ages. My cousin, for instance, worked at a summer camp for children, and she became much more confident and organised. However, not every family can afford a year without a salary, so this should be a choice, not a rule. Overall, I think a volunteer year is a valuable experience for those who can do it.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "The Task 2 instructions ask you to *give reasons for your answer and include any relevant examples from your own knowledge or experience*. A personal example is fine, but always explain how it supports your point. An example on its own, with no explanation, is not enough.",
    },
    {
      exam: "toefl",
      body: "In the **Academic Discussion** you have about 10 minutes, so choose one strong reason and one specific example rather than many short ideas. A short personal example (*When I was in high school…*) works well on a class discussion board.",
    },
    {
      exam: "toeic",
      body: "The TOEIC **opinion essay** is scored partly on whether your opinion is supported with reasons and/or examples. Use the same pattern in each body paragraph: reason, explanation, example.",
    },
  ],
  vocabulary: [
    { word: "manage", meaning: "to control or organise something, such as money or time", example: "She manages her money carefully and saves a little every month.", topic: "everyday" },
    { word: "skill", meaning: "an ability to do something well, usually because you have practised it", example: "Working in a café teaches useful communication skills.", topic: "work" },
    { word: "budget", meaning: "a plan for how to spend your money", example: "Students need to plan their budget carefully.", topic: "everyday" },
    { word: "debt", meaning: "money that you owe to a person, bank or company", example: "He used his first salary to pay off his debt.", topic: "everyday" },
    { word: "independence", meaning: "being able to look after yourself without help from others", example: "Living alone gave her more independence.", topic: "society" },
    { word: "afford", meaning: "to have enough money to pay for something", example: "Not every family can afford new books every month.", topic: "everyday" },
    { word: "volunteer", meaning: "a person who works without being paid, usually to help others", example: "Volunteers help at the animal shelter every weekend.", topic: "society" },
    { word: "responsible", meaning: "able to be trusted to do the right thing", example: "Looking after a pet teaches children to be responsible.", topic: "society" },
    { word: "confident", meaning: "sure about your own abilities", example: "After the course, he felt more confident about speaking English.", topic: "everyday" },
    { word: "concentrate", meaning: "to give all your attention to something", example: "I can't concentrate when my phone keeps ringing.", topic: "education" },
  ],
  keyPoints: [
    "Support each main idea with a reason, an explanation and an example.",
    "Good examples are specific and believable: your experience, someone you know, or a typical situation. Do not invent statistics.",
    "Use because + subject + verb, because of + noun, and such as + nouns.",
    "Avoid over-generalising: many, often and most are usually more accurate than everyone, always and all.",
    "Finish your paragraph with a sentence that returns to your opinion.",
  ],
};

export default lesson;
