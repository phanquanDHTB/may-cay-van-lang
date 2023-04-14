import styles from "@/styles/components/listproduct.module.scss";
import CardItem from "./CardItem";
import { listImage } from "@/utils/listImage";
import { useState } from "react";

const ListProduct = ({ callback = () => {} }) => {
    const [selectProduct, setSelectProduct] = useState();
    return (
        <div className={styles["list--product"]}>
            {listImage.map((item, index) => (
                <CardItem
                    key={index}
                    infor={item}
                    index={index}
                    setSelectProduct={setSelectProduct}
                    callback={callback}
                    border={index === selectProduct}
                />
            ))}
        </div>
    );
};

export default ListProduct;
