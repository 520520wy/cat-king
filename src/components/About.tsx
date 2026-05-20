import styles from "./About.module.css";

const stats = [
  { number: "5,000+", label: "服务宠物" },
  { number: "99.7%", label: "好评率" },
  { number: "8 年", label: "行业经验" },
  { number: "15 人", label: "专业团队" },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="section-inner">
        <span className="section-label">About</span>
        <h2 className="section-title">关于爪爪洗护馆</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h3>\ud83d\udc3e 用心呵护每一只毛孩子</h3>
            <p>
              爪爪洗护馆成立于2016年，是资阳地区领先的宠物洗护美容品牌。我们拥有经验丰富的美容师团队，所有美容师均持有NGKC或CKU认证资格证书。
            </p>
            <p>
              我们坚持使用纯天然、无刺激的进口洗护产品，针对不同品种、不同肤质的宠物定制专属护理方案。店内配备专业美容设备，设有独立的猫犬洗护区，确保每一只毛孩子都能在舒适、放松的环境中享受洗护服务。
            </p>
            <p>
              不只是洗护，更是爱与关怀的传递。
            </p>
          </div>
          <div className={styles.stats}>
            {stats.map((s) => (
              <div className={styles.statCard} key={s.label}>
                <div className={styles.statNumber}>{s.number}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
