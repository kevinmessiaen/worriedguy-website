import logo from "./telegram.svg";

function Telegram({size = 20}) {
    return (
        <img alt="Telegram" loading="lazy" width={size} height={size} decoding="async" data-nimg="1" src={logo} />
    )
}

export default Telegram;
