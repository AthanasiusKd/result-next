'use client'

import HomeHeader from "@/components/Home/HomeHeader";
import HomeNavigate from "@/components/Home/HomeNavigate";
import HomeForm from '@/components/Home/HomeForm';
import HidePass from '@/img/hidepass.svg';
import ShowPass from '@/img/showpass.svg'

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
