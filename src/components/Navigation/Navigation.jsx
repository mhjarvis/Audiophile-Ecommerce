import "./Navigation.css"

export default function Navigation() {
	return (
		<section>
			<div className="navigation__container">
				<p className="navigation__logo">audiophile</p>
				<div className="navigation__hamburger-menu">---</div>
				<button className="navigation__cart">🛒</button>
			</div>
		</section>
	)
}
