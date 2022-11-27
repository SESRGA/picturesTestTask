import './navbar.css'

const NavbarItems = [
    {
      id: 1,
      name: 'Каталог',
      selected: true
    },
    {
      id: 2,
      name: 'Доставка',
      selected: false
    },
    {
      id: 3,
      name: 'Оплата',
      selected: false
    },
    {
      id: 4,
      name: 'Контакты',
      selected: false
    },
    {
      id: 5,
      name: 'О галерее',
      selected: false
    }
  ]

export const Navbar = ({isFooter}: {isFooter?: boolean}) => {
  return (
    <div className="navbar">
      {NavbarItems.map((item) => {
        return (
        <p
          key={item.id}
          className={"navbarItem " + (isFooter || !item.selected ? "navbarItemColor" : "navbarItemSelectedColor")}>{item.name}</p>
        )
      })}
    </div>
  )
}