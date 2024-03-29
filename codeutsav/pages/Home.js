import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/Navbar";
import Image from "next/image";
import doc from "../assets/doc.svg";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div
        className="main"
        style={{
          width: "80%",
          margin: "auto",
          height: "auto",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="left"
          style={{ display: "flex", flex: "0.5", flexDirection: "column" }}
        >
          <h2>LOrem Ipsum Lorem Ipsum LOrem ipsum</h2>
          <span>
            Lorem ipsum, Lorem ipsum, Lorem ipsum Lorem ipsum, Lorem ipsum,
            Lorem ipsum
          </span>
        </div>
        <div
          className="right"
          style={{
            display: "flex",
            flex: "0.5",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Image
            src={doc}
            style={{ objectFit: "contain", height: "400px", width: "400px" }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
