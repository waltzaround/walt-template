import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import BlurText from "./components/BlurText";
import Orb from './components/Orb';
import { LineChart, DollarSign, ArrowUpRight, ArrowDownRight, Clock, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Extend Window interface to include our custom property
declare global {
  interface Window {
    openMobileSidebar?: () => void;
  }
}

function App() {
  const [activeTab, setActiveTab] = useState("overview");

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const handleMobileMenuClick = () => {
    // Use the openMobileSidebar function exposed by the Sidebar component
    if (typeof window !== 'undefined' && window.openMobileSidebar) {
      window.openMobileSidebar();
    }
  };

  const portfolioData = [
    { name: "NZ Stocks", value: 45, change: 2.4 },
    { name: "International Stocks", value: 45, change: 2.4 },
    { name: "Bonds", value: 25, change: -0.8 },
    { name: "Real Estate", value: 15, change: 1.2 },
    { name: "Cash", value: 5, change: 0 }
  ];

  const recentContributions = [
    { id: 1, type: "deposit", amount: "$1,250.00", date: "Today", status: "Completed" },
    { id: 2, type: "deposit", amount: "$950.25", date: "Apr 23, 2025", status: "Completed" },
    { id: 3, type: "deposit", amount: "$1,100.00", date: "Apr 15, 2025", status: "Completed" },
    { id: 4, type: "deposit", amount: "$1,200.00", date: "Apr 8, 2025", status: "Completed" },
    { id: 5, type: "deposit", amount: "$1,000.00", date: "Apr 1, 2025", status: "Completed" },
    { id: 6, type: "deposit", amount: "$1,150.00", date: "Mar 25, 2025", status: "Completed" }
  ];

  const contributions = [
    { id: 1, date: "Apr 25, 2025", amount: "$1,250.00", change: 8.5 },
    { id: 2, date: "Apr 18, 2025", amount: "$1,150.00", change: 5.2 },
    { id: 3, date: "Apr 11, 2025", amount: "$1,000.00", change: 3.8 },
    { id: 4, date: "Apr 4, 2025", amount: "$950.00", change: -1.2 },
    { id: 5, date: "Mar 28, 2025", amount: "$1,100.00", change: 6.5 },
    { id: 6, date: "Mar 21, 2025", amount: "$1,050.00", change: 4.2 }
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar defaultCollapsed={false} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header 
          title="Investment Dashboard" 
          onMobileMenuClick={handleMobileMenuClick}
        />
        <main className="flex-1 overflow-auto p-4 sm:p-6 bg-muted/10">



<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={true}
  />
  <div style={{ 
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    textAlign: 'center'
  }}>
    <p className="font-normal tracking-tight text-xl mb-2">Your Portfolio</p>
    <BlurText
      text="$127,893.45"
      delay={150}
      animateBy="letters"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      className="text-5xl font-semibold tracking-tight"
    />
  </div>
</div>


          <div className="mx-auto max-w-7xl space-y-6">
            {/* Portfolio Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="col-span-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Gains this Month</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="text-3xl font-semibold tracking-tight">+$12,456.78</div>
                  <div className="flex items-center mt-1">
                    <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm font-medium text-green-500">+2.5%</span>
                    <span className="text-xs text-muted-foreground ml-1">this month</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Gain/Loss</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-semibold tracking-tight">+$12,456.78</div>
                  <div className="flex items-center mt-1">
                    <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm font-medium text-green-500">+10.8%</span>
                    <span className="text-xs text-muted-foreground ml-1">all time</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Your contributions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-semibold tracking-tight">$427.50</div>
                  <div className="flex items-center mt-1">
                    <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm font-medium text-green-500">+3.2%</span>
                    <span className="text-xs text-muted-foreground ml-1">vs last month</span>
                  </div>
                </CardContent>
              </Card>
              
              
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-border">
              <Button 
                variant={activeTab === "overview" ? "default" : "ghost"}
                className="rounded-none border-b-2 border-transparent px-4 py-2 -mb-px"
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </Button>
              <Button 
                variant={activeTab === "portfolio" ? "default" : "ghost"}
                className="rounded-none border-b-2 border-transparent px-4 py-2 -mb-px"
                onClick={() => setActiveTab("portfolio")}
              >
                Portfolio
              </Button>
              <Button 
                variant={activeTab === "activity" ? "default" : "ghost"}
                className="rounded-none border-b-2 border-transparent px-4 py-2 -mb-px"
                onClick={() => setActiveTab("activity")}
              >
                Activity
              </Button>
              <Button 
                variant={activeTab === "market" ? "default" : "ghost"}
                className="rounded-none border-b-2 border-transparent px-4 py-2 -mb-px"
                onClick={() => setActiveTab("market")}
              >
                Market
              </Button>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Portfolio Allocation */}
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Portfolio Allocation</CardTitle>
                  <CardDescription>Your current investment distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <div className="flex flex-col items-center w-full">
                      <div className="w-full h-48 relative border border-border rounded-md overflow-hidden">
                        {/* Proportional rectangles based on portfolioData */}
                        <div className="flex h-full">
                          {portfolioData.map((item, index) => {
                            // Generate a different color for each item
                            const hues = [210, 160, 30, 280, 340]; // Blue, Green, Yellow, Purple, Red
                            
                            return (
                              <div 
                                key={item.name}
                                className="h-full flex flex-col justify-end relative group"
                                style={{ 
                                  width: `${item.value}%`,
                                  backgroundColor: `hsl(${hues[index]}, 70%, 50%, 0.2)`,
                                  borderLeft: index > 0 ? '1px solid var(--border)' : 'none',
                                  transition: 'all 0.3s ease'
                                }}
                              >
                                {/* Hover overlay with details */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm">
                                  <span className="font-medium">{item.name}</span>
                                  <span className="text-2xl font-bold">{item.value}%</span>
                                  <div className="flex items-center mt-1">
                                    {item.change > 0 ? (
                                      <span className="text-sm text-green-500 flex items-center">
                                        <ArrowUpRight className="h-4 w-4 mr-1" />
                                        +{item.change}%
                                      </span>
                                    ) : item.change < 0 ? (
                                      <span className="text-sm text-red-500 flex items-center">
                                        <ArrowDownRight className="h-4 w-4 mr-1" />
                                        {item.change}%
                                      </span>
                                    ) : (
                                      <span className="text-sm text-muted-foreground">0%</span>
                                    )}
                                  </div>
                                </div>
                                
                                {/* Label at the bottom */}
                                <div className="p-2 text-xs font-medium truncate">
                                  {item.name}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-5 gap-4">
                        {portfolioData.map((item, index) => {
                          // Generate a different color for each item (same as above)
                          const hues = [210, 160, 30, 280, 340]; // Blue, Green, Yellow, Purple, Red
                          const hue = hues[index % hues.length]; // Use modulo to handle more than 5 items
                          
                          return (
                            <div key={item.name} className="flex items-center">
                              <div 
                                className="h-3 w-3 rounded-full mr-2" 
                                style={{ backgroundColor: `hsl(${hue}, 70%, 50%, 0.7)` }}
                              ></div>
                              <div className="flex flex-col">
                                <span className="text-sm font-medium">{item.name}</span>
                                <div className="flex items-center">
                                  <span className="text-xs text-muted-foreground">{item.value}%</span>
                                  {item.change > 0 ? (
                                    <span className="text-xs text-green-500 ml-2 flex items-center">
                                      <ArrowUpRight className="h-3 w-3 mr-0.5" />
                                      {item.change}%
                                    </span>
                                  ) : item.change < 0 ? (
                                    <span className="text-xs text-red-500 ml-2 flex items-center">
                                      <ArrowDownRight className="h-3 w-3 mr-0.5" />
                                      {Math.abs(item.change)}%
                                    </span>
                                  ) : (
                                    <span className="text-xs text-muted-foreground ml-2">0%</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Contributions */}
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Recent Contributions</CardTitle>
                  <CardDescription>Your latest investment activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentContributions.map((contribution) => (
                      <div key={contribution.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            contribution.type === "deposit" 
                              ? "bg-green-100 text-green-600" 
                              : contribution.type === "withdrawal" 
                              ? "bg-red-100 text-red-600"
                              : "bg-blue-100 text-blue-600"
                          }`}>
                            {contribution.type === "deposit" && <ArrowUpRight className="h-4 w-4" />}
                            {contribution.type === "withdrawal" && <ArrowDownRight className="h-4 w-4" />}
                            {contribution.type === "dividend" && <DollarSign className="h-4 w-4" />}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium">{contribution.amount}</p>
                            <p className="text-xs text-muted-foreground capitalize">{contribution.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{contribution.date}</p>
                         
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button variant="ghost" size="sm" className="w-full">View All Contributions</Button>
                </CardFooter>
              </Card>

              {/* Contributions */}
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Updates</CardTitle>
                  <CardDescription>News and reports </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-2.5 text-xs font-medium text-muted-foreground">
                      <div className="col-span-4">Date</div>
                      <div className="col-span-4">Amount</div>
                      <div className="col-span-3">Change</div>
                      <div className="col-span-1"></div>
                    </div>
                    {contributions.map((contribution) => (
                      <div key={contribution.id} className="grid grid-cols-12 border-b px-4 py-3 text-sm">
                        <div className="col-span-4">
                          <div className="font-medium">{contribution.date}</div>
                        </div>
                        <div className="col-span-4 flex items-center">{contribution.amount}</div>
                        <div className="col-span-3 flex items-center">
                          <div className={`flex items-center ${contribution.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {contribution.change > 0 ? (
                              <ArrowUpRight className="h-4 w-4 mr-1" />
                            ) : (
                              <ArrowDownRight className="h-4 w-4 mr-1" />
                            )}
                            {Math.abs(contribution.change)}%
                          </div>
                        </div>
                        <div className="col-span-1 flex justify-end">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Briefcase className="h-4 w-4" />
                            <span className="sr-only">Add to portfolio</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button variant="ghost" size="sm" className="w-full">View Full Contributions</Button>
                </CardFooter>
              </Card>

              {/* Performance Chart */}
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Performance</CardTitle>
                  <CardDescription>Portfolio growth over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center">
                    <LineChart className="h-full w-full text-muted-foreground/50" />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">1 Month</span>
                      <div className="flex items-center text-green-500">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">+2.5%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">3 Months</span>
                      <div className="flex items-center text-green-500">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">+5.8%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">1 Year</span>
                      <div className="flex items-center text-green-500">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">+12.3%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">All Time</span>
                      <div className="flex items-center text-green-500">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">+24.7%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
