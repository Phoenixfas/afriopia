const events = [
  {
    id: "1",
    name: "Hackathon",
    image: "/images/events/tracks/hackathon.jpg",
    category: "tts",
    date: "March 10 - 12",
    desc: "Hackathon is an event where people come together to work on and build software projects within a specific niche under the constraint of several hours.",
    location: "Ethiopian Science Museum",
    fee: "--",
    register: {
      route: "hackathon",
      name: "Hackathon",
    },
    includes: [
      
    ],
    long_desc: `You're invited to participate in the Tech Trade Show Hackathon, an exciting event where developers, designers, and entrepreneurs come together to create innovative solutions to real-world problems. This is an opportunity to showcase your skills, network with industry leaders, and possibly win prizes.

    The Hackathon will take place during the Tech Trade Show, a conference and exhibition that brings together the latest technology and industry experts. The theme of the Hackathon is "Innovating for the Future" and we encourage participants to think outside the box and come up with creative solutions to the challenges facing our world today.
    
    Participants will have 24 hours to work on their projects, with access to mentorship and resources from industry experts. At the end of the Hackathon, teams will present their projects to a panel of judges, with the top teams winning cash prizes and the opportunity to showcase their work at the Tech Trade Show.
    
    If you're a developer, designer, or entrepreneur with a passion for innovation and a desire to make a difference, we invite you to join us for this exciting event.`,
  },
  {
    id: "2",
    name: "Google Workshop",
    image: "/images/events/tracks/workshop.jpg",
    category: "tts",
    date: "March 10 - 12",
    desc: "Workshop is an intensive space at which a group of people engage in technical hands-on practices on a particular subject or project.",
    location: "Ethiopian Science Museum",
    fee: "--",
    register: {
      route: "workshop",
      name: "Workshop",
    },
    includes: [
      {
        id: "3",
        name: "Flutter",
        image: "/images/events/tracks/includes/flutter.png",
      },
      {
        id: "4",
        name: "Firebase",
        image: "/images/events/tracks/includes/firebase.png",
      },
      {
        id: "5",
        name: "Tensorflow",
        image: "/images/events/tracks/includes/tensorflow.png",
      },
      {
        id: "6",
        name: "Google Cloud Platform",
        image: "/images/events/tracks/includes/google-cloud.png",
      },
    ],
    long_desc: `You are cordially invited to participate in the Tech Trade Show Google Workshop, an educational and interactive experience that will provide you with a deep dive into the latest tools and technologies from Google.

    The workshop will take place during the Tech Trade Show, a premier conference and exhibition that brings together the latest technology and industry experts. The theme of the workshop is "Empowering the Future with Google Technologies" and will focus on providing attendees with hands-on experience and knowledge of various Google products and services that are shaping the future of technology.
    
    Throughout the workshop, attendees will have the opportunity to participate in interactive sessions led by Google experts. You'll learn about the latest developments in artificial intelligence, machine learning, cloud computing, and more. You'll also be able to participate in Q&A sessions, network with industry leaders and peers, and gain valuable insights and tips from experts on how to maximize the potential of Google technologies.`
  },
  {
    id: "3",
    name: "Business Corner",
    image: "/images/events/tracks/BC.jpg",
    category: "tts",
    date: "March 10 - 12",
    desc: "Business launch introduces new businesses, startups, tech companies and techpreneurs to the public sphere. Business launch introduces new businesses, startups, tech companies and techpreneurs to the public sphere.",
    location: "Ethiopian Science Museum",
    fee: "--",
    includes: [
      
    ],
    long_desc: `The Tech Trade Show Business Corner is a valuable opportunity for business owners and entrepreneurs. Attendees can take advantage of the chance to network with industry leaders and peers, connect with potential partners and clients, and gain valuable insights and tips from experts on how to leverage technology to drive business success. They'll also stay up-to-date on the latest trends and technologies that are shaping the future of business and can understand how technology can be leveraged to take their business to the next level. Additionally, the Business Corner provides an opportunity for attendees to showcase their business, products, or services to a wide range of attendees and possibly win prizes. Overall, the Business Corner is an exclusive networking and learning experience that provides attendees with the knowledge and resources they need to succeed in today's rapidly changing business landscape.`
  },
  {
    id: "4",
    name: "LAN Party",
    image: "/images/events/tracks/LANP.jpg",
    category: "tts",
    date: "March 10 - 12",
    desc: "LAN party is where interested gamers come together to play video games and compete for great prizes.",
    location: "Ethiopian Science Museum",
    fee: "--",
    register: {
      route: "lanparty",
      name: "LAN Party",
    },
    includes: [
      
    ],
    long_desc: `You are cordially invited to participate in the Tech Trade Show LAN Party, an exciting event where gamers and technology enthusiasts come together to play and compete in the latest games. This is an opportunity to showcase your skills, network with other players, and possibly win prizes.

    The LAN Party will take place during the Tech Trade Show, a conference and exhibition that brings together the latest technology and industry experts. The theme of the LAN Party is "Gaming and Technology" and we encourage participants to come together and enjoy the latest games, while also learning about the technology and innovations that make it possible.
    
    Participants will have access to a variety of games, from the latest and greatest titles to classic favorites. Attendees will also have the opportunity to participate in tournaments, with cash prizes for the top players. There will also be a variety of hardware and software vendors showcasing the latest technology for gaming. Attendees can learn about new hardware, software, and other technology that is advancing the gaming industry.`
  },
  {
    id: "5",
    name: "Capture the Flag",
    image: "/images/events/tracks/CTF.jpg",
    category: "tts",
    date: "March 10 - 12",
    desc: "Capture the flag is a contest where many teams compete to find bugs and issues in a system/sandbox, which may also include white hacking and more.",
    location: "Ethiopian Science Museum",
    fee: "--",
    register: {
      route: "ctf",
      name: "Capture the Flag",
    },
    includes: [
      
    ],
    long_desc: `You are invited to participate in the Tech Trade Show CTF (Capture The Flag), an exciting event where security professionals and enthusiasts come together to test and showcase their skills in ethical hacking and cyber security. This is an opportunity to challenge yourself, learn from others, and possibly win prizes.

    The CTF event will take place during the Tech Trade Show, a conference and exhibition that brings together the latest technology and industry experts. The theme of the CTF event is "Securing the Future" and we encourage participants to come together and test their skills in identifying and mitigating various cyber security threats.
    
    Participants will have access to a variety of challenges and scenarios, designed to test their knowledge and skills in identifying and mitigating cyber security threats. The challenges will be based on real-world scenarios and will test participants' abilities in areas such as web application security, network security, cryptography and more. The event will also feature a leaderboard where participants can track their progress and compare their scores with other participants.
    
    At the end of the event, top-performing participants will be awarded prizes and recognition for their efforts. Additionally, there will be workshops, talks, and Q&A sessions where attendees can learn from experts in the field, and discuss the current challenges and trends in cyber security.
    
    If you're a security professional, enthusiast, or just looking to improve your knowledge in cyber security, we invite you to join us for this exciting event.`
  },
  {
    id: "6",
    name: "Food Corner",
    image: "/images/events/tracks/FC.jpg",
    category: "tts",
    date: "March 10 - 12",
    desc: "Food corner is an area within the Tech Trade Show where food and drink are available for attendees and that fosters fireside chit-chats and networking.",
    location: "Ethiopian Science Museum",
    fee: "--",
    includes: [
      
    ],
    long_desc: `The Tech Trade Show Food Corner is an exciting addition to the event, providing attendees with a delicious and diverse range of food options to enjoy throughout the event. The Food Corner will feature a wide variety of cuisines and dietary options to cater to different tastes and preferences.

    The Food Corner will feature a mix of food trucks, vendors, and local restaurants, offering attendees a diverse selection of food options to choose from. Attendees can expect to find a variety of options such as sandwiches, fresh fruits, authentic street foods, delicious curries, and more. There will also be options for attendees with dietary restrictions, including vegetarian, vegan, and gluten-free options.
    
    The Food Corner is designed to provide a convenient and enjoyable experience for attendees, allowing them to grab a quick bite or sit down and enjoy a meal while taking a break from the conference. The area will be designed with seating and tables, and attendees can take a break and enjoy the food while networking with other attendees.
    
    In addition to the food, the Food Corner will also feature a variety of beverages such as soft drinks, water, coffee, and tea.`
  },
  {
    id: "7",
    name: "Creative Corner",
    image: "/images/events/tracks/CC.jpg",
    category: "tts",
    date: "March 10 - 12",
    desc: "Creative corner is an area where attendees can engage in creative activities such as art or crafts and more engaging hobbies.",
    location: "Ethiopian Science Museum",
    fee: "--",
    includes: [
      
    ],
    long_desc: `The Tech Trade Show Creative Corner is an exciting addition to the event, providing attendees with a comfortable and inspiring space to explore their creativity and connect with like-minded individuals. The Creative Corner will feature a variety of activities and demonstrations that will inspire and engage attendees, as well as comfortable bean bag chairs for attendees to relax and enjoy the experience while working on their laptops.

    Attendees can expect to find a variety of activities such as art and craft stations, interactive games, and challenges. They can also enjoy the work of talented artists and creators on display and engage in creative challenges, with prizes for the most innovative and inspiring work. All while lounging on the bean bag chairs and working on their laptops, attendees can also connect with other creative individuals, share ideas and be inspired by the work of others.
    
    The Creative Corner is designed to provide a comfortable and casual environment for attendees to explore their creativity, work on their personal or professional projects and connect with other attendees who share their interests.`
  },
  {
    id: "8",
    name: "Panel Discussion",
    image: "/images/events/tracks/PD.jpg",
    category: "tts",
    date: "March 10 - 12",
    desc: "Panel discussion is a public meeting at which experts in a particular field engage in a structured discussion about a particular topic.",
    location: "Ethiopian Science Museum",
    fee: "--",
    includes: [
      
    ],
    long_desc: `The Tech Trade Show Panel Discussion is an exciting addition to the event, providing attendees with the opportunity to hear from industry experts and thought leaders on a variety of topics related to technology and innovation. The Panel Discussion will feature a diverse group of panelists who will share their insights, experiences, and perspectives on current and emerging trends in the tech industry.

    The Panel Discussion will cover a wide range of topics such as the future of AI, the impact of technology on society, the future of work and more. Attendees will have the opportunity to hear from experts in their field, ask questions, and gain insights into the current and future state of the tech industry.
    
    The Panel Discussion will be moderated by a seasoned moderator who will guide the discussion and ensure that the panelists stay on topic and provide valuable insights to the attendees. The moderator will also encourage attendees to ask questions and participate in the discussion.
    
    The Panel Discussion is an excellent opportunity for attendees to learn from industry leaders and experts, and gain valuable insights into the current and future state of the tech industry. It's also an opportunity for attendees to connect with like-minded individuals and exchange ideas and perspectives on the latest trends in technology and innovation.
    
    We look forward to welcoming you to the Tech Trade Show Panel Discussion and hope you enjoy your time at the event!`
  },
  {
    id: "9",
    name: "Tech Booths & Exhibitions",
    image: "/images/events/tracks/booth.jpg",
    category: "tts",
    date: "March 10 - 12",
    desc: " take your brand to the next level with our vending booths! These sleek and modern booths are perfect for showcasing your latest products and services at the biggest tech trade show in Ethiopia.",
    location: "Ethiopian Science Museum",
    fee: "--",
    register: {
      route: "participate",
      name: "Exhibit",
    },
    includes: [
      
    ],
    long_desc: `The Tech Trade Show Tech Booth & Exhibition is an exciting addition to the event, providing attendees with an opportunity to see the latest technology and innovation in action. The Tech Booth & Exhibition will feature a variety of vendors and exhibitors, showcasing the latest products, services and technologies across a wide range of industries.

    Attendees will have the chance to explore the latest advancements in their field and get a glimpse into what the future holds. Attendees will have access to a variety of vendors, from large companies to small startups, showcasing their latest products and services. They can learn about new hardware, software, and other technology that is advancing the industry. Attendees can also interact with the technology and products on display, get demonstrations and even have the opportunity to test some of the products.
    
    In addition to the exhibits, the Tech Booth & Exhibition will also feature a variety of networking and educational opportunities. Attendees can meet with industry experts, ask questions, and gain valuable insights into the latest trends and technologies. There will also be opportunities for attendees to connect with other industry professionals, learn about new products and services, and explore new business opportunities.
    
    The Tech Booth & Exhibition is an ideal opportunity for attendees to stay up-to-date on the latest advancements in their field, connect with industry professionals, and explore new products and services. It's an event that will inspire, educate and connect attendees with the most innovative technology and products.`
  },
];

export default events;
