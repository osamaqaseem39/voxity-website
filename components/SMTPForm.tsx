"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Server, Lock, Eye, EyeOff } from "lucide-react";

export default function SMTPForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "info@voxity.io",
    password: "",
    incomingServer: "mail.voxity.io",
    imapPort: "993",
    pop3Port: "995",
    outgoingServer: "mail.voxity.io",
    smtpPort: "465",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("SMTP Configuration:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="glass-strong rounded-2xl p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-gradient-to-br from-[#880c0c]/30 to-[#e21b1b]/30">
          <Mail className="text-[#e21b1b]" size={24} />
        </div>
        <h3 className="text-2xl font-semibold text-white">SMTP Configuration</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Username
          </label>
          <div className="relative">
            <input
              type="email"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 pl-12 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#e21b1b]/50 transition-colors"
              placeholder="info@voxity.io"
            />
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 pl-12 pr-12 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#e21b1b]/50 transition-colors"
              placeholder="Use the email account's password"
            />
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">Use the email account's password</p>
        </div>

        {/* Incoming Server */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Incoming Server
          </label>
          <div className="relative">
            <input
              type="text"
              name="incomingServer"
              value={formData.incomingServer}
              onChange={handleChange}
              className="w-full px-4 py-3 pl-12 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#e21b1b]/50 transition-colors"
              placeholder="mail.voxity.io"
            />
            <Server className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          </div>
        </div>

        {/* Ports Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              IMAP Port
            </label>
            <input
              type="text"
              name="imapPort"
              value={formData.imapPort}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#e21b1b]/50 transition-colors"
              placeholder="993"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              POP3 Port
            </label>
            <input
              type="text"
              name="pop3Port"
              value={formData.pop3Port}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#e21b1b]/50 transition-colors"
              placeholder="995"
            />
          </div>
        </div>

        {/* Outgoing Server */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Outgoing Server
          </label>
          <div className="relative">
            <input
              type="text"
              name="outgoingServer"
              value={formData.outgoingServer}
              onChange={handleChange}
              className="w-full px-4 py-3 pl-12 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#e21b1b]/50 transition-colors"
              placeholder="mail.voxity.io"
            />
            <Server className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          </div>
        </div>

        {/* SMTP Port */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            SMTP Port
          </label>
          <input
            type="text"
            name="smtpPort"
            value={formData.smtpPort}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#e21b1b]/50 transition-colors"
            placeholder="465"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-10 py-5 rounded-lg font-semibold text-lg md:text-xl transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-[#880c0c] to-[#e21b1b] text-white hover:shadow-lg hover:shadow-[#e21b1b]/50"
        >
          <span className="relative z-10">Save SMTP Configuration</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#aa0f0f] to-[#e21b1b] opacity-0 group-hover:opacity-100 transition-opacity"
            initial={false}
          />
        </button>
      </form>
    </motion.div>
  );
}

