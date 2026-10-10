import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-academic-passage-questions",
  title: "Academic passages: vocabulary and rhetoric",
  summary:
    "Master the five question types in TOEFL Read an Academic Passage: facts, vocabulary in context, inference, the connection between ideas and the writer's purpose. Practise with several short academic texts of about 200 words.",
  skill: "reading",
  level: "C1",
  order: 9,
  minutes: 25,
  exams: [
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
    { exam: "ielts", task: "Reading – Multiple choice" },
  ],
  objectives: [
    "Recognise the five question types used with short academic passages and the reading each one needs",
    "Choose the sense of a word that fits its context, not its most common meaning",
    "Identify the rhetorical function of a sentence: contrast, concession, explanation, qualification or illustration",
    "Answer five questions on a 200-word passage in about four minutes",
  ],
  warmUp: [
    "The word *sound* can mean a noise, but what does it mean in *a sound argument*? How did you know?",
    "When a writer says *Admittedly…*, what are they about to do?",
  ],
  learn: [
    {
      type: "text",
      title: "One passage, five questions",
      body: "In the TOEFL iBT Reading section, **Read an Academic Passage** gives you a short academic text of about 200 words followed by 5 questions. The questions test five different kinds of reading:\n\n1. **Facts**: what the passage states directly.\n2. **Vocabulary**: the meaning of a word or phrase as it is used in the passage.\n3. **Inference**: what the passage suggests but does not state.\n4. **Connection between ideas**: how one sentence or idea relates to another (cause, contrast, example, concession).\n5. **The writer's purpose**: why the writer includes a sentence, an example or a detail.\n\nBecause the passage is short, you can read it all before the questions. At C1 level, the challenge is not finding the information but reading **precisely**: the wrong options are usually close paraphrases with one word that changes the meaning.",
    },
    {
      type: "table",
      title: "How to approach each question type",
      headers: ["Type", "Typical question", "What to do", "Common trap"],
      rows: [
        ["Facts", "According to the passage, what…?", "Find the sentence and match the paraphrase", "An option that combines two facts from different sentences"],
        ["Vocabulary", "The word *X* is closest in meaning to…", "Replace the word with each option and reread the sentence", "The most common meaning of the word, not the meaning in context"],
        ["Inference", "What can be inferred about…?", "Choose what must be true if the passage is true", "A plausible idea that goes beyond the evidence"],
        ["Connection", "How does sentence 4 relate to sentence 3?", "Look at the signal words: *however, therefore, rather, in fact*", "Reversing cause and effect"],
        ["Purpose", "Why does the author mention…?", "Ask what the detail does for the argument, not what it says", "An option that describes the content but not its function"],
      ],
    },
    {
      type: "text",
      title: "Vocabulary questions: the sense in context",
      body: "Many words tested in academic passages are **polysemous**: they have several meanings, and the passage uses a less common one. Compare:\n\n- *a* **sound** *argument* (= logical and reliable), not *a loud sound*\n- *to* **arrest** *the decline* (= stop), not *to arrest a suspect*\n- *a* **conservative** *estimate* (= cautious, deliberately low), not a political view\n- *a* **humble** *partner* (= modest, not impressive), not *a humble person* (= one who does not think they are better than others)\n\nThe safest method is **substitution**: put each option into the sentence and ask whether the sentence still says the same thing. If an option is a correct meaning of the word in general but changes the sentence, it is the trap.",
    },
    {
      type: "text",
      title: "Purpose and connection questions: what is this sentence doing?",
      body: "Academic writers use a small number of rhetorical moves. Purpose and connection questions ask you to name them:\n\n- **illustrate**: give an example or evidence (*for example, in one study*)\n- **contrast**: present a different or opposite result (*however, by contrast, yet*)\n- **concede**: admit a weakness in one's own position (*admittedly, it is true that*)\n- **qualify**: limit a claim so that it is not overstated (*this does not mean that, at least in some cases*)\n- **explain**: give the cause of something already described (*because, this was partly due to*)\n- **reinterpret**: show that something is not what it first appears to be (*far from, rather, in fact*)\n\nThe correct option for a purpose question usually contains a **function verb** (*to illustrate, to challenge, to qualify*), and the subject of that verb is an idea in the passage.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: name the move",
        instructions: "What is the function of the second sentence in each pair?",
        questions: [
          {
            prompt: "Most fossils form in sediment at the bottom of lakes and seas. **Yet some of the best-preserved specimens have been found in desert sandstone.**",
            options: ["It illustrates the first sentence.", "It presents an exception to the first sentence.", "It explains why the first sentence is true."],
            answer: 1,
            explanation: "*Yet* signals a contrast: the sentence gives a case that does not follow the general pattern.",
          },
          {
            prompt: "Some birds are capable of making tools. **A crow kept in a laboratory, for instance, was observed bending a piece of wire into a hook.**",
            options: ["It illustrates the first sentence.", "It concedes a weakness in the first sentence.", "It qualifies the first sentence."],
            answer: 0,
            explanation: "*For instance* introduces a specific example that supports the general claim.",
          },
          {
            prompt: "The model accounts for nearly all of the data. **Admittedly, it cannot explain the unusual readings from the northern sites.**",
            options: ["It explains a cause.", "It reinterprets the data.", "It concedes a limitation."],
            answer: 2,
            explanation: "*Admittedly* introduces a concession: the writer accepts a weakness in the model while still supporting it.",
          },
          {
            prompt: "The new vaccine was adopted very slowly. **This was largely because it had to be stored at extremely low temperatures, which few clinics could manage.**",
            options: ["It explains the first sentence.", "It contrasts with the first sentence.", "It qualifies the first sentence."],
            answer: 0,
            explanation: "*This was largely because…* gives the cause of the slow adoption.",
          },
        ],
      },
    },
    {
      type: "tip",
      exam: "toefl",
      body: "The TOEFL Reading section is adaptive: how well you do in the first part affects whether the second part is easier or harder. Every question counts, so don't rush the short academic passages to save time for later; about four minutes for one passage and its five questions is a reasonable pace.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Model passage: Ants as gardeners",
      paragraphs: [
        "Many plants depend on animals to carry their seeds away from the parent, where seedlings would otherwise compete with it for light and water. Birds and mammals are the best-known dispersers, but in some ecosystems a humbler partner plays a surprisingly large role. Thousands of plant species produce seeds with a small, fatty attachment called an elaiosome. The structure plays no part in germination; its value lies entirely in its appeal to ants. Worker ants carry the seed back to the nest, where the elaiosome is fed to the larvae. The seed itself, hard and inedible, is then discarded, often among the colony's waste. For the plant, this is far from a disposal: the seed has been moved beyond the reach of many seed-eating animals and placed in soil unusually rich in nutrients. The arrangement is not, however, a perfect partnership. Some ants eat the seed as well as its reward, and others drop seeds only a short distance from the parent plant. Researchers therefore describe the relationship less as a contract than as a set of probabilities that, on balance, favour the plant.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader answers the five questions",
      body: "**1. Facts.** *According to the passage, what happens to the elaiosome?* The sentence *the elaiosome is fed to the larvae* gives the answer directly. A trap option would say *it helps the seed to germinate*: the passage says the opposite (*plays no part in germination*).\n\n**2. Vocabulary.** *The word* humbler *is closest in meaning to…* Substitution: *a less impressive partner* fits, because ants are being contrasted with the *best-known* dispersers. *Not proud* is a real meaning of *humble*, but it describes a person's attitude and makes no sense here.\n\n**3. Inference.** *What can be inferred about seeds that fall directly beneath the parent plant?* The first sentence says seedlings near the parent *would otherwise compete with it for light and water*. So these seeds are likely to face competition from the parent. The passage does not say they never germinate: that would go beyond the evidence.\n\n**4. Connection.** *How does the sentence beginning “For the plant, this is far from a disposal” relate to the sentence before it?* The previous sentence makes the seed sound like rubbish (*discarded… among the colony's waste*). *Far from* signals a **reinterpretation**: what looks like waste is actually an advantage.\n\n**5. Purpose.** *Why does the author mention that some ants eat the seed?* Not to describe ant diets, but to **qualify** the claim that the relationship benefits the plant. The final sentence confirms this: the benefit is a matter of probability, *on balance*.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Passage 1: The testing effect",
      timerMinutes: 4,
      paragraphs: [
        "For most students, a test is simply a means of measuring what has already been learned. A substantial body of research in cognitive psychology suggests that this view is incomplete. When learners are required to retrieve information from memory, rather than reread it, they tend to remember it considerably better at a later date, a phenomenon known as the testing effect. In a typical experiment, two groups study the same text. One group then rereads it, while the other attempts to recall its content without looking. On a test given a few minutes later, the rereading group often performs as well as the other group, or even better. After a delay of several days, however, the pattern is reversed, and the group that practised retrieval remembers markedly more. Rereading, it seems, produces a feeling of familiarity that learners mistake for mastery. Retrieval, by contrast, is effortful, and that very effort appears to strengthen the memory. The implication is somewhat counterintuitive: the strategies that feel most productive during study are not necessarily those that produce durable learning.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Passage 1: questions",
        instructions: "Choose the best answer to each question.",
        questions: [
          {
            prompt: "1. According to the passage, how did the rereading group perform on a test given a few minutes after studying?",
            options: [
              "Worse than the group that practised retrieval",
              "At least as well as the group that practised retrieval",
              "Better than the retrieval group in every experiment",
              "Worse than they had expected to perform",
            ],
            answer: 1,
            explanation: "“the rereading group often performs as well as the other group, or even better” = at least as well. C is too strong: the passage says *often*, not *in every experiment*. D is not stated.",
          },
          {
            prompt: "2. The word *durable* in the passage is closest in meaning to…",
            options: ["difficult", "long-lasting", "practical", "measurable"],
            answer: 1,
            explanation: "The passage contrasts what feels productive *during study* with learning that lasts over time, as in the delayed test. *Durable learning* = learning that lasts.",
          },
          {
            prompt: "3. What can be inferred about students who rely mainly on rereading?",
            options: [
              "They study for less time than other students.",
              "They may overestimate how well they know the material.",
              "They perform badly on all kinds of test.",
              "They are unable to recall information without notes.",
            ],
            answer: 1,
            explanation: "Rereading produces “a feeling of familiarity that learners mistake for mastery”, so these students are likely to think they know more than they do. C is too strong: they do well on immediate tests.",
          },
          {
            prompt: "4. How does the sentence “Rereading, it seems, produces a feeling of familiarity that learners mistake for mastery” relate to the experimental results described before it?",
            options: [
              "It offers a possible explanation for them.",
              "It questions whether they are reliable.",
              "It describes a second, separate experiment.",
              "It summarises the procedure that was used.",
            ],
            answer: 0,
            explanation: "The sentence explains why rereading seems effective at first but is not effective later. *It seems* shows that the explanation is tentative, not that the results are doubted.",
          },
          {
            prompt: "5. Why does the author describe a typical experiment?",
            options: [
              "To show how the testing effect has been demonstrated",
              "To argue that most experiments in psychology are too short",
              "To explain how teachers should design their tests",
              "To compare two theories of how memory works",
            ],
            answer: 0,
            explanation: "The experiment illustrates the evidence for the testing effect introduced in the previous sentence. Nothing in the passage criticises experiments or compares theories.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Passage 2: Governing the commons",
      timerMinutes: 4,
      paragraphs: [
        "In 1968 the ecologist Garrett Hardin published an influential essay arguing that resources shared by a community, such as pastures or fisheries, are doomed to overuse. Each user, he reasoned, gains the full benefit of taking a little more, while the cost of depletion is spread across everyone. Unless the resource was either privatised or regulated by the state, ruin was inevitable. Hardin's “tragedy of the commons” became a standard argument in economics and policy. The political scientist Elinor Ostrom challenged its pessimism not with a rival theory but with evidence. Studying cases ranging from alpine meadows in Switzerland to irrigation systems in Nepal, she documented communities that had managed shared resources sustainably, in some cases for centuries. These groups had not escaped the dilemma Hardin described; rather, they had devised their own rules for using the resource, monitored one another and imposed graduated penalties on those who broke the rules. Ostrom did not claim that self-governance always succeeds. Her point was that the choice between private ownership and state control was a false one. In 2009 she became the first woman to receive the Nobel Memorial Prize in Economic Sciences.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Passage 2: questions",
        instructions: "Choose the best answer to each question.",
        questions: [
          {
            prompt: "1. According to the passage, why did Hardin believe shared resources would be overused?",
            options: [
              "Communities rarely agreed on rules for using them.",
              "Each user benefited from taking more, while the costs were shared by all.",
              "Governments did not allow private ownership of them.",
              "The resources were usually too small for the community.",
            ],
            answer: 1,
            explanation: "“Each user… gains the full benefit of taking a little more, while the cost of depletion is spread across everyone.” A describes the opposite of Ostrom's findings rather than Hardin's reasoning.",
          },
          {
            prompt: "2. The word *graduated* in the passage is closest in meaning to…",
            options: ["officially approved", "increasing in stages", "applied to everyone equally", "decided by experts"],
            answer: 1,
            explanation: "*Graduated penalties* become more severe step by step, for example for repeated rule-breaking. *Graduated* in the sense of finishing a university course does not fit here.",
          },
          {
            prompt: "3. What can be inferred about Ostrom's approach to research?",
            options: [
              "She relied on studying real communities rather than on abstract reasoning.",
              "She was mainly interested in agricultural technology.",
              "She worked with Hardin to test his theory.",
              "She believed that governments should never regulate natural resources.",
            ],
            answer: 0,
            explanation: "She challenged Hardin “not with a rival theory but with evidence”, studying actual cases in several countries. D overstates her view: she rejected only the idea that there were just two choices.",
          },
          {
            prompt: "4. How does the sentence beginning “These groups had not escaped the dilemma Hardin described” relate to Hardin's argument?",
            options: [
              "It accepts that the problem exists but rejects his view of how it must be solved.",
              "It shows that the problem Hardin described does not really exist.",
              "It provides further evidence that his conclusion was correct.",
              "It explains why Hardin chose pastures and fisheries as examples.",
            ],
            answer: 0,
            explanation: "*Had not escaped the dilemma* accepts that the problem is real; *rather, they had devised their own rules* shows a solution that is neither privatisation nor state control.",
          },
          {
            prompt: "5. Why does the author mention that Ostrom “did not claim that self-governance always succeeds”?",
            options: [
              "To suggest that her research contained serious errors",
              "To make clear the limits of her argument",
              "To show that she agreed with Hardin in the end",
              "To introduce a criticism made by other economists",
            ],
            answer: 1,
            explanation: "The sentence qualifies her position so that the reader does not overstate it. The next sentence states her actual point: the choice between two options was a false one.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Passage 3: Reading the ice",
      timerMinutes: 4,
      paragraphs: [
        "Polar ice sheets are built up over thousands of years as layer upon layer of snow is compressed into ice. In the process, tiny pockets of air become sealed inside, and these bubbles preserve samples of the atmosphere as it was when they were trapped. By drilling long cylinders of ice, known as cores, and analysing the gas inside them, scientists can reconstruct past concentrations of carbon dioxide and other gases. The ice itself is equally informative. The proportions of different forms, or isotopes, of oxygen and hydrogen in the frozen water vary with the temperature at which the original snow formed, so they serve as an indirect thermometer. Cores drilled in Antarctica have extended this record back roughly 800,000 years, spanning several cycles of ice ages and warmer periods. Interpreting the record is not straightforward, however. Because snow takes many years to seal off from the atmosphere, the trapped air is younger than the ice that surrounds it, and researchers must correct for this difference before comparing the two records. Even so, ice cores remain one of the most direct archives of Earth's climate history.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Passage 3: questions",
        instructions: "Choose the best answer to each question.",
        questions: [
          {
            prompt: "1. According to the passage, what do the isotopes in the ice indicate?",
            options: [
              "The amount of carbon dioxide in the past atmosphere",
              "The temperature at the time the snow formed",
              "The age of the air bubbles",
              "The speed at which the ice sheet grew",
            ],
            answer: 1,
            explanation: "The isotope proportions “vary with the temperature at which the original snow formed”. A is a fact about the trapped air, not the isotopes.",
          },
          {
            prompt: "2. The word *spanning* in the passage is closest in meaning to…",
            options: ["crossing a river", "covering a period", "measuring exactly", "dividing into parts"],
            answer: 1,
            explanation: "A record *spanning several cycles* covers that whole period of time. *Crossing a river* is a real meaning (a bridge spans a river), but not this one.",
          },
          {
            prompt: "3. What can be inferred about a comparison of gas and ice data from the same layer that is NOT corrected?",
            options: [
              "It would compare evidence from slightly different periods.",
              "It would show no link between carbon dioxide and temperature.",
              "It would only be possible for very recent ice.",
              "It would give an exact measure of the ice's age.",
            ],
            answer: 0,
            explanation: "The air is younger than the surrounding ice, so data taken from the same layer without correction would describe two different moments in time. B goes beyond the passage.",
          },
          {
            prompt: "4. How does the sentence “The ice itself is equally informative” connect the two halves of the description?",
            options: [
              "It introduces a second source of evidence in the cores.",
              "It contrasts reliable evidence with unreliable evidence.",
              "It gives an example of how gas is analysed.",
              "It explains why the cores must be drilled.",
            ],
            answer: 0,
            explanation: "The passage moves from the trapped air (gas concentrations) to the frozen water itself (temperature). *Equally* shows that both are valuable, so there is no contrast in reliability.",
          },
          {
            prompt: "5. Why does the author mention that the trapped air is younger than the surrounding ice?",
            options: [
              "To show that ice-core data cannot be trusted",
              "To illustrate a difficulty in interpreting the record",
              "To explain how air bubbles form in snow",
              "To argue that Antarctic cores are older than others",
            ],
            answer: 1,
            explanation: "It follows “Interpreting the record is not straightforward”, so it is an example of the difficulty. A is too strong: the last sentence calls ice cores “one of the most direct archives”.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "match",
        title: "What is each sentence doing?",
        instructions:
          "Match each sentence from Passages 1–3 to its function in the passage. There are two functions you do not need.",
        left: [
          "Ostrom did not claim that self-governance always succeeds. (Passage 2)",
          "After a delay of several days, however, the pattern is reversed… (Passage 1)",
          "Interpreting the record is not straightforward, however. (Passage 3)",
          "Hardin's “tragedy of the commons” became a standard argument in economics and policy. (Passage 2)",
          "Rereading, it seems, produces a feeling of familiarity that learners mistake for mastery. (Passage 1)",
        ],
        right: [
          "It offers a possible explanation for an experimental finding.",
          "It presents a result that contrasts with an earlier one.",
          "It limits a claim so that it is not overstated.",
          "It shows the importance of a view that will then be challenged.",
          "It introduces a problem with using a source of evidence.",
          "It defines a technical term.",
          "It gives the author's personal recommendation.",
        ],
        answer: [2, 1, 4, 3, 0],
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "Read an Academic Passage gives you about 200 words and 5 questions on facts, vocabulary, inference, the connection between ideas and the writer's purpose. Read the whole passage once, quickly but carefully, before the first question: with a text this short, a full reading pays for itself in the inference and purpose questions.",
    },
    {
      exam: "toefl",
      body: "For vocabulary questions, the trap is often a correct dictionary meaning that does not fit the sentence. Always substitute the option into the sentence. For purpose questions, eliminate options that only repeat the content of the sentence; the answer describes what the sentence does (illustrates, qualifies, contrasts).",
    },
    {
      exam: "ielts",
      body: "IELTS multiple-choice questions on academic passages can also ask about the writer's purpose or the function of a paragraph. The same rhetorical signals (*however, admittedly, far from, rather*) help you decide what a sentence is doing in the argument.",
    },
  ],
  vocabulary: [
    { word: "disperser", meaning: "an animal that spreads seeds away from the parent plant", example: "Fruit bats are important seed dispersers in tropical forests.", topic: "science" },
    { word: "on balance", meaning: "after considering all the facts and arguments", example: "On balance, the benefits of the scheme outweigh the costs.", topic: "academic" },
    { word: "retrieve", meaning: "to bring information back from memory or storage", example: "Older adults may take longer to retrieve names.", topic: "education" },
    { word: "counterintuitive", meaning: "different from what you would expect", example: "It is counterintuitive, but adding a road can make traffic worse.", topic: "academic" },
    { word: "durable", meaning: "lasting for a long time", example: "Spaced practice leads to more durable learning.", topic: "education" },
    { word: "depletion", meaning: "the reduction of a resource until little remains", example: "The depletion of fish stocks has hit coastal communities.", topic: "environment" },
    { word: "devise", meaning: "to invent a plan, system or method", example: "The villagers devised a rota for sharing the well.", topic: "society" },
    { word: "graduated", meaning: "increasing or arranged in stages", example: "The fines are graduated according to the size of the company.", topic: "society" },
    { word: "reconstruct", meaning: "to build up a picture of a past event from evidence", example: "Historians reconstructed the voyage from the captain's letters.", topic: "academic" },
    { word: "span", meaning: "to cover a period of time or a distance", example: "Her career spanned four decades.", topic: "academic" },
    { word: "polysemous", meaning: "having more than one meaning", example: "*Run* is one of the most polysemous verbs in English.", topic: "academic" },
    { word: "qualify (a claim)", meaning: "to limit a statement so that it is less general", example: "The author qualifies her conclusion by noting the small sample.", topic: "academic" },
  ],
  keyPoints: [
    "Read an Academic Passage tests five things: facts, vocabulary in context, inference, connection between ideas and purpose.",
    "For vocabulary, substitute each option into the sentence; a correct dictionary meaning in the wrong sense is the usual trap.",
    "An inference must be true if the passage is true; reject options that are merely plausible or too strong.",
    "Purpose and connection questions ask what a sentence does: illustrate, contrast, concede, qualify, explain or reinterpret.",
  ],
};

export default lesson;
