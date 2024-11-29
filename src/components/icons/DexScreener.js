import logo from "./dexscreener.svg";

function DexScreener({size = 18}) {
    return (
        <img alt="DEX Screener" loading="lazy" width={size} height={size} decoding="async" data-nimg="1" src={logo} />
    )
}

export default DexScreener;
