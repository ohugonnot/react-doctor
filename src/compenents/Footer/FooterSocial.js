const FooterSocial = (props) => {
    return <li className="list-inline-item">
        <a href={props.link}>
            <i className={props.icon}></i></a>
    </li>
}

export default FooterSocial