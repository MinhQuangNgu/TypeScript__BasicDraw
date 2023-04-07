import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter } from "./components/routes";
function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					{publicRouter?.map((item, index) => {
						const Page = item?.element;
						if (item?.Layout) {
							const Layout = item?.Layout;
							return (
								<Route
									key={item?.path + "Router"}
									element={
										<Layout>
											<Page />
										</Layout>
									}
									path={item?.path}
								/>
							);
						}
						return (
							<Route
								key={item?.path + "RouterNoLayout"}
								element={<Page />}
								path={item?.path}
							/>
						);
					})}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
