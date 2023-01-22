import styles from "./Card3DSlideUp.module.css";

/**
 * Primary UI component for user interaction
 */
export const Card3DSlideUp = ({
  coverImage,
  titleImage,
  upperImage,
  ...props
}) => {
  return (
    <>
      <a
        href="https://www.mythrillfiction.com/force-mage"
        alt="Mythrill"
        target="_blank"
      >
        <div class={styles.card}>
          <div class={styles.wrapper}>
            <img src={coverImage} class={styles.coverImage} />
          </div>
          <img src={titleImage} class={styles.title} />
          <img src={upperImage} class={styles.character} />
        </div>
      </a>
    </>
  );
};
