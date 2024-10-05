import React from "react";
import Image from "next/image"; // Import the Image component from the appropriate library

// Footer Component to display social media links and footer information
const Footer: React.FC = () => {
  // Define the type for a social media entry
  interface SocialMediaEntry {
    logo: string;
    name: string;
    link: string;
  }

  // Define the type for the user contact information
  interface UserContact {
    [key: string]: SocialMediaEntry; // This allows any string as a key
  }

  // Example data (you can replace this with dynamic data from an API or admin page)
  const userContact: UserContact = {
    facebook: {
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
      name: "Facebook",
      link: "https://www.facebook.com/SauravMahato16",
    },
    instagram: {
      logo: "https://cdn-icons-png.flaticon.com/512/1077/1077042.png",
      name: "Instagram",
      link: "https://www.instagram.com/saurav",
    },
    // Add more entries as needed
  };

  return (
    <div className="mx-[6vw] sm:mx-[10vw] md:mx-[14vw] lg:mx-[16vw] mt-10">
      <h2 className="text-2xl text-center mt-10 mb-4">Contacts</h2>
      <hr className="mb-6"></hr>

      {/* Social Media Icons */}
      <div className="flex flex-wrap gap-4 justify-center my-8">
        {Object.entries(userContact).map(([platform, { logo, name, link }]) => (
          <div key={platform} className="transition-transform transform hover:scale-110">
            <a href={link} target="_blank" rel="noopener noreferrer">
              
              <Image
                src={logo}
                alt={`${name} logo`}
                className="h-10 w-10 sm:h-12 sm:w-12"
                width={20}
                height={20}
              />
            </a>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-sm sm:text-base lg:text-lg mb-8">
        &copy; 2024 SASA Academy. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
