import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";
import CarouselOptions from "./components/Carousel";
export default function Home() {
  return (
    <main className="">
      <script type="text/javascript" src="/static/script.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <div className="container-fluid content-bg-new">
        <div className="content-title text-center">
          <span>Atlantic group</span>
          <h3>Tin tức nổi bật</h3>
          <Container>
            <CarouselOptions />
          </Container>
        </div>
      </div>
    </main>
  );
}
