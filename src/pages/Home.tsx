import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

function Home() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            Welcome Home
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            This is your beautiful home page with modern design and smooth
            animations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
            <CardHeader>
              <CardTitle className="text-blue-600">Feature One</CardTitle>
              <CardDescription>
                Amazing feature description goes here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
            <CardHeader>
              <CardTitle className="text-purple-600">Feature Two</CardTitle>
              <CardDescription>
                Another great feature description
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
            <CardHeader>
              <CardTitle className="text-green-600">Feature Three</CardTitle>
              <CardDescription>Yet another amazing feature</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
