import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Foot = () => {
  return (
    <div>
      <footer className="bg-[#0f172a] text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">CONTACT US</h2>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p className="mt-2">Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Follow US</h2>
            <p>Join us on social media</p>
            <div className="flex justify-center md:justify-start items-center gap-4 mt-4 text-2xl">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </footer>
        <footer className="footer sm:footer-horizontal footer-center bg-[#0f172a]text-neutral-content p-4">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Bistro Boss Ltd</p>
          </aside>
        </footer>

    </div>
  );
};

export default Foot;