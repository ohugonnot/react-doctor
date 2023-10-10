const HeaderTopBar = ({onToogleToolbar}) => {
    const data = {
        email: 'support@novena.com',
        address: 'Address Ta-134/A, New York, USA ',
        telephone: '823-4565-13456',
    }

    return <>
        <div className="header-top-bar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <ul className="top-bar-info list-inline-item pl-0 mb-0">
                            <li className="list-inline-item"><a href={'mailto:' + data.email}><i
                                className="icofont-support-faq mr-2"></i>{data.email}</a></li>
                            <li className="list-inline-item"><i className="icofont-location-pin mr-2"></i>{data.address}
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                            <a href={'tel:+' + data.telephone}>
                                <span>Call Now : </span>
                                <span className="h4">{data.telephone}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={onToogleToolbar} style={{position: 'absolute', right: '10px', top: '15px'}}>X</div>
        </div>
    </>
}

export default HeaderTopBar