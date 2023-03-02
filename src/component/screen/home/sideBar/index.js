import React, { useState } from "react";
import "./style.css";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdLibraryMusic } from "react-icons/md";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiAlbumFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import Content from "../content";
import Blackpink from "../images/BLACKPINK-Hyeri.jpg";

const Index = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(true);

	const toggleMenu = () => {
		setIsOpenMenu(!isOpenMenu);
	};

	return (
		<div>
			<nav className="navbar bg-success sticky-top navbar-expand-lg light">
				<div className="container-fluid d-flex justify-content-between">
					<div className="d-flex flex-row w-25">
						<button
							className="btn btn-outline-none"
							onClick={toggleMenu}
						>
							<BsList className="burger-menu" />
						</button>
						<Link className="navbar-brand text-warning">Music</Link>
					</div>
					<div className="w-75 d-flex justify-content-between ">
						<div className="w-25">
							<input
								className="search-input w-100"
								type="text"
								placeholder="Search Artists, Albums & Tracks"
							/>
						</div>
						<div className="d-flex justify-content-between button-container">
							<button className="btn btn-outline-none btn-warning">
								Download!
							</button>
							<button
								className="btn btn-outline-light bg-dark"
								data-bs-toggle="modal"
								data-bs-target="#modal"
							>
								Sign Up
							</button>
							<button
								className="btn btn-outline-light bg-dark"
								data-bs-toggle="modal"
								data-bs-target="#login"
							>
								Login
							</button>
						</div>
					</div>
				</div>
			</nav>
			<div
				className="modal fade"
				id="modal"
				tabIndex="-1"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
			>
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Sign Up</h4>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<div className="row">
								<div className="col-lg-6 col-md-12 col-sm-12">
									<img
										src={Blackpink}
										alt="blackpink"
										className="w-100 h-100 "
									/>
								</div>
								<div className="col-lg-5 col-md-12 col-sm-12 m-auto">
									<form>
										<div className="form-group">
											<label className="mb-2 text-success">
												UserName
												<span className="text-danger">
													*
												</span>
											</label>
											<input
												type="text"
												className="mb-4 form-control"
											/>
										</div>
										<div className="form-group">
											<label className="mb-2 text-success">
												Email
												<span className="text-danger">
													*
												</span>
											</label>
											<input
												type="text"
												className="mb-4 col-8 form-control"
											/>
										</div>
										<div className="form-group">
											<label className="mb-2 text-success">
												Password
												<span className="text-danger">
													*
												</span>
											</label>
											<input
												type="password"
												className="mb-4 col-8 form-control"
											/>
										</div>
										<div className="form-group">
											<label className="mb-2 text-success">
												Confirm Password
												<span className="text-danger">
													*
												</span>
											</label>
											<input
												type="password"
												className="mb-4 col-8 form-control"
											/>
										</div>
										<div className="form-group col justify-content-between">
											<button className="btn btn-outline-primary col-12 mb-4">
												Sign Up
											</button>
											<button className="btn btn-outline-warning col-12">
												Cancel
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade"
				id="login"
				tabIndex="-1"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
			>
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Login</h4>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<div className="row">
								<div className="col-lg-6 col-md-12 col-sm-12">
									<img
										src={Blackpink}
										alt="blackpink"
										className="w-100 h-100 "
									/>
								</div>
								<div className="col-lg-5 col-md-12 col-sm-12 m-auto">
									<form>
										<div className="form-group">
											<label className="mb-2 text-success">
												UserName
												<span className="text-danger">
													*
												</span>
											</label>
											<input
												type="text"
												className="mb-4 form-control"
											/>
										</div>
										<div className="form-group">
											<label className="mb-2 text-success">
												Password
												<span className="text-danger">
													*
												</span>
											</label>
											<input
												type="password"
												className="mb-4 col-8 form-control"
											/>
										</div>
										<div className="form-group col justify-content-between">
											<button className="btn btn-outline-primary col-12 mb-4">
												Login
											</button>
											<button className="btn btn-outline-warning col-12">
												Cancel
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="d-flex">
				{isOpenMenu ? (
					<div className="sidebar-container sidebar bg-success p-2">
						<Link className="avatar-container">
							<Avatar
								name="Ahe"
								size="40"
								color="green"
								round={true}
								className="avatar"
							/>
							<p className=" text-warning">Ahe Thant</p>
						</Link>
						<ul>
							<li>
								<Link className="link text-warning">
									<AiFillHome className="icon" />
									Home
								</Link>
							</li>
							<li>
								<Link className="link text-warning">
									<BiSearch className="icon" />
									Search
								</Link>
							</li>
							<li>
								<Link className="link text-warning">
									<MdLibraryMusic className="icon" />
									Playlists
								</Link>
							</li>
						</ul>
						<hr />
						<ul>
							<li>
								<Link className="link text-warning">
									<BsFillPeopleFill className="icon" />
									Artists
								</Link>
							</li>
							<li>
								<Link className="link text-warning">
									<RiAlbumFill className="icon" />
									Albums
								</Link>
							</li>
							<li>
								<Link className="link text-warning">
									<AiFillHeart className="icon" />
									Favourites
								</Link>
							</li>
						</ul>
						<hr />
					</div>
				) : null}
				<Content />
			</div>
		</div>
	);
};

export default Index;
