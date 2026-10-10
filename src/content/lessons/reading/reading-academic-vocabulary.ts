import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-academic-vocabulary",
  title: "Academic vocabulary in reading",
  summary:
    "Read academic texts in meaningful chunks by recognising collocations and stance vocabulary: how strongly a claim is made, and whether the writer accepts it. Practised with an IELTS-style passage on citizen science and a summary completion task.",
  skill: "reading",
  level: "C1",
  order: 10,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Reading – Summary completion" },
    { exam: "ielts", task: "Reading – Multiple choice" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
  ],
  objectives: [
    "Recognise common academic collocations and read them as single units of meaning",
    "Judge the strength of a claim from reporting verbs, hedges and boosters",
    "Use collocation knowledge to complete summaries accurately and quickly",
    "Match academic phrases in a passage to their plain-English paraphrases",
  ],
  warmUp: [
    "Which sounds more natural to you: *make research*, *do research* or *conduct research*? Which is the most formal?",
    "What is the difference between *The study shows that…* and *The study suggests that…*?",
  ],
  learn: [
    {
      type: "text",
      title: "Why collocations matter when you read",
      body: "A **collocation** is a pair or group of words that are regularly used together: *draw a conclusion*, *compelling evidence*, *widely accepted*. Fluent readers do not process these word by word. They recognise each one as a single chunk, which has three advantages in an exam:\n\n- **Speed.** Reading *pose a serious threat to* as one unit is faster than decoding four separate words.\n- **Prediction.** In summary and sentence completion, the word before a gap often limits the answer. After *a sheer ______ of data*, the answer must be a noun such as *volume*.\n- **Paraphrase.** Questions rarely repeat the passage. If you know that *prohibitively expensive* means *too costly to be possible*, you will recognise the paraphrase in an option.",
    },
    {
      type: "table",
      title: "Common academic collocation patterns",
      headers: ["Pattern", "Examples", "Reading tip"],
      rows: [
        ["verb + noun", "conduct research, draw a conclusion, pose a threat, exert influence, raise awareness, bridge a gap", "The verb often carries little meaning; the noun tells you the action."],
        ["adjective + noun", "compelling evidence, marked increase, sweeping changes, sustained criticism, nuanced understanding", "The adjective often shows the writer's evaluation (*compelling* = convincing)."],
        ["adverb + adjective/verb", "widely regarded, inextricably linked, highly contested, prohibitively expensive, argue convincingly", "Adverbs of degree show how strongly something is true."],
        ["noun/adjective + preposition", "inherent in, confined to, comparable to/in, at odds with, in response to", "The preposition tells you how the next idea connects."],
      ],
    },
    {
      type: "text",
      title: "Stance vocabulary: how strongly is it said, and who says it?",
      body: "Academic writers constantly signal how certain they are and whether they accept other people's claims. These signals are tested in IELTS Yes/No/Not Given and multiple choice, and in TOEFL vocabulary and inference questions.\n\n- **Tentative** (possible, not proven): *suggest, indicate, may, appear to, tend to, arguably*\n- **Positional** (a view that others may dispute): *argue, contend, claim, maintain, assert*\n- **Factive** (the writer accepts it as true): *show, demonstrate, establish, confirm, reveal*\n- **Distancing** (the writer doubts it): *so-called, purported, alleged, supposedly*\n- **Boosting** (the writer strongly agrees): *clearly, convincingly, undoubtedly, it is evident that*\n\nCompare: *Critics* **contend** *that the data are biased* (a position, not necessarily true) and *The study* **demonstrated** *that the data were biased* (the writer treats it as fact).",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "match",
        title: "Quick check: verb + noun collocations",
        instructions: "Match each verb to the noun it most naturally collocates with in academic writing.",
        left: ["conduct", "draw", "pose", "exert", "raise", "bridge"],
        right: ["awareness", "a threat", "a gap", "research", "influence", "a conclusion"],
        answer: [3, 5, 1, 4, 0, 2],
      },
    },
  ],
  model: [
    {
      type: "passage",
      title: "Model extract: microplastics in the food chain",
      paragraphs: [
        "Concern about microplastics has grown markedly over the past decade. Researchers have conducted extensive surveys of rivers, oceans and soils, and tiny plastic particles have been detected in almost every environment examined, including the bodies of many marine animals. It is widely assumed that these particles pose a threat to human health, but the evidence remains inconclusive. Some laboratory studies suggest that high concentrations can damage cells, yet critics contend that the doses used bear little relation to real-world exposure. What is clear is that reliable methods of measurement are urgently needed before firm conclusions can be drawn.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader reads it in chunks",
      body: "A strong reader groups the extract into collocations and stance signals:\n\n- *grown* **markedly** → a large, noticeable increase (*markedly* = clearly, significantly)\n- **conducted extensive surveys** → did a lot of research; *conducted* adds no extra meaning\n- **It is widely assumed that** → many people believe it, but *assumed* is weaker than *shown*\n- **pose a threat to** → may be dangerous for\n- **the evidence remains inconclusive** → not yet proven either way\n- *Some studies* **suggest** → tentative\n- *critics* **contend** → a position that others may dispute\n- **bear little relation to** → are very different from\n- **What is clear is that** → the only point the writer treats as certain\n- **before firm conclusions can be drawn** → *draw a conclusion*, used in the passive\n\nIf a question asked *What is the writer's view of the health risk?*, the stance signals give the answer: it is **not yet proven**. An option saying *Microplastics have been shown to damage human health* would be wrong, because *suggest* and *inconclusive* are much weaker than *shown*.",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Science by the crowd",
      labelled: true,
      timerMinutes: 10,
      paragraphs: [
        "For most of the twentieth century, scientific research was widely regarded as the preserve of professionals: trained specialists working in universities, government laboratories and industry. Yet the boundary between expert and amateur has always been more porous than this picture suggests. Some long-running ecological records were compiled by unpaid naturalists who noted the dates on which birds arrived or flowers bloomed, and amateur astronomers have long made significant contributions to the discovery of comets. What has changed in recent decades is the scale of such participation. Digital technology has made it possible to recruit hundreds of thousands of volunteers to a single project, a practice now commonly referred to as citizen science.",
        "The most obvious advantage of this approach is the sheer volume of data it can generate. Many research questions in ecology and astronomy require observations across vast areas or the examination of enormous numbers of images, tasks that would be prohibitively expensive for a small professional team. One well-known online project, launched in 2007, invited members of the public to classify the shapes of galaxies in telescope images; within its first year, volunteers had submitted tens of millions of classifications.",
        "Volunteers do not merely supply labour, however; on occasion, they make discoveries in their own right. Because they approach the data without some of the assumptions that guide professional researchers, they are sometimes quick to notice anomalies that experts or automated systems might overlook. In one widely reported case, a volunteer on that same galaxy project drew attention to an unusual glowing object that was subsequently investigated by professional astronomers. Such episodes have done much to dispel the notion that public participation is merely a way of cutting costs.",
        "Nonetheless, citizen science has attracted sustained criticism, much of it concerning the quality of the data. Untrained observers may misidentify species, record observations inconsistently or concentrate their efforts in accessible places such as parks and roadsides while neglecting remote areas. Critics contend that such biases can distort the conclusions drawn from the data. Project designers have responded with a range of safeguards: asking several volunteers to classify the same item, checking amateur records against expert benchmarks and using statistical methods to correct for uneven sampling. Studies comparing the two have found that, with appropriate checks, volunteer data can be comparable in accuracy to professional data for many tasks, although performance varies considerably with the difficulty of the task.",
        "A further set of concerns is ethical rather than methodological. Some commentators question whether it is fair for institutions to rely on unpaid work, particularly when the resulting publications enhance the careers of professional scientists. Others point out that volunteers are often disproportionately drawn from wealthier and more highly educated groups, which may undermine the claim that citizen science democratises research. In response, a number of projects now credit volunteers in publications, share findings in accessible formats and actively seek participants from under-represented communities.",
        "It would be premature to conclude that citizen science will transform the conduct of research as a whole. Many questions require specialised equipment, prolonged training or controlled experimental conditions that volunteers cannot provide. Yet its proponents argue convincingly that its value is not confined to the data it produces. By involving the public directly in the process of inquiry, such projects may foster a more nuanced understanding of how scientific knowledge is generated, including the uncertainty and revision that are inherent in it. At a time when public trust in expertise is frequently called into question, that may prove to be its most enduring contribution.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "gap",
        title: "Questions 1–10: Summary completion",
        instructions:
          "Complete the summary using the list of words in the box. There are more words than gaps. Use each word once only.",
        text: "Although research was long {{0}} regarded as a job for professionals, amateurs have made significant {{1}} to fields such as astronomy. Digital tools now allow projects to generate a sheer {{2}} of data that would be {{3}} expensive for small teams to collect. Volunteers have also drawn {{4}} to unusual objects, helping to {{5}} the notion that they are simply a source of cheap labour.\n\nHowever, critics argue that biases in amateur records may {{6}} the conclusions drawn from them, and others note that participants are {{7}} drawn from wealthier groups. Supporters believe that the greatest benefit may be a more {{8}} public understanding of science, including the uncertainty {{9}} in it.",
        answers: [
          ["widely"],
          ["contributions"],
          ["volume"],
          ["prohibitively"],
          ["attention"],
          ["dispel"],
          ["distort"],
          ["disproportionately"],
          ["nuanced"],
          ["inherent"],
        ],
        wordBank: [
          "widely",
          "deeply",
          "contributions",
          "contribution",
          "volume",
          "prohibitively",
          "prohibitive",
          "attention",
          "attentions",
          "dispel",
          "distort",
          "distorted",
          "disproportionately",
          "disproportionate",
          "nuanced",
          "inherent",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "mcq",
        title: "Questions 11–16: Stance and meaning",
        instructions: "Choose the best answer. Each question focuses on vocabulary that shows how strongly something is claimed.",
        questions: [
          {
            prompt: "11. In paragraph A, the boundary between expert and amateur is described as *more porous than this picture suggests*. This means the boundary…",
            options: [
              "has always been easier to cross than people think",
              "has become more difficult to cross in recent decades",
              "was invented by professional scientists",
              "is impossible to define precisely",
            ],
            answer: 0,
            explanation: "*Porous* literally means allowing liquid through; figuratively, a porous boundary is easy to cross. *Has always been* rules out B.",
          },
          {
            prompt: "12. In paragraph C, *done much to dispel the notion* suggests that the notion…",
            options: [
              "has been made much less believable",
              "has been confirmed by new evidence",
              "has spread among professional scientists",
              "was first introduced by volunteers",
            ],
            answer: 0,
            explanation: "To *dispel* an idea is to make it disappear, usually by showing it is wrong.",
          },
          {
            prompt: "13. In paragraph D, the verb *contend* in “Critics contend that such biases can distort the conclusions” shows that…",
            options: [
              "the writer has proved the critics right",
              "the critics are stating a position that others may dispute",
              "the critics are unsure of their own view",
              "the critics have reluctantly accepted the data",
            ],
            answer: 1,
            explanation: "*Contend* is a positional reporting verb: it reports an argument without the writer confirming it.",
          },
          {
            prompt: "14. In paragraph D, the phrase *volunteer data can be comparable in accuracy to professional data* indicates that this is…",
            options: [
              "true for all tasks without exception",
              "possible under certain conditions",
              "an opinion the writer rejects",
              "a result that has not yet been tested",
            ],
            answer: 1,
            explanation: "*Can be*, *with appropriate checks* and *for many tasks* all limit the claim; the sentence also says performance *varies considerably*.",
          },
          {
            prompt: "15. In paragraph F, what does *It would be premature to conclude* tell us about the writer's view?",
            options: [
              "The conclusion has already been proven wrong.",
              "There is not yet enough evidence for the conclusion.",
              "The conclusion was reached too late to be useful.",
              "Most researchers already accept the conclusion.",
            ],
            answer: 1,
            explanation: "*Premature* = too early. The writer thinks the evidence does not yet justify the claim that citizen science will transform research.",
          },
          {
            prompt: "16. In paragraph F, the adverb *convincingly* in “its proponents argue convincingly” shows that the writer…",
            options: [
              "agrees with the proponents' argument",
              "doubts the proponents' argument",
              "is reporting the argument neutrally",
              "thinks the proponents are exaggerating",
            ],
            answer: 0,
            explanation: "*Convincingly* is a booster: the writer judges the argument to be persuasive. Without it, *argue* alone would be neutral.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "gap",
        title: "Find the collocation",
        instructions:
          "Find the word in the passage that completes each collocation. The paragraph letter and a definition are given. Write ONE WORD for each answer.",
        text: "1. in their own {{0}} (C) = independently, not only as helpers\n2. {{1}} criticism (D) = criticism that continues over a long period\n3. to {{2}} for uneven sampling (D) = to adjust results so that an error is removed\n4. to {{3}} the careers of scientists (E) = to improve them\n5. to {{4}} the claim (E) = to make a claim weaker\n6. not {{5}} to the data (F) = not limited to the data\n7. to {{6}} a more nuanced understanding (F) = to encourage it to develop\n8. to be {{7}} into question (F) = to be doubted",
        answers: [
          ["right"],
          ["sustained"],
          ["correct"],
          ["enhance"],
          ["undermine"],
          ["confined"],
          ["foster"],
          ["called"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "match",
        title: "Academic phrase or plain English?",
        instructions:
          "Match each phrase from the passage to its plain-English paraphrase. There are two paraphrases you do not need. Recognising these pairs is how you spot paraphrased answers in exam questions.",
        left: [
          "the preserve of professionals (A)",
          "compiled by unpaid naturalists (A)",
          "anomalies (C)",
          "expert benchmarks (D)",
          "methodological (E)",
          "prolonged training (F)",
        ],
        right: [
          "standards set by specialists for comparison",
          "an activity reserved for experts",
          "things that do not follow the normal pattern",
          "connected with the way research is carried out",
          "collected and organised by volunteers",
          "training that lasts a long time",
          "faults in the equipment",
          "connected with what is morally right",
        ],
        answer: [1, 4, 2, 0, 3, 5],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "In summary completion with a word box, the box usually contains words of several word classes, so grammar eliminates many options at once. Then use collocation: *a sheer ______ of data* needs a noun that combines with *sheer* and *of data*. Check the meaning against the passage too: a word that fits grammatically can still be the wrong answer.",
    },
    {
      exam: "ielts",
      body: "Stance vocabulary decides many Yes/No/Not Given and multiple-choice answers. If the passage says *critics contend*, the writer has not necessarily agreed; if it says *the study demonstrated*, the writer accepts the finding. Words like *can*, *may* and *for many tasks* limit a claim, so an option with *always* or *all* is likely to be wrong.",
    },
    {
      exam: "toefl",
      body: "Vocabulary questions in Read an Academic Passage often test academic words with a precise meaning in context (*dispel, premature, porous*). Knowing the collocation helps: *dispel a notion* or *dispel fears* always means making a belief or feeling disappear.",
    },
  ],
  vocabulary: [
    { word: "the preserve of", meaning: "an activity or area that only a particular group is involved in", example: "Higher education was once the preserve of the wealthy.", topic: "society" },
    { word: "porous", meaning: "(of a boundary) easy to pass through; (of a material) full of tiny holes", example: "The border between the two disciplines is increasingly porous.", topic: "academic" },
    { word: "prohibitively", meaning: "to such a degree that something becomes impossible", example: "Testing every sample would be prohibitively expensive.", topic: "business" },
    { word: "anomaly", meaning: "something that is different from what is normal or expected", example: "The anomaly in the data turned out to be a faulty sensor.", topic: "science" },
    { word: "dispel", meaning: "to make a belief, fear or doubt disappear", example: "The report dispelled fears that the bridge was unsafe.", topic: "academic" },
    { word: "contend", meaning: "to argue that something is true, often against opposition", example: "The authors contend that the policy has failed.", topic: "academic" },
    { word: "benchmark", meaning: "a standard used to compare or measure other things", example: "The results were compared against an international benchmark.", topic: "academic" },
    { word: "undermine", meaning: "to make something weaker or less effective, often gradually", example: "The errors undermined confidence in the survey.", topic: "academic" },
    { word: "premature", meaning: "happening or done too early", example: "It is premature to judge the reform after only six months.", topic: "academic" },
    { word: "foster", meaning: "to encourage something to develop", example: "Group projects can foster cooperation between students.", topic: "education" },
    { word: "nuanced", meaning: "showing an awareness of small differences and complexity", example: "Her book offers a nuanced account of the conflict.", topic: "academic" },
    { word: "inherent in", meaning: "existing as a natural or basic part of something", example: "Some risk is inherent in any scientific experiment.", topic: "academic" },
  ],
  keyPoints: [
    "Read collocations as single chunks: it is faster and helps you predict and recognise paraphrase.",
    "The four main patterns are verb + noun, adjective + noun, adverb + adjective/verb and noun or adjective + preposition.",
    "Reporting verbs show stance: *suggest* is tentative, *contend* is a disputed position, *demonstrate* is accepted as fact.",
    "Hedges (*may, can, for many tasks*) limit claims; boosters (*convincingly, clearly*) show the writer agrees.",
    "In summary completion, use grammar first, then collocation, then meaning to choose from the word box.",
  ],
};

export default lesson;
