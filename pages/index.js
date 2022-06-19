import Body from "../components/Body";
import Header from "../components/Header";

import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-end">
        <Sidebar />
        <Body />
      </div>
      
    </div>
  );
}
