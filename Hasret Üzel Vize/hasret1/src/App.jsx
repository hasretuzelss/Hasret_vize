import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './app.css';

function App() {
  return (
    <div className="container">
      <h1>Hasret Üzel - CV</h1>
      <section>
        <h2>Kişisel Bilgiler</h2>
        <p><strong>Adı Soyadı:</strong> Hasret Üzel</p>
        <p><strong>E-posta:</strong> <a href="mailto:hasret.uzel@kun.edu.tr">hasret.uzel@kun.edu.tr</a></p>
        <p><strong>Adres:</strong> Kayseri, Türkiye</p>
      </section>

      <section>
        <h2>Eğitim Bilgileri</h2>
        <p><strong>Üniversite:</strong> Kapadokya Üniversitesi</p>
        <p><strong>Bölüm:</strong> Bilgisayar Programcılığı</p>
        <p><strong>Mezuniyet Yılı:</strong> 2025</p>
      </section>

      <section>
        <h2>Sertifikalar</h2>
        <ul>
          <li>Şirket Değerlendirme ve Yatırım Süreçleri</li>
          <li>Linux Eğitim Sertifikası</li>
          <li>Girişimcilik Temelleri</li>
          <li>Web Sitesi Kullanılabilirliği</li>
          <li>Dijital Okuryazarlık</li>
          <li>Bilgisayar Operatörlüğü</li>
        </ul>
      </section>

      <section>
        <h2>Yetenekler</h2>
        <ul>
          <li>Temel seviye Python Kod Yazma</li>
          <li>Temel Seviye C# Kod Yazma</li>
          <li>Temel Seviye HTML ve CSS Yazma</li>
          <li>Linux Essential Sertifikası</li>
          <li>Linux Unhatched Sertifikası</li>
        </ul>
      </section>

      <section>
        <h2>Hobiler ve İlgi Alanları</h2>
        <ul className="hobbies">
          <li>
            <span className="icon">🏋️‍♂️</span> Spor Yapma
          </li>
          <li>
            <span className="icon">📚</span> Kitap Okuma
          </li>
          <li>
            <span className="icon">🏀</span> Basketbol Oynama
          </li>
          <li>
            <span className="icon">🚗</span> Araba Tamir ve Temizliği
          </li>
        </ul>
      </section>

      <section>
        <h2>Sosyal Medya</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
