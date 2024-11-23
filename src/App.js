import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

export default function App() {
  return (
    <div className="bg-gray-100 text-gray-800 flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}