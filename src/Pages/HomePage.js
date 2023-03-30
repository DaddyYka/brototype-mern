import React from "react";
import Layout from "../Layouts/Layout";
import "../Styles/HomePage.css";
import GalleryPic from "../Components/GalleryPic";

const HomePage = () => {

  return (
    <Layout title={"Brototype"}>
      <section className="dark">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <h1 className="htag">
                  No Tuition Fee Upfront, Pay Only When You Earn.
                </h1>
                <p className="ptag">
                  From Zero to a high paid Software Engineer in 180 days.
                </p>
                <button class="btn-color mb-3" type="submit">
                  Apply Now
                </button>
                <p className="ptag ">
                  (NB: Read all the FAQ's carefully before you submit the
                  application)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
          <div className="">
            <div className="dark text-center col-md-12">
              <h1 className="text-white fw-bold htag p-5">
                Our Achievers
              </h1>
              <h5 className="text-white fw-normal">
                People just like you who had joined Brocamp and changed their
                life
              </h5>
              <GalleryPic />
            </div>
          </div>
      </section>
      <section className="dark">
        <div className="container">
          <div className="row p-5">
            <div>
              <h3 className="text-white fw-light fst-italic">
                In the last 3.5 years we have helped over 1000s of people from
                different backgrounds to build their career as software
                engineers
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="dark2 p-5">
        <div className="container ">
          <h1 className="htag">BROCAMP</h1>
          <div className="row justify-content-center p-4 mt-5">
            <div className="col-md-4 mb-2">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body text-center p-2 cardstyle">
                  <i className="fa-solid fa-medal display-1" />
                  <h5 className="card-title">Win like an army</h5>
                  <p className="card-text">
                    "We work as a team because, we get paid only when you get
                    paid."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body text-center p-4  cardstyle">
                  <i className="fa-solid fa-graduation-cap display-1" />
                  <h5 className="card-title">
                    You are the Student and the Teacher
                  </h5>
                  <p className="card-text">
                    “We have learnt from others. You will learn from us. And
                    someone else will learn from you”
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body text-center p-5 cardstyle">
                  <i className="fa-solid fa-people-roof display-1" />
                  <h5 className="card-title">No one size fit all classes</h5>
                  <p className="card-text">
                    "Freely explore the different areas of programming. Find
                    what you're passionate about. And get after it."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dark2 p-5">
        <div className="container">
          <div className="row">
            <div className="text-white mid-tag">
              <p>
                Brocamp is a 7 months intensive inhouse training program
                exclusively for people who are willing to do the hard work to
                build a high paying software engineering career.
              </p>
            </div>

            <div className="row p-5">
              <div className="card salaryavg col-md-12 ">
                <div className="card-body">
                  <h2 className="card-title  text-center mt-5 text-danger fw-bolder fst-italic">
                    593
                  </h2>
                  <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
                  <p className="card-text text-center fw-medium fs-3">
                    Students placed with an average salary package of ₹
                    38000/month
                  </p>
                  <div className=" mb-3">
                    <div className="text-center p-5">
                      <h5 className="text-danger fw-semibold fw-medium fs-3">
                        38.5%{" "}
                      </h5>
                      <p>Students from IT background</p>
                    </div>
                    <div className=" mb-3 ">
                    <div className=" text-center p-5 ">
                      <h5 className="text-danger fw-semibold fw-medium fs-3">
                        46.2%
                      </h5>
                      <p>Students from Non-IT background</p>
                    </div>
                    </div>
                    <div className="mb-3">
                    <div className="text-center p-5 ">
                      <h5 className="text-danger fw-semibold fw-medium fs-3">
                        15.3%
                      </h5>
                      <p>Plus two or dropout students</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;