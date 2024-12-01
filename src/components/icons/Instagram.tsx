import logo from "./instagram.svg";

function Instagram({size = 20}) {
    return (
        <img alt="Instagram" loading="lazy" width={size} height={size} decoding="async" data-nimg="1" src={logo} />
    )
}

export default Instagram;
