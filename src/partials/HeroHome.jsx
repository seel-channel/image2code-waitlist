import React, { useState } from "react";

function HeroHome() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const submit = async (e) => {
    setHasSubmitted(false);
    setError("");

    e.preventDefault();

    let response = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email: email }),
    });

    if (response.ok) {
      setHasSubmitted(true);
    } else {
      setError(await response.text());
    }

    setEmail("");
  };

  const changeEmail = (e) => {
    setError("");
    setHasSubmitted(false);
    setEmail(e.target.value);
  };

  return (
    <section className="relative">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg> */}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Turn any UI into Code with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Image2Code
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Transform any UI design into code for the most popular
                frameworks.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <form onSubmit={submit}>
                  <div className="max-w-80 flex flex-wrap gap-4">
                    <input
                      id="email"
                      type="email"
                      className="rounded h-12 border border-gray-300 w-full text-gray-600"
                      placeholder="Enter email to join waitlist..."
                      required
                      value={email}
                      onChange={changeEmail}
                    />
                    <>
                      {error != "" && (
                        <p className="text-red-600 text-sm">{error}</p>
                      )}
                    </>
                    {hasSubmitted && (
                      <p className="text-green-600 text-sm">
                        Thanks for subscribing!
                      </p>
                    )}
                    <button
                      className="btn h-12 text-white bg-blue-600 hover:bg-blue-700 w-full"
                      href="#0"
                      type="submit"
                    >
                      Suscribe
                    </button>
                  </div>
                </form>
              </div>
              <div class="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/P4K2YHiBk9w"
                  frameBorder="0"
                  className="rounded mt-8 mx-auto border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
