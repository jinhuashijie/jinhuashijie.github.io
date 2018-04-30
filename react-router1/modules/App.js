import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';
// 增加 this.props.children 用来渲染子组件
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>			
					<li><Link to="/repos" activeStyle={{ color: 'red' }}>Repos</Link></li>
					<li><Link to="/about" activeClassName="active">About</Link></li>
					<li><Link to="/repos" activeClassName="active">Repos</Link></li>	
					<li><NavLink to="/about">About</NavLink></li>
<li><NavLink to="/repos">Repos</NavLink></li>
                </ul>
                {this.props.children}
            </div>
            
        );
    }
}