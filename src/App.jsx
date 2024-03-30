import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
    const [num, setNum] = useState(0);
    const [isShow, setIsShow] = useState(false);
    const onClickCountUp = () => {
        setNum(num + 1);
    };
    const onClickToggle = () => {
        setIsShow(!isShow);
    };

    useEffect(() => {
        if (num > 0) {
            if (num % 3 === 0) {
                // ﾊﾞｰﾃｨｶﾙﾗｲﾝ左辺がtrueの時はそこで処理終了falseなら右辺
                isShow || setIsShow(true);
            }   else {
                // ｱﾝﾊﾟｻﾝﾄﾞfalseの時はfalseを、両辺ともtrueの時は右辺を
                isShow && setIsShow(false);
            }
        }
    }, [num]);

    
    
    return (       
        <div>
            <h1 style={{ color: "red" }}>こんにちは！</h1>
            <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="red">元気です！</ColorfulMessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>
            <button onClick={onClickToggle}>on/off</button>
            {isShow && <p>iiiiiiiiiiii</p>}           
        </div> 
    );
};