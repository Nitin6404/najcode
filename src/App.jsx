import Header from "./components/Header";
import Hero from "./components/Hero";
import TestComponent from "./components/TestComponent";

export default function App() {
  return ( 
    <div className="flex flex-col min-h-screen bg-black text-white w-full">
      {/* <Header /> */}
      <Hero />
      <TestComponent />
    </div>
  );
}