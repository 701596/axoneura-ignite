import type { Metadata } from 'next';
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: 'Privacy Policy — Axoneura & EduOpus',
  description: 'Privacy Policy for Axoneura and the EduOpus school management platform.',
  alternates: {
    canonical: 'https://axoneura.in/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <SectionWrapper className="!pt-28 sm:!pt-36">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">EduOpus Privacy Policy</h1>
        <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
          by Axoneura — Digital Systems for Schools<br/>
          Last updated: April 19, 2026
        </p>

        <div className="text-[15px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.7)" }}>
          <p className="mb-6">
            This Privacy Policy describes how Axoneura (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and protects information when you use EduOpus — our school management platform available at edu-opus.vercel.app and via our Android applications.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Who We Are</h2>
          <p className="mb-6">
            Axoneura is a software development company based in India. EduOpus is our school ERP platform designed to help schools manage students, staff, attendance, fees, homework, and parent communication. For any privacy-related queries, contact us at <a href="mailto:admin@axoneura.in" className="text-white underline">admin@axoneura.in</a>.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We collect the following information when schools use EduOpus:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Student information: name, class, date of birth, address, joining date</li>
            <li>Guardian information: guardian name, guardian phone number</li>
            <li>Fee information: fee amount, fee type, payment records</li>
            <li>Contact details: student email address, student phone number (optional)</li>
            <li>Staff information: name, role, contact details</li>
            <li>Attendance records: daily attendance data per student</li>
            <li>Homework and academic records entered by school staff</li>
            <li>Account credentials: email and encrypted passwords for login</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">All information collected is used solely to provide EduOpus services to schools. Specifically:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To display student records, attendance, and fee information to authorized school staff</li>
            <li>To enable parents to view their child&#39;s attendance, fees, and homework via the Parent Portal</li>
            <li>To send push notifications to parents regarding attendance and fee updates</li>
            <li>To generate reports and receipts for school administration</li>
            <li>To operate and improve the EduOpus platform</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Data Storage and Security</h2>
          <p className="mb-4">
            All data entered into EduOpus is stored securely on encrypted cloud servers with industry-standard access controls and security protocols. We do not store data on local or unprotected servers.
          </p>
          <p className="mb-6">
            We implement reasonable technical and organizational measures to protect your data from unauthorized access, loss, or misuse.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Data Sharing</h2>
          <p className="mb-4">We do not sell, rent, or trade any personal data to third parties. Data is only accessible by:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Our secure cloud infrastructure providers, bound by confidentiality obligations</li>
            <li>Authorized school staff and administrators within your school&#39;s account</li>
          </ul>
          <p className="mb-6">
            We do not use student or parent data for advertising, analytics resale, or any purpose outside of providing the EduOpus service.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Children&#39;s Privacy</h2>
          <p className="mb-6">
            EduOpus is a platform used by schools and is operated by school administrators and teachers. Student data is entered and managed by the school. We do not knowingly collect data directly from children. Schools are responsible for obtaining appropriate consent from parents or guardians before entering student data into EduOpus, in accordance with applicable laws.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. Parent Portal Access</h2>
          <p className="mb-6">
            Parents access EduOpus through a dedicated Parent Portal using credentials provided by their school. Parents can view their child&#39;s attendance, fee status, and homework. Parent phone numbers are used to send push notifications for school updates. Parents wishing to have their data removed should contact their school administrator or reach us at <a href="mailto:admin@axoneura.in" className="text-white underline">admin@axoneura.in</a>.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">8. Data Retention</h2>
          <p className="mb-6">
            We retain school data for as long as the school maintains an active EduOpus account. Upon account termination, schools may request deletion of their data by contacting us at <a href="mailto:admin@axoneura.in" className="text-white underline">admin@axoneura.in</a>. We will process deletion requests within 30 days.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">9. Your Rights</h2>
          <p className="mb-4">Schools and their authorized administrators have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Access all data stored in their EduOpus account</li>
            <li>Correct or update any inaccurate data</li>
            <li>Request deletion of their data</li>
            <li>Export their data at any time</li>
          </ul>
          <p className="mb-6">
            To exercise any of these rights, contact us at <a href="mailto:admin@axoneura.in" className="text-white underline">admin@axoneura.in</a>.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">10. Changes to This Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage schools to review this policy periodically. Continued use of EduOpus after changes constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">11. Contact Us</h2>
          <p className="mb-2">If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:</p>
          <ul className="list-none mb-6">
            <li>Email: <a href="mailto:admin@axoneura.in" className="text-white underline">admin@axoneura.in</a></li>
            <li>Website: <a href="https://axoneura.in" className="text-white underline">axoneura.in</a></li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
