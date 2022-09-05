
const Contact = ()=>{


	return (
	<>	
		{/* Pre-filled Fields -------------- */}
		<div className="container-fluid">
			<div className="row p-4 p-sm-2 justify-content-center">
				<div className="col-11">
					<div className="row bg-body justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-1">
						<div className="col p-2">
							<div className=" p-2 shadow-lg bg-white d-flex rounded ">
								<div className="d-flex align-items-center px-2 text-info fs-5">
									<i className="bi bi-telephone-fill"></i>
								</div>
								<div>
									<h5 className="m-0 p-0">Phone</h5>
									<p className="mt-1 m-0">+19 78988 21103</p>
								</div>
							</div>
						</div>
						<div className="col p-2 ">
							<div className=" p-2 shadow-lg bg-white d-flex rounded ">
								<div className="d-flex align-items-center px-2 text-info fs-5">
									<i className="bi bi-person-plus-fill"></i>
								</div>
								<div>
									<h5 className="m-0 p-0">Email ID</h5>
									<p className="mt-1 m-0">blodhi978@gmail.com</p>
								</div>
							</div>
						</div>
						<div className="col p-2">
							<div className=" p-2 shadow-lg bg-white d-flex rounded ">
								<div className="d-flex align-items-center px-2 text-info fs-5">
									<i className="bi bi-geo-alt-fill"></i>
								</div>
								<div>
									<h5 className="m-0 p-0">City </h5>
									<p className="mt-1 m-0">Maksi in M.P</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  </>
  )
}
export default Contact;