import styles from "@/styles/components/listproduct.module.scss";
import CardItem from "./CardItem";
import { listImage } from "@/utils/listImage";

const ListProduct = ({ callback = () => {} }) => {
    return (
        <div className={styles["list--product"]}>
            {listImage.map((item, index) => (
                <CardItem key={index} infor={item} callback={callback} />
            ))}
        </div>
    );
};

export default ListProduct;
