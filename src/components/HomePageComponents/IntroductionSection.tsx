/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Container from "../common/Container";

const IntroduceSection = () => {
  return (
    <Container>
      <div  data-scroll-section id="IntroduceSection" className="py-10 pt-20 lg:py-1">
        <div>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-300">
            Introduce
          </h1>
        </div>
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full rounded-full p-5 md:p-24 lg:p-20 lg:w-2/5">
            <Image
              height={600}
              width={400}
              className=" rounded-full mx-auto  object-cover"
              src="https://res.cloudinary.com/dwirxf3qm/image/upload/v1729550194/image_1_n4en5i.png"
              alt="abdullah al kafi's image"
            />
          </div>

          <div className="w-full pt-10 text-center px-4 lg:text-start space-y-4 lg:-mt-24 lg:w-3/5">
            <h4 className="text-3xl text-slate-300 font-bold">
              Hello, I'm Abdullah Al Kafi
            </h4>
            <div className="inline-block overflow-hidden w-full text-dark dark:text-light font-bold capitalize    text-center  lg:text-justify lg:text-6xl md:text-5xl text-3xl">
              <span
                className="inline-block overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Junior&nbsp;
              </span>
              <span
                className="inline-block overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                MERN &nbsp;
              </span>
              <span
                className="inline-block overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                Stack &nbsp;
              </span>

              <span
                className="inline-block overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                Web &nbsp;
              </span>
              <span
                className="inline-block overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="700"
              >
                Developer &nbsp;
              </span>
            </div>
            <p className="text-justify  dark:text-slate-300  md:text-lg">
              I am Abdullah Al Kafi, MERN stack web developer with expertise in
              HTML, CSS, JavaScript, React, Bootstrap, React JS, Firebase,
              MongoDB, Express JS, and a commitment to delivering high-quality,
              scalable solutions. Seeking opportunities to apply my technical
              skills and continuously enhance my proficiency in diverse
              technologies, contributing to the success of innovative web
              development projects.
            </p>
            <div>
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    width="42"
                    height="42"
                    src="https://img.icons8.com/color/48/filled-message.png"
                    alt="filled-message"
                  />{" "}
                  <p className="text-lg font-semibold">
                    abdullahalkafi742@gmail.com
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Image
                    width="42"
                    height="42"
                    src="https://img.icons8.com/color/48/apple-phone.png"
                    alt="apple-phone"
                  />
                  <p className="text-lg font-semibold">+8801861443532</p>
                </div>
              </div>
              <div className="flex gap-3 p-2">
                {/* gitHub */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Abdullah-1922"
                >
                  {" "}
                  <svg
                    className="hover:cursor-pointer hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="58px"
                    height="58px"
                  >
                    <linearGradient
                      id="KpzH_ttTMIjq8dhx1zD2pa"
                      x1="30.999"
                      x2="30.999"
                      y1="16"
                      y2="55.342"
                      gradientUnits="userSpaceOnUse"
                      spreadMethod="reflect"
                    >
                      <stop offset="0" stopColor="#6dc7ff" />
                      <stop offset="1" stopColor="#e6abff" />
                    </linearGradient>
                    <path
                      fill="url(#KpzH_ttTMIjq8dhx1zD2pa)"
                      d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"
                    />
                    <linearGradient
                      id="KpzH_ttTMIjq8dhx1zD2pb"
                      x1="32"
                      x2="32"
                      y1="5"
                      y2="59.167"
                      gradientUnits="userSpaceOnUse"
                      spreadMethod="reflect"
                    >
                      <stop offset="0" stopColor="#1a6dff" />
                      <stop offset="1" stopColor="#c822ff" />
                    </linearGradient>
                    <path
                      fill="url(#KpzH_ttTMIjq8dhx1zD2pb)"
                      d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"
                    />
                  </svg>
                </a>

                {/* Linkedin */}
                <a
                  href="https://www.linkedin.com/in/abdullah-al-kafi-1aabb7263/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="hover:cursor-pointer hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="58px"
                    height="58px"
                  >
                    <path
                      fill="#0078d4"
                      d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                    />
                    <path
                      d="M30,35v-9c0-1.103-0.897-2-2-2s-2,0.897-2,2v9h-6V18h6v1.027C27.04,18.359,28.252,18,29.5,18 c3.584,0,6.5,2.916,6.5,6.5V35H30z M13,35V18h2.966C14.247,18,13,16.738,13,14.999C13,13.261,14.267,12,16.011,12 c1.696,0,2.953,1.252,2.989,2.979C19,16.733,17.733,18,15.988,18H19v17H13z"
                      opacity=".05"
                    />
                    <path
                      d="M30.5,34.5V26c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v8.5h-5v-16h5v1.534 c1.09-0.977,2.512-1.534,4-1.534c3.309,0,6,2.691,6,6v10H30.5z M13.5,34.5v-16h5v16H13.5z M15.966,17.5 c-1.429,0-2.466-1.052-2.466-2.501c0-1.448,1.056-2.499,2.511-2.499c1.436,0,2.459,1.023,2.489,2.489 c0,1.459-1.057,2.511-2.512,2.511H15.966z"
                      opacity=".07"
                    />
                    <path
                      fill="#fff"
                      d="M14,19h4v15h-4V19z M15.988,17h-0.022C14.772,17,14,16.11,14,14.999C14,13.864,14.796,13,16.011,13 c1.217,0,1.966,0.864,1.989,1.999C18,16.11,17.228,17,15.988,17z M35,24.5c0-3.038-2.462-5.5-5.5-5.5 c-1.862,0-3.505,0.928-4.5,2.344V19h-4v15h4v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8h4C35,34,35,24.921,35,24.5z"
                    />
                  </svg>
                </a>

                {/* facebook icon */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/profile.php?id=100032662143196"
                >
                  {" "}
                  <svg
                    className="hover:cursor-pointer hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="58px"
                    height="58px"
                  >
                    <linearGradient
                      id="Ld6sqrtcxMyckEl6xeDdMa"
                      x1="9.993"
                      x2="40.615"
                      y1="9.993"
                      y2="40.615"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#2aa4f4" />
                      <stop offset="1" stopColor="#007ad9" />
                    </linearGradient>
                    <path
                      fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                      d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                    />
                    <path
                      fill="#fff"
                      d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default IntroduceSection;
