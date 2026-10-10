import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "reading-instructions-procedures",
  title: "Instructions and procedures",
  summary:
    "Read instructions, guides and workplace procedures carefully: follow the real order of the steps, notice conditions and warnings, and complete flow-charts.",
  skill: "reading",
  level: "B1",
  order: 6,
  minutes: 25,
  exams: [
    { exam: "toefl", task: "Reading – Read in Daily Life" },
    { exam: "toeic", task: "Reading Part 7 – Reading Comprehension" },
    { exam: "ielts", task: "Reading – Note, table and flow-chart completion" },
  ],
  objectives: [
    "Recognise the language of instructions: imperatives, sequence words, conditions and warnings",
    "Work out the real order of the steps, even when the text mentions them in a different order",
    "Find what to do if something goes wrong or a condition applies",
    "Complete a flow-chart with words from a procedure",
  ],
  warmUp: [
    "Think of the last time you followed instructions, for example to set up a phone or cook a new dish. Did you read them all first, or start straight away?",
    "Which words tell you the order of steps? Make a quick list (for example, *first*).",
  ],
  learn: [
    {
      type: "text",
      title: "How to recognise instructions",
      body: "Instructions and procedures tell the reader **what to do** and **in what order**. You see them on machines, in recipes, in workplace guides, on websites and in emails from your college or company.\n\nThey are usually easy to recognise:\n\n- **Imperatives** (the base form of the verb): *Press*, *Fill in*, *Do not remove*.\n- **Numbered steps** or bullet points.\n- **Sequence words**: *first, then, next, after that, finally*.\n- **Conditions**: *if, unless*.\n- **Warnings**: *Do not…, Never…, Make sure…, You must…*\n\nExam questions often check small but important details: which step comes first, what to do *if* something happens, and what you must *not* do.",
    },
    {
      type: "table",
      title: "Words that show the order",
      headers: ["Signal", "What it tells you", "Example"],
      rows: [
        ["first, to begin with", "the first step", "**First**, switch off the power."],
        ["then, next, after that", "the following step", "**Then** remove the cover."],
        ["before (you)…", "the other action happens first", "**Before you** call us, check the cable. → 1. check the cable 2. call us"],
        ["after, once, as soon as", "the action after these words happens first", "**Once** the light is green, press Start. → 1. the light turns green 2. press Start"],
        ["when", "do it at the moment something happens", "**When** you hear a beep, remove your card."],
        ["until", "keep doing something up to a point", "Stir the soup **until** it boils."],
        ["finally, lastly", "the last step", "**Finally**, save your changes."],
      ],
    },
    {
      type: "text",
      title: "Word order is not always action order",
      body: "Be careful: the order of the **words** is not always the order of the **actions**.\n\n“Before you start the machine, close the door.” → First you close the door. Then you start the machine.\n\n“Press Save after you have checked your answers.” → First you check. Then you press Save.\n\nWhen a question asks *What should you do first?*, find the step in the text and look for *before*, *after*, *once* and *until* around it.",
    },
    {
      type: "example",
      title: "Conditions and warnings",
      items: [
        "“**If** the screen stays black, hold the button for ten seconds.” → Do this only when the screen is black.",
        "“**Unless** you are a member, you must pay at reception.” → Members don't pay at reception; everyone else does.",
        "“**Do not** open the door **while** the machine is running.” → A warning about a time when you must not do something.",
        "“**Make sure** the lid is closed.” → Check that it is closed before you continue.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "In flow-chart completion, the boxes follow the order of the process. Find each step in the text, use words from the text and check the word limit, for example NO MORE THAN TWO WORDS.",
    },
  ],
  model: [
    {
      type: "passage",
      title: "Guide: booking a group study room",
      paragraphs: [
        "Group study rooms on the second floor of the library can be booked by any student for up to three hours a day. Follow these steps to make a booking.",
        "Step 1. Log in to the library website with your student number and password. If you have forgotten your password, ask at the IT desk on the ground floor before you try again, because your account will be locked after three wrong attempts.",
        "Step 2. Click on ‘Rooms’ and choose a date. Rooms can be booked up to seven days in advance. Green boxes show free times; grey boxes show times that are already booked.",
        "Step 3. Choose a room and a start time, then enter the student numbers of everyone in your group. Rooms are for groups of three to six people, so you cannot book a room just for yourself.",
        "Step 4. Before you click ‘Confirm’, check the date and time carefully. Bookings cannot be changed, only cancelled.",
        "Step 5. You will receive a confirmation email with a four-digit code. Once you arrive, enter the code on the screen next to the door, and the door will open.",
        "Please note: if nobody enters the code within fifteen minutes of the start time, the booking is cancelled and the room becomes available to other students. Do not leave bags or laptops in the room when you go out, even for a short time. To cancel a booking, use the link in your confirmation email.",
      ],
    },
    {
      type: "text",
      title: "How a strong reader follows a procedure",
      body: "**Question:** You have typed your password wrongly twice. What should you do? Step 1: the account is locked “after three wrong attempts”, and you should ask at the IT desk *before* you try again. **Answer: go to the IT desk first, then try again.**\n\n**Question:** What do you do when you arrive at the room? Step 5: “*Once* you arrive, enter the code.” *Once* = as soon as, so you arrive first, then you enter the code, and then the door opens.\n\n**Question:** What must you do before you click ‘Confirm’? Step 4: “*Before* you click ‘Confirm’, check the date and time.” The sentence mentions *Confirm* first, but checking happens first.\n\n**Question:** What happens if your group is twenty minutes late? This is a condition question, so look for *if* → the note at the end: the booking is cancelled after fifteen minutes. **Answer: you lose the room.**\n\nNotice that the strong reader also pays attention to small warning words: *cannot*, *Do not*, *only*. Questions often test them.",
    },
  ],
  practice: [
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Check the guide",
        instructions: "Use “Guide: booking a group study room”. Choose the correct answer.",
        questions: [
          {
            prompt: "How far in advance can students book a room?",
            options: ["Three hours", "Fifteen minutes", "One month", "Up to seven days"],
            answer: 3,
            explanation: "Step 2: “Rooms can be booked up to seven days in advance.” Three hours is the longest time you can use a room each day.",
          },
          {
            prompt: "Who can NOT book a room?",
            options: ["A group of three students", "A group of six students", "One student working alone", "A group of four students"],
            answer: 2,
            explanation: "Step 3: rooms are for groups of three to six, “so you cannot book a room just for yourself”. Groups of three, four or six are all allowed.",
          },
          {
            prompt: "Your group wants a different time after you have confirmed a booking. What should you do?",
            options: ["Change the time on the website", "Cancel the booking and make a new one", "Ask at the IT desk", "Enter a new code at the door"],
            answer: 1,
            explanation: "Step 4: “Bookings cannot be changed, only cancelled.” So the only way to get a different time is to cancel and book again.",
          },
          {
            prompt: "What does a grey box on the website mean?",
            options: ["The time is already booked.", "The room is free.", "The room is closed for cleaning.", "Your booking is confirmed."],
            answer: 0,
            explanation: "Step 2: “grey boxes show times that are already booked”.",
          },
          {
            prompt: "Which of these is NOT allowed?",
            options: [
              "Booking a room five days in advance",
              "Leaving a laptop in the room during a short break",
              "Cancelling a booking with the link in the email",
              "Entering the code when you arrive",
            ],
            answer: 1,
            explanation: "The note says: “Do not leave bags or laptops in the room when you go out, even for a short time.”",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "mcq",
        title: "Which comes first?",
        instructions: "Read each instruction. Think about the real order of the actions, not the order of the words.",
        questions: [
          {
            prompt: "“Before you leave the room, switch off the lights.” What do you do first?",
            options: ["Leave the room", "Switch off the lights"],
            answer: 1,
            explanation: "With *before*, the other action comes first: switch off the lights, then leave.",
          },
          {
            prompt: "“Once the water boils, add the pasta.” What happens first?",
            options: ["The water boils.", "You add the pasta."],
            answer: 0,
            explanation: "*Once* = as soon as. The water boils first, then you add the pasta.",
          },
          {
            prompt: "“Fill in the form after you have read the rules.” What do you do first?",
            options: ["Fill in the form", "Read the rules"],
            answer: 1,
            explanation: "The action after *after* happens first: read the rules, then fill in the form.",
          },
          {
            prompt: "“Do not open the oven until the timer rings.” When can you open the oven?",
            options: ["Before the timer rings", "When the timer has rung", "Never"],
            answer: 1,
            explanation: "*Until* marks the end of the waiting time. After the timer rings, you can open the oven.",
          },
          {
            prompt: "“Unless your flight is cancelled, you must check in online.” Who does NOT need to check in online?",
            options: ["All passengers", "Passengers whose flight is cancelled", "Passengers with no bags"],
            answer: 1,
            explanation: "*Unless* = except if. Everyone must check in online, except people whose flight is cancelled.",
          },
          {
            prompt: "“Keep the button pressed while the light is flashing.” When can you stop pressing the button?",
            options: ["When the light starts flashing", "When the light stops flashing", "Before the light flashes"],
            answer: 1,
            explanation: "*While* = during the time that. You keep pressing for as long as the light flashes, so you stop when it stops.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Your new e-bike: before your first ride",
      labelled: true,
      timerMinutes: 3,
      paragraphs: [
        "Thank you for choosing a CityGlide e-bike. Please read these instructions carefully before your first ride.",
        "Charging the battery. The battery is not fully charged when you buy the bike, so charge it for at least five hours before you use it for the first time. Before you connect the charger to the battery, plug the charger into the wall. When the light on the charger changes from red to green, the battery is full. Do not charge the battery in a room that is colder than 0°C.",
        "Fitting the battery. Once the battery is charged, slide it into the frame under the seat until you hear a click. Then lock it with the small key. Keep the key in a safe place, because you will need it to remove the battery.",
        "Starting the bike. Press the power button on the handlebar and hold it for three seconds. After the screen has switched on, choose one of the three support levels. We recommend level 1 for your first ride, until you feel comfortable with the bike.",
        "Safety. Always check the brakes before every ride. If the brakes feel soft, do not ride the bike; contact your dealer. Never wash the bike with a high-pressure water spray, because water can damage the motor.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "order",
        title: "Put the steps in the real order",
        instructions:
          "Read “Your new e-bike: before your first ride”. Put these actions in the order a new owner does them. Watch out for *before*, *once* and *after*.",
        mode: "lines",
        items: [
          "Plug the charger into the wall.",
          "Connect the charger to the battery.",
          "Wait for the light on the charger to turn green.",
          "Slide the battery into the frame.",
          "Lock the battery with the key.",
          "Hold the power button for three seconds.",
          "Choose a support level.",
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "mcq",
        title: "Conditions and warnings",
        instructions: "Use the same instructions. Choose the correct answer.",
        questions: [
          {
            prompt: "How long should you charge the battery before your first ride?",
            options: ["Three seconds", "At least five hours", "Until the light turns red", "Exactly one hour"],
            answer: 1,
            explanation: "Paragraph B: “charge it for at least five hours before you use it for the first time”. The light turns *green*, not red, when the battery is full.",
          },
          {
            prompt: "What should you do if the brakes feel soft?",
            options: ["Ride slowly on level 1", "Wash them with water", "Stop using the bike and contact the dealer", "Lock them with the key"],
            answer: 2,
            explanation: "Paragraph E: “If the brakes feel soft, do not ride the bike; contact your dealer.”",
          },
          {
            prompt: "Why do you need to keep the key in a safe place?",
            options: ["You need it to start the bike.", "You need it to charge the battery.", "You need it to change the support level.", "You need it to take the battery out."],
            answer: 3,
            explanation: "Paragraph C: “you will need it to remove the battery”. *Remove* = take out.",
          },
          {
            prompt: "When can a new rider stop using level 1?",
            options: ["When they feel comfortable with the bike", "After five hours", "When the screen switches on", "When the battery is full"],
            answer: 0,
            explanation: "Paragraph D: level 1 is recommended “until you feel comfortable with the bike”.",
          },
          {
            prompt: "Which of these do the instructions tell you NOT to do?",
            options: ["Charge the battery in a very cold room", "Check the brakes before a ride", "Lock the battery with a key", "Choose level 1 for your first ride"],
            answer: 0,
            explanation: "Paragraph B: “Do not charge the battery in a room that is colder than 0°C.” The other three are things you *should* do.",
          },
        ],
      },
    },
    {
      type: "passage",
      title: "Staff handbook: if you lose your ID card",
      paragraphs: [
        "Your staff ID card opens the doors, pays for meals in the canteen and lets you use the printers. If you lose it, follow this procedure as soon as possible.",
        "First, report the loss to the security office on the ground floor, or call extension 4410 if you are working from home. Security will stop the old card immediately, so nobody else can use it to enter the building.",
        "Next, fill in a replacement request form. You can find it on the staff website under ‘Forms’. Your line manager must sign the form before you send it to Human Resources (HR).",
        "HR will then contact you to arrange a time for a new photo. You do not need to bring a photo yourself, because all ID photos are taken in the HR office so that they look the same.",
        "The new card is usually ready three working days after the photo is taken. You can collect it from reception. Until then, security will give you a temporary visitor pass, which you must return when you collect your new card.",
        "Please note: the first replacement is free. After that, each new card costs £10, which will be taken from your salary.",
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ex5",
        kind: "gap",
        title: "Complete the flow-chart",
        instructions:
          "Read “Staff handbook: if you lose your ID card”. Complete the flow-chart. Write NO MORE THAN TWO WORDS AND/OR A NUMBER from the text in each gap.",
        text: "Report the lost card to the {{0}} office (or call extension 4410)\n↓\nSecurity will {{1}} the old card immediately\n↓\nComplete a replacement {{2}} from the staff website\n↓\nAsk your {{3}} to sign it, then send it to HR\n↓\nHave a new {{4}} taken in the HR office\n↓\nWait about {{5}} working days, using a temporary {{6}} in the meantime\n↓\nCollect the new card from {{7}}",
        answers: [
          ["security"],
          ["stop"],
          ["request form", "form"],
          ["line manager", "manager"],
          ["photo", "ID photo"],
          ["3", "three"],
          ["visitor pass", "pass"],
          ["reception"],
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "toefl",
      body: "Read in Daily Life uses short everyday texts, such as notices, emails and schedules, each with two or three questions. With instructions, questions often ask what someone should do first or what to do if something happens. Look for *before*, *after*, *once* and *if* near the key words.",
    },
    {
      exam: "toeic",
      body: "Part 7 notices and emails often explain a procedure. For questions like *What are employees asked to do?* or *What must happen before…?*, look at the imperative verbs and the *before / after* clauses rather than the first sentence of the text.",
    },
    {
      exam: "ielts",
      body: "In flow-chart completion, follow the arrows and find each step in the text in order. Use words from the text and keep to the word limit: if the instructions say NO MORE THAN TWO WORDS, a three-word answer is wrong.",
    },
  ],
  vocabulary: [
    { word: "procedure", meaning: "a set of steps for doing something in the correct or official way", example: "Follow the safety procedure if the alarm rings.", topic: "work" },
    { word: "confirm", meaning: "to say or show that something is definite", example: "Click ‘Confirm’ to finish your booking.", topic: "everyday" },
    { word: "attempt", meaning: "a try at doing something", example: "Your account will be locked after three wrong attempts.", topic: "technology" },
    { word: "cancel", meaning: "to say that something planned will not happen", example: "We had to cancel the meeting because the manager was ill.", topic: "everyday" },
    { word: "charge", meaning: "to put electricity into a battery", example: "I charge my phone every night.", topic: "technology" },
    { word: "switch on", meaning: "to start a machine or a light, usually with a button", example: "Switch on the computer and wait for the screen.", topic: "technology" },
    { word: "dealer", meaning: "a business that sells a particular product, such as cars or bikes", example: "Take the bike back to the dealer if it needs repairs.", topic: "business" },
    { word: "damage", meaning: "to harm something so that it doesn't work well", example: "Water can damage the motor.", topic: "everyday" },
    { word: "replacement", meaning: "a new thing that takes the place of one that is lost or broken", example: "I need a replacement for my lost key.", topic: "work" },
    { word: "line manager", meaning: "the person at work who is directly responsible for you", example: "Ask your line manager before you book a holiday.", topic: "work" },
    { word: "collect", meaning: "to go to a place and get something", example: "You can collect your new card from reception.", topic: "everyday" },
    { word: "extension", meaning: "one of the phone lines inside a company, with its own short number", example: "Call me on extension 214.", topic: "work" },
  ],
  keyPoints: [
    "Instructions use imperatives, numbered steps, sequence words, conditions (if, unless) and warnings (do not, never, make sure).",
    "The order of the words is not always the order of the actions: with before, the other action comes first; with after, once and as soon as, the action after the word comes first.",
    "Questions often test conditions and warnings, so look for if, unless, until and do not near the key words.",
    "In a flow-chart, follow the steps in order and copy words from the text within the word limit.",
  ],
};

export default lesson;
