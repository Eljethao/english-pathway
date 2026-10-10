import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-accents-speed",
  title: "Different accents and speeds",
  summary:
    "Cope with different English voices and fast natural speech: recognise weak forms and linked words, understand British and American differences in vocabulary, times and floors, and keep listening when you miss a word.",
  skill: "listening",
  level: "B2",
  order: 11,
  minutes: 25,
  exams: [
    { exam: "ielts", task: "Listening Part 1" },
    { exam: "toeic", task: "Listening Part 4 – Talks" },
  ],
  objectives: [
    "Recognise common weak forms (to, of, for, can, have) and linked words in fast speech",
    "Understand British and American differences in everyday vocabulary, floors, times and numbers",
    "Focus on stressed content words and use context to fill in words you miss",
    "Answer detail questions on talks given in British and American voices",
  ],
  warmUp: [
    "Which English accents have you heard most often, for example in films, songs or at work? Which do you find easiest to understand?",
    "When someone speaks fast, which words do you usually catch, and which do you miss?",
  ],
  learn: [
    {
      type: "text",
      title: "Why real speech sounds different",
      body: "In textbooks every word sounds clear and separate. In real speech, and in exam recordings, three things change the sound of English:\n\n1. **Weak forms.** Small grammar words such as *to*, *of*, *for*, *and*, *can* and *have* are usually unstressed and very short. *A cup of tea* often sounds like “a cuppa tea”.\n2. **Linking.** Words run into each other, so a phrase can sound like one long word. *Turn it off* sounds like “tur-ni-toff”.\n3. **Accent.** Speakers from different places pronounce words differently, and they also use different **words** for the same thing: a British *flat* is an American *apartment*.\n\nThe good news is that exam answers are almost always **content words**: nouns, numbers, names, main verbs and adjectives. These words are stressed, so they are louder and longer even in fast speech. Your job is to catch the stressed words and let the small words fill themselves in from the grammar.",
    },
    {
      type: "table",
      title: "Common weak forms",
      headers: ["Word", "Often sounds like", "Example in fast speech"],
      rows: [
        ["to", "tuh", "I want to go → “I wanna go” / “I want tuh go”"],
        ["of", "uh / uv", "a lot of people → “a lotta people”"],
        ["for", "fuh", "wait for me → “wait fuh me”"],
        ["and", "un / n", "fish and chips → “fish n chips”"],
        ["can", "kun", "you can park here → “you kun park here”"],
        ["have", "uv", "should have called → “should uv called” / “should've called”"],
        ["was", "wuz", "it was late → “it wuz late”"],
      ],
    },
    {
      type: "text",
      title: "Linking and missing sounds",
      body: "- **Consonant + vowel**: the last sound of one word joins the first sound of the next: *pick it up* → “pi-ki-tup”, *an apple* → “a-napple”.\n- **Same sound twice**: it is said only once: *next time*, *big girl*, *bus stop*.\n- **Disappearing t and d**: between other consonants they often vanish: *last week* → “las week”, *sandwich* → “sanwich”, *I don't know* → “I dunno”.\n\nYou don't need to speak like this, but you need to **recognise** it. When you see the transcript after listening, read it aloud quickly and notice which sounds disappear.",
    },
    {
      type: "table",
      title: "British and American differences you can hear",
      headers: ["Meaning", "British English", "American English"],
      rows: [
        ["home in a building", "flat", "apartment"],
        ["the floor at street level", "ground floor", "first floor"],
        ["machine that carries people up", "lift", "elevator"],
        ["phone you carry", "mobile", "cell phone / cell"],
        ["people waiting in a row", "queue", "line"],
        ["place to leave cars", "car park", "parking lot"],
        ["two weeks", "a fortnight", "two weeks"],
        ["7.30", "half past seven / half seven", "seven thirty"],
        ["150", "a hundred and fifty", "a hundred fifty"],
        ["dates", "the first of September", "September first"],
        ["university term (autumn)", "autumn term", "fall semester"],
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: weak forms, linking and accents",
        instructions: "Choose the best answer.",
        questions: [
          {
            prompt: "In “I'd like a cup of tea and a piece of cake”, which words are usually short and unstressed?",
            options: ["like, cup, tea, piece, cake", "a, of, and", "I'd, like, cake", "All the words are stressed equally."],
            answer: 1,
            explanation: "Grammar words like *a*, *of* and *and* are weak. The content words (*like, cup, tea, piece, cake*) carry the stress and the meaning.",
          },
          {
            prompt: "Why does “turn it off” often sound like one word?",
            options: [
              "The speaker is speaking with a strong accent.",
              "The last consonant of each word links to the vowel at the start of the next word.",
              "The word “it” is left out completely.",
              "The speaker is making a mistake.",
            ],
            answer: 1,
            explanation: "Consonant + vowel linking: turn‿it‿off. This happens in all accents of English.",
          },
          {
            prompt: "An American speaker says the office is “on the first floor”. Where is it?",
            options: ["At street level", "One floor above street level", "In the basement", "On the top floor"],
            answer: 0,
            explanation: "In American English the first floor is the floor at street level, which British speakers call the ground floor.",
          },
          {
            prompt: "A British speaker says, “The results will be ready in a fortnight.” When will they be ready?",
            options: ["In four days", "In one week", "In two weeks", "In four weeks"],
            answer: 2,
            explanation: "A fortnight is two weeks. The word is common in British English and rare in American English.",
          },
          {
            prompt: "A British speaker says, “Let's meet at half seven.” What time do they mean?",
            options: ["6.30", "7.30", "7.15", "6.45"],
            answer: 1,
            explanation: "In informal British English, “half seven” means half past seven: 7.30.",
          },
          {
            prompt: "You are listening to a fast talk and miss a small word in the middle of a sentence. What is the best thing to do?",
            options: [
              "Stop and try to remember the sound.",
              "Keep listening for the next stressed words and use the grammar to fill the gap.",
              "Skip the rest of the question set.",
              "Write down every word you can hear, even if you don't understand it.",
            ],
            answer: 1,
            explanation: "Small words rarely carry the answer, and stopping makes you miss what comes next. Keep going and follow the stressed content words.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "audio",
      title: "Model message 1: a British voice",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Hi, it's Fiona from Castle Lettings. I'm calling about the flat on Mill Road that you asked about. It's on the ground floor, so there are no stairs, and there's a car park at the back for residents. The rent is seven hundred and fifty pounds a month, and the earliest you can move in is the first of September. I can show you round on Thursday at half past five. Give me a ring on my mobile if that time's OK for you.",
    },
    {
      type: "audio",
      title: "Model message 2: an American voice",
      voice: "us",
      cast: { narrator: "male" },
      transcript:
        "Hi, this is Jordan from Parkside Rentals, calling about the apartment on Pine Street. It's on the first floor, so you won't need the elevator, and there's a parking lot behind the building. The rent is one thousand two hundred fifty dollars a month, and it's available September first. I can show it to you on Thursday at five thirty. Just call me back on my cell.",
    },
    {
      type: "table",
      title: "How a strong listener compares the two messages",
      headers: ["Information", "Fiona (British)", "Jordan (American)", "What it means"],
      rows: [
        ["Type of home", "flat", "apartment", "the same thing"],
        ["Floor", "ground floor", "first floor", "both are at street level"],
        ["Parking", "car park at the back", "parking lot behind the building", "the same thing"],
        ["Rent", "seven hundred and fifty pounds", "one thousand two hundred fifty dollars", "Americans often leave out “and” in numbers"],
        ["Date", "the first of September", "September first", "the same date"],
        ["Viewing time", "half past five", "five thirty", "both are 5.30"],
        ["Phone", "my mobile", "my cell", "the same thing"],
      ],
    },
    {
      type: "text",
      title: "What this shows",
      body: "The two messages sound different, but the information is almost the same. A listener who knows only one set of words might think Jordan's apartment is upstairs, or might not know what “my cell” means.\n\nNotice also where the stress falls. In both messages the important words (*flat*, *ground floor*, *seven hundred and fifty*, *Thursday*, *five thirty*) are the ones that carry the information, and they are also the answers an exam would test. Small words like *on*, *the*, *at* and *for* are short in both accents, and you can understand the messages without hearing every one of them clearly.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "dictation",
        title: "Dictation: hear the small words (British voice)",
        instructions: "Listen and type each sentence exactly as you hear it. The answers are full of small grammar words that are usually weak in natural speech. If you miss one, use grammar to work out what it must be.",
        voice: "uk",
        sentences: [
          "I was going to call you, but I ran out of time.",
          "Can you tell me what time the shop opens?",
          "We should have booked a table for six.",
          "Some of them are waiting for the bus.",
          "There's a lot of work to do before the end of the week.",
        ],
      },
    },
    {
      type: "audio",
      title: "Practice 1: a quick update from a manager (American voice)",
      voice: "us",
      cast: { narrator: "female" },
      transcript:
        "OK, everyone, just a quick update before you go. The delivery that was supposed to arrive this morning has been delayed, so we won't be able to start on the new displays until tomorrow. I know some of you were hoping to leave early, and that's fine, as long as you've finished your section. If you can, could you also check the stock room for any boxes that haven't been opened? Most of them should have labels on them, but a few of them don't. Anyway, thanks for all your hard work. It's been one of our busiest weeks for a long time.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Fill in the weak words",
        instructions: "Listen to the update. Write the ONE small word that is missing from each gap. These words are usually weak in fast speech, so use grammar as well as your ears.",
        text: "The delivery that was supposed {{0}} arrive this morning has been delayed, so we won't be able {{1}} start on the new displays until tomorrow. I know some {{2}} you were hoping to leave early, and that's fine, as long {{3}} you've finished your section. If you {{4}}, could you also check the stock room {{5}} any boxes that haven't been opened? Most of them should {{6}} labels on them, but a few of them don't. Anyway, thanks for all your hard work. It's been one {{7}} our busiest weeks for a long time.",
        answers: [["to"], ["to"], ["of"], ["as"], ["can"], ["for"], ["have"], ["of"]],
      },
    },
    {
      type: "audio",
      title: "Practice 2: student accommodation (British voice)",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Hello, this is Gareth Price from the accommodation office at Westbridge College, with some information for students arriving next term. Most of you will be staying in Holt House, which is about ten minutes' walk from the main building. Each student has their own room with a single bed, a desk and a wardrobe, and you'll share a kitchen with five other people. The bathrooms are shared too, but there's one for every two rooms, so you shouldn't have to queue in the mornings.\n\nThe rent is paid every fortnight, by bank transfer, and it includes heating, electricity and Wi-Fi. Please don't try to pay in cash at reception.\n\nWhen you arrive, collect your keys from the porter's lodge, which is the small office just inside the main gate. It's open from eight in the morning until half ten at night. If your flight lands later than that, ring the security team on the number in your welcome pack, and they'll let you in.\n\nOne last thing. If you're bringing a car, I'm afraid there's no parking at Holt House. There's a car park nearby, but it's quite expensive, so most students take the bus or cycle. Right, I hope that's helpful, and we look forward to seeing you in a few weeks.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Detail questions (British voice)",
        instructions: "Listen to the message and choose the best answer. Some options use American or neutral words for what the speaker says.",
        questions: [
          {
            prompt: "How many other people will each student share a kitchen with?",
            options: ["Two", "Five", "Six", "Ten"],
            answer: 1,
            explanation: "“You'll share a kitchen with five other people.” Two is the number of rooms that share each bathroom.",
          },
          {
            prompt: "Why should students not need to wait in line for the bathroom in the morning?",
            options: [
              "Every room has its own bathroom.",
              "There is one bathroom for every two rooms.",
              "Students have different timetables.",
              "There are bathrooms in the main building too.",
            ],
            answer: 1,
            explanation: "“There's one for every two rooms, so you shouldn't have to queue.” *Queue* (British) = *wait in line* (American).",
          },
          {
            prompt: "How often do students pay the rent?",
            options: ["Every week", "Every two weeks", "Every month", "Once a term"],
            answer: 1,
            explanation: "“The rent is paid every fortnight.” A fortnight is two weeks.",
          },
          {
            prompt: "What time does the porter's lodge close?",
            options: ["9.30 p.m.", "10.00 p.m.", "10.30 p.m.", "11.30 p.m."],
            answer: 2,
            explanation: "“Until half ten at night.” In British English, *half ten* means half past ten, so 10.30 p.m.",
          },
          {
            prompt: "What does Gareth say about parking?",
            options: [
              "Students can park free at Holt House.",
              "Students must buy a parking permit from reception.",
              "There is no parking at Holt House, and the nearby car park is expensive.",
              "Parking is only available at weekends.",
            ],
            answer: 2,
            explanation: "“There's no parking at Holt House. There's a car park nearby, but it's quite expensive.”",
          },
        ],
      },
    },
    {
      type: "audio",
      title: "Practice 3: welcome to the residence hall (American voice)",
      voice: "us",
      cast: { narrator: "female" },
      transcript:
        "Hey, everybody, welcome to Lakeview University! I'm Casey, one of the resident advisors here in Maple Hall, and I've just got a few quick things to tell you before you go and grab dinner.\n\nFirst, the dining hall is on the first floor of the student centre, right across the street. Meal plans don't start until tomorrow, so tonight dinner is on us. Just show your student ID at the door.\n\nSecond, laundry. The washing machines are in the basement, and they take your student card, not coins, so don't worry about saving up quarters.\n\nThird, there's a mandatory floor meeting on Sunday at seven thirty in the evening, in the lounge at the end of the hall. It should take about forty-five minutes, and we'll go over fire safety and quiet hours.\n\nAnd finally, if you lock yourself out of your room, and trust me, somebody always does, call the front desk from your cell. The number's on the back of your key card. OK, that's it. Fall semester starts on Monday, so get some rest this weekend!",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "mcq",
        title: "Detail questions (American voice)",
        instructions: "Listen to the talk and choose the best answer. Some options use British or neutral words for what the speaker says.",
        questions: [
          {
            prompt: "Where is the dining hall?",
            options: [
              "On the ground floor of the student centre",
              "One floor above the entrance of the student centre",
              "In the basement of Maple Hall",
              "Next to the lounge",
            ],
            answer: 0,
            explanation: "Casey says “the first floor of the student centre”. In American English, that is the floor at street level, which British speakers call the ground floor.",
          },
          {
            prompt: "What does Casey say about dinner tonight?",
            options: [
              "Students need to buy a meal plan first.",
              "Students do not have to pay for it.",
              "It will be served in the lounge.",
              "It starts at seven thirty.",
            ],
            answer: 1,
            explanation: "“Tonight dinner is on us” means the university is paying. Meal plans start tomorrow, and seven thirty is the time of Sunday's meeting.",
          },
          {
            prompt: "How do students pay for the washing machines?",
            options: ["With coins", "With their student card", "With a phone app", "At the front desk"],
            answer: 1,
            explanation: "“They take your student card, not coins.” Quarters are American coins, and the speaker says you don't need them.",
          },
          {
            prompt: "What will happen on Sunday evening?",
            options: [
              "A required meeting about safety and rules",
              "A welcome dinner",
              "A fire drill",
              "The start of classes",
            ],
            answer: 0,
            explanation: "There is “a mandatory floor meeting” about fire safety and quiet hours. *Mandatory* means required. Classes start on Monday.",
          },
          {
            prompt: "What should students do if they are locked out?",
            options: [
              "Go to the student centre",
              "Wait for their resident advisor in the lounge",
              "Phone the front desk on their mobile",
              "Ask a security guard for a new key card",
            ],
            answer: 2,
            explanation: "“Call the front desk from your cell.” *Cell* (American) = *mobile* (British).",
          },
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "IELTS recordings use a range of native-speaker accents, for example British, Australian, New Zealand and North American. Answers in form and note completion are usually stressed content words, so focus on those. If a word is spelled out, write exactly the letters you hear, whatever the accent.",
    },
    {
      exam: "toeic",
      body: "TOEIC Listening uses speakers with different English accents, such as American, British, Canadian and Australian. Learn the common vocabulary differences (*first floor / ground floor*, *line / queue*, *cell / mobile*), because the options are often paraphrases in a different variety.",
    },
    {
      exam: "toefl",
      body: "TOEFL announcements and talks are short and spoken at a natural speed. You hear them only once, so don't stop when you miss a word. Keep following the stressed words (times, places, changes, requests) and use the rest of the sentence to work out what you missed.",
    },
  ],
  vocabulary: [
    { word: "weak form", meaning: "the short, unstressed way a small word like “to” or “of” is said in natural speech", example: "In fast speech, “for” often has a weak form.", topic: "academic" },
    { word: "linking", meaning: "joining the end of one word to the start of the next in speech", example: "Linking makes “turn it off” sound like one word.", topic: "academic" },
    { word: "accent", meaning: "the way people from a particular place pronounce a language", example: "The second speaker had an American accent.", topic: "society" },
    { word: "fortnight", meaning: "(British English) two weeks", example: "The rent is paid every fortnight.", topic: "everyday" },
    { word: "ground floor", meaning: "(British English) the floor at street level; American English: first floor", example: "The flat is on the ground floor, so there are no stairs.", topic: "everyday" },
    { word: "queue", meaning: "(British English) a line of people waiting; to wait in a line", example: "You shouldn't have to queue for the bathroom.", topic: "everyday" },
    { word: "car park", meaning: "(British English) an area for leaving cars; American English: parking lot", example: "There's a car park behind the building.", topic: "travel" },
    { word: "cell phone", meaning: "(American English) a mobile phone; often just “cell”", example: "Call the front desk from your cell.", topic: "technology" },
    { word: "lettings", meaning: "(British English) the business of renting out houses and flats", example: "Fiona works for a lettings agency.", topic: "business" },
    { word: "porter", meaning: "(British English) a person whose job is to look after the entrance of a college, hotel or other building", example: "Collect your keys from the porter's lodge.", topic: "education" },
    { word: "mandatory", meaning: "required by a rule; compulsory", example: "There's a mandatory floor meeting on Sunday.", topic: "education" },
    { word: "on us", meaning: "(informal) paid for by us; free for you", example: "Tonight dinner is on us.", topic: "everyday" },
  ],
  keyPoints: [
    "In natural speech, small grammar words are weak and words link together. Catch the stressed content words, because they carry the answers.",
    "Use grammar to fill in weak words you miss: “supposed ___ arrive” can only be “to”.",
    "British and American English use different words for the same thing: flat and apartment, ground floor and first floor, queue and line, mobile and cell.",
    "Times, dates and numbers are said differently too: “half seven”, “September first”, “a hundred fifty”.",
    "If you miss a word, keep listening. Stopping to think costs you the next answer.",
  ],
};

export default lesson;
