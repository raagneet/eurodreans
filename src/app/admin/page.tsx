"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Search, 
  Trash2, 
  Download, 
  User, 
  Mail, 
  BookOpen, 
  MessageSquare, 
  Calendar, 
  ArrowLeft, 
  Database,
  Briefcase,
  Lock,
  Eye,
  EyeOff,
  AlertTriangle
} from "lucide-react";

interface Enquiry {
  id: string;
  name: string;
  email: string;
  interest: string;
  message: string;
  date: string;
}

export default function AdminPage() {
  // Authentication states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Dashboard states
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterInterest, setFilterInterest] = useState("all");
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  // Custom Modal states
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [showDeleteConfirmId, setShowDeleteConfirmId] = useState<string | null>(null);

  // Check authentication on mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem("admin_authenticated");
    if (authStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await fetch("/api/enquiries");
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data);
      }
    } catch (err) {
      console.error("Failed to load enquiries from API:", err);
    }
  };

  // Load enquiries if logged in
  useEffect(() => {
    if (isLoggedIn) {
      fetchEnquiries();
    }
  }, [isLoggedIn]);

  // Handle Login submission
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: usernameInput, password: passwordInput })
      });
      
      const data = await response.json();
      
      if (data.success) {
        sessionStorage.setItem("admin_authenticated", "true");
        setIsLoggedIn(true);
        setLoginError("");
      } else {
        setLoginError(data.message || "Invalid Admin ID or Password. Please try again.");
      }
    } catch (error) {
      setLoginError("An error occurred during login. Please try again.");
    }
  };

  // Handle Log Out
  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated");
    setIsLoggedIn(false);
    setUsernameInput("");
    setPasswordInput("");
  };

  // Filter logic
  const filteredEnquiries = enquiries.filter((enq) => {
    const matchesSearch = 
      enq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enq.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesInterest = filterInterest === "all" || enq.interest === filterInterest;
    
    return matchesSearch && matchesInterest;
  });

  // Calculate stats
  const totalCount = enquiries.length;
  const mastersCount = enquiries.filter(e => e.interest === "masters").length;
  const bachelorsCount = enquiries.filter(e => e.interest === "bachelors").length;
  const scholarshipCount = enquiries.filter(e => e.interest === "scholarship").length;
  const mbbsCount = enquiries.filter(e => e.interest === "mbbs" || e.interest === "imat").length;

  // Clear all enquiries confirm
  const confirmClearAll = async () => {
    try {
      const res = await fetch("/api/enquiries?clearAll=true", {
        method: "DELETE"
      });
      if (res.ok) {
        setEnquiries([]);
        setSelectedEnquiry(null);
      }
    } catch (err) {
      console.error("Failed to clear enquiries:", err);
    } finally {
      setShowClearConfirm(false);
    }
  };

  // Delete individual enquiry confirm
  const confirmDeleteIndividual = async () => {
    if (showDeleteConfirmId) {
      try {
        const res = await fetch(`/api/enquiries?id=${showDeleteConfirmId}`, {
          method: "DELETE"
        });
        if (res.ok) {
          const updated = enquiries.filter(item => item.id !== showDeleteConfirmId);
          setEnquiries(updated);
          if (selectedEnquiry?.id === showDeleteConfirmId) {
            setSelectedEnquiry(null);
          }
        }
      } catch (err) {
        console.error("Failed to delete enquiry:", err);
      } finally {
        setShowDeleteConfirmId(null);
      }
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (filteredEnquiries.length === 0) {
      alert("No data to export.");
      return;
    }
    const headers = ["Name", "Email", "Interest", "Message", "Submission Date"];
    const rows = filteredEnquiries.map(e => [
      `"${e.name.replace(/"/g, '""')}"`,
      `"${e.email.replace(/"/g, '""')}"`,
      `"${e.interest.replace(/"/g, '""')}"`,
      `"${e.message.replace(/"/g, '""')}"`,
      `"${e.date}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `eurodreams_enquiries_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // RENDER LOGIN SCREEN
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-center p-6 font-sans">
        
        {/* Decorative Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[35vw] h-[35vw] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[35vw] h-[35vw] bg-indigo-100/50 rounded-full blur-[120px] pointer-events-none translate-y-1/2" />

        <div className="w-full max-w-md relative z-10">
          
          {/* Logo Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">
              Eurodreams Admin
            </h1>
            <p className="text-slate-500 text-xs mt-1">Authorized access only. Authentication required.</p>
          </div>

          {/* Login Card */}
          <div className="bg-white border border-slate-250 shadow-xl rounded-3xl p-8">
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              
              {loginError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-650 text-center">
                  {loginError}
                </div>
              )}

              {/* Admin ID input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Admin ID</label>
                <input
                  type="text"
                  required
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  placeholder="Enter admin ID"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl text-sm text-slate-800 focus:outline-none placeholder-slate-400 transition-colors"
                />
              </div>

              {/* Password input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Password</label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl text-sm text-slate-800 focus:outline-none placeholder-slate-400 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/10 active:scale-95 shadow-md shadow-blue-600/5 mt-4"
              >
                Access Dashboard
              </button>
            </form>
          </div>

          <div className="text-center mt-8">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home Page
            </Link>
          </div>

        </div>
      </div>
    );
  }

  // RENDER MAIN DASHBOARD
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900 relative">
      
      {/* Custom Confirmation Modals */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 max-w-sm w-full shadow-2xl">
            <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center mb-4 text-red-500">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Clear All Enquiries?</h3>
            <p className="text-slate-500 text-xs mb-6 leading-relaxed">
              Are you sure you want to delete all submissions? This action is permanent and cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmClearAll}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-lg transition-colors shadow-md shadow-red-500/20"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteConfirmId && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 max-w-sm w-full shadow-2xl">
            <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center mb-4 text-red-500">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2">Delete Enquiry?</h3>
            <p className="text-slate-500 text-xs mb-6 leading-relaxed">
              Are you sure you want to delete this applicant's enquiry?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowDeleteConfirmId(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteIndividual}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-lg transition-colors shadow-md shadow-red-500/20"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Navbar */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-500 hover:text-slate-800">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h1 className="font-extrabold text-xl tracking-tight text-slate-900">
              Eurodreams Admin Portal
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            disabled={filteredEnquiries.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 text-xs font-bold text-white rounded-lg shadow-lg shadow-blue-500/10 transition-all hover:scale-[1.02] active:scale-95"
          >
            <Download className="w-4 h-4" /> Export CSV
          </button>
          <button
            onClick={() => setShowClearConfirm(true)}
            disabled={enquiries.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 disabled:opacity-50 text-red-600 text-xs font-bold border border-red-150 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" /> Clear All
          </button>
          <button
            onClick={handleLogout}
            className="px-3.5 py-2 text-xs font-bold text-slate-600 hover:text-slate-800 bg-slate-100 border border-slate-200 hover:border-slate-350 rounded-lg transition-colors"
          >
            Log Out
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 flex flex-col gap-8">
        
        {/* Stats Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm">
            <span className="text-slate-500 font-bold text-xs uppercase tracking-wider">Total Enquiries</span>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-4xl font-extrabold text-slate-900">{totalCount}</span>
              <span className="text-slate-500 text-xs font-semibold">submissions</span>
            </div>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm">
            <span className="text-slate-500 font-bold text-xs uppercase tracking-wider">Master's Interest</span>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-4xl font-extrabold text-blue-600">{mastersCount}</span>
              <span className="text-slate-500 text-xs font-semibold">program leads</span>
            </div>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm">
            <span className="text-slate-500 font-bold text-xs uppercase tracking-wider">Bachelor's Interest</span>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-4xl font-extrabold text-emerald-600">{bachelorsCount}</span>
              <span className="text-slate-500 text-xs font-semibold">program leads</span>
            </div>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm">
            <span className="text-slate-500 font-bold text-xs uppercase tracking-wider">MBBS & IMAT</span>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-4xl font-extrabold text-rose-600">{mbbsCount}</span>
              <span className="text-slate-500 text-xs font-semibold">medical leads</span>
            </div>
          </div>
          <div className="p-5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm">
            <span className="text-slate-500 font-bold text-xs uppercase tracking-wider">Scholarship Help</span>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-4xl font-extrabold text-indigo-600">{scholarshipCount}</span>
              <span className="text-slate-500 text-xs font-semibold">financial aid</span>
            </div>
          </div>
        </section>

        {/* Filter Controls */}
        <section className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <div className="relative w-full sm:max-w-md">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search by name, email, or message keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-450 focus:outline-none focus:bg-white focus:border-blue-600 transition-all text-sm"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Help Area:</span>
            <select
              value={filterInterest}
              onChange={(e) => setFilterInterest(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-slate-700 font-medium px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 cursor-pointer transition-colors"
            >
              <option value="all">All Enquiries</option>
              <option value="bachelors">Bachelor's Degree</option>
              <option value="masters">Master's Degree</option>
              <option value="mbbs">MBBS in Italy</option>
              <option value="imat">IMAT Prep Support</option>
              <option value="scholarship">100% Scholarship</option>
            </select>
          </div>
        </section>

        {/* Content Layout */}
        <section className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start min-h-[450px]">
          
          {/* Enquiries List */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
            <div className="p-4 border-b border-slate-250 bg-slate-50/50 flex justify-between items-center">
              <h2 className="font-bold text-sm text-slate-500 uppercase tracking-wider">Submissions</h2>
              <span className="text-xs font-bold bg-slate-200 text-slate-650 px-2 py-1 rounded">
                Showing {filteredEnquiries.length}
              </span>
            </div>

            <div className="divide-y divide-slate-100 overflow-y-auto max-h-[500px] flex-1">
              {filteredEnquiries.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
                  <Database className="w-12 h-12 text-slate-350 mb-4 animate-pulse" />
                  <p className="text-slate-800 font-extrabold text-lg mb-1">No enquiries found</p>
                  <p className="text-slate-500 text-xs max-w-xs leading-relaxed">
                    {enquiries.length === 0 
                      ? "No one has submitted the bottom contact form yet." 
                      : "Try widening your search terms or changing the select filter."}
                  </p>
                </div>
              ) : (
                filteredEnquiries.map((enq) => (
                  <div
                    key={enq.id}
                    onClick={() => setSelectedEnquiry(enq)}
                    className={`p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors ${
                      selectedEnquiry?.id === enq.id ? "bg-slate-100/50 border-l-4 border-blue-600 pl-4" : ""
                    }`}
                  >
                    <div className="space-y-2 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-slate-900 text-base truncate">{enq.name}</h3>
                        <span className={`text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-full ${
                          enq.interest === "masters" ? "bg-blue-50 text-blue-650" :
                          enq.interest === "bachelors" ? "bg-emerald-50 text-emerald-650" :
                          enq.interest === "mbbs" ? "bg-rose-50 text-rose-650" :
                          enq.interest === "imat" ? "bg-pink-50 text-pink-650" :
                          "bg-indigo-50 text-indigo-650"
                        }`}>
                          {enq.interest === "mbbs" ? "MBBS in Italy" : enq.interest === "imat" ? "IMAT Prep" : enq.interest === "scholarship" ? "Scholarship" : enq.interest}
                        </span>
                      </div>
                      <p className="text-slate-500 text-xs flex items-center gap-1.5 truncate">
                        <Mail className="w-3.5 h-3.5 text-slate-400" /> {enq.email}
                      </p>
                      <p className="text-slate-500 text-xs line-clamp-2 pr-6 leading-relaxed">
                        {enq.message}
                      </p>
                    </div>

                    <div className="flex flex-col items-end justify-between self-stretch shrink-0">
                      <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {enq.date.split(",")[0]}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDeleteConfirmId(enq.id);
                        }}
                        className="p-1.5 bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 text-slate-450 hover:text-red-500 rounded-lg transition-colors mt-2"
                        title="Delete Enquiry"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Enquiry Detail Viewer */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col h-full min-h-[380px]">
            <div className="p-4 border-b border-slate-250 bg-slate-50/50">
              <h2 className="font-bold text-sm text-slate-500 uppercase tracking-wider">Enquiry Details</h2>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between gap-6">
              {selectedEnquiry ? (
                <div className="space-y-6 flex-1">
                  
                  {/* Sender details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Applicant</p>
                        <h3 className="font-extrabold text-slate-900 text-base truncate leading-tight">{selectedEnquiry.name}</h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-emerald-650" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</p>
                        <a href={`mailto:${selectedEnquiry.email}`} className="font-bold text-slate-700 hover:text-blue-600 underline text-sm truncate block leading-tight">
                          {selectedEnquiry.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5 text-indigo-605" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target Objective</p>
                        <span className={`text-xs font-black tracking-wider uppercase px-2 py-0.5 rounded ${
                          selectedEnquiry.interest === "masters" ? "bg-blue-50 text-blue-650" :
                          selectedEnquiry.interest === "bachelors" ? "bg-emerald-50 text-emerald-650" :
                          selectedEnquiry.interest === "mbbs" ? "bg-rose-50 text-rose-650" :
                          selectedEnquiry.interest === "imat" ? "bg-pink-50 text-pink-650" :
                          "bg-indigo-50 text-indigo-650"
                        }`}>
                          {selectedEnquiry.interest === "mbbs" ? "MBBS in Italy" : selectedEnquiry.interest === "imat" ? "IMAT Prep" : selectedEnquiry.interest === "scholarship" ? "100% Scholarship" : selectedEnquiry.interest}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                        <Calendar className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Submitted On</p>
                        <p className="text-slate-700 text-sm font-semibold leading-tight">{selectedEnquiry.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Message body */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-450 uppercase tracking-wider">
                      <MessageSquare className="w-3.5 h-3.5" /> Message
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">
                      {selectedEnquiry.message}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                  <BookOpen className="w-12 h-12 text-slate-300 mb-3" />
                  <p className="text-slate-400 font-bold text-sm">Select an enquiry to view full details</p>
                  <p className="text-slate-450 text-xs max-w-xs mt-1">
                    Click any item in the left column list to see full name, email, target objective, and message text.
                  </p>
                </div>
              )}
            </div>
          </div>
          
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-slate-200 bg-white text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Eurodreams. All rights reserved. Secured Admin Dashboard.</p>
      </footer>

    </div>
  );
}
