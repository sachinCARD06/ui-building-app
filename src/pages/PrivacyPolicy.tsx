import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Privacy Policy</h1>

      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Introduction
          </h2>
          <p>
            We respect your privacy and are committed to protecting your
            personal data. This privacy policy explains how we collect, use, and
            safeguard your information when you use our services.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Information We Collect
          </h2>
          <ul className="ml-6 list-disc">
            <li>
              Personal identification information (Name, email address, phone
              number)
            </li>
            <li>Usage data and analytics</li>
            <li>Cookies and tracking information</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            How We Use Your Information
          </h2>
          <ul className="ml-6 list-disc">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>
              To gather analysis or valuable information to improve our service
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Data Protection
          </h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please{' '}
            <Link to="/contact" className="text-blue-600 hover:text-blue-800">
              contact us
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
