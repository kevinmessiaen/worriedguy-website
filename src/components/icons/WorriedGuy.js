import logo from "./logo.webp";

function X({size = 20}) {
    return (
        <img alt="Worried Guy" loading="lazy" width={size} height={size} decoding="async" data-nimg="1" src={logo} />
    )
}

export default X;