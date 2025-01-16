"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function UserProfile() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <p className="text-green-300 text-xl">You are not signed in.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="border-b border-green-500/20 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-green-500">Profile</h1>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 text-sm font-medium bg-green-600 hover:bg-green-700 rounded-full text-white shadow-lg transition-all"
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Info */}
        <section className="bg-black/80 rounded-lg p-6 border border-green-500/20">
          <div className="flex items-center gap-6">
            <img
              src={session.user?.image || "/avatar.jfif"}
              alt="User Avatar"
              className="h-24 w-24 rounded-full border border-green-500/20"
            />
            <div>
              <h2 className="text-2xl font-bold text-green-300">{session.user?.name}</h2>
              <p className="text-green-400">{session.user?.email}</p>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="bg-black/80 rounded-lg p-6 border border-green-500/20 mt-8">
          <h3 className="text-xl font-bold text-green-300">Recent Activity</h3>
          <ul className="mt-4 text-green-400">
            <li>Completed 5 tasks this week</li>
            <li>Added 2 new waste types</li>
            <li>Updated profile picture</li>
          </ul>
        </section>

        {/* Account Settings */}
        <section className="bg-black/80 rounded-lg p-6 border border-green-500/20 mt-8">
          <h3 className="text-xl font-bold text-green-300">Account Settings</h3>
          <form className="mt-4">
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-green-400">Name</label>
                <input
                  type="text"
                  value={session.user?.name || ""}
                  className="w-full bg-black border border-green-500/20 rounded-lg p-2 text-green-300"
                />
              </div>
              <div>
                <label className="text-green-400">Email</label>
                <input
                  type="email"
                  value={session.user?.email || ""}
                  className="w-full bg-black border border-green-500/20 rounded-lg p-2 text-green-300"
                />
              </div>
              <div>
                <label className="text-green-400">Profile Picture</label>
                <input
                  type="file"
                  className="w-full text-green-300"
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2 mt-4 transition-all"
              >
                Save Changes
              </button>
            </div>
          </form>
        </section>

        {/* Notification Preferences */}
        <section className="bg-black/80 rounded-lg p-6 border border-green-500/20 mt-8">
          <h3 className="text-xl font-bold text-green-300">Notification Preferences</h3>
          <div className="mt-4">
            <label className="flex items-center gap-2 text-green-400">
              <input type="checkbox" className="text-green-500" /> Receive email notifications
            </label>
            <label className="flex items-center gap-2 text-green-400 mt-2">
              <input type="checkbox" className="text-green-500" /> Receive app push notifications
            </label>
          </div>
        </section>

        {/* Security Settings */}
        <section className="bg-black/80 rounded-lg p-6 border border-green-500/20 mt-8">
          <h3 className="text-xl font-bold text-green-300">Security Settings</h3>
          <button
            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2 mt-4 transition-all"
          >
            Change Password
          </button>
        </section>

        {/* Social Links */}
        <section className="bg-black/80 rounded-lg p-6 border border-green-500/20 mt-8">
          <h3 className="text-xl font-bold text-green-300">Social Links</h3>
          <div className="mt-4">
            <div className="flex items-center gap-2 text-green-400">
              <label>Twitter</label>
              <input
                type="text"
                placeholder="https://twitter.com/username"
                className="w-full bg-black border border-green-500/20 rounded-lg p-2 text-green-300"
              />
            </div>
            <div className="flex items-center gap-2 text-green-400 mt-4">
              <label>LinkedIn</label>
              <input
                type="text"
                placeholder="https://linkedin.com/in/username"
                className="w-full bg-black border border-green-500/20 rounded-lg p-2 text-green-300"
              />
            </div>
          </div>
        </section>

        {/* Delete Account */}
        <section className="bg-black/80 rounded-lg p-6 border border-green-500/20 mt-8">
          <h3 className="text-xl font-bold text-red-400">Delete Account</h3>
          <p className="text-red-500">This action cannot be undone. Your data will be permanently deleted.</p>
          <button
            className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-2 mt-4 transition-all"
          >
            Delete Account
          </button>
        </section>
      </main>
    </div>
  );
}
