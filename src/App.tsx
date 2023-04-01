import AffiliateChart from "./components/AffiliateChart";
import Header from "./components/Header";
import ChartControls from "./components/ChartControls";
import Footer from "./components/Footer";

const App = () => {
 
  return (
    <div className="bg-black grid grid-cols-12  ">
    
      <div className="col-span-10 col-start-2">
        <Header />
        <AffiliateChart />
        <ChartControls />
        <Footer />
      </div>
    </div>
  );
};

export default App;