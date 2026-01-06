const Dashboard = () => {
  return (
    <section className="py-[10px] bg-white">
      <div className="max-w-[1523px] mx-auto px-[140px]">

        {/* Header */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[60px] leading-[48px] font-bold text-[#262C36] mb-4">
            Smart Admin Dashboard
          </h2>
          <p className="text-[15px] leading-[28px] font-semibold text-[#262C36] max-w-[620px] mx-auto">
            A centralized system to manage interpreters, users, and platform activity.
          </p>
        </div>

        {/* 3 Column Layout */}
        <div className="grid grid-cols-[240px_1fr_240px] items-start gap-[30px]">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-[25px]">

            {/* 01 */}
            <div className="flex flex-col gap-[4px]">
              <span className="block text-[48px] leading-[60px] font-semibold
                bg-[linear-gradient(179.86deg,#D8D8D8_0.12%,rgba(255,255,255,0)_158.83%)]
                bg-clip-text text-transparent">
                01
              </span>

              <div className="flex flex-col gap-[4px]">
                <h4 className="text-[21px] leading-[30px] font-semibold text-[#262C36]">
                  User Management
                </h4>
                <p className="text-[15px] leading-[28px]  text-[#262C36]">
                  Control and verify interpreters, customers, and platform members.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="flex flex-col gap-[4px]">
              <span className="block text-[48px] leading-[60px] font-semibold
                bg-[linear-gradient(179.86deg,#D8D8D8_0.12%,rgba(255,255,255,0)_158.83%)]
                bg-clip-text text-transparent">
                03
              </span>

              <div className="flex flex-col gap-[4px]">
                <h4 className="text-[21px] leading-[30px] font-semibold text-[#262C36]">
                  Performance Analytics
                </h4>
                <p className="text-[15px] leading-[28px] text-[#262C36]">
                  Track live data, session metrics, and platform performance.
                </p>
              </div>
            </div>

          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <img
              src="/admin-dashboard.png"
              alt="Admin Dashboard"
              className="w-full max-w-[590px]"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-[25px]">

            {/* 02 */}
            <div className="flex flex-col gap-[4px]">
              <span className="block text-[48px] leading-[60px] font-semibold
                bg-[linear-gradient(179.86deg,#D8D8D8_0.12%,rgba(255,255,255,0)_158.83%)]
                bg-clip-text text-transparent">
                02
              </span>

              <div className="flex flex-col gap-[4px]">
                <h4 className="text-[21px] leading-[30px] font-semibold text-[#262C36]">
                  Interpreter Approvals
                </h4>
                <p className="text-[15px] leading-[28px]  text-[#262C36]">
                  Review applications, certifications, and onboard new interpreters.
                </p>
              </div>
            </div>

            {/* 04 */}
            <div className="flex flex-col gap-[4px]">
              <span className="block text-[48px] leading-[60px] font-semibold
                bg-[linear-gradient(179.86deg,#D8D8D8_0.12%,rgba(255,255,255,0)_158.83%)]
                bg-clip-text text-transparent">
                04
              </span>

              <div className="flex flex-col gap-[4px]">
                <h4 className="text-[21px] leading-[30px] font-semibold text-[#262C36]">
                  Security Settings
                </h4>
                <p className="text-[15px] leading-[28px]  text-[#262C36]">
                  Manage permissions, data privacy, and system security protocols.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;