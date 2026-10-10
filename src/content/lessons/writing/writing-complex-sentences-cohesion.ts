import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "writing-complex-sentences-cohesion",
  title: "Complex sentences and advanced cohesion",
  summary:
    "Combine ideas into accurate complex sentences and connect them with reference, summary nouns and lexical chains instead of a list of linking words: the range and control examiners reward at band 7 and above.",
  skill: "writing",
  level: "C1",
  order: 1,
  minutes: 30,
  exams: [
    { exam: "ielts", task: "Writing Task 2" },
    { exam: "toefl", task: "Writing – Academic Discussion" },
    { exam: "toeic", task: "Writing – Write an opinion essay" },
  ],
  objectives: [
    "Use concessive, relative and participle clauses to express precise relationships between ideas",
    "Use nominalisation and “this + summary noun” to link sentences smoothly",
    "Build cohesion through reference and lexical chains rather than overused linking words",
    "Rewrite a choppy paragraph as fluent, cohesive academic prose",
  ],
  warmUp: [
    "Compare “Prices rose. People bought less.” with “As prices rose, people bought less.” Which sounds more mature, and why?",
    "Which linking words do you use most in essays? Do you think you overuse any of them?",
  ],
  learn: [
    {
      type: "text",
      title: "Range with control",
      body: "In the public IELTS band descriptors, a band 7 script uses *a variety of complex structures* with some flexibility, and *error-free sentences are frequent*. At band 8 the range is *wide* and *the majority of sentences are error-free*. Two points follow from this.\n\n- **Complex is not the same as long.** A complex sentence has a main clause and at least one subordinate clause that shows how the ideas are related: contrast, cause, condition, time or comment. A fifty-word sentence held together by *and… and… and* is long, not complex.\n- **Range only counts if it is controlled.** One accurate concessive clause does more for your score than three tangled sentences that the reader has to decode.",
    },
    {
      type: "table",
      title: "Six structures worth mastering",
      headers: ["Structure", "What it does", "Example"],
      rows: [
        ["Concessive clause (although, while, even though; despite + noun or -ing)", "Admits a counter-point before your main claim", "Although remote work saves commuting time, it can blur the line between work and home."],
        ["Non-defining relative clause (, which / , who / , whose)", "Adds information or comments on a whole idea", "Many firms have reduced their office space, which has lowered their costs."],
        ["Participle clause (-ing / -ed / having + past participle)", "Shows cause, time or result concisely", "Faced with rising rents, many young adults stay with their parents."],
        ["Precise conditionals (unless, provided that, as long as)", "Sets an exact condition", "Unless governments invest in rail, car use will keep rising."],
        ["Nominalisation (verb or adjective → noun phrase)", "Turns an event into a noun that can be the subject of the next sentence", "Prices rose sharply. → The sharp rise in prices reduced demand."],
        ["Cleft sentence (What … is … / It is … that …)", "Puts emphasis on the key idea", "What most concerns economists is the speed of the change."],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "order",
        mode: "words",
        title: "Quick check: build a complex sentence",
        instructions: "Put the chunks in order to make one accurate sentence with a participle clause and a comment on the whole idea.",
        items: [
          "Faced with",
          "rising living costs,",
          "many graduates",
          "are choosing",
          "to remain in",
          "their parents' homes,",
          "a trend that",
          "has raised",
          "the average age",
          "of first-time buyers.",
        ],
      },
    },
    {
      type: "text",
      title: "Cohesion beyond linking words",
      body: "At C1 level, examiners notice when every sentence begins with *Moreover*, *Furthermore* or *In addition*. The band descriptors for coherence and cohesion reward cohesive devices that are used *flexibly* and penalise those that are *mechanical* or *overused*. These tools connect ideas more naturally:\n\n- **Reference**: *this, these, such, the former, the latter* and pronouns point back to something already said.\n- **This/these + summary noun**: “…many graduates cannot find work in their field. **This mismatch** …” Useful summary nouns: trend, approach, problem, shift, measure, policy, view, tendency, development.\n- **Lexical chains**: keep the topic alive with synonyms and word families: *pollution → emissions → dirty air → contamination*.\n- **Substitution**: “Some cities have introduced congestion charges; others have yet to **do so**.”\n- **Given → new order**: begin a sentence with information the reader already knows and end with the new information. The next sentence can then start from that new point.",
    },
    {
      type: "example",
      title: "Same ideas, better links",
      items: [
        "Choppy: Many young people move to cities. They want better jobs. Rural areas lose workers. Rural areas become poorer.",
        "Cohesive: **Drawn by** better job prospects, many young people move to cities. **This migration** leaves rural areas short of workers, **which** in turn makes **them** poorer.",
        "Choppy: Governments taxed sugary drinks. Moreover, sales fell. Moreover, people bought more water.",
        "Cohesive: **Following the introduction of** a tax on sugary drinks, sales fell, **with** many consumers switching to water **instead**.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Do not force a complex structure into every sentence. A short, simple sentence after two long ones can be very effective for emphasis: *The policy failed.* Variety is the goal, not maximum complexity.",
    },
  ],
  model: [
    {
      type: "text",
      title: "Original paragraph (about band 6)",
      body: "Many governments want people to use public transport. They build new train lines. They lower ticket prices. Moreover, many people still drive. Moreover, cars are more convenient. Cars take people from door to door. Public transport often does not do this. Governments should think about this problem. They should improve connections between stations and homes. For example, they can provide bike-sharing near stations. This would help more people use trains.",
    },
    {
      type: "passage",
      title: "Revised paragraph (band 8 level)",
      paragraphs: [
        "In an effort to encourage the use of public transport, many governments have built new rail lines and cut ticket prices. Despite these measures, a large proportion of commuters continue to drive, largely because cars offer a door-to-door convenience that trains and buses rarely match. What is often overlooked, therefore, is the final stage of the journey: the distance between a station and a person's home or workplace. Unless this gap is closed, investment in the main network is likely to have only a limited effect. One relatively inexpensive solution would be to provide bike-sharing schemes at major stations, which would allow passengers to complete their journeys quickly and cheaply.",
      ],
    },
    {
      type: "text",
      title: "How a strong writer does it",
      body: "- **In an effort to…** opens with a purpose phrase instead of a separate sentence.\n- **these measures** is a summary noun that refers back to two actions (building lines, cutting prices).\n- **Despite these measures** replaces the illogical *Moreover*: the idea is a contrast, not an addition.\n- **largely because** adds a precise cause in the same sentence.\n- **What is often overlooked… is** is a cleft sentence that highlights the key point.\n- **this gap** is another summary noun, and **Unless** sets a precise condition.\n- **which would allow** comments on the solution without starting a new sentence.\n- **Lexical chain**: public transport → rail lines → trains and buses → the main network. The writer never repeats *public transport* three times.\n\nNotice that there are only five sentences, but every relationship between the ideas is now clear.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Summary nouns",
        instructions: "Complete each sentence with a summary noun from the box. Use each word once.",
        text: "1. Over the past decade, more and more consumers have started buying second-hand clothes. This {{0}} is expected to continue.\n2. Some schools have banned mobile phones during lessons. Supporters claim that this {{1}} has improved concentration.\n3. Many coastal towns now flood every winter. This {{2}} is likely to become more serious as sea levels rise.\n4. Some economists argue that wealthy nations should cancel the debts of poorer countries. Critics reject this {{3}}, saying it rewards poor financial management.\n5. In the 1990s, most people read the news in print; today, most read it on their phones. This {{4}} from paper to screen has transformed journalism.",
        answers: [["trend"], ["measure", "policy", "ban", "rule"], ["problem", "issue"], ["view", "argument", "proposal", "idea"], ["shift"]],
        wordBank: ["trend", "measure", "problem", "view", "shift"],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Choose the best combined sentence",
        questions: [
          {
            prompt: "Combine: “The museum was renovated in 2019. It now attracts twice as many visitors.”",
            options: [
              "The museum was renovated in 2019, it now attracts twice as many visitors.",
              "Having been renovated in 2019, the museum now attracts twice as many visitors.",
              "Renovating in 2019, the museum now attracts twice as many visitors.",
              "The museum, which renovated in 2019, now attracts twice as many visitors.",
            ],
            answer: 1,
            explanation: "The museum was renovated (passive), so the participle clause must be passive: *Having been renovated*. The first option is a comma splice, and the last two use active forms, which suggest that the museum did the renovating.",
          },
          {
            prompt: "Combine, showing contrast: “Electric cars produce no exhaust emissions. Their batteries require a lot of energy to manufacture.”",
            options: [
              "Despite electric cars produce no exhaust emissions, their batteries require a lot of energy to manufacture.",
              "Electric cars produce no exhaust emissions, therefore their batteries require a lot of energy to manufacture.",
              "Because electric cars produce no exhaust emissions, their batteries require a lot of energy to manufacture.",
              "Although electric cars produce no exhaust emissions, their batteries require a lot of energy to manufacture.",
            ],
            answer: 3,
            explanation: "*Although* + clause shows contrast. *Despite* must be followed by a noun or -ing form, and *therefore* and *because* show cause, which is illogical here.",
          },
          {
            prompt: "Which sentence uses *which* correctly to comment on the whole previous idea?",
            options: [
              "Many students work part-time which they can affect their grades.",
              "Many students work part-time, that can affect their grades.",
              "Many students work part-time, which can affect their grades.",
              "Many students work part-time, which it can affect their grades.",
            ],
            answer: 2,
            explanation: "A comment clause needs a comma and *which* (never *that*), and *which* is already the subject, so no extra pronoun is needed.",
          },
          {
            prompt: "Which is the best nominalised version of “Because the population aged rapidly, healthcare costs rose”?",
            options: [
              "The population rapid aged, causing healthcare costs rising.",
              "Due to the population aged rapidly, healthcare costs rose.",
              "Healthcare costs rose because of the population, which aged rapidly happened.",
              "The rapid ageing of the population led to a rise in healthcare costs.",
            ],
            answer: 3,
            explanation: "*aged rapidly* becomes the noun phrase *the rapid ageing*, and *rose* becomes *a rise in*.",
          },
          {
            prompt: "Which cleft sentence correctly emphasises the cause?",
            options: [
              "It is the lack of affordable housing that drives young people out of the city.",
              "It is the lack of affordable housing what drives young people out of the city.",
              "What drives young people out of the city it is the lack of affordable housing.",
              "The lack of affordable housing, it drives young people out of the city.",
            ],
            answer: 0,
            explanation: "The pattern is *It is + focus + that/who + rest of the sentence*.",
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
        title: "Follow the cohesion clues",
        instructions: "Put the sentences in order. Use the reference words and summary nouns (this decline, such technology, these larger operations) as clues.",
        items: [
          "Over the last fifty years, the share of people working in agriculture has fallen steadily in most countries.",
          "This decline is partly explained by mechanisation, as a single machine can now do the work of dozens of labourers.",
          "Such technology, however, is expensive, and it is mainly large farms that can afford it.",
          "Smaller producers, unable to compete on price, have often been forced to sell their land to these larger operations.",
          "The result is a farming sector that employs fewer people and is increasingly dominated by a handful of companies.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "write",
        title: "Rewrite a choppy paragraph",
        instructions: "Keep all the ideas, but rewrite the paragraph as fluent academic prose. Aim for 6–8 sentences.",
        prompt:
          "Rewrite the paragraph below in at least 120 words. Use at least one concessive clause, one relative or participle clause and one “this/these/such + summary noun”. Do not start any sentence with Moreover or Furthermore.\n\nMany people now shop online. Online shopping is convenient. People can compare prices easily. Moreover, local shops are closing. Moreover, town centres are becoming empty. Some towns are trying to solve this. They are turning empty shops into cafés and community spaces. They are also holding markets and events. These ideas bring people back to the town centre. However, they cost money. Local councils have small budgets. So governments should give councils more money for this.",
        minWords: 120,
        minutes: 15,
        rubric: [
          "Task response: My paragraph keeps all the original ideas and does not change their meaning.",
          "Coherence and cohesion: I linked sentences with reference words and summary nouns (this trend, such initiatives) rather than a list of linking words.",
          "Coherence and cohesion: The ideas progress logically, from the cause to the problem, then the response and the recommendation.",
          "Lexical resource: I avoided repeating the same nouns (shops, town centres, money) by using synonyms and word families.",
          "Grammatical range and accuracy: I used at least one concessive clause, one relative or participle clause and one other complex structure.",
          "Grammatical range and accuracy: My long sentences are punctuated correctly, with no comma splices or fragments.",
        ],
        modelAnswer:
          "As online shopping has become more convenient, with consumers able to compare prices in seconds, many local shops have been forced to close. This trend has left a growing number of town centres almost deserted. In response, some communities have begun converting vacant shops into cafés and community spaces, while others hold regular markets and events designed to draw people back into the centre. Although such initiatives have proved effective, they are far from cheap, and most local councils, whose budgets are already stretched, cannot fund them for long. What is needed, therefore, is greater financial support from national governments. Without this investment, efforts to revive town centres are unlikely to succeed, and the high street may continue its slow decline.",
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Grammatical range and accuracy is one quarter of your Writing score. To reach band 7 you need a variety of complex structures *and* frequent error-free sentences. Check every long sentence for a main verb, correct commas and matching subjects and verbs.",
    },
    {
      exam: "toefl",
      body: "In Academic Discussion, a concessive sentence such as “While Hannah is right that…, I think…” lets you refer to a classmate and give your own view in one sentence, which saves time and shows grammatical range.",
    },
    {
      exam: "toeic",
      body: "TOEIC Writing raters look at organisation and at variety of sentence structure. In the opinion essay, mix a few complex sentences with clear simple ones so that your 300 words are easy to follow.",
    },
  ],
  vocabulary: [
    { word: "cohesion", meaning: "the way sentences and ideas in a text are connected to each other", example: "Summary nouns improve cohesion between sentences.", topic: "academic" },
    { word: "concessive", meaning: "admitting that something is true before making a contrasting point", example: "“Although” introduces a concessive clause.", topic: "academic" },
    { word: "nominalisation", meaning: "turning a verb or adjective into a noun phrase", example: "Nominalisation makes academic writing more concise.", topic: "academic" },
    { word: "mechanisation", meaning: "the use of machines to do work that people or animals used to do", example: "Mechanisation reduced the number of farm workers.", topic: "work" },
    { word: "migration", meaning: "the movement of people from one place to another to live or work", example: "Migration from the countryside has changed the size of many cities.", topic: "society" },
    { word: "initiative", meaning: "a new plan or action to solve a problem or achieve something", example: "The council launched an initiative to support local shops.", topic: "society" },
    { word: "vacant", meaning: "empty; not being used", example: "Vacant shops were turned into art studios.", topic: "business" },
    { word: "revive", meaning: "to bring something back to life or make it active again", example: "Weekly markets helped to revive the town centre.", topic: "business" },
    { word: "stretched", meaning: "(of money or resources) only just enough, with nothing extra", example: "Hospital budgets are already stretched.", topic: "business" },
    { word: "a handful of", meaning: "a small number of", example: "The market is dominated by a handful of companies.", topic: "business" },
  ],
  keyPoints: [
    "Complex sentences show precise relationships between ideas: contrast, cause, condition and comment.",
    "Concessive, relative and participle clauses, nominalisation and cleft sentences add range, but only where they make the meaning clearer.",
    "Link sentences with this/these + summary noun, reference words and lexical chains, not a string of Moreover and Furthermore.",
    "Put known information at the start of a sentence and new information at the end.",
    "Range only counts when it is accurate: check punctuation and verb forms in every long sentence.",
  ],
};

export default lesson;
