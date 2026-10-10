import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-coherence-paragraphing",
  title: "Coherence and paragraphing for band 7+",
  summary:
    "Make your essays easy to follow from start to finish: build unified paragraphs around predictive topic sentences, keep every reference clear, and control how each sentence picks up from the last.",
  skill: "writing",
  level: "C1",
  order: 8,
  minutes: 35,
  exams: [
    { exam: "ielts", task: "Writing Task 2" },
    { exam: "toeic", task: "Writing – Write an opinion essay" },
  ],
  objectives: [
    "Write paragraphs with one controlling idea and remove sentences that break their unity",
    "Use reference words that point clearly to one antecedent, within and across paragraphs",
    "Control thematic progression so that each sentence starts from information the reader already has",
    "Plan an essay in which the thesis, topic sentences and conclusion form one clear line of argument",
  ],
  warmUp: [
    "Have you ever read a text in which every sentence made sense but you could not follow the whole? What was missing?",
    "How do you decide when to start a new paragraph?",
  ],
  learn: [
    {
      type: "text",
      title: "Coherence and cohesion",
      body: "Earlier in this course you worked on **cohesion**: the visible links between sentences, such as reference words, summary nouns and lexical chains. **Coherence** is the bigger picture: whether a reader can follow the logic of the whole text. An essay can be full of linking words and still be incoherent if its paragraphs wander or its ideas appear in a random order.\n\nThe public IELTS band descriptors for Coherence and Cohesion show the difference. At band 7, information and ideas are *logically organised*, there is *a clear progression throughout the response*, and paragraphing is *generally used effectively*. At band 8, the message *can be followed with ease* and paragraphing is *used sufficiently and appropriately*. At band 9, cohesion *very rarely attracts attention*. In other words, the best-organised essays do not feel full of signposts: the logic itself carries the reader.",
    },
    {
      type: "text",
      title: "Paragraph unity",
      body: "A unified paragraph develops **one controlling idea**, stated or clearly implied in its topic sentence. Every other sentence explains, supports or qualifies that idea.\n\n- **Write a predictive topic sentence.** *There are many effects of tourism* predicts nothing. *Tourism can place a heavy strain on a city's infrastructure* tells the reader exactly what the paragraph will show.\n- **Test every sentence.** Does it develop *this* paragraph's controlling idea? If it introduces a new idea, it belongs in another paragraph, or nowhere.\n- **Start a new paragraph when the controlling idea changes**, not because a paragraph looks long. In Task 2, four or five paragraphs is typical, with one main idea per body paragraph.\n- **Avoid one-sentence paragraphs.** A single sentence cannot develop an idea, and a series of them makes an essay look like a list.",
    },
    {
      type: "text",
      title: "Thematic progression: how sentences pick up from each other",
      body: "The beginning of an English sentence (its **theme**) usually tells the reader what the sentence is about and connects it to what came before; the end of the sentence carries the new information. Coherent writing controls these themes so that the reader always knows where they are. Two patterns do most of the work:\n\n1. **Constant theme**: several sentences start from the same topic. *Electric buses are quieter than diesel ones. They also produce no exhaust fumes in the street. They are, however, more expensive to buy.* This suits describing one thing from several angles.\n2. **Linear theme**: the new information at the end of one sentence becomes the theme of the next. *Many cities now charge drivers to enter the centre. **This charge** is used to fund public transport. **Better public transport**, in turn, gives drivers a realistic alternative.* This suits chains of cause and effect.\n\nProblems arise when a sentence starts from something unexpected, so that the reader cannot see how it connects. A quick test: read only the first four or five words of each sentence in a paragraph. If those openings tell a logical story, the paragraph is probably coherent.",
    },
    {
      type: "table",
      title: "Reference that works, and reference that doesn't",
      headers: ["Problem", "Unclear", "Clear"],
      rows: [
        ["*This* could refer to two ideas", "Governments are taxing sugary drinks and funding sports clubs. This has been very effective.", "Governments are taxing sugary drinks and funding sports clubs. The tax has been particularly effective."],
        ["*They* could refer to two plural nouns", "Parents often blame teachers when they are under pressure.", "When parents are under pressure, they often blame teachers."],
        ["The antecedent is too far away", "(New paragraph) This is why it should be restricted.", "(New paragraph) The influence of online advertising on children is the main reason why such advertising should be restricted."],
        ["*The latter* with more than two items", "Cars, buses and trains all have advantages, but the latter is the safest.", "Cars, buses and trains all have advantages, but trains are the safest."],
        ["A bare *this* opening a paragraph", "This also affects families.", "The shortage of affordable housing also affects families."],
      ],
    },
    {
      type: "example",
      title: "One line of argument: thesis, topic sentences, conclusion",
      items: [
        "Thesis: Although online learning offers flexibility, I believe that schools should remain mainly face-to-face, because **classrooms build social skills** and **allow teachers to respond to difficulties immediately**.",
        "Body 1 topic sentence: The most important function of a physical school is arguably **the social education it provides**.",
        "Body 2 topic sentence: Face-to-face teaching also allows teachers to **notice and respond to difficulties** far more quickly than a screen does.",
        "Conclusion: Online options are therefore a useful supplement, but they cannot replace **the social and academic benefits of the classroom**.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Use your planning time to write the thesis and one topic sentence for each body paragraph. If the topic sentences do not follow from the thesis, fix the plan now; it is much harder to fix an essay that is already half written.",
    },
  ],
  model: [
    {
      type: "text",
      title: "The task",
      body: "*Some people think that cities should spend more money on public parks and green spaces. Others believe the money would be better spent on housing. Discuss both views and give your own opinion.*",
    },
    {
      type: "text",
      title: "A paragraph that is hard to follow (about band 6)",
      body: "Green spaces are important for cities. Moreover, many people live in small flats. Housing is also a problem in many cities, and it is expensive. Parks are good for health because people can exercise there. Furthermore, this is good for children. Trees also reduce air pollution. In addition, they make cities cooler in summer. Therefore, cities should spend money on parks.",
    },
    {
      type: "passage",
      title: "The same ideas, organised (band 8 level)",
      paragraphs: [
        "Those who favour investing in parks argue that green space is not a luxury but a basic condition of healthy city life. For residents of small flats in particular, a nearby park may be the only place where they can exercise, relax or let their children play safely outdoors. Regular access to such spaces encourages physical activity, which in turn reduces the risk of conditions associated with inactivity. Parks also benefit those who never use them: their trees absorb some air pollutants and lower summer temperatures, effects that are likely to matter more as cities grow denser and summers become hotter.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **Unity**: the band 6 version jumps to housing costs in its third sentence. That idea belongs in the paragraph about housing, so the revision removes it.\n- **A predictive topic sentence**: *green space is not a luxury but a basic condition of healthy city life* tells the reader what the paragraph will show, and *Those who favour…* makes clear that this is one of the two views, as the question requires.\n- **Thematic progression**: read the sentence openings: *Those who favour investing in parks* → *For residents of small flats* → *Regular access to such spaces* → *Parks also*. Each one starts from known information. The third sentence opens with *such spaces*, which picks up *a nearby park* from the sentence before.\n- **Clear reference**: *such spaces*, *those who never use them*, *their trees* and *effects that…* each point to one thing. Compare the unclear *this is good for children* in the original.\n- **Fewer signposts**: *Moreover*, *Furthermore*, *In addition* and *Therefore* have gone. The logic (who benefits, how, and who else benefits) now carries the reader, with *in turn* and *also* where they genuinely help.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Paragraph unity",
        questions: [
          {
            prompt: "(1) Urban gardens can make a real contribution to residents' well-being. (2) Tending plants offers a break from screens and a reason to spend time outdoors. (3) Shared plots also bring together neighbours who might otherwise never speak. (4) Many cities are also building new cycle lanes to reduce traffic. (5) For older residents in particular, this regular contact can ease loneliness. Which sentence breaks the unity of the paragraph?",
            options: ["Sentence 2", "Sentence 3", "Sentence 4", "Sentence 5"],
            answer: 2,
            explanation: "The controlling idea is how urban gardens improve well-being. Cycle lanes are a different topic, even though *also* makes the sentence look connected.",
          },
          {
            prompt: "(1) The main drawback of fast fashion is its environmental cost. (2) Producing cheap clothing in vast quantities consumes large amounts of water and energy. (3) Many garments are worn only a few times before being thrown away. (4) Fast fashion also allows young people to express their identity at low cost. (5) The industry's rapid production cycle therefore generates waste on an enormous scale. Which sentence breaks the unity of the paragraph?",
            options: ["Sentence 3", "Sentence 4", "Sentence 5", "None: the paragraph is unified"],
            answer: 1,
            explanation: "The paragraph is about environmental cost. Sentence 4 describes a benefit, which belongs in a different paragraph.",
          },
          {
            prompt: "Which topic sentence best predicts a paragraph about how the move to online banking can exclude older people?",
            options: [
              "There are many things to say about online banking.",
              "Online banking has advantages and disadvantages.",
              "The shift to online banking risks leaving behind older customers who lack digital skills or confidence.",
              "Banks are an important part of the economy.",
            ],
            answer: 2,
            explanation: "It names the topic (the shift to online banking), the group (older customers) and the point the paragraph will make (they risk being left behind).",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Match topic sentences to paragraphs",
        instructions: "A city plans to close its main shopping street to cars. Match each paragraph body to the topic sentence that should introduce it. Two topic sentences are not used.",
        left: [
          "…Without cars, shoppers can walk and linger freely, and cafés can put tables outside. In many towns that have made this change, the high street has become a place people visit for pleasure rather than simply pass through.",
          "…Delivery vans would need access at fixed times, and disabled visitors who rely on cars would need parking nearby. Without such arrangements, some shops could lose customers.",
          "…Removing traffic would lower noise and exhaust fumes in the busiest part of the city, which benefits both pedestrians and the people who live above the shops.",
        ],
        right: [
          "Car ownership has risen steadily in most countries.",
          "A further benefit is a cleaner and quieter environment.",
          "Pedestrianisation can make a shopping street far more attractive to visitors.",
          "However, the change would require careful planning to avoid excluding some groups.",
          "Many people now prefer to shop online.",
        ],
        answer: [2, 3, 1],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Clear reference and progression",
        questions: [
          {
            prompt: "“Many students work part-time while studying, and some universities now limit paid work during term. This has caused controversy.” What is the problem, and what is the best fix?",
            options: [
              "There is no problem: *This* clearly refers to part-time work.",
              "*This* could refer to either idea; replace it with *This restriction*.",
              "*This* should be *These*, because there are two ideas.",
              "*This* should be *It*.",
            ],
            answer: 1,
            explanation: "A summary noun (*This restriction*) shows exactly which idea caused controversy. *It* and *These* are just as unclear.",
          },
          {
            prompt: "Which sentence uses *the latter* correctly?",
            options: [
              "Cities can invest in roads, rail or cycling, but the latter is the cheapest.",
              "Governments can either tax pollution or subsidise clean energy; the latter tends to be more popular with voters.",
              "The latter, which is the main problem, is pollution.",
              "Tourism brings money to a region. The latter is important.",
            ],
            answer: 1,
            explanation: "*The latter* means the second of exactly two items mentioned just before. The first option lists three items, and the last two have no pair of items to refer to.",
          },
          {
            prompt: "A body paragraph begins: “This is also a problem for small businesses.” Why is this a weak opening?",
            options: [
              "It is too formal for an essay.",
              "*This* points back to the previous paragraph, so the reader cannot tell what the new paragraph is about.",
              "Paragraphs must never begin with a pronoun or determiner.",
              "Small businesses are not a suitable topic for an essay.",
            ],
            answer: 1,
            explanation: "A new paragraph should name its topic. *Rising business rates are also a problem for small businesses* tells the reader where they are. A determiner with a clear noun (*This shortage…*) can be fine.",
          },
          {
            prompt: "Which sequence shows linear thematic progression (the end of one sentence becomes the start of the next)?",
            options: [
              "Electric cars are quiet. They are also cheap to run. However, they are expensive to buy.",
              "Exercise is healthy. Rents are rising. Trains are often late.",
              "Rising rents have pushed many workers to the edge of the city. Living further out means longer commutes. These longer commutes, in turn, leave less time for exercise.",
              "Firstly, commuting is long. Moreover, commuters are tired. Therefore, they exercise less.",
            ],
            answer: 2,
            explanation: "*the edge of the city* → *Living further out*; *longer commutes* → *These longer commutes*. The first option is a constant theme, the second has no progression, and the last relies on linking words instead of connected ideas.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "order",
        mode: "lines",
        title: "Essay map: order the key sentences",
        instructions: "These are the two opening sentences of an essay, followed by the first sentence of each later paragraph. Put them in order so that the essay forms one line of argument.",
        items: [
          "In many countries, a growing number of employers now allow staff to choose their own working hours.",
          "In my view, flexible hours benefit both employees and employers, provided that teams agree on some shared core time.",
          "For employees, the clearest advantage is the freedom to fit work around family and health needs.",
          "Employers also stand to gain, since staff who control their own schedules are often more motivated and less likely to leave.",
          "The main risk, that colleagues are never available at the same time, can be managed with a few fixed hours each day.",
          "Flexible hours, then, are worth adopting, as long as they are combined with a small amount of shared time.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Your turn: introduction and two body paragraphs",
        instructions: "Plan for 4 minutes: write your thesis, then one topic sentence per body paragraph that follows from it. Write for about 14 minutes and use the last 2 minutes for the sentence-opening test.",
        prompt:
          "Essay question: *In many countries, more and more people are choosing to work for themselves rather than for an employer. Do the advantages of this trend outweigh the disadvantages?*\n\nWrite the introduction and TWO body paragraphs of an answer (at least 200 words; no conclusion is needed). Make every reference word clear, and check that the first few words of each sentence show a logical progression.",
        minWords: 200,
        minutes: 20,
        rubric: [
          "Task response: My thesis answers the question directly: do the advantages outweigh the disadvantages?",
          "Coherence and cohesion: Each body paragraph has a topic sentence that follows from my thesis and predicts what the paragraph will show.",
          "Coherence and cohesion: Every sentence in each paragraph develops its controlling idea; I removed any that did not.",
          "Coherence and cohesion: Each reference word (this, these, they, such) points clearly to one thing.",
          "Coherence and cohesion: My sentence openings show a logical progression, and I did not start every sentence with a linking word.",
          "Lexical resource: I used precise topic vocabulary (self-employment, autonomy, income, security) without repeating the same words.",
          "Grammatical range and accuracy: My sentences are varied and mostly error-free.",
          "I wrote at least 200 words in about 20 minutes.",
        ],
        modelAnswer:
          "Across many economies, self-employment has become an increasingly common alternative to a conventional job, from freelance designers to independent delivery drivers. While working for oneself brings genuine freedom, I believe its disadvantages outweigh its advantages for most people, mainly because it shifts financial risk from companies to individuals.\n\nThe main appeal of self-employment is autonomy. Freelancers can usually choose their clients, set their own hours and decide how their work is done, which allows them to combine paid work with caring responsibilities or further study. This flexibility can be particularly valuable for parents of young children, who may otherwise struggle to find an employer willing to accommodate their schedules. For highly skilled professionals, independence can also be financially rewarding, since they are free to charge what the market will pay.\n\nHowever, this freedom comes at a considerable price. Unlike employees, self-employed workers in many countries receive no paid holiday or sick pay from an employer, and they must arrange their own pension savings. Their income can also fluctuate sharply from month to month, which makes it harder to obtain a mortgage or plan for the future. These risks fall hardest on those with the least bargaining power, such as couriers paid per delivery, for whom self-employment may be less a choice than a necessity. For the majority, therefore, the security of a regular salary is worth more than the independence they would gain.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Make your paragraphs visible. In the paper test, leave a blank line or indent clearly; in the computer test, leave a blank line between paragraphs. An examiner cannot reward organisation that is hard to see.",
    },
    {
      exam: "ielts",
      body: "Over-signposting can lower your Coherence and Cohesion score: the descriptors mention cohesive devices that are overused or mechanical. If most of your sentences start with *Firstly*, *Moreover*, *In addition* or *Furthermore*, cut half of them and let the sentence openings do the linking.",
    },
    {
      exam: "toeic",
      body: "Organisation is one of the things TOEIC raters assess in the opinion essay. A thesis that names your reasons, and one paragraph per reason with a clear topic sentence, makes a 300-word essay easy to follow.",
    },
  ],
  vocabulary: [
    { word: "coherence", meaning: "the quality of being logical and easy to follow as a whole", example: "Good paragraphing improves the coherence of an essay.", topic: "academic" },
    { word: "controlling idea", meaning: "the main point that a whole paragraph develops", example: "Every sentence should support the paragraph's controlling idea.", topic: "academic" },
    { word: "topic sentence", meaning: "the sentence, usually the first, that states the main point of a paragraph", example: "A predictive topic sentence tells the reader what to expect.", topic: "academic" },
    { word: "antecedent", meaning: "the word or phrase that a pronoun or reference word refers back to", example: "If “this” has two possible antecedents, the reader may be confused.", topic: "academic" },
    { word: "signpost", meaning: "a word or phrase that shows the reader how a text is organised", example: "Too many signposts can make an essay sound mechanical.", topic: "academic" },
    { word: "progression", meaning: "movement forward in a logical sequence", example: "The essay shows a clear progression from problem to solution.", topic: "academic" },
    { word: "autonomy", meaning: "the freedom to make your own decisions", example: "Many freelancers value autonomy more than a high salary.", topic: "work" },
    { word: "self-employment", meaning: "working for yourself rather than for an employer", example: "Self-employment has grown in the creative industries.", topic: "work" },
    { word: "accommodate", meaning: "to adapt to or provide for someone's needs", example: "Few employers can accommodate such irregular hours.", topic: "work" },
    { word: "fluctuate", meaning: "to change frequently in amount or level", example: "A freelancer's income can fluctuate from month to month.", topic: "business" },
    { word: "bargaining power", meaning: "the ability to influence the terms of an agreement", example: "Couriers have little bargaining power over their rates.", topic: "business" },
  ],
  keyPoints: [
    "Coherence is the logic of the whole text; cohesion is the set of links between sentences.",
    "Each paragraph develops one controlling idea, introduced by a predictive topic sentence.",
    "Make every reference point to one clear antecedent, especially at the start of a paragraph.",
    "Control sentence openings: a constant theme for one topic, a linear theme for chains of cause and effect.",
    "Plan the thesis and topic sentences together so that the essay reads as one line of argument.",
  ],
};

export default lesson;
