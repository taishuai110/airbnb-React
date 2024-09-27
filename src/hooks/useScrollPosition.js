import { useEffect, useState } from "react";
// 负责节流的
import { throttle } from 'underscore';

export default function useScrollPosition() {
    // 状态记录位置
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    // 监听window滚动
    useEffect(() => {
        // 节流，第二个参数是执行后的时间
        const handleScroll = throttle(() => {
            setScrollX(window.scrollX);
            setScrollY(window.scrollY);
        }, 100)

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    // 返回数据
    return {
        scrollX,
        scrollY
    }
}
