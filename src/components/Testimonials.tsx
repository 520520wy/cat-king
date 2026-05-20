import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "我家布偶第一次来洗澡，本来担心会应激，但美容师小姐姐超温柔，全程安抚，洗完回家一直撒娇！果断办了年卡~",
    avatar: "\ud83d\udc31",
    name: "喵星人铲屎官",
    pet: "布偶猫 · 雪球",
  },
  {
    quote:
      "柴犬掉毛季太可怕了！来做了深层护毛SPA之后掉毛明显减少，还送了护理建议，太贴心了，已经办了年卡。",
    avatar: "\ud83d\udc36",
    name: "柴犬阿黄",
    pet: "柴犬 · 阿黄",
  },
];

export default function Testimonials() {
  return (
    <section className={`section ${styles.testimonials}`} id="testimonials">
      <div className="section-inner">
        <span className="section-label">Testimonials</span>
        <h2 className="section-title">毛孩子家长的真心话</h2>
        <p className="section-desc">
          每一位家长的认可，都是我们前进的动力。
        </p>
        <div className={styles.testimonialGrid}>
          {testimonials.map((t) => (
            <div className={styles.testimonialCard} key={t.name}>
              <div className={styles.quote}>&ldquo;</div>
              <p>{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.authorAvatar}>{t.avatar}</div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorPet}>{t.pet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
