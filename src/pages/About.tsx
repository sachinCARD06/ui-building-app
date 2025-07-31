import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate about creating amazing experiences and building
            the future of web development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              To empower developers and businesses with cutting-edge technology
              solutions that drive innovation and growth.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We believe in the power of collaboration, creativity, and
              continuous learning to solve complex challenges.
            </p>
            <p className="text-lg text-gray-600">
              Our team is dedicated to delivering exceptional value to our
              clients while maintaining the highest standards of quality and
              performance.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Values
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Innovation</h3>
                  <p className="text-gray-600">
                    Constantly pushing boundaries and exploring new
                    possibilities
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Quality</h3>
                  <p className="text-gray-600">
                    Delivering excellence in everything we do
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Collaboration</h3>
                  <p className="text-gray-600">
                    Working together to achieve greater results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-4"></div>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>CEO & Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Visionary leader with 10+ years of experience in technology
                  and business development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mx-auto mb-4"></div>
                <CardTitle>Jane Smith</CardTitle>
                <CardDescription>CTO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Technical expert passionate about building scalable and
                  innovative solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-4"></div>
                <CardTitle>Mike Johnson</CardTitle>
                <CardDescription>Lead Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Full-stack developer with expertise in modern web technologies
                  and best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to start your next project? We'd love to hear from you!
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
              Contact Us
            </button>
            <button className="px-6 py-3 border border-green-600 text-green-600 hover:bg-green-50 font-semibold rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
