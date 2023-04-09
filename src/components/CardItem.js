import styles from "@/styles/components/carditem.module.scss";

const CardItem = ({ infor }) => {
    return (
        <div className={styles["card-item-wrapp"]}>
            <picture>
                <img src="/images/ricardo-milos-1.jpg" alt="" />
            </picture>
            <div className={styles["card-content"]}>
                <p>{infor?.content}</p>
                <div>
                    <p>{infor?.date}</p>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default CardItem;
