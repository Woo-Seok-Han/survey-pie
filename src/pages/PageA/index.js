import { Link } from 'react-router-dom';

function PageA() {
  return (
    <>
      <div>PageA</div>
      <div>
        <Link to="/2">move to 2</Link>
      </div>
    </>
  );
}

export default PageA;
