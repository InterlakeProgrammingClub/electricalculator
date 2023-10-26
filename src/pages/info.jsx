import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import styles from "@/styles/Info.module.css";

export default function Info() {
  const show = (event) => {
    debugger;
    const style = document.getElementById("text" + event.target.id).style;
    style.display = style.display == "none" ? "block" : "none";
  };

  useEffect(() => {
    let counter = 0;
    for (const node of document.getElementsByClassName(
      styles.accordianWrapper
    )) {
      node.childNodes[0].id = counter;
      debugger;
      node.childNodes[0].childNodes[0].id = counter;
      node.childNodes[0].childNodes[1].id = counter;
      node.childNodes[0].childNodes[2].id = counter;
      node.childNodes[1].id = "text" + counter;
      node.childNodes[1].style.display = "none";
      counter++;
    }
  });

  return (
    <>
      <Header title="Info | InterlakeClubs" />
      <main>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.aboutContainer}>
            <h1>About Us</h1>
            <p>
              Interlake is a high school that exists on earth. In the high
              school contains a bunch of kids who wanted to do things that
              aren&apos;t included in the school curriculum. Therefore people
              started what we call clubs do get together and do something they
              all like. One particular club, the Interlake Programming Club,
              decided to start a small website to display all the clubs that one
              can join in interlake. I don&apos;t know much about this website,
              but it seems pretty similar to the one you are on right now.
            </p>
          </div>

          <div className={styles.faqWrapper}>
            <h1>FAQs</h1>
            <div className={styles.faqContainer} id="faqContainer">
              <div className={styles.accordianWrapper}>
                <div className={styles.faqAccordian} onClick={show}>
                  <p style={{"textAlign":'left'}}>+</p>

                  <p className={styles.faqTitle}>How do I join a club?</p>
                  <p>+</p>
                </div>
                <p>
                  On the clubs page, there are multiple clubs that you can join.
                  If you click on one that seems intresting, it should give you
                  information about which room that club is in and what time.
                  Just go into the club at that time and see if they accept you.
                  If they yell at you to get out and sign up a different way,
                  tell us in the <Link href="/contact">Contact Us</Link> page
                </p>
              </div>
              <div className={styles.accordianWrapper}>
                <div className={styles.faqAccordian} onClick={show}>
                  <p>+</p>

                  <p className={styles.faqTitle}>
                    {" "}
                    How do I know what club to join?
                  </p>
                  <p>+</p>
                </div>
                <p>
                  On the clubs page, there are descriptions of the many clubs
                  offered at Interlake. Just read the descriptions and see which
                  one looks interesting to you.
                </p>
              </div>
              <div className={styles.accordianWrapper}>
                <div className={styles.faqAccordian} onClick={show}>
                  <p>+</p>

                  <p className={styles.faqTitle}> Why should I join a club?</p>
                  <p>+</p>
                </div>
                <p>
                  It&apos;s fun? Usually people join clubs to get together with
                  people who have the same interest as themselves, however if
                  you are asking this question you probably don&apos;t know what
                  you are passionate about. In that case... get a life.
                </p>
              </div>
              <div className={styles.accordianWrapper}>
                <div className={styles.faqAccordian} onClick={show}>
                  <p>+</p>

                  <p className={styles.faqTitle}>
                    Why is this page so horribly designed?
                  </p>
                  <p>+</p>
                </div>
                <p>Hey, that&apos;s not nice</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
