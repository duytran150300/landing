import Slider from "./components/Carousel";
import DevelopmentTime from "./components/DevelopmentTime";
import Business from "./components/Business";
import BoxPartner from "./components/BoxPartner";
import Study from "./components/Study";
import Banner from "./components/Banner";
export default function Home() {
  return (
    <main className="">
      <div className="container-fluid content-bg-new position-relative ">
        <Banner />
        <div className="content-title text-center position-relative">
          <Slider />
        </div>
      </div>
      <div className="container-fluid development-time position-relative">
        <img
          src="/Group 11 (1).svg"
          alt=""
          className=" img-part-hidden position-absolute my-5"
        />
        <DevelopmentTime />
      </div>
      <Business />
      <Study />
      <BoxPartner />

      <script type="text/javascript" src="/static/script.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </main>
  );
}
