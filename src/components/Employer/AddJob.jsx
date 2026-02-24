import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const AddJob = () => {
  const { user } = useAuth();
  const handleAddJob = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const jobData = Object.fromEntries(formData.entries());
    const companyLogo = jobData.company_logo;
    // console.log(jobData);

    const { max, min, currency, responsibilities, requirements, ...rest } =
      jobData;

    const salaryRange = {
      max: parseFloat(max),
      min: parseFloat(min),
      currency: currency,
    };

    const responsibilitiesArray = responsibilities
      .split(",")
      .map((t) => t.trim());
    const requirementsArray = requirements.split(",").map((t) => t.trim());
    // console.log(responsibilitiesArray);
    // console.log(requirementsArray);

    const jobs = {
      ...rest,
      salaryRange,
      responsibilities: responsibilitiesArray,
      requirements: requirementsArray,
      status: "active",
    };

    // image api
    try {
      if (companyLogo && companyLogo.size > 0) {
        const imageData = new FormData();
        imageData.append("image", companyLogo);
        const res = await axios.post(
          `https://api.imgbb.com/1/upload?&key=${import.meta.env.VITE_IMAGEAPI}`,
          imageData,
        );

        console.log(res.data.data);
        if (res.data.success) {
          jobs.company_logo = res.data?.data?.display_url;
        }
      }

      console.log(jobs);

      //   post job data

      try {
        const res = await axios.post("http://localhost:5000/jobs", jobs);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 italic">
            Post a New Job
          </h2>
          <p className="text-gray-500 mt-2">
            আপনার কোম্পানির জন্য সেরা দক্ষ কর্মী খুঁজে নিন
          </p>
        </div>

        <form
          onSubmit={handleAddJob}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Job Title */}
          <div className="form-control">
            <label className="label font-semibold">Job Title</label>
            <input
              type="text"
              name="title"
              placeholder="Software Engineer"
              className="input input-bordered focus:input-primary"
              required
            />
          </div>
          {/* Job Location */}
          <div className="form-control">
            <label className="label font-semibold">Job Location</label>
            <input
              type="text"
              name="location"
              placeholder="Chittagong"
              className="input input-bordered focus:input-primary"
              required
            />
          </div>

          {/* Job Type */}
          <div className="form-control">
            <label className="label font-semibold">Job Type</label>
            <select
              name="jobType"
              className="select select-bordered focus:select-primary"
            >
              <option>Hybrid</option>
              <option>On-site</option>
              <option>Remote</option>
            </select>
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label font-semibold">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Engineering"
              className="input input-bordered"
              required
            />
          </div>

          {/* Application Deadline */}
          <div className="form-control">
            <label className="label font-semibold">Application Deadline</label>
            <input
              type="date"
              name="applicationDeadline"
              className="input input-bordered"
              required
            />
          </div>

          {/* Salary Range (Min, Max, Currency) */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Salary Range</label>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="number"
                name="min"
                placeholder="Min"
                className="input input-bordered"
                required
              />
              <input
                type="number"
                name="max"
                placeholder="Max"
                className="input input-bordered"
                required
              />
              <select
                name="currency"
                className="select select-bordered uppercase font-bold"
              >
                <option>bdt</option>
                <option>usd</option>
                <option>inr</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Job Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered h-24"
              placeholder="Describe the role..."
            ></textarea>
          </div>

          {/* Company Info */}
          <div className="form-control">
            <label className="label font-semibold">Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Favorite IT"
              className="input input-bordered"
              required
            />
          </div>

          {/* Photo */}
          <fieldset className="fieldset">
            <label className="label font-semibold"> Company Logo </label>
            <input
              type="file"
              name="company_logo"
              className="file-input file-input-primary"
            />
          </fieldset>

          {/* HR Info */}
          <div className="form-control">
            <label className="label font-semibold">HR Name</label>
            <input
              type="text"
              name="hr_name"
              placeholder="Farhan Rahman"
              className="input input-bordered"
              required
              defaultValue={user?.displayName}
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">HR Email</label>
            <input
              type="email"
              name="hr_email"
              placeholder="hr@tech.com"
              className="input input-bordered"
              required
              defaultValue={user?.email}
            />
          </div>

          {/* Requirements (Comma separated) */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold">
              Requirements (comma separated)
            </label>
            <input
              type="text"
              name="requirements"
              placeholder="React, Node.js, MongoDB"
              className="input input-bordered"
              required
            />
          </div>

          {/* Responsibilities (New line separated) */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold">
              Responsibilities (comma separated)
            </label>
            <textarea
              name="responsibilities"
              className="textarea textarea-bordered h-24"
              placeholder="Develop software&#10;Collaborate with team"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control md:col-span-2 mt-6">
            <button className="btn btn-primary w-full text-lg uppercase font-bold">
              Submit Job Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
