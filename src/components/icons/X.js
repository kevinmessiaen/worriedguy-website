import logo from './x.svg'

function X({size = 20}) {
    return (
        <img alt="X" loading="lazy" width={size} height={size} decoding="async" data-nimg="1" src={logo} />
    )
}

export default X;
