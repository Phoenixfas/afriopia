import Head from "next/head";
import Link from "next/link";
import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import style from "../styles/Prices.module.css";

export default function prices() {
  return (
    <div className={style.prices}>
      <Head>
        <title>Afriopia | Prices</title>
        <meta name="description" content="Afriopia Price Page" />
      </Head>
      <ParticlesBackground />
      <div className={style.prices__gapG}>
        <h1>
          PRICING
        </h1>
      </div>
      <div className={style.prices__gapBlack}>
        <h1 className={style.heading}>PRICING FOR RESIDENTI<em className="a" style={{ textTransform: "lowercase" }}>A</em>L</h1>
        <div className={style.prices__row}>
          <div className={style.price__card}>
            <div className={style.price__cardTop}>
              <p>
                <span>
                  B<em className="a">a</em>sic
                </span>
              </p>
              <p>2 Mb/s</p>
            </div>
            <div className={style.price__cardMiddle}>
              <p>Fiber Based Internet</p>
              <p>Free Maintainance</p>
              <p>24/7 Support</p>
              <p>High Speed</p>
            </div>
            <div className={style.price__cardBottom}>
              <h2>
                574 ETB <span>/ month</span>
              </h2>
              {/* <Link href={"/order"}> */}
              <p className={style.price__order}>Order Now</p>
              {/* </Link> */}
            </div>
          </div>

          <div className={style.price__card}>
            <div className={style.price__cardTop}>
              <p>
                <span>Recommended</span>
              </p>
              <p>3 Mb/s</p>
            </div>
            <div className={style.price__cardMiddle}>
              <p>50% Router Discount</p>
              <p>Fiber Based Internet</p>
              <p>Free Maintainance</p>
              <p>24/7 Support</p>
              <p>Ultra High Speed</p>
            </div>
            <div className={style.price__cardBottom}>
              <h2>
                774 ETB <span>/ month</span>
              </h2>
              {/* <Link href={"/order"}> */}
              <p className={style.price__order}>Order Now</p>
              {/* </Link> */}
            </div>
          </div>

          <div className={style.price__card}>
            <div className={style.price__cardTop}>
              <p>
                <span>Premium</span>
              </p>
              <p>4 Mb/s</p>
            </div>
            <div className={style.price__cardMiddle}>
              <p>Free Router</p>
              <p>Fiber Based Internet</p>
              <p>Free Maintainance</p>
              <p>24/7 Support</p>
              <p>C2 = E / M Speed</p>
            </div>
            <div className={style.price__cardBottom}>
              <h2>
                1174 ETB <span>/ month</span>
              </h2>
              {/* <Link href={"/order"}> */}
              <p className={style.price__order}>Order Now</p>
              {/* </Link> */}
            </div>
          </div>

          {/* //////////////////////////////// */}

          {/* <div className={style.price__card}>
            <div className={style.price__cardTop}>
              <p>
                <span>Premium</span>
              </p>
              <p>6 Mb/s</p>
            </div>
            <div className={style.price__cardMiddle}>
              <p>Free Router</p>
              <p>Fiber Based Internet</p>
              <p>Free Maintainance</p>
              <p>24/7 Support</p>
              <p>C2 = E / M Speed</p>
            </div>
            <div className={style.price__cardBottom}>
              <h2>
                1374 ETB <span>/ month</span>
              </h2>
              <Link href={"/order"}>
                <p className={style.price__order}>Order Now</p>
              </Link>
            </div>
          </div>

          <div className={style.price__card}>
            <div className={style.price__cardTop}>
              <p>
                <span>Premium</span>
              </p>
              <p>10 Mb/s</p>
            </div>
            <div className={style.price__cardMiddle}>
              <p>Free Router</p>
              <p>Fiber Based Internet</p>
              <p>Free Maintainance</p>
              <p>24/7 Support</p>
              <p>C2 = E / M Speed</p>
            </div>
            <div className={style.price__cardBottom}>
              <h2>
                1999 ETB <span>/ month</span>
              </h2>
              <Link href={"/order"}>
                <p className={style.price__order}>Order Now</p>
              </Link>
            </div>
          </div>

          <div className={style.price__card}>
            <div className={style.price__cardTop}>
              <p>
                <span>Premium</span>
              </p>
              <p>20 Mb/s</p>
            </div>
            <div className={style.price__cardMiddle}>
              <p>Free Router</p>
              <p>Fiber Based Internet</p>
              <p>Free Maintainance</p>
              <p>24/7 Support</p>
              <p>C2 = E / M Speed</p>
            </div>
            <div className={style.price__cardBottom}>
              <h2>
                3399 ETB <span>/ month</span>
              </h2>
              <Link href={"/order"}>
                <p className={style.price__order}>Order Now</p>
              </Link>
            </div>
          </div>


          <div className={style.price__card}>
            <div className={style.price__cardTop}>
              <p>
                <span>Premium</span>
              </p>
              <p>30 Mb/s</p>
            </div>
            <div className={style.price__cardMiddle}>
              <p>Free Router</p>
              <p>Fiber Based Internet</p>
              <p>Free Maintainance</p>
              <p>24/7 Support</p>
              <p>C2 = E / M Speed</p>
            </div>
            <div className={style.price__cardBottom}>
              <h2>
                4519 ETB <span>/ month</span>
              </h2>
              <Link href={"/order"}>
                <p className={style.price__order}>Order Now</p>
              </Link>
            </div>
          </div>

          <div className={style.price__card}>
            <div className={style.price__cardTop}>
              <p>
                <span>Premium</span>
              </p>
              <p>40 Mb/s</p>
            </div>
            <div className={style.price__cardMiddle}>
              <p>Free Router</p>
              <p>Fiber Based Internet</p>
              <p>Free Maintainance</p>
              <p>24/7 Support</p>
              <p>C2 = E / M Speed</p>
            </div>
            <div className={style.price__cardBottom}>
              <h2>
                5399 ETB <span>/ month</span>
              </h2>
              <Link href={"/order"}>
                <p className={style.price__order}>Order Now</p>
              </Link>
            </div>
          </div>

          <div className={style.price__card}>
            <div className={style.price__cardTop}>
              <p>
                <span>Premium</span>
              </p>
              <p>50 Mb/s</p>
            </div>
            <div className={style.price__cardMiddle}>
              <p>Free Router</p>
              <p>Fiber Based Internet</p>
              <p>Free Maintainance</p>
              <p>24/7 Support</p>
              <p>C2 = E / M Speed</p>
            </div>
            <div className={style.price__cardBottom}>
              <h2>
                5899 ETB <span>/ month</span>
              </h2>
              <Link href={"/order"}>
                <p className={style.price__order}>Order Now</p>
              </Link>
            </div>
          </div> */}
          {/* //////////////////////////////// */}
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className={style.prices__gapBlue}>
        <h1 className={style.heading}>PRICING FOR BUSINESS</h1>
        <div className={style.prices__row}>
          <div className={style.price__card}>
            <div className={style.price__cardTop}>
              <p>
                <span>
                  B<em className="a">a</em>sic
                </span>
              </p>
              <p>5 Mb/s</p>
            </div>
            <div className={style.price__cardMiddle}>
              <p>Fiber Based Internet</p>
              <p>Free Maintainance</p>
              <p>24/7 Support</p>
              <p>High Speed</p>
            </div>
            <div className={style.price__cardBottom}>
              <h2>
                1680 ETB <span>/ month</span>
              </h2>
              {/* <Link href={"/order"}> */}
              <p className={style.price__order}>Order Now</p>
              {/* </Link> */}
            </div>
          </div>

          {/* <div className={style.price__card}>
            <div className={style.price__cardTop}>
              <p>
                <span>Basic</span>
              </p>
              <p>10 Mb/s</p>
            </div>
            <div className={style.price__cardMiddle}>
              <p>Fiber Based Internet</p>
              <p>Free Maintainance</p>
              <p>24/7 Support</p>
              <p>High Speed</p>
            </div>
            <div className={style.price__cardBottom}>
              <h2>
                2585 ETB <span>/ month</span>
              </h2>
              <Link href={"/order"}>
                <p className={style.price__order}>Order Now</p>
              </Link>
            </div>
          </div> */}

          <div className={style.price__card}>
            <div className={style.price__cardTop}>
              <p>
                <span>
                  B<em className="a">a</em>sic
                </span>
              </p>
              <p>20 Mb/s</p>
            </div>
            <div className={style.price__cardMiddle}>
              <p>Fiber Based Internet</p>
              <p>Free Maintainance</p>
              <p>24/7 Support</p>
              <p>High Speed</p>
            </div>
            <div className={style.price__cardBottom}>
              <h2>
                6020 ETB <span>/ month</span>
              </h2>
              {/* <Link href={"/order"}> */}
              <p className={style.price__order}>Order Now</p>
              {/* </Link> */}
            </div>
          </div>

          {/* //////////////////////////////// */}

          <div className={style.price__card}>
            <div className={style.price__cardTop}>
              <p>
                <span>Recommended</span>
              </p>
              <p>30 Mb/s</p>
            </div>
            <div className={style.price__cardMiddle}>
              <p>50% Router Discount</p>
              <p>Fiber Based Internet</p>
              <p>Free Maintainance</p>
              <p>24/7 Support</p>
              <p>C2 = E / M Speed</p>
            </div>
            <div className={style.price__cardBottom}>
              <h2>
                8520 ETB <span>/ month</span>
              </h2>
              {/* <Link href={"/order"}> */}
              <p className={style.price__order}>Order Now</p>
              {/* </Link> */}
            </div>
          </div>

          {/* <div className={style.price__card}>
            <div className={style.price__cardTop}>
              <p>
                <span>Premium</span>
              </p>
              <p>50 Mb/s</p>
            </div>
            <div className={style.price__cardMiddle}>
              <p>Free Router</p>
              <p>Fiber Based Internet</p>
              <p>Free Maintainance</p>
              <p>24/7 Support</p>
              <p>C2 = E / M Speed</p>
            </div>
            <div className={style.price__cardBottom}>
              <h2>
                13720 ETB <span>/ month</span>
              </h2>
              <Link href={"/order"}>
                <p className={style.price__order}>Order Now</p>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
