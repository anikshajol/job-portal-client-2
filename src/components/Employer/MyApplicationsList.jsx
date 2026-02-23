import React, { use } from "react";
import ApplicationsListTable from "./ApplicationsListTable";

const MyApplicationsList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  console.log(applications);

  return (
    <div className="overflow-x-auto w-full px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">আমার আবেদনসমূহ</h2>
        <div className="badge badge-primary badge-outline font-semibold p-4">
          মোট: {applications.length}
        </div>
      </div>

      <table className="table table-zebra w-full bg-white shadow-md rounded-xl overflow-hidden border">
        {/* Table Head */}
        <thead className="bg-gray-100">
          <tr className="text-gray-700 uppercase text-xs">
            <th>#</th>
            <th>Email</th>
            <th>LinkedIn</th>
            <th>GitHub</th>
            <th>Resume</th>
            <th>Action</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {applications.map((app, index) => (
            <ApplicationsListTable
              key={index}
              app={app}
              index={index}
            ></ApplicationsListTable>
          ))}
        </tbody>
      </table>

      {applications.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          আপনি এখনও কোনো চাকরিতে আবেদন করেননি।
        </div>
      )}
    </div>
  );
};

export default MyApplicationsList;
