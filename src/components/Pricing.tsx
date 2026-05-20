import Link from "next/link";
import styles from "./Pricing.module.css";

const plans = [
  {
    icon: "\ud83d\udc31",
    title: "单次体验",
    price: "¥128",
    period: "/ 次",
    features: ["基础清洁全套", "指甲修剪", "耳道清洁", "梳毛护理"],
    featured: false,
  },
  {
    icon: "\ud83d\udc36",
    title: "会员月卡",
    price: "¥399",
    period: "/ 月",
    features: [
      "含4次基础清洁",
      "1次精致美容",
      "优先预约通道",
      "宠物零食礼包",
    ],
    featured: true,
  },
  {
    icon: "\ud83d\udc3e",
    title: "尊享年卡",
    price: "¥3,680",
    period: "/ 年",
    features: [
      "全年不限次基础清洁",
      "12次精致美容",
      "4次尊享SPA",
      "生日派对布置",
      "紧急护理上门",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className={`section ${styles.pricing}`} id="pricing">
      <div className="section-inner">
        <span className="section-label">Pricing</span>
        <h2 className="section-title">透明价格套餐</h2>
        <p className="section-desc">
          没有隐藏费用，每一分钱都花在毛孩子身上。
        </p>
        <div className={styles.pricingGrid}>
          {plans.map((plan) => (
            <div
              className={`${styles.pricingCard} ${
                plan.featured ? styles.featured : ""
              }`}
              key={plan.title}
            >
              {plan.featured && (
                <div className={styles.featuredBadge}>\ud83c\udf89 人气推荐</div>
              )}
              <div className={styles.pricingIcon}>{plan.icon}</div>
              <h3>{plan.title}</h3>
              <div className={styles.price}>
                {plan.price}
                <span>{plan.period}</span>
              </div>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link href="#contact" className="btn-primary">
                立刻购买
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
