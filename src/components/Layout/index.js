import { Layout } from "antd";
import Header from "../Header";
import Footer from "../Footer";
import { useEffect, useState } from "react";

function MainLayout({ children }) {
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
      {children}
      <Footer />
    </Layout>
  );
}

export default MainLayout;
