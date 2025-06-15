
const salonTabArr = [
  {
    isLocked: 0,
    name: "Clients",
    image: "/statics/salontabs/clients.svg",
    row: 1,
    route: "/myclient"
  },
  {
    isLocked: 0,
    name: "Consultations",
    image: "/statics/salontabs/consultations.svg",
    row: 3,
    route: "/consultation"
  },
  {
    isLocked: 0,
    name: "Video Consultations",
    image: "/statics/salontabs/videoconsult.svg",
    row: 3,
    route: "/schedule"
  },
  {
    isLocked: 0,
    name: "Pre & Post Treatment Care",
    image: "/statics/salontabs/post_care.png",
    row: 1,
    class: "col-lg-4",
    route: "/pre-care"
  },
  {
    isLocked: 0,
    name: "Forum",
    image: "/statics/salontabs/forum.svg",
    row: 2,
    route: "/forumhome"
  },
  {
    isLocked: 0,
    name: "Settings",
    image: "/statics/salontabs/setting.svg",
    row: 2,
    class: "col-lg-4",
    route: "/mydetails"

  },
  {
    isLocked: 0,
    name: "Help & Contact",
    image: "/statics/salontabs/help&support.png",
    row: 1,
    route: "/help-support"
  },
  // {
  //   isLocked: 0,
  //   name: "Schedule",
  //   image: "/statics/salontabs/schedule.svg",
  //   row: 1,
  //   route: "/schedule"
  // },
  // {
  //   isLocked: 0,
  //   name: "Contraindication Search",
  //   image: "/statics/salontabs/Search.svg",
  //   row: 1,
  //   route: "/search"
  // },



  // {
  //   isLocked: 0,
  //   name: "My Salon",
  //   image: "/statics/salontabs/salon.svg",
  //   row: 1,
  //   class: "col-lg-4",
  //   route: "/myaccount"
  // },


  // {
  //   isLocked: 0,
  //   name: "Payments & Invoices",
  //   image: "/statics/salontabs/Payments.svg",
  //   row: 2,
  //   route:"/invoices"
  // },
  // {
  //   isLocked: 1,
  //   name: "Staff Members",
  //   image: "/statics/salontabs/clients.svg",
  //   row: 2,
  //   class: "col-lg-4",
  //   route: "/staff_overview"
  // },




  // {
  //   isLocked: 1,
  //   name: "Manage Services",
  //   image: "/statics/salontabs/manageservice.svg",
  //   row: 3,
  //   route:"/myclient"
  // },
  // {
  //   isLocked: 1,
  //   name: "Salon Appointments",
  //   image: "/statics/salontabs/salonappoint.svg",
  //   row: 3,
  //   class: "col-lg-4",
  //   route: "/Schedule"
  // },
];


const salonTabSecArr = [
  [
    {
      isLocked: 0,
      name: "Contraindication Search",
      image: "/statics/salontabs/Search.svg",
      row: 1,
      route: "/search"
    },
    {
      isLocked: 0,
      name: "All Clients",
      image: "/statics/salontabs/clients.svg",
      row: 1,
      route: "/myclient"
    },
    {
      isLocked: 0,
      name: "Schedule",
      image: "/statics/salontabs/schedule.svg",
      row: 1,
      route: "/schedule"
    },
    // {
    //   isLocked: 0,
    //   name: "My Salon",
    //   image: "/statics/salontabs/salon.svg",
    //   row: 1,
    //   class: "col-lg-4",
    //   route: "/search"
    // },
  ],

  [
    // {
    //   isLocked: 0,
    //   name: "Payments & Invoices",
    //   image: "/statics/salontabs/wallet.svg",
    //   row: 2,
    //   route:"/invoices"
    // },
    {
      isLocked: 0,
      name: "Forum",
      image: "/statics/salontabs/forum.svg",
      row: 2,
      route: "/forumhome"
    },
    [
      {
        isLocked: 0,
        name: "Settings",
        image: "/statics/salontabs/setting.svg",
        row: 2,
        class: "col-lg-4",
        route: "/consultation"
      },
      {
        isLocked: 1,
        name: "Staff Members",
        image: "/statics/salontabs/clients.svg",
        row: 2,
        class: "col-lg-4",
        route: "/staff_overview"
      },
    ]
  ],
  [
    {
      isLocked: 1,
      name: "Consultations",
      image: "/statics/salontabs/consultations.svg",
      row: 3,
      route: "/consultation"
    },
    {
      isLocked: 1,
      name: "Video Consultations",
      image: "/statics/salontabs/videoconsult.svg",
      row: 3,
      route: "/myclient"
    },
    // {
    //   isLocked: 1,
    //   name: "Manage Services",
    //   image: "/statics/salontabs/manageservice.svg",
    //   row: 3,
    //   route:"/myclient"
    // },
    // {
    //   isLocked: 1,
    //   name: "Salon Appointments",
    //   image: "/statics/salontabs/salonappoint.svg",
    //   row: 3,
    //   class: "col-lg-4",
    //   route: "/Schedule"
    // },
  ]
];

module.exports = {
  salonTabArr,
  salonTabSecArr
};
