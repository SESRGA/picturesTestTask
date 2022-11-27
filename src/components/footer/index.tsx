import {Logo} from "../logo";
import {Navbar} from "../navbar";
import {PhoneSvg} from "../../svg/phoneSvg";
import {AddressSvg} from "../../svg/addressSvg";
import "./footer.css"
import "../../ui-kit/uiKit.css"

const PHONE_NUMBER = '+7 (495) 999-99-99'
const ADDRESS = 'г. Воронеж, ул. Никитина, 119А'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="w5">
        <Logo />
      </div>
      <div className="w50">
        <Navbar isFooter={true}/>
      </div>
      <div className="contacts">
        <PhoneSvg />
        <p className="contactsText">{PHONE_NUMBER}</p>
      </div>
      <div className="contacts">
        <AddressSvg />
        <p className="contactsText">{ADDRESS}</p>
      </div>
    </div>
  )
}