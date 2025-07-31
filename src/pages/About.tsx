import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

function About() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
            About Us
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            We are passionate about creating amazing experiences and building
            the future of web development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              Our Mission
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              To empower developers and businesses with cutting-edge technology
              solutions that drive innovation and growth.
            </p>
            <p className="mb-6 text-lg text-gray-600">
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
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              Our Values
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 mt-2 bg-green-500 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Innovation</h3>
                  <p className="text-gray-600">
                    Constantly pushing boundaries and exploring new
                    possibilities
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 mt-2 bg-green-500 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Quality</h3>
                  <p className="text-gray-600">
                    Delivering excellence in everything we do
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 mt-2 bg-green-500 rounded-full"></div>
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
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Our Team
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
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

            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"></div>
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

            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
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
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Get in Touch
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Ready to start your next project? We'd love to hear from you!
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 font-semibold text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700">
              Contact Us
            </button>
            <button className="px-6 py-3 font-semibold text-green-600 transition-colors border border-green-600 rounded-lg hover:bg-green-50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
