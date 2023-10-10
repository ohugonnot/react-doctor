const ContactCard = (props) => {
    return <>
        <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
            <div className="contact-block mb-4 mb-lg-0">
                <i className={props.icon}></i>
                <h5>{props.title}</h5>
                {props.children}
            </div>
        </div>
    </>
}

export default ContactCard