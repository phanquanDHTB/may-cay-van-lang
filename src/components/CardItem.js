import styles from "@/styles/components/carditem.module.scss";

const CardItem = ({ infor, callback = () => {} }) => {
    return (
        <div className={styles["card-item-wrapp"]} onClick={() => callback(infor)}>
            <picture>
                <img src={infor?.listPath[0]} alt="" />
            </picture>
            <div className={styles["card-content"]}>
                <p>{infor?.content}</p>
                <div>
                    <p>{infor?.name}</p>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default CardItem;
