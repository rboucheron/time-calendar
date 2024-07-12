import { ReactNode } from "react";

interface PoppupProps {
  children: ReactNode;
}

const Poppup: React.FC<PoppupProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-full max-w-lg bg-[#2A2B34] border border-gray-700 rounded-lg shadow-lg overflow-hidden">
        {children}
      </div>
    </div>
  );
};

interface SectionProps {
  children: ReactNode;
}

export const HeaderPoppup: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-700">
      <h2 className="text-xl font-bold text-white">{children}</h2>
    </div>
  );
};

export const BodyPoppup: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className="p-6">
      <div className="text-white mb-4">{children}</div>
    </div>
  );
};

export const FooterPoppup: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className="flex justify-end p-4 border-t border-gray-700">{children}</div>
  );
};

export default Poppup;