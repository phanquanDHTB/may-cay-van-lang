import styles from "@/styles/components/carditem.module.scss";
import { memo } from "react";

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
                <img src={infor?.listPath[0]} alt={infor?.name} />
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

export default memo(CardItem);
