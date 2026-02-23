import React, { use } from "react";
import ApplicationsListTable from "./ApplicationsListTable";

const MyApplicationsList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  //   console.log(applications);

  return (
    <div className="overflow-x-auto w-full px-4 py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800">
            আমার আবেদনসমূহ
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            আপনি মোট {applications.length}টি জবে আবেদন করেছেন
          </p>
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden">
        <table className="table w-full">
          {/* Table Head */}
          <thead className="bg-gray-50">
            <tr className="text-gray-600 text-sm uppercase">
              <th className="py-4">Job Info</th>
              <th>Company</th>
              <th>Email</th>
              <th>Links</th>
              <th>Resume</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-100">
            {applications.map((app, index) => (
              <ApplicationsListTable
                key={index}
                app={app}
              ></ApplicationsListTable>
            ))}
          </tbody>
        </table>
      </div>

      {applications.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-2xl mt-4">
          <p className="text-gray-400">কোনো ডাটা পাওয়া যায়নি।</p>
        </div>
      )}
    </div>
  );
};

export default MyApplicationsList;
