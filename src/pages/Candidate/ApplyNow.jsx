import React from "react";
import { IoArrowBackOutline, IoSendOutline } from "react-icons/io5";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const ApplyNow = () => {
  const { id: jobId } = useParams();
  const navigate = useNavigate();
  const job = useLoaderData();
  const { user } = useAuth();
  //   post
  const handleApply = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const jobData = Object.fromEntries(formData.entries());
    const { linkedIn, github, resume } = jobData;
    // console.log(linkedIn, github, resume);
    const { email } = user;
    const applicationData = {
      jobId,
      linkedIn,
      github,
      resume,
      email,
    };
    console.log(applicationData);

    try {
      const res = await axios.post(
        "http://localhost:5000/applications",
        applicationData,
      );
      console.log(res.data);

      if (res.data.insertedId) {
        toast.success("Your application submitted successfully");
      }
    } catch (error) {
      console.log(error.response?.data?.message);
      toast.error(error.response?.data?.message || "something went wrong");
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-6 cursor-pointer"
        >
          <IoArrowBackOutline /> ফিরে যান
        </button>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            আবেদন করুন: {job?.title}
          </h2>
          <p className="text-gray-600 mt-1">
            কোম্পানি:{" "}
            <span className="font-medium text-blue-600">{job?.company}</span>
          </p>
        </div>

        <form onSubmit={handleApply} className="space-y-6">
          {/* LinkedIn Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                লিঙ্কডইন প্রোফাইল লিঙ্ক
              </span>
            </label>
            <input
              type="url"
              name="linkedIn"
              placeholder="https://linkedin.com"
              className="input input-bordered focus:outline-primary w-full bg-gray-50"
              required
            />
          </div>

          {/* GitHub Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                গিটহাব প্রোফাইল লিঙ্ক
              </span>
            </label>
            <input
              type="url"
              name="github"
              placeholder="https://github.com"
              className="input input-bordered focus:outline-primary w-full bg-gray-50"
              required
            />
          </div>

          {/* Resume/Portfolio Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                রিজুমে বা পোর্টফোলিও লিঙ্ক (Drive/Doc)
              </span>
            </label>
            <input
              type="url"
              name="resume"
              placeholder="গুগল ড্রাইভ বা ড্রপবক্স লিঙ্ক"
              className="input input-bordered focus:outline-primary w-full bg-gray-50"
              required
            />
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-full text-white font-bold flex items-center justify-center gap-2 mt-4">
            <IoSendOutline /> আবেদন জমা দিন
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;
