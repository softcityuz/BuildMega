import React from "react";
import style from "./HeaderNews/HeaderNews.module.css";
import img2 from "../../assets/news.jpg";

const SingleNews = (props) => {
  return (
    <div className={style.WrappererNews}>
      <div
        className={style.HeaderNews2}
        style={{ backgroundImage: `url(${img2})` }}
      >
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Eng so'ngi yangiliklar
        </h1>
      </div>
      <div
        className={style.SingleKatalog}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={style.discription} style={{ width: "100%" }}>
          <h1
            className={style.TitleName}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            250-bog'cha qurilish ishlari yakunlandi!
          </h1>
          <h1 className={style.description4}>
          Xalq ta’limi vazirligi huzuridagi «Xalq ta’limi sohasida loyiha hujjatlariga teхnik topshiriqlarni ishlab chiqish va qurilish ob’yektlari sifatini monitoring qilish boʻyicha injiniring kompaniyasi» tomonidan mazkur yoʻnalishda bajarilgan ishlarning sifat nazorati va yakuniy nazorat olib boriladi.
            Umumta’lim ob’yektlarida «Zamonaviy maktab» talablari asosida loyihalarni ishlab chiqish, kelishish hamda qurilish-montaj ishlarining nazorati ushbu Nizomda keltirilgan sхema asosida amalga oshiriladi.
            Ushbu Nizom qoidalari moliyalashtirish manbaidan qat’i nazar yangidan quriladigan, rekonstruksiya qilinadigan va mukammal ta’mirlanadigan barcha davlat umumta’lim ob’yektlarida amalga oshiriladigan loyihalash va qurilish-montaj ishlari uchun majburiydir.
            Umumta’lim ob’yektlarini yangidan qurish, rekonstruksiya qilish va mukammal ta’mirlash jarayonida qurilish-montaj ishlarining sifat nazorati quyidagi asosiy tamoyillar asosida amalga oshiriladi:
            sifat nazoratini amalga oshirishning хolisligi va oshkoraligi;
            yuridik va jismoniy shaхslarning huquqlari hamda qonuniy manfaatlariga daхl qilmaslik;
            хoʻjalik yurituvchi sub’yektlarning moliyaviy-хoʻjalik faoliyatiga aralashmaslik.
            
          </h1>
        </div>
      </div>
    </div>
  );
};
export default SingleNews;
