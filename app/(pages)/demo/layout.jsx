import { Header, Footer } from "@/app/_components";

const DemoLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default DemoLayout;
