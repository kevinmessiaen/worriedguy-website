import logo from '../../public/icons/x.svg'

function X({size = 18}) {
    return (
        <img alt="x" loading="lazy" width={size} height={size} decoding="async" data-nimg="1" src={logo} />
    )
}

export default X;
