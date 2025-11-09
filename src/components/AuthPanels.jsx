import { useState } from 'react';
import { Phone, Shield, KeyRound, Mail, Lock, UserCog } from 'lucide-react';

const states = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli and Daman and Diu','Delhi','Jammu and Kashmir','Ladakh','Lakshadweep','Puducherry'
];

const districtsTN = ['Chennai','Coimbatore','Madurai','Tiruchirappalli','Salem','Erode','Tirunelveli','Vellore','Tiruppur','Thoothukudi'];

export default function AuthPanels() {
  const [otpStage, setOtpStage] = useState(false);
  const [showAddress, setShowAddress] = useState(false);

  return (
    <section id="login" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Customer Login / Signup */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Customer Login</h3>
          </div>

          {!otpStage && (
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mobile Number</label>
              <div className="flex items-center overflow-hidden rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-emerald-500 dark:border-gray-700">
                <span className="px-3 text-sm text-gray-500">+91</span>
                <input type="tel" placeholder="9XXXXXXXXX" className="w-full border-0 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-gray-400" />
              </div>
              <button onClick={() => setOtpStage(true)} className="mt-2 w-full rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">Send OTP</button>
            </div>
          )}

          {otpStage && !showAddress && (
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Enter OTP</label>
              <div className="flex items-center overflow-hidden rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-emerald-500 dark:border-gray-700">
                <KeyRound className="ml-3 h-4 w-4 text-gray-400" />
                <input type="text" inputMode="numeric" maxLength={6} placeholder="******" className="w-full border-0 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-gray-400" />
              </div>
              <div className="flex gap-2">
                <button onClick={() => setShowAddress(true)} className="w-full rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">Verify</button>
                <button onClick={() => setOtpStage(false)} className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800">Back</button>
              </div>
            </div>
          )}

          {showAddress && (
            <div className="mt-4 space-y-3">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Complete your address</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="block text-xs text-gray-500">State</label>
                  <select defaultValue="Tamil Nadu" className="mt-1 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm dark:border-gray-700">
                    {states.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs text-gray-500">District</label>
                  <select defaultValue="Coimbatore" className="mt-1 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm dark:border-gray-700">
                    {districtsTN.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Door No.</label>
                  <input className="mt-1 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm outline-none dark:border-gray-700" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Flat No.</label>
                  <input className="mt-1 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm outline-none dark:border-gray-700" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500">House Name</label>
                  <input className="mt-1 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm outline-none dark:border-gray-700" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Floor</label>
                  <input className="mt-1 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm outline-none dark:border-gray-700" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Pincode</label>
                  <input inputMode="numeric" className="mt-1 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm outline-none dark:border-gray-700" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500">Region</label>
                  <input className="mt-1 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm outline-none dark:border-gray-700" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs text-gray-500">Area</label>
                  <input className="mt-1 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm outline-none dark:border-gray-700" />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs text-gray-500">Geo coordinates</label>
                  <input placeholder="Lat, Lng (Mappls integration later)" className="mt-1 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm outline-none dark:border-gray-700" />
                </div>
              </div>
              <div className="mt-2 flex gap-2">
                <a href="#dashboard" className="w-full rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-emerald-700">Save & Continue</a>
                <a href="#dashboard" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-center text-sm font-medium text-gray-800 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800">Skip for now</a>
              </div>
            </div>
          )}
        </div>

        {/* Officials Login */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center gap-2">
            <UserCog className="h-5 w-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Officials Login</h3>
          </div>

          <div className="grid gap-3">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
            <div className="flex gap-3">
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="radio" name="role" defaultChecked className="accent-emerald-600" /> Admin
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="radio" name="role" className="accent-emerald-600" /> Delivery Agent
              </label>
            </div>
            <div className="mt-2 grid gap-3">
              <div className="flex items-center overflow-hidden rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-emerald-500 dark:border-gray-700">
                <Mail className="ml-3 h-4 w-4 text-gray-400" />
                <input type="email" placeholder="email@example.com" className="w-full border-0 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-gray-400" />
              </div>
              <div className="flex items-center overflow-hidden rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-emerald-500 dark:border-gray-700">
                <Lock className="ml-3 h-4 w-4 text-gray-400" />
                <input type="password" placeholder="••••••••" className="w-full border-0 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-gray-400" />
              </div>
              <button className="w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900">Sign In</button>
              <p className="text-xs text-gray-500">For testing we will use encrypted demo credentials stored securely.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
