import "./Navigation.css"
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg"
import cartImage from "../../assets/shared/desktop/icon-cart.svg"
import logo from "../../assets/shared/desktop/logo.svg"

export default function Navigation() {
	return (
		<section className="navigation__section">
			<div className="navigation__container">
				<img src={hamburger} className="navigation__hamburger-menu"></img>
				<img src={logo} alt="Audiophile logo" className="navigation__logo" />
				<img
					src={cartImage}
					alt="Cart image"
					className="navigation__cart"
				></img>
			</div>
		</section>
	)
}
