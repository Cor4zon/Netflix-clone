  // https://stackoverflow.com/questions/44365577/proxy-in-package-json-not-affecting-fetch-request
  // proxy in package.json
  
import './Home.scss';
import NavBar from '@/components/ui/Navbar/Navbar';
import Content from '@/components/pages/home/content/Content';
import { ProfileSettings } from '@/components/pages/home/profile-settings/ProfileSettings';
import Footer from '@/components/pages/home/footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
