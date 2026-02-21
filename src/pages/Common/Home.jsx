import { Suspense } from "react";
import Banner from "../../components/Banner";
import HotJobs from "../../components/HotJobs";
import Loader from "../../components/Loader";

const Home = () => {
  const jobsPromise = fetch(`http://localhost:5000/jobs`).then((res) =>
    res.json(),
  );
  return (
    <>
      <Banner />
      <Suspense fallback={<Loader />}>
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
    </>
  );
};

export default Home;
