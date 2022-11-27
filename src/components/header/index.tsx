import { Navbar } from "../navbar";
import {Logo} from "../logo";
import {Search} from "../search";
import {Basket} from "../basket";
import './header.css'
import '../../ui-kit/uiKit.css'

export const Header = () => {
  return (
    <div className="header">
      <div className="w5">
        <Logo />
      </div>
      <div className="w50">
        <Navbar />
      </div>
      <div className="w40">
        <Search />
      </div>
      <div className="w5">
        <Basket />
      </div>
    </div>
  )
}