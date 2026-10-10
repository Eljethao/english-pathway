import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-yes-no-not-given",
  title: "Yes / No / Not Given: the writer's views",
  summary:
    "Judge statements against what the writer actually claims: separate the writer's own voice from the views they report, read concessions and hedges precisely, and choose between No and Not Given with confidence.",
  skill: "reading",
  level: "C1",
  order: 5,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Reading – Yes/No/Not Given" },
    { exam: "ielts", task: "Reading – Matching features" },
    { exam: "toefl", task: "Reading – Read an Academic Passage" },
  ],
  objectives: [
    "Separate the writer's own views from the views the writer reports, accepts or rejects",
    "Choose No only when the text shows that the writer holds the opposite view",
    "Read concessions, hedges and limits of scope precisely when comparing a statement with the text",
    "Attribute views to the right people in a matching features task",
  ],
  warmUp: [
    "A columnist writes: “Critics say the new stadium will be a waste of money.” Do we know what the columnist thinks?",
    "Which is more certain: “This may help” or “This will help”? Why might the difference matter in a test?",
  ],
  learn: [
    {
      type: "text",
      title: "Facts versus the writer's claims",
      body: "True/False/Not Given compares a statement with the **information** in a passage. Yes/No/Not Given compares it with the **views or claims of the writer**: their opinions, evaluations, predictions and recommendations, and the facts they present as true.\n\n- **Yes**: the writer holds this view. It may be stated directly, or it may be a point the writer concedes before arguing something else.\n- **No**: the writer holds the opposite view, or explicitly rejects this one.\n- **Not Given**: it is impossible to say what the writer thinks about this. That includes views the writer only **reports** without accepting or rejecting them.\n\nAt C1, the difficulty is rarely vocabulary. It is keeping track of **whose voice** you are reading and **how strongly** that voice commits to a claim.",
    },
    {
      type: "table",
      title: "Whose voice is it?",
      headers: ["Signal in the text", "Whose view?", "Effect on the answer"],
      rows: [
        ["I would argue, in my view, it seems clear that; evaluative words such as misguided, persuasive, naive", "The writer's", "Can support Yes or No"],
        ["Critics claim, supporters argue, it is often said that, according to X", "Someone else's", "Not Given, unless the writer then accepts or rejects it"],
        ["This ignores…, Such claims are exaggerated, This is to misunderstand…", "The writer rejecting a reported view", "The reported view → No"],
        ["Admittedly, it is true that, granted, of course", "The writer conceding a point", "The conceded point → Yes, even if the writer then argues the other way"],
        ["That may be so, it remains to be seen, it is hard to say", "The writer staying undecided", "Not Given: the writer neither accepts nor rejects the view"],
      ],
    },
    {
      type: "text",
      title: "Four traps at C1 level",
      body: "1. **The reported view.** The statement repeats what *critics*, *supporters* or *some economists* believe. Look at the next sentence or two for the writer's reaction. No reaction means Not Given.\n2. **The concession.** “*Admittedly, X. However, Y.*” The paragraph's main argument is Y, but the writer still accepts X, so a statement of X is **Yes**.\n3. **Degree and scope.** The writer says *some*, *in the short term*, *in large cities*; the statement says *all*, *permanently*, *everywhere*. Ask whether the writer's limit **excludes** the statement (No) or simply **does not cover** it (Not Given).\n4. **The missing comparison or recommendation.** The statement compares two things or says what *should* happen. If the writer never makes that comparison or recommendation, the answer is Not Given, however reasonable it sounds.",
    },
    {
      type: "example",
      title: "One extract, four statements",
      items: [
        "Text: “Supporters of the scheme claim it will halve traffic in the city centre. Admittedly, congestion has eased since it began; but to credit the scheme alone for this is to ignore the effect of the new rail line.”",
        "Traffic in the city centre has decreased since the scheme started. → **Yes** (a concession: *Admittedly, congestion has eased*)",
        "The scheme is the only reason why traffic has decreased. → **No** (the writer rejects this: *to credit the scheme alone… is to ignore…*)",
        "The scheme will reduce traffic in the city centre by half. → **Not Given** (this is the supporters' prediction; the writer neither accepts nor rejects it)",
        "The rail line cost more to build than the scheme. → **Not Given** (no cost comparison is made)",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "IELTS uses Yes/No/Not Given with passages that contain opinions or an argument. The instructions ask whether the statements agree with the **views** or **claims** of the writer, and the statements follow the order of the passage.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "tfng",
        variant: "ynng",
        title: "Quick check: one extract at a time",
        instructions:
          "Each item gives a short extract and a statement. Does the statement agree with the views of the writer of the extract? Choose Yes, No or Not Given.",
        statements: [
          {
            text: "Extract: “Some economists insist that tourism always benefits local communities. The evidence from coastal towns suggests otherwise: much of the money spent there leaves the area within weeks.” Statement: Tourism always benefits local communities.",
            answer: "F",
            explanation:
              "No. The view belongs to “some economists”, but the writer rejects it: “The evidence… suggests otherwise.”",
          },
          {
            text: "Extract: “It is often said that open-plan offices encourage collaboration. Whether they do is a question the existing studies cannot yet answer.” Statement: There is clear evidence that open-plan offices encourage collaboration.",
            answer: "F",
            explanation:
              "No. The writer says the studies “cannot yet answer” the question, which contradicts the claim that there is clear evidence.",
          },
          {
            text: "Extract: “Admittedly, electric scooters are cheaper to run than cars. My objection is to the way they are left on pavements, not to the machines themselves.” Statement: Electric scooters cost less to run than cars.",
            answer: "T",
            explanation:
              "Yes. *Admittedly* introduces a point the writer accepts before moving on to the objection.",
          },
          {
            text: "Extract: “Critics of the housing plan argue that it will push rents up. Its supporters reply that new housing always lowers rents in the long run.” Statement: The housing plan will increase rents.",
            answer: "NG",
            explanation:
              "Not Given. Both views are reported (critics, supporters), and the writer does not say which side is right.",
          },
          {
            text: "Extract: “In the short term, the tax has clearly reduced sales of sugary drinks.” Statement: The tax will continue to reduce sales in the long term.",
            answer: "NG",
            explanation:
              "Not Given. The writer's claim is limited to the short term. It does not cover the long term, but it does not exclude it either.",
          },
          {
            text: "Extract: “To blame teachers for falling test scores is to overlook the far larger effect of poverty.” Statement: Teachers are the main cause of falling test scores.",
            answer: "F",
            explanation:
              "No. The writer says poverty has a “far larger effect”, so teachers cannot be the main cause in the writer's view.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "passage",
      title: "What league tables leave out",
      labelled: true,
      paragraphs: [
        "Every autumn, a handful of organisations publish lists that claim to rank the world's universities, and every autumn the results are greeted with a mixture of celebration and dismay. University leaders issue press releases when their institution climbs a few places; politicians cite the number of 'world-class' universities in their country as evidence of national success. For prospective students, especially those planning to study abroad, the tables offer something that is otherwise hard to find: a simple way of comparing institutions they may never visit before they apply. Some applicants, and many of their parents, treat a place in the top hundred as a guarantee of quality.",
        "It would be unfair to dismiss the rankings entirely. Before they existed, information about universities was scattered, inconsistent and often controlled by the institutions themselves, and the tables have undoubtedly made some of it more public. Some universities have also responded to a poor position by investing in things that genuinely matter to students, such as libraries and support services. Defenders of the rankings go further, arguing that competition between universities raises standards across the whole sector. That may be so, but it is a claim that is very hard to test, since standards are precisely what the rankings measure so imperfectly.",
        "The central problem is that the most influential tables reward what is easy to count. Research output, citations and the proportion of international staff can all be measured with reasonable precision; the quality of teaching cannot, at least not cheaply. As a result, the indicators that carry the most weight tend to favour large, wealthy, research-intensive institutions. A small college that teaches brilliantly but publishes little may not appear at all. Nor do the tables say much about what happens to students once they arrive: how often they see their tutors, how much feedback they receive, or whether they complete their degree. Several tables also rely partly on reputation surveys, in which academics are asked to name the best institutions in their field. It is hardly surprising that they tend to name the ones that already top the tables.",
        "This would matter less if the rankings were treated as one rough guide among many. In practice, they shape behaviour. A fall of a few places can make headlines, even when it reflects nothing more than a change in the way the scores are calculated. Some universities have been accused of hiring highly cited researchers mainly to improve their scores, or of moving money from teaching into the activities that the tables reward. Some governments even use ranking positions when deciding which foreign graduates to welcome or which students to fund abroad. An often-quoted principle holds that when a measure becomes a target, it ceases to be a good measure. University rankings offer an unusually clear illustration of it.",
        "None of this means that comparison is impossible, or that applicants should ignore the tables altogether. It means that they should read them as they would read any league table: as a record of who scores well on a particular set of measures, not as a verdict on which institution is best. A student who wants small classes, close contact with tutors or good employment prospects in a particular field will usually learn more from subject-level information and from current students than from a university's overall position. The tables answer a question; the difficulty is that it is rarely the question applicants most need answered.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader decides",
      body: "**Statement 1: League tables have made information about universities more widely available.**\n\nParagraph B opens with a concession: *It would be unfair to dismiss the rankings entirely*. The writer then says the tables “have **undoubtedly** made some of it more public”. *Undoubtedly* is the writer's own voice. Even though the writer goes on to criticise the tables, this point is accepted. → **Yes**\n\n**Statement 2: Competition between universities has raised standards across the sector.**\n\nThis is the view of the *defenders* of the rankings, not the writer. The writer's reaction is *That may be so, but it is a claim that is very hard to test*. *May be so* does not accept the claim; *hard to test* does not reject it. The writer is deliberately undecided. → **Not Given**. Choosing No here is the classic C1 error: the writer is sceptical about the **evidence**, not saying the claim is false.\n\n**Statement 3: The most influential tables give more weight to teaching quality than to research.**\n\nParagraph C: the tables “reward what is easy to count”; research can be measured, but teaching “cannot, at least not cheaply”, and the heaviest indicators favour “research-intensive institutions”. The writer's claim is the opposite of the statement. → **No**\n\n**Statement 4: Applicants should pay no attention to league tables.**\n\nParagraph E: “None of this means… that applicants should ignore the tables altogether.” The writer explicitly rejects this recommendation. → **No**\n\n**Statement 5: Reputation surveys were introduced to make the tables fairer.**\n\nParagraph C mentions reputation surveys and criticises them, but says nothing about **why** they were introduced. → **Not Given**",
    },
  ],
  practice: [
    {
      type: "passage",
      title: "Does handwriting still matter?",
      labelled: true,
      paragraphs: [
        "In many classrooms, the pen is quietly losing ground. Pupils who once filled exercise books now type their homework, take tests on tablets and, increasingly, dictate their ideas to software that turns speech into text. Several education systems have reduced the time given to handwriting in the primary curriculum, and in some places joined-up, or cursive, writing is no longer taught at all. To many people this seems a natural development. Schools no longer teach children to use a slide rule, they point out, so why insist that they master a skill that most adults rarely use for anything longer than a shopping list?",
        "The question deserves a better answer than either side usually gives it. Technology enthusiasts tend to present handwriting as a relic, a piece of nostalgia that wastes precious teaching hours. Its defenders, on the other hand, sometimes speak as if the loss of joined-up writing were a threat to civilisation itself. Neither position, in my view, survives contact with the evidence, which is both more interesting and more modest than the slogans on either side suggest.",
        "The strongest case for handwriting concerns young children. Occupational therapists, who work with pupils who find writing difficult, point out that forming letters by hand demands close coordination of eye, hand and memory. Several studies have found that young children who practise writing letters by hand later recognise them more readily than children who learn them only by typing, and letter recognition is one of the foundations of learning to read. Admittedly, most of these studies are small, and few have followed children for more than a few months. But their findings point consistently in the same direction, which is more than can be said for a great deal of educational research.",
        "The evidence for older students is far less clear. A widely reported experiment found that university students who took lecture notes by hand answered conceptual questions better than those who typed on laptops, apparently because slower writing forced them to summarise rather than copy the lecturer's words. The study was enthusiastically taken up by lecturers who wanted to ban laptops from their classes. Later attempts to reproduce the result, however, have found weaker and less consistent effects, and it now seems likely that what matters is not the tool but the way it is used. A student who types a thoughtful summary will probably learn more than one who copies every slide in beautiful handwriting.",
        "What, then, should schools do? Some education technology companies argue that keyboard skills should replace handwriting from the first year of school, since that is how children will write as adults. This seems to me to mistake the purpose of early education, which is not only to teach the tools of adult life but to build the abilities on which later learning depends. Equally, I see little justification for the hours some schools still spend perfecting the loops of joined-up script, a style whose main advantage, speed, matters far less now that most extended writing is done on a keyboard. Clear, fluent printing serves a young child perfectly well.",
        "A sensible policy would therefore teach letter formation carefully in the first years of school, introduce typing once children can write by hand with reasonable ease, and stop treating the two as rivals. Some primary teachers report that pupils who type almost everything find it harder to plan a piece of writing on paper, which matters in countries where important examinations are still handwritten. The real risk is not that handwriting will disappear, but that decisions about it will be made on the basis of nostalgia or novelty rather than evidence.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "tfng",
        variant: "ynng",
        title: "Questions 1–10",
        instructions:
          "Do the following statements agree with the views of the writer of “Does handwriting still matter?” Choose Yes, No or Not Given.",
        statements: [
          {
            text: "1. Both supporters and critics of handwriting tend to overstate their case.",
            answer: "T",
            explanation:
              "Yes. Paragraph B: “Neither position… survives contact with the evidence, which is… more modest than the slogans on either side suggest.”",
          },
          {
            text: "2. Practising letters by hand can make it easier for young children to learn to read.",
            answer: "T",
            explanation:
              "Yes. Paragraph C calls this “the strongest case for handwriting”: children who write letters by hand recognise them more readily, and letter recognition is a foundation of reading. The writer accepts the findings despite their limits.",
          },
          {
            text: "3. The research on handwriting and young children is more consistent than much research in education.",
            answer: "T",
            explanation:
              "Yes. Paragraph C: the findings point consistently in one direction, “which is more than can be said for a great deal of educational research”.",
          },
          {
            text: "4. Students who take notes on laptops will learn less than students who write by hand.",
            answer: "F",
            explanation:
              "No. Paragraph D: “what matters is not the tool but the way it is used”. A student who types a thoughtful summary will probably learn more.",
          },
          {
            text: "5. Education technology companies have had a strong influence on school curricula.",
            answer: "NG",
            explanation:
              "Not Given. Paragraph E reports what these companies argue, but says nothing about how much influence they have had.",
          },
          {
            text: "6. Some schools spend more time on joined-up writing than it deserves.",
            answer: "T",
            explanation:
              "Yes. Paragraph E: “I see little justification for the hours some schools still spend perfecting the loops of joined-up script.”",
          },
          {
            text: "7. Joined-up writing helps children to spell better than printing does.",
            answer: "NG",
            explanation:
              "Not Given. The writer mentions speed as the main advantage of joined-up writing, but never compares the two styles for spelling.",
          },
          {
            text: "8. Children should learn keyboard skills before they learn to write by hand.",
            answer: "F",
            explanation:
              "No. Paragraph F recommends introducing typing “once children can write by hand with reasonable ease”, so handwriting comes first. In paragraph E the writer also rejects replacing handwriting from the first year.",
          },
          {
            text: "9. Handwriting and typing should be seen as competing skills.",
            answer: "F",
            explanation: "No. Paragraph F: schools should “stop treating the two as rivals”.",
          },
          {
            text: "10. Handwritten examinations will soon be replaced by examinations on computer.",
            answer: "NG",
            explanation:
              "Not Given. Paragraph F says important examinations are still handwritten in some countries, but makes no prediction about the future.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "match",
        title: "Questions 11–18: Matching features",
        instructions:
          "Who expresses each view in the passage? Choose the correct person or group, A–G. You may use any letter more than once.",
        left: [
          "11. Clear printing is perfectly adequate for young children.",
          "12. Laptops should not be allowed in lectures.",
          "13. Handwriting is an outdated skill that takes up valuable lesson time.",
          "14. Pupils who rarely write by hand may struggle to plan written work on paper.",
          "15. Forming letters by hand requires the eye, the hand and memory to work closely together.",
          "16. Children should use keyboards instead of handwriting from their first year at school.",
          "17. Decisions about handwriting should be based on evidence rather than nostalgia or novelty.",
          "18. The decline of joined-up writing threatens civilisation.",
        ],
        right: [
          "the writer",
          "technology enthusiasts",
          "defenders of handwriting",
          "occupational therapists",
          "some university lecturers",
          "education technology companies",
          "some primary teachers",
        ],
        answer: [0, 4, 1, 6, 3, 5, 0, 2],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Questions 19–22",
        instructions: "Choose the correct answer.",
        questions: [
          {
            prompt: "19. Why does the writer mention the slide rule in paragraph A?",
            options: [
              "to show that the writer thinks handwriting should no longer be taught",
              "to present a common argument that the writer goes on to question",
              "to give an example of a skill that schools still teach",
              "to suggest that calculators have harmed children's mathematics",
            ],
            answer: 1,
            explanation:
              "The comparison belongs to “many people” (*they point out*). In paragraph B the writer says the question “deserves a better answer than either side usually gives it”.",
          },
          {
            prompt: "20. What is the writer's view of the research on young children in paragraph C?",
            options: [
              "It is large-scale and has followed children for many years.",
              "It has limitations, but its results are consistent enough to be taken seriously.",
              "It contradicts the research on older students.",
              "It is too weak to support any conclusion.",
            ],
            answer: 1,
            explanation:
              "The writer concedes that the studies are small and short (*Admittedly…*), then defends them: “their findings point consistently in the same direction”.",
          },
          {
            prompt: "21. According to the writer, what best explains the mixed results of the note-taking studies?",
            options: [
              "Laptops have become faster since the first study.",
              "Students now write more slowly than they used to.",
              "How students take notes matters more than what they use.",
              "Lecturers in later studies used fewer slides.",
            ],
            answer: 2,
            explanation: "Paragraph D: “what matters is not the tool but the way it is used”.",
          },
          {
            prompt: "22. Which best summarises the writer's overall position?",
            options: [
              "Joined-up writing deserves more lesson time because it is part of our culture.",
              "Handwriting will soon disappear, and schools should accept this.",
              "Handwriting should be taught carefully in the early years and typing added later, for reasons based on evidence.",
              "Research has shown that handwriting is better than typing at every age.",
            ],
            answer: 2,
            explanation:
              "Paragraph F sets out this policy, and the whole passage argues from evidence. Option D is too strong: the evidence for older students is “far less clear”.",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "When a statement repeats a view that the writer attributes to others (*critics say*, *supporters argue*), read the next one or two sentences for the writer's reaction. Agreement means Yes, rejection means No, and no reaction, or an undecided one, means Not Given.",
    },
    {
      exam: "ielts",
      body: "Choose **No** only when you can point to the words that show the writer holds the opposite view. If you can only guess how the writer might feel, the answer is **Not Given**.",
    },
    {
      exam: "toefl",
      body: "TOEFL has no Yes/No/Not Given task, but inference and purpose questions in Read an Academic Passage test the same skill. Before choosing an option about what the author believes, check that the idea is the author's own and not a view the author is only describing.",
    },
  ],
  vocabulary: [
    { word: "league table", meaning: "a list that ranks organisations or teams by their performance", example: "The university fell ten places in this year's league table.", topic: "education" },
    { word: "indicator", meaning: "a measurement that shows the state or level of something", example: "Citations are often used as an indicator of research quality.", topic: "academic" },
    { word: "endorse", meaning: "to say that you support or agree with an idea or claim", example: "The writer reports the claim but does not endorse it.", topic: "academic" },
    { word: "contend", meaning: "to argue or state that something is true", example: "Critics contend that the tables favour wealthy universities.", topic: "academic" },
    { word: "concession", meaning: "an admission that an opposing point is partly true", example: "The paragraph opens with a concession before the main argument.", topic: "academic" },
    { word: "verdict", meaning: "a final judgement or opinion about something", example: "A ranking is not a verdict on which university is best.", topic: "society" },
    { word: "relic", meaning: "something from the past that survives but may no longer seem useful", example: "Some people regard handwriting as a relic of the past.", topic: "education" },
    { word: "nostalgia", meaning: "affection for the past, often seeing it as better than it was", example: "Decisions should be based on evidence, not nostalgia.", topic: "society" },
    { word: "legible", meaning: "clear enough to be read easily", example: "Her handwriting is small but perfectly legible.", topic: "education" },
    { word: "reproduce a result", meaning: "to get the same result when an experiment is repeated", example: "Later studies failed to reproduce the result.", topic: "science" },
    { word: "rival", meaning: "a person or thing that competes with another", example: "Typing and handwriting do not need to be rivals.", topic: "education" },
  ],
  keyPoints: [
    "Yes/No/Not Given tests the writer's views and claims, not facts about the world.",
    "A view the writer only reports (critics claim, supporters argue) is Not Given unless the writer accepts or rejects it.",
    "A point the writer concedes (admittedly, it is true that) is still the writer's view: Yes.",
    "Choose No only when the writer's words show the opposite view; if the writer is silent or undecided, choose Not Given.",
    "Check degree and scope: some or all, short term or long term, may or will.",
  ],
};

export default lesson;
