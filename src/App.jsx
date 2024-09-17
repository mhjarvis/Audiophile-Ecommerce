import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import ShopSection from "./components/ShopSelection/ShopSection";

export default function App() {
	return (
		<div>
			<Navigation />
			<Header />
			<ShopSection />
		</div>
	);
}
