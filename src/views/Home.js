import React, { Fragment } from "react";
import ParallaxComponent from "../components/ParallaxComponent";
import Books from "../components/Books";
import vallageNa from "../assets/book1.jpg";
import chol from "../assets/book3.jpg";
import noman from "../assets/book2.jpg";
const Home = () => {
  const books = [
    {
      id: 3,
      name: "Bhallage Na by Ayman Sadiq and Antik Mahmud",
      description: "A book for self development with interesting comics.",
      image: vallageNa,
      buyLink: "https://www.rokomari.com/book/177051/vallage-na",
    },
    {
      id: 2,
      name: "Noman by Antik Mahmud and Oishik Jawad",
      description:
        "A comic book about this DESI superhero NOMAN, who is basically a fame seeker. He fights crime and upload the recording to YouTube so that it gets viral. One day he gets his first SUPER VILLAIN.",
      image: noman,
      buyLink: "https://www.rokomari.com/book/194545/noman",
    },
    {
      id: 1,
      name: "CHOL by Antik Mahmud",
      description:
        "Rakib’s university friend and his love interest Maleeha was missing. To find her whereabouts he made a group and went for an adventure where he finds more shocking news about his group and Maleeha. This is a soft thriller book, where you make your own story by choosing options.",
      image: chol,
      buyLink: "https://www.rokomari.com/book/195757/cholo",
    },
  ];
  return (
    <Fragment>
      <ParallaxComponent />
      <Books books={books} />
    </Fragment>
  );
};

export default Home;
