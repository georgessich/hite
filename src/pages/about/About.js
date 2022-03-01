import classes from "./About.module.scss";

const postsFirst = [
  {
    title: "In sed neque iaculis, tempus.",
    text: "Vivamus metus neque, egestas at bibendum et, eleifend laoreet est. Aliquam at elit vulputate, mattis mauris at, tempus velit.",
    img: "https://i.imgur.com/TaAWhwy.jpg",
  },
  {
    title: "Etiam ex neque, euismod non.",
    text: "Nullam et nulla eu lacus pharetra faucibus vitae eleifend neque. Phasellus ullamcorper elit eget ligula tempor consequat.",
    img: "https://i.imgur.com/CtIhPtl.jpg",
  },
];
const postsSecond = [
  {
    title: "Sed tristique vestibulum nulla eget.",
    text: "Praesent neque metus, fermentum ut tortor id, fringilla viverra velit. Phasellus eget neque in justo pharetra ornare vel ultrices sem.",
    img: "https://i.imgur.com/jitb14M.jpg",
  },
  {
    title: "Vestibulum at molestie ligula, sit.",
    text: "Maecenas hendrerit orci eros, sit amet ultricies turpis pretium a. Nunc feugiat posuere lacus, in suscipit odio vestibulum in.",
    img: "https://i.imgur.com/ULLKzJ2.jpg",
  },
];

const About = () => {
  return (
    <div>
      <div className={classes["about__hero"]}>
        <h2 className={classes["about__hero-title"]}>
          about <span>hite</span>
        </h2>
        <h3 className={classes["about__hero-subtitle"]}>
          We believe that great design should be available to everyone. Want to
          know more?
        </h3>
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
          "Sed eu eros ornare justo sodales tempus non sit amet sapien. Nulla in
          molestie ligula, eget rutrum purus. Suspendisse potenti."
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
