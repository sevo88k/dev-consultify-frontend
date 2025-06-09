export default [
  {
    name: [
      {
        id: 0,
        ques: " Is the pain provoked or spontaneous?",
        options: [
          { type: "Provoked", colorCode: "red", strictCode: "strictRed" },
          {
            type: "Spontaneous",
            colorCode: "black",
            strictCode: "strictBlack",
          },
        ],
      },
      {
        id: 1,
        ques: "Does the pain disappear on removal of stimulus (hot, cold or sweet) or does it remain for several minutes to hours? ",
        options: [
          { type: "Yes", colorCode: "red", strictCode: "strictRed" },
          { type: "No", colorCode: "brown", strictCode: "strictBlack" },
        ],
      },
      {
        id: 2,
        ques: "Is it a sharp pain or is it more of a dull, throbbing ache?",
        options: [
          { type: "Sharp pain", colorCode: "red", strictCode: "strictRed" },
          {
            type: "Dull/throbbing ache",
            colorCode: "black",
            strictCode: "strictBlack",
          },
        ],
      },
      {
        id: 3,
        ques: " Is the pain worse at night and affecting your ability to sleep?",
        options: [
          { type: "Yes", colorCode: "black", strictCode: "strictBlack" },
          { type: "No", colorCode: "red", strictCode: "strictRed" },
        ],
      },
      {
        id: 4,
        ques: "Is the pain difficult to locate or is it more localised?",
        options: [
          {
            type: "Difficult to locate",
            colorCode: "red",
            strictCode: "strictRed",
          },
          {
            type: "More localised",
            colorCode: "black",
            strictCode: "strictBlack",
          },
        ],
      },
      {
        id: 5,
        ques: "Is the tooth becoming more sensitive to pressure or sharp pain on biting?",
        options: [
          { type: "Yes", colorCode: "brown", strictCode: "strictBlack" },
          { type: "No", colorCode: "red", strictCode: "strictRed" },
        ],
      },
      {
        id: 6,
        ques: "Has the tooth been restored before by a dentist?",
        options: [
          { type: "Yes", colorCode: "pink", strictCode: "" },
          { type: "No", colorCode: "red", strictCode: "strictRed" },
        ],
      },
      {
        id: 7,
        ques: "Is this a broken tooth/hole present? ",
        options: [
          { type: "Yes", colorCode: "black", strictCode: "strictBlack" },
          { type: "No", colorCode: "brown", strictCode: "strictRed" },
        ],
      },
      {
        id: 8,
        ques: "Do you clench or grind your teeth a lot?",
        options: [
          { type: "Yes", colorCode: "brown", strictCode: "" },
          { type: "No", colorCode: "blue", strictCode: "" },
        ],
      },
      {
        id: 9,
        ques: "Which picture best depicts your swelling (if any)?",
        options: [
          { id: 0, img: "img-1.jpg", answer: "Acute apical abscess" },
          // { id: 1, img: "img-2.jpg", answer: "Lateral periodontal abscess" },
          { id: 2, img: "img-3.jpg", answer: "Pericorinits - Wisdom tooth" },
          {
            id: 3,
            type: "No Swelling",
            colorCode: "red",
            strictCode: "",
          },
        ],
      },
    ],
    key: "Dental Pain",
  },
  {
    name: [
      {
        id: 0,
        ques: "Do you have any of the below symptoms ?",
        options: [
          { type: "Dull throbbing pain around your jaw joint" },
          { type: "Dull throbbing pain in or around your ear" },
          { type: "Painful clicking on opening/closing of your mouth" },
          { type: "Limited mouth opening" },
          { type: "Aware of grinding/clenching your teeth" },
          {
            type: "Dull throbbing pain around your jaw joints that is worse in the morning",
          },
          {
            type: "Pain radiates up from jaw to you’re temple region giving you headaches",
          },
          {
            type: "Swelling in your gums around your back tooth"
          }
        ],
      },
    ],
    key: "Jaw Ache",
  },
  {
    name: [
      {
        id: 0,
        ques: "Do you feel a constant dull ache behind your eye or in your cheekbones/forehead or bridge of nose?",
        options: [
          { type: "Yes", colorCode: "red" },
          { type: "No", colorCode: "black" },
        ],
      },
      {
        id: 1,
        ques: "Does the pain get worse when you move your head suddenly?",
        options: [
          { type: "Yes", colorCode: "red" },
          { type: "No", colorCode: "black" },
        ],
      },
      {
        id: 2,
        ques: "Are you experiencing a runny nose?",
        options: [
          { type: "Yes", colorCode: "black" },
          { type: "No", colorCode: "black" },
        ],
      },
      {
        id: 3,
        ques: "Is the nasal discharge clear or coloured?",
        options: [
          { type: "Clear", colorCode: "black" },
          { type: "Coloured", colorCode: "red" },
        ],
      },
      {
        id: 4,
        ques: "Are your headaches associated with tooth pain?",
        options: [
          { type: "Yes", colorCode: "black",colorCode: "special" },
          { type: "No", colorCode: "black" },
        ],
      },
      {
        id: 5,
        ques: "Are your headaches very severe or ongoing?",
        options: [
          { type: "Yes", colorCode: "red" },
          { type: "No", colorCode: "black" },
        ],
      },
    ],
    key: "Headaches/Migraines",
  },
  {
    name: [
      {
        id: 0,
        ques: " Is the sore area similar to the appearance of the above picture? (Circular red outer ring with white/yellow/grey center)",
        options: [{ type: "Circular red outer ring with white/yellow/grey center" },{ type: "Swelling on the gum next to a tooth" },{ type: "No" }],
      },
    ],
    key: "Ulcers",
  },
];
