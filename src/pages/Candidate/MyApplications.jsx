import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Loader";
import { myApplicationsPromise } from "../../api/applicationApi";
import MyApplicationsList from "../../components/Candidates/MyApplicationsList";

const MyApplications = () => {
  const { user } = useAuth();
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <MyApplicationsList
          myApplicationsPromise={myApplicationsPromise(user?.email)}
        ></MyApplicationsList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
