import axios from "axios";
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";

const ViewApplicants = () => {
  // const { jobId } = useParams();
  const applications = useLoaderData();
  const navigate = useNavigate();

  // handle change status

  const handleStatusChange = (e, application) => {
    console.log(e.target.value, application);

    axios
      .patch(`http://localhost:5000/applications/${application}`, {
        status: e.target.value,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 hover:text-primary mb-2 transition-colors"
          >
            <IoArrowBackOutline /> ফিরে যান
          </button>
          <h2 className="text-3xl font-bold text-gray-800">
            আবেদনকারীদের তালিকা
          </h2>
          <p className="text-gray-500">
            মোট আবেদন জমা পড়েছে: {applications.length}টি
          </p>
        </div>

        <div className="flex gap-2">
          <button className="btn btn-outline btn-sm">Export CSV</button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table Head */}
            <thead className="bg-gray-50">
              <tr className="text-gray-600 uppercase text-xs">
                <th>#</th>
                <th>আবেদনকারীর ইমেইল</th>
                <th>প্রোফাইল লিঙ্কসমূহ</th>
                <th>রিজুমে</th>
                <th>স্ট্যাটাস আপডেট</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-50">
              {applications.map((app, index) => (
                <tr
                  key={app._id}
                  className="hover:bg-blue-50/20 transition-colors"
                >
                  <td className="text-gray-400 font-medium">{index + 1}</td>

                  {/* Email */}
                  <td>
                    <div className="flex items-center gap-2 font-semibold text-gray-700">
                      <FaEnvelope className="text-gray-400" />
                      {app.email}
                    </div>
                  </td>

                  {/* Social Links */}
                  <td>
                    <div className="flex gap-3">
                      <a
                        href={app.linkedIn}
                        target="_blank"
                        className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                        title="LinkedIn Profile"
                      >
                        <FaLinkedin size={18} />
                      </a>
                      <a
                        href={app.github}
                        target="_blank"
                        className="p-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all"
                        title="GitHub Profile"
                      >
                        <FaGithub size={18} />
                      </a>
                    </div>
                  </td>

                  {/* Resume */}
                  <td>
                    <a
                      href={app.resume}
                      target="_blank"
                      className="btn btn-ghost btn-sm text-red-500 gap-2 border border-red-100 bg-red-50 hover:bg-red-500 hover:text-white"
                    >
                      <FaFilePdf /> View CV
                    </a>
                  </td>

                  {/* Status Dropdown */}
                  <td>
                    <select
                      onChange={(e) => handleStatusChange(e, app._id)}
                      defaultValue={app.status}
                      className="select select-bordered select-sm w-full max-w-37.5 focus:outline-primary"
                    >
                      <option disabled={true}>Change Status</option>
                      <option>Under Review</option>
                      <option>Shortlisted</option>
                      <option>Rejected</option>
                      <option>Hired</option>
                      <option>Interview</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {applications.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-3xl mt-6">
          <p className="text-xl text-gray-400">এখনও কেউ আবেদন করেনি।</p>
        </div>
      )}
    </div>
  );
};

export default ViewApplicants;
