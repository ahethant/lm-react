import React from "react";
import BornPink from "../images/download.jpg";
import Albums from "../images/download (1).jpg";
import Tour from "../images/download (2).jpg";
import "./style.css";

const Index = () => {
	return (
		<div className="bg-danger bg-opacity-10 w-100">
			<div className="container-fluid">
				<div className="card container mt-4">
					<h2 className="mb-4">Top Charts</h2>
					<div className="row container justify-content-around">
						<div className="card col-lg-3 col-sm-5 mb-2">
							<div className="row">
								<div className="col-md-4">
									<img
										src={BornPink}
										className="mx-auto d-block"
										alt="top track"
									/>
								</div>
								<div className="col-md-8">
									<h6>Top 100 Chart</h6>
									<ol>
										<li>Tally</li>
										<li>Shut Down</li>
									</ol>
								</div>
							</div>
						</div>
						<div className="card col-lg-3 col-sm-5 mb-2">
							<div className="row">
								<div className="col-md-4">
									<img src={Albums} alt="top track" />
								</div>
								<div className="col-md-8">
									<h6>Top 100 Chart</h6>
									<ol>
										<li>Tally</li>
										<li>Shut Down</li>
									</ol>
								</div>
							</div>
						</div>
						<div className="card col-lg-3 col-sm-5 mb-2">
							<div className="row">
								<div className="col-md-4">
									<img src={Tour} alt="top track" />
								</div>
								<div className="col-md-8">
									<h6>Top 100 Chart</h6>
									<ol>
										<li>Tally</li>
										<li>Shut Down</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
