import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar defaultCollapsed={false} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header title="Dashboard" />
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Welcome to Your Dashboard</h2>
              <p className="text-muted-foreground">
                This is a boilerplate with a shadcn sidebar and header. You can customize it to fit your needs.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
