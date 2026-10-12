import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"


// Extend Window interface to include our custom property
declare global {
  interface Window {
    openMobileSidebar?: () => void;
  }
}

function App() {



  const handleMobileMenuClick = () => {
    // Use the openMobileSidebar function exposed by the Sidebar component
    if (typeof window !== 'undefined' && window.openMobileSidebar) {
      window.openMobileSidebar();
    }
  };


  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar defaultCollapsed={false} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header 
          title=" AAAA" 
          onMobileMenuClick={handleMobileMenuClick}
        />
        <main className="flex-1 overflow-auto p-4 sm:p-6 bg-muted/10">



<div style={{ width: '100%', height: '600px', position: 'relative' }}>

  <div style={{ 
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    textAlign: 'center'
  }}>
    <p className="font-normal tracking-tight text-xl mb-2">heading</p>
  
  </div>
</div>


      
        </main>
      </div>
    </div>
  );
}

export default App;
