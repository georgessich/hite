import classes from "./About.module.scss";

const postsFirst = [
  {
    title: "Good for people",
    text: "We support excellent design everywhere, from locally to globally. This entails assisting the people who created your goods through moral production, worker welfare, and economic effect.",
    img: "https://i.imgur.com/TaAWhwy.jpg",
  },
  {
    title: "Local",
    text: "We support the maker movement locally to support budding local economies and artists and designers, particularly in disadvantaged areas.",
    img: "https://i.imgur.com/CtIhPtl.jpg",
  },
];
const postsSecond = [
  {
    title: "Handcrafted",
    text: "We work with artisan groups all over the world to support the preservation of their handicraft traditions and the development of viable employment prospects, particularly in rural areas.",
    img: "https://i.imgur.com/jitb14M.jpg",
  },
  {
    title: "Good Trade",
    text: "We joined Fair Trade USA as the first home retailer ever, ensuring that workers receive fair wages, wholesome working conditions, and community development.",
    img: "https://i.imgur.com/ULLKzJ2.jpg",
  },
];

const About = () => {

  return (
    <div>
      <div className={classes["about__hero"]}>
        <h2 className={classes["about__hero-title"]}>
          About hite
        </h2>
      </div>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", margin:"50px", gap:"50px"}}>
        {postsFirst.map((item) => (
          <div className={classes["about__post"]}>
            <img
              className={classes["about__post-img"]}
              src={item.img}
              alt={item.title}
            />
            <span className={classes["about__post-title"]}>{item.title}</span>
            <p className={classes["about__post-text"]}>{item.text}</p>
          </div>
        ))}
        <span className={classes["about__quote"]}>
          "At hite, we employ design to make things better for the planet, our local areas, and you. Today, 60% of our product sales support at least one of our sustainability projects, and we’re doing more every day."
        </span>
        {postsSecond.map((item) => (
          <div className={classes["about__post"]}>
            <img
              className={classes["about__post-img"]}
              src={item.img}
              alt={item.title}
            />
            <span className={classes["about__post-title"]}>{item.title}</span>
            <p className={classes["about__post-text"]}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
