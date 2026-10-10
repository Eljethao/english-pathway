import type { Lesson } from "@/lib/types";

const lesson: Lesson = {
  slug: "listening-map-plan-labelling",
  title: "Map and plan labelling",
  summary:
    "Follow spoken directions on a map or floor plan, use the language of location to track the speaker, and label places correctly in IELTS Listening Part 2.",
  skill: "listening",
  level: "B2",
  order: 3,
  minutes: 20,
  exams: [
    { exam: "ielts", task: "Listening Part 2" },
    { exam: "toeic", task: "Listening Part 3 – Conversations" },
  ],
  objectives: [
    "Orient yourself on a map before the audio starts: find the starting point, north and the given labels",
    "Understand the language of location and direction (opposite, beyond, on your left, in the far corner)",
    "Follow a speaker's route and label places on a map or plan in the order you hear them",
  ],
  warmUp: [
    "Think of a building you know well, like your school or workplace. How would you explain to a visitor where the toilets are, starting from the front door?",
    "When you look at a map, do you turn it so that it matches the direction you are facing? Why might that help?",
  ],
  learn: [
    {
      type: "text",
      title: "How map and plan tasks work",
      body: "In IELTS Listening Part 2 you sometimes see a map (a park, a town, a campus) or a plan (the inside of a building). Some places are already named. Others have a letter or a number, and you must choose the correct letter for each place in the list.\n\nThe speaker is usually a guide or a manager who walks the listener through the area. The places in the questions come **in the same order as the audio**, and the speaker moves logically from one place to the next. If you lose track, use the next given label to find your way back.\n\nThe hardest part is not the vocabulary. It is keeping your place on the map while the speaker moves. That is why the short preparation time before the audio is so important.",
    },
    {
      type: "text",
      title: "Before you listen: orient yourself",
      body: "1. Find the **starting point**. It is often marked “You are here” or “Entrance”.\n2. Find **north** if there is an arrow. Speakers often say “the northern end” or “the east side”.\n3. Read the **given labels** (lake, car park, reception). These are landmarks the speaker will use.\n4. Imagine **standing at the starting point** and facing into the map. Which side is your left? Which side is your right?\n5. Read the list of places in the questions and notice any **distractor letters** that are close together.",
    },
    {
      type: "table",
      title: "Language of location and direction",
      headers: ["Meaning", "What you might hear"],
      rows: [
        ["Next to", "right beside, alongside, adjacent to, just by"],
        ["Across from", "opposite, facing, on the other side of the path"],
        ["Across and to one side", "diagonally opposite"],
        ["Past something", "beyond, just after, further along"],
        ["At the end", "at the far end, in the far corner, as far as you can go"],
        ["Change direction", "turn left, bear right, take the second path on your left"],
        ["Where paths meet", "at the crossroads, at the junction, where the paths cross"],
        ["Compass points", "the northern end, on the east side, to the south of"],
      ],
    },
    {
      type: "example",
      title: "Left and right depend on the direction you are walking",
      items: [
        "You walk **north**. A building on your **right** is on the **east** side of the path.",
        "You walk **south** (towards the bottom of the map). A building on your **right** is on the **west** side.",
        "You turn left at a crossroads while walking north. You are now walking **west**, so **right** means **north**.",
        "“The café is **diagonally opposite** the shop” means it is across the road **and** a little further along.",
      ],
    },
    {
      type: "tip",
      exam: "ielts",
      body: "Put your pencil on the starting point and **move it** as the speaker moves. If the speaker says “turn left”, turn your pencil, not just your head. This simple habit stops most left/right mistakes.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex1",
        kind: "mcq",
        title: "Quick check: left, right and compass points",
        instructions: "Imagine you are walking along a path on a map where north is at the top. Choose the correct answer.",
        questions: [
          {
            prompt: "You are walking east. The museum is on your left. Which side of the path is it on?",
            options: ["North", "South", "West"],
            answer: 0,
            explanation: "When you face east, your left hand points north.",
          },
          {
            prompt: "You are walking south. The bank is on your left. Which side of the street is it on?",
            options: ["West", "East", "North"],
            answer: 1,
            explanation: "When you face south (towards the bottom of the map), your left hand points east.",
          },
          {
            prompt: "The speaker says: “The shop is diagonally opposite the library.” Where is the shop?",
            options: [
              "Directly across the street from the library",
              "Across the street from the library and a little further along",
              "Next to the library on the same side of the street",
            ],
            answer: 1,
            explanation: "Diagonally opposite = on the other side and slightly to one side, not directly across.",
          },
          {
            prompt: "The speaker says: “Go past the fountain and the toilets are just beyond it.” Where are the toilets?",
            options: ["Before you reach the fountain", "Just after the fountain", "Behind you"],
            answer: 1,
            explanation: "Beyond = further on from something, on the far side of it.",
          },
        ],
      },
    },
  ],
  model: [
    {
      type: "image",
      src: "/images/listening-map-plan-labelling-park.svg",
      alt: "Map of Hollybrook Country Park. The main entrance is at the bottom, in the middle, and north is at the top. A main path runs north from the entrance to a crossroads, where a second path runs from west to east across the park. The main path continues north to a path that goes all the way round an oval lake in the centre. The car park is in the south-west corner and woodland is in the north-west corner. Box A is just east of the main path near the entrance, and box B is directly opposite it on the west side. Box C is north of the east–west path at its eastern end, and box D is south of the same path at its eastern end. Box E is north of the lake, beyond the lakeside path. Box F is west of the lake, below the woodland. Box G is on the east side of the lake. Box H is north of the east–west path, to the west of the crossroads.",
      caption: "Hollybrook Country Park. You start at the main entrance, facing north.",
    },
    {
      type: "audio",
      title: "A park ranger welcomes visitors",
      voice: "uk",
      cast: { narrator: "male" },
      transcript:
        "Good morning, everyone, and welcome to Hollybrook Country Park. I'm Sam, one of the rangers here, and before you set off I'd like to show you where everything is on the map. We're standing at the main entrance, at the bottom of the map, facing north towards the lake.\n\nThe first building you'll notice is right next to us, just on your right as you come through the gate. That's the visitor centre, where you can pick up trail guides and buy tickets for the boat trips. Directly opposite it, on the other side of the path, are the toilets.\n\nIf you walk straight ahead for about a hundred metres, you'll come to a crossroads. Turn left there, towards the car park, and the picnic area is the first thing you'll see on your right. There are plenty of tables, but they fill up quickly at weekends.\n\nFamilies with young children usually head the other way. If you turn right at the crossroads and follow the path all the way to the end, you'll find the adventure playground on your right-hand side. Please don't confuse it with the building on the left at the end of that path, which is the staff office and isn't open to the public.\n\nNow, if you keep going straight on from the crossroads, you'll reach the path that goes all the way round the lake. Birdwatchers should follow it to the far end, beyond the northern tip of the lake, where you'll find the bird hide. It's the quietest spot in the park, so please keep your voices down there.\n\nAnd finally, the café. It's on the eastern side of the lake, just off the lakeside path, with a terrace looking out over the water. It's a lovely place to finish your visit.",
    },
    {
      type: "text",
      title: "How a strong listener labels the map",
      body: "Before the audio, a strong listener puts a finger on the main entrance, notices that north is at the top, and sees that the given labels are *Lake*, *Car park* and *Woodland*.\n\n- **Visitor centre**: “just on your right as you come through the gate”. Facing north, right = east, so it is **A**.\n- **Toilets**: “directly opposite it, on the other side of the path” = **B**.\n- **Picnic area**: “turn left at the crossroads… the first thing you'll see on your right”. After turning left you are walking **west**, so your right is north of the path. That is **H**, not B (B is on your left).\n- **Adventure playground**: “turn right… all the way to the end… on your right-hand side”. Walking east, right = south, so it is **D**. The speaker warns you about **C**, the staff office on the left. This is a typical distractor.\n- **Bird hide**: “the far end, beyond the northern tip of the lake” = **E**.\n- **Café**: “on the eastern side of the lake” = **G**. Here the speaker uses a compass point, so you need the north arrow.\n\nNotice that **F** is never used. Exam maps usually have more letters than questions, so expect some letters you do not need.",
    },
  ],
  practice: [
    {
      type: "image",
      src: "/images/listening-map-plan-labelling-arts-centre.svg",
      alt: "Floor plan of the ground floor of Riverside Arts Centre. The main entrance is in the middle of the bottom wall and opens into a foyer with a reception desk. Room B is to the left (west) of the foyer and room D is to the right (east). Behind the foyer, a short passage runs north between the stairs on the left and the lift on the right, to a long corridor that crosses the whole building from west to east. South of this corridor, room A is to the left of the stairs and room C is to the right of the lift, at the east end. North of the corridor there are four rooms, from west to east: E in the north-west corner, F, G (directly opposite the lift) and H in the north-east corner.",
      caption: "Riverside Arts Centre, ground floor. You start at the main entrance.",
    },
    {
      type: "audio",
      title: "Practice 1: a tour for new volunteers",
      voice: "uk",
      cast: { narrator: "female" },
      transcript:
        "Right, welcome to Riverside Arts Centre, and thank you all for volunteering with us this season. I'm going to quickly explain the layout of the ground floor, so have a look at the plan you've been given. We're standing just inside the main entrance, by the reception desk.\n\nAs you come in, the first room on your left is the box office. That's deliberate, so that visitors can buy tickets before they even reach reception. On the other side, to your right as you come in, is the café. It's in the corner of the building, so it gets the morning sun, and it's usually our busiest room.\n\nNow, if you walk straight past reception, between the stairs and the lift, you'll come out into a long corridor that runs right across the building. Turn left there. The cloakroom is the first room on your left, just after the stairs. Volunteers can leave their bags there too.\n\nIf you carry on along the corridor as far as you can go, the exhibition hall is the last room on your right, in the corner. It's our largest space, and at the moment it's showing photographs of the river from the last hundred years.\n\nOK, back to the stairs. If you turn right along the corridor instead, the dance studio is the first door on your left, directly opposite the lift. There are classes in there most evenings, so it can get quite noisy.\n\nAnd finally, if you keep going to the very end of that corridor, the workshop is the room on your right. That's where the children's pottery and painting classes take place. Please don't go into the room opposite it, on the left, though. That's the staff office.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex2",
        kind: "match",
        title: "Label the plan",
        instructions: "Listen to the tour and look at the plan of Riverside Arts Centre. Match each place to the correct letter, A–H. There are two letters you do not need.",
        left: ["Box office", "Café", "Cloakroom", "Exhibition hall", "Dance studio", "Workshop"],
        right: ["A", "B", "C", "D", "E", "F", "G", "H"],
        answer: [1, 3, 0, 4, 6, 2],
      },
    },
    {
      type: "audio",
      title: "Practice 2: directions on the phone",
      voice: "uk",
      transcript:
        "Woman: Hello, Riverside Arts Centre. How can I help?\nMan: Hi. I've booked a place on the pottery class on Saturday, and I'll be coming by train. Could you tell me how to get to you from the station?\nWoman: Of course. When you come out of the station, you'll see a sign pointing left to the town centre. Ignore that and turn right instead, onto Station Road.\nMan: Turn right. OK.\nWoman: Walk along Station Road until you reach a roundabout. At the roundabout, take the second exit. That's Bridge Street. There's a supermarket on the corner, so you can't miss it.\nMan: Second exit, with a supermarket on the corner.\nWoman: That's it. Go straight down Bridge Street and cross the river. Just after the bridge, turn left onto the riverside footpath.\nMan: Got it.\nWoman: Follow the footpath for about two hundred metres. We're the large glass building on your right, just past the boat club.\nMan: Great. How long does it take on foot?\nWoman: Most people do it in about fifteen minutes. If you're carrying anything heavy, there's a taxi rank outside the station.\nMan: No, I'll walk. Thanks very much.",
    },
    {
      type: "exercise",
      exercise: {
        id: "ex3",
        kind: "gap",
        title: "Complete the directions",
        instructions: "Listen to the phone call and complete the notes. Write ONE WORD AND/OR A NUMBER for each answer.",
        text: "Directions from the station to Riverside Arts Centre\n\nLeave the station and turn {{0}} onto Station Road.\nAt the roundabout, take the {{1}} exit (Bridge Street).\nThere is a {{2}} on the corner of Bridge Street.\nCross the {{3}}, then turn left onto the footpath.\nThe arts centre is a glass building just past the {{4}} club.\nWalking time: about {{5}} minutes.",
        answers: [
          ["right"],
          ["second", "2nd"],
          ["supermarket"],
          ["river", "bridge"],
          ["boat"],
          ["15", "fifteen"],
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ex4",
        kind: "dictation",
        title: "Dictation: direction language",
        instructions: "Listen and type each sentence exactly as you hear it. These phrases appear in almost every map task.",
        voice: "uk",
        sentences: [
          "The workshop is directly opposite the staff office.",
          "Turn left at the end of the corridor.",
          "The bird hide is beyond the northern tip of the lake.",
          "Go past the lift and take the second door on your right.",
          "The toilets are diagonally opposite the main entrance.",
        ],
      },
    },
  ],
  examTips: [
    {
      exam: "ielts",
      body: "Use the time you are given to read the questions before Part 2 to find the starting point, the north arrow and every given label. Then quickly check which letters are close together: these are where the distractors will be.",
    },
    {
      exam: "ielts",
      body: "If you miss a place, do not stop. Guess a letter, move on, and use the next landmark the speaker mentions to find your place again. One lost answer is better than three.",
    },
    {
      exam: "toeic",
      body: "In TOEIC Part 3, some conversations come with a graphic such as a floor plan or a map. The question says “Look at the graphic”. Read the graphic before the conversation starts, because the answer usually depends on combining what you hear with what you see.",
    },
  ],
  vocabulary: [
    { word: "opposite", meaning: "directly across from something, facing it", example: "The toilets are opposite the visitor centre.", topic: "travel" },
    { word: "diagonally opposite", meaning: "across from something and a little to one side", example: "The bank is diagonally opposite the post office.", topic: "travel" },
    { word: "beyond", meaning: "on the far side of something; further on than", example: "The bird hide is just beyond the lake.", topic: "travel" },
    { word: "adjacent to", meaning: "next to or very near", example: "The cloakroom is adjacent to the stairs.", topic: "travel" },
    { word: "crossroads", meaning: "a place where two roads or paths cross each other", example: "Turn right at the crossroads.", topic: "travel" },
    { word: "junction", meaning: "a place where two or more roads or corridors meet", example: "Wait for me at the junction by the lift.", topic: "travel" },
    { word: "bear left / right", meaning: "to go gradually in that direction, not a sharp turn", example: "When the path divides, bear left towards the woods.", topic: "travel" },
    { word: "in the far corner", meaning: "in the corner furthest away from you", example: "The exhibition hall is in the far corner of the building.", topic: "travel" },
    { word: "overlook", meaning: "to have a view of something from above or nearby", example: "The café terrace overlooks the lake.", topic: "travel" },
    { word: "roundabout", meaning: "a circular junction where several roads meet (British English)", example: "Take the second exit at the roundabout.", topic: "travel" },
    { word: "footpath", meaning: "a path for people walking, not for cars", example: "Follow the riverside footpath for two hundred metres.", topic: "travel" },
  ],
  keyPoints: [
    "Before you listen, find the starting point, the north arrow and the given labels.",
    "Left and right depend on the direction you are walking. Move your pencil with the speaker.",
    "Listen for location language: opposite, diagonally opposite, beyond, at the far end, on the east side.",
    "Places come in the order of the audio, and speakers often warn you about a nearby distractor.",
    "There are usually extra letters you do not need.",
  ],
};

export default lesson;
