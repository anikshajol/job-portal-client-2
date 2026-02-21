// eslint-disable-next-line no-unused-vars
import { motion, transform } from "motion/react";
import { Link, useLoaderData } from "react-router-dom";
import { CiLocationOn, CiCalendar, CiDollar, CiMail } from "react-icons/ci";
import { IoArrowBackOutline } from "react-icons/io5";
const JobDetails = () => {
  const job = useLoaderData();
  //   console.log(job);
  // Destructuring job data
  const {
    _id,
    title,
    location,
    jobType,
    salaryRange,
    description,
    company,
    company_logo,
    requirements,
    responsibilities,
    applicationDeadline,
    hr_name,
    hr_email,
  } = job;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-100"
    >
      {/* Back Button */}
      <Link
        to="/"
        className="flex items-center gap-2 text-blue-600 mb-6 hover:underline"
      >
        <IoArrowBackOutline /> Back to Jobs
      </Link>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-8">
        <img
          src={company_logo}
          alt={company}
          className="w-24 h-24 object-contain rounded-xl p-2 bg-gray-50 shadow-sm"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-xl text-blue-600 font-medium">{company}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-gray-500">
            <span className="flex items-center gap-1">
              <CiLocationOn /> {location}
            </span>
            <span className="flex items-center gap-1">
              <CiCalendar /> Deadline: {applicationDeadline}
            </span>
            <span className="badge badge-outline badge-primary">{jobType}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Left Side: Details */}
        <div className="md:col-span-2 space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {responsibilities?.map((res, index) => (
                <li key={index}>{res}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Requirements</h3>
            <div className="flex flex-wrap gap-2">
              {requirements?.map((req, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100"
                >
                  {req}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Right Side: Summary Card */}
        <div className="bg-gray-50 p-6 rounded-2xl h-fit border border-gray-200">
          <h3 className="text-lg font-bold mb-4">Job Summary</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm text-green-600">
                <CiDollar size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Salary Range</p>
                <p className="font-semibold">
                  {salaryRange?.min} - {salaryRange?.max}{" "}
                  {salaryRange?.currency.toUpperCase()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-t pt-4">
              <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                <CiMail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">HR Contact</p>
                <p className="font-semibold">{hr_name}</p>
                <p className="text-xs text-gray-400">{hr_email}</p>
              </div>
            </div>

            <Link
              to={`/apply/${_id}`}
              className="btn btn-primary w-full mt-4 shadow-md hover:scale-105 transition-transform"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobDetails;
