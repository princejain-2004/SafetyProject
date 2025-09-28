import { useState } from "react";

const WorkshopPage = () => {
  const [tab, setTab] = useState("book");

  // State for booking workshops
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [bookedWorkshops, setBookedWorkshops] = useState([]);

  // State for requests (dummy data for now)
  const [requests, setRequests] = useState([
    { id: 1, name: "AI & Safety Training", requestedBy: "Prince Jain" },
    { id: 2, name: "Fire Safety Awareness", requestedBy: "Alex Johnson" },
  ]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !description) {
      alert("Please fill all fields!");
      return;
    }

    const newWorkshop = {
      id: Date.now(),
      title,
      date,
      description,
    };

    setBookedWorkshops([...bookedWorkshops, newWorkshop]);

    // Reset form
    setTitle("");
    setDate("");
    setDescription("");
    alert("Workshop booked successfully!");
  };

  // Approve Request
  const approveRequest = (id) => {
    const approved = requests.find((r) => r.id === id);
    alert(`✅ Approved workshop: ${approved.name}`);
    setRequests(requests.filter((r) => r.id !== id));
  };

  // Reject Request
  const rejectRequest = (id) => {
    const rejected = requests.find((r) => r.id === id);
    alert(`❌ Rejected workshop: ${rejected.name}`);
    setRequests(requests.filter((r) => r.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Workshops</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setTab("book")}
          className={`px-4 py-2 rounded-lg ${
            tab === "book" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Book Workshop
        </button>
        <button
          onClick={() => setTab("requests")}
          className={`px-4 py-2 rounded-lg ${
            tab === "requests" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Workshop Requests
        </button>
      </div>

      {/* Book Workshop Form */}
      {tab === "book" && (
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 max-w-lg"
          >
            <div className="mb-4">
              <label className="block font-semibold">Workshop Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter workshop name"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter details..."
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition"
            >
              Book Workshop
            </button>
          </form>

          {/* Show booked workshops */}
          {bookedWorkshops.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-bold mb-3">Booked Workshops</h2>
              <ul className="space-y-3">
                {bookedWorkshops.map((w) => (
                  <li
                    key={w.id}
                    className="p-4 border rounded-lg shadow bg-gray-50"
                  >
                    <p className="font-semibold">{w.title}</p>
                    <p className="text-sm text-gray-600">{w.date}</p>
                    <p className="text-sm">{w.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Workshop Requests */}
      {tab === "requests" && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Pending Requests</h2>
          {requests.length > 0 ? (
            <ul className="space-y-4">
              {requests.map((req) => (
                <li
                  key={req.id}
                  className="p-4 border rounded-lg flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">{req.name}</p>
                    <p className="text-sm text-gray-500">
                      Requested by: {req.requestedBy}
                    </p>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => approveRequest(req.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => rejectRequest(req.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Reject
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No pending requests.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkshopPage;
