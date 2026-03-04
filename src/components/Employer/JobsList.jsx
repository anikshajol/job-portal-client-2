import React, { use } from "react";
import { FiEdit, FiEye, FiTrash2, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

const JobsList = ({ jobPromise }) => {
  const jobsList = use(jobPromise);
  console.log(jobsList);

  return (
    <div className="max-w-6xl mx-auto my-10 p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            আমার পোস্ট করা জবসমূহ
          </h2>
          <p className="text-gray-500">
            আপনার বর্তমান লাইভ জবের সংখ্যা: {jobsList.length}
          </p>
        </div>
        <Link to="/add-job" className="btn btn-primary">
          নতুন জব পোস্ট করুন
        </Link>
      </div>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
        <table className="table w-full">
          {/* Table Head */}
          <thead className="bg-gray-50">
            <tr className="text-gray-600">
              <th>জব টাইটেল</th>
              <th>ক্যাটাগরি ও টাইপ</th>
              <th>ডেডলাইন</th>
              <th>বেতন (BDT)</th>
              <th>আবেদনকারী</th>
              <th>আবেদন সংখ্যা</th>
              <th>অ্যাকশন</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-50">
            {jobsList.map((job) => (
              <tr
                key={job._id}
                className="hover:bg-blue-50/20 transition-colors"
              >
                {/* Job Title & Company */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-10 h-10 bg-gray-50">
                        <img src={job.company_logo} alt={job.company} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">{job.title}</div>
                      <div className="text-xs opacity-50">{job.company}</div>
                    </div>
                  </div>
                </td>

                {/* Category & Type */}
                <td>
                  <div className="text-sm">{job.category}</div>
                  <span
                    className={`badge badge-sm mt-1 ${job.jobType === "Remote" ? "badge-info" : "badge-ghost"}`}
                  >
                    {job.jobType}
                  </span>
                </td>

                {/* Deadline */}
                <td className="text-sm font-medium">
                  {new Date(job.applicationDeadline) > new Date() ? (
                    <span className="text-gray-700">
                      {job.applicationDeadline}
                    </span>
                  ) : (
                    <span className="text-red-500 font-bold">Expired</span>
                  )}
                </td>

                {/* Salary */}
                <td className="text-sm">
                  {job.salaryRange.min}k - {job.salaryRange.max}k
                </td>

                {/* Applicant Count Placeholder */}
                <td>
                  <Link
                    to={`/view-applicants/${job._id}`}
                    className="btn btn-ghost btn-xs gap-1 text-blue-600"
                  >
                    <FiUsers /> দেখুন
                  </Link>
                </td>
                {/* Applicant Count */}
                <td>
                  <Link className="btn btn-ghost btn-xs gap-1 text-blue-600">
                    <FiUsers />
                    {job.applicationCount}
                  </Link>
                </td>

                {/* Actions */}
                <td>
                  <div className="flex gap-2">
                    <button
                      className="btn btn-square btn-ghost btn-sm text-blue-500"
                      title="জব ডিটেইলস"
                    >
                      <FiEye size={18} />
                    </button>
                    <button
                      className="btn btn-square btn-ghost btn-sm text-yellow-600"
                      title="এডিট"
                    >
                      <FiEdit size={18} />
                    </button>
                    <button
                      className="btn btn-square btn-ghost btn-sm text-red-500"
                      title="ডিলিট"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {jobsList.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-2xl mt-4">
          <p className="text-gray-400">আপনি এখনও কোনো জব পোস্ট করেননি।</p>
        </div>
      )}
    </div>
  );
};

export default JobsList;
