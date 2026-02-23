import React from "react";

const ApplicationsListTable = ({ app, index }) => {
  return (
    <tr key={app._id} className="hover:bg-blue-50 transition-colors">
      <th className="text-gray-400">{index + 1}</th>
      <td>
        <span className="font-medium text-gray-700">{app.email}</span>
      </td>
      <td>
        <a
          href={app.linkedIn}
          target="_blank"
          className="btn btn-xs btn-outline btn-info lowercase"
        >
          Profile
        </a>
      </td>
      <td>
        <a
          href={app.github}
          target="_blank"
          className="btn btn-xs btn-outline btn-neutral lowercase"
        >
          GitHub
        </a>
      </td>
      <td>
        <a
          href={app.resume}
          target="_blank"
          className="link link-primary no-underline hover:underline text-sm"
        >
          View Resume
        </a>
      </td>
      <td>
        <button className="btn btn-error btn-xs text-white">Delete</button>
      </td>
    </tr>
  );
};

export default ApplicationsListTable;
