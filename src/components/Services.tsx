import styles from "./Services.module.css";

const services = [
  {
    icon: "\ud83d\udc26",
    title: "基础清洁",
    desc: "温和沐浴、吹干、梳毛、指甲修剪、耳道清洁、肛门腺护理。",
    tag: "¥128 起",
  },
  {
    icon: "\ud83d\udc8b",
    title: "精致美容",
    desc: "含基础清洁 + 专业造型修剪、毛发护理、护毛精油SPA、造型设计。",
    tag: "¥258 起",
  },
  {
    icon: "\ud83c\udf3a",
    title: "尊享SPA",
    desc: "含精致美容 + 深海泥膜护理、草本药浴、热敷按摩、香薰放松。",
    tag: "¥398 起",
  },
  {
    icon: "\ud83e\udddc",
    title: "特色护理",
    desc: "去底绒护理、深度除臭腺、药浴治疗皮肤问题、宠物手足护理。",
    tag: "到店咨询",
  },
];

export default function Services() {
  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="section-inner">
        <span className="section-label">Services</span>
        <h2 className="section-title">专业洗护服务</h2>
        <p className="section-desc">
          根据每只宠物的品种、毛发特点和身体状况，量身定制专属洗护方案。
        </p>
        <div className={styles.servicesGrid}>
          {services.map((s) => (
            <div className={styles.serviceCard} key={s.title}>
              <div className={styles.serviceIcon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className={styles.serviceTag}>{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
