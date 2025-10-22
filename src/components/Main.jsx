export default function Main() {
  return (
    <>
      <main>
        <section className="Hero">
          <div className="Container HeroContainer">
            <div className="HeroLeft">
              <div className="HeroInfo">
                <h1 className="HeroTitle">
                  Tabiiy davolash usullari yordamida kasalliklardan xalos
                  bo’ling.
                </h1>
                <p className="HeroDesc">
                  Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng
                  ko’p uchraydigan kasalliklarni yengishda yordam beradi.
                  Sog’ligingizni o’z ishining professionallariga ishonib
                  topshiring.
                </p>
              </div>
              <button className="ButtonRegister">Qabulga Yozilish</button>
            </div>
            <img
              src="./hero-img.png"
              alt="Ansormed Boshlig'i"
              className="HeroLogo"
            />
          </div>
        </section>
        <section className="Services">
          <h2 className="ServicesTitle">Xizmatlar</h2>
          <div className="Card">
            <div className="CardChild">
              <img
                src="./card-img.jpg"
                alt="Card Image Hijoma "
                className="CardImg"
              />
              <div className="CardChildLeft">
                <h3 className="CardTitle">Hijoma</h3>
                <p className="CardDesc">
                  Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat
                  qilgan hadisda rasululloh sallallohu alayhi va sallam dedilar:
                  «Sizlar hijoma qiladigan kunlaringizning eng yaxshisi 17, 19
                  va 21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar
                  kunlaridir).
                </p>
              </div>
            </div>
            <div className="CardChild">
              <img
                src="./card-img2.jpg"
                alt="Card Image Hijoma "
                className="CardImg"
              />
              <div className="CardChildLeft">
                <h3 className="CardTitle">Manual terapiya</h3>
                <p className="CardDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ac metus placerat, pellentesque enim ac, rhoncus lectus.
                  Maecenas et posuere lorem. Fusce sed massa sit amet elit
                  viverra hendrerit.
                </p>
              </div>
            </div>
            <div className="CardChild">
              <img
                src="./card-img3.jpg"
                alt="Card Image Hijoma "
                className="CardImg"
              />
              <div className="CardChildLeft">
                <h3 className="CardTitle">Zuluk bilan davolash</h3>
                <p className="CardDesc">
                  Girudoterapiya (lot. hirūdō — «zuluk» va qad. yun. θεραπεία —
                  «davolash») — ma’lum kasalliklarni dorivor zuluklar (Hirudo
                  medicinalis) yordamida davolash usuli. Fizioterapevtik
                  muolaja, muqobil tibbiyotga oid sanaladi. Bunday zuluklar
                  ushbu kichik sinf chuvchalchanglariga oid yagona tur
                  hisoblanadi, qolganlari shifobaxsh ta’sir ko’rsatmaydi.
                </p>
              </div>
            </div>
            <div className="CardChild">
              <img
                src="./card-img4.jpg"
                alt="Card Image Hijoma "
                className="CardImg"
              />
              <div className="CardChildLeft">
                <h3 className="CardTitle">Tabiiy dori vositalari</h3>
                <p className="CardDesc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ac metus placerat, pellentesque enim ac, rhoncus lectus.
                  Maecenas et posuere lorem. Fusce sed massa sit amet elit
                  viverra hendrerit.
                </p>
              </div>
            </div>
            <button className="ButtonRegister">Qabulga yozilish</button>
          </div>
        </section>
        <section className="CTA">
          <div className="Container CTAContainer">
            <h2 className="CTAtitle">Qabulga ro’yxatdan o’ting</h2>
            <div className="CTAButtons">
              <a className="telButton btn" href="#">
                Qo’ng’iroq qilish
              </a>
              <a className="tgButton btn" href="#">
                Telegramdan yozish
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
