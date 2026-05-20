"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [buttonText, setButtonText] = useState("✔️ 提交预约");
  const [buttonStyle, setButtonStyle] = useState<React.CSSProperties>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("✅ 预约已提交!");
    setButtonStyle({ background: "linear-gradient(135deg, #4caf50, #45a049)" });
    setTimeout(() => {
      setButtonText("✔️ 提交预约");
      setButtonStyle({});
    }, 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="section" id="contact">
      <div className="section-inner">
        <span className="section-label">Contact</span>
        <h2 className="section-title">预约洗护</h2>
        <p className="section-desc">填写表单，我们会在10分钟内与您确认预约时间。</p>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.contactInfoItem}>
              <div className={styles.icon}>📍</div>
              <div>
                <h4>店铺地址</h4>
                <span>四川省资阳市安岳县时代广场</span>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.icon}>📞</div>
              <div>
                <h4>联系电话</h4>
                <span>400-888-9999</span>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.icon}>⏰</div>
              <div>
                <h4>营业时间</h4>
                <span>周一至周日 9:00 - 21:00</span>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.icon}>💬</div>
              <div>
                <h4>微信客服</h4>
                <span>zhuazhua_pet</span>
              </div>
            </div>
            <div className={styles.mapContainer}>
              <iframe
                src="https://uri.amap.com/marker?position=105.460398,30.095455&name=%E7%88%AA%E7%88%AA%E6%B4%97%E6%8A%A4%E9%A6%86"
                width="100%"
                height="220"
                style={{ border: "none", borderRadius: "16px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="地图展示 - 安岳县时代广场"
              />
            </div>
          </div>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h3>快速预约</h3>
            <div className={styles.formGroup}>
              <input type="text" placeholder="您的姓名" required />
            </div>
            <div className={styles.formGroup}>
              <input type="tel" placeholder="手机号码" required />
            </div>
            <div className={styles.formGroup}>
              <select required defaultValue="">
                <option value="" disabled>选择宠物类型</option>
                <option value="dog_small">🐶 小型犬</option>
                <option value="dog_medium">🐶 中型犬</option>
                <option value="dog_large">🐶 大型犬</option>
                <option value="cat">🐱 猫咪</option>
                <option value="other">🐰 其他</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <select required defaultValue="">
                <option value="" disabled>选择服务项目</option>
                <option value="basic">基础清洁 ¥128</option>
                <option value="premium">精致美容 ¥258</option>
                <option value="spa">尊享SPA ¥398</option>
                <option value="other">其他服务</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <input type="date" required style={{ color: "#888" }} />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="备注信息（如特殊需求、过敏情况等）"></textarea>
            </div>
            <button type="submit" className={'btn-primary ' + styles.submitBtn} style={buttonStyle}>
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
