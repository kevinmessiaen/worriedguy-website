import logo from "./instagram.svg";

function X({size = 18}) {
    return (
        <img alt="Instagram" loading="lazy" width={size} height={size} decoding="async" data-nimg="1" src={logo} />
    )
}

export default X;
