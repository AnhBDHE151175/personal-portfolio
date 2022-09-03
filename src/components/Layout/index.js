import { Layout } from "antd";
import Header from "../Header";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import MainContent from "../MainContent";
import MySkill from "../MySkill";
import "./styles.scss";

function MainLayout() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setScroll(window.scrollY > 50);
      },
      true
    );
  }, []);

  return (
    <Layout>
      <Header scroll={scroll} />
      <div className="container">
        <MainContent />
        <MySkill />
      </div>
      <Footer />
    </Layout>
  );
}

export default MainLayout;
