import Image from "next/image";
import styles from "@/styles/components/defaullayout.module.scss";
import { BsFacebook, BsWhatsapp, BsFillFilePersonFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { SiZalo, SiGmail } from "react-icons/si";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Banner from "./Banner";
import Head from "next/head";
import "animate.css";

const DefaultLayout = ({ children }) => {
    const companyRef = useRef();
    let i = 0;
    const txt = "Van Lang Agriculture Machine";
    const speed = 100;

    const typeWriter = () => {
        if (i < txt.length) {
            companyRef.current.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    };
    useEffect(() => {
        typeWriter();
    }, []);
    return (
        <>
            <div className={styles["home"]}>
                <div className={styles["home__wrap--banner"]}>
                    <h1 className={styles["company--name"]} ref={companyRef}></h1>
                    <div className={styles["logo"]}></div>
                    <Banner />
                </div>
                <div className={styles["home__wrap--main"]}>
                    <div className={styles["home--sidebar"]}>
                        <Link href={""}>
                            <div className={styles["home--sidebar--item"]}>
                                <BsFillFilePersonFill className={styles["profile"]} />
                                <p className="animate__animated animate__zoomIn">Hồ Sơ năng lực công ty</p>
                            </div>
                        </Link>
                        <Link href={"https://www.youtube.com/watch?v=ZE6MP9_TT80"}>
                            <div className={styles["home--sidebar--item"]}>
                                <FaYoutube className={styles["youtube"]} />
                                <p className="animate__animated animate__backInLeft">Kênh Youtube</p>
                            </div>
                        </Link>
                        <Link href={""}>
                            <div className={styles["home--sidebar--item"]}>
                                <BsFacebook className={styles["facebook"]} />
                                <p className="animate__animated animate__backInLeft">Kênh Facebook</p>
                            </div>
                        </Link>
                        <Link href={""}>
                            <div className={styles["home--sidebar--item"]}>
                                <BsWhatsapp className={styles["whatsapp"]} />
                                <p className="animate__animated animate__backInLeft">WhatsApp +84 378 785 020</p>
                            </div>
                        </Link>
                        <Link href={""}>
                            <div className={styles["home--sidebar--item"]}>
                                <CiLocationOn className={styles["location"]} />
                                <p className="animate__animated animate__backInLeft">
                                    Địa chỉ nhà máy : <br />
                                    <span>Cạnh cây xăng xã Lô Giang Huyện Đông Hưng Tỉnh Thái Bình Việt Nam</span>
                                    <br />
                                    <span>Email : robotcaylua@gmail.com</span>
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className={styles["home--main"]}>
                        <div className={styles["home--main--header"]}>
                            <div className={`${styles["home--main--header-item"]}`}>
                                <p className="animate__animated animate__fadeInDown">Thông tin</p>
                                <MdOutlineArrowDropDown />
                                <div className={`${styles["subnav"]} ${styles["subnav-infor"]}`}>
                                    <p>La cong ty uy tin blabla La cong ty uy tin blabla</p>
                                    <p>La cong ty uy tin blabla</p>
                                    <p>La cong ty uy tin blabla</p>
                                    <p>La cong ty uy tin blabla</p>
                                </div>
                            </div>
                            <div className={`${styles["home--main--header-item"]}`}>
                                <p className="animate__animated animate__fadeInDown">Bảo hộ</p>
                                <MdOutlineArrowDropDown />
                                <div className={`${styles["subnav"]} ${styles["subnav-ticket"]}`}>
                                    <p>Van bang 1</p>
                                    <p>Van bang 1</p>
                                    <p>Van bang 1</p>
                                    <p>Van bang 1</p>
                                </div>
                            </div>
                            <div className={`${styles["home--main--header-item"]}`}>
                                <p className="animate__animated animate__fadeInDown">Hệ thống đại lý các nước</p>
                                <MdOutlineArrowDropDown />
                                <div className={`${styles["subnav"]} ${styles["subnav-substore"]}`}>
                                    <p>La cong ty uy tin blabla La cong ty uy tin blabla</p>
                                    <p>La cong ty uy tin blabla</p>
                                    <p>La cong ty uy tin blabla</p>
                                    <p>La cong ty uy tin blabla</p>
                                </div>
                            </div>
                            <div className={`${styles["home--main--header-item"]}`}>
                                <p className="animate__animated animate__fadeInDown">Liên hệ</p>
                                <MdOutlineArrowDropDown />
                                <div className={`${styles["subnav"]} ${styles["subnav-substore"]}`}>
                                    <p>
                                        <SiZalo className={styles["zalo"]} />
                                        <span>Zalo : +84 378 785 020</span>
                                    </p>
                                    <p>
                                        <FaYoutube className={styles["youtube"]} />
                                        <span>Máy cấy Văn Lang</span>
                                    </p>
                                    <p>
                                        <BsWhatsapp className={styles["whatsapp"]} />
                                        <span>Whatsapp : +84 378 785 020</span>
                                    </p>
                                    <p>
                                        <SiGmail />
                                        <span>Gmail: robotcaylua@gmail.com</span>
                                    </p>
                                    <p>
                                        <BsFacebook className={styles["facebook"]} />
                                        <span>Facebook</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DefaultLayout;
