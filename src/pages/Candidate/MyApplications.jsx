import React, { Suspense } from "react";
import MyApplicationsList from "../../components/Employer/MyApplicationsList";
import { myApplicationsPromise } from "../../api/applicationApi";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/Loader";

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
