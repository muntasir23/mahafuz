import pedu from "../../assets/peducation.jpg";
import pmoney from "../../assets/pmoneymap.jpg";
import pdars from "../../assets/pdars.jpg";
import ptodo from "../../assets/ptodo.jpg";
import pflight from "../../assets/pflight.jpg";
import pmath from "../../assets/pmathbook.jpg";
import pamaderShop from "../../assets/pamaderShop.jpg";
import pbooklify from "../../assets/pbooklify.jpg";
import pquizer from "../../assets/pQuizer.jpg";
import pminiplayer from "../../assets/pminiplayer.jpg";

export const projects = [
  {
    id: 1,
    name: "Money Map",
    description: (
      <p>
        Money Map is a user-friendly app designed to help individuals track
        their financial transactions and set customized budgets. Users can
        <span className="font-bold text-white"> create an account </span>to
        securely manage and monitor their daily, weekly, and monthly spending.
        The app offers seamless{" "}
        <span className="font-bold text-white"> transaction tracking</span>,
        allowing users to log expenses and view their financial activity in real
        time. With built-in budgeting tools, users can{" "}
        <span className="font-bold text-white"> set spending limits for </span>
        different timeframes, ensuring they stay within their financial goals.
        The app automatically calculates and provides insights into spending
        patterns, making it an essential tool for anyone looking to gain control
        over their finances and make informed financial decisions.
      </p>
    ),
    technology: ["Firebase", "Next.js", "Tailwind"],
    imgUrl: pmoney,
    note: "This site is in under development process. You can check the code base in the refference section and also can visite the site",
    gitlink: "https://github.com/muntasir23/moneymap",
    sitelink: "https://moneymap-gules.vercel.app/",
  },
  {
    id: 2,
    name: "Educational Dashboard",
    description: (
      <p>
        The Education Dashboard is a comprehensive platform designed to manage
        various administrative tasks for educational institutions. It includes
        features like{" "}
        <span className="font-bold text-white"> notice uploadation</span>,
        enabling administrators to post important announcements. The dashboard
        also supports{" "}
        <span className="font-bold text-white">multiple file uploads</span>,
        allowing users to efficiently handle large volumes of data. The
        <span className="font-bold text-white"> gallery system</span> provides a
        space for managing and displaying images, while the{" "}
        <span className="font-bold text-white"> teacher details upload </span>{" "}
        teacher details upload feature helps in organizing and updating staff
        information. Additionally, the platform streamlines
        <span className="font-bold text-white"> routine management </span> ,
        making it easier to schedule and update class timetables.
      </p>
    ),
    technology: ["Firebase", "Firestore", "React"],
    imgUrl: pedu,
    note: "This site is currently in progress. Since it is an internal dashboard, it cannot be accessed externally, but the code base is available for review.",
    gitlink: "https://github.com/muntasir23/peducation",
    sitelink: null,
  },
  {
    id: 3,
    name: "Flight Booking",
    description:
      "It is simple flight booking app using Redux for state management.",
    technology: ["React", "Redux", "Tailwind CSS"],
    imgUrl: pflight,
    note: null,
    gitlink: "https://github.com/muntasir23/flightBooking",
    sitelink: "https://flight-booking-gamma.vercel.app/",
  },
  {
    id: 4,
    name: "Math Books",
    description:
      "A basic website created by raw HTML, CSS and JS. You can add product in the cart can also increase and decrease the quantity. Used Local storage for saving the data.",
    technology: ["HTML", "CSS", "JS"],
    imgUrl: pmath,
    note: null,
    gitlink: "https://github.com/muntasir23/mathbooks",
    sitelink: "https://beamish-salmiakki-d4f6f4.netlify.app/",
  },
  {
    id: 5,
    name: "Todo App",
    description: (
      <p>
        The To-Do Application offers a robust platform for task management,
        allowing users to add new to-do items and track their progress
        efficiently. With features like{" "}
        <span className="font-bold text-white">marking tasks as completed</span>{" "}
        and the ability to{" "}
        <span className="font-bold text-white"> assign color marks</span>, users
        can easily organize and prioritize their tasks visually. The app
        includes options to delete tasks and filter items based on color and
        status (completed or incomplete), enhancing user experience. By
        utilizing <span className="font-bold text-white">Redux </span>for state
        management, the app ensures seamless data flow and responsive
        interactions, making task management straightforward and enjoyable.
      </p>
    ),
    technology: ["React", "Redux", "Tailwind"],
    imgUrl: ptodo,
    note: null,
    gitlink: "https://github.com/muntasir23/todolister",
    sitelink: "https://todolister-one.vercel.app/",
  },
  {
    id: 6,
    name: "Dars For Youth",
    description: (
      <p>
        <span className="font-bold text-white">Dars for Youth </span>is a
        dynamic two-vendor website built to facilitate both administrative and
        client interactions. The
        <span className="font-bold text-white"> admin dashboard </span>allows
        for full content management, including the ability to post blogs and
        update employee details. On the client side, users have
        <span className="font-bold text-white"> read-only access </span> to
        content, ensuring streamlined information delivery. The site features
        engaging animations using Framer Motion, enhancing the user experience
        with fluid transitions and interactions. Data storage is managed with
        Firebase, ensuring real-time updates and secure storage of all user and
        content data.
      </p>
    ),
    technology: ["React.js", "CSS", "Firebase", "Framer Moition"],
    imgUrl: pdars,
    note: "We can't share the code base due to some restriction from our client",
    gitlink: "",
    sitelink: "https://darsforyouth.org/",
  },
  {
    id: 7,
    name: "Amader Shop",
    description:
      "Amader Shop is an intuitive shopping application designed to enhance the online shopping experience. Users can easily add products to their cart, and adjust quantities as needed. The app features real-time updates; when users increase or decrease the number of items in their cart, the stock quantity is adjusted accordingly. If the stock for a product reaches zero, the app prevents further additions, ensuring accurate inventory management. This functionality not only streamlines the shopping process but also provides users with an efficient way to manage their purchases.",
    technology: ["React", "Redux", "Tailwind"],
    imgUrl: pamaderShop,
    note: null,
    gitlink: "https://github.com/muntasir23/amaderShop",
    sitelink: "https://amader-shop.vercel.app/",
  },
  {
    id: 8,
    name: "Mini Player",
    description: (
      <p>
        Mini Player is a streamlined video platform reminiscent of YouTube,
        built with <span className="font-bold text-white"> Redux Toolkit</span>{" "}
        for advanced state management. The application fetches data from a{" "}
        <span className="font-bold text-white">
          {" "}
          fake database using JSON server
        </span>
        , enabling a responsive and dynamic user experience. Users are greeted
        with a video grid on the home page, making it easy to browse content.
        Each video has its own dedicated page, where viewers can explore
        detailed descriptions and related videos are suggested for further
        engagement. The app also features advanced{" "}
        <span className="font-bold text-white">
          {" "}
          search and filtering options
        </span>
        , allowing users to quickly find videos based on their interests,
        enhancing the overall usability and enjoyment of the platform.
      </p>
    ),
    technology: ["React", "Redux Toolkit", "Tailwind"],
    imgUrl: pminiplayer,
    note: "This site data loading might be slow due to using free hosting for API calling",
    gitlink: "https://github.com/muntasir23/mini-player",
    sitelink: "https://mini-player-iota.vercel.app/",
  },
  {
    id: 9,
    name: "Booklify",
    description:
      "Booklify is an online bookstore application designed with Redux Toolkit for seamless state management. Users can easily add books to the collection, categorize them as featured, and filter the displayed books based on this feature. The platform also includes a robust search function, enabling users to find specific titles quickly. Additionally, Booklify allows users to edit book data, providing a flexible and dynamic experience for managing book inventories.",
    technology: ["React", "Redux Toolkit", "Tailwind"],
    imgUrl: pbooklify,
    note: "Since the application relies on a JSON server and localhost for API calls, it is not hosted, meaning the site isn’t accessible online. This setup serves as a demonstration of local development processes and dynamic state management.",
    gitlink: "https://github.com/muntasir23/booklist",
    sitelink: "https://booklist-blush.vercel.app/",
  },
  
  {
    id: 10,
    name: "Quizer",
    description:
      "Quizer is a comprehensive quiz application where users can create an account, participate in quizzes, and receive real-time scores. The app features an analysis page that helps users review their performance and gain insights into their strengths and areas for improvement. In addition to its quiz functionality, the platform also integrates a mini player, allowing users to watch videos while engaging with the content. This combination of interactive learning and video support makes Quizer a versatile tool for educational and entertainment purposes.",
    technology: ["Firebase", "React"],
    imgUrl: pquizer,
    note: "We cannot share the code base due to some restriction.",
    gitlink: null,
    sitelink: "https://lucky-phoenix-b6f70d.netlify.app/",
  },
];
