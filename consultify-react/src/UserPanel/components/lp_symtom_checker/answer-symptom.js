export default [
    {
      DENTAL_PAIN: [
        {
          id: 0,
          ans: [],
          options: ["Provoked", "Spontaneous"],
        },
        {
          id: 1,
          ques: "Does the pain disappear on removal of stimulus (hot, cold or sweet) or does it remain for several minutes to hours? ",
          options: ["Pain is short lasting", "Pain lingers for a while"],
        },
        {
          id: 2,
          ques: "Is it a sharp pain or is it more of a dull, throbbing ache?",
          options: ["Sharp pain", "Dull/throbbing ache"],
        },
        {
          id: 3,
          ques: " Is the pain worse at night and affecting your ability to sleep?",
          options: ["Yes", "No"],
        },
        {
          id: 4,
          ques: "Is the pain difficult to locate or is it more localised?",
          options: ["Difficult to locate", "More localised"],
        },
        {
          id: 5,
          ques: "Is the tooth becoming more sensitive to pressure or sharp pain on biting?",
          options: ["Yes", "No"],
        },
        {
          id: 6,
          ques: "Has the tooth been restored before by a dentist?",
          options: ["Yes", "No"],
        },
        {
          id: 7,
          ques: "Is this a broken tooth/hole present? ",
          options: ["Yes", "No"],
        },
        {
          id: 8,
          ques: "Do you clench or grind your teeth a lot?",
          options: ["Yes", "No"],
        },
        {
          id: 9,
          ques: "Which picture best depicts your swelling (if any)?",
          options: [
            {id: 0,
              img: "img-1.jpg",
              answer: "Acute apical abscess",
            },
            {id: 1,
              img: "img-2.jpg",
              answer: "Lateral periodontal abscess",
            },
            {id: 2,
              img: "img-3.jpg",
              answer: "Pericorinits - Wisdom tooth",
            },
            "No Swelling",
          ],
        },
      ],
      key: "DENTAL_PAIN",
    },
    {
      JawAche: [
        {
          id: 0,
          ques: "Do you have any of the below symptoms ?",
          options: [
            "Dull throbbing pain around your jaw joint",
            "Dull throbbing pain in or around your ear",
            "Painful clicking on opening/closing of your mouth",
            "Limited mouth opening",
            "Aware of grinding/clenching your teeth",
            "Dull throbbing pain around your jaw joints that is worse in the morning",
            "Pain radiates up from jaw to you’re temple region giving you headaches",
          ],
        },
      ],
      key: "JawAche",
    },
    {
      Headaches: [
        {
          id: 0,
          ques: "Do you feel a constant dull ache behind your eye or in your cheekbones/forehead or bridge of nose?",
          options: ["Yes", "No"],
        },
        {
          id: 1,
          ques: "Does the pain get worse when you move your head suddenly?",
          options: ["Yes", "No"],
        },
        {
          id: 2,
          ques: "Are you experiencing a runny nose?",
          options: ["Yes", "No"],
        },
        {
          id: 3,
          ques: "Is the nasal discharge clear or discoloured?",
          options: ["Clear", "Discoloured"],
        },
        {
          id: 4,
          ques: "Are your headaches very severe or ongoing?",
          options: ["Yes", "No"],
        },
      ],
      key: "Headaches",
    },
    {
      Ulcers: [
        {
          id: 0,
          ques: " Is the sore area similar to the appearance of the above picture? (Circular red outer ring with white/yellow/grey center)",
          options: ["Yes", "No"],
        },
      ],
      key: "Ulcers",
    },
  ];
  