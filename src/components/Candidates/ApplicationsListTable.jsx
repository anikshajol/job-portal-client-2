import React from "react";

const ApplicationsListTable = ({ app }) => {
  return (
    <tr key={app._id} className="hover:bg-blue-50/30 transition-all">
      {/* Job & Logo */}
      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12 bg-gray-100 p-1">
              <img src={app.logo} alt={app.company} />
            </div>
          </div>
          <div>
            <div className="font-bold text-gray-800">{app.title}</div>
            <div className="text-xs opacity-60">ID: {app.jobId.slice(-6)}</div>
          </div>
        </div>
      </td>

      {/* Company Name */}
      <td>
        <span className="font-semibold text-blue-600">{app.company}</span>
      </td>
      {/* email  */}
      <td>
        <span className="font-semibold text-blue-600">{app.email}</span>
      </td>

      {/* Social Links */}
      <td>
        <div className="flex gap-2">
          <a
            href={app.linkedIn}
            target="_blank"
            className="btn btn-square btn-ghost btn-sm text-blue-700 bg-blue-50 hover:bg-blue-100"
          >
            <i className="fa-brands fa-linkedin-in text-lg"></i>{" "}
            {/* FontAwesome or Icon */}
            <span className="text-[10px]">IN</span>
          </a>
          <a
            href={app.github}
            target="_blank"
            className="btn btn-square btn-ghost btn-sm text-gray-800 bg-gray-100 hover:bg-gray-200"
          >
            <span className="text-[10px]">GH</span>
          </a>
        </div>
      </td>

      {/* Resume Link */}
      <td>
        <a
          href={app.resume}
          target="_blank"
          className="badge badge-primary badge-outline hover:bg-primary hover:text-white cursor-pointer transition-colors p-3"
        >
          View PDF
        </a>
      </td>

      {/* Delete Action */}
      <td>
        <button className="btn btn-circle btn-ghost btn-sm text-red-500 hover:bg-red-50">
          <svg
            xmlns="http://www.w3.org"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default ApplicationsListTable;
