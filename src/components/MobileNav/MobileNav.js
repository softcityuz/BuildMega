import React,{useState} from 'react'
import logo from '../../assets/white_logo.png'
import styled from 'styled-components';
import RightNav from '../MobileNav/RightNav';
import i18n from "../../i18n";
import './MobileNav.scss'
const StyledBurger = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
top: 35px;
right: 15px;
z-index: 10000;
display: none;
@media (max-width: 992px) {
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
}
div {
width: 2rem;
height: 0.25rem;
background-color: ${({ open }) => open ? '#fff' : '#fff'};
border-radius: 10px;
transform-origin: 1px;
transition: all 0.3s linear;
&:nth-child(1) {
  transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
}
&:nth-child(2) {
  transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
  opacity: ${({ open }) => open ? 0 : 1};
}
&:nth-child(3) {
  transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
}
}
`;
function MobileNav() {
    const defaultLang = localStorage.getItem("lang") || "uz";
    const [lang, setLang] = useState(defaultLang);

    const handleChange = (event) => {
        setLang(event.target.value);
        localStorage.setItem("lang", event.target.value);
        i18n.changeLanguage(event.target.value);
  };
    const [open, setOpen] = useState(false)
  return (
    <div className='MobileNav'>
            <div className='wrapper'>
                <div className='left_box'>
                    <div className='logo'>
                        <a href='/'>
                            <img src={ logo} alt="this is an image" />
                        </a>
                    </div>
                </div>
                <div className='right_box'>
                <div className="select">
                    <select name="lang" value={lang} onChange={handleChange}>
                      <option value="uz">UZ</option>
                      <option value="ru">RU</option>
                    </select>
                  </div>
                <StyledBurger className='' open={open} onClick={() => setOpen(!open)}>
                    <div />
                    <div />
                    <div />
                </StyledBurger>
                <RightNav open={open}/>
                </div>
            </div>
        </div>
  )
}

export default MobileNav