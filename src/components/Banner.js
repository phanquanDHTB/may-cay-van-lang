const { default: Slider } = require("react-slick");
import styles from "@/styles/components/banner.module.scss";

const Banner = () => {
    const settingsBanner = {
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <Slider {...settingsBanner}>
            <div className={styles["banner-item"]}>
                <picture>
                    <img src="/images/ricardo-milos-1.jpg" alt="" />
                </picture>
            </div>
        </Slider>
    );
};

export default Banner;
