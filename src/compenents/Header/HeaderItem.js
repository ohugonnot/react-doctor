import {Link} from "react-router-dom";

const HeaderItem = (props) => {
    return <>
        {!props.dropdown &&
            <li className={'nav-item ' + (props.className || '')}>
                <Link className={'nav-link'} to={props.link}>{props.label}</Link>
            </li>
        }
        {props.dropdown && props.dropdown.length > 0 &&
            <li className={'nav-item dropdown ' + (props.className || '')}>
                <a className="nav-link dropdown-toggle" href={props.link} id="dropdown02" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">{props.label} <i className="icofont-thin-down"></i></a>
                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    {props.dropdown
                        .filter((element) => element.label.toLowerCase().includes(props.filter.toLowerCase()))
                        .map((item, index) => {
                            return (
                                <li key={item.label}>
                                    <Link className={'dropdown-item'} to={item.link}>{item.label}</Link>
                                </li>
                            );
                        })}
                </ul>
            </li>
        }
    </>
}

export default HeaderItem