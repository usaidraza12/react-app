import './App.css'
// import img1 from '../src/assets/img2.jpg'

function Home() {
  return (
    <>
    <div>
      <div className=" main row flex-lg-row-reverse align-items-center g-5 py-5" >
      <div className="col-white col-sm-8 col-lg-6">
        {/* <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid cars" alt="Bootstrap Themes" width="500" height="300" loading="lazy" /> */}
      </div>
      <div className="col-lg-6">
        <h1 className=" para1 display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
    <div className="bg-dark text-secondary px-4 py-5 text-center">
    <div className="py-5">
      <h1 className="display-5 fw-bold text-white">Dark mode hero</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
          <button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button>
        </div>
      </div>
    </div>
  </div>
    </div>
    </>
  )
}

export default Home;