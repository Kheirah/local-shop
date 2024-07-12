"use client";

export default function Register() {
  async function handleCreateShop(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch("/api/register-shop", {
      method: "POST",
      body: formData,
    });
    const message = await response.text();
    if (message === "success") {
      alert("Shop created!");
      event.target.reset();
    } else {
      alert("Shop creation failed.");
    }
  }

  return (
    <>
      <h3 className="text-xl text-yellow-600 p-10 bg-yellow-100 border-8 border-yellow-800">
        Register Page
      </h3>
      <form
        className="p-10 text-black bg-yellow-100 border-8 border-yellow-800"
        onSubmit={handleCreateShop}
      >
        <label htmlFor="shopName">Shop Name:</label>
        <input type="text" id="shopName" name="shopName" />
        <label htmlFor="urlName">Shop URL:</label>
        <input type="text" id="urlName" name="urlName" />
        <label htmlFor="ownerName">Owner Name:</label>
        <input type="text" id="ownerName" name="ownerName" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
