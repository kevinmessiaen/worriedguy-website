import logo from "./radyum.svg";

function Radyum({size = 20}) {
    return (
        <img className={`bg-gray-900 rounded-[20px]`} alt="Radyum" loading="lazy" width={size} height={size} decoding="async" data-nimg="1" src={logo} />
    )
}

export default Radyum;
