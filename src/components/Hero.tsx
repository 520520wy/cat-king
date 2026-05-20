import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div className={styles.heroBadge}>&#x1f3e8; 新店开业 · 全场8折</div>
          <h1>
            专业宠物洗护 <em>美容</em>
            <br />
            让爱宠焕发光彩
          </h1>
          <p>
            爪爪洗护馆 — 用心呵护每一只毛孩子。资深美容师团队，纯天然洗护产品，为您的爱宠提供极致舒适的洗护体验。
          </p>
          <div className={styles.heroButtons}>
            <Link href="#contact" className="btn-primary">
              &#x1f4c5; 立即预约
            </Link>
            <Link href="#services" className="btn-outline">
              了解更多
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <svg
            className={styles.heroImg}
            viewBox="0 0 400 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="200" cy="200" r="160" fill="#fceae0" />
            <circle cx="200" cy="180" r="100" fill="#e8935a" opacity="0.15" />
            {/* Cat body */}
            <ellipse cx="200" cy="260" rx="100" ry="80" fill="#f5cba7" />
            {/* Cat head */}
            <circle cx="200" cy="160" r="65" fill="#f5cba7" />
            {/* Ears */}
            <polygon points="155,120 140,70 180,105" fill="#f5cba7" />
            <polygon points="245,120 260,70 220,105" fill="#f5cba7" />
            <polygon points="157,118 145,80 178,107" fill="#f0b892" />
            <polygon points="243,118 255,80 222,107" fill="#f0b892" />
            {/* Face */}
            <ellipse cx="180" cy="150" rx="6" ry="8" fill="#555" />
            <ellipse cx="220" cy="150" rx="6" ry="8" fill="#555" />
            <ellipse cx="200" cy="168" rx="10" ry="6" fill="#f0b892" />
            <path
              d="M192 175 Q200 185 208 175"
              stroke="#d4726a"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Whiskers */}
            <line x1="170" y1="162" x2="135" y2="156" stroke="#ccc" strokeWidth="1.5" />
            <line x1="170" y1="168" x2="133" y2="170" stroke="#ccc" strokeWidth="1.5" />
            <line x1="230" y1="162" x2="265" y2="156" stroke="#ccc" strokeWidth="1.5" />
            <line x1="230" y1="168" x2="267" y2="170" stroke="#ccc" strokeWidth="1.5" />
            {/* Paws */}
            <ellipse cx="150" cy="320" rx="25" ry="15" fill="#f5cba7" />
            <ellipse cx="250" cy="320" rx="25" ry="15" fill="#f5cba7" />
            {/* Bubble decorations */}
            <circle cx="90" cy="130" r="12" fill="#d4726a" opacity="0.2" />
            <circle cx="310" cy="110" r="8" fill="#e8935a" opacity="0.25" />
            <circle cx="330" cy="250" r="10" fill="#d4726a" opacity="0.15" />
            <circle cx="75" cy="270" r="6" fill="#e8935a" opacity="0.2" />
          </svg>
          <div className={styles.heroFloatingCard}>
            <div>
              <div className={styles.stars}>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
              <div className={styles.reviewText}>
                累计服务 <strong>2,000+</strong> 只毛孩子
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
