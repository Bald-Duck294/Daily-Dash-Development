// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// // import { CompanyApi } from "@/features/companies/api/companies.api";
// import {
//   useCompanies,
//   useCompaniesCount,
//   useDeleteCompany,
//   useToggleCompanyStatus,
// } from "@/features/companies/queries/companies.queries";

// import { UsersApi } from "@/features/users/users.api";
// import {
//   Building,
//   Shield,
//   UserCog,
//   Users,
//   UserCheck,
//   TrendingUp,
// } from "lucide-react";

// function StatCard({ label, value, href, loading, accent, icon: Icon }) {
//   const router = useRouter();

//   return (
//     <button
//       disabled={loading || !href}
//       onClick={() => href && router.push(href)}
//       className="
//         group w-full text-left
//         disabled:opacity-60 disabled:cursor-not-allowed
//       "
//     >
//       <div
//         className="
//           relative rounded-2xl p-6
//           border transition-all duration-300
//           transform hover:scale-105
//         "
//         style={{
//           background: accent, // uses --accent-* tokens
//           borderColor: "var(--card-border)",
//           boxShadow: "var(--card-shadow)",
//         }}
//       >
//         {/* Top row */}
//         <div className="flex items-start justify-between mb-4">
//           {/* Icon */}
//           <div
//             className="
//               p-3 rounded-xl shadow-sm
//               transition-transform duration-300
//               group-hover:scale-110
//             "
//             style={{
//               backgroundColor: "var(--card-icon-bg)",
//               color: "var(--card-icon-fg)",
//             }}
//           >
//             <Icon size={24} />
//           </div>
//         </div>

//         {/* Content */}
//         {loading ? (
//           <div className="space-y-2 animate-pulse">
//             <div className="h-4 w-24 rounded bg-black/10 dark:bg-white/10" />
//             <div className="h-8 w-16 rounded bg-black/10 dark:bg-white/10" />
//             <div className="h-3 w-28 rounded bg-black/10 dark:bg-white/10" />
//           </div>
//         ) : (
//           <>
//             <p
//               className="text-sm font-medium mb-1"
//               style={{ color: "var(--card-label)" }}
//             >
//               {label}
//             </p>

//             <div className="flex items-baseline gap-2">
//               <p
//                 className="text-3xl font-bold"
//                 style={{ color: "var(--card-value)" }}
//               >
//                 {value}
//               </p>
//               <TrendingUp size={16} style={{ color: "var(--trend-up)" }} />
//             </div>

//             <p
//               className="text-xs mt-1"
//               style={{ color: "var(--muted-foreground)" }}
//             >
//               Updated just now
//             </p>
//           </>
//         )}
//       </div>
//     </button>
//   );
// }

// export default function DashboardPage() {
//   const [loading, setLoading] = useState(true);
//   const [counts, setCounts] = useState({
//     companies: 0,
//     superadmin: 0,
//     admin: 0,
//     supervisor: 0,
//     cleaner: 0,
//   });

//   console.log(data, "Data");
//   console.log(counts?.companies, "companies count");
//   const companies = data ?? [];

//   console.log(companies?.data?.length, "companies");

//   useEffect(() => {
//     async function load() {
//       try {
//         const usersRes = await UsersApi.getAllUsers();

//         const users = usersRes?.data || [];

//         setCounts({
//           companies: companies?.data?.length || 0,
//           superadmin: users.filter((u) => u.role_id === 1).length,
//           admin: users.filter((u) => u.role_id === 2).length,
//           supervisor: users.filter((u) => u.role_id === 3).length,
//           cleaner: users.filter((u) => u.role_id === 5).length,
//         });
//       } catch (err) {
//         console.error("Dashboard load failed", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     load();
//   }, [companies?.data?.length]);

//   const cards = [
//     {
//       label: "Organizations",
//       value: counts.companies,
//       href: "/companies",
//       accent: "var(--accent-blue)",
//       icon: Building,
//     },
//     {
//       label: "Super Admins",
//       value: counts.superadmin,
//       href: "/roles/superadmin",
//       accent: "var(--accent-purple)",
//       icon: Shield,
//     },
//     {
//       label: "Admins",
//       value: counts.admin,
//       href: "/roles/admin",
//       accent: "var(--accent-green)",
//       icon: UserCog,
//     },
//     {
//       label: "Supervisors",
//       value: counts.supervisor,
//       href: "/roles/supervisor",
//       accent: "var(--accent-yellow)",
//       icon: UserCheck,
//     },
//     {
//       label: "Cleaners",
//       value: counts.cleaner,
//       href: "/roles/cleaner",
//       accent: "var(--accent-pink)",
//       icon: Users,
//     },
//   ];

//   return (
//     <div
//       className="
//     space-y-6 sm:space-y-8
//     rounded-3xl
//     p-4 sm:p-6 lg:p-8
//     bg-[var(--background)]
//     relative
//   "
//     >
//       {/* Page Header */}
//       <div>
//         <h1 className="text-xl font-semibold text-[var(--foreground)]">
//           Dashboard Overview
//         </h1>
//         <p className="mt-1 text-sm text-[var(--sidebar-muted)]">
//           High-level snapshot of system activity
//         </p>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//         {cards.map((card) => (
//           <StatCard key={card.label} {...card} loading={loading} />
//         ))}
//       </div>

//       {/* Company Statistics */}
//       <section
//         className="
//   rounded-xl border border-[var(--sidebar-border)]
//   bg-[var(--background)]
//   p-4 sm:p-6
// "
//       >
//         <h2 className="text-lg font-semibold text-[var(--foreground)]">
//           Company Statistics
//         </h2>
//         <p className="mt-1 text-sm text-[var(--sidebar-muted)]">
//           Detailed analytics and trends will appear here.
//         </p>

//         <div className="mt-4 h-32 flex items-center justify-center rounded-lg border border-dashed border-[var(--sidebar-border)] text-sm text-[var(--sidebar-muted)]">
//           Coming soon
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  useCompaniesCount, 
} from "@/features/companies/queries/companies.queries";
// ✅ Import the TanStack query hook for users
import { useGetAllUsers } from "@/features/users/users.queries";
import {
  Building,
  Shield,
  UserCog,
  Users,
  UserCheck,
  TrendingUp,
} from "lucide-react";

function StatCard({ label, value, href, loading, accent, icon: Icon }) {
  const router = useRouter();

  return (
    <button
      disabled={loading || !href}
      onClick={() => href && router.push(href)}
      className="cursor-pointer group w-full text-left disabled:opacity-60 disabled:cursor-not-allowed"
    >
      <div
        className="relative rounded-2xl p-6 border transition-all duration-300 transform hover:scale-105"
        style={{
          background: accent,
          borderColor: "var(--card-border)",
          boxShadow: "var(--card-shadow)",
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="p-3 rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundColor: "var(--card-icon-bg)",
              color: "var(--card-icon-fg)",
            }}
          >
            <Icon size={24} />
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="space-y-2 animate-pulse">
            <div className="h-4 w-24 rounded bg-black/10 dark:bg-white/10" />
            <div className="h-8 w-16 rounded bg-black/10 dark:bg-white/10" />
            <div className="h-3 w-28 rounded bg-black/10 dark:bg-white/10" />
          </div>
        ) : (
          <>
            <p
              className="text-sm font-medium mb-1"
              style={{ color: "var(--card-label)" }}
            >
              {label}
            </p>

            <div className="flex items-baseline gap-2">
              <p
                className="text-3xl font-bold"
                style={{ color: "var(--card-value)" }}
              >
                {value}
              </p>
              <TrendingUp size={16} style={{ color: "var(--trend-up)" }} />
            </div>

            <p
              className="text-xs mt-1"
              style={{ color: "var(--muted-foreground)" }}
            >
              Updated just now
            </p>
          </>
        )}
      </div>
    </button>
  );
}

export default function DashboardPage() {
  // 1. Fetch Companies Count
  const { data: companiesCountData, isLoading: companiesCountLoading } =
    useCompaniesCount();

  // 2. Fetch All Users via TanStack Query
  const { data: allUsers = [], isLoading: usersLoading } = useGetAllUsers();

  // 3. Process User Counts Efficiently
  // useMemo prevents recalculating counts unless the raw users array changes
  const usersCounts = useMemo(() => {
    return {
      superadmin: allUsers.filter((u) => u.role_id === 1).length,
      admin: allUsers.filter((u) => u.role_id === 2).length,
      supervisor: allUsers.filter((u) => u.role_id === 3).length,
      cleaner: allUsers.filter((u) => u.role_id === 5).length,
    };
  }, [allUsers]);

  // Combined Loading State for the cards
  const isLoading = companiesCountLoading || usersLoading;

  const cards = [
    {
      label: "Organizations",
      value: companiesCountData?.totalCount || 0,
      href: "/companies",
      accent: "var(--accent-blue)",
      icon: Building,
    },
    {
      label: "Super Admins",
      value: usersCounts.superadmin,
      href: "/roles/superadmin",
      accent: "var(--accent-purple)",
      icon: Shield,
    },
    {
      label: "Admins",
      value: usersCounts.admin,
      href: "/roles/admin",
      accent: "var(--accent-green)",
      icon: UserCog,
    },
    {
      label: "Supervisors",
      value: usersCounts.supervisor,
      href: "/roles/supervisor",
      accent: "var(--accent-yellow)",
      icon: UserCheck,
    },
    {
      label: "Cleaners",
      value: usersCounts.cleaner,
      href: "/roles/cleaner",
      accent: "var(--accent-pink)",
      icon: Users,
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 rounded-3xl p-4 sm:p-6 lg:p-8 bg-[var(--background)] relative">
      {/* Page Header */}
      <div>
        <h1 className="text-xl font-semibold text-[var(--foreground)]">
          Dashboard Overview
        </h1>
        <p className="mt-1 text-sm text-[var(--sidebar-muted)]">
          High-level snapshot of system activity
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {cards.map((card) => (
          <StatCard key={card.label} {...card} loading={isLoading} />
        ))}
      </div>

      {/* Company Statistics */}
      <section className="rounded-xl border border-[var(--sidebar-border)] bg-[var(--background)] p-4 sm:p-6">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          Company Statistics
        </h2>
        <p className="mt-1 text-sm text-[var(--sidebar-muted)]">
          Detailed analytics and trends will appear here.
        </p>
        <div className="mt-4 h-32 flex items-center justify-center rounded-lg border border-dashed border-[var(--sidebar-border)] text-sm text-[var(--sidebar-muted)]">
          Coming soon
        </div>
      </section>
    </div>
  );
}
