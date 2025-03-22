function Spinner() {
  return (
    <>
      <div className="text-center mt-4 pt-4" >
        <div className="spinner-border" role="status" style={{width:"50px", height :"50px"}}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <h5 className="mt-3">Loading Recipes...</h5>
        <span className="badge text-bg-info" style={{fontSize:"20px"}}>Welcome to the Recipe Finder</span>
      </div>
    </>
  );
}

export default Spinner;
