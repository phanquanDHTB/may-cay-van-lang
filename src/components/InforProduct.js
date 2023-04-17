/* eslint-disable react/display-name */
import styles from "@/styles/components/inforproduct.module.scss";
import { forwardRef, memo, useEffect, useState } from "react";

const InforProduct = forwardRef((props, ref) => {
    const { infor } = props;
    const [more, setMore] = useState(false);

    const [pathImg, setPathImg] = useState(infor?.listPath[0]);
    useEffect(() => {
        setPathImg(infor?.listPath[0]);
    }, [infor]);
    return (
        <div ref={ref} className={styles["infor--product--wrapp"]}>
            <div className={styles["view--product"]}>
                <div className={styles["main--image"]}>
                    <picture>
                        <img alt={infor?.name} src={pathImg} />
                    </picture>
                </div>
                <div className={styles["list--image"]}>
                    {infor?.listPath?.map((item, index) => (
                        <picture
                            key={index}
                            onClick={() => setPathImg(item)}
                            className={item === pathImg ? styles["select--image"] : ""}
                        >
                            <img alt={infor?.name} src={item} />
                        </picture>
                    ))}
                </div>
            </div>
            <div className={styles["infor--product--text"]}>
                <h4 className="animate__animated animate__backInRight">Thông tin:</h4>
                <p className="animate__animated animate__backInRight">-Model: {infor?.name}</p>
                {infor?.infor?.map((item, index) => (
                    <p key={index} className="animate__animated animate__backInRight">
                        {item}
                    </p>
                ))}
                <p
                    className={
                        !more
                            ? `${styles["ellipsis"]} animate__animated animate__backInRight`
                            : "animate__animated animate__backInRight"
                    }
                >
                    -Chú thích sản phẩm : Máy cấy lúa văn lang được thiết kế để khắc phục tất cả những nhược điểm mà các
                    loại máy cấy công nghiệp khác gặp phải. Với trọng lượng nhẹ và cách làm việc linh hoạt, máy cấy lúa
                    văn lang có thể hoạt động trên hầu hết các địa hình khó, kể cả những khu vực có mặt bằng không ổn
                    định, độ lún sâu. Đặc biệt với trọng lượng nhẹ này, người sử dụng có thể dễ dàng chuyển máy đến
                    những vùng có độ dốc cao ( vùng núi , ruộng bậc thang …. ) Được thiết kế để cấy các giống lúa thuần
                    chủng, máy cấy lúa văn lang được sản xuất với nhiều kích thước hàng cấy. khoảng cách giữa hàng x
                    hàng giao động từ 18cm đến 28cm. khoảng cách giữ cây x cây có thể điều chỉnh tùy ý từ 14cm đến 24cm.
                    Tuy giá thành chỉ bằng 1/5 so với các loại máy khác nhập khẩu từ nhật bản và trung quốc, nhưng năng
                    xuất làm việc gần như không hề thua kém, và có phẩn nhỉnh hơn so với các loại máy này, bởi vì trọng
                    lượng nhẹ nên người sử dụng có thể dễ dàng vận chuyển máy giữa các khu vực. Hoặc với những nơi có
                    nhiều kênh mương, người dùng cũng có thể đưa máy vượt qua một cách đơn giản.
                </p>
                <span onClick={() => setMore(!more)}>{!more ? "xem thêm" : "ẩn bớt"}</span>
            </div>
        </div>
    );
});

export default memo(InforProduct);
