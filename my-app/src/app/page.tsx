import HomeHeader from "@/components/Home/HomeHeader";
import HomeNavigate from "@/components/Home/HomeNavigate";
import HomeForm from '@/components/Home/HomeForm';

function Home() {


  return (
    <div className="log-div">
      <HomeHeader />
      <HomeNavigate />
      <HomeForm />
    </div>
  );
}

export default Home;