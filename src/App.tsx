import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-foreground">
          Tailwind CSS + shadcn/ui Demo
        </h1>

        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Basic Demo
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => setCount((count) => count + 1)}
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Count is {count}
              </Button>
              <Button className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80">
                Secondary
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Color Scheme
            </h2>
            <div className="grid grid-cols-1 gap-6 p-6 border rounded-lg md:grid-cols-2 bg-card">
              <div>
                <h3 className="mb-4 text-lg font-medium">Light Mode</h3>
                <div className="space-y-2">
                  <Button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                    Primary Button
                  </Button>
                </div>
              </div>
              <div className="dark">
                <h3 className="mb-4 text-lg font-medium">Dark Mode</h3>
                <div className="space-y-2">
                  <Button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                    Primary Button
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
