import { Layout } from "antd";
import Header from "../Header";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { MAIN_CONTENT, ABOUT } from "../../contansts/mainContanst";
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
        <MainContent data={MAIN_CONTENT} imageInRight />
        <MySkill />
        <MainContent data={ABOUT} />
      </div>
      <Footer />
    </Layout>
  );
}

export default MainLayout;
