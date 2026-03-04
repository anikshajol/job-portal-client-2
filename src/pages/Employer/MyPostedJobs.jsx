import React, { Suspense } from "react";
import JobsList from "../../components/Employer/JobsList";
import Loader from "../../components/Loader";
import { jobsCreatedByPromise } from "../../api/jobsApi";
import useAuth from "../../hooks/useAuth";

const MyPostedJobs = () => {
  const { user } = useAuth();
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <JobsList jobPromise={jobsCreatedByPromise(user?.email)}></JobsList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
