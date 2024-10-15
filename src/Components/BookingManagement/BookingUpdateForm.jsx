import { useState } from 'react'

export default function BookingUpdateForm() {
  const [formData, setFormData] = useState({
    vendor: '',
    bookingType: '',
    bookingStatus: '',
    bookingDate: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }
  const handleCancel=()=>{}
  const handleReset = () => {
    setFormData({
      vendor: '',
      bookingType: '',
      bookingStatus: '',
      bookingDate: '',
      description: ''
    })
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Enter Booking Details</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="vendor" className="block text-lg font-medium text-gray-700 mb-2">
              Vendor List
            </label>
            <select
              id="vendor"
              name="vendor"
              value={formData.vendor}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Vendors</option>
              {/* Add vendor options here */}
            </select>
          </div>
          <div>
            <label htmlFor="bookingType" className="block text-lg font-medium text-gray-700 mb-2">
              Booking Type
            </label>
            <select
              id="bookingType"
              name="bookingType"
              value={formData.bookingType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Booking Status</option>
              {/* Add booking type options here */}
            </select>
          </div>
          <div>
            <label htmlFor="bookingStatus" className="block text-lg font-medium text-gray-700 mb-2">
              Booking Status
            </label>
            <select
              id="bookingStatus"
              name="bookingStatus"
              value={formData.bookingStatus}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Booking Status</option>
              {/* Add booking status options here */}
            </select>
          </div>
          <div>
            <label htmlFor="bookingDate" className="block text-lg font-medium text-gray-700 mb-2">
              Booking Date for
            </label>
            <input
              type="date"
              id="bookingDate"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="dd-mm-yyyy"
            />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}