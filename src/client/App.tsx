import * as React from 'react';
import { useState, useEffect } from 'react';

/* HOOK REACT EXAMPLE */
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = useState<string>('');

// 	useEffect(() => {
// 		async function getGreeting() {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		}
// 		getGreeting();
// 	}, []);

// 	return (
// 		<main className="container my-5">
// 			<h1 className="text-primary text-center">Hello {greeting}!</h1>
// 		</main>
// 	);
// };

interface AppProps {}

/* CLASS REACT EXAMPLE */
class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			blogs: []
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/blogs');
			let blogs = await r.json();
			this.setState({ blogs });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
				<h1 className="text-primary text-center">My Blog!</h1>
				<ul className="list group">
					{this.state.blogs.map(blog => {
						return <li className="list-group-items">{blog.title}</li>
					})}
				</ul>
			</main>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	blogs: Array<{title: string, body: string}>;
}

export default App;
