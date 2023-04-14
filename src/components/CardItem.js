import styles from "@/styles/components/carditem.module.scss";

const CardItem = ({ infor, callback = () => {}, setSelectProduct = () => {}, index, border }) => {
    return (
        <div
            className={styles["card-item-wrapp"]}
            onClick={() => {
                callback(infor);
                setSelectProduct(index);
            }}
            style={border ? { border: "5px solid #00a8a9" } : {}}
        >
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
