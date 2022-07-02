import React from "react";
import "./Demo4.css";
const Icon = (count) => {
	return (
		<div>
			<div className="header__cart">
				<ul>
					<li>
						<a href="#">
							<i className="fa fa-heart"></i> <span>{count}</span>
						</a>
					</li>
				
				</ul>
			</div>
		</div>
	);
};

export default Icon;
// <li>
// 						<a href="#">
// 							<i className="fa fa-shopping-bag"> </i> <span>3</span>
// 						</a>
// 					</li>