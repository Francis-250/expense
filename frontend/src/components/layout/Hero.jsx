import { quickActions } from "../../utils/data";

export default function Hero() {
  return (
    <main className="flex-1 p-4 overflow-auto md:m-4 md:rounded-xl bg-background">
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        {/* Dashboard Cards Grid */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {/* Pending Tasks Card */}
          <div className="flex flex-col bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
            <header className="border-b border-border p-4">
              <h2 className="text-xl font-semibold text-foreground capitalize tracking-tight">
                Pending Tasks
              </h2>
            </header>
            <div className="flex flex-col gap-3 p-4 min-h-[120px]">
              <div className="text-muted-foreground text-sm">
                No pending tasks
              </div>
            </div>
          </div>

          {/* Recent Expenses Card */}
          <div className="flex flex-col bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
            <header className="border-b border-border p-4">
              <h2 className="text-xl font-semibold text-foreground capitalize tracking-tight">
                Recent Expenses
              </h2>
            </header>
            <div className="flex flex-col gap-3 p-4 min-h-[120px]">
              <div className="text-muted-foreground text-sm">
                No recent expenses
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="flex flex-col bg-card border border-border rounded-xl shadow-sm">
          <header className="border-b border-border p-4">
            <h2 className="text-xl font-semibold text-foreground capitalize tracking-tight">
              Quick Access
            </h2>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            {quickActions.map((action, i) => (
              <div
                className="group flex items-center gap-3 bg-secondary/50 hover:bg-secondary p-4 rounded-lg border border-border/50 hover:border-border cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-sm"
                key={i}
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-200">
                  <action.icon className="w-5 h-5 text-amber-900" />
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-foreground/90 transition-colors duration-200">
                  {action.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Report Section */}
        <div className="flex flex-col bg-card border border-border rounded-xl shadow-sm">
          <header className="border-b border-border p-4">
            <h2 className="text-xl font-semibold text-foreground capitalize tracking-tight">
              Monthly Report
            </h2>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-6">
            {/* Monthly Report Card */}
            <div className="lg:col-span-2 flex flex-col bg-secondary/30 border border-border/50 rounded-lg p-5">
              <header className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Monthly Summary
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Overview of this month's activity
                </p>
              </header>
              <div className="flex flex-col gap-3 flex-1">
                <div className="text-muted-foreground text-sm">
                  No data available
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center items-center lg:py-0 py-4">
              <div className="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent"></div>
              <div className="hidden lg:block w-px h-full bg-gradient-to-b from-transparent via-amber-300/60 to-transparent"></div>
            </div>

            {/* Day-to-Day Expenses Card */}
            <div className="lg:col-span-2 flex flex-col bg-secondary/30 border border-border/50 rounded-lg p-5">
              <header className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Daily Expenses
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Track your day-to-day spending
                </p>
              </header>
              <div className="flex flex-col gap-3 flex-1">
                <div className="text-muted-foreground text-sm">
                  No expenses recorded
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
