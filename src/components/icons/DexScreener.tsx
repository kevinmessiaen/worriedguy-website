import logo from "./dexscreener.svg";

function DexScreener({size = 18}) {
    return (
        <img className={`bg-gray-900 rounded p-0.5`} alt="DEX Screener" loading="lazy" width={size} height={size} decoding="async" data-nimg="1" src={logo} />
    )
}

export default DexScreener;
