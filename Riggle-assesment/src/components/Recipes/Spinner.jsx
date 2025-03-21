function Spinner() {
  return (
    <>
      <div class="text-center mt-4 pt-4" >
        <div class="spinner-border" role="status" style={{width:"50px", height :"50px"}}>
          <span class="visually-hidden">Loading...</span>
        </div>
        <h5 class="mt-3">Loading Recipes...</h5>
        <span class="badge text-bg-info" style={{fontSize:"20px"}}>Welcome to the Recipe Finder</span>
      </div>
    </>
  );
}

export default Spinner;
