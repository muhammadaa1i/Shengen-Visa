import usbg from '../../images/usbg.png'

const AQSH = () => {
    return (
        <div className='main w-full h-[80vh] flex justify-center items-center mt-14'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.226), rgba(0, 0, 0, 0.521)), url(${usbg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "center"
            }}>

        </div>
    )
}

export default AQSH