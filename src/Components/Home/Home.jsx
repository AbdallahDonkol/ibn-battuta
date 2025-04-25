import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import travel from "../../images/travel.jpg";
import exp_1 from "../../images/exp_1.jpg";
import exp_2 from "../../images/exp_2.jpg";
import exp_3 from "../../images/exp_3.jpg";
import exp_4 from "../../images/exp_4.jpg";
import exp_5 from "../../images/exp_5.jpg";
import exp_6 from "../../images/exp_6.jpg";
import exp_7 from "../../images/exp_7.jpg";
import { withTranslation } from 'react-i18next';
import "./home.css";
class Home extends Component {
  componentDidMount() {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Easing type
      once: false, // Whether animation should happen only once
      mirror: true, // Whether elements should animate out while scrolling past them
    });
    super.componentDidMount?.();
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const showScrollToTop = window.scrollY > 200;
    this.setState({ showScrollToTop });
  };
  render() {
    const { t, i18n } = this.props;
    return (
      <>
        <header dir={i18n.dir()}>
          <div
            className="container d-flex h-100 justify-content-center flex-column"
            data-aos="fade-up"
          >
            <h1 className="text-white">{t('home.header_title')}</h1>
            <p className="text-white">
            {t('home.header_text')}
            </p>
            <button className="btn text-white fs-5">{t('home.book_ticket')}</button>
          </div>
        </header>
        <section dir={i18n.dir()} className="explore bg-black pt-5">
          <div className="container">
            <div className="content" data-aos="fade-up">
              <h2 className="text-white mb-2 fw-bolder">
              {t('home.explore_world')}
              </h2>
              <p className="text-white mb-5">
              {t('home.explore_text')}
              </p>
              <div className="image">
                <img src={travel} className="w-100" alt="travel img" />
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,64L360,256L720,160L1080,32L1440,96L1440,320L1080,320L720,320L360,320L0,320Z"
            ></path>
          </svg>
        </section>
        <section className="experience pb-5" data-aos="fade-up">
          <div className="container">
            <div className="item pb-5 text-center" data-aos="fade-up">
              <h2 className="fw-bolder">
              {t('home.experience_title')}
              </h2>
              <div className="image mt-5">
                <img src={exp_1} className="w-100" alt="" />
              </div>
            </div>

            <div className="item pb-5 text-center" data-aos="fade-up">
              <h2 className="fw-bolder">{t('home.experience_title2')}</h2>
              <p>
              {t('home.experience_text2')}
              </p>
              <div className="image mt-5">
                <img src={exp_2} className="w-100" alt="" />
              </div>
            </div>

            <div className="item pb-5 text-center" data-aos="fade-up">
              <h2 className="fw-bolder">{t('home.experience_title3')}</h2>
              <p>
              {t('home.experience_text3')}
              </p>
              <div className="image mt-5">
                <img src={exp_3} className="w-100" alt="" />
              </div>
            </div>

            <div className="item text-center" data-aos="fade-up">
              <h2 className="fw-bolder">{t('home.experience_title4')}</h2>
              <p>
              {t('home.experience_text4')}
              </p>
            </div>
          </div>
        </section>
        <section dir={i18n.dir()} className="premier bg-body-secondary py-5">
          <div className="container">
            <div className="content text-center" data-aos="fade-up">
              <h2 className="fw-bolder">{t('home.premier_title')}</h2>
              <p>
              {t('home.premier_text')}
              </p>
              <div className="image_collection mt-5">
                <div className="image">
                  <img src={exp_4} className="w-100" alt="" />
                </div>
                <div className="image">
                  <img src={exp_5} className="w-100" alt="" />
                </div>
                <div className="image">
                  <img src={exp_6} className="w-100" alt="" />
                </div>
                <div className="image">
                  <img src={exp_7} className="w-100" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <button
          className="scroll-to-top"
          style={{
            position: "fixed",
            bottom: "20px",
            insetInlineEnd: "20px",
            display: this.state?.showScrollToTop ? "block" : "none",
            backgroundColor: "#a09d9d",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            zIndex: 1000,
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </>
    );
  }
}
export default withTranslation()(Home);