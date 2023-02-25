import NavBar from '@/components/ui/Navbar/Navbar';
import './MyList.scss';

const MyList = () => {
  return (
    <div>
      <h1 className="my-list-title">My List</h1>
      <p className="my-list-no-items">You haven't added any titles to your list yet.</p>
    </div>
  );
};

export default MyList;
