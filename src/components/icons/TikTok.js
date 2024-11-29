import logo from "./tiktok.svg";

function X({size = 20}) {
    return (
        <img alt="TikTok" loading="lazy" width={size} height={size} decoding="async" data-nimg="1" src={logo} />
    )
}

export default X;
