import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <div className={styles.footerLogo}>
            &#x1f43e; 爪爪洗护馆
          </div>
          <p>
            用心呵护每一只毛孩子
            <br />
            让爱宠在舒适与放松中绽放美丽。
          </p>
        </div>
        <div>
          <h4>快速链接</h4>
          <ul>
            <li>
              <Link href="#services">服务项目</Link>
            </li>
            <li>
              <Link href="#pricing">价格套餐</Link>
            </li>
            <li>
              <Link href="#about">关于我们</Link>
            </li>
            <li>
              <Link href="#contact">预约洗护</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>关注我们</h4>
          <ul>
            <li>
              <a href="#">&#x1f4f1; 微信公众号</a>
            </li>
            <li>
              <a href="#">&#x1f4d5; 小红书</a>
            </li>
            <li>
              <a href="#">&#x1f3b5; 抖音</a>
            </li>
            <li>
              <a href="#">&#x1f4f8; Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 爪爪洗护馆 · 版权所有</p>
      </div>
    </footer>
  );
}
