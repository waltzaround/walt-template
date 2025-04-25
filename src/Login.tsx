import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

interface LoginFormData {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof LoginFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }

  function validateForm(): boolean {
    const newErrors: Partial<LoginFormData> = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to dashboard on successful login
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 flex justify-center items-center gap-4">
            <svg
              viewBox="0 0 71 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
            >
              <path
                d="M4.285 58.537h65.909v-9.38c-.706-2.827-1.933-5.479-3.53-6.892-2.985-2.663-3.984-5.271-7.057-8.24-2.16-2.083-4.56-3.43-7.35-4.471-2.053-.768-3.845-1.13-6.027-1.13-2.856 0-5.006.494-6.57.757-2.811.482-4.484 1.337-9.077 2.915-1.585.548-4.375.81-5.841 1.633-1.27.7-4.789 3.594-10.478 6.41-2.15 1.063-5.375 3.101-6.754 5.073-1.705 2.455-.37 3.627-1.716 6.301-.846 1.699-.608 3.869-1.509 7.013v.011ZM65.909 0H0v9.38c.706 2.827 1.933 5.479 3.529 6.893 2.986 2.662 3.985 5.27 7.058 8.24 2.16 2.082 4.56 3.43 7.35 4.47 2.053.768 3.844 1.13 6.027 1.13 2.856 0 5.005-.494 6.569-.757 2.812-.482 4.484-1.336 9.077-2.914 1.586-.548 4.376-.811 5.842-1.633 1.27-.701 4.788-3.594 10.478-6.41 2.15-1.064 5.375-3.102 6.754-5.074 1.704-2.455.369-3.627 1.715-6.3.847-1.7.608-3.87 1.51-7.014V0Z"
                className="fill-primary"
              />
            </svg><svg viewBox="0 0 224 54" fill="#fff" xmlns="http://www.w3.org/2000/svg" className="h-12 mt-2"><path d="M222.043 19.742c-6.647.048-8.412 3.62-10.906 20.281l-4.835.516-.777-.516 2.811-22.507-4.518 2.331-.672-1.032c1.976-2.33 7.07-4.662 9.66-5.178l1.659 1.348-2.542 11.75h.259c2.811-9.983 6.187-13.088 10.705-13.088l-.834 6.104-.01-.009ZM222.398 38.572l-.624 1.805h-.7l-.623-1.796-.096 1.796h-.691l.211-3.267h.672l.872 2.58.873-2.58h.672l.201 3.267h-.69l-.096-1.806h.019ZM218.571 37.74v2.637h-.69V37.74h-.864v-.64h2.418v.64h-.864ZM127.607 19.847l-.672-1.032c1.976-2.33 7.07-4.662 9.66-5.178l1.659 1.348-2.542 11.75h.259c2.859-10.241 6.859-13.088 10.235-13.088 3.166 0 4.835 2.073 4.154 7.757l-1.823 15.266 4.576-2.33.729 1.031c-1.976 2.331-6.907 4.652-9.506 5.178l-1.823-1.29 2.235-17.597c.307-2.589 0-3.878-1.554-3.878-2.129 0-5.87 6.362-8.259 22.249l-4.834.516-.777-.516 2.81-22.507-4.518 2.33-.009-.009ZM10.13 23.248v14.97l3.894.516v1.29H0v-1.29l3.894-.516V5.613L0 3.578v-1.29h16.364c7.79 0 11.953 4.137 11.953 9.83 0 5.179-3.636 11.13-14.552 11.13h-3.636Zm3.117-2.073c6.494 0 8.576-3.983 8.576-8.54 0-4.137-1.554-8.283-7.012-8.283h-4.672v16.814h3.118l-.01.01ZM41.986 40.224c-1.612-.66-2.072-2.245-2.072-3.821h-.106c-2.906 2.799-4.575 4.136-7.693 4.136-3.117 0-5.717-4.136-5.717-7.652 0-3.21 2.6-4.881 6.753-5.608l6.907-1.423.105-3.43c.048-4.136-1.295-6.21-4.412-6.21-4.058 0-3.377 4.395-3.118 6.984h-5.352c-.672-3.468 4.834-9.572 11.587-9.572 4.672 0 7.588 2.589 7.53 6.983l-.201 12.763c0 2.694.028 4.013 2.474 3.898 1.353-.067 2.092-.334 2.744-.506v.946c-2.36 1.891-4.892 2.808-7.252 2.808a7.637 7.637 0 0 1-2.149-.286M40 27.556l-4.777 1.319c-1.976.468-2.906 1.777-2.647 3.592.306 1.863 1.553 4.089 3.07 4.089 1.822 0 2.81-.774 4.258-1.816l.106-7.184H40Z" fill="#fff"></path><path d="M187.022 28.894c.307 3.62 2.081 6.62 5.295 6.62 1.093 0 2.906-.152 7.376-3.257l.518 1.29c-2.801 4.031-7.012 6.983-10.446 6.983-14.6 0-6.859-26.911 6.341-26.911 7.693 0 7.587 8.54-2.447 12.572l-6.647 2.694.01.01Zm0-1.758 4.623-2.483c5.353-2.847 5.094-7.5 2.024-7.5-3.482 0-6.283 4.3-6.647 9.983ZM59.453 32.782c0 2.952.94 4.3 3.635 4.3 1.458 0 2.907-.306 4.672-.67v1.032c-2.6 2.073-5.718 3.105-8.317 3.105-3.636 0-6.235-1.815-6.235-6.21V16.475H50.35v-2.073l2.858-.774 4.672-7.241h1.553v7.757h7.012v2.33h-7.012v16.299l.02.01Z" fill="#fff"></path><path d="m179.058 6.08-3.846 30.58 4.47-2.33.671 1.031c-1.976 2.331-7.012 4.653-9.611 5.178l-1.66-1.29 2.542-11.75h-.259c-2.858 10.193-7.012 13.04-10.906 13.04-9.094 0-6.235-24.628 12.057-26.386l1.142-10.088-4.777 2.331-.672-1.032c1.976-2.33 7.329-4.662 9.928-5.177l1.66 1.347-.729 4.556-.01-.01Zm-15.434 30.323c2.494 0 6.187-5.379 8.518-20.177-10.187.105-13.611 20.177-8.518 20.177ZM68.03 38.734l3.894-.516V3.024l-3.377-.258v-1.29L77.69.186h.47v18.362h.105c2.494-2.8 5.976-4.92 9.765-4.92 3.482 0 6.753 2.073 6.753 7.757V38.2l3.895.516v1.29H85.689v-1.29l2.858-.516V21.643c0-2.331-1.352-3.879-3.53-3.879-2.34 0-4.316.937-6.858 2.59v17.854l3.894.516v1.29H68.03v-1.29.01Z" fill="#fff"></path><path d="m125.9 34.301-4.633 2.331 2.858-23.07h-.412l-8.278.515h-5.66c.221-5.684.106-8.368 2.676-8.96 2.14-.516 4.941-.373 7.626 1.327l3.166-3.668c-2.197-1.787-4.134-2.55-5.842-2.408-4.527.278-11.021 5.713-13.256 13.7l-4.73.43v1.93h4.413l-2.964 23.567c-.988 8.092.048 10.108-7.597 8.655l-.576 5.34c4.739 0 12.758-6.38 13.746-13.995l3.022-23.587h5.611l3.022.258-2.859 22.555 1.823 1.3c2.599-.516 7.549-2.847 9.525-5.188l-.681-1.041v.01Z" fill="#fff"></path></svg>
          </div>
          
          <Card className="border-none shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    isError={!!errors.email}
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a 
                      href="#" 
                      className="text-sm font-medium text-primary hover:underline"
                      onClick={(e) => e.preventDefault()}
                    >
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    isError={!!errors.password}
                    disabled={isLoading}
                  />
                  {errors.password && (
                    <p className="text-sm text-destructive">{errors.password}</p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Remember me
                  </label>
                </div>
                <Link to="/home" className="w-full">
                  <Button type="button" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : null}
                    {isLoading ? "Signing in..." : "Sign in"}
                  </Button>
                </Link>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" type="button" disabled={isLoading}>
                  <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" type="button" disabled={isLoading}>
                  <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="currentColor" />
                  </svg>
                  Facebook
                </Button>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Don't have an account?{" "}
                <a 
                  href="#" 
                  className="font-medium text-primary hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    // Navigate to sign up page
                  }}
                >
                  Sign up
                </a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
