// https://stackoverflow.com/questions/44365577/proxy-in-package-json-not-affecting-fetch-request
// proxy in package.json
  
import './Home.scss';
import Content from '@/components/pages/home/content/Content';
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
