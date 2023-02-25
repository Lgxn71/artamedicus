import TitleEyebrow from "@/components/TitleEyebrow/TitleEybrow";
import Container from "@/components/UI/Container/Container";
import styles from "./AboutTheTeam.module.css";
const AboutTheTeam = () => {
  return (
    <Container>
      <TitleEyebrow
        eyebrowText="узнайте нас лучше"
        titleText="Сохраняем здоровье,опираясь на научный подход"
        paragraph="Решение проблемы пациента – то, к чему мы всегда стремимся."
      />
      <div className={styles['video-container']}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};
export default AboutTheTeam;
